var clickMode = false;
var log = function (x) {
  console.log(x)
}
var logJSON = function (x) {
  console.log(JSON.stringify(x))
}

var KEY_H = 72
var KEY_J = 74
var KEY_K = 75
var KEY_L = 76
var KEY_PAGE_UP = 38
var KEY_PAGE_DN = 40
var KEY_PAGE_LEFT = 37
var KEY_PAGE_RGHT = 39



function showDocs(doc, cmd) {
  var $info = $('#info');
  if (doc) {
    $info.find('.cmd').html('<span>' + cmd + '</span>');
    $info.find('.doc').html(doc);
    $info.slideDown()
  } else {
    $info.hide()
  }
}

function showDocsForElement($el) {
  var doc = $el.attr('data-docs') || '',
    cmd = $el.text();
  showDocs(doc, cmd);
}


function currentLoc() {
  return $('#diagram .loc.current').attr('id');
}

function selectLoc(id) {

  id = id || ''

  clickMode = false;
  $('#commands>div').removeClass('selected');
  $('body').removeClass('stash workspace index local_repo remote_repo').addClass(id);
  $('#diagram .loc.current').removeClass('current');
  $('#' + id).addClass('current');

  showDocsForElement($('#' + id));

  window.document.title = '' + id.replace('_', ' ') + ' :: Git Cheatsheet'

  if (!window.location.hash.match(RegExp('loc=' + id))) {
    window.location.href = '#loc=' + id + ';';
    _gaq.push(['_trackEvent', 'git-cheatsheet', 'select-loc', id, null]);
  }
}

function selectCommand($cmd) {
  $('#commands>dt').removeClass('selected');
  $cmd.addClass('selected');

  var doc = $cmd.next('dd').text() || '',
    cmd = 'git ' + $cmd.html();
  showDocs(doc, cmd);

  _gaq.push(['_trackEvent', 'git-cheatsheet', 'select', 'git ' + $cmd.text(), null]);
}



$(function () {

  (function addBarsToLocDivs() {
    jQuery('.loc').append('<div class="bar" />');
  })();


  var popState$ = Rx.Observable.fromEvent(window, 'popstate')
    .startWith(null) // on initial page view
    .map(function () {
      var m = (window.location.hash || '').match(/loc=([^;]*);/);
      if (m && m.length == 2) {
        return m[1]
      }
    })
    .filter(function (loc) {
      return !!loc || loc == ''
    })

  var clickLoc$ = Rx.Observable.fromEvent(document, 'click', '#diagram .loc')
    .filter(function (ev) {
      return $(ev.target).closest('dt').length == 0
    })
    .map(function (ev) {
      return $(ev.target).hasClass('loc') ?
        ev.target.id :
        $(ev.target).closest('.loc').attr('id')
    })

  var clickCmd$ = Rx.Observable.fromEvent(document, 'click', '#commands > dt')
    .map(function (ev) {
      return $(ev.target).is('dt') ? ev.target : $(ev.target).closest('dt').get(0)
    })
    .filter(function(el) {
      return !!el
    })
    .map(function(el) {
      clickMode = !clickMode || (clickMode && !$(el).hasClass('selected'))
      return clickMode ? el : '#nothing'
    })

  var mouseOverDataDoc$ = Rx.Observable.fromEvent(document, 'mousemove', '[data-docs]')
    //.debounce(100)
    .filter(function (ev) {
      return !$(ev.target).is('dt') && $(ev.target).closest('dt').length == 0
    })
    .map(function (ev) {
      return $(ev.target).is('[data-docs]') ? ev.target : $(ev.target).closest('[data-docs]').get(0)
    })
    .filter(function (el) {
      return !clickMode || !$(el).hasClass('loc')
    })
    .distinctUntilChanged()

  var mouseOverCmd$ = Rx.Observable.fromEvent(document, 'mousemove', '#commands>dt:not(:selected)')
    .filter(function () {
      return !clickMode
    })
    .map(function (ev) {
      return $(ev.target).is('dt') ? ev.target : $(ev.target).closest('dt').get(0);
    })
    .filter(function (el) {
      return $(el).is('dt')
    })
    .distinctUntilChanged()


  var keydown$ = Rx.Observable.fromEvent(document, 'keydown')

  var keyDownNextLoc$ = keydown$.filter(function (e) {
    return e.keyCode == KEY_PAGE_RGHT || e.keyCode == KEY_L
  })
  var keyDownPrevLoc$ = keydown$.filter(function (e) {
    return e.keyCode == KEY_PAGE_LEFT || e.keyCode == KEY_H
  })

  // Select a Loc
  clickLoc$
    .merge(keyDownNextLoc$.map(function () {
      return next(locations, currentLoc())
    }))
    .merge(
    keyDownPrevLoc$.map(function () {
      return prev(locations, currentLoc())
    }))
    .merge(popState$)
    .subscribe(function (newLoc) {
      selectLoc(newLoc)
    })

  var keyDownNextCmd$ = keydown$.filter(function (e) {
    return e.keyCode == KEY_PAGE_DN || e.keyCode == KEY_J
  })

  var nextCmd$ = keyDownNextCmd$.map(function () {
    var cmds = $('#commands>dt:visible').toArray();
    return next(cmds, $('#commands>dt.selected')[0]);
  })

  var keyDownPrevCmd$ = keydown$.filter(function (e) {
    return e.keyCode == KEY_PAGE_UP || e.keyCode == KEY_K
  })

  var prevCmd$ = keyDownPrevCmd$.map(function () {
    var cmds = $('#commands>dt:visible').toArray();
    return prev(cmds, $('#commands>dt.selected')[0]);
  })


  // Select a command
  nextCmd$
    .merge(prevCmd$)
    .merge(mouseOverCmd$)
    .merge(clickCmd$)
    .filter(function (el) {
      return !!el
    })
    .subscribe(function (cmd) {
      selectCommand($(cmd))
    })

  mouseOverDataDoc$.subscribe(function (el) {
    showDocsForElement($(el));
    _gaq.push(['_trackEvent', 'git-cheatsheet', 'mouseover', $(el).text(), null]);
  })


  // Figure the language
  var lang = cookies.read('lang') || detectLanguage(navigator);

  // Fallback to English if the language is not translated
  if (!translations[lang]) {
    lang = "en";
  }

  $('[data-lang=' + lang + ']').addClass('selected')

  $('.lang').on('click', function () {
    var newLang = $(this).attr('data-lang');
    cookies.create('lang', newLang)
    _gaq.push(['_trackEvent', 'git-cheatsheet', 'lang', newLang, null])
    document.location.reload();
  })


  // Build locations
  $.each(locations, function (i, loc) {
    $('#' + loc).attr('data-docs', translations[lang].locations.docs[loc]).
      find('h5').html(translations[lang].locations[loc])
  })

  // Build commands
  var leftOffset = $('#commands').empty().offset().left;
  for (var i = 0; i < commands.length; i++) {
    var c = commands[i];
    var cmd = translations[lang].commands[c.key].cmd
    var left = $("#" + c.left + " div.bar").offset().left - leftOffset;
    var right = $("#" + c.right + " div.bar").offset().left - leftOffset;
    var width = right - left;
    if (width < 1) {
      left -= Math.min(90, left + 10)
      width = 220;
    } else {
      left += 10;
      width -= 20;
    }
    var $e = $("<dt>" + esc(cmd) + "<div class='arrow' /></dt>").
      css('margin-left', left + 'px').
      css('width', width + 'px').
      addClass(c.left).
      addClass(c.right).
      addClass(c.direction);
    $('#commands').append($e);

    var docs = translations[lang].commands[c.key].docs
    if (docs) {
      var $doc = $('<dd></dd>').text(esc(docs))
      $('#commands').append($doc)
    }
  }

  //Rx.Observable.interval(1000).subscribe(function (e) {
  //  console.log('clickMode ', clickMode)
  //})

});

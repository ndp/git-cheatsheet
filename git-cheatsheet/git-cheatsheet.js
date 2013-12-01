var clickMode = false;

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

function nextLoc() {
  selectLoc(next(locationKeys(), currentLoc()));
}

function prevLoc() {
  selectLoc(prev(locationKeys(), currentLoc()));
}

function locationKeys() {
  var locs = $('#diagram>.loc').map(function () {
    return this.id
  });
  return $.makeArray(locs);
}

function selectLoc(id, options) {

  options = options || {updateWindowLocation: true, updateTitle: true}

//  console.log('selectLoc id=',id)
  $('#commands>div').removeClass('selected');
  clickMode = false;
  $('body').removeClass('stash workspace index local_repo remote_repo').addClass(id);
  $('#diagram .loc.current').removeClass('current');
  $('#' + id).addClass('current');

  showDocsForElement($('#' + id));

  if (options.updateTitle) {
    window.document.title = '' + id.replace('_', ' ') + ' • Git Cheatsheet • NDP Software'
  }

  if (options.updateWindowLocation) {
    window.location.href = '#loc=' + id + ';';
  }

  _gaq.push(['_trackEvent', 'git-cheatsheet', 'select-loc', id, null]);
}


$(function () {

  (function addBarsToLocDivs() {
    jQuery('.loc').append('<div class="bar" />');
  })();


  $('body').keydown(function (e) {
    var $cmds = $('#commands>dt:visible').toArray();
    if (e.keyCode == 39) {
      nextLoc();
      return false;
    } else if (e.keyCode == 37) {
      prevLoc();
      return false;
    } else if (e.keyCode == 40) {
      var cmd = next($cmds, $('#commands>dt.selected')[0]);
      if (cmd) selectCommand($(cmd));
      return false;
    } else if (e.keyCode == 38) {
      var cmd = prev($cmds, $('#commands>dt.selected')[0]);
      if (cmd) selectCommand($(cmd));
      return false;
    } else {
//      console.log(e);
    }
  });


  // Figure the language
  var lang = cookies.read('lang');
  if (!lang) {
    lang = detectLanguage(navigator)
  }
  $('[data-lang='+lang+']').addClass('selected')

  $('.lang').on('click', function() {
    var newLang = $(this).attr('data-lang');
    cookies.create('lang', newLang)
    _gaq.push(['_trackEvent', 'git-cheatsheet', 'lang', newLang, null])
    document.location.reload();
  })



  // Build locations
  $.each(locationKeys(), function(i, loc) {
    $('#' + loc).attr('data-docs', translations[lang].locations.docs[loc]).
        find('label').html(translations[lang].locations[loc])
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
      left -= 90
      width = 200;
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

  $('body').on('mouseover', ':not(#commands) [data-docs]', function () {
    showDocsForElement($(this));
    _gaq.push(['_trackEvent', 'git-cheatsheet', 'mouseover', $(this).text(), null]);
  });

  $.fn.hoverClass = function (klass) {
    return $(this).hover(function () {
      $(this).addClass(klass);
    }, function () {
      $(this).removeClass(klass);
    });
  }

  function selectCommand($cmd) {
    $('#commands>dt').removeClass('selected');
    $cmd.addClass('selected');

    var doc = $cmd.next('dd').text() || '',
        cmd = 'git ' + $cmd.html();
    showDocs(doc, cmd);

    _gaq.push(['_trackEvent', 'git-cheatsheet', 'select', 'git ' + $cmd.text(), null]);
  };

  $('#commands>dt').click(function (e) {
    clickMode = !clickMode || (clickMode && !$(this).hasClass('selected'));
    if (clickMode) {
      selectCommand($(this));
    } else {
      selectCommand($('#nothing'));
    }
  }).mouseover(function (e) {
        if ($(this).hasClass('selected') || clickMode) return;
        selectCommand($(this));
      });

  $("#diagram .loc").
      click(function () {
        selectLoc(this.id);
      }).hoverClass('hovered');

  // Highlight given location specified by hash.
  window.onpopstate = function (event) {
    var hash = window.location.hash;
    if (hash && hash.length > 1) {
      var m = hash.match(/loc=([^;]*);/);
      if (m && m.length == 2) {
        selectLoc(m[1], {updateWindowLocation: false, updateTitle: true});
      }
    }
  };

  window.onpopstate();

});

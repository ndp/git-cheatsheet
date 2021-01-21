let clickMode = false

const KEY_1 = 49
const KEY_2 = 50
const KEY_3 = 51
const KEY_4 = 52
const KEY_5 = 53
const KEY_H = 72
const KEY_I = 73
const KEY_J = 74
const KEY_K = 75
const KEY_L = 76
const KEY_O = 79
const KEY_R = 82
const KEY_S = 83
const KEY_W = 87
const KEY_FN1 = 112
const KEY_FN2 = 113
const KEY_FN3 = 114
const KEY_FN4 = 115
const KEY_FN5 = 116
const KEY_PAGE_UP = 38
const KEY_PAGE_DN = 40
const KEY_PAGE_LEFT = 37
const KEY_PAGE_RGHT = 39


function showDocs(doc, cmd) {
  const $info = $('#info')
  if (doc) {
    $info.find('.cmd').html('<span>' + cmd + '</span>');
    $info.find('.doc').html(doc);
    // $info.slideDown()
    $info.show()
  } else {
    $info.slideUp()
  }
}

function showDocsForElement (el) {
  const $el = $(el),
        doc = $el.attr('data-docs') || '',
        cmd = $el.text()
  showDocs(doc, cmd)
}


function currentLoc () {

  const diagram = document.getElementById('diagram'),
        el      = (diagram && diagram.querySelector('.loc.current')) || null,
        loc     = el ? el.id : null

  return loc
}

function selectLoc(id) {

  id = id || ''

  clickMode = false;
  $('#commands>div').removeClass('selected');
  $('body').removeClass('stash workspace index local_repo remote_repo').addClass(id);
  $('#diagram .loc.current').removeClass('current');
  if (id)  $(`#${id}`).addClass('current')

  if (id)  showDocsForElement(document.getElementById(id));

  window.document.title = '' + id.replace('_', ' ') + ' :: Git Cheatsheet'

  if (!window.location.hash.match(RegExp('loc=' + id))) {
    window.location.href = '#loc=' + id + ';';
    ga('send', { hitType: 'event', eventCategory: 'git-cheatsheet', eventAction: 'select-loc', eventLabel: id})
  }
}

function showDocsForCmdEl (newEl) {
  const doc = $(newEl).next('dd').text() || '',
        cmd = 'git ' + $cmd.html()

  showDocs(doc, cmd)

  return cmd
}

function selectCommand(newEl) {
  $('#commands>dt.selected').removeClass('selected')

  if (!newEl) return

  $(newEl).addClass('selected')

  const cmd = showDocsForCmdEl(newEl)

  ga('send', { hitType: 'event', eventCategory: 'git-cheatsheet', eventAction: 'select', eventLabel: cmd})
}


$(function () {

  (function addBarsToLocDivs() {
    jQuery('.loc').append('<div class="bar" />');
  })();


  const popStateLoc$ = Rx.Observable.fromEvent(window, 'popstate')
                         .startWith(null) // on initial page view
                         .map(function () {
                           const m = (window.location.hash || '').match(/loc=([^;]*);/)
                           if (m && m.length == 2) {
                             return m[1]
                           }
                         })
                         .filter(function (loc) {
                           return !!loc || loc == ''
                         })

  const clickLoc$ = Rx.Observable.fromEvent(document, 'click', '#diagram .loc')
                      .filter(function (ev) {
                        return $(ev.target).closest('dt').length == 0
                      })
                      .map(function (ev) {
                        return $(ev.target).hasClass('loc') ?
                               ev.target.id :
                               $(ev.target).closest('.loc').attr('id')
                      })

  const clickCmd$ = Rx.Observable.fromEvent(document, 'click', '#commands > dt')
                      .map(function (ev) {
                        return $(ev.target).is('dt') ? ev.target : $(ev.target).closest('dt').get(0)
                      })
                      .filter(function (el) {
                        return !!el
                      })
                      .map(function (el) {
                        clickMode = !clickMode || (clickMode && !$(el).hasClass('selected'))
                        return clickMode ? el : '#nothing'
                      })

  const mouseOverDataDoc$ = Rx.Observable.fromEvent(document, 'mousemove', '[data-docs]')
                              .debounce(100)
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

  const mouseOverCmd$ = Rx.Observable.fromEvent(document, 'mousemove', '#commands>dt:not(:selected)')
                          .filter(function () {
                            return !clickMode
                          })
                          .map(function (ev) {
                            return $(ev.target).is('dt') ? ev.target : $(ev.target).closest('dt').get(0)
                          })
                          .filter(function (el) {
                            return $(el).is('dt')
                          })
                          .distinctUntilChanged()


  const keydown$ = Rx.Observable.fromEvent(document, 'keydown')
  //keydown$.map(function(ev) {return ev.keyCode }).subscribe(log)

  const keyDownNextLoc$ = keydown$
    .filter(e => e.keyCode == KEY_PAGE_RGHT || e.keyCode == KEY_L)
    .tap(e => e.preventDefault())
    .map(e => next(locations, currentLoc()))

  const keyDownPrevLoc$ = keydown$
    .filter(e => e.keyCode == KEY_PAGE_LEFT || e.keyCode == KEY_H)
    .tap(e => e.preventDefault())
    .map(e => prev(locations, currentLoc()))

  const specificLoc$ = keydown$
    .pluck('keyCode')
    .map(function (keyCode) {
      switch (keyCode) {
        case KEY_1:
        case KEY_FN1:
        case KEY_S:
          return 'stash'
        case KEY_2:
        case KEY_FN2:
        case KEY_W:
          return 'workspace'
        case KEY_3:
        case KEY_FN3:
        case KEY_I:
          return 'index'
        case KEY_4:
        case KEY_FN4:
        case KEY_O:
          return 'local_repo'
        case KEY_5:
        case KEY_FN5:
        case KEY_R:
          return 'remote_repo'
      }
    })
    .filter(function (loc) {
      return !!loc
    })

  // Select a Loc
  clickLoc$
    .merge(keyDownNextLoc$)
    .merge(keyDownPrevLoc$)
    .merge(popStateLoc$)
    .merge(specificLoc$)
    .subscribe(selectLoc)

  const keyDownNextCmd$ = keydown$
    .filter(e => e.keyCode === KEY_PAGE_DN || e.keyCode === KEY_J)
    .tap(e => e.preventDefault())

  const visibleCmds = () => {
    let curr      = $('#diagram .loc.current')
    return curr
           ? $(`#commands>dt.${curr.attr('id')}`).toArray()
           : $(`#commands > dt`).toArray()
  }

  const nextCmd$ = keyDownNextCmd$
    .map(() => next(visibleCmds(), $('#commands>dt.selected')[0]))

  const keyDownPrevCmd$ = keydown$
    .filter(e => e.keyCode == KEY_PAGE_UP || e.keyCode == KEY_K)
    .tap(e => e.preventDefault())

  const prevCmd$ = keyDownPrevCmd$
    .map(() => prev(visibleCmds(), $('#commands>dt.selected')[0]))


  nextCmd$
    .merge(prevCmd$)
    .merge(mouseOverCmd$)
    .merge(clickCmd$)
    .filter(el => !!el)
    .subscribe(selectCommand)

  mouseOverDataDoc$.subscribe(function (el) {
    showDocsForElement(el);
    ga('send', { hitType: 'event', eventCategory: 'git-cheatsheet', eventAction: 'mouseover', eventLabel: $(el).text()})
  })

  const lang = setupLang()

  function setupLang() {
    let lang = detectLanguage(navigator)

    // Fallback to English if the language is not translated
    if (!translations[lang]) {
      lang = "en";
    }

    $('html').attr('lang', lang)

    $('[data-lang=' + lang + ']').addClass('selected')

    $('.lang').on('click', function () {
      const newLang = $(this).attr('data-lang')
      cookies.create('lang', newLang)
      ga('send', { hitType: 'event', eventCategory: 'git-cheatsheet', eventAction: 'lang', eventLabel: newLang})
      document.location.reload();
    })


    return lang
  }


  // Build locations
  $.each(locations, function (i, loc) {
    $('#' + loc).attr('data-docs', esc(translations[lang].locations.docs[loc])).
      find('h5').html(translations[lang].locations[loc])
  })


  function buildCommands(commands, translations) {
    $('#commands').empty()

    for (let c of commands) {
      const cmd = translations.commands[c.key].cmd
      const $e = $("<dt>" + esc(cmd) + "<div class='arrow' /></dt>")
        .addClass(c.left)
        .addClass(c.right)
        .addClass(`left-${c.left}`)
        .addClass(`right-${c.right}`)
        .addClass(c.direction)
        .prop('id', `cmd/${c.key}`)
      $('#commands').append($e);

      const docs = translations.commands[c.key].docs
      if (docs) {
        const $doc = $('<dd></dd>').text(esc(docs))
        $('#commands').append($doc)
      }
    }
  }

  function positionCommands(commands) {
    const leftOffset = $('#commands').offset().left

    for (let c of commands) {
      const right = $("#" + c.right + " div.bar").offset().left - leftOffset
      let left    = $("#" + c.left + " div.bar").offset().left - leftOffset
      let width   = right - left
      if (width < 1) {
        left -= Math.min(90, left + 10)
        width = 220;
      } else {
        left += 10;
        width -= 20;
      }

      $(document.getElementById(`cmd/${c.key}`))
        .css('width', width + 'px')
        .css('left', left + 'px')
    }
  }

  buildCommands(commands, translations[lang])
  positionCommands(commands)

  Rx.Observable
    .fromEvent(window, 'resize')
    .debounce(333)
    .subscribe(() => positionCommands(commands))

  $.fn.hoverClass = function (klass) {
    return $(this).hover(function () {
      $(this).addClass(klass);
    }, function () {
      $(this).removeClass(klass);
    });
  }

});

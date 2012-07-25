
var clickMode = false;

function showDocs(doc, cmd) {
  var $info = $('#info');
  $info.find('.cmd').html('<span>' + cmd + '</span>');
  $info.find('.doc').html(doc);
}

function showDocsForElement($el) {
  var doc = $el.attr('data-docs') || '',
      cmd = $el.html();
  showDocs(doc, cmd);
}


function currentLoc() {
  return $('#diagram .loc.current').attr('id');
}

function nextLoc() {
  selectLoc(next(locs(), currentLoc()));
}

function prevLoc() {
  selectLoc(prev(locs(), currentLoc()));
}

function locs() {
  var locs = $('#diagram>.loc').map(function () {
    return this.id
  });
  return $.makeArray(locs);
}

function selectLoc(id) {
//  console.log('selectLoc id=',id)
  $('#commands>div').removeClass('selected');
  clickMode = false;
  $('body').removeClass('stash workspace index local_repo remote_repo').addClass(id);
  $('#diagram .loc.current').removeClass('current');
  $('#' + id).addClass('current');

  showDocsForElement($('#' + id));
  window.location.href = '#loc=' + id + ';';

  _gaq.push(['_trackEvent', 'git-cheatsheet', 'select-loc', id, null]);
}



$(function () {

  (function addBarsToLocDivs() {
    jQuery('.loc').append('<div class="bar" />');
  })();


  $('body').keydown(function (e) {
    var $cmds = $('#commands>div:visible').toArray();
    if (e.keyCode == 39) {
      nextLoc();
      return false;
    } else if (e.keyCode == 37) {
      prevLoc();
      return false;
    } else if (e.keyCode == 40) {
      var cmd = next($cmds, $('#commands>div.selected')[0]);
      if (cmd) selectCommand($(cmd));
      return false;
    } else if (e.keyCode == 38) {
      var cmd = prev($cmds, $('#commands>div.selected')[0]);
      if (cmd) selectCommand($(cmd));
      return false;
    } else {
//      console.log(e);
    }
  });


  var left_offset = $('#commands').offset().left;
  for (i = 0; i < commands.length; i++) {
    c = commands[i];
    var left = $("#" + c.left + " div.bar").offset().left - left_offset;
    var right = $("#" + c.right + " div.bar").offset().left - left_offset;
    var width = right - left;
    if (width < 1) {
      left -= 90
      width = 200;
    } else {
      left += 10;
      width -= 20;
    }
    var $e = $("<div>" + esc(c.cmd) + "<div class='arrow' /></div>").
        css('margin-left', left + 'px').
        css('width', width + 'px').
        addClass(c.left).
        addClass(c.right).
        addClass(c.direction);
    $('#commands').append($e);

    if (c.docs) {
      $e.attr('data-docs', esc(c.docs));
    }
  }


  $('[data-docs]').live('mouseover', function () {
    if ($(this).parents('#commands').length) return; // handled separately
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
    $('#commands>div').removeClass('selected');
    $cmd.addClass('selected');

    var doc = $cmd.attr('data-docs') || '',
        cmd = 'git ' + $cmd.html();
    showDocs(doc, cmd);

    _gaq.push(['_trackEvent', 'git-cheatsheet', 'select', 'git ' + $cmd.text(), null]);
  };

  $('#commands>div').click(function(e) {
    clickMode = !clickMode || (clickMode && !$(this).hasClass('selected'));
    if (clickMode) {
      selectCommand($(this));
    } else {
      selectCommand($('#nothing'));
    }
  }).mouseover(function(e) {
        if ($(this).hasClass('selected') || clickMode) return;
        selectCommand($(this));
      });

  $("#diagram .loc").
      click(function () {
        selectLoc(this.id);
      }).hoverClass('hovered');

  var oldBodyClass = '';
  $('div.stash,div.workspace,div.index,div.local_repo,div.remote_repo').
      click(
      function () {
      }).
      hover(
      function () {
        oldBodyClass = $('body').attr('class');
      },
      function () {
        $('body').attr('class', oldBodyClass);
      });

  // Highlight given location specified by hash.
  var hash = window.location.hash;
  if (hash && hash.length > 1) {
    var m = hash.match(/loc=([^;]*);/);
    if (m && m.length == 2) {
      selectLoc(m[1]);
    }
  }

});

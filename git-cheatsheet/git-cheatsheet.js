

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
  $('body').removeClass('stash workspace index local_repo remote_repo').addClass(id);
  $('#diagram .loc.current').removeClass('current');
  $('#' + id).addClass('current');
  window.location.href = '#loc=' + id + ';';
  _gaq.push(['_trackEvent', 'git-cheatsheet', 'select-loc', id, null]);
}



$(function () {

  (function addBarsToLocDivs() {
    jQuery('.loc').append('<div class="bar" />');
  })();


  $('body').keydown(function (e) {
    if (e.keyCode == 39) {
      nextLoc();
      return false;
    } else if (e.keyCode == 37) {
      prevLoc();
      return false;
    } else if (e.keyCode == 40) {
      console.log('down');
    } else if (e.keyCode == 38) {
      console.log('up');
    } else {
      console.log(e);
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

  function showDocs(doc, cmd) {
    var $info = $('#info');
    $info.find('.cmd').html('<span>' + cmd + '</span>');
    $info.find('.doc').html(doc);
  }


  $('[data-docs]').live('mouseover', function () {
    var doc = $(this).attr('data-docs') || '',
        cmd = $(this).html();
    if ($(this).parent('#commands').length > 0) {
      cmd = 'git ' + cmd;
    }
    showDocs(doc, cmd);

    _gaq.push(['_trackEvent', 'git-cheatsheet', 'mouseover', cmd, null]);
  });

  $.fn.hoverClass = function (klass) {
    return $(this).hover(function () {
      $(this).addClass(klass);
    }, function () {
      $(this).removeClass(klass);
    });
  }

  $('#commands>div').hoverClass('selected');

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

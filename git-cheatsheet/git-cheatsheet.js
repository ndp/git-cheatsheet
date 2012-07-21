
function esc(s) {
  return s.replace(/</g, 'zyx').replace(/>/g, '</em>').replace(/zyx/g, '<em>').
      replace('[','<span class="optional">').replace(']','</span>').
      replace('\r','<br>');
}


$(function() {

  jQuery('.loc').append('<div class="bar" />');

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
    var $e = $("<div>" + esc(c.cmd) + "<div class='arrow' /></div>").css('margin-left', left + 'px').css('width', width + 'px').addClass(c.left).addClass(c.right).addClass(c.direction);
    $('#commands').append($e);

    if (c.docs) {
      $e.attr('data-docs', esc(c.docs));
    }
  }


  $('[data-docs],.loc').live('mouseover', function() {
    var $info = $('#info');
    $info.find('.cmd,.doc').empty();

    var cmd = $(this).html();
    if ($(this).parent('#commands').length > 0) {
      cmd = 'git ' + cmd;
    }
    $('<span>').html(cmd).appendTo($info.find('.cmd'));
    var d = $(this).attr('data-docs') || '';
    $('<span>').html(d).appendTo($info.find('.doc'));
    _gaq.push(['_trackEvent', 'git-cheatsheet', 'mouseover', cmd, null]);
  });

  function selectLoc(id) {
    $('body').removeClass('stash workspace index local_repo remote_repo').addClass(id);
    $('#diagram .loc.current').removeClass('current');
    $('#' + id).addClass('current');
    window.location.href='#loc='+id + ';';
    _gaq.push(['_trackEvent', 'git-cheatsheet', 'select-loc', id, null]);
  }

  $("#diagram .loc").
        click(
             function() {
               selectLoc(this.id);
             }).
        hover(function() {
    $(this).addClass('hovered');
  }, function() {
    $(this).removeClass('hovered');
  });


  var oldBodyClass = '';
  $('div.stash,div.workspace,div.index,div.local_repo,div.remote_repo').
        click(
             function() {

             }).
        hover(
             function() {
               oldBodyClass = $('body').attr('class');
             },
             function() {
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

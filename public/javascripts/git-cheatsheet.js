var commands = [


    { left: "workspace", right: "index", direction: "status", cmd: "status", docs: "Displays paths that have differences between the index file and the current HEAD commit, paths that have differences between the working tree and the index file, and paths in the working tree that are not tracked by git." },
    { left: "workspace", right: "index", direction: "status", cmd: "diff", docs: "Displays the differences are what you _could_ tell git to further add to the index but you still haven't. Stage these changes using git add" },


    { left: "workspace", right: "index", direction: "up", cmd: "add <.|filepaths>", docs: "Adds the current content of new or modified files to the index, thus staging that content for inclusion in the next commit." },
    { left: "workspace", right: "index", direction: "up", cmd: "add -u", docs: "Adds the current content of modified (NOT NEW) files to the index.  This is similar to what 'git commit -a' does in preparation for making a commit."},
    { left: "workspace", right: "index", direction: "up", cmd: "add --interactive", docs: "Add modified contents in the working tree interactively to the index." },

    { left: "workspace", right: "index", direction: "dn", cmd: "checkout <.|paths>", docs: "Updates the named paths in the working tree from the index file. Does NOT switch branches." },


    { left: "workspace", right: "local_repo", direction: "status", cmd: "diff HEAD", docs: "View the changes you have in your working tree relative to the named <commit>. You can use HEAD to compare it with the latest commit, or a branch name to compare with the tip of a different branch" },
    { left: "workspace", right: "local_repo", direction: "dn", cmd: "checkout <HEAD|branch>", docs: "Switches branches by updating the index and working tree to reflect the specified branch, <branch>, and updating HEAD to be <branch>." },
    { left: "workspace", right: "local_repo", direction: "dn", cmd: "checkout -b <name of new branch>", docs: "Create a branch and switch to it" },

    { left: "workspace", right: "local_repo", direction: "dn", cmd: "merge <branch name>", docs: "Merge changes from <branch name> into current branch" },

    { left: "workspace", right: "local_repo", direction: "dn", cmd: "rebase", docs: "Forward-port local commits to the updated upstream head." },


    { left: "workspace", right: "local_repo", direction: "up", cmd: "commit -a -m 'msg'", docs: "Automatically 'add' changes from all known files (ie. all files that are already listed in the index) and to automatically 'rm' files in the index that have been removed from the working tree, and then perform the actual commit" },


    { left: "index", right: "local_repo", direction: "status", cmd: "diff --cached <commit>", docs:
            "View the changes you staged for the next commit relative to the named <commit>. Typically you would want comparison with the latest commit, so if you do not give <commit>, it defaults to HEAD. --staged is a synonym of --cached"},
    { left: "index", right: "local_repo", direction: "up", cmd: "commit -m 'msg'", docs: "Stores the current contents of the index in a new commit along with a log message from the user describing the changes." },
//{ left: "index", right: "local_repo", direction: "up", cmd: "commit --amend" },

    { left: "local_repo", right: "local_repo", direction: "status", cmd: "log" },
    { left: "local_repo", right: "local_repo", direction: "status", cmd: "diff <commit>..<commit>", docs: "View the changes between two arbitrary commits" },
    { left: "local_repo", right: "local_repo", direction: "status", cmd: "branch", docs: "view all existing branches" },

    { left: "local_repo", right: "local_repo", direction: "status", cmd: "branch -d <name>", docs: "delete an unused branch" },

    { left: "local_repo", right: "local_repo", direction: "status", cmd: "branch -D <name>", docs: "force delete of a branch" },

    { left: "workspace", right: "remote_repo", direction: "dn", cmd: "pull <repo> <refspec>", docs: "Fetch from and merge with another repository or a local branch." },
    { left: "local_repo", right: "remote_repo", direction: "dn", cmd: "fetch <repo> <refspec>", docs: "Download objects and refs from another repository." },
    { left: "local_repo", right: "remote_repo", direction: "up", cmd: "push" },
    { left: "local_repo", right: "remote_repo", direction: "up", cmd: "push origin <branch>", docs: "Push new branch to remote repository" },
    { left: "local_repo", right: "remote_repo", direction: "up", cmd: "push origin <branch>:<branch>", docs: "Push new branch to remote repository with a different name" },
    { left: "remote_repo", right: "remote_repo", direction: "status", cmd: "push origin :<branch>", docs: "Remove a remote branch" },


    { left: "stash", right: "workspace", direction: "dn", cmd: "stash save <name>", docs: 'Stashes current changes. Can provide a name.' },
    { left: "stash", right: "workspace", direction: "status", cmd: "stash list", docs: "Show all stashed changes" },
    { left: "stash", right: "workspace", direction: "up", cmd: "stash apply <name>", docs: "Move changes from the specified stash into the workspace. The latest stash is the default." },
    { left: "stash", right: "workspace", direction: "up", cmd: "stash pop", docs: 'Applies the changes from the last (or specified) stash and then removes the given stash.'}

];

function esc(s) {
    return s.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


$(function() {


    jQuery('.loc').append('<div class="bar" />');

    var left_offset = $('#commands').offset().left;
    for (i = 0; i < commands.length; i++) {
        c = commands[i];
        //console.log('cmd: ' + c.cmd + " looking for " + "#"+c.left+" div.bar" + " and found " + $("#"+c.left+" div.bar").length);
        var left = $("#" + c.left + " div.bar").offset().left - left_offset;
        var right = $("#" + c.right + " div.bar").offset().left - left_offset;
        //console.log("left = " + left);
        //console.log("right = " + right);
        //console.log("@" + $("#"+c.left+" div.bar").get(0).position)
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
            $e.hover(function() {
                var $info = $('#info');
                $info.empty();
                $('<span>').addClass('cmd').text('git ' + $(this).text()).appendTo($info);
                $('<span>').addClass('doc').text($(this).attr('data-docs')).appendTo($info);
            })
//            $e.append("<span class='docs'>" + esc(c.docs) + "</span>");
        }

    }


    // When you're outside the windown, make everything highlighted
//    $("body").hover(function() {
//        $.each(['stash','workspace','index','local_repo','remote_repo'], function() {
//            $('body').removeClass(this);
//        });
//    }, function() {
//        $.each(['stash','workspace','index','local_repo','remote_repo'], function() {
//            $('body').addClass(this);
//        });
//    });

    // When you're over a column, highlight it
    $("#diagram .loc").
            click(
                 function() {
                     $('body').removeClass('stash workspace index local_repo remote_repo').addClass(this.id);
                     $('#diagram .loc.current').removeClass('current');
                     $(this).addClass('current');

                 }).
            hover(function() {
        $(this).addClass('hovered');
//        $('body').addClass(this.id);
    }, function() {
        $(this).removeClass('hovered');
//        $('body').removeClass(this.id);
    });


    var oldBodyClass = '';
    $('div.stash,div.workspace,div.index,div.local_repo,div.remote_repo').
            click(
                 function() {

                 }).
            hover(
                 function() {
                     oldBodyClass = $('body').attr('class');
//                     var showing = false;
//                     var $elem = $(this);
//                     $.each(['stash','workspace','index','local_repo','remote_repo'], function(index, value) {
//                         if ($elem.hasClass(value) && $('body').hasClass(value)) showing= true;
//                     });
//                     if (showing) {
//                         $.each(['stash','workspace','index','local_repo','remote_repo'], function(index, value) {
//                             if ($elem.hasClass(value)) {
//                                 $('body').addClass(value);
//                             }
//                         });
//                     }
                 },
                 function() {
                     $('body').attr('class', oldBodyClass);
//                     var $elem = $(this);
//                     $.each(['stash','workspace','index','local_repo','remote_repo'], function(index, value) {
//                         if ($elem.hasClass(value)) {
//                             $('body').removeClass(value);
//                         }
//                     });
                 });


});

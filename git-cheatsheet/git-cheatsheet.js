var commands = [


  { left: "workspace", right: "index", direction: "status",
    cmd: "status",
    tags: 'Basic Snapshotting',
    docs: "Displays paths that have differences between the index file and the current HEAD commit, " +
        "paths that have differences between the workspace and the index file, " +
        "and paths in the workspace that are not tracked by git." },
  { left: "workspace", right: "index", direction: "status",
    cmd: "diff",
    tags: 'Basic Snapshotting, Inspection and Comparison,Patching',
    docs: "Displays the differences not added to the index." },
  { left: "workspace", right: "local_repo", direction: "status",
    cmd: "diff <commit or branch>",
    tags: 'Basic Snapshotting,Inspection and Comparison,Patching',
    docs: "View the changes you have in your workspace relative to the named <commit>. " +
          "You can use HEAD to compare it with the latest commit, or a branch name to compare with the tip of a different branch" },


  { left: "workspace", right: "index", direction: "up",
    cmd: "add <file... or dir...>",
    tags: 'Basic Snapshotting',
    docs: "Adds the current content of new or modified files to the index, thus staging that content for inclusion in the next commit. " +
            "Use 'add --interactive' to add the modified contents in the workspace interactively to the index." },
  { left: "workspace", right: "index", direction: "up",
    cmd: "add -u",
    tags: 'Basic Snapshotting',
    docs: "Adds the current content of modified (NOT NEW) files to the index.  This is similar to what 'git commit -a' does in preparation for making a commit."},
  { left: "workspace", right: "index", direction: "up",
    cmd: "rm <file...>",
    tags: 'Basic Snapshotting',
    docs: "Remove a file from the workspace and the index." },
  { left: "workspace", right: "index", direction: "up",
    cmd: "mv <file...>",
    tags: 'Basic Snapshotting',
    docs: "Move file in the workspace and the index." },

  { left: "workspace", right: "local_repo", direction: "up",
    cmd: "commit -a -m 'msg'",
    tags: 'Basic Snapshotting',
    docs: "Commit all files changed since your last commit, except untracked files (ie. all files that are already listed in the index). " +
          "Remove files in the index that have been removed from the workspace." },

  { left: "workspace", right: "index", direction: "dn",
    cmd: "checkout <file...> or <dir...>",
    tags: 'Branching and Merging',
    docs: "Updates the file or directory in the workspace, overwriting any local changes. Does NOT switch branches." },

  { left: "index", right: "index", direction: "status",
    cmd: "reset HEAD <file1> <file2> ...",
    tags: 'Basic Snapshotting',
    docs: "Remove the specified files from the next commit. " +
          "Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and " +
          "reports what has not been updated." },

  { left: "index", right: "local_repo", direction: "dn",
    cmd: "reset --soft HEAD^",
    tags: 'Basic Snapshotting',
    docs: "Undo the last commit, leaving changes in the the index." },

  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "reset --hard",
    tags: 'Basic Snapshotting',
    docs: "Matches the workspace and index to the local tree. " +
          "WARNING: Any changes to tracked files in the working tree since commit are lost. " +
          "Use this if merging has resulted in conflicts and you'd like to start over. " +
            "Pass ORIG_HEAD to undo the most recent successful merge and any changes after." },


  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "checkout <branch>",
    tags: 'Branching and Merging',
    docs: "Switches branches by updating the index and workspace to reflect the specified branch, <branch>, and updating HEAD to be <branch>." },
  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "checkout -b <name of new branch>",
    tags: 'Branching and Merging',
    docs: "Create a branch and switch to it" },

  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "merge <commit or branch>",
    tags: 'Branching and Merging',
    docs: "Merge changes from <branch name> into current branch. Use --no-commit to leave changes uncommitted." },

  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "rebase <upstream>",
    tags: 'Patching',
    docs: "Reverts all commits since the current branch diverged from <upstream>, and then re-applies them one-by-one on top of changes from the HEAD of <upstream>." },



  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "cherry-pick <sha>",
    tags: 'Patching',
    docs: "Integrate changes in the given commit into the current branch." },
  { left: "workspace", right: "local_repo", direction: "dn",
    cmd: "revert <sha>",
    docs: "Reverse commit specified by <sha> and commit the result. " +
          "This requires your working tree to be clean (no modifications from the HEAD commit)." },

  { left: "index", right: "local_repo", direction: "status",
    cmd: "diff --cached [<commit>]",
    tags: 'Basic Snapshotting,Inspection and Comparison,Patching',
    docs: "View the changes you staged vs the latest commit. Can pass a <commit> to see changes relative to it."},
  { left: "index", right: "local_repo", direction: "up",
    cmd: "commit -m 'msg'",
    tags: 'Basic Snapshotting',
    docs: "Stores the current contents of the index in a new commit along with a log message from the user describing the changes." },
  { left: "index", right: "local_repo", direction: "up",
    cmd: "commit --amend",
    tags: 'Basic Snapshotting',
    docs: 'Modify the last commit with the current index changes.'},

  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "log",
    tags: 'Branching and Merging, Inspection and Comparison',
    docs: 'Show recent commits, most recent on top. Options:' +
          '--decorate    with branch and tag names on appropriate commits' +
          '--stat        with stats (files changed, insertions, and deletions)' +
          '--author=foo  only by a certain author' +
          '--after="MMM DD YYYY" ex. ("Jun 20 2008") only commits after a certain date' +
          '--before="MMM DD YYYY" only commits that occur before a certain date' +
          '--merge       only the commits involved in the current merge conflicts' },
  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "diff <commit> <commit>",
    tags: 'Basic Snapshotting, Inspection and Comparison,Patching',
    docs: "View the changes between two arbitrary commits" },
  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "branch",
    tags: 'Branching and Merging',
    docs: "List all existing branches. Option -r causes the remote-tracking branches to be listed, and option -a shows both." },
  { left: "local_repo", right: "local_repo", direction: "status",
    cmd: "branch -d <branch>",
    tags: 'Branching and Merging',
    docs: "Delete an specified branch. Use -D to force." },
  { left: 'local_repo', right: 'remote_repo', direction: 'dn',
    cmd: "branch --track <new> <remote/branch>",
    tags: 'Branching and Merging',
    docs: 'Create a new local branch that tracks a remote branch.'},


  { left: "workspace", right: "remote_repo", direction: "dn",
    cmd: "clone <repo>",
    tags: 'Creating Projects',
    docs: "Download the repository specified by <repo> and checkout HEAD of the master branch." },
  { left: "workspace", right: "remote_repo", direction: "dn",
    cmd: "pull <remote> <refspec>",
    tags: 'Sharing and Updating',
    docs: "Fetch changes from the remote repo and merge them into the current branch." },
  { left: "workspace", right: "remote_repo", direction: "dn",
    cmd: "reset --hard <remote>/<branch>",
    tags: 'Basic Snapshotting',
    docs: "Reset local repo and working tree to match a remote branch. Use 'reset --hard origin/master' to throw away all commits to the local master branch. Use this to start over on a failed merge." },
  { left: "local_repo", right: "remote_repo", direction: "dn",
    cmd: "fetch <remote> <refspec>",
    tags: 'Sharing and Updating',
    docs: "Download objects and refs from another repository." },
  { left: "local_repo", right: "remote_repo", direction: "up",
    cmd: "push",
    tags: 'Sharing and Updating',
    docs: 'update the server with your commits across all branches that are *COMMON* between your local copy and the server.' +
          'Local branches that were never pushed to the server in the first place are not shared'},
  { left: "local_repo", right: "remote_repo", direction: "up",
    cmd: "push <remote> <branch>",
    tags: 'Sharing and Updating',
    docs: "Push new (or existing) branch to remote repository" },
  { left: "local_repo", right: "remote_repo", direction: "up",
    cmd: "push <remote> <branch>:<branch>",
    tags: 'Sharing and Updating',
    docs: "Push new branch to remote repository with a different name" },

  { left: "remote_repo", right: "remote_repo", direction: "status",
    cmd: "branch -r",
    tags: 'Branching and Merging',
    docs: "List remote branches" },

  { left: "remote_repo", right: "remote_repo", direction: "status",
    cmd: "push <remote> :<branch>",
    tags: 'Sharing and Updating',
    docs: "Remove a remote branch" },

  { left: "workspace", right: "workspace", direction: "dn",
    cmd: "clean",
    tags: 'Administration',
    docs: 'Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.' },

  { left: "stash", right: "workspace", direction: "dn",
    cmd: "stash save [<msg>]",
    tags: 'Branching and Merging',
    docs: 'Save your local modifications to a new stash, and run git reset --hard to revert them. ' +
        'The <message> part is optional and gives the description along with the stashed state. ' +
        'For quickly making a snapshot, you can omit both "save" and <message>.' },
  { left: "stash", right: "workspace", direction: "up",
    cmd: "stash apply [<name>]",
    tags: 'Branching and Merging',
    docs: "Move changes from the specified stash into the workspace. The latest stash is the default." },
  { left: "stash", right: "workspace", direction: "up",
    cmd: "stash pop",
    tags: 'Branching and Merging',
    docs: 'Applies the changes from the last (or specified) stash and then removes the given stash.'},
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash list",
    tags: 'Branching and Merging',
    docs: "List the stashes that you currently have." },
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash show [<stash>]",
    tags: 'Branching and Merging',
    docs: "Show the changes recorded in the stash as a diff between the stashed state and its original parent. " +
        "When no <stash> is given, shows the latest one." },
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash drop [<name>]",
    tags: 'Branching and Merging',
    docs: "Remove a single stashed state from the stash list. When no <stash> is given, it removes the latest one." },
  { left: "stash", right: "stash", direction: "status",
    cmd: "stash clear",
    tags: 'Branching and Merging',
    docs: "Remove all the stashed states. Note that those states will then be subject to pruning, and may be impossible to recover." },
  { left: "stash", right: "local_repo", direction: "up",
    cmd: "stash branch <branchname> [<stash>]",
    tags: 'Branching and Merging',
    docs: 'Creates and checks out a new branch named <branchname> starting from the commit at which the <stash> was originally created, ' +
        'applies the changes recorded in <stash> to the new working tree and index. ' +
        'If that succeeds, and <stash> is a reference of the form stash@{<revision>}, it then drops the <stash>. ' +
        'When no <stash> is given, applies the latest one. \r' +
        'This is useful if the branch on which you ran git stash save has changed enough that git stash apply fails due to conflicts. ' +
        'Since the stash is applied on top of the commit that was HEAD at the time git stash was run, ' +
        'it restores the originally stashed state with no conflicts.' }

];

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

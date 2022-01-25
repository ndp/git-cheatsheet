/*
var canonize = function (k) {
  return k.replace(/\[.*\]/, '').replace(/<[^>]+>/g, 'x').toLowerCase().trim()
}
*/
export const locations = ["stash", "workspace", "index", "local_repo", "remote_repo"]

export const commands = [
  {"left": "workspace",
    "right": "index",
    "direction": "status",
    "key": "status",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "index",
    "direction": "status",
    "key": "diff",
    "tags": "Basic Snapshotting,Inspection and Comparison,Patching"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "status",
    "key": "diff x",
    "tags": "Basic Snapshotting,Inspection and Comparison,Patching"},
  {"left": "workspace",
    "right": "index",
    "direction": "up",
    "key": "add x",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "index",
    "direction": "up",
    "key": "add -u",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "index",
    "direction": "up",
    "key": "rm x",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "index",
    "direction": "up",
    "key": "mv x",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "up",
    "key": "commit -a",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "index",
    "direction": "dn",
    "key": "checkout x",
    "tags": "Branching and Merging"},
  {"left": "index",
    "right": "index",
    "direction": "status",
    "key": "reset head x",
    "tags": "Basic Snapshotting"},
  {"left": "index",
    "right": "local_repo",
    "direction": "dn",
    "key": "reset --soft head^",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "reset --hard",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "reset --hard x/x",
    "tags": "Basic Snapshotting"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "switch",
    "tags": "Branching and Merging"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "checkout -b x",
    "tags": "Branching and Merging"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "merge x",
    "tags": "Branching and Merging"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "rebase x",
    "tags": "Patching"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "cherry-pick x",
    "tags": "Patching"},
  {"left": "workspace",
    "right": "local_repo",
    "direction": "dn",
    "key": "revert x"},
  {"left": "index",
    "right": "local_repo",
    "direction": "status",
    "key": "diff --cached",
    "tags": "Basic Snapshotting,Inspection and Comparison,Patching"},
  {"left": "index",
    "right": "local_repo",
    "direction": "up",
    "key": "commit",
    "tags": "Basic Snapshotting"},
  {"left": "index",
    "right": "local_repo",
    "direction": "up",
    "key": "commit --amend",
    "tags": "Basic Snapshotting"},
  {"left": "local_repo",
    "right": "local_repo",
    "direction": "status",
    "key": "log",
    "tags": "Branching and Merging, Inspection and Comparison"},
  {"left": "local_repo",
    "right": "local_repo",
    "direction": "status",
    "key": "diff x x",
    "tags": "Basic Snapshotting, Inspection and Comparison,Patching"},
  {"left": "local_repo",
    "right": "local_repo",
    "direction": "status",
    "key": "branch",
    "tags": "Branching and Merging"},
  // {"left": "local_repo",
  //   "right": "local_repo",
  //   "direction": "status",
  //   "key": "branch -r",
  //   "tags": "Branching and Merging"},
  {"left": "local_repo",
    "right": "local_repo",
    "direction": "status",
    "key": "branch -d x",
    "tags": "Branching and Merging"},
  {"left": "local_repo",
    "right": "remote_repo",
    "direction": "dn",
    "key": "branch --track x x",
    "tags": "Branching and Merging"},
  {"left": "workspace",
    "right": "remote_repo",
    "direction": "dn",
    "key": "clone x",
    "tags": "Creating Projects"},
  {"left": "workspace",
    "right": "remote_repo",
    "direction": "dn",
    "key": "pull x x",
    "tags": "Sharing and Updating"},
  {"left": "local_repo",
    "right": "remote_repo",
    "direction": "dn",
    "key": "fetch x x",
    "tags": "Sharing and Updating"},
  {"left": "local_repo",
    "right": "remote_repo",
    "direction": "up",
    "key": "push",
    "tags": "Sharing and Updating"},
  {"left": "local_repo",
    "right": "remote_repo",
    "direction": "up",
    "key": "push x x",
    "tags": "Sharing and Updating"},
  {"left": "local_repo",
    "right": "remote_repo",
    "direction": "up",
    "key": "push x x:x",
    "tags": "Sharing and Updating"},
  {"left": "remote_repo",
    "right": "remote_repo",
    "direction": "status",
    "key": "push x :x",
    "tags": "Sharing and Updating"},
  {"left": "workspace",
    "right": "workspace",
    "direction": "dn",
    "key": "clean",
    "tags": "Administration"},
  {"left": "stash",
    "right": "workspace",
    "direction": "dn",
    "key": "stash push",
    "tags": "Branching and Merging"},
  {"left": "stash",
    "right": "workspace",
    "direction": "up",
    "key": "stash pop",
    "tags": "Branching and Merging"},
  {"left": "stash",
    "right": "workspace",
    "direction": "up",
    "key": "stash apply",
    "tags": "Branching and Merging"},
  {"left": "stash",
    "right": "stash",
    "direction": "status",
    "key": "stash list",
    "tags": "Branching and Merging"},
  {"left": "stash",
    "right": "stash",
    "direction": "status",
    "key": "stash show",
    "tags": "Branching and Merging"},
  {"left": "stash",
    "right": "stash",
    "direction": "status",
    "key": "stash drop",
    "tags": "Branching and Merging"},
  {"left": "stash",
    "right": "stash",
    "direction": "status",
    "key": "stash clear",
    "tags": "Branching and Merging"},
  {"left": "stash",
    "right": "local_repo",
    "direction": "up",
    "key": "stash branch x",
    "tags": "Branching and Merging"}
];

export const translations = {
  en: {
    locations: {
      stash: 'stash',
      workspace: 'workspace',
      index: 'index',
      local_repo: 'local repository',
      remote_repo: 'upstream repository',
      docs: {
        stash: 'A place to hide modifications while you work on something else',
        workspace: 'Local checkout',
        index: 'Files you want to commit. Before you “commit” (checkin) files, you need to first add them to the index. Also called "current directory cache", "staging area", "cache" or "staged files".',
        local_repo: 'A subdirectory named `.git` that contains all of your necessary repository files — a Git repository skeleton. Typical branches: `master`, `feature-x`, `bugfix-y`',
        remote_repo: 'Versions of your project that are hosted on the Internet or network, ensuring all your changes are available for other developers. The default name is `origin`. Typical branches here: `master`, `shared-feature-x`, `release-y`'
      }
    },


    commands: {
      "status": {
        "cmd": "status",
        "docs": "Displays: \r• paths that have differences between the index file and the current `HEAD` commit, \r• paths that have differences between the workspace and the index file, and \r• paths in the workspace that are not tracked by git."
      },
      "diff": {"cmd": "diff", "docs": "Displays the differences not added to the index."},
      "diff x": {
        "cmd": "diff <commit or branch>",
        "docs": "View the changes you have in your workspace relative to the named <commit>. You can use `HEAD` to compare it with the latest commit, or a branch name to compare with the tip of a different branch"
      },
      "add x": {
        "cmd": "add <file... or dir...>",
        "docs": "Adds the current content of new or modified files to the index, thus staging that content for inclusion in the next commit. Use `add --interactive` to add the modified contents in the workspace interactively to the index."
      },
      "add -u": {
        "cmd": "add -u",
        "docs": "Adds the current content of modified (NOT NEW) files to the index.  This is similar to what `git commit -a` does in preparation for making a commit."
      },
      "rm x": {"cmd": "rm <file(s)...>", "docs": "Remove a file from the workspace and the index."},
      "mv x": {"cmd": "mv <file(s)...>", "docs": "Move file in the workspace and the index."},
      "commit -a": {
        "cmd": "commit -a [-m 'msg']",
        "docs": "Commit all files changed since your last commit, except untracked files (i.e. all files that are already listed in the index). Remove files in the index that have been removed from the workspace."
      },
      "checkout x": {
        "cmd": "checkout <files(s)... or dir>",
        "docs": "Updates the file or directory in the workspace. Does NOT switch branches."
      },
      "reset head x": {
        "cmd": "reset HEAD <file(s)...>",
        "docs": "Remove the specified files from the next commit. Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated."
      },
      "reset --soft head^": {
        "cmd": "reset --soft HEAD^",
        "docs": "Undo the last commit, leaving changes in the index."
      },
      "reset --hard": {
        "cmd": "reset --hard",
        "docs": "Matches the workspace and index to the local tree. WARNING: Any changes to tracked files in the working tree since commit are lost. Use this if merging has resulted in conflicts and you'd like to start over. Pass `ORIG_HEAD` to undo the most recent successful merge and any changes after."
      },
      "switch": {
        "cmd": "switch <branch>",
        "docs": "Switches branches by updating the index and workspace to reflect the specified branch, <branch>, and updating `HEAD` to be <branch>."
      },
      "checkout -b x": {"cmd": "checkout -b <name of new branch>", "docs": "Create a branch and switch to it"},
      "merge x": {
        "cmd": "merge <commit or branch>",
        "docs": "Merge changes from <branch name> into current branch.\rUse `&#8209;&#8209;no-commit` to leave" +
        " changes uncommitted. Use `--no-ff` to create a merge commit even if the merge resolves as a fast forward."
      },
      "rebase x": {
        "cmd": "rebase <upstream>",
        "docs": "Reverts all commits since the current branch diverged from <upstream>, and then re-applies them one-by-one on top of changes from the `HEAD` of <upstream>."
      },
      "cherry-pick x": {
        "cmd": "cherry-pick <commit>",
        "docs": "Integrate changes in the given commit into the current branch."
      },
      "revert x": {
        "cmd": "revert <commit>",
        "docs": "Reverse commit specified by <commit> and commit the result. This requires your working tree to be clean (no modifications from the `HEAD` commit)."
      },
      "diff --cached": {
        "cmd": "diff --cached [<commit>]",
        "docs": "View the changes you staged vs the latest commit. Can pass a <commit> to see changes relative to it."
      },
      "commit": {
        "cmd": "commit [-m 'msg']",
        "docs": "Stores the current contents of the index in a new commit along with a log message from the user describing the changes."
      },
      "commit --amend": {"cmd": "commit --amend", "docs": "Modify the last commit with the current index changes."},
      "log": {
        "cmd": "log",
        "docs": "Show recent commits, most recent on top. Options:\r`&#8209;&#8209;decorate` with branch and tag names on appropriate commits\r`&#8209;&#8209;stat` with stats (files changed, insertions, and deletions) \r`&#8209;&#8209;author=<author>`  only by a certain author\r`&#8209;&#8209;after=\"MMM DD YYYY\"` ex. (`Jun 20 2008`) only commits after a certain date\r`&#8209;&#8209;before=\"MMM DD YYYY\"` only commits that occur before a certain date \r`&#8209;&#8209;merge` only the commits involved in the current merge conflicts"
      },
      "diff x x": {"cmd": "diff <commit> <commit>", "docs": "View the changes between two arbitrary commits"},
      "branch": {
        "cmd": "branch",
        "docs": "List all existing branches. Option `-r` causes the remote-tracking branches to be listed, and option `-a` shows both."
      },
      "branch -d x": {"cmd": "branch -d <branch>", "docs": "Delete an specified branch. Use `-D` to force."},
      "branch --track x x": {
        "cmd": "branch --track <new> <remote/branch>",
        "docs": "Create a new local branch from a remote-tracking branch."
      },
      "clone x": {
        "cmd": "clone <repo>",
        "docs": "Download the repository specified by <repo> and checkout `HEAD` of the master branch."
      },
      "pull x x": {
        "cmd": "pull <remote> <refspec>",
        "docs": "Incorporates changes from a remote repository into the current branch. In its default mode, `git pull` is shorthand for `git fetch` followed by `git merge FETCH_HEAD`."
      },
      "reset --hard x/x": {
        "cmd": "reset --hard <remote>/<branch>",
        "docs": "Reset local repo and working tree to match a remote-tracking branch. Use `reset &#8209;&#8209;hard origin/master` to throw away all commits to the local master branch. Use this to start over on a failed merge."
      },
      "fetch x x": {"cmd": "fetch <remote> <refspec>", "docs": "Download objects and refs from another repository."},
      "push": {
        "cmd": "push",
        "docs": "Update the server with your commits across all branches that are *COMMON* between your local copy and the server. Local branches that were never pushed to the server in the first place are not shared."
      },
      "push x x": {"cmd": "push <remote> <branch>", "docs": "Push new (or existing) branch to remote repository"},
      "push x x:x": {
        "cmd": "push <remote> <branch>:<branch>",
        "docs": "Push new branch to remote repository with a different name"
      },
      "branch -r": {"cmd": "branch -r", "docs": "List remote branches"},
      "push x :x": {
        "cmd": "push <remote> :<branch>",
        "docs": "Remove a remote branch. Literally \"push nothing to this branch\"."
      },
      "clean": {
        "cmd": "clean",
        "docs": "Cleans the working tree by recursively removing files that are not under version control, starting from the current directory. Use `-n` for a \"dry run\" to see what would be deleted. Use `-f` to delete the files."
      },
      "stash push": {
        "cmd": "stash push [<msg>]",
        "docs": "Save your local modifications to a new stash, and run `git reset &#8209;&#8209;hard` to revert them. The <msg> part is optional and gives the description along with the stashed state. For quickly making a snapshot, you can omit both `push` and <msg>."
      },
      "stash apply": {
        "cmd": "stash apply [<stash>]",
        "docs": "Move changes from the specified stash into the workspace. The latest stash is the default."
      },
      "stash pop": {
        "cmd": "stash pop",
        "docs": "Applies the changes from the last (or specified) stash and then removes the given stash."
      },
      "stash list": {"cmd": "stash list", "docs": "List the stashes that you currently have."},
      "stash show": {
        "cmd": "stash show [<stash>]",
        "docs": "Show the changes recorded in the stash as a diff between the stashed state and its original parent. When no <stash> is given, shows the latest one."
      },
      "stash drop": {
        "cmd": "stash drop [<stash>]",
        "docs": "Remove a single stashed state from the stash list. When no <stash> is given, it removes the latest one."
      },
      "stash clear": {
        "cmd": "stash clear",
        "docs": "Remove all the stashed states. Note that those states will then be subject to pruning, and may be impossible to recover."
      },
      "stash branch x": {
        "cmd": "stash branch <branchname> [<stash>]",
        "docs": "Creates and checks out a new branch named <branchname> starting from the commit at which the <stash> was originally created, applies the changes recorded in <stash> to the new working tree and index. \rIf that succeeds, and <stash> is a reference of the form stash@{<revision>}, it then drops the <stash>. When no <stash> is given, applies the latest one. \rThis is useful if the branch on which you ran `git stash push` has changed enough that `git stash apply` fails due to conflicts. Since the stash is applied on top of the commit that was `HEAD` at the time `git stash` was run, it restores the originally stashed state with no conflicts."
      }
    }
  },


  fr: {
    locations: {
      stash: 'REMISE',
      workspace: 'ESPACE DE TRAVAIL',
      index: 'INDEX',
      local_repo: 'DÉPÔT LOCAL',
      remote_repo: 'DÉPÔT DISTANT',
      docs: {
        stash: 'Un endroit où remiser des modifications pendant que vous travaillez sur autre chose',
        workspace: 'L\'espace de travail local',
        index: 'L\'index (ou "zone de transit") maintient un instantané de l\'espace de travail qui servira de base pour le prochain commit.',
        local_repo: 'Un sous-répertoire nommé .git qui contient tous les fichiers nécessaires au référentiel. Branches typiques : `master`, `fonction-x`, `correctif-y`',
        remote_repo: 'Versions de votre projet qui sont hébergés sur le réseau ou Internet, pour mettre toutes vos modifications à la disposition d\'autres développeurs. Par défaut «origin». Branches typiques : `master`, `fonction-x-partagée`, `version-y`'
      }
    },

    "commands": {
      "status": {"cmd": "status", "docs": "Affiche les chemins des fichiers qui diffèrent entre l'INDEX et la TÊTE du commit courant, ceux des fichiers qui diffèrent entre l'ESPACE_DE_TRAVAIL et l'INDEX, et ceux des fichiers qui sont dans l'ESPACE_DE_TRAVAIL mais ne sont pas encore suivis par git."},
      "diff": {"cmd": "diff", "docs": "Affiche les différences entre l'ESPACE_DE_TRAVAIL et l'INDEX."},
      "diff x": {"cmd": "diff <commit ou branche>", "docs": "Affiche les différences entre l'ESPACE_DE_TRAVAIL et le COMMIT ou la BRANCHE spécifié. Vous pouvez utiliser TÊTE pour comparer avec le dernier commit."},
      "add x": {"cmd": "add <fichier(s) ou dossier(s)>", "docs": "Ajoute à l'INDEX le contenu des FICHIER(S) ou DOSSIER(S), nouveaux ou modifiés, les plaçant ainsi en attente d'inclusion dans le prochain commit. Utilisez 'git add --interactive' pour ajouter de manière interactive à l'INDEX les contenus modifiés dans l'ESPACE_DE_TRAVAIL."},
      "add -u": {"cmd": "add -u", "docs": "Ajoute à l'INDEX le contenu des fichiers (ÉXISTANTS) modifiés. C'est ce que fait 'git commit -a' en préparation à un commit."},
      "rm x": {"cmd": "rm <fichier(s)>", "docs": "Supprime des FICHIER(S) de l'ESPACE_DE_TRAVAIL et de l'INDEX."},
      "mv x": {"cmd": "mv <fichier(s)>", "docs": "Déplace des FICHIER(S) de l'ESPACE_DE_TRAVAIL et de l'INDEX."},
      "commit -a": {"cmd": "commit -a [-m 'message']", "docs": "Fait un commit de tous les fichiers qui ont changé depuis le dernier commit, à l'exception des fichiers non suivis (ie. tous les fichiers qui sont dans l'INDEX). Supprime de l'INDEX les fichiers qui ont été supprimés de l'ESPACE_DE_TRAVAIL."},
      "checkout x": {
        "cmd": "checkout <fichier(s) ou dossier(s)>",
        "docs": "Met à jour les FICHIER(S) ou DOSSIER(S) dans l'ESPACE_DE_TRAVAIL en écrasant toutes les modifications locales. Ne PAS changer de branches."
      },
      "switch": {"cmd": "switch <branche>", "docs": "Échange les branches en mettant à jour l'ESPACE_DE_TRAVAIL et l'INDEX pour charger la BRANCHE spécifiée en positionnant la TÊTE dessus."},
      "reset head x": {"cmd": "reset HEAD <fichier(s)>", "docs": "Supprime les FICHIER(S) spécifiés du prochain commit. Réinitialise l'INDEX mais pas l'ESPACE_DE_TRAVAIL (i.e. les fichiers modifiés sont préservés mais non marqués pour commit) et indique ce qui n'a pas été mis à jour."},
      "reset --soft head^": {"cmd": "reset --soft HEAD^", "docs": "Défait le dernier commit en laissant les modifications dans l'INDEX."},
      "reset --hard": {"cmd": "reset --hard", "docs": "Fait correspondre l'ESPACE_DE_TRAVAIL et l'INDEX avec le DÉPÔT_LOCAL. ATTENTION : toutes les modifications apportées à des fichiers suivis dans l'ESPACE_DE_TRAVAIL depuis le dernier commit sont perdues. Utilisez ceci lorsqu'une fusion a engendré des conflits et que vous souhaitez recommencer. Précisez `ORIG_HEAD` pour défaire la dernière fusion réussie et les modifications qui ont suivi."},
      "checkout -b x": {"cmd": "checkout -b <branche>", "docs": "Crée une nouvelle BRANCHE et se positionne dessus."},
      "merge x": {"cmd": "merge <commit ou branche>", "docs": "Fusionne les modifications du COMMIT ou de la BRANCHE dans la branche courante. Utilisez --no-commit pour ignorer les modifications n'ayant pas encore fait l'objet d'un commit."},
      "rebase x": {"cmd": "rebase <source>", "docs": "Défait tous les commits effectués depuis que la branche à divergé de SOURCE puis les refait tous un par un sur les modifications apportées à la TÊTE de SOURCE."},
      "cherry-pick x": {"cmd": "cherry-pick <commit>", "docs": "Intègre les modifications du COMMIT spécifié dans la branche courante."},
      "revert x": {"cmd": "revert <commit>", "docs": "Défait le COMMIT spécifié puis fait un commit du résultat. Cela nécessite que l'ESPACE_DE_TRAVAIL soit propre (sans modifications sur la TÊTE du commit)."},
      "diff --cached": {"cmd": "diff --cached [COMMIT]", "docs": "Montre les modifications que vous avez placé dans la REMISE par rapport au dernier commit. Vous pouvez préciser un COMMIT pour voir juste les modifications le concernant."},
      "commit": {"cmd": "commit [-m 'message']", "docs": "Enregistre le contenu de l'INDEX dans un nouveau commit en y associant un message utilisateur décrivant les modifications."},
      "commit --amend": {"cmd": "commit --amend", "docs": "Modifie le dernier commit en y apportant les modifications se trouvant dans l'INDEX."},
      "log": {"cmd": "log", "docs": "Montre les commits récents, les plus récents au début. Options : --decorate avec les noms de branches et d'étiquettes sur les commits, --stat avec des statistiques (fichiers modifiés, insertions et suppressions), --author=AUTEUR seuleument d'un certain AUTEUR, --after=\"MMM JJ AAAA\" ex. (\"Jun 20 2008\") limité aux commits faits après une certaine date, --before=\"MMM JJ AAAA\" limité aux commits faits avant une certaine date, --merge limité aux commits concernés par les conflits de fusion courants."},
      "diff x x": {"cmd": "diff <COMMIT_1> <COMMIT_2>", "docs": "Montre les modifications entre deux commits."},
      "branch": {"cmd": "branch", "docs": "Liste les branches locales existantes. L'option -r permet de lister les branches distantes et l'option -a montre les branches locales et distantes."},
      "branch -d x": {"cmd": "branch -d <branche>", "docs": "Supprime la BRANCHE spécifiée. Utilisez -D pour forcer la suppression."},
      "branch --track x x": {"cmd": "branch --track <branche> <branche_distante>", "docs": "Crée une BRANCHE locale qui suit la branche_distante."},
      "clone x": {"cmd": "clone <dépôt_distant>", "docs": "Télécharge le DÉPÔT_DISTANT et se positionne sur la TÊTE de sa branche master."},
      "pull x x": {"cmd": "pull <dépôt_distant> <référence>", "docs": "Récupère les modifications associées à la référence du DÉPÔT_DISTANT et les fusionne dans la branche courante."},
      "reset --hard x/x": {"cmd": "reset --hard <dépôt_distant> <branche>", "docs": "Réinitialise l'ESPACE_DE_TRAVAIL et le DÉPÔT_LOCAL pour les faire correspondre à la BRANCHE du DÉPÔT_DISTANT. Utilisez 'git reset --hard origin/master' pour rejeter tous les commits du DÉPÔT_LOCAL. Utilisez ceci pour reprendre après une fusion qui a échoué."},
      "fetch x x": {"cmd": "fetch <dépôt_distant> <référence>", "docs": "Télécharge les objets et les références associés à la référence du DÉPÔT_DISTANT."},
      "push": {"cmd": "push", "docs": "Met à jour le serveur en appliquant les commits sur toutes les branches *COMMUNNES* au DÉPÔT_LOCAL et au serveur. Les branches locales qui n'ont jamais été poussées sur le serveur ne sont pas partagées."},
      "push x x": {"cmd": "push <dépôt_distant> <branche>", "docs": "Pousse la BRANCHE spécifiée vers le DÉPÔT_DISTANT."},
      "push x x:x": {"cmd": "push <dépôt_distant> <BRANCHE_1>:<BRANCHE_2>", "docs": "Pousse la nouvelle BRANCHE_1 vers le DÉPÔT_DISTANT en la renommant BRANCHE_2."},
      "branch -r": {"cmd": "branch -r", "docs": "Liste les branches distantes."},
      "push x :x": {"cmd": "push <dépôt_distant> :<branche>", "docs": "Supprime la BRANCHE du DÉPÔT_DISTANT."},
      "clean": {"cmd": "clean", "docs": "Nettoie l'ESPACE_DE_TRAVAIL en supprimant récursivement les fichiers qui ne sont pas sous le contrôle de version, en commençant par le répertoire courant."},
      "stash push": {"cmd": "stash push ['message']", "docs": "Enregistre les modifications locales dans la REMISE puis fait un 'git reset --hard' pour les défaire. Le `message` optionnel donne la description associée à l'état enregistré dans la REMISE. Pour faire un instantanné rapide, vous pouvez omettre à la fois \"push\" et le `message`."},
      "stash apply": {"cmd": "stash apply [état]", "docs": "Déplace les modifications associées à l'ÉTAT de la REMISE vers l'ESPACE_DE_TRAVAIL. La dernière REMISE est prise par défaut."},
      "stash pop": {"cmd": "stash pop", "docs": "Applique les modifications du dernier état de la REMISE puis les supprime de la REMISE."},
      "stash list": {"cmd": "stash list", "docs": "Liste les états dans la REMISE."},
      "stash show": {"cmd": "stash show [état]", "docs": "Montre les modifications associées à l'ÉTAT spécifié sous la forme d'un diff entre l'ÉTAT et son parent initial. Lorsqu'aucun ÉTAT n'est précisé, le dernier est montré."},
      "stash drop": {"cmd": "stash drop [état]", "docs": "Supprime l'ÉTAT de la REMISE. Lorsqu'aucun ÉTAT n'est précisé, le dernier est supprimé."},
      "stash clear": {"cmd": "stash clear", "docs": "Supprime tous les états de la REMISE. Notez que ces états seront alors candidats à l'élagage et pourront être impossible à restaurer."},
      "stash branch x": {"cmd": "stash branch <branche> [état]", "docs": "Crée et charge une nouvelle BRANCHE à partir du commit d'où provient l'ÉTAT puis applique les modifications enregistrées dans l'ÉTAT aux nouveaux ESPACE_DE_TRAVAIL et INDEX. Si cela réussit, l'ÉTAT devient une référence de la forme ÉTAT@{RÉVISION} et l'ÉTAT est supprimé. Lorsqu'aucun ÉTAT n'est donné, le dernier est appliqué. Ceci est utile si une branche sur laquelle vous avez fait un 'stash' a suffisemment changée pour que 'stash apply' échoue à cause de conflits. Puisque l'état est apliqué sur le commit qui était en TÊTE au moment où le 'stash' a été effectué, l'état original est restauré sans conflits."
      }
    }
  },
  'zh-cn': {
    locations: {
      stash: '存档库',
      workspace: '工作区',
      index: '暂存区(索引)',
      local_repo: '本地版本库',
      remote_repo: '上游版本库',
      docs: {
        stash: '当你去修改别的东西的时候，隐藏（临时保存）当前的修改',
        workspace: '本地检出',
        index: '索引（暂存区）保存了一份工作(树)的快照,作为下次提交的内容',
        local_repo: '.git 文件夹保存版本库需要的全部信息(Git 版本库的骨架)，一般包括分支<strong>master</strong>, <strong>feature-x</strong>, <strong>bugfix-y</strong>',
        remote_repo: '在网络（局域或因特网）上共享给其他开发者的版本库，一般叫"origin". 一般包括分支<strong>master</strong>, <strong>shared-feature-x</strong>, <strong>release-y</strong>'
      }
    },


    commands: {
      "status": {"cmd": "status", "docs": "显示状态变化，包括1)暂存区与当前的 HEAD 提交之间(即将提交的)，2）工作区与暂存区(下次不会提交)，3）未曾被git追踪 (没有历史记录) "},
      "diff": {"cmd": "diff", "docs": "显示未添加到暂存区的不同"},
      "diff x": {"cmd": "diff <commit or branch>", "docs": "查看工作区与某一提交之间的不同。你也可以使用 HEAD 来对比上一提交，或是用分支名来和分支比较"},
      "add x": {"cmd": "add <file... or dir...>", "docs": "添加当前的新内容或是修改的文件到暂存区，作为下次提交的(部分)内容。用`add --interactive` 来交互式操作"},
      "add -u": {"cmd": "add -u", "docs": "添加当前修改(<strong>不包括新文件</strong>)到暂存区, 这与'git commit -a'准备提交内容的方式一致"},
      "rm x": {"cmd": "rm <file(s)...>", "docs": "从工作区和暂存区删除某个文件"},
      "mv x": {"cmd": "mv <file(s)...>", "docs": "从工作区和暂存区移动文件"},
      "commit -a": {"cmd": "commit -a [-m 'msg']", "docs": "提交上次提交之后的所有修改，1)未追踪的除外(即：所有暂存区有记录的文件)；2)从暂存区删除已在工作区删除的文件"},
      "checkout x": {"cmd": "checkout <files(s)... or dir>", "docs": "更新工作区文件或文件夹，<strong>不会</strong>切换分支"},
      "reset head x": {"cmd": "reset HEAD <file(s)...>", "docs": "从下次提交中移除指定文件。重置暂存区记录但是不处理工作区(即: 文件改动被保留但不会被提交)，同时报告没有被更新的文件"},
      "reset --soft head^": {"cmd": "reset --soft HEAD^", "docs": "恢复上一次提交，保留暂存区的改动"},
      "reset --hard": {"cmd": "reset --hard", "docs": "恢复工作区和暂存区到上次提交的状态，警告： 所有工作区修改都会被丢弃。使用这条命令来解决合并错误，如果你想从头开始的话传入 ORIG_HEAD 来撤销该次提交以来的所有改动"},
      "switch": {"cmd": "switch <branch>", "docs": "切换分支，更改工作区和暂存区为<branch>分支的内容，之后HEAD指向<branch>分支"},
      "checkout -b x": {"cmd": "checkout -b <name of new branch>", "docs": "新建一个分支并且立即切换过去"},
      "merge x": {"cmd": "merge <commit or branch>", "docs": "从<branch name>分支合并到当前分支，使用`&#8209;&#8209;no-commit`可以保持在(已经合并)但未提交状态"},
      "rebase x": {"cmd": "rebase <upstream>", "docs": "衍合：回滚从【当前提交和<upstream>分支分开处】开始直到当前提交的所有提交，将这些提交一一应用到<upstream>分支，结果作为<upstream>的新提交Reverts all commits since the current branch diverged from <upstream>, and then re-applies them one-by-one on top of changes from the HEAD of <upstream>."},
      "cherry-pick x": {"cmd": "cherry-pick <commit>", "docs": "把某个提交移动到当前分支来"},
      "revert x": {"cmd": "revert <commit>", "docs": "回滚<commit>指定的提交，这需要当前工作区是干净的，即相比于 HEAD 提交没有修改"},
      "diff --cached": {"cmd": "diff --cached [<commit>]", "docs": "查看已经暂存的内容和上次提交的区别，也可指定某一提交"},
      "commit": {"cmd": "commit [-m 'msg']", "docs": "暂存区中的当前内容连同提交信息储存为新提交"},
      "commit --amend": {"cmd": "commit --amend", "docs": "用当前暂存去的内容修改最近一次的提交，也可以拿来修改提交信息"},
      "log": {"cmd": "log", "docs": "显示最近的提交，新的在上边。参数:\r`&#8209;&#8209;decorate` 显示分支和tag名字到对应的提交\r`&#8209;&#8209;stat` 显示状态 (文件修改, 添加, 删除) \r`&#8209;&#8209;author=<author>`  只显示某个作者\r`&#8209;&#8209;after=\"MMM DD YYYY\"` 如(\"Jun 20 2008\") 只显示某个日期之后的提交\r`&#8209;&#8209;before=\"MMM DD YYYY\"` 只显示某个日期之前的提交\r`&#8209;&#8209;merge` 只与当前合并冲突有关的提交"},
      "diff x x": {"cmd": "diff <commit> <commit>", "docs": "显示两个提交之间的不同"},
      "branch": {"cmd": "branch", "docs": "显示所有（本地）存在的分支。参数 -r 显示远程追踪分支，参数 -a 显示全部"},
      "branch -d x": {"cmd": "branch -d <branch>", "docs": "删除某个分支，使用—D来强制删除"},
      "branch --track x x": {"cmd": "branch --track <new> <remote/branch>", "docs": "添加一个本地分支来跟踪某个远程分支"},
      "clone x": {"cmd": "clone <repo>", "docs": "下载<repo>指定的版本库，并在工作区迁出master分支的HEAD版本"},
      "pull x x": {"cmd": "pull <remote> <refspec>", "docs": "从远程版本库取得修改到当前分支. 一般来说, `git pull` 相当于 `git fetch` 然后做 `git merge FETCH_HEAD`."},
      "reset --hard x/x": {"cmd": "reset --hard <remote>/<branch>", "docs": "重置本地版本库，让它与远程版本一致；用 `reset &#8209;&#8209;hard origin/master` 来丢弃所有的本地改动；用这个来处理失败的合并，直接从远程开始"},
      "fetch x x": {"cmd": "fetch <remote> <refspec>", "docs": "从远端版本库下载对象和引用(即版本信息)"},
      "push": {"cmd": "push", "docs": "从本地提交推送分支改变到远程，分支为所有推送过的分支"},
      "push x x": {"cmd": "push <remote> <branch>", "docs": "向远端版本库推送新的(已存在的)分支"},
      "push x x:x": {"cmd": "push <remote> <branch>:<branch>", "docs": "向远端版本库推送分支，但是从不同的（本地）分支名"},
      "branch -r": {"cmd": "branch -r", "docs": "显示远程端分支"},
      "push x :x": {"cmd": "push <remote> :<branch>", "docs": "删除一个远程分支，通过向远程分支推送空内容"},
      "clean": {"cmd": "clean", "docs": "从当前文件夹开始递归清理不受版本管理的内容"},
      "stash push": {"cmd": "stash push [<msg>]", "docs": "保存当前修改到新的存档库，并且执行`git reset &#8209;&#8209;hard`来回滚. <msg>是可选的来描述存档。想快速建立存档，省略掉\"push\"和<msg>."},
      "stash apply": {"cmd": "stash apply [<stash>]", "docs": "从某个存档中将改变应用到工作区，默认是最近的存档"},
      "stash pop": {"cmd": "stash pop", "docs": "应用最后一个（或指定的）存档中的改动，然后从存档库丢弃它"},
      "stash list": {"cmd": "stash list", "docs": "显示当前你有的所有存档"},
      "stash show": {"cmd": "stash show [<stash>]", "docs": "显示存档中记录的改动，对比存档生成时的原来状态；不指定<stash>则显示最后一个"},
      "stash drop": {"cmd": "stash drop [<stash>]", "docs": "从存储区中删除单个存档；不指定<stash>则删除最后一个"},
      "stash clear": {"cmd": "stash clear", "docs": "清空存档库。注意相关存档会被清理，此操作<strong>不能被恢复</strong>"},
      "stash branch x": {
        "cmd": "stash branch <branchname> [<stash>]",
        "docs": "新建并检出一个新分支<branchname>, 分支开始于存档建立时的源提交，应用存档的变化作为新的工作区和暂存区。如果成功并且<stash>是以 stash@{<revision>}方式给出的，则从存档库删除它。未给出则使用最后一个存档。这在当前分支运行 stash push 导致冲突时很好用，因为存档应用于它生成时的提交一定不会有冲突发生"
      }
    }
  },
  "zh-tw": {
    locations: {
      stash:       "儲藏區（Stash）",
      workspace:   "工作區（Workspace）",
      index:       "暫存區（Index）",
      local_repo:  "本地倉庫（Local Repository）",
      remote_repo: "遠端倉庫（Upstream Repository）",
      docs:        {
        stash: "當你去修改其他東西時，用來隱藏（臨時保存）當前修改內容的地方",
        workspace:
               "本地專案中存放原始檔案的資料夾，即本地檢出（Local checkout）",
        index:
               "保存你所要提交（commit）的檔案。在提交檔案之前，你必須先將這些檔案添加到 Index 中，因此又稱為「當前目錄快取（current directory cache）」、「暫存區域（staging area）」、「快取（cache）」或「暫存檔案（staged files）」",
        local_repo:
               "有一個名稱為 `.git` 的子目錄，用以保存版本倉庫所需要的全部資訊 —— 亦即 Git 倉庫的骨架。一般典型的分支（branch）會有：`master`, `feature-x`, `bugfix-y` 等",
        remote_repo:
               "存放於區域網路或網際網路上，供其他開發者使用的版本倉庫，預設名稱為 `origin`。一般典型的分支（branch）會有：`master`, `feature-x`, `bugfix-y` 等",
      },
    },

    commands: {
      status:               {
        cmd:  "status",
        docs: "顯示狀態變化，包括了以下文件的路徑：\r• 暫存區與當前 `HEAD` 提交之間的差異（即將提交）\r• 工作區與暫存區之間的差異（下次不會提交）\r• 沒有被 Git 所追蹤（沒有歷史記錄）",
      },
      diff:                 {
        cmd:  "diff",
        docs: "顯示工作區中尚未添加到暫存區中檔案的不同，亦即對比執行 `git add` 命令之前的檔案",
      },
      "diff x":             {
        cmd:  "diff <commit or branch>",
        docs: "查看工作區與某一次提交（commit）之間的不同，你也可以指定 `HEAD` 來對比上一次的提交，或者是使用分支（branch）名稱來和分支進行比較",
      },
      "add x":              {
        cmd:  "add <file... or dir...>",
        docs: "添加當前的更新內容或是修改的文件到暫存區，作為下次提交的部分內容。可以使用 `add --interactive` 進行互動式操作",
      },
      "add -u":             {
        cmd:  "add -u",
        docs: "添加當前修改（但不包含新的文件）到暫存區, 這與 `git commit -a` 準備提交內容的方式一致",
      },
      "rm x":               { cmd: "rm <file(s)...>", docs: "從工作區和暫存區刪除檔案" },
      "mv x":               { cmd: "mv <file(s)...>", docs: "從工作區和暫存區移動檔案" },
      "commit -a":          {
        cmd:  "commit -a [-m 'msg']",
        docs: "提交上次提交之後的所有修改，但未被追蹤的文件（亦即所有暫存區中有記錄的文件）除外，並且會從暫存區刪除已在工作區刪除的文件",
      },
      "checkout x":         {
        cmd:  "checkout <files(s)... or dir>",
        docs: "更新工作區文件或目錄，這並不會切換分支（branch）",
      },
      "reset head x":       {
        cmd:  "reset HEAD <file(s)...>",
        docs: "刪除下一次提交中的指定文件，這會重置索引區記錄但是不會影響到工作樹（也就是說，改動的文件會被保留，但不會被提交），並列出沒有被更新的文件",
      },
      "reset --soft head^": {
        cmd:  "reset --soft HEAD^",
        docs: "恢復上一次提交，保留暫存區的改動",
      },
      "reset --hard":       {
        cmd:  "reset --hard",
        docs: "恢復工作區和暫存區到上次提交的狀態。[警告] 所有工作區中所做的修改都會被丟棄，因此可以使用這條指令來解決合併衝突，會將狀態從新開始。傳入 `ORIG_HEAD` 可以用來撤銷該次提交以來的所有改動",
      },
      switch:               {
        cmd:  "switch <branch>",
        docs: "切換分支，更改工作區和暫存區為 `<branch>` 分支的內容，之後 `HEAD` 會指向 `<branch>` 分支",
      },
      "checkout -b x":      {
        cmd:  "checkout -b <name of new branch>",
        docs: "創建一個分支並且立即切換過去",
      },
      "merge x":            {
        cmd:  "merge <commit or branch>",
        docs: "從 `<branch name>` 分支合併到當前分支。使用 `--no-commit` 可以在合併後保持為尚未提交的狀態；使用 `--no-ff` 可以創建一個合併的提交狀態，即使合併的分支內容是自己的直接後代（fast-forward）",
      },
      "rebase x":           {
        cmd:  "rebase <upstream>",
        docs: "回滾當前分支與 `<upstream>` 分開處的所有提交紀錄，將這些提交紀錄一一應用到 `<upstream>` 分支的 `HEAD` 作為新的提交紀錄",
      },
      "cherry-pick x":      {
        cmd:  "cherry-pick <commit>",
        docs: "把某個提交移動到當前分支來",
      },
      "revert x":           {
        cmd:  "revert <commit>",
        docs: "回滾 `<commit>` 指定的提交，這需要當前工作區是乾凈的，即相比於 `HEAD` 提交沒有修改",
      },
      "diff --cached":      {
        cmd:  "diff --cached [<commit>]",
        docs: "查看已經暫存的內容和上次提交的區別，也可指定某一提交",
      },
      commit:               {
        cmd:  "commit [-m 'msg']",
        docs: "暫存區中的當前內容連同提交信息儲存為新提交",
      },
      "commit --amend":     {
        cmd:  "commit --amend",
        docs: "用當前暫存區的內容修改最近一次的提交，也可以拿來修改提交訊息（commit messages）",
      },
      log:                  {
        cmd:  "log",
        docs: '顯示最近的提交紀錄，最新的紀錄會在上方。參數可以為：\r`--decorate` 顯示分支（branch）和標籤（tag）名稱到對應的提交紀錄\r`--stat` 顯示狀態（文件修改、添加或刪除）\r`--author=<author>` 只顯示特定作者的提交紀錄\r`--after="MMM DD YYYY"` 只顯示特定時間之後的提交紀錄，時間格式如 `"Jun 20 2008"`\r`--before="MMM DD YYYY"` 只顯示特定時間之前的提交紀錄\r`--merge` 只顯示與當前合併衝突有關的提交紀錄',
      },
      "diff x x":           {
        cmd:  "diff <commit> <commit>",
        docs: "顯示兩個提交之間的不同",
      },
      branch:               {
        cmd:  "branch",
        docs: "顯示所有（本地）存在的分支。參數 `-r` 顯示遠端追蹤分支，參數 `-a` 顯示全部",
      },
      "branch -d x":        {
        cmd:  "branch -d <branch>",
        docs: "刪除某個分支，使用 `—D` 來強制刪除",
      },
      "branch --track x x": {
        cmd:  "branch --track <new> <remote/branch>",
        docs: "添加一個本地分支來跟蹤某個遠端分支",
      },
      "clone x":            {
        cmd:  "clone <repo>",
        docs: "下載 `<repo>` 指定的版本倉庫，並在工作區中檢出主要分支（通常為 `master` 或 `main` 分支）的 `HEAD` 紀錄",
      },
      "pull x x":           {
        cmd:  "pull <remote> <refspec>",
        docs: "從遠端版本倉庫取得修改到當前分支。一般來說, `git pull` 相當於 `git fetch` 然後做 `git merge FETCH_HEAD`",
      },
      "reset --hard x/x":   {
        cmd:  "reset --hard <remote>/<branch>",
        docs: "重置本地版本倉庫，讓它與遠端版本一致；可以使用 `reset --hard origin/master` 來丟棄所有的本地改動，通常會使用這個指令來處理失敗的合併，紀錄會直接從遠端倉庫開始",
      },
      "fetch x x":          {
        cmd:  "fetch <remote> <refspec>",
        docs: "從遠端版本倉庫下載對象和引用（亦即版本資訊）",
      },
      push:                 {
        cmd:  "push",
        docs: "從本地提交推送分支改變到遠端，分支為所有推送過的分支",
      },
      "push x x":           {
        cmd:  "push <remote> <branch>",
        docs: "向遠端版本倉庫推送新的（已存在的）分支",
      },
      "push x x:x":         {
        cmd:  "push <remote> <branch>:<branch>",
        docs: "向遠端版本倉庫推送分支，但是從不同的（本地）分支名稱推送",
      },
      "branch -r":          { cmd: "branch -r", docs: "顯示遠端倉庫分支" },
      "push x :x":          {
        cmd:  "push <remote> :<branch>",
        docs: "刪除一個遠端分支，通過向遠端分支推送空內容",
      },
      clean:                {
        cmd:  "clean",
        docs: "從當前目錄遞迴地清除沒有進行版本控制的內容",
      },
      "stash push":         {
        cmd:  "stash push [<msg>]",
        docs: "將當前本地的修改保存到新的存檔中，並且執行 `git reset --hard` 回滾。其中 `<msg>` 是可選項，用來描述存檔的說明，如果想要快速創建存檔，可以同時省略掉 `push` 和 `<msg>`",
      },
      "stash apply":        {
        cmd:  "stash apply [<stash>]",
        docs: "將指定存檔 `<stash>` 中的變動應用到工作區中，預設狀態是最近的存檔",
      },
      "stash pop":          {
        cmd:  "stash pop",
        docs: "應用上一次（或指定）的存檔變動，並將其從儲藏區中移除",
      },
      "stash list":         { cmd: "stash list", docs: "顯示目前所有的儲存狀態紀錄" },
      "stash show":         {
        cmd:  "stash show [<stash>]",
        docs: "顯示儲藏區中存檔的改動，對比存檔生成時的原始狀態，如果沒有指定 `<stash>` 則會顯示上一次添加存檔的變動情形",
      },
      "stash drop":         {
        cmd:  "stash drop [<stash>]",
        docs: "從儲藏區中刪除單個狀態，如果沒有指定 `<stash>` 則會刪除上一次添加的存檔",
      },
      "stash clear":        {
        cmd:  "stash clear",
        docs: "清除儲藏區中的所有存檔。注意這個指令會清除相關存檔，並且此操作不能恢復",
      },
      "stash branch x":     {
        cmd:  "stash branch <branchname> [<stash>]",
        docs: "新建並檢出一個新的分支 `<branchname>`，這個分支會以 `<stash>` 存檔建立時的來源進行提交，並將 `<stash>` 中所記錄的狀態應用到新的工作樹與索引上。如果指令執行成功，並且 `<stash>` 是參照到 `stash@{<revision>}` 存檔，則會將該存檔從暫存區中刪除。如果沒有指定 `<stash>`，則會使用最後一個存檔。這個指令在當前分支運行 `git stash push` 導致衝突時十分好用，因為存檔會被應用在 `git stash` 被執行時的 `HEAD` 上，並還原原始存檔狀態所以不會導致衝突",
      },
    },
  },
  es: {
    locations: {
      stash: 'stash',
      workspace: 'workspace',
      index: 'index',
      local_repo: 'repositorio local',
      remote_repo: 'repositorio remoto',
      docs: {
        stash: 'Un lugar para ocultar cambios mientras trabajas en otra cosa',
        workspace: 'Espacio de trabajo: archivos locales posicionados en una rama',
        index: 'El index (o "staging area") contiene una captura del contenido del árbol de trabajo. Esta captura representa a los contenidos del próximo commit.',
        local_repo: 'Un subdirectorio llamado .git que contiene todos los archivos necesarios — un esqueleto del repositorio Git. Ramas típicas: `master`, `feature-x`, `bugfix-y`',
        remote_repo: 'Version(es) del proyecto que están alojadas en Internet o una red, asegurando que todos los cambios están disponibles para otros desarrolladores. Por defecto es "origin". Ramas típicas aquí son: `master`, `shared-feature-x`, `release-y`'
      }
    },


    commands: {
      "status": {"cmd": "status", "docs": "Muestra las localizaciones que tienen diferencias entre el index y el commit `HEAD` actual, localizaciones que tienen diferencias entre el workspace y el index, y localizaciones en el workspace que no están siendo registradas por git"},
      "diff": {"cmd": "diff", "docs": "Muestra las diferencias no añadidas al index."},
      "diff x": {"cmd": "diff <commit or branch>", "docs": "Muestra los cambios que existen en el workspace relativos al <commit> mencionado. Puede usarse `HEAD` para comparar contra el último commit, o el nombre de una rama (branch) para comparar contra otra rama"},
      "add x": {"cmd": "add <file... or dir...>", "docs": "Añade el contenido actual de archivos nuevos o modificados al index, preparando a la vez ese contenido para ser incluído en el próximo commit. Usar `add --interactive` para añadir los contenidos del espacio de trabajo al index de manera interactiva."},
      "add -u": {"cmd": "add -u", "docs": "Añade el contenido actual de los archivos modificados (NO NUEVOS) al index. Es similar a lo que hace 'git commit -a' al prepararse para realizar un commit."},
      "rm x": {"cmd": "rm <file(s)...>", "docs": "Elimina uno o varios archivos del espacio de trabajo e index."},
      "mv x": {"cmd": "mv <file(s)...>", "docs": "Mueve uno o varios archivos del espacio de trabajo e index."},
      "commit -a": {"cmd": "commit -a [-m 'msg']", "docs": "Realiza un commit con todos los cambios en los archivos desde el último commit, excluyendo los archivos no registrados (ej: todos los archivos que están listados en index). Elimina archivos en index que fueron eliminados del espacio de trabajo."},
      "checkout x": {"cmd": "checkout <files(s)... or dir>", "docs": "Actualiza el archivo o directorio en el espacio de trabajo. Esto NO cambia de rama."},
      "reset head x": {"cmd": "reset HEAD <file(s)...>", "docs": "Descarta los archivos especificados del próximo commit. Restablece el index pero no el árbol de trabajo (ej:, los cambios en archivos se mantienen pero no se preparan para commit) y reporta cuales no han sido actualizados."},
      "reset --soft head^": {"cmd": "reset --soft HEAD^", "docs": "Deshace el último commit, dejando los cambio en el index."},
      "reset --hard": {"cmd": "reset --hard", "docs": "Equipara el espacio de trabajo y el index al árbol local. ADVERTENCIA: Se pierden todos los cambios a archivos registrados por git desde el último commit. Usar este comando si una combinación/merge resultó en conflictos y es necesario comenzar de nuevo. Al pasar `ORIG_HEAD` puede deshacerse el merge más reciente y todos los cambios posteriores."},
      "switch": {"cmd": "switch <branch>", "docs": "Cambia de rama actualizando el index y el espacio de trabajo para reflejar la rama especificada, <branch>, y actualizando la posición de `HEAD` a <branch>."},
      "checkout -b x": {"cmd": "checkout -b <name of new branch>", "docs": "Crea una rama y posiciona el `HEAD` allí"},
      "merge x": {"cmd": "merge <commit or branch>", "docs": "Combina (merge) los cambios de <branch name> con los de la rama actual.\rUsar `&#8209;&#8209;no-commit` para dejar los cambios sin realizar un commit."},
      "rebase x": {"cmd": "rebase <upstream>", "docs": "Revierte todos los commits desde que la rama actual se separó del <upstream>, y luego los vuelve a aplicar uno por uno por sobre los commits del `HEAD` de <upstream>."},
      "cherry-pick x": {"cmd": "cherry-pick <commit>", "docs": "Aplica los cambios del commit especificado en la rama actual."},
      "revert x": {"cmd": "revert <commit>", "docs": "Revierte el <commit> especificado y realiza un commit con el resultado. Esto requiere que el árbol de trabajo esté limpio (sin modificaciones desde el `HEAD` commit)"},
      "diff --cached": {"cmd": "diff --cached [<commit>]", "docs": "Visualiza los cambios que se han preparado vs el último commit. Se puede pasar un <commit> para ver los cambios relativos al mismo."},
      "commit": {"cmd": "commit [-m 'msg']", "docs": "Almacena el contenido actual del index en un nuevo commit acompañado de un mensaje de log que describe esos cambios."},
      "commit --amend": {"cmd": "commit --amend", "docs": "Modifica el último commit con los cambios actuales en el index."},
      "log": {"cmd": "log", "docs": "Muestra los commits recientes, comenzando por los últimos. Optiones:\r`&#8209;&#8209;decorate` para incluir nombres de ramas y tags\r`&#8209;&#8209;stat` para incluir métricas (archivos modificados, insertados, and eliminados) \r`&#8209;&#8209;author=<author>`  para filtrar por autor\r`&#8209;&#8209;after=\"MMM DD YYYY\"` ej. (\"Jun 20 2008\") para incluir commits desde esa fecha\r`&#8209;&#8209;before=\"MMM DD YYYY\"` incluye commits anteriores a esa fecha \r`&#8209;&#8209;merge` incluye únicamente los commits involucrados en conflictos de combinación"},
      "diff x x": {"cmd": "diff <commit> <commit>", "docs": "Visualizar los cambios entre dos commits arbitrariamente"},
      "branch": {"cmd": "branch", "docs": "Lista todas las ramas existentes. Agregando -r lista las ramas registradas como remotas, la opción -a muestra ambas ramas."},
      "branch -d x": {"cmd": "branch -d <branch>", "docs": "Elimina la rama especificada. Usar -D para forzar esto."},
      "branch --track x x": {"cmd": "branch --track <new> <remote/branch>", "docs": "Crea una nueva rama local que sigue a una rama remota."},
      "clone x": {"cmd": "clone <repo>", "docs": "Descarga el repositorio especificado por <repo> y posiciona el `HEAD` en la rama master."},
      "pull x x": {"cmd": "pull <remote> <refspec>", "docs": "Incorpora los cambios desde un repositorio remoto en la rama actual. En su modo por defecto, `git pull` es un atajo de `git fetch` seguido por `git merge FETCH_HEAD`."},
      "reset --hard x/x": {"cmd": "reset --hard <remote>/<branch>", "docs": "Equipara el espacio de trabajo y el index con una rama remota. Usar `reset &#8209;&#8209;hard origin/master` para descartar todos los commits en la rama local master. Se puede utilizar para comenzar de nuevo desde una combinación/merge fallida."},
      "fetch x x": {"cmd": "fetch <remote> <refspec>", "docs": "Descarga los objetos y referencias desde otro repositorio."},
      "push": {"cmd": "push", "docs": "Actualiza el servidor con los commits de todas ramas que tienen en *COMÚN* entre el repositorio local y el remoto. Las ramas locales que nunca fueron enviadas al server (push) no están compartidas."},
      "push x x": {"cmd": "push <remote> <branch>", "docs": "Envía una nueva (o existente) rama al repositorio remoto"},
      "push x x:x": {"cmd": "push <remote> <branch>:<branch>", "docs": "Envía una rama al repositorio remoto con otro nombre"},
      "branch -r": {"cmd": "branch -r", "docs": "Lista las ramas remotas"},
      "push x :x": {"cmd": "push <remote> :<branch>", "docs": "Elimina una rama remota. Literalmente &quot;envía nada a ese branch&quot; "},
      "clean": {"cmd": "clean", "docs": "Limpia el árbol de trabajo eliminando de forma recursiva los archivos que no están bajo el control de versionado, comenzando por el directorio actual"},
      "stash push": {"cmd": "stash push [<msg>]", "docs": "Guarda las modificaciones locales en un nuevo stash, y luego ejecuta git reset &#8209;&#8209;hard para revertirlas. El <msg> es optativo y agrega una descripción adicional al estado. Para realizar una captura rápida, se pueden omitir tanto \"push\" como <msg>."},
      "stash apply": {"cmd": "stash apply [<stash>]", "docs": "Aplica los cambios del stash especificado en el espacio de trabajo. Por defecto aplica el último stash."},
      "stash pop": {"cmd": "stash pop", "docs": "Aplica los cambios del stash especificado y luego lo elimina de los temporales. Por defecto aplica el último stash."},
      "stash list": {"cmd": "stash list", "docs": "Lista los stashes disponibles actualmente."},
      "stash show": {"cmd": "stash show [<stash>]", "docs": "Muestra los cambios almacenados en el stash aplicando un diff entre ese stash y su padre original. Por defecto utiliza el último stash."},
      "stash drop": {"cmd": "stash drop [<stash>]", "docs": "Elimina una entrada del listado de stash. Por defecto elimina el último stash."},
      "stash clear": {"cmd": "stash clear", "docs": "Elimina todos las entradas del stash. IMPORTANTE: estas entradas eliminadas pueden ser irrecuperables luego."},
      "stash branch x": {
        "cmd": "stash branch <branchname> [<stash>]",
        "docs": "Crea y posiciona `HEAD` en el <branchname> apuntando al commit del cual el <stash> fue creado originalmente, aplicando luego los cambios almacenados en el <stash> al nuevo árbol de trabajo. \rSi se realiza exitosamente, y <stash> es una referencia tipo stash@{<revision>}, el comando elimina el <stash>. Cuando no se especifica un <stash>, aplica el último. \rEste comando es útil en los casos en que la rama en la que se ejecutó git stash push ha cambiado demasiado por lo que git stash apply fallaría por conflictos. Al aplicar los cambios sobre el commit que fue `HEAD` al momento de ejecutar git stash originalmente, se restauran los cambios sin conflictos."
      }
    }
  },
  de: {
    locations: {
      stash: 'Stash',
      workspace: 'Arbeitskopie',
      index: 'Index',
      local_repo: 'Lokales Repository',
      remote_repo: 'Remote Repository',
      docs: {
        stash: 'Hier können Änderungen "geparkt" werden, während man an etwas anderem arbeitet',
        workspace: 'Checkout des lokalen Repositories',
        index: 'Zu commitende Dateien. Vor einem "commit" (checkin), müssen die Dateien zuerst zu dem Index hinzugefügt werden. Wird auch "staging area" oder "staged files" genannt.',
        local_repo: 'Der lokale clone des Remote Repositories. Es wird in dem Verzeichnis `.git` verwaltet. Typische Branches sind: `master`, `feature-x`, `bugfix-y`',
        remote_repo: 'Der Ursprung des lokalen Repositories. Durch ein `clone` wird es automatisch als `origin` gesetzt.'
      }
    },

    commands: {
      "status": {
        "cmd": "status",
        "docs": "Zeigt: \r• Pfade mit Unterschieden zwischen dem Index und dem aktuellen `HEAD` commit \r• Pfade mit Unterschieden zwischen der Arbeitskopie und dem Index \r• Pfade in der Arbeitskopie, die nicht durch Git verwaltet werden"
      },
      "diff": {"cmd": "diff", "docs": "Zeigt die Änderungen, die noch nicht dem Index hinzugefügt wurden."},
      "diff x": {
        "cmd": "diff <Commit oder Branch>",
        "docs": "Zeigt die Änderungen in der Arbeitskopie im Vergleich zu dem <Commit>. `HEAD` kann als synonym für den letzten Commit im aktuellen Branch verwendet werden. Wird ein Branch-Name angegeben, wird mit dem letzten Commit auf diesem Branch verglichen"
      },
      "add x": {
        "cmd": "add <Datei(en) oder Verzeichnis(se)>",
        "docs": "Fügt neue oder geänderte Dateien oder Verzeichnisse dem Index hinzu."
      },
      "add -u": {
        "cmd": "add -u",
        "docs": "Fügt geänderte (NICHT NEUE) Dateien dem Index hinzu. Das ist ähnlich dem, was ein `git commit -a` vor dem Commit macht."
      },
      "rm x": {"cmd": "rm <Datei(en)...>", "docs": "Entfernt eine Datei aus der Arbeitskopie und dem Index."},
      "mv x": {"cmd": "mv <Datei(en)...>", "docs": "Verschiebt eine Datei in der Arbeitskopie und dem Index."},
      "commit -a": {
        "cmd": "commit -a [-m 'Nachricht']",
        "docs": "Fügt automatisch alle geänderten und gelöschte Dateien dem Index hinzu und committet diese dann. Neue Dateien bleiben unberücksichtigt."
      },
      "checkout x": {
        "cmd": "checkout <Datei(en)... oder Verzeichnis>",
        "docs": "Aktualisiert die Datei oder das Verzeichnis in der Arbeitskopie vom lokalen Repository. Arbeitet auf dem aktuellen Branch."
      },
      "reset head x": {
        "cmd": "reset HEAD <Datei(en)...>",
        "docs": "Entfernt die <Datei(en)> aus dem Index, in der Arbeitskopie bleibt die Änderung erhalten."
      },
      "reset --soft head^": {
        "cmd": "reset --soft HEAD^",
        "docs": "Setzt die Arbeitskopie auf den Stand des letzten Commits im lokalen Repository zurück. Der Inhalt im Index bleibt erhalten."
      },
      "reset --hard": {
        "cmd": "reset --hard",
        "docs": "Setzt die Arbeitskopie auf den Stand des letzten Commits im lokalen Repository zurück. WARNUNG: Alle nicht committeten Änderungen und neue Dateien der Arbeitskopie und des Index gehen verloren. Dieses Kommando ist nützlich, wenn ein Merge fehlgeschlagen ist und man von vorne beginnen möchte. Mit dem Parameter `ORIG_HEAD` kann der letzte, erfolgreiche Merge und alle Änderungen danach rückgängig gemacht werden."
      },
      "switch": {
        "cmd": "switch <Branch>",
        "docs": "Checkt den <Branch> in die Arbeitskopie aus. Änderungen bleiben erhalten, so dass sie in den Branch committet werden können."
      },
      "checkout -b x": {"cmd": "checkout -b <Name des neuen Branches>", "docs": "Erzeugt einen neuen Branch und wechselt zu diesem"},
      "merge x": {
        "cmd": "merge <Commit oder Branch>",
        "docs": "Mergt Änderungen aus <Branch> oder <Commit> in den aktuellen Branch.\rMit `&#8209;&#8209;no-commit` wird kein automatisches Commit durchgeführt. Mit `--no-ff` wird auch dann ein Merge-Commit erzeugt, wenn ein Fast-Forward Merge gemacht werden könnte."
      },
      "rebase x": {
        "cmd": "rebase <upstream>",
        "docs": "Alle lokalen Commits werden in einen temporären Bereich verschoben und nacheinander auf den HEAD vom <upstream> wieder aufgespielt. Wird genutzt, um eigene Änderungen mit dem letzten Stand des Remote Repositories ohne einen Merge Commit zusammenzuführen."
      },
      "cherry-pick x": {
        "cmd": "cherry-pick <Commit>",
        "docs": "Integriert Änderungen des <Commit>s in den aktuellen Branch."
      },
      "revert x": {
        "cmd": "revert <Commit>",
        "docs": "Erzeugt einen Commit, der die Änderungen in <Commit> rückgängig macht."
      },
      "diff --cached": {
        "cmd": "diff --cached [<Commit>]",
        "docs": "Vergleicht die Änderungen im Index mit dem letzten Commit. Wird ein <Commit> angegeben, wird der Index damit verglichen."
      },
      "commit": {
        "cmd": "commit [-m 'Nachricht']",
        "docs": "Erzeugt einen neuen Commit mit dem Inhalt des Index und der eingegebenen Nachricht."
      },
      "commit --amend": {"cmd": "commit --amend", "docs": "Fügt den Inhalt des Index dem letzten Commit hinzu. Kann auch genutzt werden, um Parameter des Commits zu ändern."},
      "log": {
        "cmd": "log",
        "docs": "Zeigt die Commit-Historie. Parameter: \r`&#8209;&#8209;decorate` zeigt Branch- und Tag-Namen\r`&#8209;&#8209;stat` zeigt die Anzahl der Veränderungen je Datei\r`&#8209;&#8209;author=<Autor>` zeigt nur Commits des <Author>s\r`&#8209;&#8209;after=\"MMM DD YYYY\"` z.B. (`Jun 20 2008`) zeigt nur Commits nach einem bestimmten Zeitpunkt\r`&#8209;&#8209;before=\"MMM DD YYYY\"` zeigt nur Commits vor einem bestimmten Datum\r`&#8209;&#8209;merge` zeigt nur Commits die an einem bestehenden Merge-Konflikt beteiligt sind"
      },
      "diff x x": {"cmd": "diff <Commit> <Commit>", "docs": "Zeigt die Unterschiede zwischen zwei Commits"},
      "branch": {
        "cmd": "branch",
        "docs": "Listet alle existierenden Branches auf. Mit `-r` werden die Remote-Tracking-Branches angezeigt und `-a` listet beide auf."
      },
      "branch -d x": {"cmd": "branch -d <Branch>", "docs": "Löscht den angegebenen <Branch>. `-D` erzwingt das Löschen."},
      "branch --track x x": {
        "cmd": "branch --track <new> <remote/branch>",
        "docs": "Erzeugt einen neuen lokalen Branch, der <remote/branch> als Remote-Tracking-Branch verwendet."
      },
      "clone x": {
        "cmd": "clone <Repository>",
        "docs": "Kopiert das <Repository> in ein neues Verzeichnis und checkt den master Branch aus. Der Remote-Tracking-Branch verweist auf das Quell-Repository."
      },
      "pull x x": {
        "cmd": "pull <remote> <refspec>",
        "docs": "Lädt die Änderungen des aktuellen Branches von seinem origin und überträgt sie in das lokale Repository und die Arbeitskopie. In der Standardkonfiguration ist `git pull` ein Abkürzung für `git fetch` gefolgt von `git merge FETCH_HEAD`."
      },
      "reset --hard x/x": {
        "cmd": "reset --hard <remote>/<branch>",
        "docs": "Setzt das lokale Repository und die Arbeitskopie auf den Stand des Remote Repositories. Zum Beispiel verwirft `reset &#8209;&#8209;hard origin/master` alle Änderungen am lokalen master-Branches."
      },
      "fetch x x": {"cmd": "fetch <remote> <refspec>", "docs": "Lädt die Änderungen des aktuellen Branches von seinem origin und überträgt sie in das lokale Repository. Die Arbeitskopie bleibt unverändert. Das ist nützlich, um den eigenen Stand mit dem Remote-Stand zu vergleichen."},
      "push": {
        "cmd": "push",
        "docs": "Überträgt die neuen Commits des lokalen Repositories für den aktuellen Branches in das Remote Repository. `--all` überträgt die Commits aller Branches."
      },
      "push x x": {"cmd": "push <remote> <branch>", "docs": "Überträgt einen neuen (oder existierenden) Branch in das Remote Repository"},
      "push x x:x": {
        "cmd": "push <remote> <branch>:<branch>",
        "docs": "Überträgt einen neuen Branch mit einem anderen Namen in das Remote Repository."
      },
      "branch -r": {"cmd": "branch -r", "docs": "Zeigt die Branches des Remote Repositories"},
      "push x :x": {
        "cmd": "push <remote> :<branch>",
        "docs": "Löscht den Branch im Remote Repository."
      },
      "clean": {
        "cmd": "clean",
        "docs": "Löscht (rekursiv, vom aktuellen Verzeichnis) alle Dateien der Arbeitskopie, die nicht unter Versionskontrolle stehen (die sich noch nicht im lokalen Repository oder im Index befinden). `-n` führt einen \"dry run\" durch und zeigt an, welche Dateien gelöscht werden würden. `-f` führt das Löschen aus."
      },
      "stash push": {
        "cmd": "stash push [<Nachricht>]",
        "docs": "Speichert aktuelle Änderungen der Arbeitskopie in einem neuen \"Stash\" und ruft `git reset &#8209;&#8209;hard` auf. Die <Nachricht> ist optional, wird keine <Nachricht> angegeben kann `push` auch weggelassen werden."
      },
      "stash apply": {
        "cmd": "stash apply [<Stash>]",
        "docs": "Fügt die Änderungen des angegebenen <Stash> in die Arbeitskopie ein. Wird <Stash> nicht angegeben, wird der zuletzt erstellte verwendet."
      },
      "stash pop": {
        "cmd": "stash pop",
        "docs": "Fügt die Änderungen des letzten Stash in die Arbeitskopie ein und entfernt den Stash."
      },
      "stash list": {"cmd": "stash list", "docs": "Zeigt alle vorhandenen Stashes an."},
      "stash show": {
        "cmd": "stash show [<Stash>]",
        "docs": "Zeigt die Änderungen des <Stash> im Vergleich zum ursprünglichen Zustand. Wenn kein <Stash> angegeben ist, wird der neueste verwendet."
      },
      "stash drop": {
        "cmd": "stash drop [<Stash>]",
        "docs": "Löscht einen vorhandenen \"Stash\". Wird kein <Stash> angegeben, wird der neueste gelöscht."
      },
      "stash clear": {
        "cmd": "stash clear",
        "docs": "Lösche alle vorhandenen \"Stashes\"."
      },
      "stash branch x": {
        "cmd": "stash branch <Branch> [<Stash>]",
        "docs": "Erzeugt einen neuen <Branch> und checkt diesen aus. Der Branch zweigt von dem Commit ab, auf dem der <Stash> basiert. Die Änderungen des Stashes werden dann in die Arbeitskopie des neuen Branches eingespielt.\rWenn das erfolgreich ist und der <Stash> eine Referenz in der Form stash@{<revision>} ist, dann wird der <Stash> entfernt. Wenn <Stash> nicht angegeben ist, wird der neueste verwendet.\rDas ist nützlich, wenn sich der Branch auf dem der Stash eingespielt werden soll, so stark verändert hat, dass `git stash apply` aufgrund von Konflikten fehlschlägt. Da der Stash mit diesem Kommando auf dem ursprünglichen Commit zum Zeitpunkt von `git stash` eingespielt wird, wird so der Originalzustand des Stashes ohne Konflikte wiederhergestellt."
      }
    }
  },
  ko: {
    locations: {
      stash: 'stash',
      workspace: 'workspace',
      index: 'index',
      local_repo: 'local repository',
      remote_repo: 'upstream repository',
      docs: {
        stash: '다른 작업을하는 동안 수정 사항을 숨겨둘 수 있는 장소',
        workspace: '로컬 체크 아웃',
        index: '커밋하기를 원하는 파일. 파일을 "commit"(checkin) 하기 전에 먼저 Index에 추가하여야 합니다. "현재 디렉토리 캐시", "스테이징 영역", "캐시", 스태이지 파일" 으로 불리웁니다.',
        local_repo: '필요한 저장소 파일들을 모두 포함하고 있는 `.git`이라는 서브 디렉토리 (Git 저장소 뼈대를 말한다). 일반적인 브런치: `master`, `feature-x`, `bugfix-y`',
        remote_repo: '인터넷이나 네트워크로 호스팅되는 프로젝트 버전으로, 모든 변경 사항을 다른 개발자들과 공유하여 사용할 수 있습니다. 기본 이름은 `origin`. 일반적인 브런치: `master`, `shared-feature-x`, `release-y`'
      }
    },
    commands: {
      "status": {
        "cmd": "status",
        "docs": "표시: \r• 인덱스 파일과 현재 `HEAD` 커밋 사이에 차이가 있는 경로, \r• 작업 공간과 인덱스 카일간 차이가 나는 경로, \r• git에서 추적하지 않는 작업 영역에서의 경로."
      },
      "diff": {"cmd": "diff", "docs": "인덱스에 추가되지 않은 차이점을 보여줍니다."},
      "diff x": {
        "cmd": "diff <commit or branch>",
        "docs": "이름이 정해진 <commit>과 관련된 workplace의 변경 사항을 확인합니다. `HEAD`를 사용하여 최신 커밋과 비교하거나 branch 이름을 이용하여 다른 branch를 비교할 수 있습니다."
      },
      "add x": {
        "cmd": "add <file... or dir...>",
        "docs": "새로운 파일 또는 수정된 파일에 대한 현재 내용을 인덱스에 추가하여 다음 커밋에 포함할 내용을 준비합니다. `add --interactive`를 이용하여 수정된 내용을 대화식으로 workplace에서 인덱스로 추가할 수 있습니다."
      },
      "add -u": {
        "cmd": "add -u",
        "docs": "수정된 (새롭게 만든게 아닌) 파일의 현재 내용을 인덱스에 추가합니다. 이는 `git commit -a`로 커밋을 준비하는 것과 비슷합니다."
      },
      "rm x": {"cmd": "rm <file(s)...>", "docs": "Workspace와 인덱스에서 파일을 삭제합니다."},
      "mv x": {"cmd": "mv <file(s)...>", "docs": "Workspace와 인덱스에서 파일을 옮깁니다."},
      "commit -a": {
        "cmd": "commit -a [-m 'msg']",
        "docs": "추적하지 않는 파일을 제외하고, 마지막 커밋 이후 인덱스에 나열된 모든 파일을 커밋합니다. 인덱스에서 삭제된 파일은 workspace에서 삭제됩니다."
      },
      "checkout x": {
        "cmd": "checkout <files(s)... or dir>",
        "docs": "Workspace에 있는 파일과 디렉토리를 업데이트 합니다. 브런치를 바꾸지 말아야합니다."
      },
      "reset head x": {
        "cmd": "reset HEAD <file(s)...>",
        "docs": "다음 커밋에서 지정된 파일을 제거합니다. 인덱스를 재설정하지만, 작업 트리는 다시 설정 하지 않습니다. 변경된 파일은 보존되지만 커밋으로 표시되지 않습니다. 그리고 업데이트 하지 않은 내용을 보여줍니다."
      },
      "reset --soft head^": {
        "cmd": "reset --soft HEAD^",
        "docs": "마지막 커밋을 실행 취소하고, 인덱스에서 변경 내용을 남겨둡니다."
      },
      "reset --hard": {
        "cmd": "reset --hard",
        "docs": "Workplace와 인덱스를 로컬 트리와 일치시킵니다. 경고: 커밋 이후 작업 중인 트리에서 추적 중인 파일에 대한 변경 사항이 사라집니다. 병합으로 인해 충돌이 발생하여 처음부터 다시 시작하려는 경우에 사용합니다. `ORGI_HEAD`로 수정하게되면 가장 최근에 성공한 병합과 이후 변경 사항을 취소할 수 있습니다."
      },
      "switch": {
        "cmd": "switch <branch>",
        "docs": "지정한 branch인 <branch>를 인덱스와 workspace를 반영하고, `HEAD`를 <branch>로 업데이트하여 branch를 변경합니다."
      },
      "checkout -b x": {"cmd": "checkout -b <name of new branch>", "docs": "Branch를 만들고 변경합니다."},
      "merge x": {
        "cmd": "merge <commit or branch>",
        "docs": "<branch name>에서 변경한 내용을 현재 branch로 병합합니다.\r`&#8209;&#8209;no-commit`을 사용하여 커밋되지 않은 변경 내용을 남겨둘 수 있습니다. 만약 병합을 빠른 감기(fast forward)로 진행되더라도 `--no-ff` 를 사용하여 병합 커밋을 만듭니다."
      },
      "rebase x": {
        "cmd": "rebase <upstream>",
        "docs": "현재 branch가 <upstream>에서 분기된 이후 모든 커밋을 되돌리고, <upstream> `HEAD`에서 변경 내용을 하나씩 다시 적용합니다."
      },
      "cherry-pick x": {
        "cmd": "cherry-pick <commit>",
        "docs": "선택한 커밋의 변경 내용을 현재 branch에 통합합니다."
      },
      "revert x": {
        "cmd": "revert <commit>",
        "docs": "선택한 <commit>을 역방향 커밋을 실행하고 그 결과를 커밋합니다. 이렇게하려면 작업 트리를 정리해야합니다 (`HEAD` 커밋을 수정할 필요는 없습니다)."
      },
      "diff --cached": {
        "cmd": "diff --cached [<commit>]",
        "docs": "작업 중인 변경 내용과 최신 커밋을 비교합니다. <commit>을 추가하면 해당 커밋에서의 변경 내용을 확인할 수 있습니다."
      },
      "commit": {
        "cmd": "commit [-m 'msg']",
        "docs": "변경 내용을 설명하는 메시지와 인덱스에 있는 내용을 새로운 커밋에 저장합니다."
      },
      "commit --amend": {"cmd": "commit --amend", "docs": "현재 인덱스 변경으로 마지막 커밋을 수정합니다."},
      "log": {
        "cmd": "log",
        "docs": "최근 커밋을 보여줍니다. 가장 최근 커밋이 맨위에 있습니다. 옵션:\r`&#8209;&#8209;decorate` 커밋에 있는 branch와 태그 이름으로 보여줍니다.\r`&#8209;&#8209;stat` 로그 통계를 냅니다. (파일 변경, 추가, 삭제)\r`&#8209;&#8209;author=<author>` 특정 사용자가 커밋한 내용으로 보여줍니다.\r`&#8209;&#8209;after=\"MMM DD YYYY\"` 예(`Jun 20 2008`) 특정 날짜 이전에 커밋된 커밋을 보여줍니다.\r`&#8209;&#8209;before=\"MMM DD YYYY\"` 특정 날짜 이후에 커밋된 커밋을 보여줍니다.\r`&#8209;&#8209;merge` 현재 병합 충돌에 관련된 커밋만 보여줍니다."
      },
      "diff x x": {"cmd": "diff <commit> <commit>", "docs": "임의의 두 커밋간의 변경 내용을 확인합니다."},
      "branch": {
        "cmd": "branch",
        "docs": "모든 branch를 보여줍니다. `-r` 옵션은 원격 branch를 보여주고, `-a`는 원격, 로컬에 있는 branch를 보여줍니다."
      },
      "branch -d x": {"cmd": "branch -d <branch>", "docs": "특정 branch를 삭제합니다. `-D`를 이용하여 강제로 삭제할 수 있습니다."},
      "branch --track x x": {
        "cmd": "branch --track <new> <remote/branch>",
        "docs": "원격 branch를 따르는 새 로컬 branch를 만듭니다."
      },
      "clone x": {
        "cmd": "clone <repo>",
        "docs": "<repo>로 지정된 저장소를 다운로드하고 master 브런치의 `HEAD`를 체크아웃 합니다."
      },
      "pull x x": {
        "cmd": "pull <remote> <refspec>",
        "docs": "원격 저장소의 변경 내용을 현재 branch에 반영합니다. 기본 모드에서 `git pull` 명령은 `git fetch`와 `git merge FETCH_HEAD`를 줄인 명령어입니다."
      },
      "reset --hard x/x": {
        "cmd": "reset --hard <remote>/<branch>",
        "docs": "로컬 저장소와 작업 트리를 리셋하여 원격 branch와 일치시킵니다. `reset &#8209;&#8209;hard origin/master`를 사용하여 로컬 마스터 branch에서 모든 커밋을 버립니다. 이를 사용하여 실패한 병합을 다시 시작합니다."
      },
      "fetch x x": {"cmd": "fetch <remote> <refspec>", "docs": "다른 저장소에서 object와 refs를 다운받습니다."},
      "push": {
        "cmd": "push",
        "docs": "로컬 저장소와 원격 저장소 사이의 *공통적인* 모든 지점에서 커밋을 사용하여 원격 저장소로 업데이트합니다. 처음부터 원격 저장소에 업데이트되지 않은 로컬 branch는 공유되지 않습니다."
      },
      "push x x": {"cmd": "push <remote> <branch>", "docs": "새로운 저장소 (또는 기존 저장소)를 원격 저장소로 업로드합니다."},
      "push x x:x": {
        "cmd": "push <remote> <branch>:<branch>",
        "docs": "다른 이름으로 새로운 저장소를 원격 저장소로 업로드합니다."
      },
      "branch -r": {"cmd": "branch -r", "docs": "원격 branch를 보여줍니다."},
      "push x :x": {
        "cmd": "push <remote> :<branch>",
        "docs": "원격 브런치를 삭제합니다. 글자 그대로 \"이 지점에 아무것도 보내지마라.\" 입니다."
      },
      "clean": {
        "cmd": "clean",
        "docs": "현재 디렉토리에서 시작하여 버전 제어하고 있지 않은 파일을 재귀적으로 제거하여 작업 트리를 정리합니다. `-n`을 사용하여 \"dry run\" 형식으로 삭제될 내용을 확인할 수 있습니다. `-f`는 파일을 삭제합니다."
      },
      "stash push": {
        "cmd": "stash push [<msg>]",
        "docs": "로컬 변경 내용을 새로운 stash 저장하고, `git reset &#8209;&#8209;hard`를 실행하여 되돌립니다. <msg> 항목은 선택 사항이며, 숨기는 상태와 그에 대한 설명을 입력할 수 있습니다. 스냅 샷을 빠르게 작성하려면 `push`와 <msg>를 생략할 수 있습니다."
      },
      "stash apply": {
        "cmd": "stash apply [<stash>]",
        "docs": "변경 내역을 stash 영역에서 workspace 영역으로 이동합니다. 최근에 저장한 stash 값이 기본 값입니다."
      },
      "stash pop": {
        "cmd": "stash pop",
        "docs": "마지막이나 지정된 stash 변경 내용을 적용한뒤 stash에서 해당 내용을 삭제합니다."
      },
      "stash list": {"cmd": "stash list", "docs": "현재 가지고 있는 stash 항목을 보여줍니다."},
      "stash show": {
        "cmd": "stash show [<stash>]",
        "docs": "Stash에 기록된 변경 내용을 stash 상태와 원래 부모 커밋 사이의 차이점을 보여줍니다. <stash>가 명시되지 않은 경우, 가장 최근의 stash 항목에대한 내용을 보여줍니다."
      },
      "stash drop": {
        "cmd": "stash drop [<stash>]",
        "docs": "Stash 항목에서 하나의 stash 항목을 삭제합니다. <stash>가 명시되지 않은 경우, 가장 최근의 stash 항목을 삭제합니다."
      },
      "stash clear": {
        "cmd": "stash clear",
        "docs": "Stash 항목을 모두 삭제합니다. 이럴경우, 가지 치기의 대상이되며, 복구가 불가능합니다."
      },
      "stash branch x": {
        "cmd": "stash branch <branchname> [<stash>]",
        "docs": "<stash>를 기존 작성된 커밋에서 시작하여 <branchname>으로 brach를 생성하고 체크 아웃합니다. <stash>에 기록된 변경 내용은 새 작업 트리와 색인에 적용됩니다. \r성공하면 <stash>는 stash@{<revision>} 형식의 참조하고 <stash>를 삭제합니다. <stash>가 주어지지 않으면, 최근 저장된 stash 항목을 사용합니다. \r이것은 `git stash push`를 실행한 브런치가 변경되어 `git stash apply`시 충돌이 날때 유용합니다. stash는 `git stash`가 실행될 때, `HEAD`였던 커밋의 맨 위에 적용되기 때문에 충돌없이 기존 stash 상태로 복원합니다."
      }
    }
  },
  it: {
    locations: {
      stash: 'stash',
      workspace: 'workspace',
      index: 'index',
      local_repo: 'repository locale',
      remote_repo: 'repository remoto',
      docs: {
        stash: 'Uno spazio in cui conservare le modifiche mentre si lavora a qualcos\'altro.',
        workspace: 'Lo spazio di lavoro locale (la cartella nella quale si lavora). Spesso è noto anche come "working tree".',
        index: 'Uno spazio che contiene i file pronti per essere committati. Spesso è noto anche come "current directory cache", "cache" o "staging area". I file al suo interno spesso sono noti anche come "staged files".',
        local_repo: 'Uno spazio che contiene tutti i file committati e le informazioni sui branch. Si presenta come una sotto-cartella denominata `.git`. I nomi tipici per i branch usati qui sono: `master`, `feature-x`, `bugfix-y`.',
        remote_repo: 'Uno spazio online che contiene tutte le varie versioni del progetto, accessibile anche agli altri sviluppatori. Il nome usato per identificare un repository remoto di solito è `origin`. I nomi tipici per i branch usati qui sono: `master`, `shared-feature-x`, `release-y`.'
      }
    },
    commands: {
      "status": {
        "cmd": "status",
        "docs": "Elenca: \r• i file che presentano differenze tra l'indice e il workspace\r• i file che presentano differenze tra l'indice e l'`HEAD` attuale\r• i file del workspace che non sono tracciati da git."
      },
      "diff": {"cmd": "diff", "docs": "Elenca le differenze tra il workspace e l'indice."},
      "diff x": {
        "cmd": "diff <commit or branch>",
        "docs": "Elenca i cambiamenti tra il workspace ed il <commit> specificato. È possibile utilizzare `HEAD` per considerare l'ultimo commit, o specificare il nome di un branch."
      },
      "add x": {
        "cmd": "add <file... or dir...>",
        "docs": "Aggiunge i file specificati (nuovi o modificati) all'indice, così da prepararli al prossimo commit. Si può usare `add --interactive` per aggiungere file all'indice in maniera interattiva."
      },
      "add -u": {
        "cmd": "add -u",
        "docs": "Aggiunge solamente i file modificati (NON QUELLI NUOVI) all'indice. Simile a ciò che il comando `git commit -a` fa in preparazione di un nuovo commit."
      },
      "rm x": {"cmd": "rm <file(s)...>", "docs": "Rimuove uno o più file dal workspace e dall'indice."},
      "mv x": {"cmd": "mv <file(s)...>", "docs": "Sposta uno o più file nel workspace e nell'indice."},
      "commit -a": {
        "cmd": "commit -a [-m 'msg']",
        "docs": "Esegue un commit di tutti i file modificati dal commit precedente, eccetto quelli non tracciati (i.e. esegue un commit dei soli file che sono già presenti nell'indice). Rimuove dall'indice i file che sono stati rimossi dal workspace."
      },
      "checkout x": {
        "cmd": "checkout <files(s)... or dir>",
        "docs": "Aggiorna i file o le directory nel workspace. NON cambia branch."
      },
      "reset head x": {
        "cmd": "reset HEAD <file(s)...>",
        "docs": "Rimuove i file specificati dal commit successivo. Esegue un reset dell'indice, ma non del workspace (i.e. le modifiche ai file vengono mantenute, ma non sono considerate nel commit) e segnala cosa non è stato aggiornato."
      },
      "reset --soft head^": {
        "cmd": "reset --soft HEAD^",
        "docs": "Annulla l'ultimo commit, mantenendo i cambiamenti nell'indice."
      },
      "reset --hard": {
        "cmd": "reset --hard",
        "docs": "Uguaglia il workspace e l'indice allo stato del repository locale. ATTENZIONE: I cambiamenti dei file nel workspace dall'ultimo commit verranno persi. Usare questo comando è utile se un'operazione di merge ha presentato dei conflitti e si intente procedere da capo. È possibile specificare `ORIG_HEAD` per annullare l'ultimo merge effettuato con successo e qualsiasi cambiamento successivo ad esso."
      },
      "switch": {
        "cmd": "switch <branch>",
        "docs": "Cambia il branch corrente. Aggiorna il workspace e l'indice per riflettere lo stato del branch specificato e sposta l'`HEAD` su <branch>."
      },
      "checkout -b x": {"cmd": "checkout -b <name of new branch>", "docs": "Crea un nuovo branch e ci si posiziona."},
      "merge x": {
        "cmd": "merge <commit or branch>",
        "docs": "Unisce i cambiamenti di <branch> o di <commit> nel branch corrente.\rSpecificare `&#8209;&#8209;no-commit` per non eseguire" +
        " il commit al termine del comando.\rSpecificare `--no-ff` per creare un nuovo commit di merge anche se si tratta di un fast forward."
      },
      "rebase x": {
        "cmd": "rebase <upstream>",
        "docs": "Annulla tutti i commit del branch corrente che divergono da <upstream>, per poi riapplicarli uno ad uno a partire dall'`HEAD` di <upstream>."
      },
      "cherry-pick x": {
        "cmd": "cherry-pick <commit>",
        "docs": "Integra i cambiamenti del commit specificato nel branch corrente."
      },
      "revert x": {
        "cmd": "revert <commit>",
        "docs": "Inverte il commit specificato e crea un nuovo commit con il risultato. Occorre che il workspace sia pulito (i.e. nessuna nuova modifica dall'`HEAD`)."
      },
      "diff --cached": {
        "cmd": "diff --cached [<commit>]",
        "docs": "Elenca le differenze tra l'indice e l'ultimo commit. Specificare un <commit> per elencare i cambiamenti relativi ad esso."
      },
      "commit": {
        "cmd": "commit [-m 'msg']",
        "docs": "Memorizza il contenuto corrente dell'indice in un nuovo commit.\rIl messaggio <msg> ne descrive i cambiamenti."
      },
      "commit --amend": {"cmd": "commit --amend", "docs": "Modifica l'ultimo commit con lo stato attuale dell'indice."},
      "log": {
        "cmd": "log",
        "docs": "Elenca gli ultimi commit, i più recenti in cima. Opzioni:\r`&#8209;&#8209;decorate` aggiunge il nome dei branch ed i tag ai commit\r`&#8209;&#8209;stat` aggiunge statistiche (file modificati, inseriti ed eliminati) \r`&#8209;&#8209;author=<author>` filtra per autore\r`&#8209;&#8209;after=\"MMM DD YYYY\"` es. (`Jun 20 2008`) filtra per specifica data\r`&#8209;&#8209;before=\"MMM DD YYYY\"` filtra per date inferiori a quella specificata \r`&#8209;&#8209;merge` mostra solo i commit coinvolti nel merge attuale."
      },
      "diff x x": {"cmd": "diff <commit> <commit>", "docs": "Elenca i cambiamenti tra  due commit specificati."},
      "branch": {
        "cmd": "branch",
        "docs": "Elenca tutti i branch esistenti. L'opzione `-r` elenca solamente i branch remoti, l'opzione `-a` elenca sia quelli remoti che quelli locali."
      },
      "branch -d x": {"cmd": "branch -d <branch>", "docs": "Elimina il branch specificato. L'opzione `-D` forza l'eliminazione."},
      "branch --track x x": {
        "cmd": "branch --track <new> <remote/branch>",
        "docs": "Crea un nuovo branch locale a partire da un branch remoto."
      },
      "clone x": {
        "cmd": "clone <repo>",
        "docs": "Effettua il download del repository specificato e si posiziona sull'`HEAD` del master branch."
      },
      "pull x x": {
        "cmd": "pull <remote> <refspec>",
        "docs": "Incorpora i cambiamenti di un repository remoto nel branch locale corrente. Di default, `git pull` è un'abbreviazione del comando `git fetch` seguito dal comando `git merge FETCH_HEAD`."
      },
      "reset --hard x/x": {
        "cmd": "reset --hard <remote>/<branch>",
        "docs": "Ripristina il workspace ed il repository locale allo stato del branch remoto specificato. Utilizzare `reset &#8209;&#8209;hard origin/master` per cancellare tutti i commit del master branch locale. Utile per procedere da capo dopo un tentativo di merge fallito."
      },
      "fetch x x": {"cmd": "fetch <remote> <refspec>", "docs": "Effettua il download di file e riferimenti da un altro repository."},
      "push": {
        "cmd": "push",
        "docs": "Aggiorna il server con i commit locali in tutti i branch che sono *IN COMUNE* tra il repository locale ed il server. I branch locali che non sono mai stati inviati al server non sono condivisi."
      },
      "push x x": {"cmd": "push <remote> <branch>", "docs": "Invia un nuovo (o già esistente) branch al repository remoto."},
      "push x x:x": {
        "cmd": "push <remote> <branch>:<branch>",
        "docs": "Invia un nuovo branch al repository remoto con un nome differente."
      },
      "branch -r": {"cmd": "branch -r", "docs": "Elenca i branch remoti."},
      "push x :x": {
        "cmd": "push <remote> :<branch>",
        "docs": "Elimina un branch remoto. Letteralmente \"invia nulla a questo branch\"."
      },
      "clean": {
        "cmd": "clean",
        "docs": "Pulisce il workspace eliminando ricorsivamente i file che non sono tracciati da git, partendo dalla directory corrente. Specificare `-n` per un \"dry run\" e vedere cosa verrà eliminato. Specificare `-f` per eliminare i file."
      },
      "stash push": {
        "cmd": "stash push [<msg>]",
        "docs": "Salva le modifiche locali in un nuovo stash, ed esegue il comando `git reset &#8209;&#8209;hard` per invertirle. Il messaggio <msg> è opzionale e dà una descrizione dello stato dello stash. Per velocizzare l'operazione, è possibile omettere `push` e <msg>."
      },
      "stash apply": {
        "cmd": "stash apply [<stash>]",
        "docs": "Applica i cambiamenti dello stash specificato nel workspace. Se lo <stash> non è specificato, viene considerato l'ultimo aggiunto."
      },
      "stash pop": {
        "cmd": "stash pop",
        "docs": "Applica i cambiamenti dell'ultimo stash (o quello specificato) nel workspace e successivamente lo elimina."
      },
      "stash list": {"cmd": "stash list", "docs": "Elenca tutti gli stash salvati."},
      "stash show": {
        "cmd": "stash show [<stash>]",
        "docs": "Mostra i cambiamenti tra il contenuto di <stash> e lo stato del workspace da cui esso è stato originato. Se lo <stash> non è specificato, viene considerato l'ultimo aggiunto."
      },
      "stash drop": {
        "cmd": "stash drop [<stash>]",
        "docs": "Elimina uno stash. Se lo <stash> non è specificato, viene considerato l'ultimo aggiunto."
      },
      "stash clear": {
        "cmd": "stash clear",
        "docs": "Elimina tutti gli stash. ATTENZIONE: gli stash eliminati potrebbero essere impossibili da recuperare."
      },
      "stash branch x": {
        "cmd": "stash branch <branchname> [<stash>]",
        "docs": "Crea un nuovo branch chiamato <branchname> e ci si posiziona, partendo dal commit da cui è stato generato lo <stash> ed applicando i cambiamenti conservati in esso nell'indice e nel nuovo workspace. \rSe l'operazione ha successo, e lo <stash> è un riferimento del tipo stash@{<revision>}, lo <stash> viene eliminato. Se lo <stash> non è specificato, viene considerato l'ultimo aggiunto. \rQuesto comando è utile se il branch da cui è stato lanciato `git stash push` è cambiato tanto da far fallire `git stash apply` a causa di conflitti. Poiché lo stash viene applicato in cima al commit `HEAD` precedente al comando `git stash`, lo stato originale viene ripristinato senza conflitti."
      }
    }
  }
}

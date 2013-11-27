var canonize = function (k) {
  return k.replace(/\[.*\]/, '').replace(/<[^>]+>/g, 'x').toLowerCase().trim()
}

var commands = [
  {"left": "workspace", "right": "index", "direction": "status", "key": "status", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "index", "direction": "status", "key": "diff", "tags": "Basic Snapshotting, Inspection and Comparison,Patching"},
  {"left": "workspace", "right": "local_repo", "direction": "status", "key": "diff x", "tags": "Basic Snapshotting,Inspection and Comparison,Patching"},
  {"left": "workspace", "right": "index", "direction": "up", "key": "add x", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "index", "direction": "up", "key": "add -u", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "index", "direction": "up", "key": "rm x", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "index", "direction": "up", "key": "mv x", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "local_repo", "direction": "up", "key": "commit -a", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "index", "direction": "dn", "key": "checkout x", "tags": "Branching and Merging"},
  {"left": "index", "right": "index", "direction": "status", "key": "reset head x", "tags": "Basic Snapshotting"},
  {"left": "index", "right": "local_repo", "direction": "dn", "key": "reset --soft head^", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "local_repo", "direction": "dn", "key": "reset --hard", "tags": "Basic Snapshotting"},
  {"left": "workspace", "right": "local_repo", "direction": "dn", "key": "checkout b", "tags": "Branching and Merging"},
  {"left": "workspace", "right": "local_repo", "direction": "dn", "key": "checkout -b x", "tags": "Branching and Merging"},
  {"left": "workspace", "right": "local_repo", "direction": "dn", "key": "merge x", "tags": "Branching and Merging"},
  {"left": "workspace", "right": "local_repo", "direction": "dn", "key": "rebase x", "tags": "Patching"},
  {"left": "workspace", "right": "local_repo", "direction": "dn", "key": "cherry-pick x", "tags": "Patching"},
  {"left": "workspace", "right": "local_repo", "direction": "dn", "key": "revert x"},
  {"left": "index", "right": "local_repo", "direction": "status", "key": "diff --cached", "tags": "Basic Snapshotting,Inspection and Comparison,Patching"},
  {"left": "index", "right": "local_repo", "direction": "up", "key": "commit", "tags": "Basic Snapshotting"},
  {"left": "index", "right": "local_repo", "direction": "up", "key": "commit --amend", "tags": "Basic Snapshotting"},
  {"left": "local_repo", "right": "local_repo", "direction": "status", "key": "log", "tags": "Branching and Merging, Inspection and Comparison"},
  {"left": "local_repo", "right": "local_repo", "direction": "status", "key": "diff x x", "tags": "Basic Snapshotting, Inspection and Comparison,Patching"},
  {"left": "local_repo", "right": "local_repo", "direction": "status", "key": "branch", "tags": "Branching and Merging"},
  {"left": "local_repo", "right": "local_repo", "direction": "status", "key": "branch -d x", "tags": "Branching and Merging"},
  {"left": "local_repo", "right": "remote_repo", "direction": "dn", "key": "branch --track x x", "tags": "Branching and Merging"},
  {"left": "workspace", "right": "remote_repo", "direction": "dn", "key": "clone x", "tags": "Creating Projects"},
  {"left": "workspace", "right": "remote_repo", "direction": "dn", "key": "pull x x", "tags": "Sharing and Updating"},
  {"left": "workspace", "right": "remote_repo", "direction": "dn", "key": "reset --hard x/x", "tags": "Basic Snapshotting"},
  {"left": "local_repo", "right": "remote_repo", "direction": "dn", "key": "fetch x x", "tags": "Sharing and Updating"},
  {"left": "local_repo", "right": "remote_repo", "direction": "up", "key": "push", "tags": "Sharing and Updating"},
  {"left": "local_repo", "right": "remote_repo", "direction": "up", "key": "push x x", "tags": "Sharing and Updating"},
  {"left": "local_repo", "right": "remote_repo", "direction": "up", "key": "push x x:x", "tags": "Sharing and Updating"},
  {"left": "remote_repo", "right": "remote_repo", "direction": "status", "key": "branch -r", "tags": "Branching and Merging"},
  {"left": "remote_repo", "right": "remote_repo", "direction": "status", "key": "push x :x", "tags": "Sharing and Updating"},
  {"left": "workspace", "right": "workspace", "direction": "dn", "key": "clean", "tags": "Administration"},
  {"left": "stash", "right": "workspace", "direction": "dn", "key": "stash save", "tags": "Branching and Merging"},
  {"left": "stash", "right": "workspace", "direction": "up", "key": "stash apply", "tags": "Branching and Merging"},
  {"left": "stash", "right": "workspace", "direction": "up", "key": "stash pop", "tags": "Branching and Merging"},
  {"left": "stash", "right": "stash", "direction": "status", "key": "stash list", "tags": "Branching and Merging"},
  {"left": "stash", "right": "stash", "direction": "status", "key": "stash show", "tags": "Branching and Merging"},
  {"left": "stash", "right": "stash", "direction": "status", "key": "stash drop", "tags": "Branching and Merging"},
  {"left": "stash", "right": "stash", "direction": "status", "key": "stash clear", "tags": "Branching and Merging"},
  {"left": "stash", "right": "local_repo", "direction": "up", "key": "stash branch x", "tags": "Branching and Merging"}
];

var translations = {
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
        index: 'The index (or "staging area) holds a snapshot of the content of the working tree. This snapshot is taken as the contents of the next commit.',
        local_repo: 'A subdirectory named .git that contains all of your necessary repository files — a Git repository skeleton. Typical branches: <b>master</b>, <b>feature-x</b>, <b>bugfix-y</b>',
        remote_repo: 'Version(s) of your project that are hosted on the Internet or network, ensuring all your changes are available for other developers. Default is "origin". Typical branches here: <b>master</b>, <b>shared-feature-x</b>, <b>release-y</b>'
      }
    },


    commands: {
      "status": {"cmd": "status", "docs": "Displays paths that have differences between the index file and the current HEAD commit, paths that have differences between the workspace and the index file, and paths in the workspace that are not tracked by git."},
      "diff": {"cmd": "diff", "docs": "Displays the differences not added to the index."},
      "diff x": {"cmd": "diff <commit or branch>", "docs": "View the changes you have in your workspace relative to the named <commit>. You can use HEAD to compare it with the latest commit, or a branch name to compare with the tip of a different branch"},
      "add x": {"cmd": "add <file... or dir...>", "docs": "Adds the current content of new or modified files to the index, thus staging that content for inclusion in the next commit. Use `add --interactive` to add the modified contents in the workspace interactively to the index."},
      "add -u": {"cmd": "add -u", "docs": "Adds the current content of modified (NOT NEW) files to the index.  This is similar to what 'git commit -a' does in preparation for making a commit."},
      "rm x": {"cmd": "rm <file...>", "docs": "Remove a file from the workspace and the index."},
      "mv x": {"cmd": "mv <file...>", "docs": "Move file in the workspace and the index."},
      "commit -a": {"cmd": "commit -a [-m 'msg']", "docs": "Commit all files changed since your last commit, except untracked files (ie. all files that are already listed in the index). Remove files in the index that have been removed from the workspace."},
      "checkout x": {"cmd": "checkout <files(s)...|dir>", "docs": "Updates the file or directory in the workspace. Does NOT switch branches."},
      "reset head x": {"cmd": "reset HEAD <file(s)...>", "docs": "Remove the specified files from the next commit. Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated."},
      "reset --soft head^": {"cmd": "reset --soft HEAD^", "docs": "Undo the last commit, leaving changes in the the index."},
      "reset --hard": {"cmd": "reset --hard", "docs": "Matches the workspace and index to the local tree. WARNING: Any changes to tracked files in the working tree since commit are lost. Use this if merging has resulted in conflicts and you'd like to start over. Pass ORIG_HEAD to undo the most recent successful merge and any changes after."},
      "checkout b": {"cmd": "checkout <branch>", "docs": "Switches branches by updating the index and workspace to reflect the specified branch, <branch>, and updating HEAD to be <branch>."},
      "checkout -b x": {"cmd": "checkout -b <name of new branch>", "docs": "Create a branch and switch to it"},
      "merge x": {"cmd": "merge <commit or branch>", "docs": "Merge changes from <branch name> into current branch.\rUse `&#8209;&#8209;no-commit` to leave changes uncommitted."},
      "rebase x": {"cmd": "rebase <upstream>", "docs": "Reverts all commits since the current branch diverged from <upstream>, and then re-applies them one-by-one on top of changes from the HEAD of <upstream>."},
      "cherry-pick x": {"cmd": "cherry-pick <commit>", "docs": "Integrate changes in the given commit into the current branch."},
      "revert x": {"cmd": "revert <commit>", "docs": "Reverse commit specified by <commit> and commit the result. This requires your working tree to be clean (no modifications from the HEAD commit)."},
      "diff --cached": {"cmd": "diff --cached [<commit>]", "docs": "View the changes you staged vs the latest commit. Can pass a <commit> to see changes relative to it."},
      "commit": {"cmd": "commit [-m 'msg']", "docs": "Stores the current contents of the index in a new commit along with a log message from the user describing the changes."},
      "commit --amend": {"cmd": "commit --amend", "docs": "Modify the last commit with the current index changes."},
      "log": {"cmd": "log", "docs": "Show recent commits, most recent on top. Options:\r`&#8209;&#8209;decorate` with branch and tag names on appropriate commits\r`&#8209;&#8209;stat` with stats (files changed, insertions, and deletions) \r`&#8209;&#8209;author=<author>`  only by a certain author\r`&#8209;&#8209;after=\"MMM DD YYYY\"` ex. (\"Jun 20 2008\") only commits after a certain date\r`&#8209;&#8209;before=\"MMM DD YYYY\"` only commits that occur before a certain date \r`&#8209;&#8209;merge` only the commits involved in the current merge conflicts"},
      "diff x x": {"cmd": "diff <commit> <commit>", "docs": "View the changes between two arbitrary commits"},
      "branch": {"cmd": "branch", "docs": "List all existing branches. Option -r causes the remote-tracking branches to be listed, and option -a shows both."},
      "branch -d x": {"cmd": "branch -d <branch>", "docs": "Delete an specified branch. Use -D to force."},
      "branch --track x x": {"cmd": "branch --track <new> <remote/branch>", "docs": "Create a new local branch that tracks a remote branch."},
      "clone x": {"cmd": "clone <repo>", "docs": "Download the repository specified by <repo> and checkout HEAD of the master branch."},
      "pull x x": {"cmd": "pull <remote> <refspec>", "docs": "Incorporates changes from a remote repository into the current branch. In its default mode, `git pull` is shorthand for `git fetch` followed by `git merge FETCH_HEAD`."},
      "reset --hard x/x": {"cmd": "reset --hard <remote>/<branch>", "docs": "Reset local repo and working tree to match a remote branch. Use `reset &#8209;&#8209;hard origin/master` to throw away all commits to the local master branch. Use this to start over on a failed merge."},
      "fetch x x": {"cmd": "fetch <remote> <refspec>", "docs": "Download objects and refs from another repository."},
      "push": {"cmd": "push", "docs": "update the server with your commits across all branches that are *COMMON* between your local copy and the server.Local branches that were never pushed to the server in the first place are not shared"},
      "push x x": {"cmd": "push <remote> <branch>", "docs": "Push new (or existing) branch to remote repository"},
      "push x x:x": {"cmd": "push <remote> <branch>:<branch>", "docs": "Push new branch to remote repository with a different name"},
      "branch -r": {"cmd": "branch -r", "docs": "List remote branches"},
      "push x :x": {"cmd": "push <remote> :<branch>", "docs": "Remove a remote branch. Literally &quot;push nothing to this branch&quot; "},
      "clean": {"cmd": "clean", "docs": "Cleans the working tree by recursively removing files that are not under version control, starting from the current directory."},
      "stash save": {"cmd": "stash save [<msg>]", "docs": "Save your local modifications to a new stash, and run git reset &#8209;&#8209;hard to revert them. The <msg> part is optional and gives the description along with the stashed state. For quickly making a snapshot, you can omit both \"save\" and <msg>."},
      "stash apply": {"cmd": "stash apply [<stash>]", "docs": "Move changes from the specified stash into the workspace. The latest stash is the default."},
      "stash pop": {"cmd": "stash pop", "docs": "Applies the changes from the last (or specified) stash and then removes the given stash."},
      "stash list": {"cmd": "stash list", "docs": "List the stashes that you currently have."},
      "stash show": {"cmd": "stash show [<stash>]", "docs": "Show the changes recorded in the stash as a diff between the stashed state and its original parent. When no <stash> is given, shows the latest one."},
      "stash drop": {"cmd": "stash drop [<stash>]", "docs": "Remove a single stashed state from the stash list. When no <stash> is given, it removes the latest one."},
      "stash clear": {"cmd": "stash clear", "docs": "Remove all the stashed states. Note that those states will then be subject to pruning, and may be impossible to recover."},
      "stash branch x": {
        "cmd": "stash branch <branchname> [<stash>]",
        "docs": "Creates and checks out a new branch named <branchname> starting from the commit at which the <stash> was originally created, applies the changes recorded in <stash> to the new working tree and index. \rIf that succeeds, and <stash> is a reference of the form stash@{<revision>}, it then drops the <stash>. When no <stash> is given, applies the latest one. \rThis is useful if the branch on which you ran git stash save has changed enough that git stash apply fails due to conflicts. Since the stash is applied on top of the commit that was HEAD at the time git stash was run, it restores the originally stashed state with no conflicts."
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
        local_repo: 'Un sous-répertoire nommé .git qui contient tous les fichiers nécessaires au référentiel. Branches typiques : <b>master</b>, <b>fonction-x</b>, <b>correctif-y</b>',
        remote_repo: 'Versions de votre projet qui sont hébergés sur le réseau ou Internet, pour mettre toutes vos modifications à la disposition d\'autres développeurs. Par défaut «origin». Branches typiques : <b>master</b>, <b>fonction-x-partagée</b>, <b>version-y</b>'
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
      "commit -a": {"cmd": "commit -a [-m 'MESSAGE']", "docs": "Fait un commit de tous les fichiers qui ont changé depuis le dernier commit, à l'exception des fichiers non suivis (ie. tous les fichiers qui sont dans l'INDEX). Supprime de l'INDEX les fichiers qui ont été supprimés de l'ESPACE_DE_TRAVAIL."},
      "checkout x": {
        "cmd": "checkout <fichier(s) ou dossier(s)>",
        "docs": "Met à jour les FICHIER(S) ou DOSSIER(S) dans l'ESPACE_DE_TRAVAIL en écrasant toutes les modifications locales. Ne PAS changer de branches."
      },
      "checkout b": {"cmd": "checkout <branche>", "docs": "Échange les branches en mettant à jour l'ESPACE_DE_TRAVAIL et l'INDEX pour charger la BRANCHE spécifiée en positionnant la TÊTE dessus."},
      "reset head x": {"cmd": "reset HEAD <fichier(s)>", "docs": "Supprime les FICHIER(S) spécifiés du prochain commit. Réinitialise l'INDEX mais pas l'ESPACE_DE_TRAVAIL (i.e. les fichiers modifiés sont préservés mais non marqués pour commit) et indique ce qui n'a pas été mis à jour."},
      "reset --soft head^": {"cmd": "reset --soft HEAD^", "docs": "Défait le dernier commit en laissant les modifications dans l'INDEX."},
      "reset --hard": {"cmd": "reset --hard", "docs": "Fait correspondre l'ESPACE_DE_TRAVAIL et l'INDEX avec le DÉPÔT_LOCAL. ATTENTION : toutes les modifications apportées à des fichiers suivis dans l'ESPACE_DE_TRAVAIL depuis le dernier commit sont perdues. Utilisez ceci lorsqu'une fusion a engendré des conflits et que vous souhaitez recommencer. Précisez ORIG_HEAD pour défaire la dernière fusion réussie et les modifications qui ont suivi."},
      "checkout -b x": {"cmd": "checkout -b <branche>", "docs": "Crée une nouvelle BRANCHE et se positionne dessus."},
      "merge x": {"cmd": "merge <commit ou branche>", "docs": "Fusionne les modifications du COMMIT ou de la BRANCHE dans la branche courante. Utilisez --no-commit pour ignorer les modifications n'ayant pas encore fait l'objet d'un commit."},
      "rebase x": {"cmd": "rebase <source>", "docs": "Défait tous les commits effectués depuis que la branche à divergé de SOURCE puis les refait tous un par un sur les modifications apportées à la TÊTE de SOURCE."},
      "cherry-pick x": {"cmd": "cherry-pick <commit>", "docs": "Intègre les modifications du COMMIT spécifié dans la branche courante."},
      "revert x": {"cmd": "revert <commit>", "docs": "Défait le COMMIT spécifié puis fait un commit du résultat. Cela nécessite que l'ESPACE_DE_TRAVAIL soit propre (sans modifications sur la TÊTE du commit)."},
      "diff --cached": {"cmd": "diff --cached [COMMIT]", "docs": "Montre les modifications que vous avez placé dans la REMISE par rapport au dernier commit. Vous pouvez préciser un COMMIT pour voir juste les modifications le concernant."},
      "commit": {"cmd": "commit [-m 'MESSAGE']", "docs": "Enregistre le contenu de l'INDEX dans un nouveau commit en y associant un MESSAGE utilisateur décrivant les modifications."},
      "commit --amend": {"cmd": "commit --amend", "docs": "Modifie le dernier commit en y apportant les modifications se trouvant dans l'INDEX."},
      "log": {"cmd": "log", "docs": "Montre les commits récents, les plus récents au début. Options : --decorate avec les noms de branches et d'étiquettes sur les commits, --stat avec des statistiques (fichiers modifiés, insertions et suppressions), --author=AUTEUR seuleument d'un certain AUTEUR, --after=\"MMM JJ AAAA\" ex. (\"Jun 20 2008\") limité aux commits faits après une certaine date, --before=\"MMM JJ AAAA\" limité aux commits faits avant une certaine date, --merge limité aux commits concernés par les conflits de fusion courants."},
      "diff x x": {"cmd": "diff <COMMIT_1> <COMMIT_2>", "docs": "Montre les modifications entre deux commits."},
      "branch": {"cmd": "branch", "docs": "Liste les branches locales existantes. L'option -r permet de lister les branches distantes et l'option -a montre les branches locales et distantes."},
      "branch -d x": {"cmd": "branch -d <branche>", "docs": "Supprime la BRANCHE spécifiée. Utilisez -D pour forcer la suppression."},
      "branch --track x x": {"cmd": "branch --track <branche> <BRANCHE_DISTANTE>", "docs": "Crée une BRANCHE locale qui suit la BRANCHE_DISTANTE."},
      "clone x": {"cmd": "clone <dépôt_distant>", "docs": "Télécharge le DÉPÔT_DISTANT et se positionne sur la TÊTE de sa branche master."},
      "pull x x": {"cmd": "pull <dépôt_distant> <RÉFÉRENCE>", "docs": "Récupère les modifications associées à la RÉFÉRENCE du DÉPÔT_DISTANT et les fusionne dans la branche courante."},
      "reset --hard x/x": {"cmd": "reset --hard <dépôt_distant> <branche>", "docs": "Réinitialise l'ESPACE_DE_TRAVAIL et le DÉPÔT_LOCAL pour les faire correspondre à la BRANCHE du DÉPÔT_DISTANT. Utilisez 'git reset --hard origin/master' pour rejeter tous les commits du DÉPÔT_LOCAL. Utilisez ceci pour reprendre après une fusion qui a échoué."},
      "fetch x x": {"cmd": "fetch <dépôt_distant> <RÉFÉRENCE>", "docs": "Télécharge les objets et les références associés à la RÉFÉRENCE du DÉPÔT_DISTANT."},
      "push": {"cmd": "push", "docs": "Met à jour le serveur en appliquant les commits sur toutes les branches *COMMUNNES* au DÉPÔT_LOCAL et au serveur. Les branches locales qui n'ont jamais été poussées sur le serveur ne sont pas partagées."},
      "push x x": {"cmd": "push <dépôt_distant> <branche>", "docs": "Pousse la BRANCHE spécifiée vers le DÉPÔT_DISTANT."},
      "push x x:x": {"cmd": "push <dépôt_distant> <BRANCHE_1>:<BRANCHE_2>", "docs": "Pousse la nouvelle BRANCHE_1 vers le DÉPÔT_DISTANT en la renommant BRANCHE_2."},
      "branch -r": {"cmd": "branch -r", "docs": "Liste les branches distantes."},
      "push x :x": {"cmd": "push <dépôt_distant> :<branche>", "docs": "Supprime la BRANCHE du DÉPÔT_DISTANT."},
      "clean": {"cmd": "clean", "docs": "Nettoie l'ESPACE_DE_TRAVAIL en supprimant récursivement les fichiers qui ne sont pas sous le contrôle de version, en commençant par le répertoire courant."},
      "stash save": {"cmd": "stash save ['MESSAGE']", "docs": "Enregistre les modifications locales dans la REMISE puis fait un 'git reset --hard' pour les défaire. Le 'MESSAGE' optionnel donne la description associée à l'état enregistré dans la REMISE. Pour faire un instantanné rapide, vous pouvez omettre à la fois \"save\" et le 'MESSAGE'."},
      "stash apply": {"cmd": "stash apply [état]", "docs": "Déplace les modifications associées à l'ÉTAT de la REMISE vers l'ESPACE_DE_TRAVAIL. La dernière REMISE est prise par défaut."},
      "stash pop": {"cmd": "stash pop", "docs": "Applique les modifications du dernier état de la REMISE puis les supprime de la REMISE."},
      "stash list": {"cmd": "stash list", "docs": "Liste les états dans la REMISE."},
      "stash show": {"cmd": "stash show [état]", "docs": "Montre les modifications associées à l'ÉTAT spécifié sous la forme d'un diff entre l'ÉTAT et son parent initial. Lorsqu'aucun ÉTAT n'est précisé, le dernier est montré."},
      "stash drop": {"cmd": "stash drop [état]", "docs": "Supprime l'ÉTAT de la REMISE. Lorsqu'aucun ÉTAT n'est précisé, le dernier est supprimé."},
      "stash clear": {"cmd": "stash clear", "docs": "Supprime tous les états de la REMISE. Notez que ces états seront alors candidats à l'élagage et pourront être impossible à restaurer."},
      "stash branch x": {"cmd": "stash branch <branche> [état]", "docs": "Crée et charge une nouvelle BRANCHE à partir du commit d'où provient l'ÉTAT puis applique les modifications enregistrées dans l'ÉTAT aux nouveaux ESPACE_DE_TRAVAIL et INDEX. Si cela réussit, l'ÉTAT devient une référence de la forme ÉTAT@{RÉVISION} et l'ÉTAT est supprimé. Lorsqu'aucun ÉTAT n'est donné, le dernier est appliqué. Ceci est utile si une branche sur laquelle vous avez fait un 'stash' a suffisemment changée pour que 'stash apply' échoue à cause de conflits. Puisque l'état est apliqué sur le commit qui était en TÊTE au moment où le 'stash' a été effectué, l'état original est restauré sans conflits."
      }
    }
  }
}

lang = 'en'
if (/lang=fr/.exec(document.location.search)) {
  lang = 'fr'
}

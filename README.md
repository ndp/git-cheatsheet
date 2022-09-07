# Git Cheatsheet

<div align="center">
  <img src="https://i.imgur.com/vD2hXkf.png" />
</div>

Standalone HTML page that organizes Git's commands by what they affect.
Built as I was learning git and trying to understand it. It's proved useful
to others in the same endeavor.

## Contributors

* Andrew Peterson, [NDP Software](https://ndpsoftware.com)
* French translation by [Bernard Opic](https://blogs.media-tips.com/bernard.opic/)
* Simplified Chinese translation by https://github.com/acecode
* Traditional Chinese translation by https://github.com/Hsins
* https://github.com/GerjanOnline -- bug fix
* Spanish translation by https://github.com/sminutoli
* Korean translation by https://github.com/ujuc
* Italian translation by https://github.com/antoniopantaleo
* Vietnamese translation by https://github.com/trgiangdo
* Portuguese translation by https://github.com/HenriqueAJNB

Comments and pull requests welcome.

## To add a translation

1. Determine the 2-letter language code (ISO 639-1). See the existing files in `git-cheatsheet/lang`.
2. Create a new JSON file with the name of the code in `git-cheatsheet/lang`. Choose one of the other languages as a starting point.
3. Write your translation. Use the exact identical property keys in the JSON structure. Only change the values.
4. Add a link for users to choose the translation. In `git-cheatsheet.html`, insert (alphabetically) a new line that looks like:
```
<a class="lang" data-lang="vi" data-docs="Vietnamese translation by trgiangdo">vn</a>
```
5. Add your name to the README.md above.
6. Test manually
7. Create a pull request. Give me a couple days to reply, but then feel free to write.
8. Once it's merged, tell people about it.

Keep the PR restricted to changes related to the translation.


## Development

I'm in the process of moving the source code into modern JS, and
using `babel` to transpile it. New files are in the `src` folder, and using `yarn build` to transpile.

CI is on [CircleCI](https://app.circleci.com/pipelines/github/ndp/git-cheatsheet)

## Deploy

Use FTP to upload to [NDP Software](http://www.ndpsoftware.com/)

Exceptions caught and logged on [Rollbar](https://rollbar.com/ndpsoftware/git-cheatsheet/) (private).

## FAQ

### Are there any "features"?

You can navigate over different "locations" and commands with the mouse, arrow keys, or vi-like keystrokes.

### Why is it called "Cheat Sheet"?

It's pretty silly, actually. I had a little SEO juice from a couple other real cheat sheets,
so I thought I'd just leverage that term. In retrospect, I think this was an
okay tactic, as it brought people to the page.

## Like it or have ideas?

If you like this and would like me to do more intereactions like this, send me an email... or money https://venmo.com/ndpsoft or  https://www.gofundme.com/ndp-software

## License

Copyright (c) 2013-2022 Andrew J. Peterson, NDP Software

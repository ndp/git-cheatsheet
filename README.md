# Git Cheatsheet

<div style="text-align: center">
  <img alt="screenshot of app" src="https://i.imgur.com/vD2hXkf.png" style="max-width: 500px;"/>
</div>

Standalone HTML page that organizes Git's commands by what they affect.
Built as I was learning git and trying to understand it. It's proved useful
to others in the same endeavor.

## Contributors

* Development by Andrew Peterson, <img src="https://github.com/ndp-software.png?size=32" style="vertical-align: middle;">  [NDP Software](https://ndpsoftware.com)
* French translation by [Bernard Opic](https://blogs.media-tips.com/bernard.opic/)
* Simplified Chinese translation by [acecode](https://github.com/acecode)
* Improve Simplified Chinese translation by <img src="https://github.com/rebornsick.png?size=32" style="vertical-align: middle;"> [rebornsick](https://github.com/rebornsick)
* Traditional Chinese translation by <img src="https://github.com/Hsins.png?size=32" style="vertical-align: middle;"> [Hsins](https://github.com/Hsins)
* Bug fix by <img src="https://github.com/GerjanOnline.png?size=32" style="vertical-align: middle;"> [GerjanOnline](https://github.com/GerjanOnline)
* Spanish translation by <img src="https://github.com/sminutoli.png?size=32" style="vertical-align: middle;"> [sminutoli](https://github.com/sminutoli)
* Korean translation by <img src="https://github.com/ujuc.png?size=32" style="vertical-align: middle;"> [ujuc](https://github.com/ujuc)
* Italian translation by <img src="https://github.com/antoniopantaleo.png?size=32" style="vertical-align: middle;"> [antoniopantaleo](https://github.com/antoniopantaleo)
* Vietnamese translation by <img src="https://github.com/trgiangdo.png?size=32" style="vertical-align: middle;"> [trgiangdo](https://github.com/trgiangdo)
* Portuguese translation by <img src="https://github.com/HenriqueAJNB.png?size=32" style="vertical-align: middle;"> [HenriqueAJNB](https://github.com/HenriqueAJNB)
* Russian translation by <img src="https://github.com/vistar.png?size=32" style="vertical-align: middle;"> [vistar](https://github.com/vistar)

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

Files are in the `src` folder. To see it locally:
- `yarn test` to run the tests
- `yarn build` to transpile.
- `yarn start` to serve
- Open `http://127.0.0.1:8080/git-cheatsheet.html` to view the page

CI is on [Github Actions](https://github.com/ndp/git-cheatsheet/actions).

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

If you like this and would like me to do more intereactions like this, send me an email... or [patreon.com/ndp](https://patreon.com/ndp)

## License

Copyright (c) 2013-2024 Andrew J. Peterson, NDP Software

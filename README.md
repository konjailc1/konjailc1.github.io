# Quang Do Hong — portfolio

One-page freelance site for GitHub Pages: https://konjailc1.github.io

Plain HTML, CSS, and JavaScript. No build step and no third-party scripts.

## Edit

Open `script.js`.

- `CONFIG` — name, avatar, and contact links. An empty link is hidden. Web links must start with `https://`. Email is stored as `user` and `domain`, not as a full address, and the mail link is built in the browser.
- `PROJECTS` — one entry per project. Set `image` to a file in `assets/img/`, or leave it `""` for a placeholder. `repo` and `demo` must start with `https://`. An empty `demo` hides the live demo button.
- `I18N` — every sentence on the page, in Vietnamese (`vi`) and English (`en`).

To add a project, copy an object in `PROJECTS`, then add `project.<id>.title`, `project.<id>.summary`, and (if it has an image) `project.<id>.alt` to `I18N`.

Leave `avatar` as `""` to show the initials QD. Otherwise set a file path under `assets/img/`.

## Preview locally

The content security policy blocks the page when it is opened as a file. Serve the folder over HTTP.

```powershell
python -m http.server 8000
```

Open http://localhost:8000

On a first visit the language follows the browser (`vi` when it starts with `vi`, otherwise English). A click on VI or EN is remembered in local storage.

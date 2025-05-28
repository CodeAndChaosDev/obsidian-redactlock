```markdown
# 🔒 Obsidian RedactLock

A lightweight Obsidian plugin that lets you **redact sensitive content** in your notes, requiring a **password to reveal** — and allows toggling visibility on demand.

> ⚠️ Currently in `v0.1-alpha` — feedback and contributions welcome!

---

## ✨ Features

- 🔐 Hide passwords, secrets, or sensitive text blocks in notes.
- 🔓 Reveal content **only** with the correct master password.
- 🔄 Toggle back to redacted with a single click (no re-auth needed).
- 💼 Clean, secure UX with native Obsidian style.

---

## 📦 Folder Structure

```

obsidian-redactlock/
├── obsidian-redactlock/           # Source TypeScript code
│   ├── main.ts    # Core plugin logic
│   |── passwordModal.ts
|   └── ... # Rest of the stuff
├── plugin/        # Compiled plugin files for Obsidian
│   ├── main.js
│   ├── manifest.json
│   └── styles.css (optional)
├── patch-notes/
│   └── V0.1-alpha.md
└── README.md

`````

---

## 🧪 How It Works

1. Add a redacted block to your note:

    ````markdown
    ```redact
    my-secret-password
    ```
    ````

2. In **preview mode**, you'll see:

    > 🔒 Reveal Hidden Content

![Preview Photo](/data/img/image.png)

3. Click it → Enter your master password → Reveals your content.
![Preview Photo](/data/img/image1.png)
4. Click again → Redacts it back.
![Preview](/data/img/image2.png)
---

## 🔧 How to Install (Manual)

> Automatic release coming soon via Community Plugins.

1. Go to your Obsidian vault.
2. Navigate to `.obsidian/plugins/`
3. Clone or copy the `plugin/` directory here:

```bash
cd .obsidian/plugins/
git clone https://github.com/YOUR-USERNAME/obsidian-redactlock.git
`````

4. Enable the plugin in Obsidian Settings → Community Plugins.

---

## 🔐 Default Master Password

The current master password is hardcoded as:

```
letmein
```

This will be made configurable in a future release. For now, you can change it in `src/main.ts`:

```ts
const MASTER_PASSWORD = "letmein";
```

Then rebuild with:

```bash
npm install
npm run build
```

---

## 🛣 Roadmap

* [ ] Plugin settings panel (custom master password)
* [ ] Blur-style redaction
* [ ] Timeout-based auto-hide
* [ ] Per-block passwords
* [ ] Encryption-based mode (optional)

---

## 🧙 For Developers

### Build Instructions

```bash
git clone https://github.com/CodeAndChaosDev/obsidian-redactlock
cd obsidian-redactlock
npm install
npm run build
```

Output files go to `/plugin`, which you can copy into Obsidian.

---

## 📜 Patch Notes

See [`patch-notes/V0.1-alpha.md`](./Patch-Notes/V0.1-Alpha.md) for changelog details.

---

## 🤝 Contributing

Pull requests, suggestions, and issues are welcome!

1. Fork the repo
2. Make changes
3. Submit a PR 🚀

---

## 🛡 Disclaimer

This plugin does **not encrypt** your notes — it simply hides content unless the password is provided. Use with discretion for personal use only.

---

## 📧 Contact

Made by \[Bruno Sousa] - [CodeAndChaos] — Feedback or feature ideas? Open an issue or reach out!

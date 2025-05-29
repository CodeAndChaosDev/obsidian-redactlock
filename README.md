```markdown
# 🔒 Obsidian RedactLock

A lightweight Obsidian plugin that lets you **redact sensitive content** in your notes, requiring a **password to reveal** — and allows toggling visibility on demand.

> ⚠️ Currently in `v0.1-alpha` — feedback and contributions welcome!

---

## ✨ Features

- 🔐 Hide passwords, secrets, or sensitive text blocks in notes.
- 🔓 Reveal content **only** with the correct master password.
- 🔄 Toggle back to redacted with a single click (no re-auth needed).
- ⏳ Auto-hide revealed content after a set time (optional).
- 🛠 Plugin settings panel for customization.
- 💼 Clean, secure UX with native Obsidian style.

---

## 📦 Folder Structure


obsidian-redactlock/
├── redactlock/                  # Source TypeScript code
│   ├── main.ts                  # Core plugin logic
│   └── PasswordModal.ts         # Custom password modal logic
├── plugin/                      # Compiled plugin files for Obsidian
│   ├── main.js
│   ├── manifest.json
│   └── styles.css (optional)
├── patch-notes/
│   └── V0.1-alpha.md
└── README.md

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

3. Click it → Enter your master password → Reveals your content.
4. Click again → Redacts it back.

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

4. Enable the plugin in Obsidian Settings → **Community Plugins**.

---

## ⚙️ Plugin Settings

Go to **Settings → RedactLock** to configure the following options:

### 🔑 Master Password

Set your custom password for unlocking redacted blocks.

> This replaces the default password (`letmein`).

### ⏱ Auto-hide Timeout

Enable auto-hiding of revealed content after a delay:

* ✅ Toggle: Enable or disable auto-hide
* ⏲ Timeout (seconds): Delay before re-redacting the block

If enabled, the plugin will automatically redact the content again after the set duration.

---

## 🔐 Default Master Password

If no password is set via the plugin settings, the fallback is:

```
letmein
```

You can change it in `redactlock/main.ts`:

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

✅ = Completed
🟡 = In progress
⬜ = Planned

### High / Medium Priority

* ✅ Plugin settings panel
* ✅ Auto-hide timeout toggle
* ✅ Toggle redacted state (re-redact)
* ⬜ Blur-style redaction effect
* ⬜ Per-block passwords
* ⬜ Encryption-based mode (optional)

### Low Priority

* ⬜ Obsidian command palette support
* ⬜ Markdown syntax customizations
* ⬜ Lock/unlock all blocks at once
* ⬜ Theming / UI enhancements

---

## 🧙 For Developers

### Build Instructions

```bash
git clone https://github.com/CodeAndChaosDev/obsidian-redactlock
cd obsidian-redactlock
npm install
npm run build
```

Output files go to `/plugin`, which you can copy into Obsidian’s `.obsidian/plugins/` folder.

---

## 📜 Patch Notes

See [`patch-notes/V0.2-alpha.md`](./Patch-Notes/V0.2-alpha.md) for changelog details.

---

## 🤝 Contributing

Pull requests, suggestions, and issues are welcome!

1. Fork the repo
2. Make your changes
3. Submit a PR 🚀

---

## 🛡 Disclaimer

This plugin does **not encrypt** your notes — it simply hides content unless the password is provided. Use with discretion for personal use only.

---

## 📧 Contact

Made by **Bruno Sousa** — aka \[CodeAndChaos]
Feedback or feature ideas? Open an issue or reach out!

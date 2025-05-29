import { Plugin, MarkdownPostProcessorContext, Notice } from "obsidian";
import { PasswordModal } from "./passwordModal";
import { RedactLockSettings, DEFAULT_SETTINGS } from "./settings";
import { RedactLockSettingTab } from "./settingsTab";

const MASTER_PASSWORD = "letmein"; // You can change this or make it configurable

export default class RedactLockPlugin extends Plugin {
	settings: RedactLockSettings;

	async onload() {
		await this.loadSettings();

		this.addSettingTab(new RedactLockSettingTab(this.app, this));

		this.registerMarkdownCodeBlockProcessor("redact", async (source, el, ctx) => {
			const container = el.createDiv();
			const isBlur = this.settings.useBlurStyle;
			const password = this.settings.password;

			let redacted = true;
			const contentEl = container.createDiv();
			contentEl.setText(source);

			const updateVisibility = () => {
				if (redacted) {
					if (isBlur) {
						contentEl.style.filter = "blur(8px)";
					} else {
						contentEl.setText("█".repeat(source.length));
					}
				} else {
					contentEl.setText(source);
					contentEl.style.filter = "none";
				}
			};

			updateVisibility();

			const btn = container.createEl("button", { text: redacted ? "Unlock" : "Redact" });
			btn.onclick = async () => {
				if (redacted) {
					const input = await new Promise<string | null>((resolve) => {
						const modal = new PasswordModal(this.app, (result) => resolve(result));
						modal.open();
					});
					if (input === password) {
						redacted = false;
						updateVisibility();

						// Auto-hide logic
						if (this.settings.autoHide) {
							setTimeout(() => {
								redacted = true;
								updateVisibility();
								btn.setText("Unlock");
							}, this.settings.autoHideDelay * 1000);
						}
					} else {
						new Notice("Wrong password!");
					}
				} else {
					redacted = true;
					updateVisibility();
				}
				btn.setText(redacted ? "Unlock" : "Redact");
			};
		});
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

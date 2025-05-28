import { Plugin, MarkdownPostProcessorContext, Notice } from "obsidian";
import { PasswordModal } from "./passwordModal";

const MASTER_PASSWORD = "letmein"; // You can change this or make it configurable

export default class RedactLockPlugin extends Plugin {
	async onload() {
		this.registerMarkdownCodeBlockProcessor("redact", async (source, el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
			const content = source.trim();
			const container = el.createDiv({ cls: "redact-container" });

			let revealed = false;

			const button = container.createEl("button", { text: "🔒 Reveal Hidden Content" });
			let contentEl: HTMLElement | null = null;

			const updateView = () => {
				container.empty();
				const toggleButton = container.createEl("button", { text: revealed ? "🔒 Hide Content" : "🔒 Reveal Hidden Content" });
				toggleButton.onclick = () => {
					if (!revealed) {
						new PasswordModal(this.app, (entered) => {
							if (entered === MASTER_PASSWORD) {
								revealed = true;
								updateView();
							} else {
								new Notice("Incorrect password.");
							}
						}).open();
					} else {
						revealed = false;
						updateView();
					}
				};

				if (revealed) {
					contentEl = container.createEl("pre", { text: content });
				}
			};

			updateView();
		});
	}
}

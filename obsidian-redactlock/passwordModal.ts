import { App, Modal, Setting } from "obsidian";

export class PasswordModal extends Modal {
	private onSubmit: (password: string) => void;

	constructor(app: App, onSubmit: (password: string) => void) {
		super(app);
		this.onSubmit = onSubmit;
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.createEl("h2", { text: "Enter Master Password" });

		new Setting(contentEl)
			.setName("Password")
			.addText((text) =>
				text
					.setPlaceholder("Enter password")
					.setValue("")
					.onChange((value) => {
						// optional real-time use
					})
			)
			.addButton((btn) =>
				btn
					.setButtonText("Submit")
					.setCta()
					.onClick(() => {
						const input = contentEl.querySelector("input");
						if (input instanceof HTMLInputElement) {
							this.close();
							this.onSubmit(input.value);
						}
					})
			);
	}

	onClose() {
		this.contentEl.empty();
	}
}

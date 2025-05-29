import { App, PluginSettingTab, Setting } from "obsidian";
import RedactLockPlugin from "./main";

export class RedactLockSettingTab extends PluginSettingTab {
	plugin: RedactLockPlugin;

	constructor(app: App, plugin: RedactLockPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();
		containerEl.createEl("h2", { text: "RedactLock Settings" });

		new Setting(containerEl)
			.setName("Master Password")
			.setDesc("Used to unlock all redacted content.")
			.addText(text => text
				.setPlaceholder("Enter password")
				.setValue(this.plugin.settings.password)
				.onChange(async (value) => {
					this.plugin.settings.password = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName("Use Blur Style")
			.setDesc("Blur text instead of replacing with █ characters.")
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.useBlurStyle)
				.onChange(async (value) => {
					this.plugin.settings.useBlurStyle = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName("Auto-Hide Timeout")
			.setDesc("Automatically re-redact text after being revealed.")
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.autoHide)
				.onChange(async (value) => {
					this.plugin.settings.autoHide = value;
					await this.plugin.saveSettings();
					this.display(); // Refresh UI to show/hide delay input
				}));

		if (this.plugin.settings.autoHide) {
			new Setting(containerEl)
				.setName("Auto-Hide Delay (seconds)")
				.setDesc("How long text stays visible after unlocking.")
				.addText(text => text
					.setPlaceholder("60")
					.setValue(this.plugin.settings.autoHideDelay.toString())
					.onChange(async (value) => {
						const delay = parseInt(value);
						if (!isNaN(delay)) {
							this.plugin.settings.autoHideDelay = delay;
							await this.plugin.saveSettings();
						}
					}));
		}
	}
}

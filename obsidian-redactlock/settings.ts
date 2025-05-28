export interface RedactLockSettings {
	password: string;
	useBlurStyle: boolean;
	autoHide: boolean;
	autoHideDelay: number; // in seconds
}

export const DEFAULT_SETTINGS: RedactLockSettings = {
	password: "letmein", // default until user changes
	useBlurStyle: false,
	autoHide: false,
	autoHideDelay: 60,
};

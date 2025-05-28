import * as CryptoJS from "crypto-js";

export class Encryptor {
	static encrypt(text: string, password: string): string {
		return CryptoJS.AES.encrypt(text, password).toString();
	}

	static decrypt(ciphertext: string, password: string): string {
		const bytes = CryptoJS.AES.decrypt(ciphertext, password);
		return bytes.toString(CryptoJS.enc.Utf8);
	}
}

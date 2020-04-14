import CryptoJS from 'crypto-js';

const privateKey = process.env.PRIVATE_KEY;

export const encrypt = (value) => {

  let ciphertext = CryptoJS.AES.encrypt(value.toString(), privateKey.toString()).toString();

  return ciphertext;
};

export const decrypt = (ciphertext) => {

  let bytes = CryptoJS.AES.decrypt(ciphertext, privateKey);

  let originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText;
};
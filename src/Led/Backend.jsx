export function encrypt(plain, key) {
  // if (key.length < plain.length) {
  //   key = key.padEnd(plain.length, key);
  // }

  const plainBuff = Buffer.from(plain, "base64");
  const keyBuff = Buffer.from(key, "base64");

  const length = Math.max(plainBuff.length, keyBuff.length);
  const buffer = Buffer.allocUnsafe(length);

  for (let i = 0; i < length; ++i) {
    buffer[i] = plainBuff[i] ^ keyBuff[i];
  }

  const secret = buffer.toString("base64");

  return secret;
}

export function decrypt(cipher, key) {
  // if (key.length < cipher.length) {
  //   key = key.padEnd(cipher.length, key);
  // }
  const keyBuff = Buffer.from(key, "base64");
  const cipherBuff = Buffer.from(cipher, "base64");

  const length = Math.max(cipherBuff.length, keyBuff.length);
  const buffer = Buffer.allocUnsafe(length);

  for (let i = 0; i < length; ++i) {
    buffer[i] = cipherBuff[i] ^ keyBuff[i];
  }

  const secret = buffer.toString("base64");
  return secret;
}

export async function genKey(key) {
  return key.toString("base64");
}

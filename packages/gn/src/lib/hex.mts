/**
 * @summary Hexadecimal conversion for octet strings
 * @description
 *
 * Pure JavaScript, so it does not depend on Node.js `Buffer`. Used by the
 * string, JSON, and key forms. Not part of the public API.
 *
 * @internal
 */

const HEX: string = "0123456789abcdef";

/**
 * @summary Encode bytes as lowercase hexadecimal
 * @internal
 */
export function bytesToHex(bytes: ArrayLike<number>): string {
    let out: string = "";
    for (let i: number = 0; i < bytes.length; i++) {
        const b: number = bytes[i] ?? 0;
        out += HEX[b >> 4]! + HEX[b & 0x0f]!;
    }
    return out;
}

/**
 * @summary Decode a hexadecimal string into bytes
 * @description
 *
 * Whitespace is ignored. An odd number of digits, or any non-hex character,
 * is a `SyntaxError`.
 *
 * @internal
 */
export function hexToBytes(hex: string): Uint8Array {
    const normalized: string = hex.replace(/\s/g, "");
    if ((normalized.length % 2) !== 0) {
        throw new SyntaxError("hexadecimal string must contain an even number of digits");
    }
    if (!/^[0-9a-fA-F]*$/.test(normalized)) {
        throw new SyntaxError("invalid hexadecimal string");
    }
    const bytes: Uint8Array = new Uint8Array(normalized.length / 2);
    for (let i: number = 0; i < bytes.length; i++) {
        bytes[i] = Number.parseInt(normalized.slice(i * 2, (i * 2) + 2), 16);
    }
    return bytes;
}

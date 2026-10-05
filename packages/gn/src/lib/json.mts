import type { UnboundedDirectoryString } from "./UnboundedDirectoryString.ta.mjs";

/**
 * JSON Encoding Rules encoding of `UnboundedDirectoryString`.
 */
export type UnboundedDirectoryStringJSON =
    | { teletexString: string }
    | { printableString: string }
    | { bmpString: string }
    | { universalString: string }
    | { uTF8String: string };

function bytesToHex(bytes: Uint8Array): string {
    return Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

function hexToBytes(hex: string): Uint8Array {
    const normalized = hex.replace(/\s/g, "");
    if ((normalized.length % 2) !== 0) {
        throw new Error("hexadecimal string must contain an even number of digits");
    }
    if (!/^[0-9a-fA-F]*$/.test(normalized)) {
        throw new Error("invalid hexadecimal string");
    }
    const bytes = new Uint8Array(normalized.length / 2);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = Number.parseInt(normalized.slice(i * 2, (i * 2) + 2), 16);
    }
    return bytes;
}

/**
 * Encode `UnboundedDirectoryString` as a wrapped JSON choice.
 *
 * @param value The directory string
 * @returns The JSON encoding
 */
export function unboundedDirectoryStringToJSON(
    value: UnboundedDirectoryString,
): UnboundedDirectoryStringJSON {
    if ("teletexString" in value) {
        return { teletexString: bytesToHex(value.teletexString) };
    }
    if ("printableString" in value) {
        return { printableString: value.printableString };
    }
    if ("bmpString" in value) {
        return { bmpString: value.bmpString };
    }
    if ("universalString" in value) {
        return { universalString: value.universalString };
    }
    return { uTF8String: value.uTF8String };
}

/**
 * Decode `UnboundedDirectoryString` from a wrapped JSON choice.
 *
 * @param json The JSON encoding
 * @returns The directory string
 */
export function unboundedDirectoryStringFromJSON(
    json: UnboundedDirectoryStringJSON,
): UnboundedDirectoryString {
    if (
        (typeof json !== "object")
        || (json === null)
    ) {
        throw new Error("invalid UnboundedDirectoryString json");
    }
    if ("teletexString" in json) {
        return { teletexString: hexToBytes(json.teletexString) };
    }
    if ("printableString" in json) {
        return { printableString: json.printableString };
    }
    if ("bmpString" in json) {
        return { bmpString: json.bmpString };
    }
    if ("universalString" in json) {
        return { universalString: json.universalString };
    }
    if ("uTF8String" in json) {
        return { uTF8String: json.uTF8String };
    }
    throw new Error("invalid UnboundedDirectoryString json");
}

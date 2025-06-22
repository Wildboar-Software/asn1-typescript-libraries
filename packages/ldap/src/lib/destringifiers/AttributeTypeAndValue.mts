import { BERElement, ObjectIdentifier } from "asn1-ts";
import type { AttributeTypeAndValue as ATAV } from "../types/AttributeTypeAndValue.mjs";
import type { StringDecoderGetter } from "../types/StringDecoderGetter.mjs";
import isDigit from "../utils/isDigit.mjs";

const oidRegex = /^(0|1|2)\.\d+(?:\.\d+)+$/;

function decodeHex (hex: string): Uint8Array {
    const bytes: number[] = [];
    for (let i = 0; i < hex.length; i += 2) {
        const byte = Number.parseInt(hex.substr(i, 2), 16);
        bytes.push(byte);
    }
    return new Uint8Array(bytes);
}

function unescape (str: string): string {
    const trimmed = str.trim();
    let ret: string = "";
    let i: number = 0;
    while (i < trimmed.length) {
        if (trimmed.charAt(i) === "\\") {
            // NOTE: Number.parseInt(" C", 16) === 12, not NaN. That's an important detail.
            // Search for this UUID in this repo: 912FE54F-650F-48A3-8B3D-8D2AF036AFD7
            if (!isDigit(trimmed.charCodeAt(i + 1))) {
                ret += trimmed.charAt(i + 1);
                i += 2;
                continue;
            } else { // It was a hex escape.
                const parsed = Number.parseInt(trimmed.slice(i + 1, i + 3), 16);
                ret += String.fromCharCode(parsed);
                i += 3;
                continue;
            }
        } else {
            ret += trimmed.charAt(i);
            i++;
            continue;
        }
    }
    if (trimmed.endsWith("\\")) {
        ret += " ";
    }
    return ret;
}

export function atavFromString(
    str: string,
    getStringDecoder: StringDecoderGetter,
): ATAV {
    const firstEqualSign: number = str.indexOf("=");
    if (firstEqualSign === -1) {
        throw new Error(str);
    }
    const name = str.slice(0, firstEqualSign).trim().toLowerCase();
    const value = str.slice(firstEqualSign + 1).trim();
    const info = getStringDecoder(name.toLowerCase());
    if (info) {
        const [ oid, decoder ] = info;
        if (value.startsWith("#")) {
            const el = new BERElement();
            const valueBytes = decodeHex(value.slice(1));
            el.fromBytes(valueBytes);
            return [ oid, el ];
        }
        const escapedValue = unescape(value);
        return [ oid, decoder(escapedValue) ];
    // We can salvage it if the OID is in numeric form and the value is BER-encoded.
    } else if (oidRegex.test(name) && value.startsWith("#")) {
        const oid = ObjectIdentifier.fromParts(name.split(".").map((n) => Number.parseInt(n)));
        const el = new BERElement();
        const valueBytes = decodeHex(value.slice(1));
        el.fromBytes(valueBytes);
        return [ oid, el ];
    } else {
        throw new Error(name);
    }
}

export default atavFromString;

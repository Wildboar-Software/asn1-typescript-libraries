import {
    ObjectIdentifier,
    packBits,
    unpackBits,
} from "@wildboar/asn1";
import type {
    BIT_STRING,
    INTEGER,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
} from "@wildboar/asn1";
import type { Time } from "./lib/modules/PKI-Stub/Time.ta.mjs";
import type { UnboundedDirectoryString } from "./lib/modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";

/**
 * JSON Encoding Rules encoding of a variable-length `BIT STRING`, loosely
 * following ITU-T X.697 clause 24.3: an object with `value` (hexadecimal
 * encoding of the packed bits) and `length` (the number of bits).
 */
export type BitStringJSON = {
    value: string;
    length: number;
};

/**
 * JSON Encoding Rules encoding of `Time`.
 */
export type TimeJSON =
    | { utcTime: string }
    | { generalizedTime: string };

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
 * Encode a `BIT STRING` loosely according to ITU-T X.697 clause 24.3.
 *
 * @param bits The bit string
 * @returns The JSON encoding
 */
export function bitStringToJSON(bits: BIT_STRING): BitStringJSON {
    return {
        value: bytesToHex(packBits(bits)),
        length: bits.length,
    };
}

/**
 * Decode a `BIT STRING` loosely according to ITU-T X.697 clause 24.3.
 *
 * @param json The JSON encoding
 * @returns The bit string
 */
export function bitStringFromJSON(json: BitStringJSON): BIT_STRING {
    if (
        (typeof json !== "object")
        || (json === null)
        || (typeof json.value !== "string")
        || (typeof json.length !== "number")
        || !Number.isSafeInteger(json.length)
        || (json.length < 0)
    ) {
        throw new Error("invalid bit string json");
    }
    const bits = unpackBits(hexToBytes(json.value));
    if (json.length > bits.length) {
        throw new Error("bit string length exceeds packed value");
    }
    return bits.slice(0, json.length);
}

/**
 * Encode an `OCTET STRING` as a hexadecimal JSON string (ITU-T X.697 clause 25.3).
 *
 * @param octets The octet string
 * @returns The hexadecimal encoding
 */
export function octetStringToJSON(octets: OCTET_STRING): string {
    return bytesToHex(octets);
}

/**
 * Decode an `OCTET STRING` from a hexadecimal JSON string (ITU-T X.697 clause 25.3).
 *
 * @param json The hexadecimal encoding
 * @returns The octet string
 */
export function octetStringFromJSON(json: string): OCTET_STRING {
    if (typeof json !== "string") {
        throw new Error("invalid octet string json");
    }
    return hexToBytes(json);
}

/**
 * Encode an `INTEGER`. Values that are not JSON-safe numbers are encoded as
 * decimal strings, which is a documented exception to ITU-T X.697 clause 21.
 *
 * @param value The integer
 * @returns A JSON number or decimal string
 */
export function integerToJSON(value: INTEGER): number | string {
    if (typeof value === "bigint") {
        return value.toString();
    }
    return value;
}

/**
 * Decode an `INTEGER` from a JSON number or decimal string.
 *
 * @param json The JSON encoding
 * @returns The integer
 */
export function integerFromJSON(json: number | string): INTEGER {
    if (typeof json === "number") {
        return json;
    }
    if (typeof json !== "string") {
        throw new Error("invalid integer json");
    }
    try {
        return BigInt(json);
    } catch {
        throw new Error("invalid integer json");
    }
}

/**
 * Decode an `OBJECT IDENTIFIER` from its dotted-decimal JSON string
 * (ITU-T X.697 clause 32).
 *
 * @param json The dotted-decimal object identifier
 * @returns The object identifier
 */
export function objectIdentifierFromJSON(json: string): OBJECT_IDENTIFIER {
    if (typeof json !== "string") {
        throw new Error("invalid object identifier json");
    }
    return ObjectIdentifier.fromString(json);
}

/**
 * Encode `Time` as a wrapped JSON choice whose alternative is an ISO 8601 string.
 *
 * @param time The time
 * @returns The JSON encoding
 */
export function timeToJSON(time: Time): TimeJSON {
    if ("utcTime" in time) {
        return { utcTime: time.utcTime.toISOString() };
    }
    return { generalizedTime: time.generalizedTime.toISOString() };
}

/**
 * Decode `Time` from a wrapped JSON choice whose alternative is an ISO 8601 string.
 *
 * @param json The JSON encoding
 * @returns The time
 */
export function timeFromJSON(json: TimeJSON): Time {
    if (
        (typeof json !== "object")
        || (json === null)
    ) {
        throw new Error("invalid time json");
    }
    if ("utcTime" in json) {
        const d = new Date(json.utcTime);
        if (Number.isNaN(d.valueOf())) {
            throw new Error("invalid utcTime json");
        }
        return { utcTime: d };
    }
    if ("generalizedTime" in json) {
        const d = new Date(json.generalizedTime);
        if (Number.isNaN(d.valueOf())) {
            throw new Error("invalid generalizedTime json");
        }
        return { generalizedTime: d };
    }
    throw new Error("invalid time json");
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

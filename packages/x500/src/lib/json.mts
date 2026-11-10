import { packBits } from "@wildboar/asn1";
import type {
    BIT_STRING,
    INTEGER,
    OCTET_STRING,
} from "@wildboar/asn1";
import type { UnboundedDirectoryString } from "./modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import type { DisplayText } from "./modules/AttributeCertificateDefinitions/DisplayText.ta.mjs";
import { integerBytesToBound } from "./utils/rangeAlgebra.mjs";
import directoryStringToString from "./stringifiers/directoryStringToString.mjs";

/**
 * JSON Encoding Rules encoding of a variable-length `BIT STRING`, loosely
 * following ITU-T X.697 clause 24.3.
 */
export type BitStringJSON = {
    value: string;
    length: number;
};

/**
 * JSON encoding of `UnboundedDirectoryString`: the character content.
 * The CHOICE alternative is not preserved.
 */
export type UnboundedDirectoryStringJSON = string;

/**
 * JSON encoding of `DisplayText`: the character content.
 * The CHOICE alternative is not preserved.
 */
export type DisplayTextJSON = string;

function bytesToHex(bytes: Uint8Array): string {
    return Array.from(bytes)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

/**
 * Two-digit zero-padded decimal, for `DayTime` clock fields.
 */
export function pad2(value: number): string {
    return value.toString().padStart(2, "0");
}

/**
 * Encode an `INTEGER`. Values that are not JSON-safe numbers are encoded as
 * decimal strings, which is a documented exception to ITU-T X.697 clause 21.
 */
export function integerToJSON(value: INTEGER): number | string {
    if (typeof value === "bigint") {
        return value.toString();
    }
    return value;
}

/**
 * Decimal string of an `INTEGER`.
 */
export function integerToString(value: INTEGER): string {
    return value.toString();
}

/**
 * Encode DER INTEGER contents as a JSON integer.
 */
export function integerBytesToJSON(
    bytes: OCTET_STRING | undefined,
): number | string | undefined {
    const bound = integerBytesToBound(bytes);
    if (bound === undefined) {
        return undefined;
    }
    if (
        (bound >= Number.MIN_SAFE_INTEGER)
        && (bound <= Number.MAX_SAFE_INTEGER)
    ) {
        return Number(bound);
    }
    return bound.toString();
}

/**
 * Decimal string of DER INTEGER contents, or empty when unbounded.
 */
export function integerBytesToString(bytes: OCTET_STRING | undefined): string {
    const bound = integerBytesToBound(bytes);
    return (bound === undefined) ? "" : bound.toString();
}

/**
 * Encode a `BIT STRING` loosely according to ITU-T X.697 clause 24.3.
 */
export function bitStringToJSON(bits: BIT_STRING): BitStringJSON {
    return {
        value: bytesToHex(packBits(bits)),
        length: bits.length,
    };
}

/**
 * Encode an `OCTET STRING` as hexadecimal (ITU-T X.697 clause 25.3).
 */
export function octetStringToJSON(octets: OCTET_STRING): string {
    return bytesToHex(octets);
}

/**
 * [RFC 3641](https://www.rfc-editor.org/rfc/rfc3641) `StringValue`:
 * double quotes around the text, and each embedded quote doubled.
 */
export function quoteGserString(text: string): string {
    return `"${text.replaceAll("\"", "\"\"")}"`;
}

/**
 * ASN.1 value notation / GSER for a SEQUENCE or SET.
 * An empty list is `{}`.
 */
export function gserSequence(parts: string[]): string {
    return parts.length ? `{ ${parts.join(", ")} }` : "{}";
}

/**
 * RFC 4517 `bitstring`: `'01…'B`.
 */
export function bitStringToRfc4517(bits: BIT_STRING): string {
    let digits: string = "";
    for (let i: number = 0; i < bits.length; i++) {
        digits += bits[i] ? "1" : "0";
    }
    return `'${digits}'B`;
}

/**
 * ISO 8601 time interval `start/end`. A missing bound is left empty, so
 * an open start is `/end` and an open end is `start/`.
 */
export function isoInterval(start?: Date, end?: Date): string {
    const left: string = start ? start.toISOString() : "";
    const right: string = end ? end.toISOString() : "";
    return `${left}/${right}`;
}

/**
 * Encode `UnboundedDirectoryString` as its character content.
 *
 * The CHOICE alternative is not preserved. TeletexString is transcoded.
 */
export function unboundedDirectoryStringToJSON(
    value: UnboundedDirectoryString,
): UnboundedDirectoryStringJSON {
    return directoryStringToString(value);
}

/**
 * Encode `DisplayText` as its character content.
 *
 * The CHOICE alternative is not preserved.
 */
export function displayTextToJSON(value: DisplayText): DisplayTextJSON {
    return displayTextToString(value);
}

/**
 * Character content of a `DisplayText`.
 */
export function displayTextToString(value: DisplayText): string {
    if ("visibleString" in value) {
        return value.visibleString;
    }
    if ("bmpString" in value) {
        return value.bmpString;
    }
    return value.utf8String;
}

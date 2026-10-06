/* eslint-disable */
import type {
    ASN1Element as _Element,
    BMPString,
    PrintableString,
    TeletexString,
    UniversalString,
    UTF8String,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { teletexToString } from "@wildboar/teletex";

/**
 * @summary UnboundedDirectoryString
 * @description
 *
 * Directory string with no upper bound: a CHOICE among TeletexString (T.61),
 * PrintableString, BMPString (UCS-2), UniversalString (UCS-4), and UTF8String.
 *
 * Matching is on character content under the applicable matching rule, not on
 * which string type was used. Empty strings are forbidden (`SIZE (1..MAX)`).
 * Prefer `uTF8String` for new values.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnboundedDirectoryString  ::=  CHOICE {
 *   teletexString    TeletexString(SIZE (1..MAX)),
 *   printableString  PrintableString(SIZE (1..MAX)),
 *   bmpString        BMPString(SIZE (1..MAX)),
 *   universalString  UniversalString(SIZE (1..MAX)),
 *   uTF8String       UTF8String(SIZE (1..MAX)) }
 * ```
 */
export type UnboundedDirectoryString =
    | { teletexString: TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: UTF8String } /* CHOICE_ALT_ROOT */;

/**
 * JSON encoding of {@link UnboundedDirectoryString}. `teletexString` is the
 * text from `teletexToString`, not the raw T.61 octets. Reading that text
 * back keeps a TeletexString when every character is ASCII, because those
 * octets are the same in T.61. Any other character becomes a `uTF8String`.
 * Every other alternative is the character string itself.
 */
export type UnboundedDirectoryStringJSON =
    | { teletexString: string }
    | { printableString: string }
    | { bmpString: string }
    | { universalString: string }
    | { uTF8String: string };

/**
 * @summary Decodes an ASN.1 element into a(n) UnboundedDirectoryString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnboundedDirectoryString} The decoded data structure.
 */
export const _decode_UnboundedDirectoryString: $.ASN1Decoder<UnboundedDirectoryString> = $._decode_inextensible_choice<UnboundedDirectoryString>({
    "UNIVERSAL 20": ["teletexString", $._decodeTeletexString],
    "UNIVERSAL 19": ["printableString", $._decodePrintableString],
    "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
    "UNIVERSAL 28": ["universalString", $._decodeUniversalString],
    "UNIVERSAL 12": ["uTF8String", $._decodeUTF8String],
});

/**
 * @summary Encodes a(n) UnboundedDirectoryString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnboundedDirectoryString, encoded as an ASN.1 Element.
 */
export const _encode_UnboundedDirectoryString: $.ASN1Encoder<UnboundedDirectoryString> = $._encode_choice<UnboundedDirectoryString>(
    {
        teletexString: $._encodeTeletexString,
        printableString: $._encodePrintableString,
        bmpString: $._encodeBMPString,
        universalString: $._encodeUniversalString,
        uTF8String: $._encodeUTF8String,
    },
    $.BER
);

/**
 * @summary Convert a directory string to a JavaScript `string`
 * @description
 *
 * TeletexString is transcoded from T.61. Every other alternative is already
 * a character string. Not part of the package's public API; `EDIPartyName`
 * methods are the supported way to print these strings.
 *
 * @internal
 */
export function unboundedDirectoryStringToString(ds: UnboundedDirectoryString): string {
    if ("uTF8String" in ds) {
        return ds.uTF8String;
    }
    if ("printableString" in ds) {
        return ds.printableString;
    }
    if ("universalString" in ds) {
        return ds.universalString;
    }
    if ("bmpString" in ds) {
        return ds.bmpString;
    }
    return teletexToString(ds.teletexString);
}

/**
 * @summary Encode a directory string as a wrapped JSON choice
 * @internal
 */
export function unboundedDirectoryStringToJSON(
    value: UnboundedDirectoryString,
): UnboundedDirectoryStringJSON {
    if ("teletexString" in value) {
        return { teletexString: teletexToString(value.teletexString) };
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
 * @summary Decode a directory string from a wrapped JSON choice
 * @internal
 */
export function unboundedDirectoryStringFromJSON(
    json: UnboundedDirectoryStringJSON,
): UnboundedDirectoryString {
    if (
        (typeof json !== "object")
        || (json === null)
    ) {
        throw new SyntaxError("invalid UnboundedDirectoryString json");
    }
    if ("teletexString" in json) {
        if (typeof json.teletexString !== "string") {
            throw new SyntaxError("invalid UnboundedDirectoryString json");
        }
        if (isAscii(json.teletexString)) {
            return { teletexString: asciiToTeletex(json.teletexString) };
        }
        return { uTF8String: json.teletexString };
    }
    if ("printableString" in json) {
        if (typeof json.printableString !== "string") {
            throw new SyntaxError("invalid UnboundedDirectoryString json");
        }
        return { printableString: json.printableString };
    }
    if ("bmpString" in json) {
        if (typeof json.bmpString !== "string") {
            throw new SyntaxError("invalid UnboundedDirectoryString json");
        }
        return { bmpString: json.bmpString };
    }
    if ("universalString" in json) {
        if (typeof json.universalString !== "string") {
            throw new SyntaxError("invalid UnboundedDirectoryString json");
        }
        return { universalString: json.universalString };
    }
    if ("uTF8String" in json) {
        if (typeof json.uTF8String !== "string") {
            throw new SyntaxError("invalid UnboundedDirectoryString json");
        }
        return { uTF8String: json.uTF8String };
    }
    throw new SyntaxError("invalid UnboundedDirectoryString json");
}

function isAscii(s: string): boolean {
    for (let i: number = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 0x7F) {
            return false;
        }
    }
    return true;
}

function asciiToTeletex(s: string): Uint8Array {
    const bytes: Uint8Array = new Uint8Array(s.length);
    for (let i: number = 0; i < s.length; i++) {
        bytes[i] = s.charCodeAt(i);
    }
    return bytes;
}

/* eslint-enable */

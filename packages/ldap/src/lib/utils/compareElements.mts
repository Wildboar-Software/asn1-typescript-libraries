import { ASN1Element, ASN1Construction, ASN1TagClass, ASN1UniversalType } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

const deconstructableTypes: Set<ASN1UniversalType> = new Set([
    ASN1UniversalType.octetString,
    ASN1UniversalType.objectDescriptor,
    ASN1UniversalType.utf8String,
    ASN1UniversalType.numericString,
    ASN1UniversalType.printableString,
    ASN1UniversalType.teletexString,
    ASN1UniversalType.videotexString,
    ASN1UniversalType.ia5String,
    ASN1UniversalType.utcTime,
    ASN1UniversalType.generalizedTime,
    ASN1UniversalType.graphicString,
    ASN1UniversalType.visibleString,
    ASN1UniversalType.generalString,
    ASN1UniversalType.universalString,
    ASN1UniversalType.bmpString,
]);

/**
 * Character-string types whose unrecognized equality is approximated as
 * `caseIgnoreMatch`: trim, map insignificant characters, collapse spaces,
 * NFKC-normalize, then case-fold. Octet strings and time types stay
 * byte-compared.
 */
const caseIgnoreStringTypes: Set<ASN1UniversalType> = new Set([
    ASN1UniversalType.objectDescriptor,
    ASN1UniversalType.utf8String,
    ASN1UniversalType.numericString,
    ASN1UniversalType.printableString,
    ASN1UniversalType.teletexString,
    ASN1UniversalType.videotexString,
    ASN1UniversalType.ia5String,
    ASN1UniversalType.graphicString,
    ASN1UniversalType.visibleString,
    ASN1UniversalType.generalString,
    ASN1UniversalType.universalString,
    ASN1UniversalType.bmpString,
]);

// Copied from `@wildboar/x500` `prepString` (X.520 §7).
const mappedToNothing: RegExp = /[\u00AD\u1806\u034F\u180B-\u180D\uFE0F-\uFF00\uFFFC\u200B\p{Cc}]+/ug;
const prohibitedCharacters: RegExp = /[\uD800-\uDFFF\uFFFD]+/;

/**
 * Prepare a string for case-ignore matching, following X.520 §7 as in
 * `prepString`, then lowercase as `caseIgnoreMatch` does.
 */
function prepCaseIgnore (str: string): string | undefined {
    if (prohibitedCharacters.test(str)) {
        return undefined;
    }
    return str
        .trim()
        .replace(mappedToNothing, "")
        .replace(/\s+/g, " ")
        .normalize("NFKC")
        .toLowerCase();
}

function bytesToUtf8 (bytes: Uint8Array): string {
    return Buffer.from(
        bytes.buffer,
        bytes.byteOffset,
        bytes.byteLength,
    ).toString("utf8");
}

/**
 * Concatenate the primitive contents of a constructed string-like type.
 * Inner encodings must be of the same type as the outer element, as in
 * X.690 constructed encoding of octet strings and restricted character
 * strings. Recurses so nested partitions are flattened.
 */
function primitiveContents (el: ASN1Element): Uint8Array | undefined {
    if (el.construction === ASN1Construction.primitive) {
        return el.value;
    }
    try {
        const parts: Uint8Array[] = [];
        for (const part of el.sequence) {
            if (
                (part.tagClass !== el.tagClass)
                || (part.tagNumber !== el.tagNumber)
            ) {
                return undefined;
            }
            const inner = primitiveContents(part);
            if (!inner) {
                return undefined;
            }
            parts.push(inner);
        }
        return Buffer.concat(parts);
    } catch {
        return undefined;
    }
}

function bytesEqual (a: Uint8Array, b: Uint8Array): boolean {
    return (
        (a.length === b.length)
        && (Buffer.compare(a, b) === 0)
    );
}

/**
 * @summary Compare two ASN.1 elements
 * @description
 *
 * Used as the LDAP filter fallback when no matching rule is registered.
 * Character-string types are compared after X.520-style preparation and
 * case-folding so unrecognized types approximate `caseIgnoreMatch`.
 *
 * @author Cursor Grok 4.6
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareElements (a: ASN1Element, b: ASN1Element): boolean {
    if (
        (a.tagClass !== b.tagClass)
        || (a.tagNumber !== b.tagNumber)
    ) {
        return false;
    }
    const eitherConstructed = (
        (a.construction === ASN1Construction.constructed)
        || (b.construction === ASN1Construction.constructed)
    );
    let bytesA: Uint8Array;
    let bytesB: Uint8Array;
    if (!eitherConstructed) {
        bytesA = a.value;
        bytesB = b.value;
    } else if (
        (a.tagClass === ASN1TagClass.universal)
        && deconstructableTypes.has(a.tagNumber)
    ) {
        const primitiveAValue = primitiveContents(a);
        const primitiveBValue = primitiveContents(b);
        if (!primitiveAValue || !primitiveBValue) {
            return false;
        }
        bytesA = primitiveAValue;
        bytesB = primitiveBValue;
    } else {
        if (a.construction !== b.construction) {
            return false;
        }
        return bytesEqual(a.value, b.value);
    }
    if (
        (a.tagClass === ASN1TagClass.universal)
        && caseIgnoreStringTypes.has(a.tagNumber)
    ) {
        const preparedA = prepCaseIgnore(bytesToUtf8(bytesA));
        const preparedB = prepCaseIgnore(bytesToUtf8(bytesB));
        if ((preparedA !== undefined) && (preparedB !== undefined)) {
            return (preparedA === preparedB);
        }
    }
    return bytesEqual(bytesA, bytesB);
}

export default compareElements;

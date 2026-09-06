import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
} from "@wildboar/asn1";
import type { BIT_STRING } from "@wildboar/asn1";
import compareUint8Arrays from "./compareUint8Arrays.mjs";

/**
 * UNIVERSAL types compared by contents octets, with no decoding.
 */
const byteComparedTypes: Set<number> = new Set([
    ASN1UniversalType.objectIdentifier,
    ASN1UniversalType.relativeOID,
    ASN1UniversalType.enumerated,
    ASN1UniversalType.date,
    ASN1UniversalType.timeOfDay,
    ASN1UniversalType.external,
    ASN1UniversalType.embeddedPDV,
    ASN1UniversalType.integer,
    ASN1UniversalType.characterString,
    ASN1UniversalType.set,
    ASN1UniversalType.sequence,
    ASN1UniversalType.realNumber,
    ASN1UniversalType.nill,
    ASN1UniversalType.duration,
]);

function isTimeType (tagNumber: number): boolean {
    return (
        (tagNumber === ASN1UniversalType.utcTime)
        || (tagNumber === ASN1UniversalType.generalizedTime)
    );
}

function isIriType (tagNumber: number): boolean {
    return (
        (tagNumber === ASN1UniversalType.oidIRI)
        || (tagNumber === ASN1UniversalType.roidIRI)
    );
}

function readTime (el: ASN1Element): Date {
    return (el.tagNumber === ASN1UniversalType.utcTime)
        ? el.utcTime
        : el.generalizedTime;
}

function readIri (el: ASN1Element): string {
    return (el.tagNumber === ASN1UniversalType.oidIRI)
        ? el.oidIRI
        : el.relativeOIDIRI;
}

/**
 * Compare two decoded `BIT STRING` values bit-by-bit. `BIT STRING` is a
 * `Uint8ClampedArray` of 0/1 elements, one per bit, after deconstruction.
 */
function compareBits (a: BIT_STRING, b: BIT_STRING): boolean {
    if (a.length !== b.length) {
        return false;
    }
    for (let i: number = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

function timesEqualToTheSecond (a: Date, b: Date): boolean {
    const ta: number = a.getTime();
    const tb: number = b.getTime();
    if (Number.isNaN(ta) || Number.isNaN(tb)) {
        return false;
    }
    return (Math.floor(ta / 1000) === Math.floor(tb / 1000));
}

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

function comparePreparedStrings (a: ASN1Element, b: ASN1Element): boolean {
    const jsonA: unknown = a.toJSON();
    const jsonB: unknown = b.toJSON();
    if ((typeof jsonA !== "string") || (typeof jsonB !== "string")) {
        return (jsonA === jsonB);
    }
    const preparedA: string | undefined = prepCaseIgnore(jsonA);
    const preparedB: string | undefined = prepCaseIgnore(jsonB);
    if ((preparedA === undefined) || (preparedB === undefined)) {
        return false;
    }
    return (preparedA === preparedB);
}

/**
 * @summary Compare two ASN.1 elements
 * @description
 *
 * Used as the LDAP filter fallback when no matching rule is registered.
 *
 * UNIVERSAL `OBJECT IDENTIFIER`, `RELATIVE-OID`, `ENUMERATED`, `DATE`,
 * `TIME-OF-DAY`, `EXTERNAL`, `EMBEDDED PDV`, `INTEGER`, `CHARACTER STRING`,
 * `SET`, `SEQUENCE`, `REAL`, `NULL`, and `DURATION` are compared by contents
 * octets.
 *
 * `BIT STRING` values are decoded (deconstructing constructed encodings) and
 * compared bit-by-bit. `OCTET STRING` values are decoded and compared
 * byte-for-byte. `UTCTime` and `GeneralizedTime` (which may be mixed) are
 * converted to `Date` and compared to one-second precision. `OID-IRI` and
 * `RELATIVE-OID-IRI` are trimmed and case-folded. Remaining UNIVERSAL types
 * are treated as strings: `toJSON()`, then X.520 stringprep and lowercasing.
 *
 * Non-UNIVERSAL tags of the same class and number are compared by contents
 * octets. Decode failures are treated as unequal.
 *
 * @author Cursor Grok 4.6
 * @param a One value
 * @param b The other
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareElements (a: ASN1Element, b: ASN1Element): boolean {
    try {
        if (
            (a.tagClass !== ASN1TagClass.universal)
            || (b.tagClass !== ASN1TagClass.universal)
        ) {
            return (
                (a.tagClass === b.tagClass)
                && (a.tagNumber === b.tagNumber)
                && compareUint8Arrays(a.value, b.value)
            );
        }
        const ta: number = a.tagNumber;
        const tb: number = b.tagNumber;
        if (byteComparedTypes.has(ta) && (ta === tb)) {
            return compareUint8Arrays(a.value, b.value);
        }
        if (
            (ta === ASN1UniversalType.bitString)
            && (tb === ASN1UniversalType.bitString)
        ) {
            return compareBits(a.bitString, b.bitString);
        }
        if (
            (ta === ASN1UniversalType.octetString)
            && (tb === ASN1UniversalType.octetString)
        ) {
            return compareUint8Arrays(a.octetString, b.octetString);
        }
        if (isTimeType(ta) && isTimeType(tb)) {
            return timesEqualToTheSecond(readTime(a), readTime(b));
        }
        if (isIriType(ta) && (ta === tb)) {
            return (
                readIri(a).trim().toLowerCase()
                === readIri(b).trim().toLowerCase()
            );
        }
        if (byteComparedTypes.has(ta) || byteComparedTypes.has(tb)) {
            return false;
        }
        if (
            (ta === ASN1UniversalType.bitString)
            || (tb === ASN1UniversalType.bitString)
            || (ta === ASN1UniversalType.octetString)
            || (tb === ASN1UniversalType.octetString)
            || isTimeType(ta)
            || isTimeType(tb)
            || isIriType(ta)
            || isIriType(tb)
        ) {
            return false;
        }
        return comparePreparedStrings(a, b);
    } catch {
        return false;
    }
}

export default compareElements;

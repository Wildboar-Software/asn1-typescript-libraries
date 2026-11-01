import { ASN1Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { MATCH_FLAG_DEBUG, type ContextMatcher } from "../../types/matching.mjs";
import { id_avc_locale } from "../../modules/SelectedAttributeTypes/id-avc-locale.va.mjs";
import { matchAnyContextValue } from "./matchAnyContextValue.mjs";
import {
    _decode_LocaleContextSyntax,
} from "../../modules/SelectedAttributeTypes/LocaleContextSyntax.ta.mjs";
import type {
    LocaleContextSyntax,
} from "../../modules/SelectedAttributeTypes/LocaleContextSyntax.ta.mjs";
import type {
    UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import compareElements from "../../comparators/compareElements.mjs";

/** Element, decoded choice, object identifier, or locale string. */
export type LocaleContextInput =
    | ASN1Element
    | LocaleContextSyntax
    | OBJECT_IDENTIFIER
    | UnboundedDirectoryString
    | string;

function isLocaleSyntax (value: object): value is LocaleContextSyntax {
    return ("localeID1" in value) || ("localeID2" in value);
}

function readLocale (value: LocaleContextInput): LocaleContextSyntax {
    if (typeof value === "string") {
        return { localeID2: { uTF8String: value } };
    }
    if (ASN1Element.isElement(value)) {
        return _decode_LocaleContextSyntax(value);
    }
    if (ObjectIdentifier.isOID(value)) {
        return { localeID1: value };
    }
    if (isLocaleSyntax(value)) {
        return value;
    }
    return { localeID2: value };
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 10.3 `localeContext`.
 *
 * Associates an attribute value with a POSIX locale (ISO/IEC/IEEE
 * 9945; registration in ISO/IEC 15897). TRUE iff both sides are
 * object identifiers and equal, or both are strings and equal.
 * Mixed OID/string is not a match.
 *
 * Each argument may be an element, a `LocaleContextSyntax`, an
 * object identifier (`localeID1`), or a directory string / string
 * (`localeID2`).
 */
export
function evaluateLocaleContext (
    assertion: LocaleContextInput,
    value: LocaleContextInput,
    flags: number = 0,
): boolean {
    const a = readLocale(assertion);
    const v = readLocale(value);
    if (("localeID1" in a) && ("localeID1" in v)) {
        return a.localeID1.isEqualTo(v.localeID1);
    }
    if (("localeID2" in a) && ("localeID2" in v)) {
        return directoryStringToString(a.localeID2)
            === directoryStringToString(v.localeID2);
    }
    if (ASN1Element.isElement(assertion) && ASN1Element.isElement(value)) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: localeContext: unrecognized LocaleContextSyntax alternative",
            );
        }
        return compareElements(assertion, value);
    }
    return false;
}

/**
 * `localeContext` as a `ContextMatcher`. TRUE iff any stored locale
 * uses the same alternative (object identifier or string) and is
 * equal to the presented locale. An invalid stored value is skipped.
 * An empty value list is FALSE.
 */
export
const localeContext: ContextMatcher = (
    assertion,
    values,
    _getEqualityMatcher,
    flags = 0,
) => {
    const presented = _decode_LocaleContextSyntax(assertion);
    return matchAnyContextValue(
        values,
        (value) => evaluateLocaleContext(presented, value, flags),
        id_avc_locale,
        flags,
    );
};

export default localeContext;

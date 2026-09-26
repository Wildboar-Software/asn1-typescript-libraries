import { ASN1Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
): boolean {
    const a = readLocale(assertion);
    const v = readLocale(value);
    if (
        ("localeID1" in a) && ("localeID1" in v)
        && !ASN1Element.isElement(a) && !ASN1Element.isElement(v)
    ) {
        return evaluateLocaleContextTyped(a, v);
    }
    if (
        ("localeID2" in a) && ("localeID2" in v)
        && !ASN1Element.isElement(a) && !ASN1Element.isElement(v)
    ) {
        return evaluateLocaleContextTyped(a, v);
    }
    if (ASN1Element.isElement(assertion) && ASN1Element.isElement(value)) {
        return compareElements(assertion, value);
    }
    return false;
}

/**
 * `localeContext` when both sides use the same CHOICE alternative.
 *
 * @param assertion Presented locale.
 * @param value Stored locale.
 * @returns `true` when the identifiers are equal.
 */
export
function evaluateLocaleContextTyped (
    assertion: LocaleContextSyntax,
    value: LocaleContextSyntax,
): boolean {
    if (
        ("localeID1" in assertion) && ("localeID1" in value)
        && !ASN1Element.isElement(assertion) && !ASN1Element.isElement(value)
    ) {
        return assertion.localeID1.isEqualTo(value.localeID1);
    }
    if (
        ("localeID2" in assertion) && ("localeID2" in value)
        && !ASN1Element.isElement(assertion) && !ASN1Element.isElement(value)
    ) {
        return directoryStringToString(assertion.localeID2)
            === directoryStringToString(value.localeID2);
    }
    return false;
}

export default evaluateLocaleContext;

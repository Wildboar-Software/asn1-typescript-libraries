import {
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    ObjectIdentifier,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    type ContextMatcher,
} from "../../types/matching.mjs";
import { id_avc_locale } from "../../modules/SelectedAttributeTypes/id-avc-locale.va.mjs";
import { bytesEqual, stringsEqual } from "../constantTime.mjs";
import { matchAnyContextValue } from "./matchAnyContextValue.mjs";
import type {
    LocaleContextSyntax,
} from "../../modules/SelectedAttributeTypes/LocaleContextSyntax.ta.mjs";
import type {
    UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import directoryStringToString from "../../stringifiers/directoryStringToString.mjs";
import compareElements from "../../comparators/compareElements.mjs";
import { readDirectoryString } from "../readValue.mjs";

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

type ReadLocale =
    | { readonly kind: "oid"; readonly id: OBJECT_IDENTIFIER }
    | { readonly kind: "string"; readonly text: string }
    | { readonly kind: "element"; readonly element: ASN1Element };

function isDirectoryStringTag (tagNumber: number): boolean {
    return tagNumber === ASN1UniversalType.utf8String
        || tagNumber === ASN1UniversalType.printableString
        || tagNumber === ASN1UniversalType.teletexString
        || tagNumber === ASN1UniversalType.universalString
        || tagNumber === ASN1UniversalType.bmpString;
}

function readLocale (value: LocaleContextInput): ReadLocale {
    if (typeof value === "string") {
        return { kind: "string", text: value };
    }
    if (ASN1Element.isElement(value)) {
        if (value.tagClass === ASN1TagClass.universal) {
            if (value.tagNumber === ASN1UniversalType.objectIdentifier) {
                return { kind: "oid", id: value.objectIdentifier };
            }
            if (isDirectoryStringTag(value.tagNumber)) {
                return { kind: "string", text: readDirectoryString(value) };
            }
        }
        return { kind: "element", element: value };
    }
    if (ObjectIdentifier.isOID(value)) {
        return { kind: "oid", id: value };
    }
    if (isLocaleSyntax(value)) {
        if ("localeID1" in value) {
            return { kind: "oid", id: value.localeID1 };
        }
        return {
            kind: "string",
            text: directoryStringToString(
                (value as { localeID2: UnboundedDirectoryString }).localeID2,
            ),
        };
    }
    return { kind: "string", text: directoryStringToString(value) };
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
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    const a = readLocale(assertion);
    const v = readLocale(value);
    if (a.kind === "oid" && v.kind === "oid") {
        return constantTime
            ? bytesEqual(a.id.toBytesUnsafe(), v.id.toBytesUnsafe(), constantTime)
            : a.id.isEqualTo(v.id);
    }
    if (a.kind === "string" && v.kind === "string") {
        return stringsEqual(a.text, v.text, constantTime);
    }
    if (a.kind === "element" && v.kind === "element") {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: localeContext: unrecognized LocaleContextSyntax alternative",
            );
        }
        return compareElements(a.element, v.element);
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
    return matchAnyContextValue(
        values,
        (value) => evaluateLocaleContext(assertion, value, flags),
        id_avc_locale,
        flags,
    );
};

export default localeContext;

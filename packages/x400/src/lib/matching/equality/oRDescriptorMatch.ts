import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import type { ORName } from "@wildboar/x400/MTSAbstractService";
import {
    MATCH_FLAG_SUBSTRING_MATCH,
    matchORNames,
    validateNonEmptyORNameAssertion,
} from "./oRNameMatch.js";
import { normalizeMSString, teletexBytesToString } from "./orAddressUtilities.js";

// ORDescriptor ::= SET {
//     formal-name       ORName OPTIONAL,
//     free-form-name    [0]  FreeFormName OPTIONAL,
//     telephone-number  [1]  TelephoneNumber OPTIONAL
// }

/**
 * Assertion form of an `ORDescriptor`. `freeFormName` and `telephoneNumber`
 * are JavaScript strings (Teletex already converted). `createEqualityMatcher`
 * runs {@link normalizePreparedORDescriptor} on this unless
 * `MATCH_FLAG_ASSERTION_NORMALIZED` is set, so the value matcher compares
 * those strings as already normalized.
 */
export
interface PreparedORDescriptor {
    readonly formalName?: ORName;
    readonly freeFormName?: string;
    readonly telephoneNumber?: string;
}

export
function validateORDescriptorAssertion (
    d: ORDescriptor,
    rule: string,
    substringMode: boolean = false,
): ORDescriptor {
    if (d.isEmpty()) {
        throw new Error(`${rule}: assertion is empty`);
    }
    if (d.formal_name) {
        validateNonEmptyORNameAssertion(d.formal_name, rule);
    }
    if (d.free_form_name !== undefined) {
        const norm = normalizeMSString(teletexBytesToString(d.free_form_name), true);
        if (substringMode && norm.length === 0) {
            throw new Error(`${rule}: free-form-name substring in assertion is empty`);
        }
    }
    if (d.telephone_number !== undefined) {
        const norm = normalizeMSString(d.telephone_number, true);
        if (substringMode && norm.length === 0) {
            throw new Error(`${rule}: telephone-number substring in assertion is empty`);
        }
    }
    return d;
}

export
function preparedORDescriptorFrom (d: ORDescriptor): PreparedORDescriptor {
    return {
        formalName: d.formal_name,
        freeFormName: d.free_form_name !== undefined
            ? teletexBytesToString(d.free_form_name)
            : undefined,
        telephoneNumber: d.telephone_number,
    };
}

export
function decodePreparedORDescriptorAssertion (
    rule: string,
    substringMode: boolean = false,
): (el: ASN1Element) => PreparedORDescriptor {
    return (el: ASN1Element): PreparedORDescriptor => (
        preparedORDescriptorFrom(
            validateORDescriptorAssertion(_decode_ORDescriptor(el), rule, substringMode),
        )
    );
}

/**
 * MS-string preparation for `free-form-name` and `telephone-number`.
 * `formal-name` stays an `ORName`; `matchORNames` prepares its O/R address
 * and directory-name components.
 */
export
function normalizePreparedORDescriptor (a: PreparedORDescriptor): PreparedORDescriptor {
    return {
        formalName: a.formalName,
        freeFormName: a.freeFormName !== undefined
            ? normalizeMSString(a.freeFormName, true)
            : undefined,
        telephoneNumber: a.telephoneNumber !== undefined
            ? normalizeMSString(a.telephoneNumber, true)
            : undefined,
    };
}

function preparedAssertionText (
    raw: string | undefined,
    flags: number,
    assertionAlreadyNormalized: boolean,
): string | undefined {
    if (raw === undefined) {
        return undefined;
    }
    if (assertionAlreadyNormalized || (flags & MATCH_FLAG_ASSERTION_NORMALIZED)) {
        return raw;
    }
    return normalizeMSString(raw, true);
}

function storedText (raw: string, flags: number): string {
    return (flags & MATCH_FLAG_VALUE_NORMALIZED) ? raw : normalizeMSString(raw, true);
}

/**
 * Shared implementation for ITU-T Rec. X.420 (06/1999) §§19.7.3–19.7.5
 * (`oRDescriptorMatch`, `oRDescriptorElementsMatch`, and
 * `oRDescriptorSubstringElementsMatch`).
 *
 * When `assertionAlreadyNormalized` is set, `freeFormName` and
 * `telephoneNumber` are compared as prepared by
 * {@link normalizePreparedORDescriptor} (or by the caller, when
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skipped that step).
 */
export
function matchPreparedORDescriptor (
    a: PreparedORDescriptor,
    v: ORDescriptor,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
    assertionAlreadyNormalized: boolean = false,
): boolean | undefined {
    if (v.isEmpty()) {
        return undefined;
    }
    const substringMode = !!(flags & MATCH_FLAG_SUBSTRING_MATCH);
    // (a) `formal-name` is present in both values. Per X.420 §19.7.3, (b) and
    //     (c) only apply when `formal-name` is absent in either or both values.
    if (a.formalName && v.formal_name) {
        if (v.formal_name.isEmpty()) {
            return undefined;
        }
        return matchORNames(a.formalName, v.formal_name, getEqualityMatcher, flags);
    }
    const aFree = preparedAssertionText(a.freeFormName, flags, assertionAlreadyNormalized);
    const aPhone = preparedAssertionText(a.telephoneNumber, flags, assertionAlreadyNormalized);
    // (b) `formal-name` absent in at least one value, `free-form-name` in both.
    if ((aFree !== undefined) && (v.free_form_name !== undefined)) {
        const vname = storedText(teletexBytesToString(v.free_form_name), flags);
        const freeFormMatches = substringMode
            ? (aFree.length > 0 && vname.indexOf(aFree) >= 0)
            : (aFree === vname);
        if (freeFormMatches) {
            return true;
        }
    }
    // (c) `formal-name` absent in at least one value, `telephone-number` in both.
    if ((aPhone !== undefined) && (v.telephone_number !== undefined)) {
        const vname = storedText(v.telephone_number, flags);
        const phoneMatches = substringMode
            ? (aPhone.length > 0 && vname.indexOf(aPhone) >= 0)
            : (aPhone === vname);
        if (phoneMatches) {
            return true;
        }
    }
    return false;
}

export
function matchORDescriptors (
    a: ORDescriptor,
    v: ORDescriptor,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    return matchPreparedORDescriptor(
        preparedORDescriptorFrom(a),
        v,
        getEqualityMatcher,
        flags,
        false,
    );
}

export
function oRDescriptorMatchTyped (
    assertion: ORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const v = _decode_ORDescriptor(value);
    return matchORDescriptors(assertion, v, getEqualityMatcher, flags);
}

function oRDescriptorValueMatcher (
    extraFlags: number,
): (
    assertion: PreparedORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
) => boolean | undefined {
    return (assertion, value, getEqualityMatcher, flags = 0): boolean | undefined => {
        const v = _decode_ORDescriptor(value);
        return matchPreparedORDescriptor(
            assertion,
            v,
            getEqualityMatcher,
            flags | extraFlags,
            true,
        );
    };
}

export
const oRDescriptorMatch: Matcher = createEqualityMatcher(
    decodePreparedORDescriptorAssertion("oRDescriptorMatch"),
    oRDescriptorValueMatcher(0),
    undefined,
    false,
    normalizePreparedORDescriptor,
);

export default oRDescriptorMatch;

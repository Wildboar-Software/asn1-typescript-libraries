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
function decodeNonEmptyORDescriptorAssertion (
    rule: string,
    substringMode: boolean = false,
): (el: ASN1Element) => ORDescriptor {
    return (el: ASN1Element): ORDescriptor => (
        validateORDescriptorAssertion(_decode_ORDescriptor(el), rule, substringMode)
    );
}

/**
 * Shared implementation for ITU-T Rec. X.420 (06/1999) §§19.7.3–19.7.5
 * (`oRDescriptorMatch`, `oRDescriptorElementsMatch`, and
 * `oRDescriptorSubstringElementsMatch`).
 */
export
function matchORDescriptors (
    a: ORDescriptor,
    v: ORDescriptor,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    if (v.isEmpty()) {
        return undefined;
    }
    const substringMode = !!(flags & MATCH_FLAG_SUBSTRING_MATCH);
    // (a) `formal-name` is present in both values. Per X.420 §19.7.3, (b) and
    //     (c) only apply when `formal-name` is absent in either or both values.
    if (a.formal_name && v.formal_name) {
        if (v.formal_name.isEmpty()) {
            return undefined;
        }
        return matchORNames(a.formal_name, v.formal_name, getEqualityMatcher, flags);
    }
    // (b) `formal-name` absent in at least one value, `free-form-name` in both.
    if ((a.free_form_name !== undefined) && (v.free_form_name !== undefined)) {
        const aRaw = teletexBytesToString(a.free_form_name);
        const vRaw = teletexBytesToString(v.free_form_name);
        const aname = (flags & MATCH_FLAG_ASSERTION_NORMALIZED) ? aRaw : normalizeMSString(aRaw, true);
        const vname = (flags & MATCH_FLAG_VALUE_NORMALIZED) ? vRaw : normalizeMSString(vRaw, true);
        const freeFormMatches = substringMode
            ? (aname.length > 0 && vname.indexOf(aname) >= 0)
            : (aname === vname);
        if (freeFormMatches) {
            return true;
        }
    }
    // (c) `formal-name` absent in at least one value, `telephone-number` in both.
    if ((a.telephone_number !== undefined) && (v.telephone_number !== undefined)) {
        const aname = (flags & MATCH_FLAG_ASSERTION_NORMALIZED)
            ? a.telephone_number
            : normalizeMSString(a.telephone_number, true);
        const vname = (flags & MATCH_FLAG_VALUE_NORMALIZED)
            ? v.telephone_number
            : normalizeMSString(v.telephone_number, true);
        const phoneMatches = substringMode
            ? (aname.length > 0 && vname.indexOf(aname) >= 0)
            : (aname === vname);
        if (phoneMatches) {
            return true;
        }
    }
    return false;
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

export
const oRDescriptorMatch: Matcher = createEqualityMatcher(
    decodeNonEmptyORDescriptorAssertion("oRDescriptorMatch"),
    oRDescriptorMatchTyped,
);

export default oRDescriptorMatch;

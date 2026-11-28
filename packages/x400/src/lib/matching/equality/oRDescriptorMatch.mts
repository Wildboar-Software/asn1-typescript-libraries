import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.mjs";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    MATCH_FLAG_SUBSTRING_MATCH,
    matchPreparedORNames,
    normalizePreparedORName,
    type PreparedORName,
    preparedORNameFrom,
} from "./oRNameMatch.mjs";
import {
    matchMSSubstring,
    normalizeMSString,
    teletexBytesToString,
} from "./orAddressUtilities.mjs";

/**
 * Assertion form of an `ORDescriptor`. `formalName` has its O/R address
 * attributes and extensions decoded up front, and `freeFormName` and
 * `telephoneNumber` are JavaScript strings (Teletex already converted).
 * `createEqualityMatcher` runs {@link normalizePreparedORDescriptor} on this
 * unless `MATCH_FLAG_ASSERTION_NORMALIZED` is set.
 */
export
interface PreparedORDescriptor {
    readonly formalName?: PreparedORName;
    readonly freeFormName?: string;
    readonly telephoneNumber?: string;
}

export
function preparedORDescriptorFrom (
    d: ORDescriptor,
    rule: string = "oRDescriptorMatch",
    substringMode: boolean = false,
): PreparedORDescriptor {
    if (d.isEmpty()) {
        throw new Error(`${rule}: assertion is empty`);
    }
    const formalName = d.formal_name
        ? preparedORNameFrom(d.formal_name, rule)
        : undefined;
    let freeFormName: string | undefined;
    if (d.free_form_name !== undefined) {
        freeFormName = teletexBytesToString(d.free_form_name);
        if (substringMode && normalizeMSString(freeFormName, true).length === 0) {
            throw new Error(`${rule}: free-form-name substring in assertion is empty`);
        }
    }
    if (d.telephone_number !== undefined && substringMode) {
        if (normalizeMSString(d.telephone_number, true).length === 0) {
            throw new Error(`${rule}: telephone-number substring in assertion is empty`);
        }
    }
    return {
        formalName,
        freeFormName,
        telephoneNumber: d.telephone_number,
    };
}

export
function decodePreparedORDescriptorAssertion (
    rule: string,
    substringMode: boolean = false,
): (el: ASN1Element) => PreparedORDescriptor {
    return (el: ASN1Element): PreparedORDescriptor => (
        preparedORDescriptorFrom(_decode_ORDescriptor(el), rule, substringMode)
    );
}

/**
 * MS-string and O/R-address preparation for an `ORDescriptor` assertion.
 */
export
function normalizePreparedORDescriptor (a: PreparedORDescriptor): PreparedORDescriptor {
    return {
        formalName: a.formalName
            ? normalizePreparedORName(a.formalName)
            : undefined,
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
 */
function matchPreparedORDescriptorFast (
    a: PreparedORDescriptor,
    v: ORDescriptor,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
    assertionAlreadyNormalized: boolean,
): boolean | undefined {
    const substringMode = !!(flags & MATCH_FLAG_SUBSTRING_MATCH);
    // (a) `formal-name` is present in both values. Per X.420 §19.7.3, (b) and
    //     (c) only apply when `formal-name` is absent in either or both values.
    if (a.formalName && v.formal_name) {
        if (v.formal_name.isEmpty()) {
            return undefined;
        }
        return matchPreparedORNames(
            a.formalName,
            v.formal_name,
            getEqualityMatcher,
            flags,
            assertionAlreadyNormalized,
        );
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

function matchPreparedORDescriptorConstantTime (
    a: PreparedORDescriptor,
    v: ORDescriptor,
    getEqualityMatcher: ((attributeType: OBJECT_IDENTIFIER) => Matcher | undefined) | undefined,
    flags: number,
    assertionAlreadyNormalized: boolean,
): boolean | undefined {
    const substringMode = !!(flags & MATCH_FLAG_SUBSTRING_MATCH);
    const bothHaveFormal = !!(a.formalName && v.formal_name);
    let formalResult: boolean | undefined = false;
    if (bothHaveFormal && a.formalName && v.formal_name) {
        formalResult = v.formal_name.isEmpty()
            ? undefined
            : matchPreparedORNames(
                a.formalName,
                v.formal_name,
                getEqualityMatcher,
                flags,
                assertionAlreadyNormalized,
            );
    }

    let freeFormMatches = false;
    if (a.freeFormName !== undefined) {
        const aname = preparedAssertionText(a.freeFormName, flags, assertionAlreadyNormalized) ?? "";
        const vHasFreeForm = v.free_form_name !== undefined;
        const vRaw = vHasFreeForm ? teletexBytesToString(v.free_form_name!) : "";
        const vname = vHasFreeForm && !(flags & MATCH_FLAG_VALUE_NORMALIZED)
            ? normalizeMSString(vRaw, true)
            : vRaw;
        const cmp = substringMode
            ? (aname.length > 0 && matchMSSubstring(vname, aname, flags))
            : ctStringsEqual(aname, vname);
        freeFormMatches = vHasFreeForm && cmp;
    }

    let phoneMatches = false;
    if (a.telephoneNumber !== undefined) {
        const aname = preparedAssertionText(a.telephoneNumber, flags, assertionAlreadyNormalized) ?? "";
        const vHasPhone = v.telephone_number !== undefined;
        const vRaw = v.telephone_number ?? "";
        const vname = vHasPhone && !(flags & MATCH_FLAG_VALUE_NORMALIZED)
            ? normalizeMSString(vRaw, true)
            : vRaw;
        const cmp = substringMode
            ? (aname.length > 0 && matchMSSubstring(vname, aname, flags))
            : ctStringsEqual(aname, vname);
        phoneMatches = vHasPhone && cmp;
    }

    return bothHaveFormal ? formalResult : (freeFormMatches || phoneMatches);
}

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
    return (flags & MATCH_FLAG_CONSTANT_TIME)
        ? matchPreparedORDescriptorConstantTime(
            a,
            v,
            getEqualityMatcher,
            flags,
            assertionAlreadyNormalized,
        )
        : matchPreparedORDescriptorFast(
            a,
            v,
            getEqualityMatcher,
            flags,
            assertionAlreadyNormalized,
        );
}

export
function matchORDescriptors (
    a: ORDescriptor,
    v: ORDescriptor,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    let prepared: PreparedORDescriptor;
    try {
        prepared = preparedORDescriptorFrom(a, "matchORDescriptors", !!(flags & MATCH_FLAG_SUBSTRING_MATCH));
    } catch {
        return a.isEmpty() ? false : undefined;
    }
    return matchPreparedORDescriptor(
        prepared,
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

import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
} from "@wildboar/x500";
import { ctStringsEqual } from "../constantTime.mjs";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    prepareMSStringValue,
    teletexBytesToString,
} from "./orAddressUtilities.mjs";
import {
    decodeORNameSingleElementAssertion,
    matchORNameSingleElement,
    normalizeORNameSingleElementAssertion,
} from "./oRNameSingleElementMatch.mjs";

function matchORDescriptorSingleElementFast (
    assertion: string,
    v: ORDescriptor,
    flags: number,
): boolean | undefined {
    let sawUndefined = false;
    if (v.free_form_name !== undefined && v.free_form_name.length > 0) {
        const vname = prepareMSStringValue(teletexBytesToString(v.free_form_name), true, flags);
        if (vname === assertion) {
            return true;
        }
    }
    if (v.telephone_number !== undefined && v.telephone_number.length > 0) {
        const vname = prepareMSStringValue(v.telephone_number, true, flags);
        if (vname === assertion) {
            return true;
        }
    }
    if (v.formal_name) {
        const formalMatch = matchORNameSingleElement(assertion, v.formal_name, flags);
        if (formalMatch === true) {
            return true;
        }
        if (formalMatch === undefined) {
            sawUndefined = true;
        }
    }
    return sawUndefined ? undefined : false;
}

function matchORDescriptorSingleElementConstantTime (
    assertion: string,
    v: ORDescriptor,
    flags: number,
): boolean | undefined {
    let matched = false;
    let sawUndefined = false;
    const hasFreeForm = v.free_form_name !== undefined && v.free_form_name.length > 0;
    const freeFormStr = hasFreeForm
        ? prepareMSStringValue(teletexBytesToString(v.free_form_name!), true, flags)
        : "";
    if (ctStringsEqual(assertion, freeFormStr) && hasFreeForm) {
        matched = true;
    }

    const hasPhone = v.telephone_number !== undefined && v.telephone_number.length > 0;
    const phoneStr = hasPhone
        ? prepareMSStringValue(v.telephone_number!, true, flags)
        : "";
    if (ctStringsEqual(assertion, phoneStr) && hasPhone) {
        matched = true;
    }

    if (v.formal_name) {
        const formalMatch = matchORNameSingleElement(assertion, v.formal_name, flags);
        if (formalMatch === true) {
            matched = true;
        } else if (formalMatch === undefined) {
            sawUndefined = true;
        }
    }
    if (matched) {
        return true;
    }
    return sawUndefined ? undefined : false;
}

export
function matchORDescriptorSingleElement (
    assertion: string,
    v: ORDescriptor,
    flags: number = 0,
): boolean | undefined {
    if (v.isEmpty()) {
        return undefined;
    }
    return (flags & MATCH_FLAG_CONSTANT_TIME)
        ? matchORDescriptorSingleElementConstantTime(assertion, v, flags)
        : matchORDescriptorSingleElementFast(assertion, v, flags);
}

export
function oRDescriptorSingleElementMatchTyped (
    assertion: string,
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const v = _decode_ORDescriptor(value);
    return matchORDescriptorSingleElement(assertion, v, flags);
}

export
const oRDescriptorSingleElementMatch: Matcher = createEqualityMatcher(
    decodeORNameSingleElementAssertion,
    oRDescriptorSingleElementMatchTyped,
    undefined,
    true,
    normalizeORNameSingleElementAssertion,
);

export default oRDescriptorSingleElementMatch;

import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import {
    prepareMSStringValue,
    teletexBytesToString,
} from "./orAddressUtilities.js";
import {
    decodeORNameSingleElementAssertion,
    matchORNameSingleElement,
    normalizeORNameSingleElementAssertion,
} from "./oRNameSingleElementMatch.js";

export
function matchORDescriptorSingleElement (
    assertion: string,
    v: ORDescriptor,
    flags: number = 0,
): boolean | undefined {
    if (v.isEmpty()) {
        return undefined;
    }
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

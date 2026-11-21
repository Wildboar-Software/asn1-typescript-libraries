import type { ASN1Element } from "@wildboar/asn1";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import { teletexBytesToString } from "./orAddressUtilities.js";
import {
    decodeORNameSingleElementAssertion,
    matchORNameSingleElement,
    normalizeORNameSingleElementAssertion,
} from "./oRNameSingleElementMatch.js";

// ORDescriptor ::= SET {
//     formal-name       ORName OPTIONAL,
//     free-form-name    [0]  FreeFormName OPTIONAL,
//     telephone-number  [1]  TelephoneNumber OPTIONAL
// }

export
function matchORDescriptorSingleElement (
    assertion: string,
    v: ORDescriptor,
): boolean | undefined {
    if (!v.formal_name && (v.free_form_name === undefined) && (v.telephone_number === undefined)) {
        return undefined;
    }
    let sawUndefined = false;
    if (v.free_form_name !== undefined && v.free_form_name.length > 0) {
        const vname = normalizeORNameSingleElementAssertion(teletexBytesToString(v.free_form_name));
        if (vname === assertion) {
            return true;
        }
    }
    if (v.telephone_number !== undefined && v.telephone_number.length > 0) {
        const vname = normalizeORNameSingleElementAssertion(v.telephone_number);
        if (vname === assertion) {
            return true;
        }
    }
    if (v.formal_name) {
        const formalMatch = matchORNameSingleElement(assertion, v.formal_name);
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
): boolean | undefined {
    const v = _decode_ORDescriptor(value);
    return matchORDescriptorSingleElement(assertion, v);
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

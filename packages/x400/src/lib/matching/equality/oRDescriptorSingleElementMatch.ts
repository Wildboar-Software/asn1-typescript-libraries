import type { ASN1Element } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import teletexToString from "@wildboar/teletex";
import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_MSString,
    _encode_MSString,
    type MSString,
} from "@wildboar/x400/MSMatchingRules";
import { _encode_ORName } from "@wildboar/x400/MTSAbstractService";
import { _decode_ORDescriptor } from "@wildboar/x400/IPMSInformationObjects";
import { msStringToString } from "./orAddressUtilities.js";
import {
    normalizeORNameSingleElementAssertion,
    oRNameSingleElementMatchTyped,
} from "./oRNameSingleElementMatch.js";

// ORDescriptor ::= SET {
//     formal-name       ORName OPTIONAL,
//     free-form-name    [0]  FreeFormName OPTIONAL,
//     telephone-number  [1]  TelephoneNumber OPTIONAL
// }

export
function oRDescriptorSingleElementMatchTyped (
    assertion: MSString,
    value: ASN1Element,
): boolean {
    const a: string = msStringToString(assertion);
    const v = _decode_ORDescriptor(value);
    if (v.free_form_name) {
        const vname = teletexToString(v.free_form_name).trim().replace(/\s+/g, " ").toUpperCase();
        return (vname.indexOf(a) >= 0);
    }
    if (v.telephone_number) {
        const vname = v.telephone_number.trim().replace(/\s+/g, " ").toUpperCase();
        return (vname.indexOf(a) >= 0);
    }
    if (v.formal_name) {
        const vname = _encode_ORName(v.formal_name, DER);
        return oRNameSingleElementMatchTyped(
            normalizeORNameSingleElementAssertion(msStringToString(_decode_MSString(vname))),
            _encode_MSString(assertion, DER),
        );
    }
    return false;
}

export
const oRDescriptorSingleElementMatch: Matcher = createEqualityMatcher(
    _decode_MSString,
    oRDescriptorSingleElementMatchTyped,
    undefined,
    true,
);

export default oRDescriptorSingleElementMatch;

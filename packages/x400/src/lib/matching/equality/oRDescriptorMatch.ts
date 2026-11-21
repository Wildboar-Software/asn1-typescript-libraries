import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import { matchORNames } from "./oRNameMatch.js";
import { normalizeMSString, teletexBytesToString } from "./orAddressUtilities.js";

// ORDescriptor ::= SET {
//     formal-name       ORName OPTIONAL,
//     free-form-name    [0]  FreeFormName OPTIONAL,
//     telephone-number  [1]  TelephoneNumber OPTIONAL
// }

export
function oRDescriptorMatchTyped (
    assertion: ORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean {
    const a = assertion;
    const v = _decode_ORDescriptor(value);
    if (!!a.formal_name && !!v.formal_name) {
        return matchORNames(a.formal_name, v.formal_name, getEqualityMatcher, flags);
    }
    if (!!a.free_form_name && !!v.free_form_name) {
        const aname = normalizeMSString(teletexBytesToString(a.free_form_name), true);
        const vname = normalizeMSString(teletexBytesToString(v.free_form_name), true);
        return (aname === vname);
    }
    if (!!a.telephone_number && !!v.telephone_number) {
        const aname = normalizeMSString(a.telephone_number, true);
        const vname = normalizeMSString(v.telephone_number, true);
        return (aname === vname);
    }
    return false;
}

export
const oRDescriptorMatch: Matcher = createEqualityMatcher(
    _decode_ORDescriptor,
    oRDescriptorMatchTyped,
);

export default oRDescriptorMatch;

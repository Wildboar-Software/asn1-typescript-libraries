import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import teletexToString from "@wildboar/teletex";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import { _decode_ORName, _encode_ORName } from "@wildboar/x400/MTSAbstractService";
import {
    _decode_ORDescriptor,
    type ORDescriptor,
} from "@wildboar/x400/IPMSInformationObjects";
import { oRNameSubstringElementsMatchTyped } from "./oRNameSubstringElementsMatch.js";

// ORDescriptor ::= SET {
//     formal-name       ORName OPTIONAL,
//     free-form-name    [0]  FreeFormName OPTIONAL,
//     telephone-number  [1]  TelephoneNumber OPTIONAL
// }

export
function oRDescriptorSubstringElementsMatchTyped (
    assertion: ORDescriptor,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags?: number,
): boolean | undefined {
    const a = assertion;
    const v = _decode_ORDescriptor(value);
    if (!!a.formal_name && !!v.formal_name) {
        const aname = _encode_ORName(a.formal_name, DER);
        const vname = _encode_ORName(v.formal_name, DER);
        return oRNameSubstringElementsMatchTyped(
            _decode_ORName(aname),
            vname,
            getEqualityMatcher,
            flags,
        );
    }
    if (!!a.free_form_name && !!v.free_form_name) {
        const aname = teletexToString(a.free_form_name).trim().replace(/\s+/g, " ").toUpperCase();
        const vname = teletexToString(v.free_form_name).trim().replace(/\s+/g, " ").toUpperCase();
        return (vname.indexOf(aname) >= 0);
    }
    if (!!a.telephone_number && !!v.telephone_number) {
        const aname = a.telephone_number.trim().replace(/\s+/g, " ").toUpperCase();
        const vname = v.telephone_number.trim().replace(/\s+/g, " ").toUpperCase();
        return (vname.indexOf(aname) >= 0);
    }
    return false;
}

export
const oRDescriptorSubstringElementsMatch: Matcher = createEqualityMatcher(
    _decode_ORDescriptor,
    oRDescriptorSubstringElementsMatchTyped,
);

export default oRDescriptorSubstringElementsMatch;

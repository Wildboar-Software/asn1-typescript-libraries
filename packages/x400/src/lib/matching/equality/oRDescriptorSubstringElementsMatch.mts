import type { ASN1Element } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import teletexToString from "@wildboar/teletex";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { _encode_ORName } from "@wildboar/x400/MTSAbstractService";
import { _decode_ORDescriptor } from "@wildboar/x400/IPMSInformationObjects";
import { oRNameSubstringElementsMatchTyped } from "./oRNameSubstringElementsMatch.mjs";

// ORDescriptor ::= SET {
//     formal-name       ORName OPTIONAL,
//     free-form-name    [0]  FreeFormName OPTIONAL,
//     telephone-number  [1]  TelephoneNumber OPTIONAL
// }

// FreeFormName ::= TeletexString(SIZE (0..ub-free-form-name))

// TelephoneNumber ::= PrintableString(SIZE (0..ub-telephone-number))

export
function oRDescriptorSubstringElementsMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const a = _decode_ORDescriptor(assertion);
    const v = _decode_ORDescriptor(value);
    if (!!a.formal_name && !!v.formal_name) {
        const aname = _encode_ORName(a.formal_name, DER);
        const vname = _encode_ORName(v.formal_name, DER);
        return oRNameSubstringElementsMatchTyped(aname, vname, getEqualityMatcher, flags);
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

oRDescriptorSubstringElementsMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRDescriptorSubstringElementsMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRDescriptorSubstringElementsMatchTyped,
);

export default oRDescriptorSubstringElementsMatch;

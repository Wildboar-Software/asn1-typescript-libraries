import { ASN1Element } from "@wildboar/asn1";
import {
    PolicySyntax,
    _decode_PolicySyntax,
} from "../../modules/AuthenticationFramework/PolicySyntax.ta.mjs";
import type { ObjectIdentifierInput } from "../readValue.mjs";
import { readObjectIdentifier } from "../readValue.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.8 `policyMatch`.
 *
 * Equality for `CertificatePolicy` or `privPolicy`. TRUE iff the
 * presented `PolicyID` equals the stored `policyIdentifier`.
 *
 * `assertion` is an element, object identifier, or dotted string.
 * `value` is an element or a `PolicySyntax`.
 */
export
function policyMatch (
    assertion: ObjectIdentifierInput,
    value: ASN1Element | PolicySyntax,
): boolean {
    const stored = ASN1Element.isElement(value) ? _decode_PolicySyntax(value) : value;
    return stored.policyIdentifier.isEqualTo(readObjectIdentifier(assertion));
}

export default policyMatch;

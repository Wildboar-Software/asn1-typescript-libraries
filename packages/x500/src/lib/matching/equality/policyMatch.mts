import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    PolicySyntax,
    _decode_PolicySyntax,
} from "../../modules/AuthenticationFramework/PolicySyntax.ta.mjs";
import type { ObjectIdentifierInput } from "../readValue.mjs";
import { isAsn1Element, readObjectIdentifier } from "../readValue.mjs";

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
    const stored = isAsn1Element(value) ? _decode_PolicySyntax(value) : value;
    return policyMatchTyped(readObjectIdentifier(assertion), stored);
}

/**
 * `policyMatch` on a policy OID and a `PolicySyntax`.
 *
 * @param assertion Presented policy identifier.
 * @param value Stored policy syntax.
 * @returns `true` when the policy identifiers are equal.
 */
export
function policyMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    value: PolicySyntax,
): boolean {
    return value.policyIdentifier.isEqualTo(assertion);
}

export default policyMatch;

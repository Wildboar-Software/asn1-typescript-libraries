import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    PolicySyntax,
    _decode_PolicySyntax,
} from "../../modules/AuthenticationFramework/PolicySyntax.ta.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.8 `policyMatch`.
 *
 * Equality for `CertificatePolicy` or `privPolicy`. TRUE iff the
 * presented `PolicyID` equals the stored `policyIdentifier`.
 */
export
const policyMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: OBJECT_IDENTIFIER = assertion.objectIdentifier;
    const v: PolicySyntax = _decode_PolicySyntax(value);
    return v.policyIdentifier.isEqualTo(a);
}

export default policyMatch;

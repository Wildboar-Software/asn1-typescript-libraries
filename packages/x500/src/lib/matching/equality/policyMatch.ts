import EqualityMatcher from "../../types/EqualityMatcher.js";
import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import {
    PolicySyntax,
    _decode_PolicySyntax,
} from "../../modules/AuthenticationFramework/PolicySyntax.ta.js";

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

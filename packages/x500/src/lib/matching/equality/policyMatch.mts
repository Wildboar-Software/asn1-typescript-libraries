import { ASN1Element, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    PolicySyntax,
    _decode_PolicySyntax,
} from "../../modules/AuthenticationFramework/PolicySyntax.ta.mjs";
import { bytesEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 13.3.8 `policyMatch`.
 *
 * Equality for `CertificatePolicy` or `privPolicy`. TRUE iff the
 * presented `PolicyID` equals the stored `policyIdentifier`.
 *
 * @param assertion Presented policy identifier.
 * @param value Stored policy, or that policy already decoded.
 */
export
function policyMatchTyped (
    assertion: OBJECT_IDENTIFIER,
    value: PolicySyntax | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = ASN1Element.isElement(value) ? _decode_PolicySyntax(value) : value;
    if (flags & MATCH_FLAG_CONSTANT_TIME) {
        return bytesEqual(assertion.toBytesUnsafe(), stored.policyIdentifier.toBytesUnsafe(), true);
    }
    return stored.policyIdentifier.isEqualTo(assertion);
}

policyMatchTyped satisfies TypedEquationFunction<OBJECT_IDENTIFIER>;

/**
 * `policyMatch` as a `Matcher`.
 */
export
const policyMatch: Matcher = createEqualityMatcher(
    (el) => el.objectIdentifier,
    policyMatchTyped,
    undefined,
    true,
);

export default policyMatch;

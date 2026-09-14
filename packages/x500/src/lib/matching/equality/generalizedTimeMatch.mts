import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.3 `generalizedTimeMatch`.
 *
 * TRUE iff both GeneralizedTime values (X.680 46.3 b) or c))
 * represent the same instant. If minutes or seconds are absent,
 * they are treated as zero.
 */
export
const generalizedTimeMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = assertion.generalizedTime.toISOString();
    const v: string = value.generalizedTime.toISOString();
    return (a === v);
}

export default generalizedTimeMatch;

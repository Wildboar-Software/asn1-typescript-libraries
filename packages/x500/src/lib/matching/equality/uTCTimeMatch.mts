import EqualityMatcher from "../../types/EqualityMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.1 `uTCTimeMatch`.
 *
 * TRUE iff both UTCTime values represent the same instant. If
 * seconds are absent, they are treated as zero.
 */
export
const uTCTimeMatch: EqualityMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): boolean => {
    const a: string = assertion.utcTime.toISOString();
    const v: string = value.utcTime.toISOString();
    return (a === v);
}

export default uTCTimeMatch;

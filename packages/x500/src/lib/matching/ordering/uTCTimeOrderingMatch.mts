import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element, UTCTime } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.2 `uTCTimeOrderingMatch`.
 *
 * Directory TRUE iff the stored UTCTime is earlier than the
 * presented time. Two-digit years 00–49 mean 2000–2049; 50–99 mean
 * 1950–1999. Absent seconds are treated as zero.
 */
export
const uTCTimeOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: UTCTime = assertion.utcTime;
    const v: UTCTime = value.utcTime;
    return (a.valueOf() - v.valueOf());
}

export default uTCTimeOrderingMatch;

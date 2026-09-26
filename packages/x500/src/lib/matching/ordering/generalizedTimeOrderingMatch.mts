import type { ASN1Element } from "@wildboar/asn1";
import { isAsn1Element } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.4
 * `generalizedTimeOrderingMatch`.
 *
 * Directory TRUE iff the stored GeneralizedTime is earlier than
 * the presented time. Absent minutes or seconds are treated as
 * zero.
 *
 * Each argument may be an `ASN1Element` or a `Date`.
 */
export
function generalizedTimeOrderingMatch (
    assertion: ASN1Element | Date,
    value: ASN1Element | Date,
): number {
    return generalizedTimeOrderingMatchTyped(
        isAsn1Element(assertion) ? assertion.generalizedTime : assertion,
        isAsn1Element(value) ? value.generalizedTime : value,
    );
}

/**
 * `generalizedTimeOrderingMatch` on two instants.
 *
 * @param assertion Presented time.
 * @param value Stored time.
 * @returns Milliseconds of `assertion` minus milliseconds of `value`.
 */
export
function generalizedTimeOrderingMatchTyped (assertion: Date, value: Date): number {
    return assertion.valueOf() - value.valueOf();
}

export default generalizedTimeOrderingMatch;

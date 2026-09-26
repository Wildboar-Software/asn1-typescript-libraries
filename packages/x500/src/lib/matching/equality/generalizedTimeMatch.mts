import { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.3 `generalizedTimeMatch`.
 *
 * TRUE iff both GeneralizedTime values (X.680 46.3 b) or c))
 * represent the same instant. If minutes or seconds are absent,
 * they are treated as zero.
 *
 * Each argument may be an `ASN1Element` or a `Date`.
 */
export
function generalizedTimeMatch (
    assertion: ASN1Element | Date,
    value: ASN1Element | Date,
): boolean {
    return generalizedTimeMatchTyped(
        ASN1Element.isElement(assertion) ? assertion.generalizedTime : assertion,
        ASN1Element.isElement(value) ? value.generalizedTime : value,
    );
}

/**
 * `generalizedTimeMatch` on two instants.
 *
 * @param assertion Presented time.
 * @param value Stored time.
 * @returns `true` when both instants have the same ISO-8601 form.
 */
export
function generalizedTimeMatchTyped (assertion: Date, value: Date): boolean {
    return assertion.toISOString() === value.toISOString();
}

export default generalizedTimeMatch;

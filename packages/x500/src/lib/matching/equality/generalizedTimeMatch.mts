import { ASN1Element } from "@wildboar/asn1";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.3 `generalizedTimeMatch`.
 *
 * TRUE iff both GeneralizedTime values (X.680 46.3 b) or c))
 * represent the same instant. If minutes or seconds are absent,
 * they are treated as zero.
 *
 * @param assertion Presented time.
 * @param value Stored GeneralizedTime, or that instant already decoded.
 */
export
function generalizedTimeMatchTyped (
    assertion: Date,
    value: Date | ASN1Element,
): boolean | undefined {
    const stored = ASN1Element.isElement(value) ? value.generalizedTime : value;
    return assertion.toISOString() === stored.toISOString();
}

generalizedTimeMatchTyped satisfies TypedEquationFunction<Date>;

/**
 * `generalizedTimeMatch` as a `Matcher`.
 */
export
const generalizedTimeMatch: Matcher = createEqualityMatcher(
    (el) => el.generalizedTime,
    generalizedTimeMatchTyped,
);

export default generalizedTimeMatch;

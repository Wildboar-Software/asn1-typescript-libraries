import type { TimeInput } from "../readValue.mjs";
import { readGeneralizedTime } from "../readValue.mjs";

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
    assertion: TimeInput,
    value: TimeInput,
): number {
    return generalizedTimeOrderingMatchTyped(
        readGeneralizedTime(assertion),
        readGeneralizedTime(value),
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

import type { TimeInput } from "../readValue.mjs";
import { readUTCTime } from "../readValue.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.1 `uTCTimeMatch`.
 *
 * TRUE iff both UTCTime values represent the same instant. If
 * seconds are absent, they are treated as zero.
 *
 * Each argument may be an `ASN1Element` or a `Date`.
 */
export
function uTCTimeMatch (
    assertion: TimeInput,
    value: TimeInput,
): boolean {
    return uTCTimeMatchTyped(readUTCTime(assertion), readUTCTime(value));
}

/**
 * `uTCTimeMatch` on two instants.
 *
 * @param assertion Presented time.
 * @param value Stored time.
 * @returns `true` when both instants have the same ISO-8601 form.
 */
export
function uTCTimeMatchTyped (assertion: Date, value: Date): boolean {
    return assertion.toISOString() === value.toISOString();
}

export default uTCTimeMatch;

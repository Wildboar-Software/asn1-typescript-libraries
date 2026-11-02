import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.1 `uTCTimeMatch`.
 *
 * TRUE iff both UTCTime values represent the same instant. If
 * seconds are absent, they are treated as zero.
 *
 * @param assertion Presented time.
 * @param value Stored UTCTime, or that instant already decoded.
 */
export
function uTCTimeMatchTyped (
    assertion: Date,
    value: Date | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = ASN1Element.isElement(value) ? value.utcTime : value;
    if (flags & MATCH_FLAG_APPROXIMATE) {
        const diff = Math.floor(assertion.getTime() / 1000) - Math.floor(stored.getTime() / 1000);
        return diff >= -1 && diff <= 1;
    }
    return assertion.getTime() === stored.getTime();
}

uTCTimeMatchTyped satisfies TypedEquationFunction<Date>;

/**
 * `uTCTimeMatch` as a `Matcher`.
 */
export
const uTCTimeMatch: Matcher = createEqualityMatcher(
    (el) => el.utcTime,
    uTCTimeMatchTyped,
);

export default uTCTimeMatch;

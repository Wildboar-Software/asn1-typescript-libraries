import { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * UTC seconds since the epoch. A fractional second is dropped, including
 * milliseconds carried on a `Date`. Floor division keeps a time before
 * 1970 in its UTC second.
 */
function utcSeconds (time: Date): number {
    return Math.floor(time.getTime() / 1000);
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.3.3 `generalizedTimeMatch`.
 *
 * TRUE iff both GeneralizedTime values (X.680 46.3 b) or c))
 * represent the same time to a precision of one second. If minutes
 * or seconds are absent, they are treated as zero. A fractional
 * second does not distinguish two values.
 *
 * @param assertion Presented time.
 * @param value Stored GeneralizedTime, or that instant already decoded.
 */
export
function generalizedTimeMatchTyped (
    assertion: Date,
    value: Date | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = ASN1Element.isElement(value) ? value.generalizedTime : value;
    const diff = utcSeconds(assertion) - utcSeconds(stored);
    if (flags & MATCH_FLAG_APPROXIMATE) {
        return diff >= -1 && diff <= 1;
    }
    return diff === 0;
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

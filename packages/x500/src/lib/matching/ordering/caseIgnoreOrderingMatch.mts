import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDirectoryString } from "../readValue.mjs";
import { compareCodePoints, prepString } from "../../utils/prepString.mjs";
import { ctCompareCodePoints } from "../constantTime.mjs";
import {
    createOrderingMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Prepare and case-fold the presented directory string once.
 * `prepString` returns `undefined` for a prohibited character or a
 * string that maps to empty. That is an assertion error, not UNDEFINED.
 */
function prepareCaseIgnoreAssertion (el: ASN1Element): string {
    const prepared = prepString(readDirectoryString(el), { caseFold: true });
    if (prepared === undefined) {
        throw new ASN1CharactersError(
            "caseIgnoreOrderingMatch assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.2
 * `caseIgnoreOrderingMatch`.
 *
 * Same as `caseExactOrderingMatch` except upper-case is folded
 * during string preparation (clause 7.2). Insignificant spaces are
 * ignored (clause 7.6). The signed result is negative when the
 * presented string is less than the stored string. Preparation
 * failure of a stored value is UNDEFINED.
 *
 * @param assertion Presented string, already prepared and case-folded.
 * @param value Stored directory string, or that string already
 *  prepared. `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreOrderingMatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): number | undefined {
    const raw = readDirectoryString(value);
    const compare = (flags & MATCH_FLAG_CONSTANT_TIME)
        ? ctCompareCodePoints
        : compareCodePoints;
    if (flags & MATCH_FLAG_VALUE_NORMALIZED) {
        return compare(assertion, raw);
    }
    const prepared = prepString(raw, { caseFold: true });
    if (prepared === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: caseIgnoreOrderingMatch: stored value failed string preparation",
            );
        }
        return undefined;
    }
    return compare(assertion, prepared);
}

caseIgnoreOrderingMatchTyped satisfies TypedOrderingFunction<string>;

/**
 * `caseIgnoreOrderingMatch` as a `Matcher`. TRUE iff the stored value
 * is less than the presented value. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 * An assertion that cannot be prepared throws `ASN1CharactersError`.
 */
export
const caseIgnoreOrderingMatch: Matcher = createOrderingMatcher(
    prepareCaseIgnoreAssertion,
    caseIgnoreOrderingMatchTyped,
);

export default caseIgnoreOrderingMatch;

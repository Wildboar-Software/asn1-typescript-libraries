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
 * Prepare the presented directory string once. `prepString` returns
 * `undefined` for a prohibited character or a string that maps to
 * empty. That is an assertion error, not UNDEFINED.
 */
function prepareCaseExactAssertion (el: ASN1Element): string {
    const prepared = prepString(readDirectoryString(el));
    if (prepared === undefined) {
        throw new ASN1CharactersError(
            "caseExactOrderingMatch assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.2
 * `caseExactOrderingMatch`.
 *
 * Directory ordering of `UnboundedDirectoryString` after removing
 * insignificant spaces (clause 7.6). The signed result is negative
 * when the presented string is less than the stored string under
 * Unicode code-point collation. Preparation failure of a stored
 * value is UNDEFINED.
 *
 * Language-specific collation is outside the scope of X.520.
 *
 * @param assertion Presented string, already prepared.
 * @param value Stored directory string, or that string already
 *  prepared. `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseExactOrderingMatchTyped (
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
    const prepared = prepString(raw);
    if (prepared === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: caseExactOrderingMatch: stored value failed string preparation",
            );
        }
        return undefined;
    }
    return compare(assertion, prepared);
}

caseExactOrderingMatchTyped satisfies TypedOrderingFunction<string>;

/**
 * `caseExactOrderingMatch` as a `Matcher`. TRUE iff the stored value
 * is less than the presented value. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 * An assertion that cannot be prepared throws `ASN1CharactersError`.
 */
export
const caseExactOrderingMatch: Matcher = createOrderingMatcher(
    prepareCaseExactAssertion,
    caseExactOrderingMatchTyped,
);

export default caseExactOrderingMatch;

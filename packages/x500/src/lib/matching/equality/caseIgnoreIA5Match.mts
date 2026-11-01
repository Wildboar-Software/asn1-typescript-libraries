import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Prepare and case-fold the presented IA5 string once.
 */
function prepareCaseIgnoreIA5Assertion (el: ASN1Element): string {
    const prepared = prepString(el.ia5String, { caseFold: true });
    if (prepared === undefined) {
        throw new ASN1CharactersError(
            "caseIgnoreIA5Match assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.2
 * `caseIgnoreIA5Match` (LDAP-defined).
 *
 * Compares IA5String values after string preparation (clause 7.2).
 * TRUE iff the prepared strings are equal after case mapping.
 * Preparation failure of a stored value is UNDEFINED.
 *
 * @param assertion Presented string, already prepared and case-folded.
 * @param value Stored IA5String, or that string already prepared.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreIA5MatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = typeof value === "string" ? value : value.ia5String;
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    if (flags & MATCH_FLAG_VALUE_NORMALIZED) {
        return stringsEqual(assertion, raw, constantTime);
    }
    const prepared = prepString(raw, { caseFold: true });
    if (prepared === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: caseIgnoreIA5Match: stored value failed string preparation",
            );
        }
        return undefined;
    }
    return stringsEqual(assertion, prepared, constantTime);
}

caseIgnoreIA5MatchTyped satisfies TypedEquationFunction<string>;

/**
 * `caseIgnoreIA5Match` as a `Matcher`. An assertion that cannot be
 * prepared throws `ASN1CharactersError`.
 */
export
const caseIgnoreIA5Match: Matcher = createEqualityMatcher(
    prepareCaseIgnoreIA5Assertion,
    caseIgnoreIA5MatchTyped,
);

export default caseIgnoreIA5Match;

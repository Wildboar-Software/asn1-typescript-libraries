import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Prepare the presented IA5 string once.
 */
function prepareCaseExactIA5Assertion (el: ASN1Element): string {
    const prepared = prepString(el.ia5String);
    if (prepared === undefined) {
        throw new ASN1CharactersError(
            "caseExactIA5Match assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.11.1
 * `caseExactIA5Match` (LDAP-defined).
 *
 * Compares IA5String values after string preparation (clause 7.2).
 * Case is significant. Preparation failure of a stored value is
 * UNDEFINED.
 *
 * @param assertion Presented string, already prepared.
 * @param value Stored IA5String, or that string already prepared.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseExactIA5MatchTyped (
    assertion: string,
    value: string | ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = typeof value === "string" ? value : value.ia5String;
    if (flags & MATCH_FLAG_VALUE_NORMALIZED) {
        return assertion === raw;
    }
    const prepared = prepString(raw);
    if (prepared === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: caseExactIA5Match: stored value failed string preparation",
            );
        }
        return undefined;
    }
    return assertion === prepared;
}

caseExactIA5MatchTyped satisfies TypedEquationFunction<string>;

/**
 * `caseExactIA5Match` as a `Matcher`. An assertion that cannot be
 * prepared throws `ASN1CharactersError`.
 */
export
const caseExactIA5Match: Matcher = createEqualityMatcher(
    prepareCaseExactIA5Assertion,
    caseExactIA5MatchTyped,
);

export default caseExactIA5Match;

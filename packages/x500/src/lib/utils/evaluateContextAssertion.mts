import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Context } from "../modules/InformationFramework/Context.ta.mjs";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import {
    type ContextMatcher,
    type Matcher,
    MATCH_FLAG_CONSTANT_TIME,
} from "../types/matching.mjs";
import compareElements from "../comparators/compareElements.mjs";

/**
 * Encoding comparison used when the context type has no matcher. TRUE
 * iff any stored value has the same encoding as the assertion.
 */
const compareElementsContextMatcher: ContextMatcher = (assertion, values) => {
    for (const value of values) {
        if (compareElements(assertion, value)) {
            return true;
        }
    }
    return false;
};

/**
 * @summary Evaluate a Context Assertion
 * @description
 *
 * Evaluate an X.500 directory context assertion according to the procedures
 * specified in ITU-T Recommendation X.501 (2019), Section 8.9.2.4, bullets
 * (a) and (b). Fallback (bullet (c)) is **not** applied here: that rule is
 * defined in terms of the other values of the same attribute, so callers that
 * have those siblings must apply it themselves after this function returns
 * `false`.
 *
 * @param {ContextAssertion} ca The context assertion to be evaluated
 * @param {Context[]} contexts The contexts to be evaluated
 * @param {Function} getContextMatcher A function that returns a matcher function when given
 *  the OID of the context type. If the context type is unrecognized, asserted
 *  and stored values are compared by encoding via `compareElements`.
 * @param {Function} determineAbsentMatch A function that returns whether the context
 *  assertion is `ABSENT-MATCH`
 * @param {Function} getEqualityMatcher Equality matcher lookup passed through
 *  to the context matcher for nested distinguished-name comparison
 * @param {number} flags Matching flags passed through to the context matcher
 * @returns {Boolean} `true` if the context assertion matches
 * @function
 */
export
function evaluateContextAssertion (
    ca: ContextAssertion,
    contexts: readonly Context[],
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined,
    determineAbsentMatch: (contextType: OBJECT_IDENTIFIER) => boolean,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const matcher = getContextMatcher(ca.contextType) ?? compareElementsContextMatcher;
    let hadContextOfAssertedType = false;
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    let returnValue = false;
    for (let i = 0; i < contexts.length; i++) {
        const context = contexts[i];
        if (context.contextValues.length === 0) {
            continue;
        }
        if (!context.contextType.isEqualTo(ca.contextType)) {
            continue;
        }
        hadContextOfAssertedType = true;
        let matched = false;
        for (let j = 0; j < ca.contextValues.length; j++) {
            const assertedValue = ca.contextValues[j];
            if (matcher(assertedValue, context.contextValues.values(), getEqualityMatcher, flags)) {
                matched = true;
                if (constantTime) {
                    break;
                }
            }
        }
        // a) the attribute value has a context of the same contextType of the ContextAssertion and any of the
        // stored contextValues of that context matches with any of the asserted contextValues according to
        // the definition of how a match is determined for that contextType.
        if (matched) {
            returnValue = true;
            if (constantTime) {
                break;
            }
        }
    }
    // A ContextAssertion is true for a particular attribute value if:
    // b) the attribute value contains no contexts of the asserted contextType; or
    if (!hadContextOfAssertedType) {
        /**
         * This is not documented in the section describing `ContextAssertion`s,
         * but rather, in the definition of a context type, in Section 13.9.2 of
         * ITU Recommendation X.501 (2016).
         */
        return determineAbsentMatch(ca.contextType);
    }
    return returnValue;
}

export default evaluateContextAssertion;

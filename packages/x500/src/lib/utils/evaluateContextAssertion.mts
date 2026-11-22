import type { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Context } from "../modules/InformationFramework/Context.ta.mjs";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import {
    type ContextMatcher,
    type Matcher,
} from "../types/matching.mjs";
import compareElements from "../comparators/compareElements.mjs";

/**
 * Encoding comparison used when the context type has no matcher. TRUE
 * iff any stored value has the same encoding as the assertion.
 *
 * A value that cannot be read, including a decoding error, is a
 * non-match. The scan continues with the remaining stored values.
 */
const compareElementsContextMatcher: ContextMatcher = (assertion, values) => {
    for (let i = 0; i < values.length; i++) {
        try {
            if (compareElements(assertion, values[i])) {
                return true;
            }
        } catch {
            // Invalid stored value: non-match.
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
 * @returns {Boolean} `true` if the context assertion matches. An invalid
 *  stored context value is a non-match for that value. This function does
 *  not return the UNDEFINED outcome used by attribute value matching. A
 *  malformed assertion is reported by the context matcher throwing.
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
    const isAbsentMatch: boolean = determineAbsentMatch(ca.contextType);
    let stored: readonly ASN1Element[] | undefined;
    let merged: ASN1Element[] | undefined;
    for (let i = 0; i < contexts.length; i++) {
        const context = contexts[i];
        if (!context.contextType.isEqualTo(ca.contextType)) {
            continue;
        }
        const values = context.contextValues;
        if (stored === undefined) {
            // Reuse the first matching context's array. Copy only if another
            // context of this type appears, so the original is never mutated.
            stored = values;
            continue;
        }
        if (merged === undefined) {
            merged = stored.slice();
            stored = merged;
        }
        for (let j = 0; j < values.length; j++) {
            merged.push(values[j]);
        }
    }
    // A ContextAssertion is true for a particular attribute value if:
    // b) the attribute value contains no contexts of the asserted contextType; or
    if (stored === undefined || stored.length === 0) {
        /**
         * This is not documented in the section describing `ContextAssertion`s,
         * but rather, in the definition of a context type, in Section 13.9.2 of
         * ITU Recommendation X.501 (2016).
         */
        return isAbsentMatch;
    }
    // a) the attribute value has a context of the same contextType of the
    // ContextAssertion and any stored context value of that context matches
    // any asserted context value, according to the context type's match.
    const asserted = ca.contextValues;
    for (let i = 0; i < asserted.length; i++) {
        if (matcher(asserted[i], stored, getEqualityMatcher, flags)) {
            return true;
        }
    }
    return false;
}

export default evaluateContextAssertion;

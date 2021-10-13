import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type { Context } from "../modules/InformationFramework/Context.ta";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta";
import type ContextMatcher from "../types/ContextMatcher";

export
function evaluateContextAssertion (
    ca: ContextAssertion,
    contexts: Context[],
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined,
    determineAbsentMatch: (contextType: OBJECT_IDENTIFIER) => boolean,
): boolean {
    const matcher = getContextMatcher(ca.contextType);
    if (!matcher) {
        // The specification does not say what to do if a context type is unrecognized.
        // For security's sake, we reject.
        return false;
    }
    const isAbsentMatch: boolean = determineAbsentMatch(ca.contextType);
    const relevantContexts = contexts
        .filter((c) => c.contextType.isEqualTo(ca.contextType));
    // A ContextAssertion is true for a particular attribute value if:
    // b) the attribute value contains no contexts of the asserted contextType; or
    if (relevantContexts.length === 0) {
        /**
         * This is not documented in the section describing `ContextAssertion`s,
         * but rather, in the definition of a context type, in Section 13.9.2 of
         * ITU Recommendation X.501 (2016).
         */
        return isAbsentMatch
            ? true
            : false;
    }
    // a) the attribute value has a context of the same contextType of the ContextAssertion and any of the
    // stored contextValues of that context matches with any of the asserted contextValues according to
    // the definition of how a match is determined for that contextType; or
    const matches = ca.contextValues
        .some((assertedValue) => relevantContexts
            .some((rc) => rc.contextValues
                .some((cv) => matcher(assertedValue, cv))));
    return (
        matches
        // c) none of the other attribute values for the attribute satisfies the ContextAssertion according to 1) or 2)
        // in 8.9.2.2 above, but the attribute value does contain a context of the asserted contextType with the
        // fallback set to TRUE.
        || relevantContexts.some((context) => context.fallback)
    );
}

export default evaluateContextAssertion;

import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Matcher } from "../types/matching.mjs";
import type {
    NameConstraintsSyntax,
} from "../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import compareGeneralSubtrees from "../comparators/compareGeneralSubtrees.mjs";

/**
 * @summary Options for comparing `NameConstraintsSyntax`
 */
export
interface CompareNameConstraintsSyntaxOptions {
    /**
     * When `true`, the order of `GeneralSubtree` values within
     * `permittedSubtrees` and within `excludedSubtrees` does not
     * affect the result. Each subtree must still pair with a distinct
     * equal subtree using built-in name keys and bounds; custom equality
     * matchers are ignored. When omitted or `false`, subtrees are compared
     * in encoding order, honoring the supplied equality matcher.
     */
    ignoreSubtreeOrder?: boolean;
}

/**
 * @summary Compare two `NameConstraintsSyntax` values
 * @description
 *
 * `permittedSubtrees` and `excludedSubtrees` are compared separately
 * and are not interchangeable. By default, subtrees are compared in
 * encoding order. Pass `{ ignoreSubtreeOrder: true }` when that order
 * should not matter. Ignored order preserves duplicate counts and
 * uses built-in name-key normalization instead of custom equality rules.
 *
 * @param a One value
 * @param b The other
 * @param getEqualityMatcher A function that takes an attribute type and
 *  returns a function that can equality-match two values of that type.
 *  Used only when subtree order is significant.
 * @param options Comparison options. `ignoreSubtreeOrder` skips
 *  subtree sequence order.
 * @returns {boolean} `true` if they match; `false` otherwise
 * @function
 */
export
function compareNameConstraintsSyntax (
    a: NameConstraintsSyntax,
    b: NameConstraintsSyntax,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
    options?: CompareNameConstraintsSyntaxOptions,
): boolean {
    const exactOrdering: boolean = options?.ignoreSubtreeOrder !== true;
    if (Boolean(a.permittedSubtrees) !== Boolean(b.permittedSubtrees)) {
        return false;
    }
    if (Boolean(a.excludedSubtrees) !== Boolean(b.excludedSubtrees)) {
        return false;
    }
    if (
        a.permittedSubtrees
        && b.permittedSubtrees
        && !compareGeneralSubtrees(
            a.permittedSubtrees,
            b.permittedSubtrees,
            getEqualityMatcher,
            exactOrdering,
        )
    ) {
        return false;
    }
    if (
        a.excludedSubtrees
        && b.excludedSubtrees
        && !compareGeneralSubtrees(
            a.excludedSubtrees,
            b.excludedSubtrees,
            getEqualityMatcher,
            exactOrdering,
        )
    ) {
        return false;
    }
    return true;
}

export default compareNameConstraintsSyntax;

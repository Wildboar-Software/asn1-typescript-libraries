import {
    type SubtreeSpecification,
} from "../modules/InformationFramework/SubtreeSpecification.ta.mjs";
import { asDITDescending, type RDNSequenceDescending } from "@wildboar/dn";
import type { DistinguishedName } from "../modules/InformationFramework/DistinguishedName.ta.mjs";
import type { EqualityMatcher } from "../types/matching.mjs";
import type { AttributeType } from "../modules/InformationFramework/AttributeType.ta.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";

/**
 * @summary Get a subtree specification that is the intersection of two subtrees
 * @description
 *
 * This function takes two subtree specifications and the distinguished names of
 * their roots and returns a single subtree specification that consitutes the
 * intersection of the aforementioned, as well as its root distinguished name.
 * If there is no intersection, `null` is returned.
 *
 * This function accounts for minimum, maximum, chops, base, and refinement.
 *
 * The algorithm lives on `SubtreeSpecification.intersection`. This
 * wrapper looks up X.500 equality `Matcher`s and presents them as the
 * distinguished-value matchers that method expects.
 *
 * @param a A subtree specification
 * @param b A subtree specification
 * @param a_root The context prefix of the first subtree specification
 * @param b_root The context prefix of the second subtree specification
 * @returns The subtree specification and the DN of the root of said subtree
 *  specification that constitutes of the intersection of the supplied subtrees,
 *  or `null` if there is no overlap.
 *
 * @function
 */
export
function subtreeIntersection (
    getEqualityMatcher: (attributeType: AttributeType) => EqualityMatcher | undefined,
    a: SubtreeSpecification,
    b: SubtreeSpecification,
    a_root: RDNSequenceDescending = asDITDescending([]),
    b_root: RDNSequenceDescending = asDITDescending([]),
): [ SubtreeSpecification, DistinguishedName ] | null {
    return a.intersection(
        b,
        valueEqualityMatcher(getEqualityMatcher),
        a_root,
        b_root,
    );
}

export default subtreeIntersection;

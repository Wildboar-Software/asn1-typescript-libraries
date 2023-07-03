import type EqualityMatcher from "../types/EqualityMatcher";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import type {
    SubtreeSpecification,
} from "../modules/InformationFramework/SubtreeSpecification.ta";
import type {
    OBJECT_CLASS,
} from "../modules/InformationFramework/OBJECT-CLASS.oca";
import compareDistinguishedName from "../comparators/compareDistinguishedName";
import objectClassesWithinRefinement from "./objectClassesWithinRefinement";

/**
 * @summary Determine whether a distinguished name falls within a subtree.
 * @description
 *
 * Determines whether a distinguished name falls within a subtree defined by a
 * `SubtreeSpecification`.
 *
 * ### Relevant ASN.1 Definitions
 *
 * ```asn1
 * SubtreeSpecification ::= SEQUENCE {
 *     base                 [0]  LocalName DEFAULT {},
 *     COMPONENTS OF             ChopSpecification,
 *     specificationFilter  [4]  Refinement OPTIONAL,
 *     ... }
 *   -- empty sequence specifies whole administrative area
 *
 *   LocalName ::= RDNSequence
 *
 *   ChopSpecification ::= SEQUENCE {
 *     specificExclusions    [1]  SET SIZE (1..MAX) OF CHOICE {
 *       chopBefore  [0]  LocalName,
 *       chopAfter   [1]  LocalName,
 *       ...} OPTIONAL,
 *     minimum       [2]  BaseDistance DEFAULT 0,
 *     maximum       [3]  BaseDistance OPTIONAL,
 *     ... }
 *
 *   BaseDistance ::= INTEGER(0..MAX)
 *
 *   Refinement ::= CHOICE {
 *     item  [0]  OBJECT-CLASS.&id,
 *     and   [1]  SET SIZE (1..MAX) OF Refinement,
 *     or    [2]  SET SIZE (1..MAX) OF Refinement,
 *     not   [3]  Refinement,
 *     ... }
 * ```
 *
 * @param dn The full distinguished name of the entry.
 * @param sts The subtree specification used to subcategorize the administrative area.
 * @param scope The vertex that forms the root to which the subtree specification is applied.
 * @param getEqualityMatcher A function that takes an object identifier that identifies a type and returns an equality matcher.
 * @returns {boolean} A boolean, which will be `true` if the entry falls within the subtree specification.
 */
export
function dnWithinSubtreeSpecification (
    entryDN: DistinguishedName,
    entryObjectClasses: OBJECT_CLASS["&id"][],
    sts: SubtreeSpecification,
    scope: DistinguishedName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const base: DistinguishedName = [
        ...scope,
        ...(sts.base ?? []),
    ];
    // Short circuits to avoid the more costly ATAV comparisons later on.
    if (entryDN.length < (base.length + (sts.minimum ? Number(sts.minimum) : 0))) {
        return false;
    }
    if (entryDN.length > (base.length + (sts.maximum ? Number(sts.maximum) : Infinity))) {
        return false;
    }
    if (sts.specificationFilter && !objectClassesWithinRefinement(entryObjectClasses, sts.specificationFilter)) {
        return false;
    }
    const baseMatches = compareDistinguishedName(base, entryDN.slice(0, base.length), getEqualityMatcher ?? (() => () => false));
    if (!baseMatches) {
        return false;
    }
    const localName = entryDN.slice(base.length);
    for (const spex of sts.specificExclusions ?? []) {
        if ("chopBefore" in spex) {
            const chop: DistinguishedName = spex.chopBefore;
            const chopMatches = compareDistinguishedName(chop, localName.slice(0, chop.length), getEqualityMatcher ?? (() => () => false));
            if (chopMatches) {
                return false;
            }
        } else if ("chopAfter" in spex) {
            const chop: DistinguishedName = spex.chopAfter;
            const chopMatches = compareDistinguishedName(chop, localName.slice(0, chop.length), getEqualityMatcher ?? (() => () => false));
            if (chopMatches && (localName.length > chop.length)) {
                return false;
            }
        } else {
            return false; // Extension not understood.
        }
    }
    return true;
}

export default dnWithinSubtreeSpecification;

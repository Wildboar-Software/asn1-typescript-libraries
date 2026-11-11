import type { Matcher } from "../types/matching.mjs";
import { valueEqualityMatcher } from "../matching/valueEqualityMatcher.mjs";
import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import {
    asDITDescending,
    dnStartsWith,
    type RDNSequenceDescending,
} from "@wildboar/dn";
import type {
    SubtreeSpecification,
} from "../modules/InformationFramework/SubtreeSpecification.ta.mjs";
import type {
    OBJECT_CLASS,
} from "../modules/InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    objectClassesWithinRefinement as withinRefinement,
} from "./objectClassesWithinRefinement.mjs";
import compareElements from "../comparators/compareElements.mjs";

/**
 * @summary Determine whether a distinguished name falls within a subtree.
 * @description
 *
 * Determines whether a distinguished name falls within a subtree defined by a
 * `SubtreeSpecification`.
 *
 * `entryDN` and `scope` are X.500 distinguished names in DIT-descending
 * order (`RDNSequenceDescending` from `@wildboar/dn`). `scope` is the
 * context vertex the specification is applied to; the administrative
 * point, when the specification describes an administrative area. The
 * specification's `base` and chops are local names. They are also
 * DIT-descending, but they are relative to `scope` or to the base, not
 * full distinguished names.
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
 * @param entryDN The full distinguished name of the entry, in
 *  DIT-descending order.
 * @param entryObjectClasses The entry's object classes
 * @param sts The subtree specification used to
 *  subcategorize the administrative area.
 * @param scope The vertex that forms the root to which the
 *  subtree specification is applied, in DIT-descending order.
 * @param getEqualityMatcher A function that takes an object
 *  identifier that identifies a type and returns an equality matcher.
 * @returns A boolean, which will be `true` if the entry
 *  falls within the subtree specification. `undefined` if a chop exclusion
 *  choice variant is not understood.
 * @function
 */
export
function dnWithinSubtreeSpecification (
    entryDN: RDNSequenceDescending,
    entryObjectClasses: OBJECT_CLASS["&id"][],
    sts: SubtreeSpecification,
    scope: RDNSequenceDescending,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
): boolean | undefined {
    const base: RDNSequenceDescending = asDITDescending([
        ...scope,
        ...(sts.base ?? []),
    ]);
    const minimum = Number(sts.minimum ?? 0);
    const maximum = (sts.maximum === undefined) ? Infinity : Number(sts.maximum);
    // Short circuits to avoid the more costly ATAV comparisons later on.
    if (entryDN.length < (base.length + minimum)) {
        return false;
    }
    if (entryDN.length > (base.length + maximum)) {
        return false;
    }
    if (
        sts.specificationFilter
        && !withinRefinement(entryObjectClasses, sts.specificationFilter)
    ) {
        return false;
    }
    const namingMatcher = valueEqualityMatcher(getEqualityMatcher) ?? (() => compareElements);
    if (!dnStartsWith(entryDN, base, namingMatcher)) {
        return false;
    }
    const localName = asDITDescending(entryDN.slice(base.length));
    for (const spex of sts.specificExclusions ?? []) {
        if ("chopBefore" in spex) {
            if (dnStartsWith(localName, asDITDescending(spex.chopBefore), namingMatcher)) {
                return false;
            }
        } else if ("chopAfter" in spex) {
            const chop = asDITDescending(spex.chopAfter);
            // chopAfter excludes subordinates of the named entry, not the entry itself.
            if (dnStartsWith(localName, chop, namingMatcher) && (localName.length > chop.length)) {
                return false;
            }
        } else {
            return undefined; // Extension not understood.
        }
    }
    return true;
}

export default dnWithinSubtreeSpecification;

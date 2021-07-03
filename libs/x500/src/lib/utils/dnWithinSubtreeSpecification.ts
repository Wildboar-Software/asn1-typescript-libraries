import type EqualityMatcher from "../types/EqualityMatcher";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import {
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
 * @param administrativePoint The vertex that forms the root to which the subtree specification is applied.
 * @param getEqualityMatcher A function that takes an object identifier that identifies a type and returns an equality matcher.
 * @returns {boolean} A boolean, which will be `true` if the entry falls within the subtree specification.
 */
export
function dnWithinSubtreeSpecification (
    entryDN: DistinguishedName,
    entryObjectClasses: OBJECT_CLASS["&id"][],
    sts: SubtreeSpecification,
    administrativePoint: DistinguishedName,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    const base: DistinguishedName = [
        ...administrativePoint,
        ...(sts.base ?? SubtreeSpecification._default_value_for_base),
    ];
    // Short circuits to avoid the more costly ATAV comparisons later on.
    if (entryDN.length < (base.length + (sts.minimum ?? 0))) {
        return false;
    }
    if (entryDN.length > (base.length + (sts.maximum ?? Infinity))) {
        return false;
    }
    if (sts.specificationFilter && !objectClassesWithinRefinement(entryObjectClasses, sts.specificationFilter)) {
        return false;
    }
    const baseMatches = compareDistinguishedName(base, entryDN.slice(0, base.length), getEqualityMatcher ?? (() => () => false));
    if (!baseMatches) {
        return false;
    }
    if (sts.specificExclusions) {
        const specificallyExcluded: boolean = sts.specificExclusions.some((se) => {
            if ("chopBefore" in se) {
                const chop: DistinguishedName = [
                    ...administrativePoint,
                    ...se.chopBefore,
                ];
                const chopMatches = compareDistinguishedName(chop, entryDN.slice(0, chop.length), getEqualityMatcher ?? (() => () => false));
                if (chopMatches) {
                    return false;
                }
            } else if ("chopAfter" in se) {
                const chop: DistinguishedName = [
                    ...administrativePoint,
                    ...se.chopAfter,
                ];
                const chopMatches = compareDistinguishedName(chop, entryDN.slice(0, chop.length), getEqualityMatcher ?? (() => () => false));
                if (chopMatches && (entryDN.length >= (chop.length + 1))) {
                    return false;
                }
            } else {
                return false; // Extension not understood.
            }
        });
        if (specificallyExcluded) {
            return false;
        }
    }
    return true;
}

export default dnWithinSubtreeSpecification;

import type EqualityMatcher from "../types/EqualityMatcher";
import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type {
    DistinguishedName,
} from "../modules/InformationFramework/DistinguishedName.ta";
import compareDistinguishedName from "../comparators/compareDistinguishedName";

// TODO: This should be split into two: nameWithinGeneralSubtree and dnWithinSubtreeSpecification

// GeneralSubtree ::= SEQUENCE {
//     base          GeneralName,
//     minimum  [0]  BaseDistance DEFAULT 0,
//     maximum  [1]  BaseDistance OPTIONAL,
//     ... }

//   BaseDistance ::= INTEGER(0..MAX)

// SubtreeSpecification ::= SEQUENCE {
//     base                 [0]  LocalName DEFAULT {},
//     COMPONENTS OF             ChopSpecification,
//     specificationFilter  [4]  Refinement OPTIONAL,
//     ... }
//   -- empty sequence specifies whole administrative area

//   LocalName ::= RDNSequence

//   ChopSpecification ::= SEQUENCE {
//     specificExclusions    [1]  SET SIZE (1..MAX) OF CHOICE {
//       chopBefore  [0]  LocalName,
//       chopAfter   [1]  LocalName,
//       ...} OPTIONAL,
//     minimum       [2]  BaseDistance DEFAULT 0,
//     maximum       [3]  BaseDistance OPTIONAL,
//     ... }

//   BaseDistance ::= INTEGER(0..MAX)

//   Refinement ::= CHOICE {
//     item  [0]  OBJECT-CLASS.&id,
//     and   [1]  SET SIZE (1..MAX) OF Refinement,
//     or    [2]  SET SIZE (1..MAX) OF Refinement,
//     not   [3]  Refinement,
//     ... }

export
function dnWithinSubtree (
    dn: DistinguishedName,
    dit: DistinguishedName,
    minimum: number = 0,
    maximum: number = 0,
    getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if (dn.length < (dit.length + minimum)) {
        return false;
    }
    if (dn.length > (dit.length + maximum)) {
        return false;
    }
    return compareDistinguishedName(dit.reverse(), dn.reverse().slice(0, dit.length), getEqualityMatcher);
}

export default dnWithinSubtree;

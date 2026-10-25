/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UpdateProblem
 * @description
 *
 * Signing of update errors/results requires protocol v2+.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateProblem  ::=  INTEGER {
 *   namingViolation                   (1),
 *   objectClassViolation              (2),
 *   notAllowedOnNonLeaf               (3),
 *   notAllowedOnRDN                   (4),
 *   entryAlreadyExists                (5),
 *   affectsMultipleDSAs               (6),
 *   objectClassModificationProhibited (7),
 *   noSuchSuperior                    (8),
 *   notAncestor                       (9),
 *   parentNotAncestor                 (10),
 *   hierarchyRuleViolation            (11),
 *   familyRuleViolation               (12),
 *   insufficientPasswordQuality       (13),
 *   passwordInHistory                 (14),
 *   noPasswordSlot                    (15) }
 * ```
 */
export type UpdateProblem = INTEGER;

/**
 * @summary UpdateProblem_namingViolation
 * @description
 *
 * DIT structure/schema (entry under alias, OC not allowed here, forbidden
 * RDN type).
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_namingViolation = 1 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_namingViolation
 * @description
 *
 * DIT structure/schema (entry under alias, OC not allowed here, forbidden
 * RDN type).
 *
 * @constant
 * @type {number}
 */
export const namingViolation = UpdateProblem_namingViolation satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @description
 *
 * Content rules / OC definition. `attributeInfo` shall include
 * `objectClass` and the class(es) that caused the problem.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_objectClassViolation = 2 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @description
 *
 * Content rules / OC definition. `attributeInfo` shall include
 * `objectClass` and the class(es) that caused the problem.
 *
 * @constant
 * @type {number}
 */
export const objectClassViolation = UpdateProblem_objectClassViolation satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @description
 *
 * Operation is leaf-only.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAllowedOnNonLeaf = 3 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @description
 *
 * Operation is leaf-only.
 *
 * @constant
 * @type {number}
 */
export const notAllowedOnNonLeaf = UpdateProblem_notAllowedOnNonLeaf satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @description
 *
 * Would affect the RDN (e.g. remove an RDN attribute).
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAllowedOnRDN = 4 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @description
 *
 * Would affect the RDN (e.g. remove an RDN attribute).
 *
 * @constant
 * @type {number}
 */
export const notAllowedOnRDN = UpdateProblem_notAllowedOnRDN satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @description
 *
 * addEntry or modifyDN; includes multi-valued RDN distinguished values
 * differing only by context.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_entryAlreadyExists = 5 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @description
 *
 * addEntry or modifyDN; includes multi-valued RDN distinguished values
 * differing only by context.
 *
 * @constant
 * @type {number}
 */
export const entryAlreadyExists = UpdateProblem_entryAlreadyExists satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @description
 *
 * Update would span DSAs where that is not permitted.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_affectsMultipleDSAs = 6 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @description
 *
 * Update would span DSAs where that is not permitted.
 *
 * @constant
 * @type {number}
 */
export const affectsMultipleDSAs = UpdateProblem_affectsMultipleDSAs satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @description
 *
 * Attempted to change the structural object class.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_objectClassModificationProhibited = 7 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @description
 *
 * Attempted to change the structural object class.
 *
 * @constant
 * @type {number}
 */
export const objectClassModificationProhibited = UpdateProblem_objectClassModificationProhibited satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noSuchSuperior
 * @description
 *
 * modifyDN `newSuperior` does not exist.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_noSuchSuperior = 8 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noSuchSuperior
 * @description
 *
 * modifyDN `newSuperior` does not exist.
 *
 * @constant
 * @type {number}
 */
export const noSuchSuperior = UpdateProblem_noSuchSuperior satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @description
 *
 * Delete compound entry without naming the ancestor.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAncestor = 9 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @description
 *
 * Delete compound entry without naming the ancestor.
 *
 * @constant
 * @type {number}
 */
export const notAncestor = UpdateProblem_notAncestor satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @description
 *
 * Immediately hierarchical child under a family member that is not the
 * ancestor.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_parentNotAncestor = 10 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @description
 *
 * Immediately hierarchical child under a family member that is not the
 * ancestor.
 *
 * @constant
 * @type {number}
 */
export const parentNotAncestor = UpdateProblem_parentNotAncestor satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @description
 *
 * Hierarchical group rule (group wholly in or out of a service-specific
 * admin area; confined to a single DSA).
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_hierarchyRuleViolation = 11 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @description
 *
 * Hierarchical group rule (group wholly in or out of a service-specific
 * admin area; confined to a single DSA).
 *
 * @constant
 * @type {number}
 */
export const hierarchyRuleViolation = UpdateProblem_hierarchyRuleViolation satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @description
 *
 * Family / compound-entry rule.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_familyRuleViolation = 12 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @description
 *
 * Family / compound-entry rule.
 *
 * @constant
 * @type {number}
 */
export const familyRuleViolation = UpdateProblem_familyRuleViolation satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_insufficientPasswordQuality
 * @description
 *
 * New password fails Directory quality rules. Cannot be checked by the
 * DSA if the password is not sent in the clear.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_insufficientPasswordQuality = 13 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_insufficientPasswordQuality
 * @description
 *
 * New password fails Directory quality rules. Cannot be checked by the
 * DSA if the password is not sent in the clear.
 *
 * @constant
 * @type {number}
 */
export const insufficientPasswordQuality = UpdateProblem_insufficientPasswordQuality satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_passwordInHistory
 * @description
 *
 * New password was found in the Directory's password history.
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_passwordInHistory = 14 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_passwordInHistory
 * @description
 *
 * New password was found in the Directory's password history.
 *
 * @constant
 * @type {number}
 */
export const passwordInHistory = UpdateProblem_passwordInHistory satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noPasswordSlot
 * @description
 *
 * History full (no slot older than `pwdMinTimeInHistory`).
 *
 * @constant
 * @type {number}
 */
export const UpdateProblem_noPasswordSlot = 15 satisfies UpdateProblem; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noPasswordSlot
 * @description
 *
 * History full (no slot older than `pwdMinTimeInHistory`).
 *
 * @constant
 * @type {number}
 */
export const noPasswordSlot = UpdateProblem_noPasswordSlot satisfies UpdateProblem; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_UpdateProblem = $._decodeInteger;


export const _encode_UpdateProblem = $._encodeInteger;


/* eslint-enable */

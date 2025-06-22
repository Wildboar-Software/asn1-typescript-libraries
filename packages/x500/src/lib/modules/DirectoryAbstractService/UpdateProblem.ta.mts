/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary UpdateProblem
 * @description
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
 * @constant
 * @type {number}
 */
export const UpdateProblem_namingViolation: UpdateProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_namingViolation
 * @constant
 * @type {number}
 */
export const namingViolation: UpdateProblem = UpdateProblem_namingViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @constant
 * @type {number}
 */
export const UpdateProblem_objectClassViolation: UpdateProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassViolation
 * @constant
 * @type {number}
 */
export const objectClassViolation: UpdateProblem = UpdateProblem_objectClassViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAllowedOnNonLeaf: UpdateProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export const notAllowedOnNonLeaf: UpdateProblem = UpdateProblem_notAllowedOnNonLeaf; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAllowedOnRDN: UpdateProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export const notAllowedOnRDN: UpdateProblem = UpdateProblem_notAllowedOnRDN; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @constant
 * @type {number}
 */
export const UpdateProblem_entryAlreadyExists: UpdateProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_entryAlreadyExists
 * @constant
 * @type {number}
 */
export const entryAlreadyExists: UpdateProblem = UpdateProblem_entryAlreadyExists; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export const UpdateProblem_affectsMultipleDSAs: UpdateProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export const affectsMultipleDSAs: UpdateProblem = UpdateProblem_affectsMultipleDSAs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @constant
 * @type {number}
 */
export const UpdateProblem_objectClassModificationProhibited: UpdateProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_objectClassModificationProhibited
 * @constant
 * @type {number}
 */
export const objectClassModificationProhibited: UpdateProblem = UpdateProblem_objectClassModificationProhibited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noSuchSuperior
 * @constant
 * @type {number}
 */
export const UpdateProblem_noSuchSuperior: UpdateProblem = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noSuchSuperior
 * @constant
 * @type {number}
 */
export const noSuchSuperior: UpdateProblem = UpdateProblem_noSuchSuperior; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @constant
 * @type {number}
 */
export const UpdateProblem_notAncestor: UpdateProblem = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_notAncestor
 * @constant
 * @type {number}
 */
export const notAncestor: UpdateProblem = UpdateProblem_notAncestor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @constant
 * @type {number}
 */
export const UpdateProblem_parentNotAncestor: UpdateProblem = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_parentNotAncestor
 * @constant
 * @type {number}
 */
export const parentNotAncestor: UpdateProblem = UpdateProblem_parentNotAncestor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @constant
 * @type {number}
 */
export const UpdateProblem_hierarchyRuleViolation: UpdateProblem = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_hierarchyRuleViolation
 * @constant
 * @type {number}
 */
export const hierarchyRuleViolation: UpdateProblem = UpdateProblem_hierarchyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @constant
 * @type {number}
 */
export const UpdateProblem_familyRuleViolation: UpdateProblem = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_familyRuleViolation
 * @constant
 * @type {number}
 */
export const familyRuleViolation: UpdateProblem = UpdateProblem_familyRuleViolation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_insufficientPasswordQuality
 * @constant
 * @type {number}
 */
export const UpdateProblem_insufficientPasswordQuality: UpdateProblem = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_insufficientPasswordQuality
 * @constant
 * @type {number}
 */
export const insufficientPasswordQuality: UpdateProblem = UpdateProblem_insufficientPasswordQuality; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_passwordInHistory
 * @constant
 * @type {number}
 */
export const UpdateProblem_passwordInHistory: UpdateProblem = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_passwordInHistory
 * @constant
 * @type {number}
 */
export const passwordInHistory: UpdateProblem = UpdateProblem_passwordInHistory; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noPasswordSlot
 * @constant
 * @type {number}
 */
export const UpdateProblem_noPasswordSlot: UpdateProblem = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary UpdateProblem_noPasswordSlot
 * @constant
 * @type {number}
 */
export const noPasswordSlot: UpdateProblem = UpdateProblem_noPasswordSlot; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_UpdateProblem = $._decodeInteger;


export const _encode_UpdateProblem = $._encodeInteger;


/* eslint-enable */

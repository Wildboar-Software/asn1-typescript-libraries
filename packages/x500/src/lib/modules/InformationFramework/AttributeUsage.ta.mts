/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export enum _enum_for_AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}

/**
 * @summary AttributeUsage
 * @description
 *
 * Where an attribute type may appear. Default in {@link ATTRIBUTE} is
 * `userApplications`.
 * - `userApplications` (0): user (entry) attributes.
 * - `directoryOperation` (1): Directory operational (held with the entry;
 *   replicated).
 * - `distributedOperation` (2): DSA-shared operational (DSA information
 *   model; not a user-visible entry attribute).
 * - `dSAOperation` (3): DSA-specific operational (not shared).
 *
 * Collective attributes shall be `userApplications`. Operational attributes
 * shall not have contexts. User modification of operational attributes is
 * controlled by `no-user-modification`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications     (0),
 *   directoryOperation   (1),
 *   distributedOperation (2),
 *   dSAOperation         (3),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type AttributeUsage = _enum_for_AttributeUsage | ENUMERATED;

/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export const AttributeUsage_userApplications: AttributeUsage = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userApplications
 * @constant
 * @type {number}
 */
export const userApplications: AttributeUsage = AttributeUsage_userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_directoryOperation: AttributeUsage = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryOperation
 * @constant
 * @type {number}
 */
export const directoryOperation: AttributeUsage = AttributeUsage_directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_distributedOperation: AttributeUsage = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributedOperation
 * @constant
 * @type {number}
 */
export const distributedOperation: AttributeUsage = AttributeUsage_distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_dSAOperation: AttributeUsage = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSAOperation
 * @constant
 * @type {number}
 */
export const dSAOperation: AttributeUsage = AttributeUsage_dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AttributeUsage = $._decodeEnumerated;


export const _encode_AttributeUsage = $._encodeEnumerated;


/* eslint-enable */

/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_ReferenceType {
    superior = 1,
    subordinate = 2,
    cross = 3,
    nonSpecificSubordinate = 4,
    supplier = 5,
    master = 6,
    immediateSuperior = 7,
    self = 8,
    ditBridge = 9,
}

/**
 * @summary ReferenceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReferenceType  ::=  ENUMERATED {
 *   superior               (1),
 *   subordinate            (2),
 *   cross                  (3),
 *   nonSpecificSubordinate (4),
 *   supplier               (5),
 *   master                 (6),
 *   immediateSuperior      (7),
 *   self                   (8),
 *   ditBridge              (9),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export type ReferenceType = _enum_for_ReferenceType | ENUMERATED;

/**
 * @summary ReferenceType_superior
 * @constant
 * @type {number}
 */
export const ReferenceType_superior: ReferenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary superior
 * @constant
 * @type {number}
 */
export const superior: ReferenceType = ReferenceType_superior; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_subordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_subordinate: ReferenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subordinate
 * @constant
 * @type {number}
 */
export const subordinate: ReferenceType = ReferenceType_subordinate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_cross
 * @constant
 * @type {number}
 */
export const ReferenceType_cross: ReferenceType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cross
 * @constant
 * @type {number}
 */
export const cross: ReferenceType = ReferenceType_cross; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_nonSpecificSubordinate: ReferenceType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export const nonSpecificSubordinate: ReferenceType = ReferenceType_nonSpecificSubordinate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_supplier
 * @constant
 * @type {number}
 */
export const ReferenceType_supplier: ReferenceType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplier
 * @constant
 * @type {number}
 */
export const supplier: ReferenceType = ReferenceType_supplier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_master
 * @constant
 * @type {number}
 */
export const ReferenceType_master: ReferenceType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary master
 * @constant
 * @type {number}
 */
export const master: ReferenceType = ReferenceType_master; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_immediateSuperior
 * @constant
 * @type {number}
 */
export const ReferenceType_immediateSuperior: ReferenceType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateSuperior
 * @constant
 * @type {number}
 */
export const immediateSuperior: ReferenceType = ReferenceType_immediateSuperior; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_self
 * @constant
 * @type {number}
 */
export const ReferenceType_self: ReferenceType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary self
 * @constant
 * @type {number}
 */
export const self: ReferenceType = ReferenceType_self; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_ditBridge
 * @constant
 * @type {number}
 */
export const ReferenceType_ditBridge: ReferenceType = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ditBridge
 * @constant
 * @type {number}
 */
export const ditBridge: ReferenceType = ReferenceType_ditBridge; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ReferenceType = $._decodeEnumerated;


export const _encode_ReferenceType = $._encodeEnumerated;


/* eslint-enable */

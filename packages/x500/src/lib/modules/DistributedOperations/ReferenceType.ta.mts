/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
 * What knowledge routed the request. DEFAULT in ChainingArguments is
 * `superior`. Wrong value ⇒ `invalidReference`. Numbering starts at 1.
 * `nonSpecificSubordinate` is the only case
 * ContinuationReference.accessPoints may have more than one
 * AccessPointInformation. `self` used with `returnToDUA`.
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
 * @description
 *
 * Superior reference (toward the root). DEFAULT in ChainingArguments.
 * Numbering starts at 1.
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_superior: _enum_for_ReferenceType.superior = _enum_for_ReferenceType.superior; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary superior
 * @description
 *
 * Superior reference (toward the root). DEFAULT in ChainingArguments.
 * Numbering starts at 1.
 *
 * @constant
 * @type {number}
 */
export const superior: _enum_for_ReferenceType.superior = ReferenceType_superior; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_subordinate
 * @description
 *
 * Specific subordinate reference.
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_subordinate: _enum_for_ReferenceType.subordinate = _enum_for_ReferenceType.subordinate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subordinate
 * @description
 *
 * Specific subordinate reference.
 *
 * @constant
 * @type {number}
 */
export const subordinate: _enum_for_ReferenceType.subordinate = ReferenceType_subordinate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_cross
 * @description
 *
 * Cross reference.
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_cross: _enum_for_ReferenceType.cross = _enum_for_ReferenceType.cross; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cross
 * @description
 *
 * Cross reference.
 *
 * @constant
 * @type {number}
 */
export const cross: _enum_for_ReferenceType.cross = ReferenceType_cross; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_nonSpecificSubordinate
 * @description
 *
 * NSSR. ContinuationReference.accessPoints may then hold more than one
 * AccessPointInformation.
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_nonSpecificSubordinate: _enum_for_ReferenceType.nonSpecificSubordinate = _enum_for_ReferenceType.nonSpecificSubordinate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonSpecificSubordinate
 * @description
 *
 * NSSR. ContinuationReference.accessPoints may then hold more than one
 * AccessPointInformation.
 *
 * @constant
 * @type {number}
 */
export const nonSpecificSubordinate: _enum_for_ReferenceType.nonSpecificSubordinate = ReferenceType_nonSpecificSubordinate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_supplier
 * @description
 *
 * Supplier (shadowing) reference.
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_supplier: _enum_for_ReferenceType.supplier = _enum_for_ReferenceType.supplier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplier
 * @description
 *
 * Supplier (shadowing) reference.
 *
 * @constant
 * @type {number}
 */
export const supplier: _enum_for_ReferenceType.supplier = ReferenceType_supplier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_master
 * @description
 *
 * Master reference (to the master of a shadowed context).
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_master: _enum_for_ReferenceType.master = _enum_for_ReferenceType.master; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary master
 * @description
 *
 * Master reference (to the master of a shadowed context).
 *
 * @constant
 * @type {number}
 */
export const master: _enum_for_ReferenceType.master = ReferenceType_master; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_immediateSuperior
 * @description
 *
 * Immediate superior reference (HOB/NHOB subordinate side).
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_immediateSuperior: _enum_for_ReferenceType.immediateSuperior = _enum_for_ReferenceType.immediateSuperior; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary immediateSuperior
 * @description
 *
 * Immediate superior reference (HOB/NHOB subordinate side).
 *
 * @constant
 * @type {number}
 */
export const immediateSuperior: _enum_for_ReferenceType.immediateSuperior = ReferenceType_immediateSuperior; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_self
 * @description
 *
 * This DSA. Used with ContinuationReference.returnToDUA TRUE.
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_self: _enum_for_ReferenceType.self = _enum_for_ReferenceType.self; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary self
 * @description
 *
 * This DSA. Used with ContinuationReference.returnToDUA TRUE.
 *
 * @constant
 * @type {number}
 */
export const self: _enum_for_ReferenceType.self = ReferenceType_self; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferenceType_ditBridge
 * @description
 *
 * DIT bridge knowledge (another DIT).
 *
 * @constant
 * @type {number}
 */
export const ReferenceType_ditBridge: _enum_for_ReferenceType.ditBridge = _enum_for_ReferenceType.ditBridge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ditBridge
 * @description
 *
 * DIT bridge knowledge (another DIT).
 *
 * @constant
 * @type {number}
 */
export const ditBridge: _enum_for_ReferenceType.ditBridge = ReferenceType_ditBridge; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ReferenceType: $.ASN1Decoder<number> = $._decodeEnumerated;


export const _encode_ReferenceType: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */

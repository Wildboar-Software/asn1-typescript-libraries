/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_ReferenceType */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_ReferenceType */

/* START_OF_SYMBOL_DEFINITION ReferenceType */
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
 * ```@enum {number}
 */
export type ReferenceType = _enum_for_ReferenceType | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ReferenceType */

/* START_OF_SYMBOL_DEFINITION ReferenceType_superior */
/**
 * @summary ReferenceType_superior
 * @constant
 * @type {number}
 */
export const ReferenceType_superior: ReferenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_superior */

/* START_OF_SYMBOL_DEFINITION superior */
/**
 * @summary superior
 * @constant
 * @type {number}
 */
export const superior: ReferenceType = ReferenceType_superior; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION superior */

/* START_OF_SYMBOL_DEFINITION ReferenceType_subordinate */
/**
 * @summary ReferenceType_subordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_subordinate: ReferenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_subordinate */

/* START_OF_SYMBOL_DEFINITION subordinate */
/**
 * @summary subordinate
 * @constant
 * @type {number}
 */
export const subordinate: ReferenceType = ReferenceType_subordinate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION subordinate */

/* START_OF_SYMBOL_DEFINITION ReferenceType_cross */
/**
 * @summary ReferenceType_cross
 * @constant
 * @type {number}
 */
export const ReferenceType_cross: ReferenceType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_cross */

/* START_OF_SYMBOL_DEFINITION cross */
/**
 * @summary cross
 * @constant
 * @type {number}
 */
export const cross: ReferenceType = ReferenceType_cross; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cross */

/* START_OF_SYMBOL_DEFINITION ReferenceType_nonSpecificSubordinate */
/**
 * @summary ReferenceType_nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export const ReferenceType_nonSpecificSubordinate: ReferenceType = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_nonSpecificSubordinate */

/* START_OF_SYMBOL_DEFINITION nonSpecificSubordinate */
/**
 * @summary nonSpecificSubordinate
 * @constant
 * @type {number}
 */
export const nonSpecificSubordinate: ReferenceType = ReferenceType_nonSpecificSubordinate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonSpecificSubordinate */

/* START_OF_SYMBOL_DEFINITION ReferenceType_supplier */
/**
 * @summary ReferenceType_supplier
 * @constant
 * @type {number}
 */
export const ReferenceType_supplier: ReferenceType = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_supplier */

/* START_OF_SYMBOL_DEFINITION supplier */
/**
 * @summary supplier
 * @constant
 * @type {number}
 */
export const supplier: ReferenceType = ReferenceType_supplier; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION supplier */

/* START_OF_SYMBOL_DEFINITION ReferenceType_master */
/**
 * @summary ReferenceType_master
 * @constant
 * @type {number}
 */
export const ReferenceType_master: ReferenceType = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_master */

/* START_OF_SYMBOL_DEFINITION master */
/**
 * @summary master
 * @constant
 * @type {number}
 */
export const master: ReferenceType = ReferenceType_master; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION master */

/* START_OF_SYMBOL_DEFINITION ReferenceType_immediateSuperior */
/**
 * @summary ReferenceType_immediateSuperior
 * @constant
 * @type {number}
 */
export const ReferenceType_immediateSuperior: ReferenceType = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_immediateSuperior */

/* START_OF_SYMBOL_DEFINITION immediateSuperior */
/**
 * @summary immediateSuperior
 * @constant
 * @type {number}
 */
export const immediateSuperior: ReferenceType = ReferenceType_immediateSuperior; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION immediateSuperior */

/* START_OF_SYMBOL_DEFINITION ReferenceType_self */
/**
 * @summary ReferenceType_self
 * @constant
 * @type {number}
 */
export const ReferenceType_self: ReferenceType = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_self */

/* START_OF_SYMBOL_DEFINITION self */
/**
 * @summary self
 * @constant
 * @type {number}
 */
export const self: ReferenceType = ReferenceType_self; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION self */

/* START_OF_SYMBOL_DEFINITION ReferenceType_ditBridge */
/**
 * @summary ReferenceType_ditBridge
 * @constant
 * @type {number}
 */
export const ReferenceType_ditBridge: ReferenceType = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceType_ditBridge */

/* START_OF_SYMBOL_DEFINITION ditBridge */
/**
 * @summary ditBridge
 * @constant
 * @type {number}
 */
export const ditBridge: ReferenceType = ReferenceType_ditBridge; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ditBridge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferenceType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferenceType */

/* START_OF_SYMBOL_DEFINITION _decode_ReferenceType */
export const _decode_ReferenceType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ReferenceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferenceType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferenceType */

/* START_OF_SYMBOL_DEFINITION _encode_ReferenceType */
export const _encode_ReferenceType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ReferenceType */

/* eslint-enable */

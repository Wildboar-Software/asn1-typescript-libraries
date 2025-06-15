/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_AttributeUsage */
export enum _enum_for_AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION AttributeUsage */
/**
 * @summary AttributeUsage
 * @description
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
 * ```@enum {number}
 */
export type AttributeUsage = _enum_for_AttributeUsage | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AttributeUsage */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_userApplications */
/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export const AttributeUsage_userApplications: AttributeUsage = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_userApplications */

/* START_OF_SYMBOL_DEFINITION userApplications */
/**
 * @summary userApplications
 * @constant
 * @type {number}
 */
export const userApplications: AttributeUsage = AttributeUsage_userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION userApplications */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_directoryOperation */
/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_directoryOperation: AttributeUsage = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_directoryOperation */

/* START_OF_SYMBOL_DEFINITION directoryOperation */
/**
 * @summary directoryOperation
 * @constant
 * @type {number}
 */
export const directoryOperation: AttributeUsage = AttributeUsage_directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION directoryOperation */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_distributedOperation */
/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_distributedOperation: AttributeUsage = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_distributedOperation */

/* START_OF_SYMBOL_DEFINITION distributedOperation */
/**
 * @summary distributedOperation
 * @constant
 * @type {number}
 */
export const distributedOperation: AttributeUsage = AttributeUsage_distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION distributedOperation */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_dSAOperation */
/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_dSAOperation: AttributeUsage = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_dSAOperation */

/* START_OF_SYMBOL_DEFINITION dSAOperation */
/**
 * @summary dSAOperation
 * @constant
 * @type {number}
 */
export const dSAOperation: AttributeUsage = AttributeUsage_dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dSAOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeUsage */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeUsage */
export const _decode_AttributeUsage = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeUsage */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeUsage */
export const _encode_AttributeUsage = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeUsage */

/* eslint-enable */

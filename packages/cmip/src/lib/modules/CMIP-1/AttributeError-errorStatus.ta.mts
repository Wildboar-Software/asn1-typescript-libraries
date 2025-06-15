/* eslint-disable */
import {
  ENUMERATED,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_AttributeError_errorStatus */
export enum _enum_for_AttributeError_errorStatus {
  accessDenied = 2,
  noSuchAttribute = 5,
  invalidAttributeValue = 6,
  invalidOperation = 24,
  invalidOperator = 25,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AttributeError_errorStatus */

/* START_OF_SYMBOL_DEFINITION AttributeError_errorStatus */
/**
 * @summary AttributeError_errorStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeError-errorStatus ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type AttributeError_errorStatus =
  | _enum_for_AttributeError_errorStatus
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AttributeError_errorStatus */

/* START_OF_SYMBOL_DEFINITION AttributeError_errorStatus_accessDenied */
/**
 * @summary AttributeError_errorStatus_accessDenied
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_accessDenied: AttributeError_errorStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeError_errorStatus_accessDenied */

/* START_OF_SYMBOL_DEFINITION accessDenied */
/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: AttributeError_errorStatus = AttributeError_errorStatus_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accessDenied */

/* START_OF_SYMBOL_DEFINITION AttributeError_errorStatus_noSuchAttribute */
/**
 * @summary AttributeError_errorStatus_noSuchAttribute
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_noSuchAttribute: AttributeError_errorStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeError_errorStatus_noSuchAttribute */

/* START_OF_SYMBOL_DEFINITION noSuchAttribute */
/**
 * @summary noSuchAttribute
 * @constant
 * @type {number}
 */
export const noSuchAttribute: AttributeError_errorStatus = AttributeError_errorStatus_noSuchAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchAttribute */

/* START_OF_SYMBOL_DEFINITION AttributeError_errorStatus_invalidAttributeValue */
/**
 * @summary AttributeError_errorStatus_invalidAttributeValue
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_invalidAttributeValue: AttributeError_errorStatus = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeError_errorStatus_invalidAttributeValue */

/* START_OF_SYMBOL_DEFINITION invalidAttributeValue */
/**
 * @summary invalidAttributeValue
 * @constant
 * @type {number}
 */
export const invalidAttributeValue: AttributeError_errorStatus = AttributeError_errorStatus_invalidAttributeValue; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAttributeValue */

/* START_OF_SYMBOL_DEFINITION AttributeError_errorStatus_invalidOperation */
/**
 * @summary AttributeError_errorStatus_invalidOperation
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_invalidOperation: AttributeError_errorStatus = 24; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeError_errorStatus_invalidOperation */

/* START_OF_SYMBOL_DEFINITION invalidOperation */
/**
 * @summary invalidOperation
 * @constant
 * @type {number}
 */
export const invalidOperation: AttributeError_errorStatus = AttributeError_errorStatus_invalidOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidOperation */

/* START_OF_SYMBOL_DEFINITION AttributeError_errorStatus_invalidOperator */
/**
 * @summary AttributeError_errorStatus_invalidOperator
 * @constant
 * @type {number}
 */
export const AttributeError_errorStatus_invalidOperator: AttributeError_errorStatus = 25; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeError_errorStatus_invalidOperator */

/* START_OF_SYMBOL_DEFINITION invalidOperator */
/**
 * @summary invalidOperator
 * @constant
 * @type {number}
 */
export const invalidOperator: AttributeError_errorStatus = AttributeError_errorStatus_invalidOperator; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidOperator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError_errorStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeError_errorStatus */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeError_errorStatus */
export const _decode_AttributeError_errorStatus = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeError_errorStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError_errorStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeError_errorStatus */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeError_errorStatus */
export const _encode_AttributeError_errorStatus = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeError_errorStatus */

/* eslint-enable */

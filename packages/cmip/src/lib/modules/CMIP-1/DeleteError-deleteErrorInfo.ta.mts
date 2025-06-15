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

/* START_OF_SYMBOL_DEFINITION _enum_for_DeleteError_deleteErrorInfo */
export enum _enum_for_DeleteError_deleteErrorInfo {
  accessDenied = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo */
/**
 * @summary DeleteError_deleteErrorInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteError-deleteErrorInfo ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DeleteError_deleteErrorInfo =
  | _enum_for_DeleteError_deleteErrorInfo
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo_accessDenied */
/**
 * @summary DeleteError_deleteErrorInfo_accessDenied
 * @constant
 * @type {number}
 */
export const DeleteError_deleteErrorInfo_accessDenied: DeleteError_deleteErrorInfo = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteError_deleteErrorInfo_accessDenied */

/* START_OF_SYMBOL_DEFINITION accessDenied */
/**
 * @summary accessDenied
 * @constant
 * @type {number}
 */
export const accessDenied: DeleteError_deleteErrorInfo = DeleteError_deleteErrorInfo_accessDenied; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION accessDenied */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError_deleteErrorInfo */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteError_deleteErrorInfo */
export const _decode_DeleteError_deleteErrorInfo = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError_deleteErrorInfo */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteError_deleteErrorInfo */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteError_deleteErrorInfo */
export const _encode_DeleteError_deleteErrorInfo = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DeleteError_deleteErrorInfo */

/* eslint-enable */

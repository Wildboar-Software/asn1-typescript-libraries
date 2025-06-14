/* eslint-disable */
import {
  NULL,
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

/* START_OF_SYMBOL_DEFINITION DbDeleteBIR_ResponseParams */
/**
 * @summary DbDeleteBIR_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DbDeleteBIR-ResponseParams  ::=  NULL
 * ```
 */
export type DbDeleteBIR_ResponseParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION DbDeleteBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DbDeleteBIR_ResponseParams */
let _cached_decoder_for_DbDeleteBIR_ResponseParams: $.ASN1Decoder<DbDeleteBIR_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DbDeleteBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_DbDeleteBIR_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) DbDeleteBIR_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DbDeleteBIR_ResponseParams} The decoded data structure.
 */
export function _decode_DbDeleteBIR_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_DbDeleteBIR_ResponseParams) {
    _cached_decoder_for_DbDeleteBIR_ResponseParams = $._decodeNull;
  }
  return _cached_decoder_for_DbDeleteBIR_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DbDeleteBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DbDeleteBIR_ResponseParams */
let _cached_encoder_for_DbDeleteBIR_ResponseParams: $.ASN1Encoder<DbDeleteBIR_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DbDeleteBIR_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_DbDeleteBIR_ResponseParams */
/**
 * @summary Encodes a(n) DbDeleteBIR_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DbDeleteBIR_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DbDeleteBIR_ResponseParams(
  value: DbDeleteBIR_ResponseParams,
  elGetter: $.ASN1Encoder<DbDeleteBIR_ResponseParams>
) {
  if (!_cached_encoder_for_DbDeleteBIR_ResponseParams) {
    _cached_encoder_for_DbDeleteBIR_ResponseParams = $._encodeNull;
  }
  return _cached_encoder_for_DbDeleteBIR_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DbDeleteBIR_ResponseParams */

/* eslint-enable */

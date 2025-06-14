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

/* START_OF_SYMBOL_DEFINITION RegisterBFP_ResponseParams */
/**
 * @summary RegisterBFP_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisterBFP-ResponseParams  ::=  NULL
 * ```
 */
export type RegisterBFP_ResponseParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION RegisterBFP_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterBFP_ResponseParams */
let _cached_decoder_for_RegisterBFP_ResponseParams: $.ASN1Decoder<RegisterBFP_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegisterBFP_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_RegisterBFP_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) RegisterBFP_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegisterBFP_ResponseParams} The decoded data structure.
 */
export function _decode_RegisterBFP_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_RegisterBFP_ResponseParams) {
    _cached_decoder_for_RegisterBFP_ResponseParams = $._decodeNull;
  }
  return _cached_decoder_for_RegisterBFP_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegisterBFP_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterBFP_ResponseParams */
let _cached_encoder_for_RegisterBFP_ResponseParams: $.ASN1Encoder<RegisterBFP_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegisterBFP_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_RegisterBFP_ResponseParams */
/**
 * @summary Encodes a(n) RegisterBFP_ResponseParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegisterBFP_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_RegisterBFP_ResponseParams(
  value: RegisterBFP_ResponseParams,
  elGetter: $.ASN1Encoder<RegisterBFP_ResponseParams>
) {
  if (!_cached_encoder_for_RegisterBFP_ResponseParams) {
    _cached_encoder_for_RegisterBFP_ResponseParams = $._encodeNull;
  }
  return _cached_encoder_for_RegisterBFP_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegisterBFP_ResponseParams */

/* eslint-enable */

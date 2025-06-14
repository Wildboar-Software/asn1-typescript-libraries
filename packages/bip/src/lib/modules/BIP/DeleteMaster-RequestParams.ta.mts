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

/* START_OF_SYMBOL_DEFINITION DeleteMaster_RequestParams */
/**
 * @summary DeleteMaster_RequestParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteMaster-RequestParams  ::=  NULL
 * ```
 */
export type DeleteMaster_RequestParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION DeleteMaster_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteMaster_RequestParams */
let _cached_decoder_for_DeleteMaster_RequestParams: $.ASN1Decoder<DeleteMaster_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteMaster_RequestParams */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteMaster_RequestParams */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteMaster_RequestParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteMaster_RequestParams} The decoded data structure.
 */
export function _decode_DeleteMaster_RequestParams(el: _Element) {
  if (!_cached_decoder_for_DeleteMaster_RequestParams) {
    _cached_decoder_for_DeleteMaster_RequestParams = $._decodeNull;
  }
  return _cached_decoder_for_DeleteMaster_RequestParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteMaster_RequestParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteMaster_RequestParams */
let _cached_encoder_for_DeleteMaster_RequestParams: $.ASN1Encoder<DeleteMaster_RequestParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteMaster_RequestParams */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteMaster_RequestParams */
/**
 * @summary Encodes a(n) DeleteMaster_RequestParams into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteMaster_RequestParams, encoded as an ASN.1 Element.
 */
export function _encode_DeleteMaster_RequestParams(
  value: DeleteMaster_RequestParams,
  elGetter: $.ASN1Encoder<DeleteMaster_RequestParams>
) {
  if (!_cached_encoder_for_DeleteMaster_RequestParams) {
    _cached_encoder_for_DeleteMaster_RequestParams = $._encodeNull;
  }
  return _cached_encoder_for_DeleteMaster_RequestParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteMaster_RequestParams */

/* eslint-enable */

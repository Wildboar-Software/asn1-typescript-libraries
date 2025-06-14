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

/* START_OF_SYMBOL_DEFINITION DeleteMaster_ResponseParams */
/**
 * @summary DeleteMaster_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteMaster-ResponseParams  ::=  NULL
 * ```
 */
export type DeleteMaster_ResponseParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION DeleteMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteMaster_ResponseParams */
let _cached_decoder_for_DeleteMaster_ResponseParams: $.ASN1Decoder<DeleteMaster_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteMaster_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteMaster_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteMaster_ResponseParams} The decoded data structure.
 */
export function _decode_DeleteMaster_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_DeleteMaster_ResponseParams) {
    _cached_decoder_for_DeleteMaster_ResponseParams = $._decodeNull;
  }
  return _cached_decoder_for_DeleteMaster_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteMaster_ResponseParams */
let _cached_encoder_for_DeleteMaster_ResponseParams: $.ASN1Encoder<DeleteMaster_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteMaster_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteMaster_ResponseParams */
/**
 * @summary Encodes a(n) DeleteMaster_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteMaster_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_DeleteMaster_ResponseParams(
  value: DeleteMaster_ResponseParams,
  elGetter: $.ASN1Encoder<DeleteMaster_ResponseParams>
) {
  if (!_cached_encoder_for_DeleteMaster_ResponseParams) {
    _cached_encoder_for_DeleteMaster_ResponseParams = $._encodeNull;
  }
  return _cached_encoder_for_DeleteMaster_ResponseParams(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteMaster_ResponseParams */

/* eslint-enable */

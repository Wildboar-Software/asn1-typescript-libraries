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

/* START_OF_SYMBOL_DEFINITION SubscribeToGUIEvents_ResponseParams */
/**
 * @summary SubscribeToGUIEvents_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscribeToGUIEvents-ResponseParams  ::=  NULL
 * ```
 */
export type SubscribeToGUIEvents_ResponseParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION SubscribeToGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscribeToGUIEvents_ResponseParams */
let _cached_decoder_for_SubscribeToGUIEvents_ResponseParams: $.ASN1Decoder<SubscribeToGUIEvents_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscribeToGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_SubscribeToGUIEvents_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) SubscribeToGUIEvents_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscribeToGUIEvents_ResponseParams} The decoded data structure.
 */
export function _decode_SubscribeToGUIEvents_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_SubscribeToGUIEvents_ResponseParams) {
    _cached_decoder_for_SubscribeToGUIEvents_ResponseParams = $._decodeNull;
  }
  return _cached_decoder_for_SubscribeToGUIEvents_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubscribeToGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscribeToGUIEvents_ResponseParams */
let _cached_encoder_for_SubscribeToGUIEvents_ResponseParams: $.ASN1Encoder<SubscribeToGUIEvents_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscribeToGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_SubscribeToGUIEvents_ResponseParams */
/**
 * @summary Encodes a(n) SubscribeToGUIEvents_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscribeToGUIEvents_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_SubscribeToGUIEvents_ResponseParams(
  value: SubscribeToGUIEvents_ResponseParams,
  elGetter: $.ASN1Encoder<SubscribeToGUIEvents_ResponseParams>
) {
  if (!_cached_encoder_for_SubscribeToGUIEvents_ResponseParams) {
    _cached_encoder_for_SubscribeToGUIEvents_ResponseParams = $._encodeNull;
  }
  return _cached_encoder_for_SubscribeToGUIEvents_ResponseParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_SubscribeToGUIEvents_ResponseParams */

/* eslint-enable */

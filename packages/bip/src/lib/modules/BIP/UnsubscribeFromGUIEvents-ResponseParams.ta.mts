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

/* START_OF_SYMBOL_DEFINITION UnsubscribeFromGUIEvents_ResponseParams */
/**
 * @summary UnsubscribeFromGUIEvents_ResponseParams
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsubscribeFromGUIEvents-ResponseParams  ::=  NULL
 * ```
 */
export type UnsubscribeFromGUIEvents_ResponseParams = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION UnsubscribeFromGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsubscribeFromGUIEvents_ResponseParams */
let _cached_decoder_for_UnsubscribeFromGUIEvents_ResponseParams: $.ASN1Decoder<UnsubscribeFromGUIEvents_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsubscribeFromGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _decode_UnsubscribeFromGUIEvents_ResponseParams */
/**
 * @summary Decodes an ASN.1 element into a(n) UnsubscribeFromGUIEvents_ResponseParams
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsubscribeFromGUIEvents_ResponseParams} The decoded data structure.
 */
export function _decode_UnsubscribeFromGUIEvents_ResponseParams(el: _Element) {
  if (!_cached_decoder_for_UnsubscribeFromGUIEvents_ResponseParams) {
    _cached_decoder_for_UnsubscribeFromGUIEvents_ResponseParams = $._decodeNull;
  }
  return _cached_decoder_for_UnsubscribeFromGUIEvents_ResponseParams(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnsubscribeFromGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsubscribeFromGUIEvents_ResponseParams */
let _cached_encoder_for_UnsubscribeFromGUIEvents_ResponseParams: $.ASN1Encoder<UnsubscribeFromGUIEvents_ResponseParams> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsubscribeFromGUIEvents_ResponseParams */

/* START_OF_SYMBOL_DEFINITION _encode_UnsubscribeFromGUIEvents_ResponseParams */
/**
 * @summary Encodes a(n) UnsubscribeFromGUIEvents_ResponseParams into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsubscribeFromGUIEvents_ResponseParams, encoded as an ASN.1 Element.
 */
export function _encode_UnsubscribeFromGUIEvents_ResponseParams(
  value: UnsubscribeFromGUIEvents_ResponseParams,
  elGetter: $.ASN1Encoder<UnsubscribeFromGUIEvents_ResponseParams>
) {
  if (!_cached_encoder_for_UnsubscribeFromGUIEvents_ResponseParams) {
    _cached_encoder_for_UnsubscribeFromGUIEvents_ResponseParams = $._encodeNull;
  }
  return _cached_encoder_for_UnsubscribeFromGUIEvents_ResponseParams(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_UnsubscribeFromGUIEvents_ResponseParams */

/* eslint-enable */

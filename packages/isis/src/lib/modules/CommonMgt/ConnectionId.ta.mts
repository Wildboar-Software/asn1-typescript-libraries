/* eslint-disable */
import {
  GraphicString,
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

/* START_OF_SYMBOL_DEFINITION ConnectionId */
/**
 * @summary ConnectionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectionId  ::=  GraphicString
 * ```
 */
export type ConnectionId = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION ConnectionId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionId */
let _cached_decoder_for_ConnectionId: $.ASN1Decoder<ConnectionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectionId */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectionId */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectionId} The decoded data structure.
 */
export function _decode_ConnectionId(el: _Element) {
  if (!_cached_decoder_for_ConnectionId) {
    _cached_decoder_for_ConnectionId = $._decodeGraphicString;
  }
  return _cached_decoder_for_ConnectionId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectionId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionId */
let _cached_encoder_for_ConnectionId: $.ASN1Encoder<ConnectionId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectionId */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectionId */
/**
 * @summary Encodes a(n) ConnectionId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionId, encoded as an ASN.1 Element.
 */
export function _encode_ConnectionId(
  value: ConnectionId,
  elGetter: $.ASN1Encoder<ConnectionId>
) {
  if (!_cached_encoder_for_ConnectionId) {
    _cached_encoder_for_ConnectionId = $._encodeGraphicString;
  }
  return _cached_encoder_for_ConnectionId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectionId */

/* eslint-enable */

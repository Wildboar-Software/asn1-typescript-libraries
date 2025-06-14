/* eslint-disable */
import {
  OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION Payload */
/**
 * @summary Payload
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Payload  ::=  OCTET STRING
 * ```
 */
export type Payload = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Payload */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Payload */
let _cached_decoder_for_Payload: $.ASN1Decoder<Payload> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Payload */

/* START_OF_SYMBOL_DEFINITION _decode_Payload */
/**
 * @summary Decodes an ASN.1 element into a(n) Payload
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Payload} The decoded data structure.
 */
export function _decode_Payload(el: _Element) {
  if (!_cached_decoder_for_Payload) {
    _cached_decoder_for_Payload = $._decodeOctetString;
  }
  return _cached_decoder_for_Payload(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Payload */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Payload */
let _cached_encoder_for_Payload: $.ASN1Encoder<Payload> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Payload */

/* START_OF_SYMBOL_DEFINITION _encode_Payload */
/**
 * @summary Encodes a(n) Payload into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Payload, encoded as an ASN.1 Element.
 */
export function _encode_Payload(
  value: Payload,
  elGetter: $.ASN1Encoder<Payload>
) {
  if (!_cached_encoder_for_Payload) {
    _cached_encoder_for_Payload = $._encodeOctetString;
  }
  return _cached_encoder_for_Payload(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Payload */

/* eslint-enable */

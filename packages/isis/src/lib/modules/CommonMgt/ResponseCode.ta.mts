/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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

/* START_OF_SYMBOL_DEFINITION ResponseCode */
/**
 * @summary ResponseCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseCode  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ResponseCode = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ResponseCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseCode */
let _cached_decoder_for_ResponseCode: $.ASN1Decoder<ResponseCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseCode */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseCode */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseCode} The decoded data structure.
 */
export function _decode_ResponseCode(el: _Element) {
  if (!_cached_decoder_for_ResponseCode) {
    _cached_decoder_for_ResponseCode = $._decodeObjectIdentifier;
  }
  return _cached_decoder_for_ResponseCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseCode */
let _cached_encoder_for_ResponseCode: $.ASN1Encoder<ResponseCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseCode */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseCode */
/**
 * @summary Encodes a(n) ResponseCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseCode, encoded as an ASN.1 Element.
 */
export function _encode_ResponseCode(
  value: ResponseCode,
  elGetter: $.ASN1Encoder<ResponseCode>
) {
  if (!_cached_encoder_for_ResponseCode) {
    _cached_encoder_for_ResponseCode = $._encodeObjectIdentifier;
  }
  return _cached_encoder_for_ResponseCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseCode */

/* eslint-enable */

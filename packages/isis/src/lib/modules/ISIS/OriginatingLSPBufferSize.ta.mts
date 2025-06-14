/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION OriginatingLSPBufferSize */
/**
 * @summary OriginatingLSPBufferSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingLSPBufferSize  ::=  INTEGER(512..1492)
 * ```
 */
export type OriginatingLSPBufferSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingLSPBufferSize */
let _cached_decoder_for_OriginatingLSPBufferSize: $.ASN1Decoder<OriginatingLSPBufferSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatingLSPBufferSize */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingLSPBufferSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatingLSPBufferSize} The decoded data structure.
 */
export function _decode_OriginatingLSPBufferSize(el: _Element) {
  if (!_cached_decoder_for_OriginatingLSPBufferSize) {
    _cached_decoder_for_OriginatingLSPBufferSize = $._decodeInteger;
  }
  return _cached_decoder_for_OriginatingLSPBufferSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingLSPBufferSize */
let _cached_encoder_for_OriginatingLSPBufferSize: $.ASN1Encoder<OriginatingLSPBufferSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatingLSPBufferSize */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatingLSPBufferSize */
/**
 * @summary Encodes a(n) OriginatingLSPBufferSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingLSPBufferSize, encoded as an ASN.1 Element.
 */
export function _encode_OriginatingLSPBufferSize(
  value: OriginatingLSPBufferSize,
  elGetter: $.ASN1Encoder<OriginatingLSPBufferSize>
) {
  if (!_cached_encoder_for_OriginatingLSPBufferSize) {
    _cached_encoder_for_OriginatingLSPBufferSize = $._encodeInteger;
  }
  return _cached_encoder_for_OriginatingLSPBufferSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatingLSPBufferSize */

/* eslint-enable */

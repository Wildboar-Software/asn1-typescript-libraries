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

/* START_OF_SYMBOL_DEFINITION UInt32 */
/**
 * @summary UInt32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UInt32           ::=  INTEGER (0..4294967295)
 * ```
 */
export type UInt32 = INTEGER;
/* END_OF_SYMBOL_DEFINITION UInt32 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UInt32 */
let _cached_decoder_for_UInt32: $.ASN1Decoder<UInt32> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UInt32 */

/* START_OF_SYMBOL_DEFINITION _decode_UInt32 */
/**
 * @summary Decodes an ASN.1 element into a(n) UInt32
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UInt32} The decoded data structure.
 */
export function _decode_UInt32(el: _Element) {
  if (!_cached_decoder_for_UInt32) {
    _cached_decoder_for_UInt32 = $._decodeInteger;
  }
  return _cached_decoder_for_UInt32(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UInt32 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UInt32 */
let _cached_encoder_for_UInt32: $.ASN1Encoder<UInt32> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UInt32 */

/* START_OF_SYMBOL_DEFINITION _encode_UInt32 */
/**
 * @summary Encodes a(n) UInt32 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UInt32, encoded as an ASN.1 Element.
 */
export function _encode_UInt32(value: UInt32, elGetter: $.ASN1Encoder<UInt32>) {
  if (!_cached_encoder_for_UInt32) {
    _cached_encoder_for_UInt32 = $._encodeInteger;
  }
  return _cached_encoder_for_UInt32(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UInt32 */

/* eslint-enable */

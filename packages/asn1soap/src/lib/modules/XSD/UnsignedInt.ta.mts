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

/* START_OF_SYMBOL_DEFINITION UnsignedInt */
/**
 * @summary UnsignedInt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedInt  ::=     INTEGER (0..4294967295)
 * ```
 */
export type UnsignedInt = INTEGER;
/* END_OF_SYMBOL_DEFINITION UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedInt */
let _cached_decoder_for_UnsignedInt: $.ASN1Decoder<UnsignedInt> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedInt */
/**
 * @summary Decodes an ASN.1 element into a(n) UnsignedInt
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsignedInt} The decoded data structure.
 */
export function _decode_UnsignedInt(el: _Element) {
  if (!_cached_decoder_for_UnsignedInt) {
    _cached_decoder_for_UnsignedInt = $._decodeInteger;
  }
  return _cached_decoder_for_UnsignedInt(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedInt */
let _cached_encoder_for_UnsignedInt: $.ASN1Encoder<UnsignedInt> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedInt */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedInt */
/**
 * @summary Encodes a(n) UnsignedInt into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsignedInt, encoded as an ASN.1 Element.
 */
export function _encode_UnsignedInt(
  value: UnsignedInt,
  elGetter: $.ASN1Encoder<UnsignedInt>
) {
  if (!_cached_encoder_for_UnsignedInt) {
    _cached_encoder_for_UnsignedInt = $._encodeInteger;
  }
  return _cached_encoder_for_UnsignedInt(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedInt */

/* eslint-enable */

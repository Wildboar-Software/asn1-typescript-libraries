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

/* START_OF_SYMBOL_DEFINITION UnsignedShort */
/**
 * @summary UnsignedShort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedShort  ::=  INTEGER (0..65535)
 * ```
 */
export type UnsignedShort = INTEGER;
/* END_OF_SYMBOL_DEFINITION UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedShort */
let _cached_decoder_for_UnsignedShort: $.ASN1Decoder<UnsignedShort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedShort */
/**
 * @summary Decodes an ASN.1 element into a(n) UnsignedShort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsignedShort} The decoded data structure.
 */
export function _decode_UnsignedShort(el: _Element) {
  if (!_cached_decoder_for_UnsignedShort) {
    _cached_decoder_for_UnsignedShort = $._decodeInteger;
  }
  return _cached_decoder_for_UnsignedShort(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedShort */
let _cached_encoder_for_UnsignedShort: $.ASN1Encoder<UnsignedShort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedShort */
/**
 * @summary Encodes a(n) UnsignedShort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsignedShort, encoded as an ASN.1 Element.
 */
export function _encode_UnsignedShort(
  value: UnsignedShort,
  elGetter: $.ASN1Encoder<UnsignedShort>
) {
  if (!_cached_encoder_for_UnsignedShort) {
    _cached_encoder_for_UnsignedShort = $._encodeInteger;
  }
  return _cached_encoder_for_UnsignedShort(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedShort */

/* eslint-enable */

/* eslint-disable */
import {
  REAL,
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

/* START_OF_SYMBOL_DEFINITION Double */
/**
 * @summary Double
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Double  ::=     REAL (0 | MINUS-INFINITY | PLUS-INFINITY | NOT-A-NUMBER | WITH COMPONENTS {
 *             mantissa(-9007199254740991..9007199254740991),
 *             base(2),
 *             exponent(-1075..970)})
 * ```
 */
export type Double = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION Double */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Double */
let _cached_decoder_for_Double: $.ASN1Decoder<Double> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Double */

/* START_OF_SYMBOL_DEFINITION _decode_Double */
/**
 * @summary Decodes an ASN.1 element into a(n) Double
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Double} The decoded data structure.
 */
export function _decode_Double(el: _Element) {
  if (!_cached_decoder_for_Double) {
    _cached_decoder_for_Double = $._decodeReal;
  }
  return _cached_decoder_for_Double(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Double */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Double */
let _cached_encoder_for_Double: $.ASN1Encoder<Double> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Double */

/* START_OF_SYMBOL_DEFINITION _encode_Double */
/**
 * @summary Encodes a(n) Double into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Double, encoded as an ASN.1 Element.
 */
export function _encode_Double(value: Double, elGetter: $.ASN1Encoder<Double>) {
  if (!_cached_encoder_for_Double) {
    _cached_encoder_for_Double = $._encodeReal;
  }
  return _cached_encoder_for_Double(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Double */

/* eslint-enable */

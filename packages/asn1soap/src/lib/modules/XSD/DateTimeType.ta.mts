/* eslint-disable */
import {
  VisibleString,
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

/* START_OF_SYMBOL_DEFINITION DateTimeType */
/**
 * @summary DateTimeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTimeType  ::=  VisibleString    (FROM ("0".."9" | "TZ:.+-"))
 *         (CONSTRAINED BY {/ * W3C XML Schema Part 2, 3.2.7 * /})
 * ```
 */
export type DateTimeType = VisibleString; // VisibleString
/* END_OF_SYMBOL_DEFINITION DateTimeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTimeType */
let _cached_decoder_for_DateTimeType: $.ASN1Decoder<DateTimeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTimeType */

/* START_OF_SYMBOL_DEFINITION _decode_DateTimeType */
/**
 * @summary Decodes an ASN.1 element into a(n) DateTimeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DateTimeType} The decoded data structure.
 */
export function _decode_DateTimeType(el: _Element) {
  if (!_cached_decoder_for_DateTimeType) {
    _cached_decoder_for_DateTimeType = $._decodeVisibleString;
  }
  return _cached_decoder_for_DateTimeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DateTimeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTimeType */
let _cached_encoder_for_DateTimeType: $.ASN1Encoder<DateTimeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTimeType */

/* START_OF_SYMBOL_DEFINITION _encode_DateTimeType */
/**
 * @summary Encodes a(n) DateTimeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateTimeType, encoded as an ASN.1 Element.
 */
export function _encode_DateTimeType(
  value: DateTimeType,
  elGetter: $.ASN1Encoder<DateTimeType>
) {
  if (!_cached_encoder_for_DateTimeType) {
    _cached_encoder_for_DateTimeType = $._encodeVisibleString;
  }
  return _cached_encoder_for_DateTimeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DateTimeType */

/* eslint-enable */

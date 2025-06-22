/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
  DateTimeType,
  _decode_DateTimeType,
  _encode_DateTimeType,
} from '../XSD/DateTimeType.ta.mjs';

/**
 * @summary Day
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Day  ::=  DateTimeType     (FROM ("0".."9" | "Z:+-"))
 *             (CONSTRAINED BY {/ * W3C XML Schema Part 2, 3.2.13 * /})
 * ```
 */
export type Day = DateTimeType; // DefinedType


let _cached_decoder_for_Day: $.ASN1Decoder<Day> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Day
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Day} The decoded data structure.
 */
export function _decode_Day(el: _Element) {
  if (!_cached_decoder_for_Day) {
    _cached_decoder_for_Day = _decode_DateTimeType;
  }
  return _cached_decoder_for_Day(el);
}


let _cached_encoder_for_Day: $.ASN1Encoder<Day> | null = null;


/**
 * @summary Encodes a(n) Day into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Day, encoded as an ASN.1 Element.
 */
export function _encode_Day(value: Day, elGetter: $.ASN1Encoder<Day>) {
  if (!_cached_encoder_for_Day) {
    _cached_encoder_for_Day = _encode_DateTimeType;
  }
  return _cached_encoder_for_Day(value, elGetter);
}


/* eslint-enable */

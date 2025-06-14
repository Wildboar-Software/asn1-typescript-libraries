/* eslint-disable */
import {
  TIME,
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

/* START_OF_SYMBOL_DEFINITION Date_Time */
/**
 * @summary Date_Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date-Time  ::=  TIME ((SETTINGS "Basic=Date-Time Date=YMD Year=Basic Time=HMS Midnight = Start Local-or-UTC=Z"))
 * ```
 */
export type Date_Time = TIME; // TimeType
/* END_OF_SYMBOL_DEFINITION Date_Time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_Time */
let _cached_decoder_for_Date_Time: $.ASN1Decoder<Date_Time> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Date_Time */

/* START_OF_SYMBOL_DEFINITION _decode_Date_Time */
/**
 * @summary Decodes an ASN.1 element into a(n) Date_Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Date_Time} The decoded data structure.
 */
export function _decode_Date_Time(el: _Element) {
  if (!_cached_decoder_for_Date_Time) {
    _cached_decoder_for_Date_Time = $._decodeTime;
  }
  return _cached_decoder_for_Date_Time(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Date_Time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_Time */
let _cached_encoder_for_Date_Time: $.ASN1Encoder<Date_Time> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Date_Time */

/* START_OF_SYMBOL_DEFINITION _encode_Date_Time */
/**
 * @summary Encodes a(n) Date_Time into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date_Time, encoded as an ASN.1 Element.
 */
export function _encode_Date_Time(
  value: Date_Time,
  elGetter: $.ASN1Encoder<Date_Time>
) {
  if (!_cached_encoder_for_Date_Time) {
    _cached_encoder_for_Date_Time = $._encodeTime;
  }
  return _cached_encoder_for_Date_Time(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Date_Time */

/* eslint-enable */

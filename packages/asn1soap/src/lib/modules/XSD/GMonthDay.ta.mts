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
 * @summary GMonthDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GMonthDay  ::=  DateTimeType (MonthDay)
 * ```
 */
export type GMonthDay = DateTimeType; // DefinedType


let _cached_decoder_for_GMonthDay: $.ASN1Decoder<GMonthDay> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GMonthDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GMonthDay} The decoded data structure.
 */
export function _decode_GMonthDay(el: _Element) {
  if (!_cached_decoder_for_GMonthDay) {
    _cached_decoder_for_GMonthDay = _decode_DateTimeType;
  }
  return _cached_decoder_for_GMonthDay(el);
}


let _cached_encoder_for_GMonthDay: $.ASN1Encoder<GMonthDay> | null = null;


/**
 * @summary Encodes a(n) GMonthDay into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GMonthDay, encoded as an ASN.1 Element.
 */
export function _encode_GMonthDay(
  value: GMonthDay,
  elGetter: $.ASN1Encoder<GMonthDay>
) {
  if (!_cached_encoder_for_GMonthDay) {
    _cached_encoder_for_GMonthDay = _encode_DateTimeType;
  }
  return _cached_encoder_for_GMonthDay(value, elGetter);
}


/* eslint-enable */

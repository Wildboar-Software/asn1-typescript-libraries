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
 * @summary GDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GDay  ::=  DateTimeType (Day)
 * ```
 */
export type GDay = DateTimeType; // DefinedType


let _cached_decoder_for_GDay: $.ASN1Decoder<GDay> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GDay} The decoded data structure.
 */
export function _decode_GDay(el: _Element) {
  if (!_cached_decoder_for_GDay) {
    _cached_decoder_for_GDay = _decode_DateTimeType;
  }
  return _cached_decoder_for_GDay(el);
}


let _cached_encoder_for_GDay: $.ASN1Encoder<GDay> | null = null;


/**
 * @summary Encodes a(n) GDay into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GDay, encoded as an ASN.1 Element.
 */
export function _encode_GDay(value: GDay, elGetter: $.ASN1Encoder<GDay>) {
  if (!_cached_encoder_for_GDay) {
    _cached_encoder_for_GDay = _encode_DateTimeType;
  }
  return _cached_encoder_for_GDay(value, elGetter);
}


/* eslint-enable */

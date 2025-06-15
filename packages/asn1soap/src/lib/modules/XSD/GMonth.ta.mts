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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  DateTimeType,
  _decode_DateTimeType,
  _encode_DateTimeType,
} from '../XSD/DateTimeType.ta.mjs';

/**
 * @summary GMonth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GMonth  ::=  DateTimeType (Month)
 * ```
 */
export type GMonth = DateTimeType; // DefinedType


let _cached_decoder_for_GMonth: $.ASN1Decoder<GMonth> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GMonth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GMonth} The decoded data structure.
 */
export function _decode_GMonth(el: _Element) {
  if (!_cached_decoder_for_GMonth) {
    _cached_decoder_for_GMonth = _decode_DateTimeType;
  }
  return _cached_decoder_for_GMonth(el);
}


let _cached_encoder_for_GMonth: $.ASN1Encoder<GMonth> | null = null;


/**
 * @summary Encodes a(n) GMonth into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GMonth, encoded as an ASN.1 Element.
 */
export function _encode_GMonth(value: GMonth, elGetter: $.ASN1Encoder<GMonth>) {
  if (!_cached_encoder_for_GMonth) {
    _cached_encoder_for_GMonth = _encode_DateTimeType;
  }
  return _cached_encoder_for_GMonth(value, elGetter);
}


/* eslint-enable */

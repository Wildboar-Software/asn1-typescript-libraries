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
/* START_OF_SYMBOL_DEFINITION Month */
/**
 * @summary Month
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Month  ::=  DateTimeType     (FROM ("0".."9" | "Z:+-"))
 *             (CONSTRAINED BY {/ * W3C XML Schema Part 2, 3.2.14 * /})
 * ```
 */
export type Month = DateTimeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION Month */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Month */
let _cached_decoder_for_Month: $.ASN1Decoder<Month> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Month */

/* START_OF_SYMBOL_DEFINITION _decode_Month */
/**
 * @summary Decodes an ASN.1 element into a(n) Month
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Month} The decoded data structure.
 */
export function _decode_Month(el: _Element) {
  if (!_cached_decoder_for_Month) {
    _cached_decoder_for_Month = _decode_DateTimeType;
  }
  return _cached_decoder_for_Month(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Month */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Month */
let _cached_encoder_for_Month: $.ASN1Encoder<Month> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Month */

/* START_OF_SYMBOL_DEFINITION _encode_Month */
/**
 * @summary Encodes a(n) Month into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Month, encoded as an ASN.1 Element.
 */
export function _encode_Month(value: Month, elGetter: $.ASN1Encoder<Month>) {
  if (!_cached_encoder_for_Month) {
    _cached_encoder_for_Month = _encode_DateTimeType;
  }
  return _cached_encoder_for_Month(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Month */

/* eslint-enable */

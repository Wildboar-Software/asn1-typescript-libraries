/* eslint-disable */
import {
  VisibleString,
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
import {
  GenericTimeTypeChoice,
  _get_decoder_for_GenericTimeTypeChoice,
  _get_encoder_for_GenericTimeTypeChoice,
} from '../XSD/GenericTimeTypeChoice.ta.mjs';
/* START_OF_SYMBOL_DEFINITION GYearMonth */
/**
 * @summary GYearMonth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GYearMonth  ::=  GenericTimeTypeChoice {
 *             TIME (SETTINGS "Basic=Date Date=YM"),
 *             VisibleString
 *                       (FROM ("0".."9" | "Z:+-"))
 *                 (CONSTRAINED BY {/ * W3C XML Schema 1.0 Part 2, 3.2.14
 *                                    and used if a time-zone is present * /})}
 * ```
 */
export type GYearMonth = GenericTimeTypeChoice<TIME, VisibleString>; // DefinedType
/* END_OF_SYMBOL_DEFINITION GYearMonth */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GYearMonth */
let _cached_decoder_for_GYearMonth: $.ASN1Decoder<GYearMonth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GYearMonth */

/* START_OF_SYMBOL_DEFINITION _decode_GYearMonth */
/**
 * @summary Decodes an ASN.1 element into a(n) GYearMonth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GYearMonth} The decoded data structure.
 */
export function _decode_GYearMonth(el: _Element) {
  if (!_cached_decoder_for_GYearMonth) {
    _cached_decoder_for_GYearMonth = _get_decoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._decodeTime, $._decodeVisibleString);
  }
  return _cached_decoder_for_GYearMonth(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GYearMonth */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GYearMonth */
let _cached_encoder_for_GYearMonth: $.ASN1Encoder<GYearMonth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GYearMonth */

/* START_OF_SYMBOL_DEFINITION _encode_GYearMonth */
/**
 * @summary Encodes a(n) GYearMonth into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GYearMonth, encoded as an ASN.1 Element.
 */
export function _encode_GYearMonth(
  value: GYearMonth,
  elGetter: $.ASN1Encoder<GYearMonth>
) {
  if (!_cached_encoder_for_GYearMonth) {
    _cached_encoder_for_GYearMonth = _get_encoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._encodeTime, $._encodeVisibleString);
  }
  return _cached_encoder_for_GYearMonth(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GYearMonth */

/* eslint-enable */

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

/**
 * @summary GYear
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GYear  ::=  GenericTimeTypeChoice {
 *             TIME (SETTINGS "Basic=Date Date=Y"),
 *             VisibleString
 *                       (FROM ("0".."9" | "Z:+-"))
 *                 (CONSTRAINED BY {/ * W3C XML Schema 1.0 Part 2, 3.2.11
 *                                    and used if a time-zone is present * /})}
 * ```
 */
export type GYear = GenericTimeTypeChoice<TIME, VisibleString>; // DefinedType


let _cached_decoder_for_GYear: $.ASN1Decoder<GYear> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GYear
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GYear} The decoded data structure.
 */
export function _decode_GYear(el: _Element) {
  if (!_cached_decoder_for_GYear) {
    _cached_decoder_for_GYear = _get_decoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._decodeTime, $._decodeVisibleString);
  }
  return _cached_decoder_for_GYear(el);
}


let _cached_encoder_for_GYear: $.ASN1Encoder<GYear> | null = null;


/**
 * @summary Encodes a(n) GYear into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GYear, encoded as an ASN.1 Element.
 */
export function _encode_GYear(value: GYear, elGetter: $.ASN1Encoder<GYear>) {
  if (!_cached_encoder_for_GYear) {
    _cached_encoder_for_GYear = _get_encoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._encodeTime, $._encodeVisibleString);
  }
  return _cached_encoder_for_GYear(value, elGetter);
}


/* eslint-enable */

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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  GenericTimeTypeChoice,
  _get_decoder_for_GenericTimeTypeChoice,
  _get_encoder_for_GenericTimeTypeChoice,
} from '../XSD/GenericTimeTypeChoice.ta.mjs';

/**
 * @summary Date
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date  ::=  GenericTimeTypeChoice {
 *             TIME (SETTINGS "Basic=Date Date=YMD"),
 *             VisibleString
 *                       (FROM ("0".."9" | "DHMPSTY:.+-"))
 *                 (CONSTRAINED BY {/ * W3C XML Schema 1.0 Part 2, 3.2.9
 *                                    and used if a time-zone is present * /})}
 * ```
 */
export type Date = GenericTimeTypeChoice<TIME, VisibleString>; // DefinedType


let _cached_decoder_for_Date: $.ASN1Decoder<Date> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Date
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Date} The decoded data structure.
 */
export function _decode_Date(el: _Element) {
  if (!_cached_decoder_for_Date) {
    _cached_decoder_for_Date = _get_decoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._decodeTime, $._decodeVisibleString);
  }
  return _cached_decoder_for_Date(el);
}


let _cached_encoder_for_Date: $.ASN1Encoder<Date> | null = null;


/**
 * @summary Encodes a(n) Date into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Date, encoded as an ASN.1 Element.
 */
export function _encode_Date(value: Date, elGetter: $.ASN1Encoder<Date>) {
  if (!_cached_encoder_for_Date) {
    _cached_encoder_for_Date = _get_encoder_for_GenericTimeTypeChoice<
      TIME,
      VisibleString
    >($._encodeTime, $._encodeVisibleString);
  }
  return _cached_encoder_for_Date(value, elGetter);
}


/* eslint-enable */

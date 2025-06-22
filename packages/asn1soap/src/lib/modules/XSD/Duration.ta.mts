/* eslint-disable */
import {
  VisibleString,
  DURATION,
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
 * @summary Duration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Duration  ::=  GenericTimeTypeChoice {
 *             DURATION
 *                   ((WITH COMPONENTS {...,
 *                                      seconds ABSENT,
 *                                      fractional-part ABSENT})|
 *                    (WITH COMPONENTS {...,
 *                                      seconds PRESENT})),
 *             VisibleString
 *                       (FROM ("0".."9" | "DHMPSTY:.+-"))
 *                 (CONSTRAINED BY {/ * W3C XML Schema 1.0 Part 2, 3.2.6
 *                                    and used for negative durations * /})}
 * ```
 */
export type Duration = GenericTimeTypeChoice<DURATION, VisibleString>; // DefinedType


let _cached_decoder_for_Duration: $.ASN1Decoder<Duration> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Duration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Duration} The decoded data structure.
 */
export function _decode_Duration(el: _Element) {
  if (!_cached_decoder_for_Duration) {
    _cached_decoder_for_Duration = _get_decoder_for_GenericTimeTypeChoice<
      DURATION,
      VisibleString
    >($._decodeDuration, $._decodeVisibleString);
  }
  return _cached_decoder_for_Duration(el);
}


let _cached_encoder_for_Duration: $.ASN1Encoder<Duration> | null = null;


/**
 * @summary Encodes a(n) Duration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Duration, encoded as an ASN.1 Element.
 */
export function _encode_Duration(
  value: Duration,
  elGetter: $.ASN1Encoder<Duration>
) {
  if (!_cached_encoder_for_Duration) {
    _cached_encoder_for_Duration = _get_encoder_for_GenericTimeTypeChoice<
      DURATION,
      VisibleString
    >($._encodeDuration, $._encodeVisibleString);
  }
  return _cached_encoder_for_Duration(value, elGetter);
}


/* eslint-enable */

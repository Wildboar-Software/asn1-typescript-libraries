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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta.mjs';

/**
 * @summary NotUnderstood
 * @description
 *
 * Qualified name of a SOAP header block that was not understood.
 * Carried as `encoded-value` whose `id` is Annex A's
 * `notUnderstoodIdentifier` (`qName` with local name
 * `NotUnderstood`); the PER encoding of this QName is
 * `encoded-value.encoding`. Maps to SOAP `env:NotUnderstood` with
 * a `qname` attribute. ITU-T Rec. X.892 (05/2005)
 * [§7.5.4](https://www.itu.int/rec/T-REC-X.892-200505-I), §8.5.4,
 * Annex A.
 * W3C SOAP 1.2 Part 1
 * [§5.4.8](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#soapnotunderstood).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotUnderstood  ::=  QName
 * ```
 */
export type NotUnderstood = QName; // DefinedType


let _cached_decoder_for_NotUnderstood: $.ASN1Decoder<NotUnderstood> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NotUnderstood
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotUnderstood} The decoded data structure.
 */
export function _decode_NotUnderstood(el: _Element): NotUnderstood {
  if (!_cached_decoder_for_NotUnderstood) {
    _cached_decoder_for_NotUnderstood = _decode_QName;
  }
  return _cached_decoder_for_NotUnderstood(el);
}


let _cached_encoder_for_NotUnderstood: $.ASN1Encoder<NotUnderstood> | null = null;


/**
 * @summary Encodes a(n) NotUnderstood into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotUnderstood, encoded as an ASN.1 Element.
 */
export function _encode_NotUnderstood(
  value: NotUnderstood,
  elGetter: $.ASN1Encoder<NotUnderstood>
): _Element {
  if (!_cached_encoder_for_NotUnderstood) {
    _cached_encoder_for_NotUnderstood = _encode_QName;
  }
  return _cached_encoder_for_NotUnderstood(value, elGetter);
}


/* eslint-enable */

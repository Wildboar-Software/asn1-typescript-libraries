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
  Challenge,
  _decode_Challenge,
  _encode_Challenge,
} from '../PKIXCMP-2009/Challenge.ta.mjs';

/**
 * @summary POPODecKeyChallContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * POPODecKeyChallContent  ::=  SEQUENCE OF Challenge
 * ```
 */
export type POPODecKeyChallContent = Challenge[]; // SequenceOfType


let _cached_decoder_for_POPODecKeyChallContent: $.ASN1Decoder<POPODecKeyChallContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) POPODecKeyChallContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {POPODecKeyChallContent} The decoded data structure.
 */
export function _decode_POPODecKeyChallContent(el: _Element) {
  if (!_cached_decoder_for_POPODecKeyChallContent) {
    _cached_decoder_for_POPODecKeyChallContent = $._decodeSequenceOf<Challenge>(
      () => _decode_Challenge
    );
  }
  return _cached_decoder_for_POPODecKeyChallContent(el);
}


let _cached_encoder_for_POPODecKeyChallContent: $.ASN1Encoder<POPODecKeyChallContent> | null = null;


/**
 * @summary Encodes a(n) POPODecKeyChallContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The POPODecKeyChallContent, encoded as an ASN.1 Element.
 */
export function _encode_POPODecKeyChallContent(
  value: POPODecKeyChallContent,
  elGetter: $.ASN1Encoder<POPODecKeyChallContent>
) {
  if (!_cached_encoder_for_POPODecKeyChallContent) {
    _cached_encoder_for_POPODecKeyChallContent = $._encodeSequenceOf<Challenge>(
      () => _encode_Challenge,
      $.BER
    );
  }
  return _cached_encoder_for_POPODecKeyChallContent(value, elGetter);
}


/* eslint-enable */

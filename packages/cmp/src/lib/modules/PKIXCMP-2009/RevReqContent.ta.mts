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
import {
  RevDetails,
  _decode_RevDetails,
  _encode_RevDetails,
} from '../PKIXCMP-2009/RevDetails.ta.mjs';

/**
 * @summary RevReqContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevReqContent  ::=  SEQUENCE OF RevDetails
 * ```
 */
export type RevReqContent = RevDetails[]; // SequenceOfType


let _cached_decoder_for_RevReqContent: $.ASN1Decoder<RevReqContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RevReqContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevReqContent} The decoded data structure.
 */
export function _decode_RevReqContent(el: _Element) {
  if (!_cached_decoder_for_RevReqContent) {
    _cached_decoder_for_RevReqContent = $._decodeSequenceOf<RevDetails>(
      () => _decode_RevDetails
    );
  }
  return _cached_decoder_for_RevReqContent(el);
}


let _cached_encoder_for_RevReqContent: $.ASN1Encoder<RevReqContent> | null = null;


/**
 * @summary Encodes a(n) RevReqContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevReqContent, encoded as an ASN.1 Element.
 */
export function _encode_RevReqContent(
  value: RevReqContent,
  elGetter: $.ASN1Encoder<RevReqContent>
) {
  if (!_cached_encoder_for_RevReqContent) {
    _cached_encoder_for_RevReqContent = $._encodeSequenceOf<RevDetails>(
      () => _encode_RevDetails,
      $.BER
    );
  }
  return _cached_encoder_for_RevReqContent(value, elGetter);
}


/* eslint-enable */

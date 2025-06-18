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
  RevocationInfo,
  _decode_RevocationInfo,
  _encode_RevocationInfo,
} from '../SCVP-2009/RevocationInfo.ta.mjs';
/**
 * @summary RevocationInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfos  ::=  SEQUENCE SIZE (1..MAX) OF RevocationInfo
 * ```
 */
export type RevocationInfos = RevocationInfo[]; // SequenceOfType

let _cached_decoder_for_RevocationInfos: $.ASN1Decoder<RevocationInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfos
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationInfos} The decoded data structure.
 */
export function _decode_RevocationInfos(el: _Element) {
  if (!_cached_decoder_for_RevocationInfos) {
    _cached_decoder_for_RevocationInfos = $._decodeSequenceOf<RevocationInfo>(
      () => _decode_RevocationInfo
    );
  }
  return _cached_decoder_for_RevocationInfos(el);
}

let _cached_encoder_for_RevocationInfos: $.ASN1Encoder<RevocationInfos> | null = null;

/**
 * @summary Encodes a(n) RevocationInfos into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfos, encoded as an ASN.1 Element.
 */
export function _encode_RevocationInfos(
  value: RevocationInfos,
  elGetter: $.ASN1Encoder<RevocationInfos>
) {
  if (!_cached_encoder_for_RevocationInfos) {
    _cached_encoder_for_RevocationInfos = $._encodeSequenceOf<RevocationInfo>(
      () => _encode_RevocationInfo,
      $.DER
    );
  }
  return _cached_encoder_for_RevocationInfos(value, elGetter);
}


/* eslint-enable */

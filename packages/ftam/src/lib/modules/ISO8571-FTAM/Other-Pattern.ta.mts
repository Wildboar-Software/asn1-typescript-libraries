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
  Equality_Comparision,
  _decode_Equality_Comparision,
  _encode_Equality_Comparision,
} from '../ISO8571-FTAM/Equality-Comparision.ta.mjs';

/**
 * @summary Other_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Other-Pattern  ::=  Equality-Comparision
 * ```
 */
export type Other_Pattern = Equality_Comparision; // DefinedType


let _cached_decoder_for_Other_Pattern: $.ASN1Decoder<Other_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Other_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Other_Pattern} The decoded data structure.
 */
export function _decode_Other_Pattern(el: _Element) {
  if (!_cached_decoder_for_Other_Pattern) {
    _cached_decoder_for_Other_Pattern = _decode_Equality_Comparision;
  }
  return _cached_decoder_for_Other_Pattern(el);
}


let _cached_encoder_for_Other_Pattern: $.ASN1Encoder<Other_Pattern> | null = null;


/**
 * @summary Encodes a(n) Other_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Other_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_Other_Pattern(
  value: Other_Pattern,
  elGetter: $.ASN1Encoder<Other_Pattern>
) {
  if (!_cached_encoder_for_Other_Pattern) {
    _cached_encoder_for_Other_Pattern = _encode_Equality_Comparision;
  }
  return _cached_encoder_for_Other_Pattern(value, elGetter);
}


/* eslint-enable */

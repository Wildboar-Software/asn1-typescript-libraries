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
  Name,
  _decode_Name,
  _encode_Name,
} from '../InformationFramework/Name.ta.mjs';
/**
 * @summary AE_title_form1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-title-form1  ::=
 *   Name
 * ```
 */
export type AE_title_form1 = Name; // DefinedType

let _cached_decoder_for_AE_title_form1: $.ASN1Decoder<AE_title_form1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AE_title_form1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_title_form1} The decoded data structure.
 */
export function _decode_AE_title_form1(el: _Element): AE_title_form1 {
  if (!_cached_decoder_for_AE_title_form1) {
    _cached_decoder_for_AE_title_form1 = _decode_Name;
  }
  return _cached_decoder_for_AE_title_form1(el);
}

let _cached_encoder_for_AE_title_form1: $.ASN1Encoder<AE_title_form1> | null = null;

/**
 * @summary Encodes a(n) AE_title_form1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_title_form1, encoded as an ASN.1 Element.
 */
export function _encode_AE_title_form1(
  value: AE_title_form1,
  elGetter: $.ASN1Encoder<AE_title_form1>
): _Element {
  if (!_cached_encoder_for_AE_title_form1) {
    _cached_encoder_for_AE_title_form1 = _encode_Name;
  }
  return _cached_encoder_for_AE_title_form1(value, elGetter);
}


/* eslint-enable */

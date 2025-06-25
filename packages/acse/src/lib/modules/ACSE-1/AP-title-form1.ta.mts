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
 * @summary AP_title_form1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title-form1  ::=
 *   Name
 * ```
 */
export type AP_title_form1 = Name; // DefinedType

let _cached_decoder_for_AP_title_form1: $.ASN1Decoder<AP_title_form1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AP_title_form1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_title_form1} The decoded data structure.
 */
export function _decode_AP_title_form1(el: _Element): AP_title_form1 {
  if (!_cached_decoder_for_AP_title_form1) {
    _cached_decoder_for_AP_title_form1 = _decode_Name;
  }
  return _cached_decoder_for_AP_title_form1(el);
}

let _cached_encoder_for_AP_title_form1: $.ASN1Encoder<AP_title_form1> | null = null;

/**
 * @summary Encodes a(n) AP_title_form1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title_form1, encoded as an ASN.1 Element.
 */
export function _encode_AP_title_form1(
  value: AP_title_form1,
  elGetter: $.ASN1Encoder<AP_title_form1>
): _Element {
  if (!_cached_encoder_for_AP_title_form1) {
    _cached_encoder_for_AP_title_form1 = _encode_Name;
  }
  return _cached_encoder_for_AP_title_form1(value, elGetter);
}


/* eslint-enable */

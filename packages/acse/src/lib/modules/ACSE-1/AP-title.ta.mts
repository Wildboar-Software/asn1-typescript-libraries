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
  AP_title_form1,
  _decode_AP_title_form1,
  _encode_AP_title_form1,
} from '../ACSE-1/AP-title-form1.ta.mjs';
import {
  AP_title_form2,
  _decode_AP_title_form2,
  _encode_AP_title_form2,
} from '../ACSE-1/AP-title-form2.ta.mjs';
import {
  AP_title_form3,
  _decode_AP_title_form3,
  _encode_AP_title_form3,
} from '../ACSE-1/AP-title-form3.ta.mjs';
import {
  AP_title_form4,
  _decode_AP_title_form4,
  _encode_AP_title_form4,
} from '../ACSE-1/AP-title-form4.ta.mjs';
/**
 * @summary AP_title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-title  ::=  CHOICE {
 *   ap-title-form1  AP-title-form1,
 *   ap-title-form2  AP-title-form2,
 *   ...,
 *   ap-title-form3  AP-title-form3,
 *   ap-title-form4  AP-title-form4
 * }
 * ```
 */
export type AP_title =
  | { ap_title_form1: AP_title_form1 } /* CHOICE_ALT_ROOT */
  | { ap_title_form2: AP_title_form2 } /* CHOICE_ALT_ROOT */
  | { ap_title_form3: AP_title_form3 } /* CHOICE_ALT_EXT */
  | { ap_title_form4: AP_title_form4 } /* CHOICE_ALT_EXT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AP_title: $.ASN1Decoder<AP_title> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AP_title
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_title} The decoded data structure.
 */
export function _decode_AP_title(el: _Element) {
  if (!_cached_decoder_for_AP_title) {
    _cached_decoder_for_AP_title = $._decode_extensible_choice<AP_title>({
      'UNIVERSAL 16': ['ap_title_form1', _decode_AP_title_form1],
      'UNIVERSAL 6': ['ap_title_form2', _decode_AP_title_form2],
      'UNIVERSAL 19': ['ap_title_form3', _decode_AP_title_form3],
      'CONTEXT 0': ['ap_title_form4', _decode_AP_title_form4],
    });
  }
  return _cached_decoder_for_AP_title(el);
}

let _cached_encoder_for_AP_title: $.ASN1Encoder<AP_title> | null = null;

/**
 * @summary Encodes a(n) AP_title into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_title, encoded as an ASN.1 Element.
 */
export function _encode_AP_title(
  value: AP_title,
  elGetter: $.ASN1Encoder<AP_title>
) {
  if (!_cached_encoder_for_AP_title) {
    _cached_encoder_for_AP_title = $._encode_choice<AP_title>(
      {
        ap_title_form1: _encode_AP_title_form1,
        ap_title_form2: _encode_AP_title_form2,
        ap_title_form3: _encode_AP_title_form3,
        ap_title_form4: _encode_AP_title_form4,
      },
      $.BER
    );
  }
  return _cached_encoder_for_AP_title(value, elGetter);
}


/* eslint-enable */

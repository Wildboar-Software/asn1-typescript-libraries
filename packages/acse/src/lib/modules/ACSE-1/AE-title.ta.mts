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
  AE_title_form1,
  _decode_AE_title_form1,
  _encode_AE_title_form1,
} from '../ACSE-1/AE-title-form1.ta.mjs';
import {
  AE_title_form2,
  _decode_AE_title_form2,
  _encode_AE_title_form2,
} from '../ACSE-1/AE-title-form2.ta.mjs';
/**
 * @summary AE_title
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-title  ::=  CHOICE {
 *   ae-title-form1  AE-title-form1,
 *   ae-title-form2  AE-title-form2,
 *   ...
 * }
 * ```
 */
export type AE_title =
  | { ae_title_form1: AE_title_form1 } /* CHOICE_ALT_ROOT */
  | { ae_title_form2: AE_title_form2 } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AE_title: $.ASN1Decoder<AE_title> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AE_title
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_title} The decoded data structure.
 */
export function _decode_AE_title(el: _Element): AE_title {
  if (!_cached_decoder_for_AE_title) {
    _cached_decoder_for_AE_title = $._decode_extensible_choice<AE_title>({
      'UNIVERSAL 16': ['ae_title_form1', _decode_AE_title_form1],
      'UNIVERSAL 6': ['ae_title_form2', _decode_AE_title_form2],
    });
  }
  return _cached_decoder_for_AE_title(el);
}

let _cached_encoder_for_AE_title: $.ASN1Encoder<AE_title> | null = null;

/**
 * @summary Encodes a(n) AE_title into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_title, encoded as an ASN.1 Element.
 */
export function _encode_AE_title(
  value: AE_title,
  elGetter: $.ASN1Encoder<AE_title>
): _Element {
  if (!_cached_encoder_for_AE_title) {
    _cached_encoder_for_AE_title = $._encode_choice<AE_title>(
      {
        ae_title_form1: _encode_AE_title_form1,
        ae_title_form2: _encode_AE_title_form2,
      },
      $.BER
    );
  }
  return _cached_encoder_for_AE_title(value, elGetter);
}


/* eslint-enable */

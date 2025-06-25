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
  AARQ_apdu,
  _decode_AARQ_apdu,
  _encode_AARQ_apdu,
} from '../ACSE-1/AARQ-apdu.ta.mjs';
import {
  AARE_apdu,
  _decode_AARE_apdu,
  _encode_AARE_apdu,
} from '../ACSE-1/AARE-apdu.ta.mjs';
import {
  RLRQ_apdu,
  _decode_RLRQ_apdu,
  _encode_RLRQ_apdu,
} from '../ACSE-1/RLRQ-apdu.ta.mjs';
import {
  RLRE_apdu,
  _decode_RLRE_apdu,
  _encode_RLRE_apdu,
} from '../ACSE-1/RLRE-apdu.ta.mjs';
import {
  ABRT_apdu,
  _decode_ABRT_apdu,
  _encode_ABRT_apdu,
} from '../ACSE-1/ABRT-apdu.ta.mjs';
import {
  A_DT_apdu,
  _decode_A_DT_apdu,
  _encode_A_DT_apdu,
} from '../ACSE-1/A-DT-apdu.ta.mjs';
import {
  ACRQ_apdu,
  _decode_ACRQ_apdu,
  _encode_ACRQ_apdu,
} from '../ACSE-1/ACRQ-apdu.ta.mjs';
import {
  ACRP_apdu,
  _decode_ACRP_apdu,
  _encode_ACRP_apdu,
} from '../ACSE-1/ACRP-apdu.ta.mjs';
/**
 * @summary ACSE_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACSE-apdu  ::=  CHOICE {
 *   aarq  AARQ-apdu,
 *   aare  AARE-apdu,
 *   rlrq  RLRQ-apdu,
 *   rlre  RLRE-apdu,
 *   abrt  ABRT-apdu,
 *   ...,
 *   --  Extensions for higher level association FU
 *   adt   A-DT-apdu,
 *   acrq  ACRQ-apdu,
 *   acrp  ACRP-apdu
 * }
 * ```
 */
export type ACSE_apdu =
  | { aarq: AARQ_apdu } /* CHOICE_ALT_ROOT */
  | { aare: AARE_apdu } /* CHOICE_ALT_ROOT */
  | { rlrq: RLRQ_apdu } /* CHOICE_ALT_ROOT */
  | { rlre: RLRE_apdu } /* CHOICE_ALT_ROOT */
  | { abrt: ABRT_apdu } /* CHOICE_ALT_ROOT */
  | { adt: A_DT_apdu } /* CHOICE_ALT_EXT */
  | { acrq: ACRQ_apdu } /* CHOICE_ALT_EXT */
  | { acrp: ACRP_apdu } /* CHOICE_ALT_EXT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ACSE_apdu: $.ASN1Decoder<ACSE_apdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACSE_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACSE_apdu} The decoded data structure.
 */
export function _decode_ACSE_apdu(el: _Element): ACSE_apdu {
  if (!_cached_decoder_for_ACSE_apdu) {
    _cached_decoder_for_ACSE_apdu = $._decode_extensible_choice<ACSE_apdu>({
      'APPLICATION 0': ['aarq', _decode_AARQ_apdu],
      'APPLICATION 1': ['aare', _decode_AARE_apdu],
      'APPLICATION 2': ['rlrq', _decode_RLRQ_apdu],
      'APPLICATION 3': ['rlre', _decode_RLRE_apdu],
      'APPLICATION 4': ['abrt', _decode_ABRT_apdu],
      'APPLICATION 5': ['adt', _decode_A_DT_apdu],
      'APPLICATION 6': ['acrq', _decode_ACRQ_apdu],
      'APPLICATION 7': ['acrp', _decode_ACRP_apdu],
    });
  }
  return _cached_decoder_for_ACSE_apdu(el);
}

let _cached_encoder_for_ACSE_apdu: $.ASN1Encoder<ACSE_apdu> | null = null;

/**
 * @summary Encodes a(n) ACSE_apdu into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACSE_apdu, encoded as an ASN.1 Element.
 */
export function _encode_ACSE_apdu(
  value: ACSE_apdu,
  elGetter: $.ASN1Encoder<ACSE_apdu>
): _Element {
  if (!_cached_encoder_for_ACSE_apdu) {
    _cached_encoder_for_ACSE_apdu = $._encode_choice<ACSE_apdu>(
      {
        aarq: _encode_AARQ_apdu,
        aare: _encode_AARE_apdu,
        rlrq: _encode_RLRQ_apdu,
        rlre: _encode_RLRE_apdu,
        abrt: _encode_ABRT_apdu,
        adt: _encode_A_DT_apdu,
        acrq: _encode_ACRQ_apdu,
        acrp: _encode_ACRP_apdu,
      },
      $.BER
    );
  }
  return _cached_encoder_for_ACSE_apdu(value, elGetter);
}


/* eslint-enable */

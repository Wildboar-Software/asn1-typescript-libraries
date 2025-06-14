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
  Any_sub_type,
  _decode_Any_sub_type,
  _encode_Any_sub_type,
} from '../CBEFF-DATA-ELEMENTS/Any-sub-type.ta.mjs';
import {
  Vein_only,
  _decode_Vein_only,
  _encode_Vein_only,
} from '../CBEFF-DATA-ELEMENTS/Vein-only.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BiometricSubtype */
/**
 * @summary BiometricSubtype
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricSubtype  ::=  CHOICE {any        Any-sub-type,
 *                              vein-only  Vein-only
 * }
 * ```
 */
export type BiometricSubtype =
  | { any_: Any_sub_type } /* CHOICE_ALT_ROOT */
  | { vein_only: Vein_only } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BiometricSubtype */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricSubtype */
let _cached_decoder_for_BiometricSubtype: $.ASN1Decoder<BiometricSubtype> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricSubtype */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricSubtype */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricSubtype
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricSubtype} The decoded data structure.
 */
export function _decode_BiometricSubtype(el: _Element) {
  if (!_cached_decoder_for_BiometricSubtype) {
    _cached_decoder_for_BiometricSubtype = $._decode_inextensible_choice<BiometricSubtype>(
      {
        'CONTEXT 0': ['any_', _decode_Any_sub_type],
        'CONTEXT 1': ['vein_only', _decode_Vein_only],
      }
    );
  }
  return _cached_decoder_for_BiometricSubtype(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricSubtype */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricSubtype */
let _cached_encoder_for_BiometricSubtype: $.ASN1Encoder<BiometricSubtype> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricSubtype */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricSubtype */
/**
 * @summary Encodes a(n) BiometricSubtype into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricSubtype, encoded as an ASN.1 Element.
 */
export function _encode_BiometricSubtype(
  value: BiometricSubtype,
  elGetter: $.ASN1Encoder<BiometricSubtype>
) {
  if (!_cached_encoder_for_BiometricSubtype) {
    _cached_encoder_for_BiometricSubtype = $._encode_choice<BiometricSubtype>(
      {
        any_: _encode_Any_sub_type,
        vein_only: _encode_Vein_only,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BiometricSubtype(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricSubtype */

/* eslint-enable */

/* eslint-disable */
import {
  INTEGER,
  OCTET_STRING,
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


/**
 * @summary C_BEGIN_RI_branch_suffix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * C-BEGIN-RI-branch-suffix ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type C_BEGIN_RI_branch_suffix =
  | { form1: OCTET_STRING } /* CHOICE_ALT_ROOT */
  | { form2: INTEGER } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_C_BEGIN_RI_branch_suffix: $.ASN1Decoder<C_BEGIN_RI_branch_suffix> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) C_BEGIN_RI_branch_suffix
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {C_BEGIN_RI_branch_suffix} The decoded data structure.
 */
export function _decode_C_BEGIN_RI_branch_suffix(el: _Element) {
  if (!_cached_decoder_for_C_BEGIN_RI_branch_suffix) {
    _cached_decoder_for_C_BEGIN_RI_branch_suffix = $._decode_extensible_choice<C_BEGIN_RI_branch_suffix>(
      {
        'CONTEXT 2': [
          'form1',
          $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString),
        ],
        'CONTEXT 3': [
          'form2',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_C_BEGIN_RI_branch_suffix(el);
}


let _cached_encoder_for_C_BEGIN_RI_branch_suffix: $.ASN1Encoder<C_BEGIN_RI_branch_suffix> | null = null;


/**
 * @summary Encodes a(n) C_BEGIN_RI_branch_suffix into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The C_BEGIN_RI_branch_suffix, encoded as an ASN.1 Element.
 */
export function _encode_C_BEGIN_RI_branch_suffix(
  value: C_BEGIN_RI_branch_suffix,
  elGetter: $.ASN1Encoder<C_BEGIN_RI_branch_suffix>
) {
  if (!_cached_encoder_for_C_BEGIN_RI_branch_suffix) {
    _cached_encoder_for_C_BEGIN_RI_branch_suffix = $._encode_choice<C_BEGIN_RI_branch_suffix>(
      {
        form1: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeOctetString,
          $.BER
        ),
        form2: $._encode_implicit(
          _TagClass.context,
          3,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_C_BEGIN_RI_branch_suffix(value, elGetter);
}


/* eslint-enable */

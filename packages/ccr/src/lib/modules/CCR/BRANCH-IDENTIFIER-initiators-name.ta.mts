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
  AE_title,
  _decode_AE_title,
  _encode_AE_title,
} from '@wildboar/acse';
import {
  BRANCH_IDENTIFIER_initiators_name_side,
  _enum_for_BRANCH_IDENTIFIER_initiators_name_side,
  _decode_BRANCH_IDENTIFIER_initiators_name_side,
  _encode_BRANCH_IDENTIFIER_initiators_name_side,
} from '../CCR/BRANCH-IDENTIFIER-initiators-name-side.ta.mjs';

/**
 * @summary BRANCH_IDENTIFIER_initiators_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRANCH-IDENTIFIER-initiators-name ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BRANCH_IDENTIFIER_initiators_name =
  | { name: AE_title } /* CHOICE_ALT_ROOT */
  | { side: BRANCH_IDENTIFIER_initiators_name_side } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name: $.ASN1Decoder<BRANCH_IDENTIFIER_initiators_name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BRANCH_IDENTIFIER_initiators_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRANCH_IDENTIFIER_initiators_name} The decoded data structure.
 */
export function _decode_BRANCH_IDENTIFIER_initiators_name(el: _Element): BRANCH_IDENTIFIER_initiators_name {
  if (!_cached_decoder_for_BRANCH_IDENTIFIER_initiators_name) {
    _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name = $._decode_extensible_choice<BRANCH_IDENTIFIER_initiators_name>(
      {
        'CONTEXT 0': [
          'name',
          $._decode_explicit<AE_title>(() => _decode_AE_title),
        ],
        'CONTEXT 1': [
          'side',
          $._decode_implicit<BRANCH_IDENTIFIER_initiators_name_side>(
            () => _decode_BRANCH_IDENTIFIER_initiators_name_side
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_BRANCH_IDENTIFIER_initiators_name(el);
}


let _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name: $.ASN1Encoder<BRANCH_IDENTIFIER_initiators_name> | null = null;


/**
 * @summary Encodes a(n) BRANCH_IDENTIFIER_initiators_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRANCH_IDENTIFIER_initiators_name, encoded as an ASN.1 Element.
 */
export function _encode_BRANCH_IDENTIFIER_initiators_name(
  value: BRANCH_IDENTIFIER_initiators_name,
  elGetter: $.ASN1Encoder<BRANCH_IDENTIFIER_initiators_name>
): _Element {
  if (!_cached_encoder_for_BRANCH_IDENTIFIER_initiators_name) {
    _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name = $._encode_choice<BRANCH_IDENTIFIER_initiators_name>(
      {
        name: $._encode_explicit(
          _TagClass.context,
          0,
          () => _encode_AE_title,
          $.BER
        ),
        side: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_BRANCH_IDENTIFIER_initiators_name_side,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_BRANCH_IDENTIFIER_initiators_name(value, elGetter);
}


/* eslint-enable */

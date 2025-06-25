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
} from '@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta.mjs';
import {
  ATOMIC_ACTION_IDENTIFIER_owners_name_side,
  _enum_for_ATOMIC_ACTION_IDENTIFIER_owners_name_side,
  _decode_ATOMIC_ACTION_IDENTIFIER_owners_name_side,
  _encode_ATOMIC_ACTION_IDENTIFIER_owners_name_side,
} from '../CCR/ATOMIC-ACTION-IDENTIFIER-owners-name-side.ta.mjs';

/**
 * @summary ATOMIC_ACTION_IDENTIFIER_owners_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATOMIC-ACTION-IDENTIFIER-owners-name ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ATOMIC_ACTION_IDENTIFIER_owners_name =
  | { name: AE_title } /* CHOICE_ALT_ROOT */
  | { side: ATOMIC_ACTION_IDENTIFIER_owners_name_side } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name: $.ASN1Decoder<ATOMIC_ACTION_IDENTIFIER_owners_name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ATOMIC_ACTION_IDENTIFIER_owners_name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ATOMIC_ACTION_IDENTIFIER_owners_name} The decoded data structure.
 */
export function _decode_ATOMIC_ACTION_IDENTIFIER_owners_name(el: _Element): ATOMIC_ACTION_IDENTIFIER_owners_name {
  if (!_cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name) {
    _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name = $._decode_extensible_choice<ATOMIC_ACTION_IDENTIFIER_owners_name>(
      {
        'CONTEXT 0': [
          'name',
          $._decode_explicit<AE_title>(() => _decode_AE_title),
        ],
        'CONTEXT 1': [
          'side',
          $._decode_implicit<ATOMIC_ACTION_IDENTIFIER_owners_name_side>(
            () => _decode_ATOMIC_ACTION_IDENTIFIER_owners_name_side
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name(el);
}


let _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER_owners_name> | null = null;


/**
 * @summary Encodes a(n) ATOMIC_ACTION_IDENTIFIER_owners_name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ATOMIC_ACTION_IDENTIFIER_owners_name, encoded as an ASN.1 Element.
 */
export function _encode_ATOMIC_ACTION_IDENTIFIER_owners_name(
  value: ATOMIC_ACTION_IDENTIFIER_owners_name,
  elGetter: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER_owners_name>
): _Element {
  if (!_cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name) {
    _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name = $._encode_choice<ATOMIC_ACTION_IDENTIFIER_owners_name>(
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
          () => _encode_ATOMIC_ACTION_IDENTIFIER_owners_name_side,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_owners_name(
    value,
    elGetter
  );
}


/* eslint-enable */

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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATOMIC-ACTION-IDENTIFIER-atomic-action-suffix ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix =
  | { form1: OCTET_STRING } /* CHOICE_ALT_ROOT */
  | { form2: INTEGER } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix: $.ASN1Decoder<ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix} The decoded data structure.
 */
export function _decode_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix(
  el: _Element
) {
  if (!_cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix) {
    _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix = $._decode_extensible_choice<ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix>(
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
  return _cached_decoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix(el);
}


let _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix> | null = null;


/**
 * @summary Encodes a(n) ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix, encoded as an ASN.1 Element.
 */
export function _encode_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix(
  value: ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix,
  elGetter: $.ASN1Encoder<ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix>
) {
  if (!_cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix) {
    _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix = $._encode_choice<ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix>(
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
  return _cached_encoder_for_ATOMIC_ACTION_IDENTIFIER_atomic_action_suffix(
    value,
    elGetter
  );
}


/* eslint-enable */

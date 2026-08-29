/* eslint-disable */
import {
  INTEGER,
  OBJECT_IDENTIFIER,
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
 * @summary ActionTypeId
 * @description
 *
 * Action type. `localForm` integers are not allocated by
 * this Recommendation; their values and meanings are
 * defined by the application context. ITU-T Rec. X.711
 * (10/97)
 * [§7.4](https://www.itu.int/rec/T-REC-X.711-199710-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionTypeId  ::=  CHOICE {
 *   globalForm  [2] IMPLICIT OBJECT IDENTIFIER,
 *   localForm   [3] IMPLICIT INTEGER
 * }
 * ```
 */
export type ActionTypeId =
  | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
  | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ActionTypeId: $.ASN1Decoder<ActionTypeId> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionTypeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionTypeId} The decoded data structure.
 */
export function _decode_ActionTypeId(el: _Element): ActionTypeId {
  if (!_cached_decoder_for_ActionTypeId) {
    _cached_decoder_for_ActionTypeId = $._decode_inextensible_choice<ActionTypeId>(
      {
        'CONTEXT 2': [
          'globalForm',
          $._decode_implicit<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          ),
        ],
        'CONTEXT 3': [
          'localForm',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_ActionTypeId(el);
}


let _cached_encoder_for_ActionTypeId: $.ASN1Encoder<ActionTypeId> | null = null;


/**
 * @summary Encodes a(n) ActionTypeId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionTypeId, encoded as an ASN.1 Element.
 */
export function _encode_ActionTypeId(
  value: ActionTypeId,
  elGetter: $.ASN1Encoder<ActionTypeId>
): _Element {
  if (!_cached_encoder_for_ActionTypeId) {
    _cached_encoder_for_ActionTypeId = $._encode_choice<ActionTypeId>(
      {
        globalForm: $._encode_implicit(
          _TagClass.context,
          2,
          () => $._encodeObjectIdentifier,
          $.BER
        ),
        localForm: $._encode_implicit(
          _TagClass.context,
          3,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ActionTypeId(value, elGetter);
}


/* eslint-enable */

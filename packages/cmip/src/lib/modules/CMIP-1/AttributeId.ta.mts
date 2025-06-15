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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


/**
 * @summary AttributeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeId  ::=  CHOICE {
 *   globalForm  [0] IMPLICIT OBJECT IDENTIFIER,
 *   localForm   [1] IMPLICIT INTEGER
 * }
 * ```
 */
export type AttributeId =
  | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
  | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_AttributeId: $.ASN1Decoder<AttributeId> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttributeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeId} The decoded data structure.
 */
export function _decode_AttributeId(el: _Element) {
  if (!_cached_decoder_for_AttributeId) {
    _cached_decoder_for_AttributeId = $._decode_inextensible_choice<AttributeId>(
      {
        'CONTEXT 0': [
          'globalForm',
          $._decode_implicit<OBJECT_IDENTIFIER>(
            () => $._decodeObjectIdentifier
          ),
        ],
        'CONTEXT 1': [
          'localForm',
          $._decode_implicit<INTEGER>(() => $._decodeInteger),
        ],
      }
    );
  }
  return _cached_decoder_for_AttributeId(el);
}


let _cached_encoder_for_AttributeId: $.ASN1Encoder<AttributeId> | null = null;


/**
 * @summary Encodes a(n) AttributeId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeId, encoded as an ASN.1 Element.
 */
export function _encode_AttributeId(
  value: AttributeId,
  elGetter: $.ASN1Encoder<AttributeId>
) {
  if (!_cached_encoder_for_AttributeId) {
    _cached_encoder_for_AttributeId = $._encode_choice<AttributeId>(
      {
        globalForm: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeObjectIdentifier,
          $.BER
        ),
        localForm: $._encode_implicit(
          _TagClass.context,
          1,
          () => $._encodeInteger,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_AttributeId(value, elGetter);
}


/* eslint-enable */

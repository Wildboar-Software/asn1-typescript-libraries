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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary ObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClass  ::=  CHOICE {
 *   globalForm  [0] IMPLICIT OBJECT IDENTIFIER,
 *   localForm   [1] IMPLICIT INTEGER
 * }
 * ```
 */
export type ObjectClass =
  | { globalForm: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
  | { localForm: INTEGER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ObjectClass: $.ASN1Decoder<ObjectClass> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClass
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClass} The decoded data structure.
 */
export function _decode_ObjectClass(el: _Element) {
  if (!_cached_decoder_for_ObjectClass) {
    _cached_decoder_for_ObjectClass = $._decode_inextensible_choice<ObjectClass>(
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
  return _cached_decoder_for_ObjectClass(el);
}


let _cached_encoder_for_ObjectClass: $.ASN1Encoder<ObjectClass> | null = null;


/**
 * @summary Encodes a(n) ObjectClass into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClass, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClass(
  value: ObjectClass,
  elGetter: $.ASN1Encoder<ObjectClass>
) {
  if (!_cached_encoder_for_ObjectClass) {
    _cached_encoder_for_ObjectClass = $._encode_choice<ObjectClass>(
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
  return _cached_encoder_for_ObjectClass(value, elGetter);
}


/* eslint-enable */

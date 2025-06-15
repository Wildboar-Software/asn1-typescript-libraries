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
  AttributeIdError,
  _decode_AttributeIdError,
  _encode_AttributeIdError,
} from '../CMIP-1/AttributeIdError.ta.mjs';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.mjs';

/**
 * @summary GetInfoStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetInfoStatus  ::=  CHOICE {
 *   attributeIdError  [0] IMPLICIT AttributeIdError,
 *   attribute         [1] IMPLICIT Attribute
 * }
 * ```
 */
export type GetInfoStatus =
  | { attributeIdError: AttributeIdError } /* CHOICE_ALT_ROOT */
  | { attribute: Attribute } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_GetInfoStatus: $.ASN1Decoder<GetInfoStatus> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GetInfoStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetInfoStatus} The decoded data structure.
 */
export function _decode_GetInfoStatus(el: _Element) {
  if (!_cached_decoder_for_GetInfoStatus) {
    _cached_decoder_for_GetInfoStatus = $._decode_inextensible_choice<GetInfoStatus>(
      {
        'CONTEXT 0': [
          'attributeIdError',
          $._decode_implicit<AttributeIdError>(() => _decode_AttributeIdError),
        ],
        'CONTEXT 1': [
          'attribute',
          $._decode_implicit<Attribute>(() => _decode_Attribute),
        ],
      }
    );
  }
  return _cached_decoder_for_GetInfoStatus(el);
}


let _cached_encoder_for_GetInfoStatus: $.ASN1Encoder<GetInfoStatus> | null = null;


/**
 * @summary Encodes a(n) GetInfoStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetInfoStatus, encoded as an ASN.1 Element.
 */
export function _encode_GetInfoStatus(
  value: GetInfoStatus,
  elGetter: $.ASN1Encoder<GetInfoStatus>
) {
  if (!_cached_encoder_for_GetInfoStatus) {
    _cached_encoder_for_GetInfoStatus = $._encode_choice<GetInfoStatus>(
      {
        attributeIdError: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_AttributeIdError,
          $.BER
        ),
        attribute: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_Attribute,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_GetInfoStatus(value, elGetter);
}


/* eslint-enable */

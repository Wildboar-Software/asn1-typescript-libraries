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
  AttributeError,
  _decode_AttributeError,
  _encode_AttributeError,
} from '../CMIP-1/AttributeError.ta.mjs';
import {
  Attribute,
  _decode_Attribute,
  _encode_Attribute,
} from '../CMIP-1/Attribute.ta.mjs';

/**
 * @summary SetInfoStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetInfoStatus  ::=  CHOICE {
 *   attributeError  [0] IMPLICIT AttributeError,
 *   attribute       [1] IMPLICIT Attribute
 * }
 * ```
 */
export type SetInfoStatus =
  | { attributeError: AttributeError } /* CHOICE_ALT_ROOT */
  | { attribute: Attribute } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_SetInfoStatus: $.ASN1Decoder<SetInfoStatus> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SetInfoStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetInfoStatus} The decoded data structure.
 */
export function _decode_SetInfoStatus(el: _Element): SetInfoStatus {
  if (!_cached_decoder_for_SetInfoStatus) {
    _cached_decoder_for_SetInfoStatus = $._decode_inextensible_choice<SetInfoStatus>(
      {
        'CONTEXT 0': [
          'attributeError',
          $._decode_implicit<AttributeError>(() => _decode_AttributeError),
        ],
        'CONTEXT 1': [
          'attribute',
          $._decode_implicit<Attribute>(() => _decode_Attribute),
        ],
      }
    );
  }
  return _cached_decoder_for_SetInfoStatus(el);
}


let _cached_encoder_for_SetInfoStatus: $.ASN1Encoder<SetInfoStatus> | null = null;


/**
 * @summary Encodes a(n) SetInfoStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetInfoStatus, encoded as an ASN.1 Element.
 */
export function _encode_SetInfoStatus(
  value: SetInfoStatus,
  elGetter: $.ASN1Encoder<SetInfoStatus>
): _Element {
  if (!_cached_encoder_for_SetInfoStatus) {
    _cached_encoder_for_SetInfoStatus = $._encode_choice<SetInfoStatus>(
      {
        attributeError: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_AttributeError,
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
  return _cached_encoder_for_SetInfoStatus(value, elGetter);
}


/* eslint-enable */

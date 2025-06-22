/* eslint-disable */
import {
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
import {
  DistinguishedName,
  _decode_DistinguishedName,
  _encode_DistinguishedName,
} from '../CMIP-1/DistinguishedName.ta.mjs';
import {
  RDNSequence,
  _decode_RDNSequence,
  _encode_RDNSequence,
} from '../CMIP-1/RDNSequence.ta.mjs';

/**
 * @summary ObjectInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectInstance  ::=  CHOICE {
 *   distinguishedName       [2] IMPLICIT DistinguishedName,
 *   nonSpecificForm         [3] IMPLICIT OCTET STRING,
 *   localDistinguishedName  [4] IMPLICIT RDNSequence
 * }
 * ```
 */
export type ObjectInstance =
  | { distinguishedName: DistinguishedName } /* CHOICE_ALT_ROOT */
  | { nonSpecificForm: OCTET_STRING } /* CHOICE_ALT_ROOT */
  | { localDistinguishedName: RDNSequence } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ObjectInstance: $.ASN1Decoder<ObjectInstance> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectInstance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectInstance} The decoded data structure.
 */
export function _decode_ObjectInstance(el: _Element) {
  if (!_cached_decoder_for_ObjectInstance) {
    _cached_decoder_for_ObjectInstance = $._decode_inextensible_choice<ObjectInstance>(
      {
        'CONTEXT 2': [
          'distinguishedName',
          $._decode_implicit<DistinguishedName>(
            () => _decode_DistinguishedName
          ),
        ],
        'CONTEXT 3': [
          'nonSpecificForm',
          $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString),
        ],
        'CONTEXT 4': [
          'localDistinguishedName',
          $._decode_implicit<RDNSequence>(() => _decode_RDNSequence),
        ],
      }
    );
  }
  return _cached_decoder_for_ObjectInstance(el);
}


let _cached_encoder_for_ObjectInstance: $.ASN1Encoder<ObjectInstance> | null = null;


/**
 * @summary Encodes a(n) ObjectInstance into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectInstance, encoded as an ASN.1 Element.
 */
export function _encode_ObjectInstance(
  value: ObjectInstance,
  elGetter: $.ASN1Encoder<ObjectInstance>
) {
  if (!_cached_encoder_for_ObjectInstance) {
    _cached_encoder_for_ObjectInstance = $._encode_choice<ObjectInstance>(
      {
        distinguishedName: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_DistinguishedName,
          $.BER
        ),
        nonSpecificForm: $._encode_implicit(
          _TagClass.context,
          3,
          () => $._encodeOctetString,
          $.BER
        ),
        localDistinguishedName: $._encode_implicit(
          _TagClass.context,
          4,
          () => _encode_RDNSequence,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_ObjectInstance(value, elGetter);
}


/* eslint-enable */

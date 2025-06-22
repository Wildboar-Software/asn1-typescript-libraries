/* eslint-disable */
import {
  NULL,
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
  User_Identity,
  _decode_User_Identity,
  _encode_User_Identity,
} from '../ISO8571-FTAM/User-Identity.ta.mjs';

/**
 * @summary User_Identity_Attribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-Identity-Attribute  ::=  CHOICE {
 *   no-value-available  [0] IMPLICIT NULL,
 *   -- Indicates partial support of this attribute.
 *   -- This value shall only appear in response PDUs.
 *   actual-values       User-Identity
 * }
 * ```
 */
export type User_Identity_Attribute =
  | { no_value_available: NULL } /* CHOICE_ALT_ROOT */
  | { actual_values: User_Identity } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_User_Identity_Attribute: $.ASN1Decoder<User_Identity_Attribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) User_Identity_Attribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_Identity_Attribute} The decoded data structure.
 */
export function _decode_User_Identity_Attribute(el: _Element) {
  if (!_cached_decoder_for_User_Identity_Attribute) {
    _cached_decoder_for_User_Identity_Attribute = $._decode_inextensible_choice<User_Identity_Attribute>(
      {
        'CONTEXT 0': [
          'no_value_available',
          $._decode_implicit<NULL>(() => $._decodeNull),
        ],
        'APPLICATION 22': ['actual_values', _decode_User_Identity],
      }
    );
  }
  return _cached_decoder_for_User_Identity_Attribute(el);
}


let _cached_encoder_for_User_Identity_Attribute: $.ASN1Encoder<User_Identity_Attribute> | null = null;


/**
 * @summary Encodes a(n) User_Identity_Attribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_Identity_Attribute, encoded as an ASN.1 Element.
 */
export function _encode_User_Identity_Attribute(
  value: User_Identity_Attribute,
  elGetter: $.ASN1Encoder<User_Identity_Attribute>
) {
  if (!_cached_encoder_for_User_Identity_Attribute) {
    _cached_encoder_for_User_Identity_Attribute = $._encode_choice<User_Identity_Attribute>(
      {
        no_value_available: $._encode_implicit(
          _TagClass.context,
          0,
          () => $._encodeNull,
          $.BER
        ),
        actual_values: _encode_User_Identity,
      },
      $.BER
    );
  }
  return _cached_encoder_for_User_Identity_Attribute(value, elGetter);
}


/* eslint-enable */

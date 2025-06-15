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
  User_information,
  _decode_User_information,
  _encode_User_information,
} from '../ACSE-1/User-information.ta.mjs';
import {
  Simply_encoded_data,
  _decode_Simply_encoded_data,
  _encode_Simply_encoded_data,
} from '../ACSE-1/Simply-encoded-data.ta.mjs';
import {
  PDV_list,
  _decode_PDV_list,
  _encode_PDV_list,
} from '../ACSE-1/PDV-list.ta.mjs';
/**
 * @summary User_Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-Data  ::=  CHOICE {
 *   user-information     User-information,
 *   simply-encoded-data  Simply-encoded-data,
 *   fully-encoded-data   [0]  PDV-list
 * }
 * ```
 */
export type User_Data =
  | { user_information: User_information } /* CHOICE_ALT_ROOT */
  | { simply_encoded_data: Simply_encoded_data } /* CHOICE_ALT_ROOT */
  | { fully_encoded_data: PDV_list } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_User_Data: $.ASN1Decoder<User_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) User_Data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_Data} The decoded data structure.
 */
export function _decode_User_Data(el: _Element) {
  if (!_cached_decoder_for_User_Data) {
    _cached_decoder_for_User_Data = $._decode_inextensible_choice<User_Data>({
      'UNIVERSAL 16': ['user_information', _decode_User_information],
      'UNIVERSAL 4': ['simply_encoded_data', _decode_Simply_encoded_data],
      'CONTEXT 0': [
        'fully_encoded_data',
        $._decode_implicit<PDV_list>(() => _decode_PDV_list),
      ],
    });
  }
  return _cached_decoder_for_User_Data(el);
}

let _cached_encoder_for_User_Data: $.ASN1Encoder<User_Data> | null = null;

/**
 * @summary Encodes a(n) User_Data into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_Data, encoded as an ASN.1 Element.
 */
export function _encode_User_Data(
  value: User_Data,
  elGetter: $.ASN1Encoder<User_Data>
) {
  if (!_cached_encoder_for_User_Data) {
    _cached_encoder_for_User_Data = $._encode_choice<User_Data>(
      {
        user_information: _encode_User_information,
        simply_encoded_data: _encode_Simply_encoded_data,
        fully_encoded_data: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_PDV_list,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_User_Data(value, elGetter);
}


/* eslint-enable */

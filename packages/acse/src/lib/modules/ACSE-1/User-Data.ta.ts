/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  User_information,
  _decode_User_information,
  _encode_User_information,
} from '../ACSE-1/User-information.ta';
export {
  User_information,
  _decode_User_information,
  _encode_User_information,
} from '../ACSE-1/User-information.ta';
import {
  Simply_encoded_data,
  _decode_Simply_encoded_data,
  _encode_Simply_encoded_data,
} from '../ACSE-1/Simply-encoded-data.ta';
export {
  Simply_encoded_data,
  _decode_Simply_encoded_data,
  _encode_Simply_encoded_data,
} from '../ACSE-1/Simply-encoded-data.ta';
import {
  PDV_list,
  _decode_PDV_list,
  _encode_PDV_list,
} from '../ACSE-1/PDV-list.ta';
export {
  PDV_list,
  _decode_PDV_list,
  _encode_PDV_list,
} from '../ACSE-1/PDV-list.ta';

/* START_OF_SYMBOL_DEFINITION User_Data */
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
/* END_OF_SYMBOL_DEFINITION User_Data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_User_Data */
let _cached_decoder_for_User_Data: $.ASN1Decoder<User_Data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_User_Data */

/* START_OF_SYMBOL_DEFINITION _decode_User_Data */
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
/* END_OF_SYMBOL_DEFINITION _decode_User_Data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_User_Data */
let _cached_encoder_for_User_Data: $.ASN1Encoder<User_Data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_User_Data */

/* START_OF_SYMBOL_DEFINITION _encode_User_Data */
/**
 * @summary Encodes a(n) User_Data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_User_Data */

/* eslint-enable */

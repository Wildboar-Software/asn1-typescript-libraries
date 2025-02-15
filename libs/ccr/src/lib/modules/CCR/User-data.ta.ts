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

/* START_OF_SYMBOL_DEFINITION User_data */
/**
 * @summary User_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-data  ::=  [30]  SEQUENCE OF EXTERNAL
 * ```
 */
export type User_data = EXTERNAL[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION User_data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_User_data */
let _cached_decoder_for_User_data: $.ASN1Decoder<User_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_User_data */

/* START_OF_SYMBOL_DEFINITION _decode_User_data */
/**
 * @summary Decodes an ASN.1 element into a(n) User_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_data} The decoded data structure.
 */
export function _decode_User_data(el: _Element) {
  if (!_cached_decoder_for_User_data) {
    _cached_decoder_for_User_data = $._decode_implicit<User_data>(() =>
      $._decodeSequenceOf<EXTERNAL>(() => $._decodeExternal)
    );
  }
  return _cached_decoder_for_User_data(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_User_data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_User_data */
let _cached_encoder_for_User_data: $.ASN1Encoder<User_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_User_data */

/* START_OF_SYMBOL_DEFINITION _encode_User_data */
/**
 * @summary Encodes a(n) User_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_data, encoded as an ASN.1 Element.
 */
export function _encode_User_data(
  value: User_data,
  elGetter: $.ASN1Encoder<User_data>
) {
  if (!_cached_encoder_for_User_data) {
    _cached_encoder_for_User_data = $._encode_implicit(
      _TagClass.context,
      30,
      () => $._encodeSequenceOf<EXTERNAL>(() => $._encodeExternal, $.BER),
      $.BER
    );
  }
  return _cached_encoder_for_User_data(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_User_data */

/* eslint-enable */

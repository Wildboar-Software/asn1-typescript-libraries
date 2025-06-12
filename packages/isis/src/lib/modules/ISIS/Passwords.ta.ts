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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISIS/Password.ta.js';
export {
  Password,
  _decode_Password,
  _encode_Password,
} from '../ISIS/Password.ta.js';

/* START_OF_SYMBOL_DEFINITION Passwords */
/**
 * @summary Passwords
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Passwords  ::=  SET OF Password
 * ```
 */
export type Passwords = Password[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Passwords */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Passwords */
let _cached_decoder_for_Passwords: $.ASN1Decoder<Passwords> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Passwords */

/* START_OF_SYMBOL_DEFINITION _decode_Passwords */
/**
 * @summary Decodes an ASN.1 element into a(n) Passwords
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Passwords} The decoded data structure.
 */
export function _decode_Passwords(el: _Element) {
  if (!_cached_decoder_for_Passwords) {
    _cached_decoder_for_Passwords = $._decodeSetOf<Password>(
      () => _decode_Password
    );
  }
  return _cached_decoder_for_Passwords(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Passwords */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Passwords */
let _cached_encoder_for_Passwords: $.ASN1Encoder<Passwords> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Passwords */

/* START_OF_SYMBOL_DEFINITION _encode_Passwords */
/**
 * @summary Encodes a(n) Passwords into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Passwords, encoded as an ASN.1 Element.
 */
export function _encode_Passwords(
  value: Passwords,
  elGetter: $.ASN1Encoder<Passwords>
) {
  if (!_cached_encoder_for_Passwords) {
    _cached_encoder_for_Passwords = $._encodeSetOf<Password>(
      () => _encode_Password,
      $.BER
    );
  }
  return _cached_encoder_for_Passwords(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Passwords */

/* eslint-enable */

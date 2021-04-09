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
  KerberosString,
  _decode_KerberosString,
  _encode_KerberosString,
} from '../KerberosV5Spec2/KerberosString.ta';
export {
  KerberosString,
  _decode_KerberosString,
  _encode_KerberosString,
} from '../KerberosV5Spec2/KerberosString.ta';

/* START_OF_SYMBOL_DEFINITION Realm */
/**
 * @summary Realm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Realm            ::=  KerberosString
 * ```
 */
export type Realm = KerberosString; // DefinedType
/* END_OF_SYMBOL_DEFINITION Realm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Realm */
let _cached_decoder_for_Realm: $.ASN1Decoder<Realm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Realm */

/* START_OF_SYMBOL_DEFINITION _decode_Realm */
/**
 * @summary Decodes an ASN.1 element into a(n) Realm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Realm} The decoded data structure.
 */
export function _decode_Realm(el: _Element) {
  if (!_cached_decoder_for_Realm) {
    _cached_decoder_for_Realm = _decode_KerberosString;
  }
  return _cached_decoder_for_Realm(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Realm */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Realm */
let _cached_encoder_for_Realm: $.ASN1Encoder<Realm> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Realm */

/* START_OF_SYMBOL_DEFINITION _encode_Realm */
/**
 * @summary Encodes a(n) Realm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Realm, encoded as an ASN.1 Element.
 */
export function _encode_Realm(value: Realm, elGetter: $.ASN1Encoder<Realm>) {
  if (!_cached_encoder_for_Realm) {
    _cached_encoder_for_Realm = _encode_KerberosString;
  }
  return _cached_encoder_for_Realm(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Realm */

/* eslint-enable */

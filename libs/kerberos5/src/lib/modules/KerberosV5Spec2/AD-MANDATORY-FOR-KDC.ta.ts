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
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta';
export {
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta';

/* START_OF_SYMBOL_DEFINITION AD_MANDATORY_FOR_KDC */
/**
 * @summary AD_MANDATORY_FOR_KDC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AD-MANDATORY-FOR-KDC     ::=  AuthorizationData
 * ```
 */
export type AD_MANDATORY_FOR_KDC = AuthorizationData; // DefinedType
/* END_OF_SYMBOL_DEFINITION AD_MANDATORY_FOR_KDC */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AD_MANDATORY_FOR_KDC */
let _cached_decoder_for_AD_MANDATORY_FOR_KDC: $.ASN1Decoder<AD_MANDATORY_FOR_KDC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AD_MANDATORY_FOR_KDC */

/* START_OF_SYMBOL_DEFINITION _decode_AD_MANDATORY_FOR_KDC */
/**
 * @summary Decodes an ASN.1 element into a(n) AD_MANDATORY_FOR_KDC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_MANDATORY_FOR_KDC} The decoded data structure.
 */
export function _decode_AD_MANDATORY_FOR_KDC(el: _Element) {
  if (!_cached_decoder_for_AD_MANDATORY_FOR_KDC) {
    _cached_decoder_for_AD_MANDATORY_FOR_KDC = _decode_AuthorizationData;
  }
  return _cached_decoder_for_AD_MANDATORY_FOR_KDC(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AD_MANDATORY_FOR_KDC */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AD_MANDATORY_FOR_KDC */
let _cached_encoder_for_AD_MANDATORY_FOR_KDC: $.ASN1Encoder<AD_MANDATORY_FOR_KDC> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AD_MANDATORY_FOR_KDC */

/* START_OF_SYMBOL_DEFINITION _encode_AD_MANDATORY_FOR_KDC */
/**
 * @summary Encodes a(n) AD_MANDATORY_FOR_KDC into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_MANDATORY_FOR_KDC, encoded as an ASN.1 Element.
 */
export function _encode_AD_MANDATORY_FOR_KDC(
  value: AD_MANDATORY_FOR_KDC,
  elGetter: $.ASN1Encoder<AD_MANDATORY_FOR_KDC>
) {
  if (!_cached_encoder_for_AD_MANDATORY_FOR_KDC) {
    _cached_encoder_for_AD_MANDATORY_FOR_KDC = _encode_AuthorizationData;
  }
  return _cached_encoder_for_AD_MANDATORY_FOR_KDC(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AD_MANDATORY_FOR_KDC */

/* eslint-enable */

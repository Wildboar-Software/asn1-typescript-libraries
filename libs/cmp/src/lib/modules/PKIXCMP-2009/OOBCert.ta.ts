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
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta';
export {
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta';

/* START_OF_SYMBOL_DEFINITION OOBCert */
/**
 * @summary OOBCert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OOBCert  ::=  CMPCertificate
 * ```
 */
export type OOBCert = CMPCertificate; // DefinedType
/* END_OF_SYMBOL_DEFINITION OOBCert */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OOBCert */
let _cached_decoder_for_OOBCert: $.ASN1Decoder<OOBCert> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OOBCert */

/* START_OF_SYMBOL_DEFINITION _decode_OOBCert */
/**
 * @summary Decodes an ASN.1 element into a(n) OOBCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OOBCert} The decoded data structure.
 */
export function _decode_OOBCert(el: _Element) {
  if (!_cached_decoder_for_OOBCert) {
    _cached_decoder_for_OOBCert = _decode_CMPCertificate;
  }
  return _cached_decoder_for_OOBCert(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OOBCert */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OOBCert */
let _cached_encoder_for_OOBCert: $.ASN1Encoder<OOBCert> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OOBCert */

/* START_OF_SYMBOL_DEFINITION _encode_OOBCert */
/**
 * @summary Encodes a(n) OOBCert into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OOBCert, encoded as an ASN.1 Element.
 */
export function _encode_OOBCert(
  value: OOBCert,
  elGetter: $.ASN1Encoder<OOBCert>
) {
  if (!_cached_encoder_for_OOBCert) {
    _cached_encoder_for_OOBCert = _encode_CMPCertificate;
  }
  return _cached_encoder_for_OOBCert(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OOBCert */

/* eslint-enable */

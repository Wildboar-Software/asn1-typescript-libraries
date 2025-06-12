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
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';
export {
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CertAnnContent */
/**
 * @summary CertAnnContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertAnnContent  ::=  CMPCertificate
 * ```
 */
export type CertAnnContent = CMPCertificate; // DefinedType
/* END_OF_SYMBOL_DEFINITION CertAnnContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertAnnContent */
let _cached_decoder_for_CertAnnContent: $.ASN1Decoder<CertAnnContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertAnnContent */

/* START_OF_SYMBOL_DEFINITION _decode_CertAnnContent */
/**
 * @summary Decodes an ASN.1 element into a(n) CertAnnContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertAnnContent} The decoded data structure.
 */
export function _decode_CertAnnContent(el: _Element) {
  if (!_cached_decoder_for_CertAnnContent) {
    _cached_decoder_for_CertAnnContent = _decode_CMPCertificate;
  }
  return _cached_decoder_for_CertAnnContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertAnnContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertAnnContent */
let _cached_encoder_for_CertAnnContent: $.ASN1Encoder<CertAnnContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertAnnContent */

/* START_OF_SYMBOL_DEFINITION _encode_CertAnnContent */
/**
 * @summary Encodes a(n) CertAnnContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertAnnContent, encoded as an ASN.1 Element.
 */
export function _encode_CertAnnContent(
  value: CertAnnContent,
  elGetter: $.ASN1Encoder<CertAnnContent>
) {
  if (!_cached_encoder_for_CertAnnContent) {
    _cached_encoder_for_CertAnnContent = _encode_CMPCertificate;
  }
  return _cached_encoder_for_CertAnnContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertAnnContent */

/* eslint-enable */

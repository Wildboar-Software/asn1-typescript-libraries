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
  Certificate,
  _decode_Certificate,
  _encode_Certificate,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta';

/* START_OF_SYMBOL_DEFINITION CMPCertificate */
/**
 * @summary CMPCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMPCertificate  ::=  CHOICE { x509v3PKCert Certificate, ... }
 * ```
 */
export type CMPCertificate =
  | { x509v3PKCert: Certificate } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CMPCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMPCertificate */
let _cached_decoder_for_CMPCertificate: $.ASN1Decoder<CMPCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMPCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_CMPCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) CMPCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMPCertificate} The decoded data structure.
 */
export function _decode_CMPCertificate(el: _Element) {
  if (!_cached_decoder_for_CMPCertificate) {
    _cached_decoder_for_CMPCertificate = $._decode_extensible_choice<CMPCertificate>(
      {
        'UNIVERSAL 16': ['x509v3PKCert', _decode_Certificate],
      }
    );
  }
  return _cached_decoder_for_CMPCertificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CMPCertificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMPCertificate */
let _cached_encoder_for_CMPCertificate: $.ASN1Encoder<CMPCertificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMPCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_CMPCertificate */
/**
 * @summary Encodes a(n) CMPCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMPCertificate, encoded as an ASN.1 Element.
 */
export function _encode_CMPCertificate(
  value: CMPCertificate,
  elGetter: $.ASN1Encoder<CMPCertificate>
) {
  if (!_cached_encoder_for_CMPCertificate) {
    _cached_encoder_for_CMPCertificate = $._encode_choice<CMPCertificate>(
      {
        x509v3PKCert: _encode_Certificate,
      },
      $.BER
    );
  }
  return _cached_encoder_for_CMPCertificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CMPCertificate */

/* eslint-enable */

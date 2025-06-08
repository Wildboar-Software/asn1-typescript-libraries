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

/* START_OF_SYMBOL_DEFINITION CertBundle */
/**
 * @summary CertBundle
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertBundle  ::=  SEQUENCE SIZE (1..MAX) OF Certificate
 * ```
 */
export type CertBundle = Certificate[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertBundle */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBundle */
let _cached_decoder_for_CertBundle: $.ASN1Decoder<CertBundle> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBundle */

/* START_OF_SYMBOL_DEFINITION _decode_CertBundle */
/**
 * @summary Decodes an ASN.1 element into a(n) CertBundle
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertBundle} The decoded data structure.
 */
export function _decode_CertBundle(el: _Element) {
  if (!_cached_decoder_for_CertBundle) {
    _cached_decoder_for_CertBundle = $._decodeSequenceOf<Certificate>(
      () => _decode_Certificate
    );
  }
  return _cached_decoder_for_CertBundle(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertBundle */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBundle */
let _cached_encoder_for_CertBundle: $.ASN1Encoder<CertBundle> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBundle */

/* START_OF_SYMBOL_DEFINITION _encode_CertBundle */
/**
 * @summary Encodes a(n) CertBundle into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBundle, encoded as an ASN.1 Element.
 */
export function _encode_CertBundle(
  value: CertBundle,
  elGetter: $.ASN1Encoder<CertBundle>
) {
  if (!_cached_encoder_for_CertBundle) {
    _cached_encoder_for_CertBundle = $._encodeSequenceOf<Certificate>(
      () => _encode_Certificate,
      $.BER
    );
  }
  return _cached_encoder_for_CertBundle(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertBundle */

/* eslint-enable */

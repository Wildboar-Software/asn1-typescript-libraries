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
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta.mjs';
export {
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CertBundles */
/**
 * @summary CertBundles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertBundles  ::=  SEQUENCE SIZE (1..MAX) OF CertBundle
 * ```
 */
export type CertBundles = CertBundle[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertBundles */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBundles */
let _cached_decoder_for_CertBundles: $.ASN1Decoder<CertBundles> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertBundles */

/* START_OF_SYMBOL_DEFINITION _decode_CertBundles */
/**
 * @summary Decodes an ASN.1 element into a(n) CertBundles
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertBundles} The decoded data structure.
 */
export function _decode_CertBundles(el: _Element) {
  if (!_cached_decoder_for_CertBundles) {
    _cached_decoder_for_CertBundles = $._decodeSequenceOf<CertBundle>(
      () => _decode_CertBundle
    );
  }
  return _cached_decoder_for_CertBundles(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertBundles */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBundles */
let _cached_encoder_for_CertBundles: $.ASN1Encoder<CertBundles> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertBundles */

/* START_OF_SYMBOL_DEFINITION _encode_CertBundles */
/**
 * @summary Encodes a(n) CertBundles into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBundles, encoded as an ASN.1 Element.
 */
export function _encode_CertBundles(
  value: CertBundles,
  elGetter: $.ASN1Encoder<CertBundles>
) {
  if (!_cached_encoder_for_CertBundles) {
    _cached_encoder_for_CertBundles = $._encodeSequenceOf<CertBundle>(
      () => _encode_CertBundle,
      $.BER
    );
  }
  return _cached_encoder_for_CertBundles(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertBundles */

/* eslint-enable */

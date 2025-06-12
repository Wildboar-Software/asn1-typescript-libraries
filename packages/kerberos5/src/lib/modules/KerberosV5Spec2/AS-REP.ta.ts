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
  KDC_REP,
  _decode_KDC_REP,
  _encode_KDC_REP,
} from '../KerberosV5Spec2/KDC-REP.ta.js';
export {
  KDC_REP,
  _decode_KDC_REP,
  _encode_KDC_REP,
} from '../KerberosV5Spec2/KDC-REP.ta.js';

/* START_OF_SYMBOL_DEFINITION AS_REP */
/**
 * @summary AS_REP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AS-REP           ::=  [APPLICATION 11] KDC-REP
 * ```
 */
export type AS_REP = KDC_REP; // DefinedType
/* END_OF_SYMBOL_DEFINITION AS_REP */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AS_REP */
let _cached_decoder_for_AS_REP: $.ASN1Decoder<AS_REP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AS_REP */

/* START_OF_SYMBOL_DEFINITION _decode_AS_REP */
/**
 * @summary Decodes an ASN.1 element into a(n) AS_REP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AS_REP} The decoded data structure.
 */
export function _decode_AS_REP(el: _Element) {
  if (!_cached_decoder_for_AS_REP) {
    _cached_decoder_for_AS_REP = $._decode_implicit<AS_REP>(
      () => _decode_KDC_REP
    );
  }
  return _cached_decoder_for_AS_REP(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AS_REP */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AS_REP */
let _cached_encoder_for_AS_REP: $.ASN1Encoder<AS_REP> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AS_REP */

/* START_OF_SYMBOL_DEFINITION _encode_AS_REP */
/**
 * @summary Encodes a(n) AS_REP into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AS_REP, encoded as an ASN.1 Element.
 */
export function _encode_AS_REP(value: AS_REP, elGetter: $.ASN1Encoder<AS_REP>) {
  if (!_cached_encoder_for_AS_REP) {
    _cached_encoder_for_AS_REP = $._encode_implicit(
      _TagClass.application,
      11,
      () => _encode_KDC_REP,
      $.BER
    );
  }
  return _cached_encoder_for_AS_REP(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AS_REP */

/* eslint-enable */

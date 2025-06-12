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
  KDC_REQ,
  _decode_KDC_REQ,
  _encode_KDC_REQ,
} from '../KerberosV5Spec2/KDC-REQ.ta.mjs';
export {
  KDC_REQ,
  _decode_KDC_REQ,
  _encode_KDC_REQ,
} from '../KerberosV5Spec2/KDC-REQ.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TGS_REQ */
/**
 * @summary TGS_REQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TGS-REQ          ::=  [APPLICATION 12] KDC-REQ
 * ```
 */
export type TGS_REQ = KDC_REQ; // DefinedType
/* END_OF_SYMBOL_DEFINITION TGS_REQ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TGS_REQ */
let _cached_decoder_for_TGS_REQ: $.ASN1Decoder<TGS_REQ> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TGS_REQ */

/* START_OF_SYMBOL_DEFINITION _decode_TGS_REQ */
/**
 * @summary Decodes an ASN.1 element into a(n) TGS_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TGS_REQ} The decoded data structure.
 */
export function _decode_TGS_REQ(el: _Element) {
  if (!_cached_decoder_for_TGS_REQ) {
    _cached_decoder_for_TGS_REQ = $._decode_implicit<TGS_REQ>(
      () => _decode_KDC_REQ
    );
  }
  return _cached_decoder_for_TGS_REQ(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TGS_REQ */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TGS_REQ */
let _cached_encoder_for_TGS_REQ: $.ASN1Encoder<TGS_REQ> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TGS_REQ */

/* START_OF_SYMBOL_DEFINITION _encode_TGS_REQ */
/**
 * @summary Encodes a(n) TGS_REQ into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TGS_REQ, encoded as an ASN.1 Element.
 */
export function _encode_TGS_REQ(
  value: TGS_REQ,
  elGetter: $.ASN1Encoder<TGS_REQ>
) {
  if (!_cached_encoder_for_TGS_REQ) {
    _cached_encoder_for_TGS_REQ = $._encode_implicit(
      _TagClass.application,
      12,
      () => _encode_KDC_REQ,
      $.BER
    );
  }
  return _cached_encoder_for_TGS_REQ(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TGS_REQ */

/* eslint-enable */

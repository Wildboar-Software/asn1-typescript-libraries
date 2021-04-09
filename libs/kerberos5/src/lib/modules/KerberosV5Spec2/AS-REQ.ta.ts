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
  KDC_REQ,
  _decode_KDC_REQ,
  _encode_KDC_REQ,
} from '../KerberosV5Spec2/KDC-REQ.ta';
export {
  KDC_REQ,
  _decode_KDC_REQ,
  _encode_KDC_REQ,
} from '../KerberosV5Spec2/KDC-REQ.ta';

/* START_OF_SYMBOL_DEFINITION AS_REQ */
/**
 * @summary AS_REQ
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AS-REQ           ::=  [APPLICATION 10] KDC-REQ
 * ```
 */
export type AS_REQ = KDC_REQ; // DefinedType
/* END_OF_SYMBOL_DEFINITION AS_REQ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AS_REQ */
let _cached_decoder_for_AS_REQ: $.ASN1Decoder<AS_REQ> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AS_REQ */

/* START_OF_SYMBOL_DEFINITION _decode_AS_REQ */
/**
 * @summary Decodes an ASN.1 element into a(n) AS_REQ
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AS_REQ} The decoded data structure.
 */
export function _decode_AS_REQ(el: _Element) {
  if (!_cached_decoder_for_AS_REQ) {
    _cached_decoder_for_AS_REQ = $._decode_implicit<AS_REQ>(
      () => _decode_KDC_REQ
    );
  }
  return _cached_decoder_for_AS_REQ(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AS_REQ */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AS_REQ */
let _cached_encoder_for_AS_REQ: $.ASN1Encoder<AS_REQ> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AS_REQ */

/* START_OF_SYMBOL_DEFINITION _encode_AS_REQ */
/**
 * @summary Encodes a(n) AS_REQ into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AS_REQ, encoded as an ASN.1 Element.
 */
export function _encode_AS_REQ(value: AS_REQ, elGetter: $.ASN1Encoder<AS_REQ>) {
  if (!_cached_encoder_for_AS_REQ) {
    _cached_encoder_for_AS_REQ = $._encode_implicit(
      _TagClass.application,
      10,
      () => _encode_KDC_REQ,
      $.BER
    );
  }
  return _cached_encoder_for_AS_REQ(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AS_REQ */

/* eslint-enable */

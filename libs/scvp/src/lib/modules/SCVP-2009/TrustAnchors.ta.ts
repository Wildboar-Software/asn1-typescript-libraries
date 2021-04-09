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
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta';
export {
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta';

/* START_OF_SYMBOL_DEFINITION TrustAnchors */
/**
 * @summary TrustAnchors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustAnchors  ::=  SEQUENCE SIZE (1..MAX) OF PKCReference
 * ```
 */
export type TrustAnchors = PKCReference[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchors */
let _cached_decoder_for_TrustAnchors: $.ASN1Decoder<TrustAnchors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _decode_TrustAnchors */
/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchors} The decoded data structure.
 */
export function _decode_TrustAnchors(el: _Element) {
  if (!_cached_decoder_for_TrustAnchors) {
    _cached_decoder_for_TrustAnchors = $._decodeSequenceOf<PKCReference>(
      () => _decode_PKCReference
    );
  }
  return _cached_decoder_for_TrustAnchors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchors */
let _cached_encoder_for_TrustAnchors: $.ASN1Encoder<TrustAnchors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _encode_TrustAnchors */
/**
 * @summary Encodes a(n) TrustAnchors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchors, encoded as an ASN.1 Element.
 */
export function _encode_TrustAnchors(
  value: TrustAnchors,
  elGetter: $.ASN1Encoder<TrustAnchors>
) {
  if (!_cached_encoder_for_TrustAnchors) {
    _cached_encoder_for_TrustAnchors = $._encodeSequenceOf<PKCReference>(
      () => _encode_PKCReference,
      $.BER
    );
  }
  return _cached_encoder_for_TrustAnchors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrustAnchors */

/* eslint-enable */

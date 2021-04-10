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
  RunningBSPRemoteReference,
  _decode_RunningBSPRemoteReference,
  _encode_RunningBSPRemoteReference,
} from '../BIP/RunningBSPRemoteReference.ta';
export {
  RunningBSPRemoteReference,
  _decode_RunningBSPRemoteReference,
  _encode_RunningBSPRemoteReference,
} from '../BIP/RunningBSPRemoteReference.ta';

/* START_OF_SYMBOL_DEFINITION RunningBSPRemoteReferences */
/**
 * @summary RunningBSPRemoteReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RunningBSPRemoteReferences  ::=  SET OF reference RunningBSPRemoteReference
 * ```
 */
export type RunningBSPRemoteReferences = RunningBSPRemoteReference[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RunningBSPRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RunningBSPRemoteReferences */
let _cached_decoder_for_RunningBSPRemoteReferences: $.ASN1Decoder<RunningBSPRemoteReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RunningBSPRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _decode_RunningBSPRemoteReferences */
/**
 * @summary Decodes an ASN.1 element into a(n) RunningBSPRemoteReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RunningBSPRemoteReferences} The decoded data structure.
 */
export function _decode_RunningBSPRemoteReferences(el: _Element) {
  if (!_cached_decoder_for_RunningBSPRemoteReferences) {
    _cached_decoder_for_RunningBSPRemoteReferences = $._decodeSetOf<RunningBSPRemoteReference>(
      () => _decode_RunningBSPRemoteReference
    );
  }
  return _cached_decoder_for_RunningBSPRemoteReferences(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RunningBSPRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RunningBSPRemoteReferences */
let _cached_encoder_for_RunningBSPRemoteReferences: $.ASN1Encoder<RunningBSPRemoteReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RunningBSPRemoteReferences */

/* START_OF_SYMBOL_DEFINITION _encode_RunningBSPRemoteReferences */
/**
 * @summary Encodes a(n) RunningBSPRemoteReferences into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunningBSPRemoteReferences, encoded as an ASN.1 Element.
 */
export function _encode_RunningBSPRemoteReferences(
  value: RunningBSPRemoteReferences,
  elGetter: $.ASN1Encoder<RunningBSPRemoteReferences>
) {
  if (!_cached_encoder_for_RunningBSPRemoteReferences) {
    _cached_encoder_for_RunningBSPRemoteReferences = $._encodeSetOf<RunningBSPRemoteReference>(
      () => _encode_RunningBSPRemoteReference,
      $.BER
    );
  }
  return _cached_encoder_for_RunningBSPRemoteReferences(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RunningBSPRemoteReferences */

/* eslint-enable */

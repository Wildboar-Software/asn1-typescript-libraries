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

/* START_OF_SYMBOL_DEFINITION SubsystemId */
/**
 * @summary SubsystemId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubsystemId  ::=  GraphicString
 * ```
 */
export type SubsystemId = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION SubsystemId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubsystemId */
let _cached_decoder_for_SubsystemId: $.ASN1Decoder<SubsystemId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubsystemId */

/* START_OF_SYMBOL_DEFINITION _decode_SubsystemId */
/**
 * @summary Decodes an ASN.1 element into a(n) SubsystemId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubsystemId} The decoded data structure.
 */
export function _decode_SubsystemId(el: _Element) {
  if (!_cached_decoder_for_SubsystemId) {
    _cached_decoder_for_SubsystemId = $._decodeGraphicString;
  }
  return _cached_decoder_for_SubsystemId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubsystemId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubsystemId */
let _cached_encoder_for_SubsystemId: $.ASN1Encoder<SubsystemId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubsystemId */

/* START_OF_SYMBOL_DEFINITION _encode_SubsystemId */
/**
 * @summary Encodes a(n) SubsystemId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubsystemId, encoded as an ASN.1 Element.
 */
export function _encode_SubsystemId(
  value: SubsystemId,
  elGetter: $.ASN1Encoder<SubsystemId>
) {
  if (!_cached_encoder_for_SubsystemId) {
    _cached_encoder_for_SubsystemId = $._encodeGraphicString;
  }
  return _cached_encoder_for_SubsystemId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubsystemId */

/* eslint-enable */

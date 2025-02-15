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
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/ROS.ta';

/* START_OF_SYMBOL_DEFINITION ROSEapdus */
/**
 * @summary ROSEapdus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROSEapdus  ::=
 *   ROS{{InvokeIDType}, {CMIP-Operations}, {CMIP-Confirmed-Operations}}
 * ```
 */
export type ROSEapdus = ROS; // DefinedType
/* END_OF_SYMBOL_DEFINITION ROSEapdus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ROSEapdus */
let _cached_decoder_for_ROSEapdus: $.ASN1Decoder<ROSEapdus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ROSEapdus */

/* START_OF_SYMBOL_DEFINITION _decode_ROSEapdus */
/**
 * @summary Decodes an ASN.1 element into a(n) ROSEapdus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ROSEapdus} The decoded data structure.
 */
export function _decode_ROSEapdus(el: _Element) {
  if (!_cached_decoder_for_ROSEapdus) {
    _cached_decoder_for_ROSEapdus = _decode_ROS;
  }
  return _cached_decoder_for_ROSEapdus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ROSEapdus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ROSEapdus */
let _cached_encoder_for_ROSEapdus: $.ASN1Encoder<ROSEapdus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ROSEapdus */

/* START_OF_SYMBOL_DEFINITION _encode_ROSEapdus */
/**
 * @summary Encodes a(n) ROSEapdus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROSEapdus, encoded as an ASN.1 Element.
 */
export function _encode_ROSEapdus(
  value: ROSEapdus,
  elGetter: $.ASN1Encoder<ROSEapdus>
) {
  if (!_cached_encoder_for_ROSEapdus) {
    _cached_encoder_for_ROSEapdus = _encode_ROS;
  }
  return _cached_encoder_for_ROSEapdus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ROSEapdus */

/* eslint-enable */

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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
export {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta';
import {
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '../Remote-Operations-Generic-ROS-PDUs/ROS.ta';
export {
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '../Remote-Operations-Generic-ROS-PDUs/ROS.ta';

/* START_OF_SYMBOL_DEFINITION ROS_SingleAS */
/**
 * @summary ROS_SingleAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROS-SingleAS{InvokeId:InvokeIdSet, OPERATION-PACKAGE:package}  ::=
 *   ROS{{InvokeIdSet}, {AllOperations  {package}}, {AllOperations  {package}}}
 * ```
 */
export type ROS_SingleAS = ROS; // DefinedType
/* END_OF_SYMBOL_DEFINITION ROS_SingleAS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS_SingleAS */
let _cached_decoder_for_ROS_SingleAS: $.ASN1Decoder<ROS_SingleAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS_SingleAS */

/* START_OF_SYMBOL_DEFINITION _decode_ROS_SingleAS */
/**
 * @summary Decodes an ASN.1 element into a(n) ROS_SingleAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ROS_SingleAS} The decoded data structure.
 */
export function _decode_ROS_SingleAS(el: _Element) {
  if (!_cached_decoder_for_ROS_SingleAS) {
    _cached_decoder_for_ROS_SingleAS = _decode_ROS;
  }
  return _cached_decoder_for_ROS_SingleAS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ROS_SingleAS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS_SingleAS */
let _cached_encoder_for_ROS_SingleAS: $.ASN1Encoder<ROS_SingleAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS_SingleAS */

/* START_OF_SYMBOL_DEFINITION _encode_ROS_SingleAS */
/**
 * @summary Encodes a(n) ROS_SingleAS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS_SingleAS, encoded as an ASN.1 Element.
 */
export function _encode_ROS_SingleAS(
  value: ROS_SingleAS,
  elGetter: $.ASN1Encoder<ROS_SingleAS>
) {
  if (!_cached_encoder_for_ROS_SingleAS) {
    _cached_encoder_for_ROS_SingleAS = _encode_ROS;
  }
  return _cached_encoder_for_ROS_SingleAS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ROS_SingleAS */

/* eslint-enable */

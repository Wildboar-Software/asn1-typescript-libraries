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
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.js';
export {
  InvokeId,
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.js';
import {
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '../Remote-Operations-Generic-ROS-PDUs/ROS.ta.js';
export {
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '../Remote-Operations-Generic-ROS-PDUs/ROS.ta.js';

/* START_OF_SYMBOL_DEFINITION ROS_SupplierAS */
/**
 * @summary ROS_SupplierAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROS-SupplierAS{InvokeId:ROSEInvokeIds, OPERATION-PACKAGE:package}  ::=
 *   ROS
 *     {{ROSEInvokeIds}, {SupplierPerforms  {package}},
 *     {ConsumerPerforms  {package}}}
 * ```
 */
export type ROS_SupplierAS = ROS; // DefinedType
/* END_OF_SYMBOL_DEFINITION ROS_SupplierAS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS_SupplierAS */
let _cached_decoder_for_ROS_SupplierAS: $.ASN1Decoder<ROS_SupplierAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS_SupplierAS */

/* START_OF_SYMBOL_DEFINITION _decode_ROS_SupplierAS */
/**
 * @summary Decodes an ASN.1 element into a(n) ROS_SupplierAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ROS_SupplierAS} The decoded data structure.
 */
export function _decode_ROS_SupplierAS(el: _Element) {
  if (!_cached_decoder_for_ROS_SupplierAS) {
    _cached_decoder_for_ROS_SupplierAS = _decode_ROS;
  }
  return _cached_decoder_for_ROS_SupplierAS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ROS_SupplierAS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS_SupplierAS */
let _cached_encoder_for_ROS_SupplierAS: $.ASN1Encoder<ROS_SupplierAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS_SupplierAS */

/* START_OF_SYMBOL_DEFINITION _encode_ROS_SupplierAS */
/**
 * @summary Encodes a(n) ROS_SupplierAS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS_SupplierAS, encoded as an ASN.1 Element.
 */
export function _encode_ROS_SupplierAS(
  value: ROS_SupplierAS,
  elGetter: $.ASN1Encoder<ROS_SupplierAS>
) {
  if (!_cached_encoder_for_ROS_SupplierAS) {
    _cached_encoder_for_ROS_SupplierAS = _encode_ROS;
  }
  return _cached_encoder_for_ROS_SupplierAS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ROS_SupplierAS */

/* eslint-enable */

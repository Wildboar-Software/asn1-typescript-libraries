/* eslint-disable */
import {
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
  _decode_InvokeId,
  _encode_InvokeId,
} from '../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs';
import {
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs';

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


let _cached_decoder_for_ROS_SingleAS: $.ASN1Decoder<ROS_SingleAS> | null = null;


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


let _cached_encoder_for_ROS_SingleAS: $.ASN1Encoder<ROS_SingleAS> | null = null;


/**
 * @summary Encodes a(n) ROS_SingleAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */

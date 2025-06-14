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
/* START_OF_SYMBOL_DEFINITION ROS_ConsumerAS */
/**
 * @summary ROS_ConsumerAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROS-ConsumerAS{InvokeId:InvokeIdSet, OPERATION-PACKAGE:package}  ::=
 *   ROS
 *     {{InvokeIdSet}, {ConsumerPerforms  {package}},
 *     {SupplierPerforms  {package}}}
 * ```
 */
export type ROS_ConsumerAS = ROS; // DefinedType
/* END_OF_SYMBOL_DEFINITION ROS_ConsumerAS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS_ConsumerAS */
let _cached_decoder_for_ROS_ConsumerAS: $.ASN1Decoder<ROS_ConsumerAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ROS_ConsumerAS */

/* START_OF_SYMBOL_DEFINITION _decode_ROS_ConsumerAS */
/**
 * @summary Decodes an ASN.1 element into a(n) ROS_ConsumerAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ROS_ConsumerAS} The decoded data structure.
 */
export function _decode_ROS_ConsumerAS(el: _Element) {
  if (!_cached_decoder_for_ROS_ConsumerAS) {
    _cached_decoder_for_ROS_ConsumerAS = _decode_ROS;
  }
  return _cached_decoder_for_ROS_ConsumerAS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ROS_ConsumerAS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS_ConsumerAS */
let _cached_encoder_for_ROS_ConsumerAS: $.ASN1Encoder<ROS_ConsumerAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ROS_ConsumerAS */

/* START_OF_SYMBOL_DEFINITION _encode_ROS_ConsumerAS */
/**
 * @summary Encodes a(n) ROS_ConsumerAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS_ConsumerAS, encoded as an ASN.1 Element.
 */
export function _encode_ROS_ConsumerAS(
  value: ROS_ConsumerAS,
  elGetter: $.ASN1Encoder<ROS_ConsumerAS>
) {
  if (!_cached_encoder_for_ROS_ConsumerAS) {
    _cached_encoder_for_ROS_ConsumerAS = _encode_ROS;
  }
  return _cached_encoder_for_ROS_ConsumerAS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ROS_ConsumerAS */

/* eslint-enable */

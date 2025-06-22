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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  ROS,
  _decode_ROS,
  _encode_ROS,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs';


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


let _cached_decoder_for_ROSEapdus: $.ASN1Decoder<ROSEapdus> | null = null;


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


let _cached_encoder_for_ROSEapdus: $.ASN1Encoder<ROSEapdus> | null = null;


/**
 * @summary Encodes a(n) ROSEapdus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */

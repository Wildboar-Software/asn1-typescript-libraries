/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
import { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";


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
export
type ROS_ConsumerAS = ROS; // DefinedType

let _cached_decoder_for_ROS_ConsumerAS: $.ASN1Decoder<ROS_ConsumerAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ROS_ConsumerAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ROS_ConsumerAS (el: _Element): ROS_ConsumerAS {
    if (!_cached_decoder_for_ROS_ConsumerAS) { _cached_decoder_for_ROS_ConsumerAS = _decode_ROS; }
    return _cached_decoder_for_ROS_ConsumerAS(el);
}

let _cached_encoder_for_ROS_ConsumerAS: $.ASN1Encoder<ROS_ConsumerAS> | null = null;

/**
 * @summary Encodes a(n) ROS_ConsumerAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS_ConsumerAS, encoded as an ASN.1 Element.
 */
export
function _encode_ROS_ConsumerAS (value: ROS_ConsumerAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ROS_ConsumerAS) { _cached_encoder_for_ROS_ConsumerAS = _encode_ROS; }
    return _cached_encoder_for_ROS_ConsumerAS(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
import { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";


/**
 * @summary ROS_SupplierAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ROS-SupplierAS{InvokeId:InvokeIdSet, OPERATION-PACKAGE:package}  ::= 
 *   ROS
 *     {{InvokeIdSet}, {SupplierPerforms  {package}},
 *     {ConsumerPerforms  {package}}}
 * ```
 */
export
type ROS_SupplierAS = ROS; // DefinedType

let _cached_decoder_for_ROS_SupplierAS: $.ASN1Decoder<ROS_SupplierAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ROS_SupplierAS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ROS_SupplierAS (el: _Element): ROS_SupplierAS {
    if (!_cached_decoder_for_ROS_SupplierAS) { _cached_decoder_for_ROS_SupplierAS = _decode_ROS; }
    return _cached_decoder_for_ROS_SupplierAS(el);
}

let _cached_encoder_for_ROS_SupplierAS: $.ASN1Encoder<ROS_SupplierAS> | null = null;

/**
 * @summary Encodes a(n) ROS_SupplierAS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROS_SupplierAS, encoded as an ASN.1 Element.
 */
export
function _encode_ROS_SupplierAS (value: ROS_SupplierAS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ROS_SupplierAS) { _cached_encoder_for_ROS_SupplierAS = _encode_ROS; }
    return _cached_encoder_for_ROS_SupplierAS(value, elGetter);
}


/* eslint-enable */

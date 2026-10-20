/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
import { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { dSABind } from "../DistributedOperations/dSABind.oa.mjs";
import { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { dSAUnbind } from "../DistributedOperations/dSAUnbind.oa.mjs";


/**
 * @summary DSP_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSP-PDUs  ::=  CHOICE {
 *   basicRos  ROS{{DSP-InvokeIDSet}, {DSP-Invokable}, {DSP-Returnable}},
 *   bind      Bind{dSABind},
 *   unbind    Unbind{dSAUnbind}
 * }
 * ```
 */
export
type DSP_PDUs =
    { basicRos: ROS } /* CHOICE_ALT_ROOT */
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DSP_PDUs: $.ASN1Decoder<DSP_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSP_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSP_PDUs (el: _Element): DSP_PDUs {
    if (!_cached_decoder_for_DSP_PDUs) { _cached_decoder_for_DSP_PDUs = $._decode_inextensible_choice<DSP_PDUs>({
    "CONTEXT 1": [ "basicRos", _decode_ROS ],
    "CONTEXT 2": [ "basicRos", _decode_ROS ],
    "CONTEXT 3": [ "basicRos", _decode_ROS ],
    "CONTEXT 4": [ "basicRos", _decode_ROS ],
    "CONTEXT 16": [ "bind", _decode_Bind ],
    "CONTEXT 17": [ "bind", _decode_Bind ],
    "CONTEXT 18": [ "bind", _decode_Bind ],
    "CONTEXT 19": [ "unbind", _decode_Unbind ],
    "CONTEXT 20": [ "unbind", _decode_Unbind ],
    "CONTEXT 21": [ "unbind", _decode_Unbind ]
}); }
    return _cached_decoder_for_DSP_PDUs(el);
}

let _cached_encoder_for_DSP_PDUs: $.ASN1Encoder<DSP_PDUs> | null = null;

/**
 * @summary Encodes a(n) DSP_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSP_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_DSP_PDUs (value: DSP_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSP_PDUs) { _cached_encoder_for_DSP_PDUs = $._encode_choice<DSP_PDUs>({
    "basicRos": _encode_ROS,
    "bind": _encode_Bind,
    "unbind": _encode_Unbind,
}, $.BER); }
    return _cached_encoder_for_DSP_PDUs(value, elGetter);
}


/* eslint-enable */

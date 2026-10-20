/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
import { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { directoryBind } from "../DirectoryAbstractService/directoryBind.oa.mjs";
import { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { directoryUnbind } from "../DirectoryAbstractService/directoryUnbind.oa.mjs";


/**
 * @summary DAP_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DAP-PDUs  ::=  CHOICE {
 *   basicRos  ROS{{DAP-InvokeIDSet}, {DAP-Invokable}, {DAP-Returnable}},
 *   bind      Bind{directoryBind},
 *   unbind    Unbind{directoryUnbind}
 * }
 * ```
 */
export
type DAP_PDUs =
    { basicRos: ROS } /* CHOICE_ALT_ROOT */
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DAP_PDUs: $.ASN1Decoder<DAP_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DAP_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DAP_PDUs (el: _Element): DAP_PDUs {
    if (!_cached_decoder_for_DAP_PDUs) { _cached_decoder_for_DAP_PDUs = $._decode_inextensible_choice<DAP_PDUs>({
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
    return _cached_decoder_for_DAP_PDUs(el);
}

let _cached_encoder_for_DAP_PDUs: $.ASN1Encoder<DAP_PDUs> | null = null;

/**
 * @summary Encodes a(n) DAP_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DAP_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_DAP_PDUs (value: DAP_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DAP_PDUs) { _cached_encoder_for_DAP_PDUs = $._encode_choice<DAP_PDUs>({
    "basicRos": _encode_ROS,
    "bind": _encode_Bind,
    "unbind": _encode_Unbind,
}, $.BER); }
    return _cached_encoder_for_DAP_PDUs(value, elGetter);
}


/* eslint-enable */

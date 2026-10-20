/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.mjs";
import { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { dSAShadowUnbind } from "../DirectoryShadowAbstractService/dSAShadowUnbind.oa.mjs";


/**
 * @summary ReliableShadowBinding_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReliableShadowBinding-PDUs  ::=  CHOICE {
 *   rTS     [0]  RTSE-apdus,
 *   bind    Bind{dSAShadowBind},
 *   unbind  Unbind{dSAShadowUnbind}
 * }
 * ```
 */
export
type ReliableShadowBinding_PDUs =
    { rTS: RTSE_apdus } /* CHOICE_ALT_ROOT */
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReliableShadowBinding_PDUs: $.ASN1Decoder<ReliableShadowBinding_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReliableShadowBinding_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReliableShadowBinding_PDUs (el: _Element): ReliableShadowBinding_PDUs {
    if (!_cached_decoder_for_ReliableShadowBinding_PDUs) { _cached_decoder_for_ReliableShadowBinding_PDUs = $._decode_inextensible_choice<ReliableShadowBinding_PDUs>({
    "CONTEXT 0": [ "rTS", $._decode_explicit<RTSE_apdus>(() => _decode_RTSE_apdus) ],
    "CONTEXT 16": [ "bind", _decode_Bind ],
    "CONTEXT 17": [ "bind", _decode_Bind ],
    "CONTEXT 18": [ "bind", _decode_Bind ],
    "CONTEXT 19": [ "unbind", _decode_Unbind ],
    "CONTEXT 20": [ "unbind", _decode_Unbind ],
    "CONTEXT 21": [ "unbind", _decode_Unbind ]
}); }
    return _cached_decoder_for_ReliableShadowBinding_PDUs(el);
}

let _cached_encoder_for_ReliableShadowBinding_PDUs: $.ASN1Encoder<ReliableShadowBinding_PDUs> | null = null;

/**
 * @summary Encodes a(n) ReliableShadowBinding_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReliableShadowBinding_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_ReliableShadowBinding_PDUs (value: ReliableShadowBinding_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReliableShadowBinding_PDUs) { _cached_encoder_for_ReliableShadowBinding_PDUs = $._encode_choice<ReliableShadowBinding_PDUs>({
    "rTS": $._encode_explicit(_TagClass.context, 0, () => _encode_RTSE_apdus, $.BER),
    "bind": _encode_Bind,
    "unbind": _encode_Unbind,
}, $.BER); }
    return _cached_encoder_for_ReliableShadowBinding_PDUs(value, elGetter);
}


/* eslint-enable */

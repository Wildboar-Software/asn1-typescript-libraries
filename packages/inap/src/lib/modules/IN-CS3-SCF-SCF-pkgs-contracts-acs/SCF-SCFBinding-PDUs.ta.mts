/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { scfBind } from "../IN-CS3-SCF-SCF-ops-args/scfBind.oa.mjs";
import { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { in_unbind } from "../IN-CS3-SCF-SCF-pkgs-contracts-acs/in-unbind.oa.mjs";


/**
 * @summary SCF_SCFBinding_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCF-SCFBinding-PDUs  ::=  CHOICE {
 *   bind    Bind{scfBind},
 *   unbind  Unbind{in-unbind}
 * }
 * ```
 */
export
type SCF_SCFBinding_PDUs =
    { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SCF_SCFBinding_PDUs: $.ASN1Decoder<SCF_SCFBinding_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCF_SCFBinding_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCF_SCFBinding_PDUs (el: _Element): SCF_SCFBinding_PDUs {
    if (!_cached_decoder_for_SCF_SCFBinding_PDUs) { _cached_decoder_for_SCF_SCFBinding_PDUs = $._decode_inextensible_choice<SCF_SCFBinding_PDUs>({
    "CONTEXT 16": [ "bind", _decode_Bind ],
    "CONTEXT 17": [ "bind", _decode_Bind ],
    "CONTEXT 18": [ "bind", _decode_Bind ],
    "CONTEXT 19": [ "unbind", _decode_Unbind ],
    "CONTEXT 20": [ "unbind", _decode_Unbind ],
    "CONTEXT 21": [ "unbind", _decode_Unbind ]
}); }
    return _cached_decoder_for_SCF_SCFBinding_PDUs(el);
}

let _cached_encoder_for_SCF_SCFBinding_PDUs: $.ASN1Encoder<SCF_SCFBinding_PDUs> | null = null;

/**
 * @summary Encodes a(n) SCF_SCFBinding_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCF_SCFBinding_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_SCF_SCFBinding_PDUs (value: SCF_SCFBinding_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCF_SCFBinding_PDUs) { _cached_encoder_for_SCF_SCFBinding_PDUs = $._encode_choice<SCF_SCFBinding_PDUs>({
    "bind": _encode_Bind,
    "unbind": _encode_Unbind,
}, $.BER); }
    return _cached_encoder_for_SCF_SCFBinding_PDUs(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa.mjs";
import { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { inUnbind } from "../IN-CS3-common-classes/inUnbind.oa.mjs";


/**
 * @summary DISPBinding_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DISPBinding-PDUs  ::=  CHOICE {
 *   bind    Bind{dSAShadowBind},
 *   unbind  Unbind{inUnbind}
 * }
 * ```
 */
export
type DISPBinding_PDUs =
    { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DISPBinding_PDUs: $.ASN1Decoder<DISPBinding_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DISPBinding_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DISPBinding_PDUs (el: _Element): DISPBinding_PDUs {
    if (!_cached_decoder_for_DISPBinding_PDUs) { _cached_decoder_for_DISPBinding_PDUs = $._decode_inextensible_choice<DISPBinding_PDUs>({
    "CONTEXT 16": [ "bind", _decode_Bind ],
    "CONTEXT 17": [ "bind", _decode_Bind ],
    "CONTEXT 18": [ "bind", _decode_Bind ],
    "CONTEXT 19": [ "unbind", _decode_Unbind ],
    "CONTEXT 20": [ "unbind", _decode_Unbind ],
    "CONTEXT 21": [ "unbind", _decode_Unbind ]
}); }
    return _cached_decoder_for_DISPBinding_PDUs(el);
}

let _cached_encoder_for_DISPBinding_PDUs: $.ASN1Encoder<DISPBinding_PDUs> | null = null;

/**
 * @summary Encodes a(n) DISPBinding_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DISPBinding_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_DISPBinding_PDUs (value: DISPBinding_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DISPBinding_PDUs) { _cached_encoder_for_DISPBinding_PDUs = $._encode_choice<DISPBinding_PDUs>({
    "bind": _encode_Bind,
    "unbind": _encode_Unbind,
}, $.BER); }
    return _cached_encoder_for_DISPBinding_PDUs(value, elGetter);
}


/* eslint-enable */

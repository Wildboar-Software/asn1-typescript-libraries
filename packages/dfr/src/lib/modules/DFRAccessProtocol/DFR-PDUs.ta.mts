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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
import { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { Bind, _decode_Bind, _encode_Bind } from "../Remote-Operations-Generic-ROS-PDUs/Bind.ta.mjs";
// export { dfrBind } from "../DFRAbstractService/dfrBind.oa.mjs";
import { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { Unbind, _decode_Unbind, _encode_Unbind } from "../Remote-Operations-Generic-ROS-PDUs/Unbind.ta.mjs";
// export { dfrUnbind } from "../DFRAbstractService/dfrUnbind.oa.mjs";


/**
 * @summary DFR_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DFR-PDUs  ::=  CHOICE {
 *     basicRos    ROS{{DFR-InvokeIDSet}, {DFR-Invokable}, {DFR-Returnable}},
 *     bind        Bind{dfrBind},
 *     unbind      Unbind{dfrUnbind}
 * }
 * ```
 */
export
type DFR_PDUs =
    { basicRos: ROS } /* CHOICE_ALT_ROOT */
    | { bind: Bind } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DFR_PDUs: $.ASN1Decoder<DFR_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DFR_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DFR_PDUs (el: _Element): DFR_PDUs {
    if (!_cached_decoder_for_DFR_PDUs) { _cached_decoder_for_DFR_PDUs = $._decode_inextensible_choice<DFR_PDUs>({
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
    return _cached_decoder_for_DFR_PDUs(el);
}

let _cached_encoder_for_DFR_PDUs: $.ASN1Encoder<DFR_PDUs> | null = null;

/**
 * @summary Encodes a(n) DFR_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DFR_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_DFR_PDUs (value: DFR_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DFR_PDUs) { _cached_encoder_for_DFR_PDUs = $._encode_choice<DFR_PDUs>({
    "basicRos": _encode_ROS,
    "bind": _encode_Bind,
    "unbind": _encode_Unbind,
}, $.BER); }
    return _cached_encoder_for_DFR_PDUs(value, elGetter);
}


/* eslint-enable */

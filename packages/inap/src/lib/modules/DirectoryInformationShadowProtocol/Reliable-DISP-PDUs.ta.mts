/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";
// export { ROS, _decode_ROS, _encode_ROS } from "../Remote-Operations-Generic-ROS-PDUs/ROS.ta.mjs";


/**
 * @summary Reliable_DISP_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reliable-DISP-PDUs  ::= 
 *   ROS{{DISP-InvokeIDSet}, {DISP-Invokable}, {DISP-Returnable}}
 * ```
 */
export
type Reliable_DISP_PDUs = ROS; // DefinedType

let _cached_decoder_for_Reliable_DISP_PDUs: $.ASN1Decoder<Reliable_DISP_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reliable_DISP_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reliable_DISP_PDUs (el: _Element): Reliable_DISP_PDUs {
    if (!_cached_decoder_for_Reliable_DISP_PDUs) { _cached_decoder_for_Reliable_DISP_PDUs = _decode_ROS; }
    return _cached_decoder_for_Reliable_DISP_PDUs(el);
}

let _cached_encoder_for_Reliable_DISP_PDUs: $.ASN1Encoder<Reliable_DISP_PDUs> | null = null;

/**
 * @summary Encodes a(n) Reliable_DISP_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reliable_DISP_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_Reliable_DISP_PDUs (value: Reliable_DISP_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reliable_DISP_PDUs) { _cached_encoder_for_Reliable_DISP_PDUs = _encode_ROS; }
    return _cached_encoder_for_Reliable_DISP_PDUs(value, elGetter);
}


/* eslint-enable */

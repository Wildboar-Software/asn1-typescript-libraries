/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../Remote-Operations-Generic-ROS-PDUs/InvokeId.ta.mjs";


/**
 * @summary DISP_InvokeIDSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DISP-InvokeIDSet  ::=  InvokeId(ALL EXCEPT absent:NULL)
 * ```
 */
export
type DISP_InvokeIDSet = InvokeId; // DefinedType

let _cached_decoder_for_DISP_InvokeIDSet: $.ASN1Decoder<DISP_InvokeIDSet> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DISP_InvokeIDSet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DISP_InvokeIDSet (el: _Element): DISP_InvokeIDSet {
    if (!_cached_decoder_for_DISP_InvokeIDSet) { _cached_decoder_for_DISP_InvokeIDSet = _decode_InvokeId; }
    return _cached_decoder_for_DISP_InvokeIDSet(el);
}

let _cached_encoder_for_DISP_InvokeIDSet: $.ASN1Encoder<DISP_InvokeIDSet> | null = null;

/**
 * @summary Encodes a(n) DISP_InvokeIDSet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DISP_InvokeIDSet, encoded as an ASN.1 Element.
 */
export
function _encode_DISP_InvokeIDSet (value: DISP_InvokeIDSet, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DISP_InvokeIDSet) { _cached_encoder_for_DISP_InvokeIDSet = _encode_InvokeId; }
    return _cached_encoder_for_DISP_InvokeIDSet(value, elGetter);
}


/* eslint-enable */

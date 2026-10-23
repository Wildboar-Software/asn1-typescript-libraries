/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    InvokeIDType,
    _decode_InvokeIDType,
    _encode_InvokeIDType,
} from "../CMIP-1/InvokeIDType.ta.mjs";



/**
 * @summary CancelledAlarmSynchronization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelledAlarmSynchronization  ::=  InvokeIDType
 * ```
 */
export
type CancelledAlarmSynchronization = InvokeIDType; // DefinedType

let _cached_decoder_for_CancelledAlarmSynchronization: $.ASN1Decoder<CancelledAlarmSynchronization> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelledAlarmSynchronization
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelledAlarmSynchronization (el: _Element): CancelledAlarmSynchronization {
    if (!_cached_decoder_for_CancelledAlarmSynchronization) { _cached_decoder_for_CancelledAlarmSynchronization = _decode_InvokeIDType; }
    return _cached_decoder_for_CancelledAlarmSynchronization(el);
}

let _cached_encoder_for_CancelledAlarmSynchronization: $.ASN1Encoder<CancelledAlarmSynchronization> | null = null;

/**
 * @summary Encodes a(n) CancelledAlarmSynchronization into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelledAlarmSynchronization, encoded as an ASN.1 Element.
 */
export
function _encode_CancelledAlarmSynchronization (value: CancelledAlarmSynchronization, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelledAlarmSynchronization) { _cached_encoder_for_CancelledAlarmSynchronization = _encode_InvokeIDType; }
    return _cached_encoder_for_CancelledAlarmSynchronization(value, elGetter);
}


/* eslint-enable */

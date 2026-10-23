/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CancelledAlarmSynchronization,
    _decode_CancelledAlarmSynchronization,
    _encode_CancelledAlarmSynchronization,
} from "../Q821-ASN1Module/CancelledAlarmSynchronization.ta.mjs";



/**
 * @summary CancelAlarmSynchronization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelAlarmSynchronization  ::=  CancelledAlarmSynchronization
 * ```
 */
export
type CancelAlarmSynchronization = CancelledAlarmSynchronization; // DefinedType

let _cached_decoder_for_CancelAlarmSynchronization: $.ASN1Decoder<CancelAlarmSynchronization> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelAlarmSynchronization
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelAlarmSynchronization (el: _Element): CancelAlarmSynchronization {
    if (!_cached_decoder_for_CancelAlarmSynchronization) { _cached_decoder_for_CancelAlarmSynchronization = _decode_CancelledAlarmSynchronization; }
    return _cached_decoder_for_CancelAlarmSynchronization(el);
}

let _cached_encoder_for_CancelAlarmSynchronization: $.ASN1Encoder<CancelAlarmSynchronization> | null = null;

/**
 * @summary Encodes a(n) CancelAlarmSynchronization into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelAlarmSynchronization, encoded as an ASN.1 Element.
 */
export
function _encode_CancelAlarmSynchronization (value: CancelAlarmSynchronization, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelAlarmSynchronization) { _cached_encoder_for_CancelAlarmSynchronization = _encode_CancelledAlarmSynchronization; }
    return _cached_encoder_for_CancelAlarmSynchronization(value, elGetter);
}


/* eslint-enable */

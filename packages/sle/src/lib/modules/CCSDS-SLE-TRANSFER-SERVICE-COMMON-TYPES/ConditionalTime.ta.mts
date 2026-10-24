/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Time, _decode_Time, _encode_Time } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Time.ta.mjs";


/**
 * @summary ConditionalTime
 * @description
 * 
 * A time parameter that may be null. `undefined` is the null time. `known` is a
 * UTC time. RAF-START uses this for the start and stop times. Online, a null
 * start begins at the next frame acquired from the space link, and a null stop
 * continues until STOP or the association is released or aborted. Offline, a
 * null start or stop is rejected with diagnostic 'missing time value'.
 * 
 * CCSDS 911.1-B-5, sections 3.1.7, 3.4.2.5, 3.4.2.6, and annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConditionalTime            ::=    CHOICE
 * { undefined            [0]   NULL
 * , known                [1]   Time
 * }
 * ```
 */
export
type ConditionalTime =
    { undefined: NULL } /* CHOICE_ALT_ROOT */
    | { known: Time } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ConditionalTime: $.ASN1Decoder<ConditionalTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConditionalTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConditionalTime (el: _Element): ConditionalTime {
    if (!_cached_decoder_for_ConditionalTime) { _cached_decoder_for_ConditionalTime = $._decode_inextensible_choice<ConditionalTime>({
    "CONTEXT 0": [ "undefined", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "known", $._decode_explicit<Time>(() => _decode_Time) ]
}); }
    return _cached_decoder_for_ConditionalTime(el);
}

let _cached_encoder_for_ConditionalTime: $.ASN1Encoder<ConditionalTime> | null = null;

/**
 * @summary Encodes a(n) ConditionalTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConditionalTime, encoded as an ASN.1 Element.
 */
export
function _encode_ConditionalTime (value: ConditionalTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConditionalTime) { _cached_encoder_for_ConditionalTime = $._encode_choice<ConditionalTime>({
    "undefined": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "known": $._encode_explicit(_TagClass.context, 1, () => _encode_Time, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConditionalTime(value, elGetter);
}


/* eslint-enable */

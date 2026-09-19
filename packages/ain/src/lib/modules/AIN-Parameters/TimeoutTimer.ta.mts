/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntervalTime, _decode_IntervalTime, _encode_IntervalTime } from "../AIN-Parameters/IntervalTime.ta.mjs";
// export { IntervalTime, _decode_IntervalTime, _encode_IntervalTime } from "../AIN-Parameters/IntervalTime.ta.mjs";
import { LocalSSPTime, _decode_LocalSSPTime, _encode_LocalSSPTime } from "../AIN-Parameters/LocalSSPTime.ta.mjs";
// export { LocalSSPTime, _decode_LocalSSPTime, _encode_LocalSSPTime } from "../AIN-Parameters/LocalSSPTime.ta.mjs";
import { AbsoluteSCPTime, _decode_AbsoluteSCPTime, _encode_AbsoluteSCPTime } from "../AIN-Parameters/AbsoluteSCPTime.ta.mjs";
// export { AbsoluteSCPTime, _decode_AbsoluteSCPTime, _encode_AbsoluteSCPTime } from "../AIN-Parameters/AbsoluteSCPTime.ta.mjs";


/**
 * @summary TimeoutTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutTimer  ::=  [139] IMPLICIT CHOICE{
 *         intervalTime    [0] IMPLICIT IntervalTime,
 *         localSSPTime    [1] IMPLICIT LocalSSPTime,
 *         absoluteSCPTime [2] IMPLICIT AbsoluteSCPTime
 *     }
 * ```
 */
export
type TimeoutTimer =
    { intervalTime: IntervalTime } /* CHOICE_ALT_ROOT */
    | { localSSPTime: LocalSSPTime } /* CHOICE_ALT_ROOT */
    | { absoluteSCPTime: AbsoluteSCPTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TimeoutTimer: $.ASN1Decoder<TimeoutTimer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeoutTimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeoutTimer (el: _Element): TimeoutTimer {
    if (!_cached_decoder_for_TimeoutTimer) { _cached_decoder_for_TimeoutTimer = $._decode_explicit<TimeoutTimer>(() => $._decode_inextensible_choice<TimeoutTimer>({
    "CONTEXT 0": [ "intervalTime", $._decode_implicit<IntervalTime>(() => _decode_IntervalTime) ],
    "CONTEXT 1": [ "localSSPTime", $._decode_implicit<LocalSSPTime>(() => _decode_LocalSSPTime) ],
    "CONTEXT 2": [ "absoluteSCPTime", $._decode_implicit<AbsoluteSCPTime>(() => _decode_AbsoluteSCPTime) ]
})); }
    return _cached_decoder_for_TimeoutTimer(el);
}

let _cached_encoder_for_TimeoutTimer: $.ASN1Encoder<TimeoutTimer> | null = null;

/**
 * @summary Encodes a(n) TimeoutTimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeoutTimer, encoded as an ASN.1 Element.
 */
export
function _encode_TimeoutTimer (value: TimeoutTimer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeoutTimer) { _cached_encoder_for_TimeoutTimer = $._encode_explicit(_TagClass.context, 139, () => $._encode_choice<TimeoutTimer>({
    "intervalTime": $._encode_implicit(_TagClass.context, 0, () => _encode_IntervalTime, $.BER),
    "localSSPTime": $._encode_implicit(_TagClass.context, 1, () => _encode_LocalSSPTime, $.BER),
    "absoluteSCPTime": $._encode_implicit(_TagClass.context, 2, () => _encode_AbsoluteSCPTime, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_TimeoutTimer(value, elGetter);
}


/* eslint-enable */

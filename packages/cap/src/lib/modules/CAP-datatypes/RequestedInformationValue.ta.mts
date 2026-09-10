import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "./DateAndTime.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary RequestedInformationValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedInformationValue {PARAMETERS-BOUND : bound} ::= CHOICE {
 *  callAttemptElapsedTimeValue		[0] INTEGER (0..255),
 *  callStopTimeValue			[1] DateAndTime,
 *  callConnectedElapsedTimeValue	[2] Integer4,
 *  releaseCauseValue			[30] Cause {bound}
 *  }
 * ```
 *
 */
export type RequestedInformationValue =
{ callAttemptElapsedTimeValue: INTEGER }
    | { callStopTimeValue: DateAndTime }
    | { callConnectedElapsedTimeValue: INTEGER }
    | { releaseCauseValue: Cause };

let _cached_decoder_for_RequestedInformationValue: $.ASN1Decoder<RequestedInformationValue> | null = null;
export function _decode_RequestedInformationValue (el: _Element): RequestedInformationValue {
    if (!_cached_decoder_for_RequestedInformationValue) {
        _cached_decoder_for_RequestedInformationValue = $._decode_inextensible_choice<RequestedInformationValue>({
    "CONTEXT 0": [ "callAttemptElapsedTimeValue", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 255n) : (value < 0 || value > 255))) {
        throw new ASN1OverflowError("RequestedInformationValue.callAttemptElapsedTimeValue violates INTEGER constraint");
    }
    return value;
}) ],
    "CONTEXT 1": [ "callStopTimeValue", $._decode_implicit<DateAndTime>(() => _decode_DateAndTime) ],
    "CONTEXT 2": [ "callConnectedElapsedTimeValue", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 2147483647n) : (value < 0 || value > 2147483647))) {
        throw new ASN1OverflowError("RequestedInformationValue.callConnectedElapsedTimeValue violates INTEGER constraint");
    }
    return value;
}) ],
    "CONTEXT 30": [ "releaseCauseValue", $._decode_implicit<Cause>(() => _decode_Cause) ]
        });
    }
    return _cached_decoder_for_RequestedInformationValue(el);
}

let _cached_encoder_for_RequestedInformationValue: $.ASN1Encoder<RequestedInformationValue> | null = null;
export function _encode_RequestedInformationValue (value: RequestedInformationValue, elGetter: $.ASN1Encoder<RequestedInformationValue>): _Element {
    if (!_cached_encoder_for_RequestedInformationValue) {
        _cached_encoder_for_RequestedInformationValue = $._encode_choice<RequestedInformationValue>({
    "callAttemptElapsedTimeValue": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "callStopTimeValue": $._encode_implicit(_TagClass.context, 1, () => _encode_DateAndTime, $.BER),
    "callConnectedElapsedTimeValue": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "releaseCauseValue": $._encode_implicit(_TagClass.context, 30, () => _encode_Cause, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_RequestedInformationValue(value, elGetter);
}

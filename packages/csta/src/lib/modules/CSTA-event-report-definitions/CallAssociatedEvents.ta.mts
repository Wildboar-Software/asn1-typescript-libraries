/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { CallInformationEvent, _decode_CallInformationEvent, _encode_CallInformationEvent } from "../CSTA-call-information-event/CallInformationEvent.ta.mjs";

import { ChargingEvent, _decode_ChargingEvent, _encode_ChargingEvent } from "../CSTA-charging-event/ChargingEvent.ta.mjs";

import { DigitsGeneratedEvent, _decode_DigitsGeneratedEvent, _encode_DigitsGeneratedEvent } from "../CSTA-digits-generated-event/DigitsGeneratedEvent.ta.mjs";

import { TelephonyTonesGeneratedEvent, _decode_TelephonyTonesGeneratedEvent, _encode_TelephonyTonesGeneratedEvent } from "../CSTA-telephony-tones-generated-event/TelephonyTonesGeneratedEvent.ta.mjs";

import { ServiceCompletionFailureEvent, _decode_ServiceCompletionFailureEvent, _encode_ServiceCompletionFailureEvent } from "../CSTA-service-completion-failure-event/ServiceCompletionFailureEvent.ta.mjs";



/**
 * @summary CallAssociatedEvents
 * @description
 *
 * Call-associated event body of `cSTAEventReport` (ECMA-285 §10). Alternatives:
 * Call Information, Charging, Digits Generated, Telephony Tones Generated,
 * Service Completion Failure.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedEvents  ::=  CHOICE
 * {    callInformation            [ 0] IMPLICIT CallInformationEvent,
 *     charging            [ 1] IMPLICIT ChargingEvent,
 *     digitsGeneratedEvent        [ 2] IMPLICIT DigitsGeneratedEvent,
 *     telephonyTonesGeneratedEvent    [ 3] IMPLICIT TelephonyTonesGeneratedEvent,
 *     serviceCompletionFailure    [ 4] IMPLICIT ServiceCompletionFailureEvent }
 * ```
 */
export
type CallAssociatedEvents =
    { callInformation: CallInformationEvent } /* CHOICE_ALT_ROOT */
    | { charging: ChargingEvent } /* CHOICE_ALT_ROOT */
    | { digitsGeneratedEvent: DigitsGeneratedEvent } /* CHOICE_ALT_ROOT */
    | { telephonyTonesGeneratedEvent: TelephonyTonesGeneratedEvent } /* CHOICE_ALT_ROOT */
    | { serviceCompletionFailure: ServiceCompletionFailureEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallAssociatedEvents: $.ASN1Decoder<CallAssociatedEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedEvents (el: _Element): CallAssociatedEvents {
    if (!_cached_decoder_for_CallAssociatedEvents) { _cached_decoder_for_CallAssociatedEvents = $._decode_inextensible_choice<CallAssociatedEvents>({
    "CONTEXT 0": [ "callInformation", $._decode_implicit<CallInformationEvent>(() => _decode_CallInformationEvent) ],
    "CONTEXT 1": [ "charging", $._decode_implicit<ChargingEvent>(() => _decode_ChargingEvent) ],
    "CONTEXT 2": [ "digitsGeneratedEvent", $._decode_implicit<DigitsGeneratedEvent>(() => _decode_DigitsGeneratedEvent) ],
    "CONTEXT 3": [ "telephonyTonesGeneratedEvent", $._decode_implicit<TelephonyTonesGeneratedEvent>(() => _decode_TelephonyTonesGeneratedEvent) ],
    "CONTEXT 4": [ "serviceCompletionFailure", $._decode_implicit<ServiceCompletionFailureEvent>(() => _decode_ServiceCompletionFailureEvent) ]
}); }
    return _cached_decoder_for_CallAssociatedEvents(el);
}

let _cached_encoder_for_CallAssociatedEvents: $.ASN1Encoder<CallAssociatedEvents> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedEvents, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedEvents (value: CallAssociatedEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedEvents) { _cached_encoder_for_CallAssociatedEvents = $._encode_choice<CallAssociatedEvents>({
    "callInformation": $._encode_implicit(_TagClass.context, 0, () => _encode_CallInformationEvent, $.BER),
    "charging": $._encode_implicit(_TagClass.context, 1, () => _encode_ChargingEvent, $.BER),
    "digitsGeneratedEvent": $._encode_implicit(_TagClass.context, 2, () => _encode_DigitsGeneratedEvent, $.BER),
    "telephonyTonesGeneratedEvent": $._encode_implicit(_TagClass.context, 3, () => _encode_TelephonyTonesGeneratedEvent, $.BER),
    "serviceCompletionFailure": $._encode_implicit(_TagClass.context, 4, () => _encode_ServiceCompletionFailureEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallAssociatedEvents(value, elGetter);
}


/* eslint-enable */

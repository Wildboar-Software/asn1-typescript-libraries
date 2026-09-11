/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import { BridgedEvent, _decode_BridgedEvent, _encode_BridgedEvent } from "../CSTA-bridged-event/BridgedEvent.ta.mjs";

import { CallClearedEvent, _decode_CallClearedEvent, _encode_CallClearedEvent } from "../CSTA-call-cleared-event/CallClearedEvent.ta.mjs";

import { ConferencedEvent, _decode_ConferencedEvent, _encode_ConferencedEvent } from "../CSTA-conferenced-event/ConferencedEvent.ta.mjs";

import { ConnectionClearedEvent, _decode_ConnectionClearedEvent, _encode_ConnectionClearedEvent } from "../CSTA-connection-cleared-event/ConnectionClearedEvent.ta.mjs";

import { DeliveredEvent, _decode_DeliveredEvent, _encode_DeliveredEvent } from "../CSTA-delivered-event/DeliveredEvent.ta.mjs";

import { DigitsDialedEvent, _decode_DigitsDialedEvent, _encode_DigitsDialedEvent } from "../CSTA-digits-dialed-event/DigitsDialedEvent.ta.mjs";

import { DivertedEvent, _decode_DivertedEvent, _encode_DivertedEvent } from "../CSTA-diverted-event/DivertedEvent.ta.mjs";

import { EstablishedEvent, _decode_EstablishedEvent, _encode_EstablishedEvent } from "../CSTA-established-event/EstablishedEvent.ta.mjs";

import { FailedEvent, _decode_FailedEvent, _encode_FailedEvent } from "../CSTA-failed-event/FailedEvent.ta.mjs";

import { HeldEvent, _decode_HeldEvent, _encode_HeldEvent } from "../CSTA-held-event/HeldEvent.ta.mjs";

import { NetworkCapabilitiesChangedEvent, _decode_NetworkCapabilitiesChangedEvent, _encode_NetworkCapabilitiesChangedEvent } from "../CSTA-network-capabilities-changed-event/NetworkCapabilitiesChangedEvent.ta.mjs";

import { NetworkReachedEvent, _decode_NetworkReachedEvent, _encode_NetworkReachedEvent } from "../CSTA-network-reached-event/NetworkReachedEvent.ta.mjs";

import { OfferedEvent, _decode_OfferedEvent, _encode_OfferedEvent } from "../CSTA-offered-event/OfferedEvent.ta.mjs";

import { OriginatedEvent, _decode_OriginatedEvent, _encode_OriginatedEvent } from "../CSTA-originated-event/OriginatedEvent.ta.mjs";

import { QueuedEvent, _decode_QueuedEvent, _encode_QueuedEvent } from "../CSTA-queued-event/QueuedEvent.ta.mjs";

import { RetrievedEvent, _decode_RetrievedEvent, _encode_RetrievedEvent } from "../CSTA-retrieved-event/RetrievedEvent.ta.mjs";

import { ServiceInitiatedEvent, _decode_ServiceInitiatedEvent, _encode_ServiceInitiatedEvent } from "../CSTA-service-initiated-event/ServiceInitiatedEvent.ta.mjs";

import { TransferredEvent, _decode_TransferredEvent, _encode_TransferredEvent } from "../CSTA-transferred-event/TransferredEvent.ta.mjs";



/**
 * @summary CallControlEvents
 * @description
 *
 * Call-control event body of `cSTAEventReport` (ECMA-285 §10). Alternatives:
 * Bridged, Call Cleared, Conferenced, Connection Cleared, Delivered, Digits
 * Dialed, Diverted, Established, Failed, Held, Network Capabilities Changed,
 * Network Reached, Offered, Originated, Queued, Retrieved, Service Initiated,
 * Transferred.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallControlEvents  ::=  CHOICE
 * {    bridged             [ 0] IMPLICIT BridgedEvent,
 *     callCleared             [ 1] IMPLICIT CallClearedEvent,
 *     conferenced             [ 2] IMPLICIT ConferencedEvent,
 *     connectionCleared         [ 3] IMPLICIT ConnectionClearedEvent,
 *     delivered             [ 4] IMPLICIT DeliveredEvent,
 *     digitsDialed             [ 5] IMPLICIT DigitsDialedEvent,
 *     diverted             [ 6] IMPLICIT DivertedEvent,
 *     established            [ 7] IMPLICIT EstablishedEvent,
 *     failed                [ 8] IMPLICIT FailedEvent,
 *     held                [ 9] IMPLICIT HeldEvent,
 *     networkCapabilitiesChanged    [10] IMPLICIT NetworkCapabilitiesChangedEvent,
 *     networkReached             [11] IMPLICIT NetworkReachedEvent,
 *     offered             [12] IMPLICIT OfferedEvent,
 *     originated             [13] IMPLICIT OriginatedEvent,
 *     queued                 [14] IMPLICIT QueuedEvent,
 *     retrieved             [15] IMPLICIT RetrievedEvent,
 *     serviceInitiated         [16] IMPLICIT ServiceInitiatedEvent,
 *     transferred             [17] IMPLICIT TransferredEvent }
 * ```
 */
export
type CallControlEvents =
    { bridged: BridgedEvent } /* CHOICE_ALT_ROOT */
    | { callCleared: CallClearedEvent } /* CHOICE_ALT_ROOT */
    | { conferenced: ConferencedEvent } /* CHOICE_ALT_ROOT */
    | { connectionCleared: ConnectionClearedEvent } /* CHOICE_ALT_ROOT */
    | { delivered: DeliveredEvent } /* CHOICE_ALT_ROOT */
    | { digitsDialed: DigitsDialedEvent } /* CHOICE_ALT_ROOT */
    | { diverted: DivertedEvent } /* CHOICE_ALT_ROOT */
    | { established: EstablishedEvent } /* CHOICE_ALT_ROOT */
    | { failed: FailedEvent } /* CHOICE_ALT_ROOT */
    | { held: HeldEvent } /* CHOICE_ALT_ROOT */
    | { networkCapabilitiesChanged: NetworkCapabilitiesChangedEvent } /* CHOICE_ALT_ROOT */
    | { networkReached: NetworkReachedEvent } /* CHOICE_ALT_ROOT */
    | { offered: OfferedEvent } /* CHOICE_ALT_ROOT */
    | { originated: OriginatedEvent } /* CHOICE_ALT_ROOT */
    | { queued: QueuedEvent } /* CHOICE_ALT_ROOT */
    | { retrieved: RetrievedEvent } /* CHOICE_ALT_ROOT */
    | { serviceInitiated: ServiceInitiatedEvent } /* CHOICE_ALT_ROOT */
    | { transferred: TransferredEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CallControlEvents: $.ASN1Decoder<CallControlEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallControlEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallControlEvents (el: _Element): CallControlEvents {
    if (!_cached_decoder_for_CallControlEvents) { _cached_decoder_for_CallControlEvents = $._decode_inextensible_choice<CallControlEvents>({
    "CONTEXT 0": [ "bridged", $._decode_implicit<BridgedEvent>(() => _decode_BridgedEvent) ],
    "CONTEXT 1": [ "callCleared", $._decode_implicit<CallClearedEvent>(() => _decode_CallClearedEvent) ],
    "CONTEXT 2": [ "conferenced", $._decode_implicit<ConferencedEvent>(() => _decode_ConferencedEvent) ],
    "CONTEXT 3": [ "connectionCleared", $._decode_implicit<ConnectionClearedEvent>(() => _decode_ConnectionClearedEvent) ],
    "CONTEXT 4": [ "delivered", $._decode_implicit<DeliveredEvent>(() => _decode_DeliveredEvent) ],
    "CONTEXT 5": [ "digitsDialed", $._decode_implicit<DigitsDialedEvent>(() => _decode_DigitsDialedEvent) ],
    "CONTEXT 6": [ "diverted", $._decode_implicit<DivertedEvent>(() => _decode_DivertedEvent) ],
    "CONTEXT 7": [ "established", $._decode_implicit<EstablishedEvent>(() => _decode_EstablishedEvent) ],
    "CONTEXT 8": [ "failed", $._decode_implicit<FailedEvent>(() => _decode_FailedEvent) ],
    "CONTEXT 9": [ "held", $._decode_implicit<HeldEvent>(() => _decode_HeldEvent) ],
    "CONTEXT 10": [ "networkCapabilitiesChanged", $._decode_implicit<NetworkCapabilitiesChangedEvent>(() => _decode_NetworkCapabilitiesChangedEvent) ],
    "CONTEXT 11": [ "networkReached", $._decode_implicit<NetworkReachedEvent>(() => _decode_NetworkReachedEvent) ],
    "CONTEXT 12": [ "offered", $._decode_implicit<OfferedEvent>(() => _decode_OfferedEvent) ],
    "CONTEXT 13": [ "originated", $._decode_implicit<OriginatedEvent>(() => _decode_OriginatedEvent) ],
    "CONTEXT 14": [ "queued", $._decode_implicit<QueuedEvent>(() => _decode_QueuedEvent) ],
    "CONTEXT 15": [ "retrieved", $._decode_implicit<RetrievedEvent>(() => _decode_RetrievedEvent) ],
    "CONTEXT 16": [ "serviceInitiated", $._decode_implicit<ServiceInitiatedEvent>(() => _decode_ServiceInitiatedEvent) ],
    "CONTEXT 17": [ "transferred", $._decode_implicit<TransferredEvent>(() => _decode_TransferredEvent) ]
}); }
    return _cached_decoder_for_CallControlEvents(el);
}

let _cached_encoder_for_CallControlEvents: $.ASN1Encoder<CallControlEvents> | null = null;

/**
 * @summary Encodes a(n) CallControlEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallControlEvents, encoded as an ASN.1 Element.
 */
export
function _encode_CallControlEvents (value: CallControlEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallControlEvents) { _cached_encoder_for_CallControlEvents = $._encode_choice<CallControlEvents>({
    "bridged": $._encode_implicit(_TagClass.context, 0, () => _encode_BridgedEvent, $.BER),
    "callCleared": $._encode_implicit(_TagClass.context, 1, () => _encode_CallClearedEvent, $.BER),
    "conferenced": $._encode_implicit(_TagClass.context, 2, () => _encode_ConferencedEvent, $.BER),
    "connectionCleared": $._encode_implicit(_TagClass.context, 3, () => _encode_ConnectionClearedEvent, $.BER),
    "delivered": $._encode_implicit(_TagClass.context, 4, () => _encode_DeliveredEvent, $.BER),
    "digitsDialed": $._encode_implicit(_TagClass.context, 5, () => _encode_DigitsDialedEvent, $.BER),
    "diverted": $._encode_implicit(_TagClass.context, 6, () => _encode_DivertedEvent, $.BER),
    "established": $._encode_implicit(_TagClass.context, 7, () => _encode_EstablishedEvent, $.BER),
    "failed": $._encode_implicit(_TagClass.context, 8, () => _encode_FailedEvent, $.BER),
    "held": $._encode_implicit(_TagClass.context, 9, () => _encode_HeldEvent, $.BER),
    "networkCapabilitiesChanged": $._encode_implicit(_TagClass.context, 10, () => _encode_NetworkCapabilitiesChangedEvent, $.BER),
    "networkReached": $._encode_implicit(_TagClass.context, 11, () => _encode_NetworkReachedEvent, $.BER),
    "offered": $._encode_implicit(_TagClass.context, 12, () => _encode_OfferedEvent, $.BER),
    "originated": $._encode_implicit(_TagClass.context, 13, () => _encode_OriginatedEvent, $.BER),
    "queued": $._encode_implicit(_TagClass.context, 14, () => _encode_QueuedEvent, $.BER),
    "retrieved": $._encode_implicit(_TagClass.context, 15, () => _encode_RetrievedEvent, $.BER),
    "serviceInitiated": $._encode_implicit(_TagClass.context, 16, () => _encode_ServiceInitiatedEvent, $.BER),
    "transferred": $._encode_implicit(_TagClass.context, 17, () => _encode_TransferredEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_CallControlEvents(value, elGetter);
}


/* eslint-enable */

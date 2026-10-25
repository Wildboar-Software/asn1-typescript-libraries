/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PacketIdentificationList, _decode_PacketIdentificationList, _encode_PacketIdentificationList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentificationList.ta.mjs";
import { PacketRadiatedInfo, _decode_PacketRadiatedInfo, _encode_PacketRadiatedInfo } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketRadiatedInfo.ta.mjs";
import { type FopAlert, _decode_FopAlert, _encode_FopAlert } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FopAlert.ta.mjs";
import { type DirectiveExecutedId, _decode_DirectiveExecutedId, _encode_DirectiveExecutedId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DirectiveExecutedId.ta.mjs";
import { NegativeConfirmResponseToDirective, _decode_NegativeConfirmResponseToDirective, _encode_NegativeConfirmResponseToDirective } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/NegativeConfirmResponseToDirective.ta.mjs";
import { type EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/EventInvocationId.ta.mjs";


/**
 * @summary FspNotification
 * @description
 * 
 * Event reported by FSP-ASYNC-NOTIFY. Annex A spells one alternative
 * `positiveConfirmResponceToDirective`.
 * 
 * `packetProcessingStarted` means the Packet was taken from the requests queue
 * and forwarded to the packets queue. Section 3.6.2.12 says the notification
 * is invoked when the Packet moves from the packets queue to the segments
 * queue. It is sent only when the transfer asked for a processing-started
 * notification, and only to the submitting user. The list contains that one
 * identification, equal to packet-identification-last-processed.
 * 
 * `packetRadiated` means radiation completed. For sequence-controlled
 * transmission at least one CLCW acknowledgement may still be outstanding. Sent
 * only when radiation notification was requested, and only to the submitting
 * user. The list contains one identification. `PacketRadiatedInfo` also carries
 * the frame sequence number.
 * 
 * `packetAcknowledged` means sequence-controlled transfer completed: every
 * component was acknowledged in the CLCW stream. The Packet is guaranteed to
 * have been received by the space element. Acceptance, reassembly, and
 * execution are determined from telemetry. Sent only when acknowledgement
 * notification was requested. The single list entry equals
 * packet-identification-last-ok.
 * 
 * `slduExpired` means processing of the first listed Packet did not begin by
 * its latest production time. Packets of this instance not yet passed to the
 * segment queues are discarded and listed. Further FSP-TRANSFER-DATA
 * invocations are rejected with `unableToProcess` until the user invokes
 * FSP-STOP and then FSP-START.
 * 
 * `packetTransmissionModeMismatch` means the provider configuration cannot
 * transmit in the requested mode while production status is still operational.
 * The mode may have been disabled by service management, by a directive, or by
 * a FOP alert. Packets of this user that require the unsupported mode and have
 * not finished production are discarded, including Frame Data Units already
 * built, and are listed. AD mode for the instance is blocked until an unblock
 * transfer is accepted. If the last-processed Packet is in the list and its
 * status was production started, the status becomes unsupported transmission
 * mode and the stop time is the time of the capability change. A radiated
 * status is left unchanged.
 * 
 * `transmissionModeCapabilityChange` reports a change in the ability to handle
 * AD Packets, with the FOP alert that ended the sequence-controlled guarantee,
 * or `noAlert` when the guarantee did not end. It is sent while production
 * status is still operational, or when status changed from an operational
 * sub-state other than BD to interrupted and this user is not told of that
 * transition because none of this user's Packets were in process. The event
 * follows FOP alerts, successful completion of certain directives, and
 * exhaustion of the transmission limit. A mismatch, if any, is notified
 * separately.
 * 
 * `bufferEmpty` means the provider has no further Space Packets buffered for
 * this instance. It is omitted when the empty buffer is the result of FSP-STOP,
 * `slduExpired`, a transmission-mode mismatch, production interrupted, VC
 * aborted, or production halted. The alternative is empty.
 * 
 * `noInvokeDirectiveCapabilityOnthisVC` means the instance that is allowed to
 * invoke directives has left the provider because of FSP-UNBIND,
 * FSP-PEER-ABORT, or protocol abort. Every other user currently connected on
 * the affected VC is notified. The alternative is empty.
 * 
 * `invokeDirectiveCapabilityOnthisVC` means the instance allowed to invoke
 * directives has just bound. Every other user currently connected on the
 * affected VC is notified. The alternative is empty.
 * 
 * `positiveConfirmResponceToDirective` means the directive completed
 * successfully, including FARM-1 where the directive requires action at the
 * receiving end. Only the user who invoked the directive is notified. The value
 * is the directive identification.
 * 
 * `negativeConfirmResponseToDirective` means the directive did not complete.
 * The value identifies the directive and carries the FOP alert. A separate
 * transmission-mode capability change may explain the failure. Only the
 * invoking user is notified.
 * 
 * `vcAborted` follows successful execution of Abort VC. Every connected user of
 * the VC is notified. All Space Packets of the VC are discarded, including
 * Frame Data Units in the segment queues. The list identifies this user's
 * discarded Packets whose production had not finished, and is empty when that
 * user had none.
 * 
 * `productionInterrupted` means processing of this instance's Packets aborted
 * and the listed Packets were discarded, including Frame Data Units already in
 * the segment queues. It is sent when production status is interrupted and at
 * least one Packet of this instance has status production started or, for an AD
 * Packet, radiated, or when a Packet must start processing from its
 * production-time window. If no Packet of this user is in process when status
 * becomes interrupted, the notification waits until the next Packet of this
 * user is due. Further transfers are rejected with `unableToProcess` until
 * FSP-STOP. Transfer resumes with FSP-START after the production-operational
 * notification.
 * 
 * `productionHalted` means service management has stopped production and status
 * is `halted`. Every user connected at the transition is notified. Buffered
 * Packets are discarded and listed; the list is empty when this user had none.
 * Further transfers are rejected until FSP-STOP, and resume with FSP-START
 * after production becomes operational.
 * 
 * `productionOperational` means the production process can process Space
 * Packets and status has changed to operational. It is sent to users who have
 * not yet been told the current status, or who were last told a status other
 * than operational. The initial operational sub-state is BD. The alternative is
 * empty.
 * 
 * `actionListCompleted`, `actionListNotCompleted`, and
 * `eventConditionEvaluatedToFalse` report the throw-event identified by the
 * event-invocation identification. Completed means every associated action
 * finished. Not completed means at least one action did not. Evaluated to false
 * means a required condition was false and the actions were not performed. Only
 * the user who threw the event is notified. Annex H gives conditions that
 * produce the false result for its example events.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.3 through 3.7.2.8, 3.7.3, and annex H.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspNotification                            ::=    CHOICE
 * {  packetProcessingStarted             [0]   PacketIdentificationList
 * ,  packetRadiated                      [1]   PacketRadiatedInfo
 * ,  packetAcknowledged                  [2]   PacketIdentificationList
 * ,  slduExpired                         [3]   PacketIdentificationList
 * ,  packetTransmissionModeMismatch      [4]   PacketIdentificationList
 * ,  transmissionModeCapabilityChange    [5]   FopAlert
 * ,  bufferEmpty                         [6]   NULL
 * ,  noInvokeDirectiveCapabilityOnthisVC [7]   NULL
 * ,  invokeDirectiveCapabilityOnthisVC   [17]  NULL
 * ,  positiveConfirmResponceToDirective  [8]   DirectiveExecutedId
 * ,  negativeConfirmResponseToDirective  [9]
 *                                        NegativeConfirmResponseToDirective
 * ,  vcAborted                           [10]  PacketIdentificationList
 * ,  productionInterrupted               [11]  PacketIdentificationList
 * ,  productionHalted                    [12]  PacketIdentificationList
 * ,  productionOperational               [13]  NULL
 * ,  actionListCompleted                 [14]  EventInvocationId
 * ,  actionListNotCompleted              [15]  EventInvocationId
 * ,  eventConditionEvaluatedToFalse      [16]  EventInvocationId
 * }
 * ```
 */
export
type FspNotification =
    { packetProcessingStarted: PacketIdentificationList } /* CHOICE_ALT_ROOT */
    | { packetRadiated: PacketRadiatedInfo } /* CHOICE_ALT_ROOT */
    | { packetAcknowledged: PacketIdentificationList } /* CHOICE_ALT_ROOT */
    | { slduExpired: PacketIdentificationList } /* CHOICE_ALT_ROOT */
    | { packetTransmissionModeMismatch: PacketIdentificationList } /* CHOICE_ALT_ROOT */
    | { transmissionModeCapabilityChange: FopAlert } /* CHOICE_ALT_ROOT */
    | { bufferEmpty: NULL } /* CHOICE_ALT_ROOT */
    | { noInvokeDirectiveCapabilityOnthisVC: NULL } /* CHOICE_ALT_ROOT */
    | { invokeDirectiveCapabilityOnthisVC: NULL } /* CHOICE_ALT_ROOT */
    | { positiveConfirmResponceToDirective: DirectiveExecutedId } /* CHOICE_ALT_ROOT */
    | { negativeConfirmResponseToDirective: NegativeConfirmResponseToDirective } /* CHOICE_ALT_ROOT */
    | { vcAborted: PacketIdentificationList } /* CHOICE_ALT_ROOT */
    | { productionInterrupted: PacketIdentificationList } /* CHOICE_ALT_ROOT */
    | { productionHalted: PacketIdentificationList } /* CHOICE_ALT_ROOT */
    | { productionOperational: NULL } /* CHOICE_ALT_ROOT */
    | { actionListCompleted: EventInvocationId } /* CHOICE_ALT_ROOT */
    | { actionListNotCompleted: EventInvocationId } /* CHOICE_ALT_ROOT */
    | { eventConditionEvaluatedToFalse: EventInvocationId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspNotification: $.ASN1Decoder<FspNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspNotification (el: _Element): FspNotification {
    if (!_cached_decoder_for_FspNotification) { _cached_decoder_for_FspNotification = $._decode_inextensible_choice<FspNotification>({
    "CONTEXT 0": [ "packetProcessingStarted", $._decode_implicit<PacketIdentificationList>(() => _decode_PacketIdentificationList) ],
    "CONTEXT 1": [ "packetRadiated", $._decode_implicit<PacketRadiatedInfo>(() => _decode_PacketRadiatedInfo) ],
    "CONTEXT 2": [ "packetAcknowledged", $._decode_implicit<PacketIdentificationList>(() => _decode_PacketIdentificationList) ],
    "CONTEXT 3": [ "slduExpired", $._decode_implicit<PacketIdentificationList>(() => _decode_PacketIdentificationList) ],
    "CONTEXT 4": [ "packetTransmissionModeMismatch", $._decode_implicit<PacketIdentificationList>(() => _decode_PacketIdentificationList) ],
    "CONTEXT 5": [ "transmissionModeCapabilityChange", $._decode_implicit<FopAlert>(() => _decode_FopAlert) ],
    "CONTEXT 6": [ "bufferEmpty", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "noInvokeDirectiveCapabilityOnthisVC", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 17": [ "invokeDirectiveCapabilityOnthisVC", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "positiveConfirmResponceToDirective", $._decode_implicit<DirectiveExecutedId>(() => _decode_DirectiveExecutedId) ],
    "CONTEXT 9": [ "negativeConfirmResponseToDirective", $._decode_implicit<NegativeConfirmResponseToDirective>(() => _decode_NegativeConfirmResponseToDirective) ],
    "CONTEXT 10": [ "vcAborted", $._decode_implicit<PacketIdentificationList>(() => _decode_PacketIdentificationList) ],
    "CONTEXT 11": [ "productionInterrupted", $._decode_implicit<PacketIdentificationList>(() => _decode_PacketIdentificationList) ],
    "CONTEXT 12": [ "productionHalted", $._decode_implicit<PacketIdentificationList>(() => _decode_PacketIdentificationList) ],
    "CONTEXT 13": [ "productionOperational", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 14": [ "actionListCompleted", $._decode_implicit<EventInvocationId>(() => _decode_EventInvocationId) ],
    "CONTEXT 15": [ "actionListNotCompleted", $._decode_implicit<EventInvocationId>(() => _decode_EventInvocationId) ],
    "CONTEXT 16": [ "eventConditionEvaluatedToFalse", $._decode_implicit<EventInvocationId>(() => _decode_EventInvocationId) ]
}); }
    return _cached_decoder_for_FspNotification(el);
}

let _cached_encoder_for_FspNotification: $.ASN1Encoder<FspNotification> | null = null;

/**
 * @summary Encodes a(n) FspNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspNotification, encoded as an ASN.1 Element.
 */
export
function _encode_FspNotification (value: FspNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspNotification) { _cached_encoder_for_FspNotification = $._encode_choice<FspNotification>({
    "packetProcessingStarted": $._encode_implicit(_TagClass.context, 0, () => _encode_PacketIdentificationList, $.BER),
    "packetRadiated": $._encode_implicit(_TagClass.context, 1, () => _encode_PacketRadiatedInfo, $.BER),
    "packetAcknowledged": $._encode_implicit(_TagClass.context, 2, () => _encode_PacketIdentificationList, $.BER),
    "slduExpired": $._encode_implicit(_TagClass.context, 3, () => _encode_PacketIdentificationList, $.BER),
    "packetTransmissionModeMismatch": $._encode_implicit(_TagClass.context, 4, () => _encode_PacketIdentificationList, $.BER),
    "transmissionModeCapabilityChange": $._encode_implicit(_TagClass.context, 5, () => _encode_FopAlert, $.BER),
    "bufferEmpty": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "noInvokeDirectiveCapabilityOnthisVC": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "invokeDirectiveCapabilityOnthisVC": $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER),
    "positiveConfirmResponceToDirective": $._encode_implicit(_TagClass.context, 8, () => _encode_DirectiveExecutedId, $.BER),
    "negativeConfirmResponseToDirective": $._encode_implicit(_TagClass.context, 9, () => _encode_NegativeConfirmResponseToDirective, $.BER),
    "vcAborted": $._encode_implicit(_TagClass.context, 10, () => _encode_PacketIdentificationList, $.BER),
    "productionInterrupted": $._encode_implicit(_TagClass.context, 11, () => _encode_PacketIdentificationList, $.BER),
    "productionHalted": $._encode_implicit(_TagClass.context, 12, () => _encode_PacketIdentificationList, $.BER),
    "productionOperational": $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER),
    "actionListCompleted": $._encode_implicit(_TagClass.context, 14, () => _encode_EventInvocationId, $.BER),
    "actionListNotCompleted": $._encode_implicit(_TagClass.context, 15, () => _encode_EventInvocationId, $.BER),
    "eventConditionEvaluatedToFalse": $._encode_implicit(_TagClass.context, 16, () => _encode_EventInvocationId, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspNotification(value, elGetter);
}


/* eslint-enable */

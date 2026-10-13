/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketIdentificationList, _decode_PacketIdentificationList, _encode_PacketIdentificationList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentificationList.ta.mjs";
// export { PacketIdentificationList, _decode_PacketIdentificationList, _encode_PacketIdentificationList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentificationList.ta.mjs";
import { PacketRadiatedInfo, _decode_PacketRadiatedInfo, _encode_PacketRadiatedInfo } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketRadiatedInfo.ta.mjs";
// export { PacketRadiatedInfo, _decode_PacketRadiatedInfo, _encode_PacketRadiatedInfo } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketRadiatedInfo.ta.mjs";
import { FopAlert, _decode_FopAlert, _encode_FopAlert } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FopAlert.ta.mjs";
// export { FopAlert, FopAlert_noAlert /* IMPORTED_LONG_NAMED_INTEGER */, noAlert /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_limit /* IMPORTED_LONG_NAMED_INTEGER */, limit /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_lockOutDetected /* IMPORTED_LONG_NAMED_INTEGER */, lockOutDetected /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_synch /* IMPORTED_LONG_NAMED_INTEGER */, synch /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_invalidNR /* IMPORTED_LONG_NAMED_INTEGER */, invalidNR /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_clcw /* IMPORTED_LONG_NAMED_INTEGER */, clcw /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_lowerLayerOutOfSync /* IMPORTED_LONG_NAMED_INTEGER */, lowerLayerOutOfSync /* IMPORTED_SHORT_NAMED_INTEGER */, FopAlert_terminateADService /* IMPORTED_LONG_NAMED_INTEGER */, terminateADService /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FopAlert, _encode_FopAlert } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FopAlert.ta.mjs";
import { DirectiveExecutedId, _decode_DirectiveExecutedId, _encode_DirectiveExecutedId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DirectiveExecutedId.ta.mjs";
// export { DirectiveExecutedId, _decode_DirectiveExecutedId, _encode_DirectiveExecutedId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/DirectiveExecutedId.ta.mjs";
import { NegativeConfirmResponseToDirective, _decode_NegativeConfirmResponseToDirective, _encode_NegativeConfirmResponseToDirective } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/NegativeConfirmResponseToDirective.ta.mjs";
// export { NegativeConfirmResponseToDirective, _decode_NegativeConfirmResponseToDirective, _encode_NegativeConfirmResponseToDirective } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/NegativeConfirmResponseToDirective.ta.mjs";
import { EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/EventInvocationId.ta.mjs";
// export { EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/EventInvocationId.ta.mjs";


/**
 * @summary FspNotification
 * @description
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

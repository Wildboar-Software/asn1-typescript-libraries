/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/EventInvocationId.ta.mjs";


/**
 * @summary CltuNotification
 * @description
 * 
 * notification-type of CLTU-ASYNC-NOTIFY (section 3.7.2.3).
 *
 * cltuRadiated: the CLTU named by cltu-last-processed finished radiation. Sent
 * only when that CLTU's CLTU-TRANSFER-DATA asked for a report.
 *
 * slduExpired: radiation of the CLTU named by cltu-last-processed did not start
 * by its latest-radiation-time. Further radiation stops, the buffer is
 * discarded, and further CLTU-TRANSFER-DATA is rejected with unable to process.
 * The user clears that block with CLTU-STOP and resumes with CLTU-START.
 *
 * productionInterrupted: production stopped for a condition that may be
 * temporary. In immediate mode this is sent when production-status becomes
 * interrupted. In deferred mode it is sent when status is interrupted and a
 * CLTU's radiation has started or is due. The same block and discard rules as
 * sldu expired apply. After the fault clears, the provider sends
 * productionOperational; the user then STOP and START to resume.
 *
 * productionHalted: management stopped production and production-status is
 * halted, for example because equipment has failed or resources must be
 * reassigned. The same block and discard rules apply. The user clears the block
 * with CLTU-STOP and, after management lifts the halt, resumes with CLTU-START.
 *
 * productionOperational: production-status has changed to operational and the
 * provider can radiate. This follows initial uplink setup or recovery from a
 * halt or an interruption.
 *
 * bufferEmpty: the provider has no further CLTUs buffered for this service
 * instance. This is omitted when the buffer was emptied by CLTU-STOP or by a
 * production interrupted or production halted notification.
 *
 * actionListCompleted: every action started by the CLTU-THROW-EVENT identified
 * here finished successfully.
 *
 * actionListNotCompleted: at least one action of that CLTU-THROW-EVENT did not
 * finish. Complex Management also uses this when event-qualifier fails its
 * checks.
 *
 * eventConditionEvFalse: a required condition was false for the event
 * identified here, so its actions were not performed.
 *
 * The three event alternatives carry the event-invocation-identification
 * (section 3.7.2.4). The provider state does not change. CCSDS 912.1-B-5,
 * sections 3.7.2.3, 3.7.3, and 3.11.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuNotification                  ::=    CHOICE
 * {  cltuRadiated                        [0]   NULL
 * ,  slduExpired                         [1]   NULL
 * ,  productionInterrupted               [2]   NULL
 * ,  productionHalted                    [3]   NULL
 * ,  productionOperational               [4]   NULL
 * ,  bufferEmpty                         [5]   NULL
 * ,  actionListCompleted                 [6]   EventInvocationId
 * ,  actionListNotCompleted              [7]   EventInvocationId
 * ,  eventConditionEvFalse               [8]   EventInvocationId
 * }
 * ```
 */
export
type CltuNotification =
    { cltuRadiated: NULL } /* CHOICE_ALT_ROOT */
    | { slduExpired: NULL } /* CHOICE_ALT_ROOT */
    | { productionInterrupted: NULL } /* CHOICE_ALT_ROOT */
    | { productionHalted: NULL } /* CHOICE_ALT_ROOT */
    | { productionOperational: NULL } /* CHOICE_ALT_ROOT */
    | { bufferEmpty: NULL } /* CHOICE_ALT_ROOT */
    | { actionListCompleted: EventInvocationId } /* CHOICE_ALT_ROOT */
    | { actionListNotCompleted: EventInvocationId } /* CHOICE_ALT_ROOT */
    | { eventConditionEvFalse: EventInvocationId } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuNotification: $.ASN1Decoder<CltuNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuNotification (el: _Element): CltuNotification {
    if (!_cached_decoder_for_CltuNotification) { _cached_decoder_for_CltuNotification = $._decode_inextensible_choice<CltuNotification>({
    "CONTEXT 0": [ "cltuRadiated", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "slduExpired", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "productionInterrupted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "productionHalted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "productionOperational", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "bufferEmpty", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "actionListCompleted", $._decode_implicit<EventInvocationId>(() => _decode_EventInvocationId) ],
    "CONTEXT 7": [ "actionListNotCompleted", $._decode_implicit<EventInvocationId>(() => _decode_EventInvocationId) ],
    "CONTEXT 8": [ "eventConditionEvFalse", $._decode_implicit<EventInvocationId>(() => _decode_EventInvocationId) ]
}); }
    return _cached_decoder_for_CltuNotification(el);
}

let _cached_encoder_for_CltuNotification: $.ASN1Encoder<CltuNotification> | null = null;

/**
 * @summary Encodes a(n) CltuNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuNotification, encoded as an ASN.1 Element.
 */
export
function _encode_CltuNotification (value: CltuNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuNotification) { _cached_encoder_for_CltuNotification = $._encode_choice<CltuNotification>({
    "cltuRadiated": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "slduExpired": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "productionInterrupted": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "productionHalted": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "productionOperational": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "bufferEmpty": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "actionListCompleted": $._encode_implicit(_TagClass.context, 6, () => _encode_EventInvocationId, $.BER),
    "actionListNotCompleted": $._encode_implicit(_TagClass.context, 7, () => _encode_EventInvocationId, $.BER),
    "eventConditionEvFalse": $._encode_implicit(_TagClass.context, 8, () => _encode_EventInvocationId, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuNotification(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventInvocationId, _decode_EventInvocationId, _encode_EventInvocationId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/EventInvocationId.ta.mjs";


/**
 * @summary CltuNotification
 * @description
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

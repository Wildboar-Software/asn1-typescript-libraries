/* eslint-disable */
import {
    INTEGER,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntPosLong, _decode_IntPosLong, _encode_IntPosLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosLong.ta.mjs";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";
import { FspInvokeDirectiveInvocation_directive_setTimeoutType, _decode_FspInvokeDirectiveInvocation_directive_setTimeoutType, _encode_FspInvokeDirectiveInvocation_directive_setTimeoutType } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspInvokeDirectiveInvocation-directive-setTimeoutType.ta.mjs";
import { MapMuxControl, _decode_MapMuxControl, _encode_MapMuxControl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MapMuxControl.ta.mjs";



import { integerInRange } from "../../constraints.mjs";

/**
 * @summary FspInvokeDirectiveInvocation_directive
 * @description
 * 
 * Directive code and associated parameter of FSP-INVOKE-DIRECTIVE.
 * 
 * `initiateADserviceWithoutCLCW` is Initiate AD Service (without CLCW check).
 * `initiateADserviceWithCLCW` is Initiate AD Service (with CLCW check). Both
 * alternatives are empty.
 * 
 * `initiateADserviceWithUnlock` is Initiate AD Service (with Unlock) and causes
 * a BC segment to be transmitted. The alternative is empty.
 * 
 * `initiateADserviceWithSetVR` is Initiate AD Service (with Set V(R)) and
 * causes a BC segment to be transmitted. Annex A carries an integer from 0 to
 * 255. Section 1.6.1.5 names Receiver_Frame_Sequence_Number V(R) as a term of
 * CCSDS 232.1-B-2. This issue does not restate the definition of V(R) or say
 * anything further about the integer.
 * 
 * `terminateADservice` is Terminate AD Service. It deletes the AD Packets
 * currently buffered for transmission on the instance's VC. BD Packets remain
 * buffered. The alternative is empty.
 * 
 * `resumeADservice` is Resume AD Service. After the transmission limit has
 * suspended the AD service, this directive causes FOP-1 to resume in the state
 * it had when it was suspended. The alternative is empty.
 * 
 * `setVS` is Set V(S) to V*(S). Annex A carries an integer from 0 to 255.
 * Section 3.12.2.6 does not define V*(S). Table 3-11 describes
 * Transmitter_Frame_Sequence_Number, V(S), as the Frame Sequence Number N(S)
 * placed in the Transfer Frame Primary Header of the next Type-AD frame after a
 * transmission-mode capability change. Section 1.6.1.5 names V(S) as a term of
 * CCSDS 232.1-B-2.
 * 
 * `setFOPslidingWindowWidth` sets FOP_Sliding_Window_Width to an integer from 1
 * to 255. Table 3-11 defines that width as the number of frames that can be
 * transmitted on the VC before an acknowledgement is required. When the number
 * of unacknowledged AD and BC frames reaches the width, expedited Frame Data
 * Units are still passed to the FOP.
 * 
 * `setT1Initial` sets T1_Initial, in microseconds, to a positive integer. Table
 * 3-11 defines it as the initial countdown when an AD or BC frame is
 * transmitted. Section 1.6.1.5 names T1_Initial as a term of CCSDS 232.1-B-2.
 * 
 * `setTransmissionLimit` sets Transmission_Limit. Annex A types the directive
 * parameter as a positive short integer, 1 through 65535. Table 3-11 defines
 * the managed parameter as the maximum number of times the first frame on the
 * Sent_Queue may be transmitted, and types the reported value as an integer
 * from 1 to 255. A parameter the provider finds out of range is rejected with
 * `directiveError`. Section 3.12.2.6 cites CCSDS 232.1-B-2 for the Sent_Queue
 * rule.
 * 
 * `setTimeoutType` sets Timeout_Type. The codes are documented on
 * `FspInvokeDirectiveInvocation_directive_setTimeoutType`.
 * 
 * `abortVC` is Abort VC. It implies Terminate AD Service and deletes the frames
 * that segmentation and MAP multiplexing have queued for the Forward CLTU
 * Generation functional group. Every Space Packet on the VC is affected,
 * including BD Packets. After successful execution, BD Packets can be handled.
 * AD transmission requires one of the Initiate AD Service directives. The
 * alternative is empty. All queues of that VC are cleared.
 * 
 * `modifyMapMuxControl` changes the priority with which concurrent MAPs are
 * multiplexed into the instance's VC. The value is a priority list or a polling
 * vector, according to the multiplexing scheme in effect.
 * 
 * CCSDS 912.3-B-3, sections 3.12.2.6, 3.7.2.14, 3.10.2.5 (table 3-11), B3.15,
 * B3.18, and annex A2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspInvokeDirectiveInvocation-directive ::= CHOICE
 *    {  initiateADserviceWithoutCLCW  [0]   NULL
 *    ,  initiateADserviceWithCLCW     [1]   NULL
 *    ,  initiateADserviceWithUnlock   [2]   NULL
 *    ,  initiateADserviceWithSetVR    [3]   INTEGER (0 .. 255)
 *    ,  terminateADservice            [4]   NULL
 *    ,  resumeADservice               [5]   NULL
 *    ,  setVS                         [6]   INTEGER (0 .. 255)
 *    ,  setFOPslidingWindowWidth      [7]   INTEGER (1 .. 255)
 *    ,  setT1Initial                  [8]   IntPosLong  -- in
 *                                                             -- microseconds
 *    ,  setTransmissionLimit          [9]   IntPosShort
 *    ,  setTimeoutType                [10]  INTEGER
 *       {  terminateAD                         (0)
 *       ,  suspendAD                           (1)
 *       }
 *    ,  abortVC                       [11]  NULL
 *    ,  modifyMapMuxControl           [12]  MapMuxControl
 *    }
 * ```
 */
export
type FspInvokeDirectiveInvocation_directive =
    { initiateADserviceWithoutCLCW: NULL } /* CHOICE_ALT_ROOT */
    | { initiateADserviceWithCLCW: NULL } /* CHOICE_ALT_ROOT */
    | { initiateADserviceWithUnlock: NULL } /* CHOICE_ALT_ROOT */
    | { initiateADserviceWithSetVR: INTEGER } /* CHOICE_ALT_ROOT */
    | { terminateADservice: NULL } /* CHOICE_ALT_ROOT */
    | { resumeADservice: NULL } /* CHOICE_ALT_ROOT */
    | { setVS: INTEGER } /* CHOICE_ALT_ROOT */
    | { setFOPslidingWindowWidth: INTEGER } /* CHOICE_ALT_ROOT */
    | { setT1Initial: IntPosLong } /* CHOICE_ALT_ROOT */
    | { setTransmissionLimit: IntPosShort } /* CHOICE_ALT_ROOT */
    | { setTimeoutType: FspInvokeDirectiveInvocation_directive_setTimeoutType } /* CHOICE_ALT_ROOT */
    | { abortVC: NULL } /* CHOICE_ALT_ROOT */
    | { modifyMapMuxControl: MapMuxControl } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspInvokeDirectiveInvocation_directive: $.ASN1Decoder<FspInvokeDirectiveInvocation_directive> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspInvokeDirectiveInvocation_directive
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspInvokeDirectiveInvocation_directive (el: _Element): FspInvokeDirectiveInvocation_directive {
    if (!_cached_decoder_for_FspInvokeDirectiveInvocation_directive) { _cached_decoder_for_FspInvokeDirectiveInvocation_directive = $._decode_inextensible_choice<FspInvokeDirectiveInvocation_directive>({
    "CONTEXT 0": [ "initiateADserviceWithoutCLCW", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "initiateADserviceWithCLCW", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "initiateADserviceWithUnlock", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "initiateADserviceWithSetVR", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 4": [ "terminateADservice", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "resumeADservice", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "setVS", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 7": [ "setFOPslidingWindowWidth", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 8": [ "setT1Initial", $._decode_implicit<IntPosLong>(() => _decode_IntPosLong) ],
    "CONTEXT 9": [ "setTransmissionLimit", $._decode_implicit<IntPosShort>(() => _decode_IntPosShort) ],
    "CONTEXT 10": [ "setTimeoutType", $._decode_implicit<FspInvokeDirectiveInvocation_directive_setTimeoutType>(() => _decode_FspInvokeDirectiveInvocation_directive_setTimeoutType) ],
    "CONTEXT 11": [ "abortVC", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 12": [ "modifyMapMuxControl", $._decode_explicit<MapMuxControl>(() => _decode_MapMuxControl) ]
}); }
    const _decoded = _cached_decoder_for_FspInvokeDirectiveInvocation_directive(el);
    if ("initiateADserviceWithSetVR" in _decoded) {
        if (!integerInRange(_decoded.initiateADserviceWithSetVR, 0, 255)) {
            throw new ASN1OverflowError("FspInvokeDirectiveInvocation_directive.initiateADserviceWithSetVR violates INTEGER (0..255)");
        }
    }
    if ("setVS" in _decoded) {
        if (!integerInRange(_decoded.setVS, 0, 255)) {
            throw new ASN1OverflowError("FspInvokeDirectiveInvocation_directive.setVS violates INTEGER (0..255)");
        }
    }
    if ("setFOPslidingWindowWidth" in _decoded) {
        if (!integerInRange(_decoded.setFOPslidingWindowWidth, 1, 255)) {
            throw new ASN1OverflowError("FspInvokeDirectiveInvocation_directive.setFOPslidingWindowWidth violates INTEGER (1..255)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_FspInvokeDirectiveInvocation_directive: $.ASN1Encoder<FspInvokeDirectiveInvocation_directive> | null = null;

/**
 * @summary Encodes a(n) FspInvokeDirectiveInvocation_directive into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspInvokeDirectiveInvocation_directive, encoded as an ASN.1 Element.
 */
export
function _encode_FspInvokeDirectiveInvocation_directive (value: FspInvokeDirectiveInvocation_directive, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspInvokeDirectiveInvocation_directive) { _cached_encoder_for_FspInvokeDirectiveInvocation_directive = $._encode_choice<FspInvokeDirectiveInvocation_directive>({
    "initiateADserviceWithoutCLCW": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "initiateADserviceWithCLCW": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "initiateADserviceWithUnlock": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "initiateADserviceWithSetVR": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "terminateADservice": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "resumeADservice": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "setVS": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "setFOPslidingWindowWidth": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "setT1Initial": $._encode_implicit(_TagClass.context, 8, () => _encode_IntPosLong, $.BER),
    "setTransmissionLimit": $._encode_implicit(_TagClass.context, 9, () => _encode_IntPosShort, $.BER),
    "setTimeoutType": $._encode_implicit(_TagClass.context, 10, () => _encode_FspInvokeDirectiveInvocation_directive_setTimeoutType, $.BER),
    "abortVC": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
    "modifyMapMuxControl": $._encode_explicit(_TagClass.context, 12, () => _encode_MapMuxControl, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspInvokeDirectiveInvocation_directive(value, elGetter);
}


/* eslint-enable */

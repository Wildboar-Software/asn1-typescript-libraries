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
// export { IntPosLong, _decode_IntPosLong, _encode_IntPosLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosLong.ta.mjs";
import { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";
// export { IntPosShort, _decode_IntPosShort, _encode_IntPosShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntPosShort.ta.mjs";
import { FspInvokeDirectiveInvocation_directive_setTimeoutType, _decode_FspInvokeDirectiveInvocation_directive_setTimeoutType, _encode_FspInvokeDirectiveInvocation_directive_setTimeoutType } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspInvokeDirectiveInvocation-directive-setTimeoutType.ta.mjs";
// export { FspInvokeDirectiveInvocation_directive_setTimeoutType, FspInvokeDirectiveInvocation_directive_setTimeoutType_terminateAD /* IMPORTED_LONG_NAMED_INTEGER */, terminateAD /* IMPORTED_SHORT_NAMED_INTEGER */, FspInvokeDirectiveInvocation_directive_setTimeoutType_suspendAD /* IMPORTED_LONG_NAMED_INTEGER */, suspendAD /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FspInvokeDirectiveInvocation_directive_setTimeoutType, _encode_FspInvokeDirectiveInvocation_directive_setTimeoutType } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-INCOMING-PDUS/FspInvokeDirectiveInvocation-directive-setTimeoutType.ta.mjs";
import { MapMuxControl, _decode_MapMuxControl, _encode_MapMuxControl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MapMuxControl.ta.mjs";
// export { MapMuxControl, _decode_MapMuxControl, _encode_MapMuxControl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/MapMuxControl.ta.mjs";


function integerInRange (value: number | bigint, min: bigint, max: bigint): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return n >= min && n <= max;
}

/**
 * @summary FspInvokeDirectiveInvocation_directive
 * @description
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
        if (!integerInRange(_decoded.initiateADserviceWithSetVR, 0n, 255n)) {
            throw new ASN1OverflowError("FspInvokeDirectiveInvocation_directive.initiateADserviceWithSetVR violates INTEGER (0..255)");
        }
    }
    if ("setVS" in _decoded) {
        if (!integerInRange(_decoded.setVS, 0n, 255n)) {
            throw new ASN1OverflowError("FspInvokeDirectiveInvocation_directive.setVS violates INTEGER (0..255)");
        }
    }
    if ("setFOPslidingWindowWidth" in _decoded) {
        if (!integerInRange(_decoded.setFOPslidingWindowWidth, 1n, 255n)) {
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

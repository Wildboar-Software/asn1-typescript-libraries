/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RafGetParameter_parBufferSize, _decode_RafGetParameter_parBufferSize, _encode_RafGetParameter_parBufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parBufferSize.ta.mjs";
// export { RafGetParameter_parBufferSize, _decode_RafGetParameter_parBufferSize, _encode_RafGetParameter_parBufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parBufferSize.ta.mjs";
import { RafGetParameter_parDeliveryMode, _decode_RafGetParameter_parDeliveryMode, _encode_RafGetParameter_parDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parDeliveryMode.ta.mjs";
// export { RafGetParameter_parDeliveryMode, _decode_RafGetParameter_parDeliveryMode, _encode_RafGetParameter_parDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parDeliveryMode.ta.mjs";
import { RafGetParameter_parLatencyLimit, _decode_RafGetParameter_parLatencyLimit, _encode_RafGetParameter_parLatencyLimit } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parLatencyLimit.ta.mjs";
// export { RafGetParameter_parLatencyLimit, _decode_RafGetParameter_parLatencyLimit, _encode_RafGetParameter_parLatencyLimit } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parLatencyLimit.ta.mjs";
import { RafGetParameter_parMinReportingCycle, _decode_RafGetParameter_parMinReportingCycle, _encode_RafGetParameter_parMinReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parMinReportingCycle.ta.mjs";
// export { RafGetParameter_parMinReportingCycle, _decode_RafGetParameter_parMinReportingCycle, _encode_RafGetParameter_parMinReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parMinReportingCycle.ta.mjs";
import { RafGetParameter_parPermittedFrameQuality, _decode_RafGetParameter_parPermittedFrameQuality, _encode_RafGetParameter_parPermittedFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parPermittedFrameQuality.ta.mjs";
// export { RafGetParameter_parPermittedFrameQuality, _decode_RafGetParameter_parPermittedFrameQuality, _encode_RafGetParameter_parPermittedFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parPermittedFrameQuality.ta.mjs";
import { RafGetParameter_parReportingCycle, _decode_RafGetParameter_parReportingCycle, _encode_RafGetParameter_parReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parReportingCycle.ta.mjs";
// export { RafGetParameter_parReportingCycle, _decode_RafGetParameter_parReportingCycle, _encode_RafGetParameter_parReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parReportingCycle.ta.mjs";
import { RafGetParameter_parReqFrameQuality, _decode_RafGetParameter_parReqFrameQuality, _encode_RafGetParameter_parReqFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parReqFrameQuality.ta.mjs";
// export { RafGetParameter_parReqFrameQuality, _decode_RafGetParameter_parReqFrameQuality, _encode_RafGetParameter_parReqFrameQuality } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parReqFrameQuality.ta.mjs";
import { RafGetParameter_parReturnTimeout, _decode_RafGetParameter_parReturnTimeout, _encode_RafGetParameter_parReturnTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parReturnTimeout.ta.mjs";
// export { RafGetParameter_parReturnTimeout, _decode_RafGetParameter_parReturnTimeout, _encode_RafGetParameter_parReturnTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/RafGetParameter-parReturnTimeout.ta.mjs";


/**
 * @summary RafGetParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafGetParameter       ::=  CHOICE
 * {   parBufferSize            [0] SEQUENCE
 *     {   parameterName                ParameterName (bufferSize)
 *     ,   parameterValue               IntPosShort
 *                                      -- bufferSize in number of invocations
 *                                      -- that can be held in buffer
 *     }
 * ,   parDeliveryMode          [1] SEQUENCE
 *     {   parameterName                ParameterName (deliveryMode)
 *     ,   parameterValue               RafDeliveryMode
 *     }
 * ,   parLatencyLimit          [2] SEQUENCE
 *     {   parameterName                ParameterName (latencyLimit)
 *     ,   parameterValue               CHOICE
 *         {   online                   [0] IntPosShort
 *                                               -- latencyLimit in seconds
 *         ,   offline                  [1] NULL
 *         }
 *     }
 * ,   parMinReportingCycle      [7] SEQUENCE
 *     {   parameterName                ParameterName (minReportingCycle)
 *     ,   parameterValue               IntPosShort (1 .. 600)
 *     }
 * ,   parPermittedFrameQuality [6] SEQUENCE
 *     {   parameterName                ParameterName (permittedFrameQuality)
 *     ,   parameterValue               PermittedFrameQualitySet
 *     }
 * ,   parReportingCycle        [3] SEQUENCE
 *     {   parameterName                ParameterName (reportingCycle)
 *     ,   parameterValue               CurrentReportingCycle
 *     }
 * ,   parReqFrameQuality       [4] SEQUENCE
 *     {   parameterName                ParameterName (requestedFrameQuality)
 *     ,   parameterValue               INTEGER
 *         {   goodFramesOnly                (0)
 *         ,   erredFrameOnly                (1)
 *         ,   allFrames                     (2)
 *         }
 *     }
 * ,   parReturnTimeout         [5] SEQUENCE
 *     {   parameterName                ParameterName (returnTimeoutPeriod)
 *     ,   parameterValue               TimeoutPeriod
 *     }
 * }
 * ```
 */
export
type RafGetParameter =
    { parBufferSize: RafGetParameter_parBufferSize } /* CHOICE_ALT_ROOT */
    | { parDeliveryMode: RafGetParameter_parDeliveryMode } /* CHOICE_ALT_ROOT */
    | { parLatencyLimit: RafGetParameter_parLatencyLimit } /* CHOICE_ALT_ROOT */
    | { parMinReportingCycle: RafGetParameter_parMinReportingCycle } /* CHOICE_ALT_ROOT */
    | { parPermittedFrameQuality: RafGetParameter_parPermittedFrameQuality } /* CHOICE_ALT_ROOT */
    | { parReportingCycle: RafGetParameter_parReportingCycle } /* CHOICE_ALT_ROOT */
    | { parReqFrameQuality: RafGetParameter_parReqFrameQuality } /* CHOICE_ALT_ROOT */
    | { parReturnTimeout: RafGetParameter_parReturnTimeout } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RafGetParameter: $.ASN1Decoder<RafGetParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafGetParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafGetParameter (el: _Element): RafGetParameter {
    if (!_cached_decoder_for_RafGetParameter) { _cached_decoder_for_RafGetParameter = $._decode_inextensible_choice<RafGetParameter>({
    "CONTEXT 0": [ "parBufferSize", $._decode_implicit<RafGetParameter_parBufferSize>(() => _decode_RafGetParameter_parBufferSize) ],
    "CONTEXT 1": [ "parDeliveryMode", $._decode_implicit<RafGetParameter_parDeliveryMode>(() => _decode_RafGetParameter_parDeliveryMode) ],
    "CONTEXT 2": [ "parLatencyLimit", $._decode_implicit<RafGetParameter_parLatencyLimit>(() => _decode_RafGetParameter_parLatencyLimit) ],
    "CONTEXT 7": [ "parMinReportingCycle", $._decode_implicit<RafGetParameter_parMinReportingCycle>(() => _decode_RafGetParameter_parMinReportingCycle) ],
    "CONTEXT 6": [ "parPermittedFrameQuality", $._decode_implicit<RafGetParameter_parPermittedFrameQuality>(() => _decode_RafGetParameter_parPermittedFrameQuality) ],
    "CONTEXT 3": [ "parReportingCycle", $._decode_implicit<RafGetParameter_parReportingCycle>(() => _decode_RafGetParameter_parReportingCycle) ],
    "CONTEXT 4": [ "parReqFrameQuality", $._decode_implicit<RafGetParameter_parReqFrameQuality>(() => _decode_RafGetParameter_parReqFrameQuality) ],
    "CONTEXT 5": [ "parReturnTimeout", $._decode_implicit<RafGetParameter_parReturnTimeout>(() => _decode_RafGetParameter_parReturnTimeout) ]
}); }
    return _cached_decoder_for_RafGetParameter(el);
}

let _cached_encoder_for_RafGetParameter: $.ASN1Encoder<RafGetParameter> | null = null;

/**
 * @summary Encodes a(n) RafGetParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafGetParameter, encoded as an ASN.1 Element.
 */
export
function _encode_RafGetParameter (value: RafGetParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafGetParameter) { _cached_encoder_for_RafGetParameter = $._encode_choice<RafGetParameter>({
    "parBufferSize": $._encode_implicit(_TagClass.context, 0, () => _encode_RafGetParameter_parBufferSize, $.BER),
    "parDeliveryMode": $._encode_implicit(_TagClass.context, 1, () => _encode_RafGetParameter_parDeliveryMode, $.BER),
    "parLatencyLimit": $._encode_implicit(_TagClass.context, 2, () => _encode_RafGetParameter_parLatencyLimit, $.BER),
    "parMinReportingCycle": $._encode_implicit(_TagClass.context, 7, () => _encode_RafGetParameter_parMinReportingCycle, $.BER),
    "parPermittedFrameQuality": $._encode_implicit(_TagClass.context, 6, () => _encode_RafGetParameter_parPermittedFrameQuality, $.BER),
    "parReportingCycle": $._encode_implicit(_TagClass.context, 3, () => _encode_RafGetParameter_parReportingCycle, $.BER),
    "parReqFrameQuality": $._encode_implicit(_TagClass.context, 4, () => _encode_RafGetParameter_parReqFrameQuality, $.BER),
    "parReturnTimeout": $._encode_implicit(_TagClass.context, 5, () => _encode_RafGetParameter_parReturnTimeout, $.BER),
}, $.BER); }
    return _cached_encoder_for_RafGetParameter(value, elGetter);
}


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RcfGetParameter_parBufferSize, _decode_RcfGetParameter_parBufferSize, _encode_RcfGetParameter_parBufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parBufferSize.ta.mjs";
// export { RcfGetParameter_parBufferSize, _decode_RcfGetParameter_parBufferSize, _encode_RcfGetParameter_parBufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parBufferSize.ta.mjs";
import { RcfGetParameter_parDeliveryMode, _decode_RcfGetParameter_parDeliveryMode, _encode_RcfGetParameter_parDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parDeliveryMode.ta.mjs";
// export { RcfGetParameter_parDeliveryMode, _decode_RcfGetParameter_parDeliveryMode, _encode_RcfGetParameter_parDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parDeliveryMode.ta.mjs";
import { RcfGetParameter_parLatencyLimit, _decode_RcfGetParameter_parLatencyLimit, _encode_RcfGetParameter_parLatencyLimit } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parLatencyLimit.ta.mjs";
// export { RcfGetParameter_parLatencyLimit, _decode_RcfGetParameter_parLatencyLimit, _encode_RcfGetParameter_parLatencyLimit } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parLatencyLimit.ta.mjs";
import { RcfGetParameter_parMinReportingCycle, _decode_RcfGetParameter_parMinReportingCycle, _encode_RcfGetParameter_parMinReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parMinReportingCycle.ta.mjs";
// export { RcfGetParameter_parMinReportingCycle, _decode_RcfGetParameter_parMinReportingCycle, _encode_RcfGetParameter_parMinReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parMinReportingCycle.ta.mjs";
import { RcfGetParameter_parPermittedGvcidSet, _decode_RcfGetParameter_parPermittedGvcidSet, _encode_RcfGetParameter_parPermittedGvcidSet } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parPermittedGvcidSet.ta.mjs";
// export { RcfGetParameter_parPermittedGvcidSet, _decode_RcfGetParameter_parPermittedGvcidSet, _encode_RcfGetParameter_parPermittedGvcidSet } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parPermittedGvcidSet.ta.mjs";
import { RcfGetParameter_parReportingCycle, _decode_RcfGetParameter_parReportingCycle, _encode_RcfGetParameter_parReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parReportingCycle.ta.mjs";
// export { RcfGetParameter_parReportingCycle, _decode_RcfGetParameter_parReportingCycle, _encode_RcfGetParameter_parReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parReportingCycle.ta.mjs";
import { RcfGetParameter_parReqGvcId, _decode_RcfGetParameter_parReqGvcId, _encode_RcfGetParameter_parReqGvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parReqGvcId.ta.mjs";
// export { RcfGetParameter_parReqGvcId, _decode_RcfGetParameter_parReqGvcId, _encode_RcfGetParameter_parReqGvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parReqGvcId.ta.mjs";
import { RcfGetParameter_parReturnTimeout, _decode_RcfGetParameter_parReturnTimeout, _encode_RcfGetParameter_parReturnTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parReturnTimeout.ta.mjs";
// export { RcfGetParameter_parReturnTimeout, _decode_RcfGetParameter_parReturnTimeout, _encode_RcfGetParameter_parReturnTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/RcfGetParameter-parReturnTimeout.ta.mjs";


/**
 * @summary RcfGetParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfGetParameter      ::=  CHOICE
 * { parBufferSize            [0]   SEQUENCE
 *    { parameterName                  ParameterName (bufferSize)
 *    , parameterValue                 IntPosShort
 *                                     -- bufferSize in number of invocations
 *                                     -- that can be held in buffer
 *     }
 * ,   parDeliveryMode        [1]   SEQUENCE
 *     { parameterName                 ParameterName (deliveryMode)
 *     , parameterValue                RcfDeliveryMode
 *     }
 * ,   parLatencyLimit        [2]   SEQUENCE
 *     { parameterName                  ParameterName (latencyLimit)
 *     , parameterValue                 CHOICE
 *        { online                  [0]    IntPosShort
 *                                               -- latencyLimit in seconds
 *        ,   offline               [1]    NULL
 *        }
 *     }
 * ,   parMinReportingCycle   [7]   SEQUENCE
 *     { parameterName                 ParameterName (minReportingCycle)
 *     , parameterValue                IntPosShort (1 .. 600)
 *     }
 * ,   parPermittedGvcidSet   [3]   SEQUENCE
 *     { parameterName                 ParameterName (permittedGvcidSet)
 *     , parameterValue                GvcIdSet
 *     }
 * ,   parReportingCycle      [4]   SEQUENCE
 *     { parameterName                 ParameterName (reportingCycle)
 *     , parameterValue                CurrentReportingCycle
 *     }
 * ,   parReqGvcId            [5]   SEQUENCE
 *     { parameterName                 ParameterName (requestedGvcid)
 *     , parameterValue                RequestedGvcId
 *     }
 * ,   parReturnTimeout       [6]   SEQUENCE
 *     { parameterName                 ParameterName (returnTimeoutPeriod)
 *     , parameterValue                TimeoutPeriod
 *     }
 * }
 * ```
 */
export
type RcfGetParameter =
    { parBufferSize: RcfGetParameter_parBufferSize } /* CHOICE_ALT_ROOT */
    | { parDeliveryMode: RcfGetParameter_parDeliveryMode } /* CHOICE_ALT_ROOT */
    | { parLatencyLimit: RcfGetParameter_parLatencyLimit } /* CHOICE_ALT_ROOT */
    | { parMinReportingCycle: RcfGetParameter_parMinReportingCycle } /* CHOICE_ALT_ROOT */
    | { parPermittedGvcidSet: RcfGetParameter_parPermittedGvcidSet } /* CHOICE_ALT_ROOT */
    | { parReportingCycle: RcfGetParameter_parReportingCycle } /* CHOICE_ALT_ROOT */
    | { parReqGvcId: RcfGetParameter_parReqGvcId } /* CHOICE_ALT_ROOT */
    | { parReturnTimeout: RcfGetParameter_parReturnTimeout } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RcfGetParameter: $.ASN1Decoder<RcfGetParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfGetParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfGetParameter (el: _Element): RcfGetParameter {
    if (!_cached_decoder_for_RcfGetParameter) { _cached_decoder_for_RcfGetParameter = $._decode_inextensible_choice<RcfGetParameter>({
    "CONTEXT 0": [ "parBufferSize", $._decode_implicit<RcfGetParameter_parBufferSize>(() => _decode_RcfGetParameter_parBufferSize) ],
    "CONTEXT 1": [ "parDeliveryMode", $._decode_implicit<RcfGetParameter_parDeliveryMode>(() => _decode_RcfGetParameter_parDeliveryMode) ],
    "CONTEXT 2": [ "parLatencyLimit", $._decode_implicit<RcfGetParameter_parLatencyLimit>(() => _decode_RcfGetParameter_parLatencyLimit) ],
    "CONTEXT 7": [ "parMinReportingCycle", $._decode_implicit<RcfGetParameter_parMinReportingCycle>(() => _decode_RcfGetParameter_parMinReportingCycle) ],
    "CONTEXT 3": [ "parPermittedGvcidSet", $._decode_implicit<RcfGetParameter_parPermittedGvcidSet>(() => _decode_RcfGetParameter_parPermittedGvcidSet) ],
    "CONTEXT 4": [ "parReportingCycle", $._decode_implicit<RcfGetParameter_parReportingCycle>(() => _decode_RcfGetParameter_parReportingCycle) ],
    "CONTEXT 5": [ "parReqGvcId", $._decode_implicit<RcfGetParameter_parReqGvcId>(() => _decode_RcfGetParameter_parReqGvcId) ],
    "CONTEXT 6": [ "parReturnTimeout", $._decode_implicit<RcfGetParameter_parReturnTimeout>(() => _decode_RcfGetParameter_parReturnTimeout) ]
}); }
    return _cached_decoder_for_RcfGetParameter(el);
}

let _cached_encoder_for_RcfGetParameter: $.ASN1Encoder<RcfGetParameter> | null = null;

/**
 * @summary Encodes a(n) RcfGetParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfGetParameter, encoded as an ASN.1 Element.
 */
export
function _encode_RcfGetParameter (value: RcfGetParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfGetParameter) { _cached_encoder_for_RcfGetParameter = $._encode_choice<RcfGetParameter>({
    "parBufferSize": $._encode_implicit(_TagClass.context, 0, () => _encode_RcfGetParameter_parBufferSize, $.BER),
    "parDeliveryMode": $._encode_implicit(_TagClass.context, 1, () => _encode_RcfGetParameter_parDeliveryMode, $.BER),
    "parLatencyLimit": $._encode_implicit(_TagClass.context, 2, () => _encode_RcfGetParameter_parLatencyLimit, $.BER),
    "parMinReportingCycle": $._encode_implicit(_TagClass.context, 7, () => _encode_RcfGetParameter_parMinReportingCycle, $.BER),
    "parPermittedGvcidSet": $._encode_implicit(_TagClass.context, 3, () => _encode_RcfGetParameter_parPermittedGvcidSet, $.BER),
    "parReportingCycle": $._encode_implicit(_TagClass.context, 4, () => _encode_RcfGetParameter_parReportingCycle, $.BER),
    "parReqGvcId": $._encode_implicit(_TagClass.context, 5, () => _encode_RcfGetParameter_parReqGvcId, $.BER),
    "parReturnTimeout": $._encode_implicit(_TagClass.context, 6, () => _encode_RcfGetParameter_parReturnTimeout, $.BER),
}, $.BER); }
    return _cached_encoder_for_RcfGetParameter(value, elGetter);
}


/* eslint-enable */

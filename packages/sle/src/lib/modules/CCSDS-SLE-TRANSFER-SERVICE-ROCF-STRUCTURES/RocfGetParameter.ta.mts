/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RocfGetParameter_parBufferSize, _decode_RocfGetParameter_parBufferSize, _encode_RocfGetParameter_parBufferSize } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parBufferSize.ta.mjs";
import { RocfGetParameter_parDeliveryMode, _decode_RocfGetParameter_parDeliveryMode, _encode_RocfGetParameter_parDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parDeliveryMode.ta.mjs";
import { RocfGetParameter_parLatencyLimit, _decode_RocfGetParameter_parLatencyLimit, _encode_RocfGetParameter_parLatencyLimit } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parLatencyLimit.ta.mjs";
import { RocfGetParameter_parMinReportingCycle, _decode_RocfGetParameter_parMinReportingCycle, _encode_RocfGetParameter_parMinReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parMinReportingCycle.ta.mjs";
import { RocfGetParameter_parPermittedGvcidSet, _decode_RocfGetParameter_parPermittedGvcidSet, _encode_RocfGetParameter_parPermittedGvcidSet } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parPermittedGvcidSet.ta.mjs";
import { RocfGetParameter_parPermittedRprtTypeSet, _decode_RocfGetParameter_parPermittedRprtTypeSet, _encode_RocfGetParameter_parPermittedRprtTypeSet } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parPermittedRprtTypeSet.ta.mjs";
import { RocfGetParameter_parPermittedTcVcidSet, _decode_RocfGetParameter_parPermittedTcVcidSet, _encode_RocfGetParameter_parPermittedTcVcidSet } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parPermittedTcVcidSet.ta.mjs";
import { RocfGetParameter_parPermittedUpdModeSet, _decode_RocfGetParameter_parPermittedUpdModeSet, _encode_RocfGetParameter_parPermittedUpdModeSet } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parPermittedUpdModeSet.ta.mjs";
import { RocfGetParameter_parReportingCycle, _decode_RocfGetParameter_parReportingCycle, _encode_RocfGetParameter_parReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parReportingCycle.ta.mjs";
import { RocfGetParameter_parReqGvcId, _decode_RocfGetParameter_parReqGvcId, _encode_RocfGetParameter_parReqGvcId } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parReqGvcId.ta.mjs";
import { RocfGetParameter_parReqControlWordType, _decode_RocfGetParameter_parReqControlWordType, _encode_RocfGetParameter_parReqControlWordType } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parReqControlWordType.ta.mjs";
import { RocfGetParameter_parReqTcVcid, _decode_RocfGetParameter_parReqTcVcid, _encode_RocfGetParameter_parReqTcVcid } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parReqTcVcid.ta.mjs";
import { RocfGetParameter_parReqUpdateMode, _decode_RocfGetParameter_parReqUpdateMode, _encode_RocfGetParameter_parReqUpdateMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parReqUpdateMode.ta.mjs";
import { RocfGetParameter_parReturnTimeout, _decode_RocfGetParameter_parReturnTimeout, _encode_RocfGetParameter_parReturnTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RocfGetParameter-parReturnTimeout.ta.mjs";


/**
 * @summary RocfGetParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfGetParameter               ::=    CHOICE
 * {  parBufferSize           [0]   SEQUENCE
 *    {  parameterName                 ParameterName (bufferSize)
 *    ,  parameterValue                IntPosShort
 *                                     -- bufferSize in number of invocations
 *                                     -- that can be held in buffer
 *    }
 * ,  parDeliveryMode         [1]   SEQUENCE
 *    {  parameterName                 ParameterName (deliveryMode)
 *    ,  parameterValue                RocfDeliveryMode
 *    }
 * ,  parLatencyLimit         [2]   SEQUENCE
 *    {  parameterName                 ParameterName (latencyLimit)
 *    ,  parameterValue                CHOICE
 *       {  online                  [0]   IntPosShort
 *                                     -- latencyLimit in seconds
 *       ,  offline                 [1]   NULL
 *       }
 *    }
 * ,  parMinReportingCycle    [13]  SEQUENCE
 *    {  parameterName                 ParameterName (minReportingCycle)
 *    ,  parameterValue                IntPosShort (1 .. 600)
 *    }
 * ,  parPermittedGvcidSet    [3]   SEQUENCE
 *    {  parameterName                 ParameterName (permittedGvcidSet)
 *    ,  parameterValue                GvcIdSet
 *    }
 * ,  parPermittedRprtTypeSet [4]   SEQUENCE
 *    {  parameterName                 ParameterName
 *                                        (permittedControlWordTypeSet)
 *    ,  parameterValue                SEQUENCE OF ControlWordTypeNumber
 *    }
 * ,  parPermittedTcVcidSet   [5]   SEQUENCE
 *    {  parameterName                 ParameterName (permittedTcVcidSet)
 *    ,  parameterValue                TcVcidSet
 *    }
 * ,  parPermittedUpdModeSet  [6]   SEQUENCE
 *    {  parameterName                 ParameterName (permittedUpdateModeSet)
 *    ,  parameterValue                SEQUENCE OF UpdateMode
 *    }
 * ,  parReportingCycle       [7]   SEQUENCE
 *    {  parameterName                 ParameterName (reportingCycle)
 *    ,  parameterValue                CurrentReportingCycle
 *    }
 * ,  parReqGvcId             [8]   SEQUENCE
 *    {  parameterName                 ParameterName (requestedGvcid)
 *    ,  parameterValue                RequestedGvcId
 *    }
 * ,  parReqControlWordType   [9]   SEQUENCE
 *    {  parameterName                 ParameterName
 *                                        (requestedControlWordType)
 *    ,  parameterValue                RequestedControlWordTypeNumber
 *    }
 * ,  parReqTcVcid            [10]  SEQUENCE
 *    {  parameterName                 ParameterName (requestedTcVcid)
 *    ,  parameterValue                RequestedTcVcid
 *    }
 * ,  parReqUpdateMode        [11]  SEQUENCE
 *    {  parameterName                 ParameterName (requestedUpdateMode)
 *    ,  parameterValue                RequestedUpdateMode
 *    }
 * ,  parReturnTimeout        [12]  SEQUENCE
 *    {  parameterName                 ParameterName (returnTimeoutPeriod)
 *    ,  parameterValue                TimeoutPeriod
 *    }
 * }
 * ```
 */
export
type RocfGetParameter =
    { parBufferSize: RocfGetParameter_parBufferSize } /* CHOICE_ALT_ROOT */
    | { parDeliveryMode: RocfGetParameter_parDeliveryMode } /* CHOICE_ALT_ROOT */
    | { parLatencyLimit: RocfGetParameter_parLatencyLimit } /* CHOICE_ALT_ROOT */
    | { parMinReportingCycle: RocfGetParameter_parMinReportingCycle } /* CHOICE_ALT_ROOT */
    | { parPermittedGvcidSet: RocfGetParameter_parPermittedGvcidSet } /* CHOICE_ALT_ROOT */
    | { parPermittedRprtTypeSet: RocfGetParameter_parPermittedRprtTypeSet } /* CHOICE_ALT_ROOT */
    | { parPermittedTcVcidSet: RocfGetParameter_parPermittedTcVcidSet } /* CHOICE_ALT_ROOT */
    | { parPermittedUpdModeSet: RocfGetParameter_parPermittedUpdModeSet } /* CHOICE_ALT_ROOT */
    | { parReportingCycle: RocfGetParameter_parReportingCycle } /* CHOICE_ALT_ROOT */
    | { parReqGvcId: RocfGetParameter_parReqGvcId } /* CHOICE_ALT_ROOT */
    | { parReqControlWordType: RocfGetParameter_parReqControlWordType } /* CHOICE_ALT_ROOT */
    | { parReqTcVcid: RocfGetParameter_parReqTcVcid } /* CHOICE_ALT_ROOT */
    | { parReqUpdateMode: RocfGetParameter_parReqUpdateMode } /* CHOICE_ALT_ROOT */
    | { parReturnTimeout: RocfGetParameter_parReturnTimeout } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RocfGetParameter: $.ASN1Decoder<RocfGetParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfGetParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfGetParameter (el: _Element): RocfGetParameter {
    if (!_cached_decoder_for_RocfGetParameter) { _cached_decoder_for_RocfGetParameter = $._decode_inextensible_choice<RocfGetParameter>({
    "CONTEXT 0": [ "parBufferSize", $._decode_implicit<RocfGetParameter_parBufferSize>(() => _decode_RocfGetParameter_parBufferSize) ],
    "CONTEXT 1": [ "parDeliveryMode", $._decode_implicit<RocfGetParameter_parDeliveryMode>(() => _decode_RocfGetParameter_parDeliveryMode) ],
    "CONTEXT 2": [ "parLatencyLimit", $._decode_implicit<RocfGetParameter_parLatencyLimit>(() => _decode_RocfGetParameter_parLatencyLimit) ],
    "CONTEXT 13": [ "parMinReportingCycle", $._decode_implicit<RocfGetParameter_parMinReportingCycle>(() => _decode_RocfGetParameter_parMinReportingCycle) ],
    "CONTEXT 3": [ "parPermittedGvcidSet", $._decode_implicit<RocfGetParameter_parPermittedGvcidSet>(() => _decode_RocfGetParameter_parPermittedGvcidSet) ],
    "CONTEXT 4": [ "parPermittedRprtTypeSet", $._decode_implicit<RocfGetParameter_parPermittedRprtTypeSet>(() => _decode_RocfGetParameter_parPermittedRprtTypeSet) ],
    "CONTEXT 5": [ "parPermittedTcVcidSet", $._decode_implicit<RocfGetParameter_parPermittedTcVcidSet>(() => _decode_RocfGetParameter_parPermittedTcVcidSet) ],
    "CONTEXT 6": [ "parPermittedUpdModeSet", $._decode_implicit<RocfGetParameter_parPermittedUpdModeSet>(() => _decode_RocfGetParameter_parPermittedUpdModeSet) ],
    "CONTEXT 7": [ "parReportingCycle", $._decode_implicit<RocfGetParameter_parReportingCycle>(() => _decode_RocfGetParameter_parReportingCycle) ],
    "CONTEXT 8": [ "parReqGvcId", $._decode_implicit<RocfGetParameter_parReqGvcId>(() => _decode_RocfGetParameter_parReqGvcId) ],
    "CONTEXT 9": [ "parReqControlWordType", $._decode_implicit<RocfGetParameter_parReqControlWordType>(() => _decode_RocfGetParameter_parReqControlWordType) ],
    "CONTEXT 10": [ "parReqTcVcid", $._decode_implicit<RocfGetParameter_parReqTcVcid>(() => _decode_RocfGetParameter_parReqTcVcid) ],
    "CONTEXT 11": [ "parReqUpdateMode", $._decode_implicit<RocfGetParameter_parReqUpdateMode>(() => _decode_RocfGetParameter_parReqUpdateMode) ],
    "CONTEXT 12": [ "parReturnTimeout", $._decode_implicit<RocfGetParameter_parReturnTimeout>(() => _decode_RocfGetParameter_parReturnTimeout) ]
}); }
    return _cached_decoder_for_RocfGetParameter(el);
}

let _cached_encoder_for_RocfGetParameter: $.ASN1Encoder<RocfGetParameter> | null = null;

/**
 * @summary Encodes a(n) RocfGetParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfGetParameter, encoded as an ASN.1 Element.
 */
export
function _encode_RocfGetParameter (value: RocfGetParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfGetParameter) { _cached_encoder_for_RocfGetParameter = $._encode_choice<RocfGetParameter>({
    "parBufferSize": $._encode_implicit(_TagClass.context, 0, () => _encode_RocfGetParameter_parBufferSize, $.BER),
    "parDeliveryMode": $._encode_implicit(_TagClass.context, 1, () => _encode_RocfGetParameter_parDeliveryMode, $.BER),
    "parLatencyLimit": $._encode_implicit(_TagClass.context, 2, () => _encode_RocfGetParameter_parLatencyLimit, $.BER),
    "parMinReportingCycle": $._encode_implicit(_TagClass.context, 13, () => _encode_RocfGetParameter_parMinReportingCycle, $.BER),
    "parPermittedGvcidSet": $._encode_implicit(_TagClass.context, 3, () => _encode_RocfGetParameter_parPermittedGvcidSet, $.BER),
    "parPermittedRprtTypeSet": $._encode_implicit(_TagClass.context, 4, () => _encode_RocfGetParameter_parPermittedRprtTypeSet, $.BER),
    "parPermittedTcVcidSet": $._encode_implicit(_TagClass.context, 5, () => _encode_RocfGetParameter_parPermittedTcVcidSet, $.BER),
    "parPermittedUpdModeSet": $._encode_implicit(_TagClass.context, 6, () => _encode_RocfGetParameter_parPermittedUpdModeSet, $.BER),
    "parReportingCycle": $._encode_implicit(_TagClass.context, 7, () => _encode_RocfGetParameter_parReportingCycle, $.BER),
    "parReqGvcId": $._encode_implicit(_TagClass.context, 8, () => _encode_RocfGetParameter_parReqGvcId, $.BER),
    "parReqControlWordType": $._encode_implicit(_TagClass.context, 9, () => _encode_RocfGetParameter_parReqControlWordType, $.BER),
    "parReqTcVcid": $._encode_implicit(_TagClass.context, 10, () => _encode_RocfGetParameter_parReqTcVcid, $.BER),
    "parReqUpdateMode": $._encode_implicit(_TagClass.context, 11, () => _encode_RocfGetParameter_parReqUpdateMode, $.BER),
    "parReturnTimeout": $._encode_implicit(_TagClass.context, 12, () => _encode_RocfGetParameter_parReturnTimeout, $.BER),
}, $.BER); }
    return _cached_encoder_for_RocfGetParameter(value, elGetter);
}


/* eslint-enable */

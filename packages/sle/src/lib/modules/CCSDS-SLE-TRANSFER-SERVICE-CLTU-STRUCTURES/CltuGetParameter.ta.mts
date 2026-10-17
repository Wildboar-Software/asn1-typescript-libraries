/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CltuGetParameter_parAcquisitionSequenceLength, _decode_CltuGetParameter_parAcquisitionSequenceLength, _encode_CltuGetParameter_parAcquisitionSequenceLength } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parAcquisitionSequenceLength.ta.mjs";
import { CltuGetParameter_parBitLockRequired, _decode_CltuGetParameter_parBitLockRequired, _encode_CltuGetParameter_parBitLockRequired } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parBitLockRequired.ta.mjs";
import { CltuGetParameter_parClcwGlobalVcId, _decode_CltuGetParameter_parClcwGlobalVcId, _encode_CltuGetParameter_parClcwGlobalVcId } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parClcwGlobalVcId.ta.mjs";
import { CltuGetParameter_parClcwPhysicalChannel, _decode_CltuGetParameter_parClcwPhysicalChannel, _encode_CltuGetParameter_parClcwPhysicalChannel } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parClcwPhysicalChannel.ta.mjs";
import { CltuGetParameter_parDeliveryMode, _decode_CltuGetParameter_parDeliveryMode, _encode_CltuGetParameter_parDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parDeliveryMode.ta.mjs";
import { CltuGetParameter_parCltuIdentification, _decode_CltuGetParameter_parCltuIdentification, _encode_CltuGetParameter_parCltuIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parCltuIdentification.ta.mjs";
import { CltuGetParameter_parEventInvocationIdentification, _decode_CltuGetParameter_parEventInvocationIdentification, _encode_CltuGetParameter_parEventInvocationIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parEventInvocationIdentification.ta.mjs";
import { CltuGetParameter_parMaximumCltuLength, _decode_CltuGetParameter_parMaximumCltuLength, _encode_CltuGetParameter_parMaximumCltuLength } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parMaximumCltuLength.ta.mjs";
import { CltuGetParameter_parMinimumDelayTime, _decode_CltuGetParameter_parMinimumDelayTime, _encode_CltuGetParameter_parMinimumDelayTime } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parMinimumDelayTime.ta.mjs";
import { CltuGetParameter_parMinReportingCycle, _decode_CltuGetParameter_parMinReportingCycle, _encode_CltuGetParameter_parMinReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parMinReportingCycle.ta.mjs";
import { CltuGetParameter_parModulationFrequency, _decode_CltuGetParameter_parModulationFrequency, _encode_CltuGetParameter_parModulationFrequency } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parModulationFrequency.ta.mjs";
import { CltuGetParameter_parModulationIndex, _decode_CltuGetParameter_parModulationIndex, _encode_CltuGetParameter_parModulationIndex } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parModulationIndex.ta.mjs";
import { CltuGetParameter_parNotificationMode, _decode_CltuGetParameter_parNotificationMode, _encode_CltuGetParameter_parNotificationMode } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parNotificationMode.ta.mjs";
import { CltuGetParameter_parPlop1IdleSequenceLength, _decode_CltuGetParameter_parPlop1IdleSequenceLength, _encode_CltuGetParameter_parPlop1IdleSequenceLength } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parPlop1IdleSequenceLength.ta.mjs";
import { CltuGetParameter_parPlopInEffect, _decode_CltuGetParameter_parPlopInEffect, _encode_CltuGetParameter_parPlopInEffect } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parPlopInEffect.ta.mjs";
import { CltuGetParameter_parProtocolAbortMode, _decode_CltuGetParameter_parProtocolAbortMode, _encode_CltuGetParameter_parProtocolAbortMode } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parProtocolAbortMode.ta.mjs";
import { CltuGetParameter_parReportingCycle, _decode_CltuGetParameter_parReportingCycle, _encode_CltuGetParameter_parReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parReportingCycle.ta.mjs";
import { CltuGetParameter_parReturnTimeout, _decode_CltuGetParameter_parReturnTimeout, _encode_CltuGetParameter_parReturnTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parReturnTimeout.ta.mjs";
import { CltuGetParameter_parRfAvailableRequired, _decode_CltuGetParameter_parRfAvailableRequired, _encode_CltuGetParameter_parRfAvailableRequired } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parRfAvailableRequired.ta.mjs";
import { CltuGetParameter_parSubcarrierToBitRateRatio, _decode_CltuGetParameter_parSubcarrierToBitRateRatio, _encode_CltuGetParameter_parSubcarrierToBitRateRatio } from "../CCSDS-SLE-TRANSFER-SERVICE-CLTU-STRUCTURES/CltuGetParameter-parSubcarrierToBitRateRatio.ta.mjs";


/**
 * @summary CltuGetParameter
 * @description
 * 
 * The parameter value returned by a positive CLTU-GET-PARAMETER. Each
 * alternative is one row of table 3-11, with the ParameterName that identifies
 * it. Omitted from the return when the result is negative. CCSDS 912.1-B-5,
 * section 3.10 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter                  ::=    CHOICE
 * {  parAcquisitionSequenceLength     [0]   SEQUENCE
 *    {  parameterName                    ParameterName(acquisitionSequenceLength)
 *    , parameterValue                    IntUnsignedShort
 *    }
 * ,  parBitLockRequired               [1]   SEQUENCE
 *    {  parameterName                    ParameterName  (bitLockRequired)
 *    ,  parameterValue                   INTEGER
 *       {  yes                                          (0)
 *       ,  no                                           (1)
 *       }
 *    }
 * ,  parClcwGlobalVcId                [2]   SEQUENCE
 *    {  parameterName                    ParameterName  (clcwGlobalVcId)
 *    ,  parameterValue                   ClcwGvcId
 *    }
 * ,  parClcwPhysicalChannel           [3]   SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (clcwPhysicalChannel)
 * ,  parameterValue                      ClcwPhysicalChannel
 *    }
 * ,  parDeliveryMode                  [4]   SEQUENCE
 *    {  parameterName                    ParameterName (deliveryMode)
 *    ,  parameterValue                   CltuDeliveryMode
 *    }
 * ,  parCltuIdentification            [5]   SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (expectedSlduIdentification)
 *    ,  parameterValue                   CltuIdentification
 *    }
 * ,  parEventInvocationIdentification [6]   SEQUENCE
 *    {  parameterName                    ParameterName
 *                                  (expectedEventInvocationIdentification)
 *    , parameterValue                    EventInvocationId
 *    }
 * ,  parMaximumCltuLength             [7]   SEQUENCE
 *    {  parameterName                    ParameterName (maximumSlduLength)
 *    ,  parameterValue                   INTEGER (12 .. 4096)
 *    }
 * ,  parMinimumDelayTime              [8]   SEQUENCE
 *    {  parameterName                    ParameterName (minimumDelayTime)
 *    ,  parameterValue                   Duration
 *    }
 * ,  parMinReportingCycle             [19] SEQUENCE
 *    {  parameterName                    ParameterName (minReportingCycle)
 *    ,  parameterValue                   IntPosShort (1 .. 600)
 *    }
 * ,  parModulationFrequency           [9]   SEQUENCE
 *    {  parameterName                    ParameterName (modulationFrequency)
 *    ,  parameterValue                   ModulationFrequency
 *    }
 * ,  parModulationIndex               [10]  SEQUENCE
 *    {  parameterName                    ParameterName (modulationIndex)
 *    ,  parameterValue                   ModulationIndex
 *    }
 * ,  parNotificationMode              [11]  SEQUENCE
 *    {  parameterName                    ParameterName (notificationMode)
 *    ,  parameterValue                   INTEGER
 *       {  deferred                         (0)
 * 
 * 
 * 
 * 
 *       ,  immediate                        (1)
 *       }
 *    }
 * ,  parPlop1IdleSequenceLength       [12]  SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (plop1IdleSequenceLength)
 *    ,  parameterValue                   IntUnsignedShort
 *    }
 * ,  parPlopInEffect                  [13]  SEQUENCE
 *    {  parameterName                    ParameterName (plopInEffect)
 *    ,  parameterValue                   INTEGER
 *       {  plop1                                  (0)
 *       ,  plop2                                  (1)
 *       }
 *    }
 * ,  parProtocolAbortMode             [14]  SEQUENCE
 *    {  parameterName                    ParameterName (protocolAbortMode)
 *    ,  parameterValue                   INTEGER
 *       {  abort                                  (0)
 *       ,  continue                               (1)
 *       }
 *    }
 * ,  parReportingCycle                [15]  SEQUENCE
 *    {  parameterName                    ParameterName (reportingCycle)
 *    ,  parameterValue                   CurrentReportingCycle
 *    }
 * ,  parReturnTimeout                 [16]  SEQUENCE
 *    {  parameterName                    ParameterName (returnTimeoutPeriod)
 *    ,  parameterValue                   TimeoutPeriod
 *    }
 * ,  parRfAvailableRequired           [17]  SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (rfAvailableRequired)
 *    ,  parameterValue                   INTEGER
 *       {  yes                                    (0)
 *       ,  no                                     (1)
 *       }
 *    }
 * ,  parSubcarrierToBitRateRatio      [18]  SEQUENCE
 *    {  parameterName                    ParameterName
 *                                           (subcarrierToBitRateRatio)
 *    ,  parameterValue                   SubcarrierDivisor
 *    }
 * }
 * ```
 */
export
type CltuGetParameter =
    { parAcquisitionSequenceLength: CltuGetParameter_parAcquisitionSequenceLength } /* CHOICE_ALT_ROOT */
    | { parBitLockRequired: CltuGetParameter_parBitLockRequired } /* CHOICE_ALT_ROOT */
    | { parClcwGlobalVcId: CltuGetParameter_parClcwGlobalVcId } /* CHOICE_ALT_ROOT */
    | { parClcwPhysicalChannel: CltuGetParameter_parClcwPhysicalChannel } /* CHOICE_ALT_ROOT */
    | { parDeliveryMode: CltuGetParameter_parDeliveryMode } /* CHOICE_ALT_ROOT */
    | { parCltuIdentification: CltuGetParameter_parCltuIdentification } /* CHOICE_ALT_ROOT */
    | { parEventInvocationIdentification: CltuGetParameter_parEventInvocationIdentification } /* CHOICE_ALT_ROOT */
    | { parMaximumCltuLength: CltuGetParameter_parMaximumCltuLength } /* CHOICE_ALT_ROOT */
    | { parMinimumDelayTime: CltuGetParameter_parMinimumDelayTime } /* CHOICE_ALT_ROOT */
    | { parMinReportingCycle: CltuGetParameter_parMinReportingCycle } /* CHOICE_ALT_ROOT */
    | { parModulationFrequency: CltuGetParameter_parModulationFrequency } /* CHOICE_ALT_ROOT */
    | { parModulationIndex: CltuGetParameter_parModulationIndex } /* CHOICE_ALT_ROOT */
    | { parNotificationMode: CltuGetParameter_parNotificationMode } /* CHOICE_ALT_ROOT */
    | { parPlop1IdleSequenceLength: CltuGetParameter_parPlop1IdleSequenceLength } /* CHOICE_ALT_ROOT */
    | { parPlopInEffect: CltuGetParameter_parPlopInEffect } /* CHOICE_ALT_ROOT */
    | { parProtocolAbortMode: CltuGetParameter_parProtocolAbortMode } /* CHOICE_ALT_ROOT */
    | { parReportingCycle: CltuGetParameter_parReportingCycle } /* CHOICE_ALT_ROOT */
    | { parReturnTimeout: CltuGetParameter_parReturnTimeout } /* CHOICE_ALT_ROOT */
    | { parRfAvailableRequired: CltuGetParameter_parRfAvailableRequired } /* CHOICE_ALT_ROOT */
    | { parSubcarrierToBitRateRatio: CltuGetParameter_parSubcarrierToBitRateRatio } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CltuGetParameter: $.ASN1Decoder<CltuGetParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuGetParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuGetParameter (el: _Element): CltuGetParameter {
    if (!_cached_decoder_for_CltuGetParameter) { _cached_decoder_for_CltuGetParameter = $._decode_inextensible_choice<CltuGetParameter>({
    "CONTEXT 0": [ "parAcquisitionSequenceLength", $._decode_implicit<CltuGetParameter_parAcquisitionSequenceLength>(() => _decode_CltuGetParameter_parAcquisitionSequenceLength) ],
    "CONTEXT 1": [ "parBitLockRequired", $._decode_implicit<CltuGetParameter_parBitLockRequired>(() => _decode_CltuGetParameter_parBitLockRequired) ],
    "CONTEXT 2": [ "parClcwGlobalVcId", $._decode_implicit<CltuGetParameter_parClcwGlobalVcId>(() => _decode_CltuGetParameter_parClcwGlobalVcId) ],
    "CONTEXT 3": [ "parClcwPhysicalChannel", $._decode_implicit<CltuGetParameter_parClcwPhysicalChannel>(() => _decode_CltuGetParameter_parClcwPhysicalChannel) ],
    "CONTEXT 4": [ "parDeliveryMode", $._decode_implicit<CltuGetParameter_parDeliveryMode>(() => _decode_CltuGetParameter_parDeliveryMode) ],
    "CONTEXT 5": [ "parCltuIdentification", $._decode_implicit<CltuGetParameter_parCltuIdentification>(() => _decode_CltuGetParameter_parCltuIdentification) ],
    "CONTEXT 6": [ "parEventInvocationIdentification", $._decode_implicit<CltuGetParameter_parEventInvocationIdentification>(() => _decode_CltuGetParameter_parEventInvocationIdentification) ],
    "CONTEXT 7": [ "parMaximumCltuLength", $._decode_implicit<CltuGetParameter_parMaximumCltuLength>(() => _decode_CltuGetParameter_parMaximumCltuLength) ],
    "CONTEXT 8": [ "parMinimumDelayTime", $._decode_implicit<CltuGetParameter_parMinimumDelayTime>(() => _decode_CltuGetParameter_parMinimumDelayTime) ],
    "CONTEXT 19": [ "parMinReportingCycle", $._decode_implicit<CltuGetParameter_parMinReportingCycle>(() => _decode_CltuGetParameter_parMinReportingCycle) ],
    "CONTEXT 9": [ "parModulationFrequency", $._decode_implicit<CltuGetParameter_parModulationFrequency>(() => _decode_CltuGetParameter_parModulationFrequency) ],
    "CONTEXT 10": [ "parModulationIndex", $._decode_implicit<CltuGetParameter_parModulationIndex>(() => _decode_CltuGetParameter_parModulationIndex) ],
    "CONTEXT 11": [ "parNotificationMode", $._decode_implicit<CltuGetParameter_parNotificationMode>(() => _decode_CltuGetParameter_parNotificationMode) ],
    "CONTEXT 12": [ "parPlop1IdleSequenceLength", $._decode_implicit<CltuGetParameter_parPlop1IdleSequenceLength>(() => _decode_CltuGetParameter_parPlop1IdleSequenceLength) ],
    "CONTEXT 13": [ "parPlopInEffect", $._decode_implicit<CltuGetParameter_parPlopInEffect>(() => _decode_CltuGetParameter_parPlopInEffect) ],
    "CONTEXT 14": [ "parProtocolAbortMode", $._decode_implicit<CltuGetParameter_parProtocolAbortMode>(() => _decode_CltuGetParameter_parProtocolAbortMode) ],
    "CONTEXT 15": [ "parReportingCycle", $._decode_implicit<CltuGetParameter_parReportingCycle>(() => _decode_CltuGetParameter_parReportingCycle) ],
    "CONTEXT 16": [ "parReturnTimeout", $._decode_implicit<CltuGetParameter_parReturnTimeout>(() => _decode_CltuGetParameter_parReturnTimeout) ],
    "CONTEXT 17": [ "parRfAvailableRequired", $._decode_implicit<CltuGetParameter_parRfAvailableRequired>(() => _decode_CltuGetParameter_parRfAvailableRequired) ],
    "CONTEXT 18": [ "parSubcarrierToBitRateRatio", $._decode_implicit<CltuGetParameter_parSubcarrierToBitRateRatio>(() => _decode_CltuGetParameter_parSubcarrierToBitRateRatio) ]
}); }
    return _cached_decoder_for_CltuGetParameter(el);
}

let _cached_encoder_for_CltuGetParameter: $.ASN1Encoder<CltuGetParameter> | null = null;

/**
 * @summary Encodes a(n) CltuGetParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuGetParameter, encoded as an ASN.1 Element.
 */
export
function _encode_CltuGetParameter (value: CltuGetParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuGetParameter) { _cached_encoder_for_CltuGetParameter = $._encode_choice<CltuGetParameter>({
    "parAcquisitionSequenceLength": $._encode_implicit(_TagClass.context, 0, () => _encode_CltuGetParameter_parAcquisitionSequenceLength, $.BER),
    "parBitLockRequired": $._encode_implicit(_TagClass.context, 1, () => _encode_CltuGetParameter_parBitLockRequired, $.BER),
    "parClcwGlobalVcId": $._encode_implicit(_TagClass.context, 2, () => _encode_CltuGetParameter_parClcwGlobalVcId, $.BER),
    "parClcwPhysicalChannel": $._encode_implicit(_TagClass.context, 3, () => _encode_CltuGetParameter_parClcwPhysicalChannel, $.BER),
    "parDeliveryMode": $._encode_implicit(_TagClass.context, 4, () => _encode_CltuGetParameter_parDeliveryMode, $.BER),
    "parCltuIdentification": $._encode_implicit(_TagClass.context, 5, () => _encode_CltuGetParameter_parCltuIdentification, $.BER),
    "parEventInvocationIdentification": $._encode_implicit(_TagClass.context, 6, () => _encode_CltuGetParameter_parEventInvocationIdentification, $.BER),
    "parMaximumCltuLength": $._encode_implicit(_TagClass.context, 7, () => _encode_CltuGetParameter_parMaximumCltuLength, $.BER),
    "parMinimumDelayTime": $._encode_implicit(_TagClass.context, 8, () => _encode_CltuGetParameter_parMinimumDelayTime, $.BER),
    "parMinReportingCycle": $._encode_implicit(_TagClass.context, 19, () => _encode_CltuGetParameter_parMinReportingCycle, $.BER),
    "parModulationFrequency": $._encode_implicit(_TagClass.context, 9, () => _encode_CltuGetParameter_parModulationFrequency, $.BER),
    "parModulationIndex": $._encode_implicit(_TagClass.context, 10, () => _encode_CltuGetParameter_parModulationIndex, $.BER),
    "parNotificationMode": $._encode_implicit(_TagClass.context, 11, () => _encode_CltuGetParameter_parNotificationMode, $.BER),
    "parPlop1IdleSequenceLength": $._encode_implicit(_TagClass.context, 12, () => _encode_CltuGetParameter_parPlop1IdleSequenceLength, $.BER),
    "parPlopInEffect": $._encode_implicit(_TagClass.context, 13, () => _encode_CltuGetParameter_parPlopInEffect, $.BER),
    "parProtocolAbortMode": $._encode_implicit(_TagClass.context, 14, () => _encode_CltuGetParameter_parProtocolAbortMode, $.BER),
    "parReportingCycle": $._encode_implicit(_TagClass.context, 15, () => _encode_CltuGetParameter_parReportingCycle, $.BER),
    "parReturnTimeout": $._encode_implicit(_TagClass.context, 16, () => _encode_CltuGetParameter_parReturnTimeout, $.BER),
    "parRfAvailableRequired": $._encode_implicit(_TagClass.context, 17, () => _encode_CltuGetParameter_parRfAvailableRequired, $.BER),
    "parSubcarrierToBitRateRatio": $._encode_implicit(_TagClass.context, 18, () => _encode_CltuGetParameter_parSubcarrierToBitRateRatio, $.BER),
}, $.BER); }
    return _cached_encoder_for_CltuGetParameter(value, elGetter);
}


/* eslint-enable */

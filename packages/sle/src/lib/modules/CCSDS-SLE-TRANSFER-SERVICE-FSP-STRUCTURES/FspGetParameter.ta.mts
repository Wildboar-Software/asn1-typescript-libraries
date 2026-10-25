/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FspGetParameter_parApidList, _decode_FspGetParameter_parApidList, _encode_FspGetParameter_parApidList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parApidList.ta.mjs";
import { FspGetParameter_parBitLockRequired, _decode_FspGetParameter_parBitLockRequired, _encode_FspGetParameter_parBitLockRequired } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parBitLockRequired.ta.mjs";
import { FspGetParameter_parBlockingTimeout, _decode_FspGetParameter_parBlockingTimeout, _encode_FspGetParameter_parBlockingTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parBlockingTimeout.ta.mjs";
import { FspGetParameter_parBlockingUsage, _decode_FspGetParameter_parBlockingUsage, _encode_FspGetParameter_parBlockingUsage } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parBlockingUsage.ta.mjs";
import { FspGetParameter_parClcwGlobalVcId, _encode_FspGetParameter_parClcwGlobalVcId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parClcwGlobalVcId.ta.mjs";
import { FspGetParameter_parClcwPhysicalChannel, _encode_FspGetParameter_parClcwPhysicalChannel } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parClcwPhysicalChannel.ta.mjs";
import { FspGetParameter_parCopCntrFramesRepetition, _decode_FspGetParameter_parCopCntrFramesRepetition, _encode_FspGetParameter_parCopCntrFramesRepetition } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parCopCntrFramesRepetition.ta.mjs";
import { FspGetParameter_parDeliveryMode, _decode_FspGetParameter_parDeliveryMode, _encode_FspGetParameter_parDeliveryMode } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parDeliveryMode.ta.mjs";
import { FspGetParameter_parDirectiveInvoc, _decode_FspGetParameter_parDirectiveInvoc, _encode_FspGetParameter_parDirectiveInvoc } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parDirectiveInvoc.ta.mjs";
import { FspGetParameter_parDirInvocOnl, _decode_FspGetParameter_parDirInvocOnl, _encode_FspGetParameter_parDirInvocOnl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parDirInvocOnl.ta.mjs";
import { FspGetParameter_parExpectDirectiveId, _decode_FspGetParameter_parExpectDirectiveId, _encode_FspGetParameter_parExpectDirectiveId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parExpectDirectiveId.ta.mjs";
import { FspGetParameter_parExpectEventInvId, _decode_FspGetParameter_parExpectEventInvId, _encode_FspGetParameter_parExpectEventInvId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parExpectEventInvId.ta.mjs";
import { FspGetParameter_parExpectSlduId, _decode_FspGetParameter_parExpectSlduId, _encode_FspGetParameter_parExpectSlduId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parExpectSlduId.ta.mjs";
import { FspGetParameter_parFopSlidWindow, _decode_FspGetParameter_parFopSlidWindow, _encode_FspGetParameter_parFopSlidWindow } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parFopSlidWindow.ta.mjs";
import { FspGetParameter_parFopState, _decode_FspGetParameter_parFopState, _encode_FspGetParameter_parFopState } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parFopState.ta.mjs";
import { FspGetParameter_parMapList, _decode_FspGetParameter_parMapList, _encode_FspGetParameter_parMapList } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parMapList.ta.mjs";
import { FspGetParameter_parMapMuxControl, _decode_FspGetParameter_parMapMuxControl, _encode_FspGetParameter_parMapMuxControl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parMapMuxControl.ta.mjs";
import { FspGetParameter_parMapMuxScheme, _decode_FspGetParameter_parMapMuxScheme, _encode_FspGetParameter_parMapMuxScheme } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parMapMuxScheme.ta.mjs";
import { FspGetParameter_parMaxFrameLength, _decode_FspGetParameter_parMaxFrameLength, _encode_FspGetParameter_parMaxFrameLength } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parMaxFrameLength.ta.mjs";
import { FspGetParameter_parMaxPacketLength, _decode_FspGetParameter_parMaxPacketLength, _encode_FspGetParameter_parMaxPacketLength } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parMaxPacketLength.ta.mjs";
import { FspGetParameter_parMinReportingCycle, _decode_FspGetParameter_parMinReportingCycle, _encode_FspGetParameter_parMinReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parMinReportingCycle.ta.mjs";
import { FspGetParameter_parPermTransMode, _decode_FspGetParameter_parPermTransMode, _encode_FspGetParameter_parPermTransMode } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parPermTransMode.ta.mjs";
import { FspGetParameter_parReportingCycle, _decode_FspGetParameter_parReportingCycle, _encode_FspGetParameter_parReportingCycle } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parReportingCycle.ta.mjs";
import { FspGetParameter_parReturnTimeout, _decode_FspGetParameter_parReturnTimeout, _encode_FspGetParameter_parReturnTimeout } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parReturnTimeout.ta.mjs";
import { FspGetParameter_parRfAvailableRequired, _decode_FspGetParameter_parRfAvailableRequired, _encode_FspGetParameter_parRfAvailableRequired } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parRfAvailableRequired.ta.mjs";
import { FspGetParameter_parSegmHeader, _decode_FspGetParameter_parSegmHeader, _encode_FspGetParameter_parSegmHeader } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parSegmHeader.ta.mjs";
import { FspGetParameter_parSequCntrFramesRepetition, _decode_FspGetParameter_parSequCntrFramesRepetition, _encode_FspGetParameter_parSequCntrFramesRepetition } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parSequCntrFramesRepetition.ta.mjs";
import { FspGetParameter_parThrowEventOperation, _decode_FspGetParameter_parThrowEventOperation, _encode_FspGetParameter_parThrowEventOperation } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parThrowEventOperation.ta.mjs";
import { FspGetParameter_parTimeoutType, _decode_FspGetParameter_parTimeoutType, _encode_FspGetParameter_parTimeoutType } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parTimeoutType.ta.mjs";
import { FspGetParameter_parTimerInitial, _decode_FspGetParameter_parTimerInitial, _encode_FspGetParameter_parTimerInitial } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parTimerInitial.ta.mjs";
import { FspGetParameter_parTransmissLimit, _decode_FspGetParameter_parTransmissLimit, _encode_FspGetParameter_parTransmissLimit } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parTransmissLimit.ta.mjs";
import { FspGetParameter_parTrFrSeqNumber, _decode_FspGetParameter_parTrFrSeqNumber, _encode_FspGetParameter_parTrFrSeqNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parTrFrSeqNumber.ta.mjs";
import { FspGetParameter_parVcMuxControl, _decode_FspGetParameter_parVcMuxControl, _encode_FspGetParameter_parVcMuxControl } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parVcMuxControl.ta.mjs";
import { FspGetParameter_parVcMuxScheme, _decode_FspGetParameter_parVcMuxScheme, _encode_FspGetParameter_parVcMuxScheme } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parVcMuxScheme.ta.mjs";
import { FspGetParameter_parVirtualChannel, _decode_FspGetParameter_parVirtualChannel, _encode_FspGetParameter_parVirtualChannel } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parVirtualChannel.ta.mjs";


/**
 * @summary FspGetParameter
 * @description
 * 
 * Positive result of FSP-GET-PARAMETER: one alternative for each parameter in
 * table 3-11, with the parameter name and its current value. On a negative
 * result the parameter is omitted. The provider remains in state 2 (ready) or
 * state 3 (active).
 * 
 * CCSDS 912.3-B-3, sections 3.10.2.5.2, 3.10.3, and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspGetParameter             ::=    CHOICE
 * {  parApidList          [0]   SEQUENCE
 *    {  parameterName     ParameterName (apidList)
 *    ,  parameterValue    ApidList
 *    }
 * ,  parBitLockRequired   [27]  SEQUENCE
 *    {  parameterName     ParameterName  (bitLockRequired)
 *    ,  parameterValue    INTEGER
 *       {  yes                     (0)
 *       ,  no                      (1)
 *       }
 *    }
 * ,  parBlockingTimeout   [1]   SEQUENCE
 *    {  parameterName        ParameterName(blockingTimeoutPeriod)
 *    ,  parameterValue       CHOICE
 *       {  blockingOff       [0]   NULL
 *       ,  blockingOn        [1]   BlockingTimeoutPeriod
 *       }
 *    }
 * ,  parBlockingUsage     [2]   SEQUENCE
 *    {  parameterName     ParameterName (blockingUsage)
 *    ,  parameterValue    BlockingUsage
 *    }
 * ,  parClcwGlobalVcId    [27]  SEQUENCE
 *    {  parameterName     ParameterName  (clcwGlobalVcId)
 *    ,  parameterValue    ClcwGvcId
 *    }
 * ,  parClcwPhysicalChannel  [28]  SEQUENCE
 *    {  parameterName        ParameterName  (clcwPhysicalChannel)
 *    ,  parameterValue       ClcwPhysicalChannel
 *    }
 * ,  parCopCntrFramesRepetition [29]  SEQUENCE
 *    {  parameterName     ParameterName  (copCntrFramesRepetition)
 *    ,  parameterValue    IntPosShort
 *    }
 * ,  parDeliveryMode      [3]   SEQUENCE
 *    {  parameterName     ParameterName (deliveryMode)
 *    ,  parameterValue    FspDeliveryMode
 *    }
 * ,  parDirectiveInvoc    [4]   SEQUENCE
 *    {  parameterName     ParameterName (directiveInvocation)
 *    ,  parameterValue    INTEGER
 *       {  enabled           (0)
 *       ,  disabled          (1)
 *       }
 *    }
 * ,  parDirInvocOnl       [5]   SEQUENCE
 *    {  parameterName     ParameterName (directiveInvocationOnline)
 *    ,  parameterValue    INTEGER
 *       {  yes               (0)
 *       ,  no                (1)
 *       }
 *    }
 * ,  parExpectDirectiveId [6]   SEQUENCE
 *    {  parameterName     ParameterName  (expectedDirectiveIdentification)
 *    ,  parameterValue    IntUnsignedLong
 *    }
 * ,  parExpectEventInvId  [7]   SEQUENCE
 * {  parameterName        ParameterName
 *                         (expectedEventInvocationIdentification)
 *    ,  parameterValue    IntUnsignedLong
 *    }
 * ,  parExpectSlduId      [8]   SEQUENCE
 *    {  parameterName     ParameterName  (expectedSlduIdentification)
 *    ,  parameterValue    PacketIdentification
 *    }
 * ,  parFopSlidWindow     [9]   SEQUENCE
 *    {  parameterName     ParameterName (fopSlidingWindow)
 *    ,  parameterValue    INTEGER (1 .. 255)
 *    }
 * ,  parFopState          [10]  SEQUENCE
 *    {  parameterName     ParameterName (fopState)
 *    ,  fopState          INTEGER
 *       {  active                     (0)
 *       ,  retransmitWithoutWait      (1)
 *       ,  retransmitWithWait         (2)
 *       ,  initialisingWithoutBCFrame (3)
 *       ,  initialisingWithBCFrame    (4)
 *       ,  initial                    (5)
 *       }
 *    }
 * ,  parMapList           [11]  SEQUENCE
 *    {  parameterName     ParameterName (mapList)
 *    ,  mapList           MapList
 *    }
 * ,  parMapMuxControl     [12]  SEQUENCE
 *    {  parameterName     ParameterName (mapMuxControl)
 *    ,  parameterValue    MuxControl
 *    }
 * ,  parMapMuxScheme      [13]  SEQUENCE
 *    {  parameterName     ParameterName (mapMuxScheme)
 *    ,  parameterValue    MuxScheme
 *    }
 * ,  parMaxFrameLength    [14]  SEQUENCE
 *    {  parameterName     ParameterName (maximumFrameLength)
 *    ,  parameterValue    INTEGER (12 .. 1024) -- octets
 *    }
 * ,  parMaxPacketLength   [15]  SEQUENCE
 *    {  parameterName     ParameterName (maximumPacketLength)
 *    ,  parameterValue    INTEGER (7 .. 65542)
 *    }
 * ,  parMinReportingCycle [30]  SEQUENCE
 *    {  parameterName        ParameterName (minReportingCycle)
 *    ,  parameterValue       IntPosShort (1 .. 600)
 *    }
 * ,  parPermTransMode     [16]  SEQUENCE
 *    {  parameterName     ParameterName (permittedTransmissionMode)
 *    ,  parameterValue    PermittedTransmissionMode
 *    }
 * ,  parReportingCycle    [17]  SEQUENCE
 *    {  parameterName     ParameterName (reportingCycle)
 *    ,  parameterValue    CurrentReportingCycle
 *    }
 * ,  parReturnTimeout     [18]  SEQUENCE
 *    {  parameterName     ParameterName (returnTimeoutPeriod)
 *    ,  parameterValue    TimeoutPeriod
 *    }
 * ,  parRfAvailableRequired  [28]  SEQUENCE
 *    {  parameterName        ParameterName  (rfAvailableRequired)
 *    ,  parameterValue       INTEGER
 *       {  yes                        (0)
 *       ,  no                         (1)
 *       }
 *    }
 * ,  parSegmHeader        [19]  SEQUENCE
 *    {  parameterName     ParameterName (segmentHeader)
 *    ,  parameterValue    INTEGER
 *       {  present           (0)
 *       ,  absent            (1)
 *       }
 *    }
 * ,  parSequCntrFramesRepetition   [31]  SEQUENCE
 *    {  parameterName     ParameterName (sequCntrFramesRepetition)
 *    ,  parameterValue    IntPosShort
 *    }
 * ,  parThrowEventOperation  [32]  SEQUENCE
 *    {  parameterName     ParameterName (throwEventOperation)
 *    ,  parameterValue    INTEGER
 *       {  enabled           (0)
 *       ,  disabled          (1)
 *       }
 *    }
 * ,  parTimeoutType       [20]  SEQUENCE
 *    {  parameterName     ParameterName (timeoutType)
 *    ,  parameterValue    INTEGER
 *       {  generateAlert              (0)
 *       ,  suspendSequenceControlled  (1)
 *       }
 *    }
 * ,  parTimerInitial      [21]  SEQUENCE
 *    {  parameterName     ParameterName (timerInitial)
 *    ,  parameterValue    IntPosLong  -- in microseconds
 *    }
 * ,  parTransmissLimit    [22]  SEQUENCE
 *    {  parameterName     ParameterName (transmissionLimit)
 *    ,  parameterValue    INTEGER (1 .. 255)
 *    }
 * ,  parTrFrSeqNumber     [23]  SEQUENCE
 *    {  parameterName     ParameterName  (transmitterFrameSequenceNumber)
 *    ,  parameterValue    INTEGER (0 .. 255)
 *    }
 * ,  parVcMuxControl      [24]  SEQUENCE
 *    {  parameterName     ParameterName (vcMuxControl)
 *    ,  parameterValue    MuxControl
 *    }
 * ,  parVcMuxScheme       [25]  SEQUENCE
 *    {  parameterName     ParameterName (vcMuxScheme)
 *    ,  parameterValue    MuxScheme
 *    }
 * ,  parVirtualChannel    [26]  SEQUENCE
 *    {  parameterName     ParameterName (virtualChannel)
 *    ,  parameterValue    VcOrMapId
 *    }
 * }
 * ```
 */
export
type FspGetParameter =
    { parApidList: FspGetParameter_parApidList } /* CHOICE_ALT_ROOT */
    | { parBitLockRequired: FspGetParameter_parBitLockRequired } /* CHOICE_ALT_ROOT */
    | { parBlockingTimeout: FspGetParameter_parBlockingTimeout } /* CHOICE_ALT_ROOT */
    | { parBlockingUsage: FspGetParameter_parBlockingUsage } /* CHOICE_ALT_ROOT */
    | { parClcwGlobalVcId: FspGetParameter_parClcwGlobalVcId } /* CHOICE_ALT_ROOT */
    | { parClcwPhysicalChannel: FspGetParameter_parClcwPhysicalChannel } /* CHOICE_ALT_ROOT */
    | { parCopCntrFramesRepetition: FspGetParameter_parCopCntrFramesRepetition } /* CHOICE_ALT_ROOT */
    | { parDeliveryMode: FspGetParameter_parDeliveryMode } /* CHOICE_ALT_ROOT */
    | { parDirectiveInvoc: FspGetParameter_parDirectiveInvoc } /* CHOICE_ALT_ROOT */
    | { parDirInvocOnl: FspGetParameter_parDirInvocOnl } /* CHOICE_ALT_ROOT */
    | { parExpectDirectiveId: FspGetParameter_parExpectDirectiveId } /* CHOICE_ALT_ROOT */
    | { parExpectEventInvId: FspGetParameter_parExpectEventInvId } /* CHOICE_ALT_ROOT */
    | { parExpectSlduId: FspGetParameter_parExpectSlduId } /* CHOICE_ALT_ROOT */
    | { parFopSlidWindow: FspGetParameter_parFopSlidWindow } /* CHOICE_ALT_ROOT */
    | { parFopState: FspGetParameter_parFopState } /* CHOICE_ALT_ROOT */
    | { parMapList: FspGetParameter_parMapList } /* CHOICE_ALT_ROOT */
    | { parMapMuxControl: FspGetParameter_parMapMuxControl } /* CHOICE_ALT_ROOT */
    | { parMapMuxScheme: FspGetParameter_parMapMuxScheme } /* CHOICE_ALT_ROOT */
    | { parMaxFrameLength: FspGetParameter_parMaxFrameLength } /* CHOICE_ALT_ROOT */
    | { parMaxPacketLength: FspGetParameter_parMaxPacketLength } /* CHOICE_ALT_ROOT */
    | { parMinReportingCycle: FspGetParameter_parMinReportingCycle } /* CHOICE_ALT_ROOT */
    | { parPermTransMode: FspGetParameter_parPermTransMode } /* CHOICE_ALT_ROOT */
    | { parReportingCycle: FspGetParameter_parReportingCycle } /* CHOICE_ALT_ROOT */
    | { parReturnTimeout: FspGetParameter_parReturnTimeout } /* CHOICE_ALT_ROOT */
    | { parRfAvailableRequired: FspGetParameter_parRfAvailableRequired } /* CHOICE_ALT_ROOT */
    | { parSegmHeader: FspGetParameter_parSegmHeader } /* CHOICE_ALT_ROOT */
    | { parSequCntrFramesRepetition: FspGetParameter_parSequCntrFramesRepetition } /* CHOICE_ALT_ROOT */
    | { parThrowEventOperation: FspGetParameter_parThrowEventOperation } /* CHOICE_ALT_ROOT */
    | { parTimeoutType: FspGetParameter_parTimeoutType } /* CHOICE_ALT_ROOT */
    | { parTimerInitial: FspGetParameter_parTimerInitial } /* CHOICE_ALT_ROOT */
    | { parTransmissLimit: FspGetParameter_parTransmissLimit } /* CHOICE_ALT_ROOT */
    | { parTrFrSeqNumber: FspGetParameter_parTrFrSeqNumber } /* CHOICE_ALT_ROOT */
    | { parVcMuxControl: FspGetParameter_parVcMuxControl } /* CHOICE_ALT_ROOT */
    | { parVcMuxScheme: FspGetParameter_parVcMuxScheme } /* CHOICE_ALT_ROOT */
    | { parVirtualChannel: FspGetParameter_parVirtualChannel } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FspGetParameter: $.ASN1Decoder<FspGetParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspGetParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspGetParameter (el: _Element): FspGetParameter {
    // The bundled ASN.1 repeats context tag 27 on parBitLockRequired and
    // parClcwGlobalVcId, and context tag 28 on parClcwPhysicalChannel and
    // parRfAvailableRequired. CCSDS 912.3-B-2 assigns 27 to parBitLockRequired
    // and 28 to parRfAvailableRequired, so those alternatives are the ones
    // decoded. The colliding alternatives remain encodable.
    if (!_cached_decoder_for_FspGetParameter) { _cached_decoder_for_FspGetParameter = $._decode_inextensible_choice<FspGetParameter>({
    "CONTEXT 0": [ "parApidList", $._decode_implicit<FspGetParameter_parApidList>(() => _decode_FspGetParameter_parApidList) ],
    "CONTEXT 27": [ "parBitLockRequired", $._decode_implicit<FspGetParameter_parBitLockRequired>(() => _decode_FspGetParameter_parBitLockRequired) ],
    "CONTEXT 1": [ "parBlockingTimeout", $._decode_implicit<FspGetParameter_parBlockingTimeout>(() => _decode_FspGetParameter_parBlockingTimeout) ],
    "CONTEXT 2": [ "parBlockingUsage", $._decode_implicit<FspGetParameter_parBlockingUsage>(() => _decode_FspGetParameter_parBlockingUsage) ],
    "CONTEXT 29": [ "parCopCntrFramesRepetition", $._decode_implicit<FspGetParameter_parCopCntrFramesRepetition>(() => _decode_FspGetParameter_parCopCntrFramesRepetition) ],
    "CONTEXT 3": [ "parDeliveryMode", $._decode_implicit<FspGetParameter_parDeliveryMode>(() => _decode_FspGetParameter_parDeliveryMode) ],
    "CONTEXT 4": [ "parDirectiveInvoc", $._decode_implicit<FspGetParameter_parDirectiveInvoc>(() => _decode_FspGetParameter_parDirectiveInvoc) ],
    "CONTEXT 5": [ "parDirInvocOnl", $._decode_implicit<FspGetParameter_parDirInvocOnl>(() => _decode_FspGetParameter_parDirInvocOnl) ],
    "CONTEXT 6": [ "parExpectDirectiveId", $._decode_implicit<FspGetParameter_parExpectDirectiveId>(() => _decode_FspGetParameter_parExpectDirectiveId) ],
    "CONTEXT 7": [ "parExpectEventInvId", $._decode_implicit<FspGetParameter_parExpectEventInvId>(() => _decode_FspGetParameter_parExpectEventInvId) ],
    "CONTEXT 8": [ "parExpectSlduId", $._decode_implicit<FspGetParameter_parExpectSlduId>(() => _decode_FspGetParameter_parExpectSlduId) ],
    "CONTEXT 9": [ "parFopSlidWindow", $._decode_implicit<FspGetParameter_parFopSlidWindow>(() => _decode_FspGetParameter_parFopSlidWindow) ],
    "CONTEXT 10": [ "parFopState", $._decode_implicit<FspGetParameter_parFopState>(() => _decode_FspGetParameter_parFopState) ],
    "CONTEXT 11": [ "parMapList", $._decode_implicit<FspGetParameter_parMapList>(() => _decode_FspGetParameter_parMapList) ],
    "CONTEXT 12": [ "parMapMuxControl", $._decode_implicit<FspGetParameter_parMapMuxControl>(() => _decode_FspGetParameter_parMapMuxControl) ],
    "CONTEXT 13": [ "parMapMuxScheme", $._decode_implicit<FspGetParameter_parMapMuxScheme>(() => _decode_FspGetParameter_parMapMuxScheme) ],
    "CONTEXT 14": [ "parMaxFrameLength", $._decode_implicit<FspGetParameter_parMaxFrameLength>(() => _decode_FspGetParameter_parMaxFrameLength) ],
    "CONTEXT 15": [ "parMaxPacketLength", $._decode_implicit<FspGetParameter_parMaxPacketLength>(() => _decode_FspGetParameter_parMaxPacketLength) ],
    "CONTEXT 30": [ "parMinReportingCycle", $._decode_implicit<FspGetParameter_parMinReportingCycle>(() => _decode_FspGetParameter_parMinReportingCycle) ],
    "CONTEXT 16": [ "parPermTransMode", $._decode_implicit<FspGetParameter_parPermTransMode>(() => _decode_FspGetParameter_parPermTransMode) ],
    "CONTEXT 17": [ "parReportingCycle", $._decode_implicit<FspGetParameter_parReportingCycle>(() => _decode_FspGetParameter_parReportingCycle) ],
    "CONTEXT 18": [ "parReturnTimeout", $._decode_implicit<FspGetParameter_parReturnTimeout>(() => _decode_FspGetParameter_parReturnTimeout) ],
    "CONTEXT 28": [ "parRfAvailableRequired", $._decode_implicit<FspGetParameter_parRfAvailableRequired>(() => _decode_FspGetParameter_parRfAvailableRequired) ],
    "CONTEXT 19": [ "parSegmHeader", $._decode_implicit<FspGetParameter_parSegmHeader>(() => _decode_FspGetParameter_parSegmHeader) ],
    "CONTEXT 31": [ "parSequCntrFramesRepetition", $._decode_implicit<FspGetParameter_parSequCntrFramesRepetition>(() => _decode_FspGetParameter_parSequCntrFramesRepetition) ],
    "CONTEXT 32": [ "parThrowEventOperation", $._decode_implicit<FspGetParameter_parThrowEventOperation>(() => _decode_FspGetParameter_parThrowEventOperation) ],
    "CONTEXT 20": [ "parTimeoutType", $._decode_implicit<FspGetParameter_parTimeoutType>(() => _decode_FspGetParameter_parTimeoutType) ],
    "CONTEXT 21": [ "parTimerInitial", $._decode_implicit<FspGetParameter_parTimerInitial>(() => _decode_FspGetParameter_parTimerInitial) ],
    "CONTEXT 22": [ "parTransmissLimit", $._decode_implicit<FspGetParameter_parTransmissLimit>(() => _decode_FspGetParameter_parTransmissLimit) ],
    "CONTEXT 23": [ "parTrFrSeqNumber", $._decode_implicit<FspGetParameter_parTrFrSeqNumber>(() => _decode_FspGetParameter_parTrFrSeqNumber) ],
    "CONTEXT 24": [ "parVcMuxControl", $._decode_implicit<FspGetParameter_parVcMuxControl>(() => _decode_FspGetParameter_parVcMuxControl) ],
    "CONTEXT 25": [ "parVcMuxScheme", $._decode_implicit<FspGetParameter_parVcMuxScheme>(() => _decode_FspGetParameter_parVcMuxScheme) ],
    "CONTEXT 26": [ "parVirtualChannel", $._decode_implicit<FspGetParameter_parVirtualChannel>(() => _decode_FspGetParameter_parVirtualChannel) ]
}); }
    return _cached_decoder_for_FspGetParameter(el);
}

let _cached_encoder_for_FspGetParameter: $.ASN1Encoder<FspGetParameter> | null = null;

/**
 * @summary Encodes a(n) FspGetParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspGetParameter, encoded as an ASN.1 Element.
 */
export
function _encode_FspGetParameter (value: FspGetParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspGetParameter) { _cached_encoder_for_FspGetParameter = $._encode_choice<FspGetParameter>({
    "parApidList": $._encode_implicit(_TagClass.context, 0, () => _encode_FspGetParameter_parApidList, $.BER),
    "parBitLockRequired": $._encode_implicit(_TagClass.context, 27, () => _encode_FspGetParameter_parBitLockRequired, $.BER),
    "parBlockingTimeout": $._encode_implicit(_TagClass.context, 1, () => _encode_FspGetParameter_parBlockingTimeout, $.BER),
    "parBlockingUsage": $._encode_implicit(_TagClass.context, 2, () => _encode_FspGetParameter_parBlockingUsage, $.BER),
    "parClcwGlobalVcId": $._encode_implicit(_TagClass.context, 27, () => _encode_FspGetParameter_parClcwGlobalVcId, $.BER),
    "parClcwPhysicalChannel": $._encode_implicit(_TagClass.context, 28, () => _encode_FspGetParameter_parClcwPhysicalChannel, $.BER),
    "parCopCntrFramesRepetition": $._encode_implicit(_TagClass.context, 29, () => _encode_FspGetParameter_parCopCntrFramesRepetition, $.BER),
    "parDeliveryMode": $._encode_implicit(_TagClass.context, 3, () => _encode_FspGetParameter_parDeliveryMode, $.BER),
    "parDirectiveInvoc": $._encode_implicit(_TagClass.context, 4, () => _encode_FspGetParameter_parDirectiveInvoc, $.BER),
    "parDirInvocOnl": $._encode_implicit(_TagClass.context, 5, () => _encode_FspGetParameter_parDirInvocOnl, $.BER),
    "parExpectDirectiveId": $._encode_implicit(_TagClass.context, 6, () => _encode_FspGetParameter_parExpectDirectiveId, $.BER),
    "parExpectEventInvId": $._encode_implicit(_TagClass.context, 7, () => _encode_FspGetParameter_parExpectEventInvId, $.BER),
    "parExpectSlduId": $._encode_implicit(_TagClass.context, 8, () => _encode_FspGetParameter_parExpectSlduId, $.BER),
    "parFopSlidWindow": $._encode_implicit(_TagClass.context, 9, () => _encode_FspGetParameter_parFopSlidWindow, $.BER),
    "parFopState": $._encode_implicit(_TagClass.context, 10, () => _encode_FspGetParameter_parFopState, $.BER),
    "parMapList": $._encode_implicit(_TagClass.context, 11, () => _encode_FspGetParameter_parMapList, $.BER),
    "parMapMuxControl": $._encode_implicit(_TagClass.context, 12, () => _encode_FspGetParameter_parMapMuxControl, $.BER),
    "parMapMuxScheme": $._encode_implicit(_TagClass.context, 13, () => _encode_FspGetParameter_parMapMuxScheme, $.BER),
    "parMaxFrameLength": $._encode_implicit(_TagClass.context, 14, () => _encode_FspGetParameter_parMaxFrameLength, $.BER),
    "parMaxPacketLength": $._encode_implicit(_TagClass.context, 15, () => _encode_FspGetParameter_parMaxPacketLength, $.BER),
    "parMinReportingCycle": $._encode_implicit(_TagClass.context, 30, () => _encode_FspGetParameter_parMinReportingCycle, $.BER),
    "parPermTransMode": $._encode_implicit(_TagClass.context, 16, () => _encode_FspGetParameter_parPermTransMode, $.BER),
    "parReportingCycle": $._encode_implicit(_TagClass.context, 17, () => _encode_FspGetParameter_parReportingCycle, $.BER),
    "parReturnTimeout": $._encode_implicit(_TagClass.context, 18, () => _encode_FspGetParameter_parReturnTimeout, $.BER),
    "parRfAvailableRequired": $._encode_implicit(_TagClass.context, 28, () => _encode_FspGetParameter_parRfAvailableRequired, $.BER),
    "parSegmHeader": $._encode_implicit(_TagClass.context, 19, () => _encode_FspGetParameter_parSegmHeader, $.BER),
    "parSequCntrFramesRepetition": $._encode_implicit(_TagClass.context, 31, () => _encode_FspGetParameter_parSequCntrFramesRepetition, $.BER),
    "parThrowEventOperation": $._encode_implicit(_TagClass.context, 32, () => _encode_FspGetParameter_parThrowEventOperation, $.BER),
    "parTimeoutType": $._encode_implicit(_TagClass.context, 20, () => _encode_FspGetParameter_parTimeoutType, $.BER),
    "parTimerInitial": $._encode_implicit(_TagClass.context, 21, () => _encode_FspGetParameter_parTimerInitial, $.BER),
    "parTransmissLimit": $._encode_implicit(_TagClass.context, 22, () => _encode_FspGetParameter_parTransmissLimit, $.BER),
    "parTrFrSeqNumber": $._encode_implicit(_TagClass.context, 23, () => _encode_FspGetParameter_parTrFrSeqNumber, $.BER),
    "parVcMuxControl": $._encode_implicit(_TagClass.context, 24, () => _encode_FspGetParameter_parVcMuxControl, $.BER),
    "parVcMuxScheme": $._encode_implicit(_TagClass.context, 25, () => _encode_FspGetParameter_parVcMuxScheme, $.BER),
    "parVirtualChannel": $._encode_implicit(_TagClass.context, 26, () => _encode_FspGetParameter_parVirtualChannel, $.BER),
}, $.BER); }
    return _cached_encoder_for_FspGetParameter(value, elGetter);
}


/* eslint-enable */

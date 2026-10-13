/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_apidList,
    ParameterName_bitLockRequired,
    ParameterName_blockingTimeoutPeriod,
    ParameterName_blockingUsage,
    ParameterName_clcwGlobalVcId,
    ParameterName_clcwPhysicalChannel,
    ParameterName_copCntrFramesRepetition,
    ParameterName_deliveryMode,
    ParameterName_directiveInvocation,
    ParameterName_directiveInvocationOnline,
    ParameterName_expectedDirectiveIdentification,
    ParameterName_expectedSlduIdentification,
    ParameterName_expectedEventInvocationIdentification,
    ParameterName_fopSlidingWindow,
    ParameterName_fopState,
    ParameterName_mapList,
    ParameterName_mapMuxControl,
    ParameterName_mapMuxScheme,
    ParameterName_maximumFrameLength,
    ParameterName_maximumPacketLength,
    ParameterName_minReportingCycle,
    ParameterName_permittedTransmissionMode,
    ParameterName_reportingCycle,
    ParameterName_returnTimeoutPeriod,
    ParameterName_rfAvailableRequired,
    ParameterName_segmentHeader,
    ParameterName_sequCntrFramesRepetition,
    ParameterName_throwEventOperation,
    ParameterName_timeoutType,
    ParameterName_timerInitial,
    ParameterName_transmissionLimit,
    ParameterName_transmitterFrameSequenceNumber,
    ParameterName_vcMuxControl,
    ParameterName_vcMuxScheme,
    ParameterName_virtualChannel
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary FspParameterName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspParameterName         ::=    ParameterName
 * (  apidList
 * |  bitLockRequired
 * |  blockingTimeoutPeriod
 * |  blockingUsage
 * |  clcwGlobalVcId
 * |  clcwPhysicalChannel
 * |  copCntrFramesRepetition
 * |  deliveryMode
 * |  directiveInvocation
 * |  directiveInvocationOnline
 * |  expectedDirectiveIdentification
 * |  expectedSlduIdentification
 * |  expectedEventInvocationIdentification
 * |  fopSlidingWindow
 * |  fopState
 * |  mapList
 * |  mapMuxControl
 * |  mapMuxScheme
 * |  maximumFrameLength
 * |  maximumPacketLength
 * |  minReportingCycle
 * |  permittedTransmissionMode
 * |  reportingCycle
 * |  returnTimeoutPeriod
 * |  rfAvailableRequired
 * |  segmentHeader
 * |  sequCntrFramesRepetition
 * |  throwEventOperation
 * |  timeoutType
 * |  timerInitial
 * |  transmissionLimit
 * |  transmitterFrameSequenceNumber
 * |  vcMuxControl
 * |  vcMuxScheme
 * |  virtualChannel
 * )
 * ```
 */
export
type FspParameterName = ParameterName; // DefinedType

let _cached_decoder_for_FspParameterName: $.ASN1Decoder<FspParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspParameterName (el: _Element): FspParameterName {
    if (!_cached_decoder_for_FspParameterName) { _cached_decoder_for_FspParameterName = _decode_ParameterName; }
    const _decoded = _cached_decoder_for_FspParameterName(el);
    if (!integerIsOneOf(_decoded, [BigInt(ParameterName_apidList), BigInt(ParameterName_bitLockRequired), BigInt(ParameterName_blockingTimeoutPeriod), BigInt(ParameterName_blockingUsage), BigInt(ParameterName_clcwGlobalVcId), BigInt(ParameterName_clcwPhysicalChannel), BigInt(ParameterName_copCntrFramesRepetition), BigInt(ParameterName_deliveryMode), BigInt(ParameterName_directiveInvocation), BigInt(ParameterName_directiveInvocationOnline), BigInt(ParameterName_expectedDirectiveIdentification), BigInt(ParameterName_expectedSlduIdentification), BigInt(ParameterName_expectedEventInvocationIdentification), BigInt(ParameterName_fopSlidingWindow), BigInt(ParameterName_fopState), BigInt(ParameterName_mapList), BigInt(ParameterName_mapMuxControl), BigInt(ParameterName_mapMuxScheme), BigInt(ParameterName_maximumFrameLength), BigInt(ParameterName_maximumPacketLength), BigInt(ParameterName_minReportingCycle), BigInt(ParameterName_permittedTransmissionMode), BigInt(ParameterName_reportingCycle), BigInt(ParameterName_returnTimeoutPeriod), BigInt(ParameterName_rfAvailableRequired), BigInt(ParameterName_segmentHeader), BigInt(ParameterName_sequCntrFramesRepetition), BigInt(ParameterName_throwEventOperation), BigInt(ParameterName_timeoutType), BigInt(ParameterName_timerInitial), BigInt(ParameterName_transmissionLimit), BigInt(ParameterName_transmitterFrameSequenceNumber), BigInt(ParameterName_vcMuxControl), BigInt(ParameterName_vcMuxScheme), BigInt(ParameterName_virtualChannel)])) {
        throw new ASN1Error("FspParameterName violates ParameterName (apidList | bitLockRequired | blockingTimeoutPeriod | blockingUsage | clcwGlobalVcId | clcwPhysicalChannel | copCntrFramesRepetition | deliveryMode | directiveInvocation | directiveInvocationOnline | expectedDirectiveIdentification | expectedSlduIdentification | expectedEventInvocationIdentification | fopSlidingWindow | fopState | mapList | mapMuxControl | mapMuxScheme | maximumFrameLength | maximumPacketLength | minReportingCycle | permittedTransmissionMode | reportingCycle | returnTimeoutPeriod | rfAvailableRequired | segmentHeader | sequCntrFramesRepetition | throwEventOperation | timeoutType | timerInitial | transmissionLimit | transmitterFrameSequenceNumber | vcMuxControl | vcMuxScheme | virtualChannel)");
    }
    return _decoded;
}

let _cached_encoder_for_FspParameterName: $.ASN1Encoder<FspParameterName> | null = null;

/**
 * @summary Encodes a(n) FspParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspParameterName, encoded as an ASN.1 Element.
 */
export
function _encode_FspParameterName (value: FspParameterName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspParameterName) { _cached_encoder_for_FspParameterName = _encode_ParameterName; }
    return _cached_encoder_for_FspParameterName(value, elGetter);
}


/* eslint-enable */

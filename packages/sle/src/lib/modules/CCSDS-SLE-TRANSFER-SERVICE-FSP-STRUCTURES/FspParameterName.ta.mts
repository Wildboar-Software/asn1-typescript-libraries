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



import { integerIsOneOf } from "../../constraints.mjs";

const _FspParameterName_permitted: ReadonlySet<bigint> = new Set<bigint>([
    BigInt(ParameterName_apidList),
    BigInt(ParameterName_bitLockRequired),
    BigInt(ParameterName_blockingTimeoutPeriod),
    BigInt(ParameterName_blockingUsage),
    BigInt(ParameterName_clcwGlobalVcId),
    BigInt(ParameterName_clcwPhysicalChannel),
    BigInt(ParameterName_copCntrFramesRepetition),
    BigInt(ParameterName_deliveryMode),
    BigInt(ParameterName_directiveInvocation),
    BigInt(ParameterName_directiveInvocationOnline),
    BigInt(ParameterName_expectedDirectiveIdentification),
    BigInt(ParameterName_expectedSlduIdentification),
    BigInt(ParameterName_expectedEventInvocationIdentification),
    BigInt(ParameterName_fopSlidingWindow),
    BigInt(ParameterName_fopState),
    BigInt(ParameterName_mapList),
    BigInt(ParameterName_mapMuxControl),
    BigInt(ParameterName_mapMuxScheme),
    BigInt(ParameterName_maximumFrameLength),
    BigInt(ParameterName_maximumPacketLength),
    BigInt(ParameterName_minReportingCycle),
    BigInt(ParameterName_permittedTransmissionMode),
    BigInt(ParameterName_reportingCycle),
    BigInt(ParameterName_returnTimeoutPeriod),
    BigInt(ParameterName_rfAvailableRequired),
    BigInt(ParameterName_segmentHeader),
    BigInt(ParameterName_sequCntrFramesRepetition),
    BigInt(ParameterName_throwEventOperation),
    BigInt(ParameterName_timeoutType),
    BigInt(ParameterName_timerInitial),
    BigInt(ParameterName_transmissionLimit),
    BigInt(ParameterName_transmitterFrameSequenceNumber),
    BigInt(ParameterName_vcMuxControl),
    BigInt(ParameterName_vcMuxScheme),
    BigInt(ParameterName_virtualChannel),
]);

/**
 * @summary FspParameterName
 * @description
 * 
 * Name of the FSP service parameter read by FSP-GET-PARAMETER. Table 3-11
 * defines each name. Table 3-1 shows which parameters service management sets,
 * which FSP-START sets (`expectedSlduIdentification`), which
 * FSP-SCHEDULE-STATUS-REPORT sets (`reportingCycle`), and which
 * FSP-INVOKE-DIRECTIVE sets (`fopSlidingWindow`, `mapMuxControl`,
 * `timeoutType`, `timerInitial`, `transmissionLimit`, and
 * `transmitterFrameSequenceNumber`). Parameters apply to every FSP instance, to
 * every instance on a physical channel, to every instance on a VC, or to one
 * service instance, as table 3-1 groups them. An unrecognized name is rejected
 * with `unknownParameter`.
 * 
 * CCSDS 912.3-B-3, sections 3.10.2.5, 3.1.9, and 3.10.2.8.
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
    if (!integerIsOneOf(_decoded, _FspParameterName_permitted)) {
        throw new ASN1Error("FspParameterName violates ParameterName");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) FspParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspParameterName, encoded as an ASN.1 Element.
 */
export const _encode_FspParameterName: $.ASN1Encoder<FspParameterName> = _encode_ParameterName;


/* eslint-enable */

/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_acquisitionSequenceLength,
    ParameterName_bitLockRequired,
    ParameterName_clcwGlobalVcId,
    ParameterName_clcwPhysicalChannel,
    ParameterName_deliveryMode,
    ParameterName_expectedSlduIdentification,
    ParameterName_expectedEventInvocationIdentification,
    ParameterName_maximumSlduLength,
    ParameterName_minimumDelayTime,
    ParameterName_minReportingCycle,
    ParameterName_modulationFrequency,
    ParameterName_modulationIndex,
    ParameterName_notificationMode,
    ParameterName_plop1IdleSequenceLength,
    ParameterName_plopInEffect,
    ParameterName_protocolAbortMode,
    ParameterName_reportingCycle,
    ParameterName_returnTimeoutPeriod,
    ParameterName_rfAvailableRequired,
    ParameterName_subcarrierToBitRateRatio
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

const _CltuParameterName_permitted: ReadonlySet<bigint> = new Set<bigint>([
    BigInt(ParameterName_acquisitionSequenceLength),
    BigInt(ParameterName_bitLockRequired),
    BigInt(ParameterName_clcwGlobalVcId),
    BigInt(ParameterName_clcwPhysicalChannel),
    BigInt(ParameterName_deliveryMode),
    BigInt(ParameterName_expectedSlduIdentification),
    BigInt(ParameterName_expectedEventInvocationIdentification),
    BigInt(ParameterName_maximumSlduLength),
    BigInt(ParameterName_minimumDelayTime),
    BigInt(ParameterName_minReportingCycle),
    BigInt(ParameterName_modulationFrequency),
    BigInt(ParameterName_modulationIndex),
    BigInt(ParameterName_notificationMode),
    BigInt(ParameterName_plop1IdleSequenceLength),
    BigInt(ParameterName_plopInEffect),
    BigInt(ParameterName_protocolAbortMode),
    BigInt(ParameterName_reportingCycle),
    BigInt(ParameterName_returnTimeoutPeriod),
    BigInt(ParameterName_rfAvailableRequired),
    BigInt(ParameterName_subcarrierToBitRateRatio),
]);

/**
 * @summary CltuParameterName
 * @description
 * 
 * Names the user may pass as cltu-parameter in CLTU-GET-PARAMETER. The set is
 * table 3-11. A name outside the set the provider recognizes yields diagnostic
 * unknown parameter. CCSDS 912.1-B-5, section 3.10.2.5 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuParameterName                 ::=    ParameterName
 * (  acquisitionSequenceLength
 * |  bitLockRequired
 * |  clcwGlobalVcId
 * |  clcwPhysicalChannel
 * |  deliveryMode
 * |  expectedSlduIdentification
 * |  expectedEventInvocationIdentification
 * |  maximumSlduLength
 * |  minimumDelayTime
 * |  minReportingCycle
 * |  modulationFrequency
 * |  modulationIndex
 * |  notificationMode
 * |  plop1IdleSequenceLength
 * |  plopInEffect
 * |  protocolAbortMode
 * |  reportingCycle
 * |  returnTimeoutPeriod
 * |  rfAvailableRequired
 * |  subcarrierToBitRateRatio
 * )
 * ```
 */
export
type CltuParameterName = ParameterName; // DefinedType

let _cached_decoder_for_CltuParameterName: $.ASN1Decoder<CltuParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuParameterName (el: _Element): CltuParameterName {
    if (!_cached_decoder_for_CltuParameterName) { _cached_decoder_for_CltuParameterName = _decode_ParameterName; }
    const _decoded = _cached_decoder_for_CltuParameterName(el);
    if (!integerIsOneOf(_decoded, _CltuParameterName_permitted)) {
        throw new ASN1Error("CltuParameterName violates ParameterName");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) CltuParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuParameterName, encoded as an ASN.1 Element.
 */
export const _encode_CltuParameterName: $.ASN1Encoder<CltuParameterName> = _encode_ParameterName;


/* eslint-enable */

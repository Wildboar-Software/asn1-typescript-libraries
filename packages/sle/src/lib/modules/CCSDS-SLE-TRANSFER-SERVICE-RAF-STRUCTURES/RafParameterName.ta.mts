/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterName, _encode_ParameterName, ParameterName,
    ParameterName_bufferSize,
    ParameterName_deliveryMode,
    ParameterName_latencyLimit,
    ParameterName_minReportingCycle,
    ParameterName_permittedFrameQuality,
    ParameterName_reportingCycle,
    ParameterName_requestedFrameQuality,
    ParameterName_returnTimeoutPeriod
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

const _RafParameterName_permitted: ReadonlySet<bigint> = new Set<bigint>([
    BigInt(ParameterName_bufferSize),
    BigInt(ParameterName_deliveryMode),
    BigInt(ParameterName_latencyLimit),
    BigInt(ParameterName_minReportingCycle),
    BigInt(ParameterName_permittedFrameQuality),
    BigInt(ParameterName_reportingCycle),
    BigInt(ParameterName_requestedFrameQuality),
    BigInt(ParameterName_returnTimeoutPeriod),
]);

/**
 * @summary RafParameterName
 * @description
 * 
 * Parameter names RAF-GET-PARAMETER accepts. The set is table 3-11:
 * `bufferSize`, `deliveryMode`, `latencyLimit`, `minReportingCycle`,
 * `permittedFrameQuality`, `reportingCycle`, `requestedFrameQuality`, and
 * `returnTimeoutPeriod`. Any other parameter name yields diagnostic
 * `unknownParameter`. Parameters that service management sets and that are
 * absent from table 3-1 cannot be read with this operation.
 * `service-instance-provision-period` and `service-version-number` are in table
 * 3-1 and are absent from this set.
 * 
 * CCSDS 911.1-B-5, sections 3.10.2.5 and 3.1.8, and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafParameterName               ::=  ParameterName
 * (   bufferSize
 * |   deliveryMode
 * |   latencyLimit
 * |   minReportingCycle
 * |   permittedFrameQuality
 * |   reportingCycle
 * |   requestedFrameQuality
 * |   returnTimeoutPeriod
 * )
 * ```
 */
export
type RafParameterName = ParameterName; // DefinedType

let _cached_decoder_for_RafParameterName: $.ASN1Decoder<RafParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafParameterName (el: _Element): RafParameterName {
    if (!_cached_decoder_for_RafParameterName) { _cached_decoder_for_RafParameterName = _decode_ParameterName; }
    const _decoded = _cached_decoder_for_RafParameterName(el);
    if (!integerIsOneOf(_decoded, _RafParameterName_permitted)) {
        throw new ASN1Error("RafParameterName violates ParameterName");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) RafParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafParameterName, encoded as an ASN.1 Element.
 */
export const _encode_RafParameterName: $.ASN1Encoder<RafParameterName> = _encode_ParameterName;


/* eslint-enable */

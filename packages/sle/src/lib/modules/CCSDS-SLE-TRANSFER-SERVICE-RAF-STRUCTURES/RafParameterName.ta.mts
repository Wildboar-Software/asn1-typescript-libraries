/* eslint-disable */
import {
    ASN1Element as _Element,
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


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary RafParameterName
 * @description
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
    if (!integerIsOneOf(_decoded, [BigInt(ParameterName_bufferSize), BigInt(ParameterName_deliveryMode), BigInt(ParameterName_latencyLimit), BigInt(ParameterName_minReportingCycle), BigInt(ParameterName_permittedFrameQuality), BigInt(ParameterName_reportingCycle), BigInt(ParameterName_requestedFrameQuality), BigInt(ParameterName_returnTimeoutPeriod)])) {
        throw new ASN1Error("RafParameterName violates ParameterName (bufferSize | deliveryMode | latencyLimit | minReportingCycle | permittedFrameQuality | reportingCycle | requestedFrameQuality | returnTimeoutPeriod)");
    }
    return _decoded;
}

let _cached_encoder_for_RafParameterName: $.ASN1Encoder<RafParameterName> | null = null;

/**
 * @summary Encodes a(n) RafParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafParameterName, encoded as an ASN.1 Element.
 */
export
function _encode_RafParameterName (value: RafParameterName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafParameterName) { _cached_encoder_for_RafParameterName = _encode_ParameterName; }
    return _cached_encoder_for_RafParameterName(value, elGetter);
}


/* eslint-enable */

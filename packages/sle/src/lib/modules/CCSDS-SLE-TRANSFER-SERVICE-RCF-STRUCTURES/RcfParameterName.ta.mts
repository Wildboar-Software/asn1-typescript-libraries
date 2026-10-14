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
    ParameterName_permittedGvcidSet,
    ParameterName_reportingCycle,
    ParameterName_requestedGvcid,
    ParameterName_returnTimeoutPeriod
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

const _RcfParameterName_permitted: ReadonlySet<bigint> = new Set<bigint>([
    BigInt(ParameterName_bufferSize),
    BigInt(ParameterName_deliveryMode),
    BigInt(ParameterName_latencyLimit),
    BigInt(ParameterName_minReportingCycle),
    BigInt(ParameterName_permittedGvcidSet),
    BigInt(ParameterName_reportingCycle),
    BigInt(ParameterName_requestedGvcid),
    BigInt(ParameterName_returnTimeoutPeriod),
]);

/**
 * @summary RcfParameterName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfParameterName             ::=  ParameterName
 * (   bufferSize
 * |   deliveryMode
 * |   latencyLimit
 * |   minReportingCycle
 * |   permittedGvcidSet
 * |   reportingCycle
 * |   requestedGvcid
 * |   returnTimeoutPeriod
 * )
 * ```
 */
export
type RcfParameterName = ParameterName; // DefinedType

let _cached_decoder_for_RcfParameterName: $.ASN1Decoder<RcfParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfParameterName (el: _Element): RcfParameterName {
    if (!_cached_decoder_for_RcfParameterName) { _cached_decoder_for_RcfParameterName = _decode_ParameterName; }
    const _decoded = _cached_decoder_for_RcfParameterName(el);
    if (!integerIsOneOf(_decoded, _RcfParameterName_permitted)) {
        throw new ASN1Error("RcfParameterName violates ParameterName");
    }
    return _decoded;
}

let _cached_encoder_for_RcfParameterName: $.ASN1Encoder<RcfParameterName> | null = null;

/**
 * @summary Encodes a(n) RcfParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfParameterName, encoded as an ASN.1 Element.
 */
export
function _encode_RcfParameterName (value: RcfParameterName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfParameterName) { _cached_encoder_for_RcfParameterName = _encode_ParameterName; }
    return _cached_encoder_for_RcfParameterName(value, elGetter);
}


/* eslint-enable */

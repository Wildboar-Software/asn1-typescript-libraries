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
    ParameterName_permittedControlWordTypeSet,
    ParameterName_permittedGvcidSet,
    ParameterName_permittedTcVcidSet,
    ParameterName_permittedUpdateModeSet,
    ParameterName_reportingCycle,
    ParameterName_requestedControlWordType,
    ParameterName_requestedGvcid,
    ParameterName_requestedTcVcid,
    ParameterName_requestedUpdateMode,
    ParameterName_returnTimeoutPeriod
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

const _RocfParameterName_permitted: ReadonlySet<bigint> = new Set<bigint>([
    BigInt(ParameterName_bufferSize),
    BigInt(ParameterName_deliveryMode),
    BigInt(ParameterName_latencyLimit),
    BigInt(ParameterName_minReportingCycle),
    BigInt(ParameterName_permittedControlWordTypeSet),
    BigInt(ParameterName_permittedGvcidSet),
    BigInt(ParameterName_permittedTcVcidSet),
    BigInt(ParameterName_permittedUpdateModeSet),
    BigInt(ParameterName_reportingCycle),
    BigInt(ParameterName_requestedControlWordType),
    BigInt(ParameterName_requestedGvcid),
    BigInt(ParameterName_requestedTcVcid),
    BigInt(ParameterName_requestedUpdateMode),
    BigInt(ParameterName_returnTimeoutPeriod),
]);

/**
 * @summary RocfParameterName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfParameterName        ::=  ParameterName
 * (  bufferSize
 * |  deliveryMode
 * |  latencyLimit
 * |  minReportingCycle
 * |  permittedControlWordTypeSet
 * |  permittedGvcidSet
 * |  permittedTcVcidSet
 * |  permittedUpdateModeSet
 * |  reportingCycle
 * |  requestedControlWordType
 * |  requestedGvcid
 * |  requestedTcVcid
 * |  requestedUpdateMode
 * |  returnTimeoutPeriod
 * )
 * ```
 */
export
type RocfParameterName = ParameterName; // DefinedType

let _cached_decoder_for_RocfParameterName: $.ASN1Decoder<RocfParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfParameterName (el: _Element): RocfParameterName {
    if (!_cached_decoder_for_RocfParameterName) { _cached_decoder_for_RocfParameterName = _decode_ParameterName; }
    const _decoded = _cached_decoder_for_RocfParameterName(el);
    if (!integerIsOneOf(_decoded, _RocfParameterName_permitted)) {
        throw new ASN1Error("RocfParameterName violates ParameterName");
    }
    return _decoded;
}

let _cached_encoder_for_RocfParameterName: $.ASN1Encoder<RocfParameterName> | null = null;

/**
 * @summary Encodes a(n) RocfParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfParameterName, encoded as an ASN.1 Element.
 */
export
function _encode_RocfParameterName (value: RocfParameterName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfParameterName) { _cached_encoder_for_RocfParameterName = _encode_ParameterName; }
    return _cached_encoder_for_RocfParameterName(value, elGetter);
}


/* eslint-enable */

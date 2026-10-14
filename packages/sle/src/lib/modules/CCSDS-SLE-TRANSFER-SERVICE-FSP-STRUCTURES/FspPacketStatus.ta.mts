/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ForwardDuStatus, _encode_ForwardDuStatus, ForwardDuStatus,
    ForwardDuStatus_acknowledged,
    ForwardDuStatus_radiated,
    ForwardDuStatus_productionStarted,
    ForwardDuStatus_productionNotStarted,
    ForwardDuStatus_expired,
    ForwardDuStatus_unsupportedTransmissionMode,
    ForwardDuStatus_interrupted
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ForwardDuStatus.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

/**
 * @summary FspPacketStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspPacketStatus          ::=    ForwardDuStatus
 * (  acknowledged
 * |  radiated
 * |  productionStarted
 * |  productionNotStarted
 * |  expired
 * |  unsupportedTransmissionMode
 * |  interrupted
 * )
 * ```
 */
export
type FspPacketStatus = ForwardDuStatus; // DefinedType

let _cached_decoder_for_FspPacketStatus: $.ASN1Decoder<FspPacketStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspPacketStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspPacketStatus (el: _Element): FspPacketStatus {
    if (!_cached_decoder_for_FspPacketStatus) { _cached_decoder_for_FspPacketStatus = _decode_ForwardDuStatus; }
    const _decoded = _cached_decoder_for_FspPacketStatus(el);
    if (!integerIsOneOf(_decoded, [BigInt(ForwardDuStatus_acknowledged), BigInt(ForwardDuStatus_radiated), BigInt(ForwardDuStatus_productionStarted), BigInt(ForwardDuStatus_productionNotStarted), BigInt(ForwardDuStatus_expired), BigInt(ForwardDuStatus_unsupportedTransmissionMode), BigInt(ForwardDuStatus_interrupted)])) {
        throw new ASN1Error("FspPacketStatus violates ForwardDuStatus (acknowledged | radiated | productionStarted | productionNotStarted | expired | unsupportedTransmissionMode | interrupted)");
    }
    return _decoded;
}

let _cached_encoder_for_FspPacketStatus: $.ASN1Encoder<FspPacketStatus> | null = null;

/**
 * @summary Encodes a(n) FspPacketStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspPacketStatus, encoded as an ASN.1 Element.
 */
export
function _encode_FspPacketStatus (value: FspPacketStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspPacketStatus) { _cached_encoder_for_FspPacketStatus = _encode_ForwardDuStatus; }
    return _cached_encoder_for_FspPacketStatus(value, elGetter);
}


/* eslint-enable */

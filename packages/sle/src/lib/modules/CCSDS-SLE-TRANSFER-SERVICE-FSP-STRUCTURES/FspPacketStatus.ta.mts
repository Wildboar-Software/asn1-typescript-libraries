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
 * Processing state of the last processed Space Packet. The permitted values are
 * the Forward DU statuses named below.
 * 
 * `acknowledged` applies only to sequence-controlled transmission. Every
 * component has been acknowledged by the space element in the CLCW stream.
 * Reception is guaranteed. Acceptance, reassembly, and execution are determined
 * from telemetry.
 * 
 * `radiated` means radiation completed without abort, so the Packet was
 * radiated nominally. The status stays unchanged until every CLTU containing
 * part of the Packet has been transmitted. For sequence-controlled transmission
 * at least one CLCW acknowledgement may still be outstanding.
 * 
 * `productionStarted` means the Packet has left the instance request queue and
 * has been inserted into the packets queue.
 * 
 * `productionNotStarted` means that when the Packet had to leave the request
 * queue, production status was not operational, so production of this Packet
 * could not start.
 * 
 * `expired` means the latest production time was reached before processing
 * began. The Packet was not radiated.
 * 
 * `unsupportedTransmissionMode` means the requested transmission mode was
 * unsupported when production of this Packet began. The Packet was not
 * radiated.
 * 
 * `interrupted` means processing aborted when production status left
 * operational for interrupted or halted, or when Abort VC was executed.
 * Processing had started and stopped before nominal completion. Earlier Packets
 * may also have been affected. A sequence-controlled Packet may have finished
 * radiation before the status became interrupted.
 * 
 * CCSDS 912.3-B-3, sections 3.7.2.11, 3.9.2.5, and 1.6.1.8.1. Section
 * 1.6.1.8.11 defines radiated.
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

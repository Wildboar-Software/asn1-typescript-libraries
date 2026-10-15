/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketIdentification, _decode_PacketIdentification, _encode_PacketIdentification } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/PacketIdentification.ta.mjs";


/**
 * @summary PacketIdentificationList
 * @description
 * 
 * Packet identifications attached to an FSP-ASYNC-NOTIFY event. Processing
 * started, radiated, acknowledged, and expired events carry the one affected
 * Packet. A transmission-mode mismatch, production interrupted, VC aborted, and
 * production halted carry every discarded Packet of this user. Other
 * notifications omit the list.
 * 
 * CCSDS 912.3-B-3, section 3.7.2.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketIdentificationList    ::=    SEQUENCE OF PacketIdentification
 * ```
 */
export
type PacketIdentificationList = PacketIdentification[]; // SequenceOfType

let _cached_decoder_for_PacketIdentificationList: $.ASN1Decoder<PacketIdentificationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PacketIdentificationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PacketIdentificationList (el: _Element): PacketIdentificationList {
    if (!_cached_decoder_for_PacketIdentificationList) { _cached_decoder_for_PacketIdentificationList = $._decodeSequenceOf<PacketIdentification>(() => _decode_PacketIdentification); }
    return _cached_decoder_for_PacketIdentificationList(el);
}

let _cached_encoder_for_PacketIdentificationList: $.ASN1Encoder<PacketIdentificationList> | null = null;

/**
 * @summary Encodes a(n) PacketIdentificationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketIdentificationList, encoded as an ASN.1 Element.
 */
export
function _encode_PacketIdentificationList (value: PacketIdentificationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PacketIdentificationList) { _cached_encoder_for_PacketIdentificationList = $._encodeSequenceOf<PacketIdentification>(() => _encode_PacketIdentification, $.BER); }
    return _cached_encoder_for_PacketIdentificationList(value, elGetter);
}


/* eslint-enable */

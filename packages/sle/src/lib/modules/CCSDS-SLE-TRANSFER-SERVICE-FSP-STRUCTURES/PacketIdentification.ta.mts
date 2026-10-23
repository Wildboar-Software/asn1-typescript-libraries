/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary PacketIdentification
 * @description
 * 
 * Sequence number that identifies one Space Packet of a service instance. Annex
 * A types it as an unsigned long integer, 0 through 4294967295. On
 * FSP-TRANSFER-DATA it increases by one for each accepted invocation, starting
 * at the FSP-START first-packet identification. The same number is reported in
 * notifications and status for the last processed and last successfully
 * processed Packets.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.5, 3.4.2.5, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PacketIdentification        ::=    IntUnsignedLong
 * ```
 */
export
type PacketIdentification = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PacketIdentification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PacketIdentification: $.ASN1Decoder<PacketIdentification> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) PacketIdentification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PacketIdentification, encoded as an ASN.1 Element.
 */
export const _encode_PacketIdentification: $.ASN1Encoder<PacketIdentification> = _encode_IntUnsignedLong;


/* eslint-enable */

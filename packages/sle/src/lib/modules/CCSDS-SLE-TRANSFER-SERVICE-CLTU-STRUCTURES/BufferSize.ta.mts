/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary BufferSize
 * @description
 * 
 * Octet count of buffer space. The service package states how many octets the
 * provider must buffer, and only complete CLTUs occupy that buffer. Used for
 * the remaining space reported as cltu-buffer-available. CCSDS 912.1-B-5,
 * sections 3.1.10, 3.6.2.11, and 3.9.2.13.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BufferSize                              ::=    IntUnsignedLong
 * ```
 */
export
type BufferSize = IntUnsignedLong; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BufferSize
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BufferSize: $.ASN1Decoder<BufferSize> = _decode_IntUnsignedLong;

/**
 * @summary Encodes a(n) BufferSize into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferSize, encoded as an ASN.1 Element.
 */
export const _encode_BufferSize: $.ASN1Encoder<BufferSize> = _encode_IntUnsignedLong;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary BufferSize
 * @description
 * 
 * Octet count used for the packet-buffer-available return of FSP-TRANSFER-DATA.
 * Annex A constrains it to 7 through 66560 and comments that the minimum
 * Telecommand size is 7 octets and the maximum is 64K octets plus overhead.
 * Section 3.6.2.16 defines the parameter as the remaining octets in the request
 * queue and does not restate that range. The provider buffers only complete
 * Space Packets. The service package specifies how much buffering the provider
 * maintains, in octets.
 * 
 * CCSDS 912.3-B-3, annex A2.5, sections 3.6.2.16 and 3.1.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BufferSize            ::=    INTEGER (7 .. 66560)
 * ```
 */
export
type BufferSize = INTEGER;
export function _decode_BufferSize (el: _Element): BufferSize {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 7, 66560)) {
        throw new ASN1OverflowError("BufferSize violates INTEGER (7..66560)");
    }
    return _decoded;
}
export const _encode_BufferSize: $.ASN1Encoder<BufferSize> = $._encodeInteger;


/* eslint-enable */

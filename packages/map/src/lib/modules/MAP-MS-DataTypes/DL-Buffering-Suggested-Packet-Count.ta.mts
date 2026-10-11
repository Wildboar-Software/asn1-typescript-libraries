/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DL_Buffering_Suggested_Packet_Count
 * @description
 *
 * Suggested downlink buffering packet count. The MME (via IWF) and SGSN may
 * take it into account, in addition to local policies, to decide extended
 * buffering of downlink packets at the SGW for High Latency Communication (3GPP
 * TS 29.272). If the VLR receives this parameter it shall ignore it. Values are
 * defined in 3GPP TS 29.272 (3GPP TS 29.002 V19.1.0 clauses 8.8.1.3 and
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DL-Buffering-Suggested-Packet-Count  ::=  INTEGER (-1..2147483647)
 * ```
 */
export
type DL_Buffering_Suggested_Packet_Count = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) DL_Buffering_Suggested_Packet_Count
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DL_Buffering_Suggested_Packet_Count = (el: _Element): DL_Buffering_Suggested_Packet_Count => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < -1 || n > 2147483647) {
        throw new ASN1OverflowError("DL_Buffering_Suggested_Packet_Count violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) DL_Buffering_Suggested_Packet_Count into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DL_Buffering_Suggested_Packet_Count, encoded as an ASN.1 Element.
 */
export const _encode_DL_Buffering_Suggested_Packet_Count = $._encodeInteger;


/* eslint-enable */

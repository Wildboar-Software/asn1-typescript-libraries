/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SegmentNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SegmentNumber  ::=  INTEGER(0..65535)
 * ```
 */
export
type SegmentNumber = INTEGER;
export const _decode_SegmentNumber = (el: _Element): SegmentNumber => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 65535n) {
        throw new ASN1OverflowError("SegmentNumber violates INTEGER range");
    }
    return value;
};
export const _encode_SegmentNumber = $._encodeInteger;


/* eslint-enable */

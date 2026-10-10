/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StreamID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamID  ::=  INTEGER(0..65535)
 * ```
 */
export
type StreamID = INTEGER;
export const _decode_StreamID = (el: _Element): StreamID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 65535n) {
        throw new ASN1OverflowError("StreamID violates INTEGER range");
    }
    return value;
};
export const _encode_StreamID = $._encodeInteger;


/* eslint-enable */

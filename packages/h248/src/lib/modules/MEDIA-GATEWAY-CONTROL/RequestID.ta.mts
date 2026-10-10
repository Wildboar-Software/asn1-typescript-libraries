/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type RequestID = INTEGER;
export const _decode_RequestID = (el: _Element): RequestID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("RequestID violates INTEGER range");
    }
    return value;
};
export const _encode_RequestID = $._encodeInteger;


/* eslint-enable */

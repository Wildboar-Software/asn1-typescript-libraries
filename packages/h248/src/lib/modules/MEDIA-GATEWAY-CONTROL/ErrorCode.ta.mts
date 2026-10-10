/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorCode  ::=  INTEGER(0..65535)
 * ```
 */
export
type ErrorCode = INTEGER;
export const _decode_ErrorCode = (el: _Element): ErrorCode => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 65535n) {
        throw new ASN1OverflowError("ErrorCode violates INTEGER range");
    }
    return value;
};
export const _encode_ErrorCode = $._encodeInteger;


/* eslint-enable */

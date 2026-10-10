/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextID  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextID = INTEGER;
export const _decode_ContextID = (el: _Element): ContextID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("ContextID violates INTEGER range");
    }
    return value;
};
export const _encode_ContextID = $._encodeInteger;


/* eslint-enable */

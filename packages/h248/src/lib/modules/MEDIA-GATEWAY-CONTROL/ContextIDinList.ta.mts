/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextIDinList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextIDinList  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextIDinList = INTEGER;
export const _decode_ContextIDinList = (el: _Element): ContextIDinList => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("ContextIDinList violates INTEGER range");
    }
    return value;
};
export const _encode_ContextIDinList = $._encodeInteger;


/* eslint-enable */

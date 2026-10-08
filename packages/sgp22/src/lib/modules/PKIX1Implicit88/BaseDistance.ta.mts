/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import { ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BaseDistance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BaseDistance  ::=  INTEGER (0..MAX)
 * ```
 */
export
type BaseDistance = INTEGER;
export function _decode_BaseDistance (el: _Element): BaseDistance {
    const value = $._decodeInteger(el);
    const numeric = typeof value === "bigint" ? value : BigInt(value);
    if (numeric < 0n) {
        throw new ASN1OverflowError("BaseDistance violates INTEGER range constraint");
    }
    return value;
}
export const _encode_BaseDistance = $._encodeInteger;


/* eslint-enable */

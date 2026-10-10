/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransactionId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransactionId  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type TransactionId = INTEGER;
export const _decode_TransactionId = (el: _Element): TransactionId => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 4294967295n) {
        throw new ASN1OverflowError("TransactionId violates INTEGER range");
    }
    return value;
};
export const _encode_TransactionId = $._encodeInteger;


/* eslint-enable */

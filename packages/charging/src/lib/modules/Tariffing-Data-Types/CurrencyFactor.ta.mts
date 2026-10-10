/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrencyFactor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyFactor  ::=  INTEGER (0..999999)
 * ```
 */
export
type CurrencyFactor = INTEGER;
export const _decode_CurrencyFactor = (el: _Element): CurrencyFactor => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 999999) {
        throw new ASN1OverflowError("CurrencyFactor violates INTEGER range");
    }
    return value;
};
export const _encode_CurrencyFactor = $._encodeInteger;


/* eslint-enable */

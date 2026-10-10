/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CurrencyScale
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyScale  ::=  INTEGER (-7..3)
 * ```
 */
export
type CurrencyScale = INTEGER;
export const _decode_CurrencyScale = (el: _Element): CurrencyScale => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < -7 || n > 3) {
        throw new ASN1OverflowError("CurrencyScale violates INTEGER range");
    }
    return value;
};
export const _encode_CurrencyScale = $._encodeInteger;


/* eslint-enable */

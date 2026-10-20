/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CurrencyAmount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyAmount  ::=  INTEGER (0..16777215)
 * ```
 */
export
type CurrencyAmount = INTEGER;

export
const _decode_CurrencyAmount = (el: _Element): CurrencyAmount => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 16777215n) : (value < 0 || value > 16777215))) {
        throw new ASN1OverflowError("CurrencyAmount violates INTEGER constraint");
    }
    return value;
};

export
const _encode_CurrencyAmount: $.ASN1Encoder<CurrencyAmount> = $._encodeInteger;

/* eslint-enable */

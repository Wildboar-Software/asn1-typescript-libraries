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
 * Mantissa of a currency amount. The amount is this value
 * multiplied by {@link CurrencyScale} (`10` to that power). `0` is
 * "no charge". A product of zero means the communication is free,
 * and a call-attempt or call-setup charge with that product is not
 * made.
 *
 * [ES 201 296 V1.3.1, clauses 6.3.1.2 to 6.3.1.4 and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
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

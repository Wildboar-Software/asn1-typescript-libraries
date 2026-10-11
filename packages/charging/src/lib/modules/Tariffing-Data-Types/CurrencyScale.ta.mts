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
 * Power of ten applied to {@link CurrencyFactor}. The amount is the
 * factor multiplied by `10` to this power. Clause 9 lists the
 * assigned values; every other value is spare. The parenthetical
 * numbers are the single-octet codings given there for the negative
 * powers.
 *
 * | Value | Coding | Scale |
 * | ---: | ---: | --- |
 * | -7 | 249 | 0.0000001 |
 * | -6 | 250 | 0.000001 |
 * | -5 | 251 | 0.00001 |
 * | -4 | 252 | 0.0001 |
 * | -3 | 253 | 0.001 |
 * | -2 | 254 | 0.01 |
 * | -1 | 255 | 0.1 |
 * | 0 | | 1 |
 * | 1 | | 10 |
 * | 2 | | 100 |
 * | 3 | | 1000 |
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
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

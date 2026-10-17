/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QCI
 * @description
 * 
 * Shall include the QCI for the bearer if present in the Request or response
 * (see TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and 7.2.15), or known in the
 * context at the SGW or PGW.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QCI  ::=  INTEGER (0..255)
 * ```
 */
export
type QCI = INTEGER;
export const _decode_QCI: $.ASN1Decoder<QCI> = (el: _Element): QCI => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("QCI violates INTEGER range");
    }
    return value;
};
export const _encode_QCI: $.ASN1Encoder<QCI> = $._encodeInteger;


/* eslint-enable */

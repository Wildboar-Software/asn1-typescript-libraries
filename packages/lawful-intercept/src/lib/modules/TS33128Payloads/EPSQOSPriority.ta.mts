/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSQOSPriority
 * @description
 * 
 * Shall include the priority level assigned to the bearer as an integer value
 * (see TS 29.274 [87] clause 8.15) if present in the Request or response (see
 * TS 29.274 [87] clauses 7.2.1, 7.2.2, 7.2.3 and 7.2.15), or known in the
 * context at the SGW or PGW.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSQOSPriority  ::=  INTEGER (1..15)
 * ```
 */
export
type EPSQOSPriority = INTEGER;
export const _decode_EPSQOSPriority: $.ASN1Decoder<EPSQOSPriority> = (el: _Element): EPSQOSPriority => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 1n || _n > 15n) {
        throw new ASN1OverflowError("EPSQOSPriority violates INTEGER range");
    }
    return value;
};
export const _encode_EPSQOSPriority: $.ASN1Encoder<EPSQOSPriority> = $._encodeInteger;


/* eslint-enable */

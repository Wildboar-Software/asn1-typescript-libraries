/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerRemovalCauseValue
 * @description
 * 
 * Shall indicate whether the bearer handling was successful and if not, it
 * gives information on the reason (see TS 29.274 [87] clauses 7.2.2, 7.2.8 and
 * 7.2.10).
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerRemovalCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerRemovalCauseValue = INTEGER;
export const _decode_EPSBearerRemovalCauseValue: $.ASN1Decoder<EPSBearerRemovalCauseValue> = (el: _Element): EPSBearerRemovalCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerRemovalCauseValue violates INTEGER range");
    }
    return value;
};
export const _encode_EPSBearerRemovalCauseValue: $.ASN1Encoder<EPSBearerRemovalCauseValue> = $._encodeInteger;


/* eslint-enable */

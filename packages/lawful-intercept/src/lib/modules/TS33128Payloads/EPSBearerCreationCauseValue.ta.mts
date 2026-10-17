/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerCreationCauseValue
 * @description
 * 
 * Shall indicate whether the bearer handling was successful and if not, it
 * gives information on the reason (see TS 29.274 [87] clauses 7.2.2 and 7.2.4).
 * Sent as an integer cause value (see TS 29.274 [87] table 8.4-1)
 *
 * 3GPP TS 33.128, clause 6.3.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerCreationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerCreationCauseValue = INTEGER;
export const _decode_EPSBearerCreationCauseValue: $.ASN1Decoder<EPSBearerCreationCauseValue> = (el: _Element): EPSBearerCreationCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerCreationCauseValue violates INTEGER range");
    }
    return value;
};
export const _encode_EPSBearerCreationCauseValue: $.ASN1Encoder<EPSBearerCreationCauseValue> = $._encodeInteger;


/* eslint-enable */

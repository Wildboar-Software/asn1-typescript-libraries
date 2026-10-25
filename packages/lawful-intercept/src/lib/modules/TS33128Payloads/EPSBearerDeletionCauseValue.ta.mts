/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerDeletionCauseValue
 * @description
 * 
 * Indicates whether the bearers requested for deletion were successfully
 * deleted (see TS 29.274 [87] clause 7.2.10).
 *
 * 3GPP TS 33.128, clause 6.3.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerDeletionCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerDeletionCauseValue = INTEGER;
export const _decode_EPSBearerDeletionCauseValue: $.ASN1Decoder<EPSBearerDeletionCauseValue> = (el: _Element): EPSBearerDeletionCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerDeletionCauseValue violates INTEGER range");
    }
    return value;
};
export const _encode_EPSBearerDeletionCauseValue: $.ASN1Encoder<EPSBearerDeletionCauseValue> = $._encodeInteger;


/* eslint-enable */

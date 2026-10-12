/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerModificationCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerModificationCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerModificationCauseValue = INTEGER;
export const _decode_EPSBearerModificationCauseValue: $.ASN1Decoder<EPSBearerModificationCauseValue> = (el: _Element): EPSBearerModificationCauseValue => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerModificationCauseValue violates INTEGER range");
    }
    return value;
};
export const _encode_EPSBearerModificationCauseValue: $.ASN1Encoder<EPSBearerModificationCauseValue> = $._encodeInteger;


/* eslint-enable */

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

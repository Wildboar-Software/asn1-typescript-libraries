/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSBearerID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerID  ::=  INTEGER (0..255)
 * ```
 */
export
type EPSBearerID = INTEGER;
export const _decode_EPSBearerID: $.ASN1Decoder<EPSBearerID> = (el: _Element): EPSBearerID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("EPSBearerID violates INTEGER range");
    }
    return value;
};
export const _encode_EPSBearerID: $.ASN1Encoder<EPSBearerID> = $._encodeInteger;


/* eslint-enable */

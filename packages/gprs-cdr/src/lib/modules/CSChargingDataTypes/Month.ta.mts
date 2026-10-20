/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Month
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Month       ::=  INTEGER ( 1 .. 12 )
 * ```
 */
export
type Month = INTEGER;

export const _decode_Month = (el: _Element): Month => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 1 || (typeof value === "bigint" ? Number(value) : value) > 12) {
        throw new ASN1OverflowError("Month violates INTEGER range");
    }
    return value;
};

export
const _encode_Month: $.ASN1Encoder<Month> = $._encodeInteger;

/* eslint-enable */

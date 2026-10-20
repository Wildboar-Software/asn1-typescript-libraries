/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LengthOfTimeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LengthOfTimeUnit  ::=  INTEGER (0..16777215)
 * ```
 */
export
type LengthOfTimeUnit = INTEGER;

export
const _decode_LengthOfTimeUnit = (el: _Element): LengthOfTimeUnit => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? (value < 0n || value > 16777215n) : (value < 0 || value > 16777215))) {
        throw new ASN1OverflowError("LengthOfTimeUnit violates INTEGER constraint");
    }
    return value;
};

export
const _encode_LengthOfTimeUnit: $.ASN1Encoder<LengthOfTimeUnit> = $._encodeInteger;

/* eslint-enable */

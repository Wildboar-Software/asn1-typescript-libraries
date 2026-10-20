/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResultCodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultCodeType  ::=  INTEGER ( 0 .. MAX )
 * ```
 */
export
type ResultCodeType = INTEGER;

export const _decode_ResultCodeType = (el: _Element): ResultCodeType => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? Number(value) : value) < 0) {
        throw new ASN1OverflowError("ResultCodeType violates INTEGER range");
    }
    return value;
};

export
const _encode_ResultCodeType: $.ASN1Encoder<ResultCodeType> = $._encodeInteger;

/* eslint-enable */

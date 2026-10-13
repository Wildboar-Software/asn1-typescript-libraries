/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MethodCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MethodCode  ::=  INTEGER (16..31)
 * ```
 */
export
type MethodCode = INTEGER;
export const _decode_MethodCode: $.ASN1Decoder<MethodCode> = (el: _Element): MethodCode => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 16n || _n > 31n) {
        throw new ASN1OverflowError("MethodCode violates INTEGER range");
    }
    return value;
};
export const _encode_MethodCode: $.ASN1Encoder<MethodCode> = $._encodeInteger;


/* eslint-enable */

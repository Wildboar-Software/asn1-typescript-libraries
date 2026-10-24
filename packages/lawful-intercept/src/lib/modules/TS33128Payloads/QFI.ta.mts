/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QFI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QFI  ::=  INTEGER (0..63)
 * ```
 */
export
type QFI = INTEGER;
export const _decode_QFI: $.ASN1Decoder<QFI> = (el: _Element): QFI => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 63n) {
        throw new ASN1OverflowError("QFI violates INTEGER range");
    }
    return value;
};
export const _encode_QFI: $.ASN1Encoder<QFI> = $._encodeInteger;


/* eslint-enable */

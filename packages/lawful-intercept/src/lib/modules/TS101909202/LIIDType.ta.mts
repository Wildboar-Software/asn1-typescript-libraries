/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LIIDType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LIIDType  ::=  INTEGER (0..65535)
 * ```
 */
export
type LIIDType = INTEGER;
export const _decode_LIIDType: $.ASN1Decoder<LIIDType> = (el: _Element): LIIDType => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 65535n) {
        throw new ASN1OverflowError("LIIDType violates INTEGER range");
    }
    return value;
};
export const _encode_LIIDType: $.ASN1Encoder<LIIDType> = $._encodeInteger;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveQI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveQI  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveQI = INTEGER;
export const _decode_FiveQI: $.ASN1Decoder<FiveQI> = (el: _Element): FiveQI => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 255n) {
        throw new ASN1OverflowError("FiveQI violates INTEGER range");
    }
    return value;
};
export const _encode_FiveQI: $.ASN1Encoder<FiveQI> = $._encodeInteger;


/* eslint-enable */

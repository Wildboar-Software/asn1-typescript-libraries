/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Confidence
 * @description
 * 
 * Indicates the confidence of the location in percentage.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confidence  ::=  INTEGER (0..100)
 * ```
 */
export
type Confidence = INTEGER;
export const _decode_Confidence: $.ASN1Decoder<Confidence> = (el: _Element): Confidence => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 100n) {
        throw new ASN1OverflowError("Confidence violates INTEGER range");
    }
    return value;
};
export const _encode_Confidence: $.ASN1Encoder<Confidence> = $._encodeInteger;


/* eslint-enable */

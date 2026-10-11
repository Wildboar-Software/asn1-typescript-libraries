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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Confidence  ::=  INTEGER (0..100)
 * ```
 */
export
type Confidence = INTEGER;

export function _decode_Confidence (el: _Element): Confidence {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 100n) {
        throw new ASN1OverflowError("Confidence violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_Confidence: $.ASN1Encoder<Confidence> = $._encodeInteger;


/* eslint-enable */

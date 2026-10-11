/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveGMMCause = INTEGER;

export function _decode_FiveGMMCause (el: _Element): FiveGMMCause {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("FiveGMMCause violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_FiveGMMCause: $.ASN1Encoder<FiveGMMCause> = $._encodeInteger;


/* eslint-enable */

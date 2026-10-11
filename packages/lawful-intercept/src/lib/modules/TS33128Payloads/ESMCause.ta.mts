/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ESMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ESMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type ESMCause = INTEGER;

export function _decode_ESMCause (el: _Element): ESMCause {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("ESMCause violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_ESMCause: $.ASN1Encoder<ESMCause> = $._encodeInteger;


/* eslint-enable */

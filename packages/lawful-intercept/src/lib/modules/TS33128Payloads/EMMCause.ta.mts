/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EMMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type EMMCause = INTEGER;

export function _decode_EMMCause (el: _Element): EMMCause {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("EMMCause violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_EMMCause: $.ASN1Encoder<EMMCause> = $._encodeInteger;


/* eslint-enable */

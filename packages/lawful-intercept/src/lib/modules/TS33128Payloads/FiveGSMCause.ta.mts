/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSMCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMCause  ::=  INTEGER (0..255)
 * ```
 */
export
type FiveGSMCause = INTEGER;

export function _decode_FiveGSMCause (el: _Element): FiveGSMCause {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("FiveGSMCause violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_FiveGSMCause: $.ASN1Encoder<FiveGSMCause> = $._encodeInteger;


/* eslint-enable */

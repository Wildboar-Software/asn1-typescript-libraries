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

export function _decode_MethodCode (el: _Element): MethodCode {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 16n || (typeof value === "bigint" ? value : BigInt(value)) > 31n) {
        throw new ASN1OverflowError("MethodCode violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_MethodCode: $.ASN1Encoder<MethodCode> = $._encodeInteger;


/* eslint-enable */

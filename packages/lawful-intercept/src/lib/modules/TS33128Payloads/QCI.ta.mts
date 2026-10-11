/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary QCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QCI  ::=  INTEGER (0..255)
 * ```
 */
export
type QCI = INTEGER;

export function _decode_QCI (el: _Element): QCI {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value : BigInt(value)) < 0n || (typeof value === "bigint" ? value : BigInt(value)) > 255n) {
        throw new ASN1OverflowError("QCI violates the INTEGER range constraint");
    }
    return value;
}

export const _encode_QCI: $.ASN1Encoder<QCI> = $._encodeInteger;


/* eslint-enable */

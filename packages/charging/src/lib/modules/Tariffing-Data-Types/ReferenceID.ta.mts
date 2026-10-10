/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferenceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type ReferenceID = INTEGER;
export const _decode_ReferenceID = (el: _Element): ReferenceID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 4294967295) {
        throw new ASN1OverflowError("ReferenceID violates INTEGER range");
    }
    return value;
};
export const _encode_ReferenceID = $._encodeInteger;


/* eslint-enable */

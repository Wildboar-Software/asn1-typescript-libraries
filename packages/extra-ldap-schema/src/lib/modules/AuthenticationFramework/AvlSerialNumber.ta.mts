/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AvlSerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AvlSerialNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export
type AvlSerialNumber = INTEGER;

export
function _decode_AvlSerialNumber (el: _Element): AvlSerialNumber {
    const value = $._decodeInteger(el);
    if (typeof value === "bigint" ? value < 0n : value < 0) {
        throw new ASN1OverflowError("AvlSerialNumber violates INTEGER constraint");
    }
    return value;
}

export
const _encode_AvlSerialNumber: $.ASN1Encoder<AvlSerialNumber> = $._encodeInteger;

/* eslint-enable */

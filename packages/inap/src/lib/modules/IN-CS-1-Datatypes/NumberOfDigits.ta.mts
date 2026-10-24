/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberOfDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfDigits  ::=  INTEGER(1..255)
 * ```
 */
export
type NumberOfDigits = INTEGER;

export
function _decode_NumberOfDigits (el: _Element): NumberOfDigits {
    const value = $._decodeInteger(el);
    if (value < 1 || value > 255) {
        throw new ASN1OverflowError("NumberOfDigits violates INTEGER constraint");
    }
    return value;
}

export
const _encode_NumberOfDigits: $.ASN1Encoder<NumberOfDigits> = $._encodeInteger;

/* eslint-enable */

/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNSClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNSClass     ::=  INTEGER (0..65535)
 * ```
 */
export
type DNSClass = INTEGER;

export function _decode_DNSClass (el: _Element): DNSClass {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 65535) {
        throw new ASN1OverflowError("DNSClass violates INTEGER range");
    }
    return value;
}

export
const _encode_DNSClass: $.ASN1Encoder<DNSClass> = $._encodeInteger;

/* eslint-enable */

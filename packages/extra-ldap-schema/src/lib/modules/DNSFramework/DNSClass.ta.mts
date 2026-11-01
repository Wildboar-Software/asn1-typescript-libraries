/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
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

export
function _decode_DNSClass (el: _Element): DNSClass {
    const value = $._decodeInteger(el);
    const below = typeof value === "bigint" ? value < 0n : value < 0;
    const above = typeof value === "bigint" ? value > 65535n : value > 65535;
    if (below || above) {
        throw new ASN1OverflowError("DNSClass violates INTEGER constraint");
    }
    return value;
}

export
const _encode_DNSClass: $.ASN1Encoder<DNSClass> = $._encodeInteger;

/* eslint-enable */

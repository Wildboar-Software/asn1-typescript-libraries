/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DNS_RR_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNS-RR-Type  ::=  INTEGER (0..65535)
 * ```
 */
export
type DNS_RR_Type = INTEGER;

export function _decode_DNS_RR_Type (el: _Element): DNS_RR_Type {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 65535) {
        throw new ASN1OverflowError("DNS_RR_Type violates INTEGER range");
    }
    return value;
}

export
const _encode_DNS_RR_Type: $.ASN1Encoder<DNS_RR_Type> = $._encodeInteger;

/* eslint-enable */

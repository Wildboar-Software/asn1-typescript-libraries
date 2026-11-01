/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1OverflowError,
    type INTEGER
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

export
function _decode_DNS_RR_Type (el: _Element): DNS_RR_Type {
    const value = $._decodeInteger(el);
    const below = typeof value === "bigint" ? value < 0n : value < 0;
    const above = typeof value === "bigint" ? value > 65535n : value > 65535;
    if (below || above) {
        throw new ASN1OverflowError("DNS-RR-Type violates INTEGER constraint");
    }
    return value;
}

export
const _encode_DNS_RR_Type: $.ASN1Encoder<DNS_RR_Type> = $._encodeInteger;

/* eslint-enable */

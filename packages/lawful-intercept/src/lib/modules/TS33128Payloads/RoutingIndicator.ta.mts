/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoutingIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingIndicator  ::=  INTEGER (0..9999)
 * ```
 */
export
type RoutingIndicator = INTEGER;
export const _decode_RoutingIndicator: $.ASN1Decoder<RoutingIndicator> = (el: _Element): RoutingIndicator => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 9999n) {
        throw new ASN1OverflowError("RoutingIndicator violates INTEGER range");
    }
    return value;
};
export const _encode_RoutingIndicator: $.ASN1Encoder<RoutingIndicator> = $._encodeInteger;


/* eslint-enable */

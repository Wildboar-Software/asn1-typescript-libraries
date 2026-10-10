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

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RoutingIndicator = (el: _Element): RoutingIndicator => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 9999n) {
        throw new ASN1OverflowError("RoutingIndicator violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RoutingIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingIndicator, encoded as an ASN.1 Element.
 */
export const _encode_RoutingIndicator = $._encodeInteger;


/* eslint-enable */

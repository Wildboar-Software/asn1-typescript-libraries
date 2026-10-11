/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NSAPI
 * @description
 *
 * Network layer Service Access Point Identifier (0..15). (3GPP TS 29.002
 * V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSAPI  ::=  INTEGER (0..15)
 * ```
 */
export
type NSAPI = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) NSAPI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NSAPI = (el: _Element): NSAPI => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 15) {
        throw new ASN1OverflowError("NSAPI violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) NSAPI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NSAPI, encoded as an ASN.1 Element.
 */
export const _encode_NSAPI = $._encodeInteger;


/* eslint-enable */

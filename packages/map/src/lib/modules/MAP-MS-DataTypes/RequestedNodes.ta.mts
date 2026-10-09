/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedNodes
 * @description
 *
 * Which PS serving nodes (MME and/or SGSN) should supply the requested
 * information. Absent if `requestedDomain` is `cs-Domain`. Other bits shall be
 * discarded.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedNodes  ::=  BIT STRING {
 *     mme    (0),
 *     sgsn    (1)} (SIZE (1..8))
 * ```
 */
export
type RequestedNodes = BIT_STRING;

/**
 * @summary RequestedNodes_mme
 * @constant
 */
export
const RequestedNodes_mme: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mme
 * @constant
 */
export
const mme: number = RequestedNodes_mme; /* SHORT_NAMED_BIT */

/**
 * @summary RequestedNodes_sgsn
 * @constant
 */
export
const RequestedNodes_sgsn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary sgsn
 * @constant
 */
export
const sgsn: number = RequestedNodes_sgsn; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedNodes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestedNodes = (el: _Element): RequestedNodes => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("RequestedNodes violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RequestedNodes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedNodes, encoded as an ASN.1 Element.
 */
export const _encode_RequestedNodes = $._encodeBitString;


/* eslint-enable */

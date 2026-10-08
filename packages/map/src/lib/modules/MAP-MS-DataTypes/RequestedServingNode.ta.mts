/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedServingNode
 * @description
 *
 * Which serving node(s) should notify UE reachability (`mmeAndSgsn`).
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedServingNode  ::=  BIT STRING {
 *     mmeAndSgsn  (0)} (SIZE (1..8))
 * ```
 */
export
type RequestedServingNode = BIT_STRING;

/**
 * @summary RequestedServingNode_mmeAndSgsn
 * @constant
 */
export
const RequestedServingNode_mmeAndSgsn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mmeAndSgsn
 * @constant
 */
export
const mmeAndSgsn: number = RequestedServingNode_mmeAndSgsn; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) RequestedServingNode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RequestedServingNode = (el: _Element): RequestedServingNode => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("RequestedServingNode violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RequestedServingNode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedServingNode, encoded as an ASN.1 Element.
 */
export const _encode_RequestedServingNode = $._encodeBitString;


/* eslint-enable */

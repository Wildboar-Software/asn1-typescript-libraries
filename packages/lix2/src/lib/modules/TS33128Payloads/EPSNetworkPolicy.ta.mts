/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSNetworkPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSNetworkPolicy  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type EPSNetworkPolicy = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) EPSNetworkPolicy
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSNetworkPolicy = $._decodeOctetString;

/**
 * @summary Encodes a(n) EPSNetworkPolicy into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSNetworkPolicy, encoded as an ASN.1 Element.
 */
export const _encode_EPSNetworkPolicy = $._encodeOctetString;


/* eslint-enable */

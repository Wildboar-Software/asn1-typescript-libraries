/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSNetworkCapability
 * @description
 *
 * Value part of the MS Network Capability IE in 3GPP TS 24.008 (SIZE 1..8).
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSNetworkCapability  ::=  OCTET STRING (SIZE (1..8))
 * ```
 */
export
type MSNetworkCapability = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) MSNetworkCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MSNetworkCapability = (el: _Element): MSNetworkCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("MSNetworkCapability violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MSNetworkCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MSNetworkCapability, encoded as an ASN.1 Element.
 */
export const _encode_MSNetworkCapability = $._encodeOctetString;


/* eslint-enable */

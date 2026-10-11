/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIP_URI
 * @description
 *
 * OCTET STRING coded as in IETF RFC 3261 (3GPP TS 29.002 V19.1.0 clause
 * 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIP-URI  ::=  OCTET STRING
 * ```
 */
export
type SIP_URI = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SIP_URI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SIP_URI = $._decodeOctetString;

/**
 * @summary Encodes a(n) SIP_URI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIP_URI, encoded as an ASN.1 Element.
 */
export const _encode_SIP_URI = $._encodeOctetString;


/* eslint-enable */

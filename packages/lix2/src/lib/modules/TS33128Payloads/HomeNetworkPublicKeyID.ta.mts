/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HomeNetworkPublicKeyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HomeNetworkPublicKeyID  ::=  OCTET STRING
 * ```
 */
export
type HomeNetworkPublicKeyID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) HomeNetworkPublicKeyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_HomeNetworkPublicKeyID = $._decodeOctetString;

/**
 * @summary Encodes a(n) HomeNetworkPublicKeyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HomeNetworkPublicKeyID, encoded as an ASN.1 Element.
 */
export const _encode_HomeNetworkPublicKeyID = $._encodeOctetString;


/* eslint-enable */

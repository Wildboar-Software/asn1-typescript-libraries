/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeodeticInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeodeticInformationOctet  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type GeodeticInformationOctet = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GeodeticInformationOctet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GeodeticInformationOctet = $._decodeOctetString;

/**
 * @summary Encodes a(n) GeodeticInformationOctet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeodeticInformationOctet, encoded as an ASN.1 Element.
 */
export const _encode_GeodeticInformationOctet = $._encodeOctetString;


/* eslint-enable */

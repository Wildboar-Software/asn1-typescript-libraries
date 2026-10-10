/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalInformationOctet  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type GeographicalInformationOctet = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicalInformationOctet
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GeographicalInformationOctet = $._decodeOctetString;

/**
 * @summary Encodes a(n) GeographicalInformationOctet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicalInformationOctet, encoded as an ASN.1 Element.
 */
export const _encode_GeographicalInformationOctet = $._encodeOctetString;


/* eslint-enable */

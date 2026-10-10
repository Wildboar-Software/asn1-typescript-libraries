/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
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
export const _decode_GeographicalInformationOctet = (el: _Element): GeographicalInformationOctet => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("GeographicalInformationOctet violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GeographicalInformationOctet into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicalInformationOctet, encoded as an ASN.1 Element.
 */
export const _encode_GeographicalInformationOctet = $._encodeOctetString;


/* eslint-enable */

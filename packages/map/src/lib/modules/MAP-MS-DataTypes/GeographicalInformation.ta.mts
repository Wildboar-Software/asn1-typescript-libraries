/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalInformation
 * @description
 *
 * Geographical Information defined in 3GPP TS 23.032. Only ellipsoid point with
 * uncertainty circle is allowed. Structure: type of shape (1 octet), latitude
 * (3), longitude (3), uncertainty code (1) (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.11.11 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalInformation  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type GeographicalInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GeographicalInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GeographicalInformation = (el: _Element): GeographicalInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("GeographicalInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GeographicalInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeographicalInformation, encoded as an ASN.1 Element.
 */
export const _encode_GeographicalInformation = $._encodeOctetString;


/* eslint-enable */

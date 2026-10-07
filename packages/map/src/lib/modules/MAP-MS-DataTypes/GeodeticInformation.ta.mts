/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeodeticInformation
 * @description
 *
 * Calling Geodetic Location defined in ITU-T Q.763 (1999). Only ellipsoid point
 * with uncertainty circle is allowed. Structure: screening and presentation
 * indicators (1 octet), type of shape (1), latitude (3), longitude (3),
 * uncertainty code (1), confidence (1) (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeodeticInformation  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type GeodeticInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GeodeticInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GeodeticInformation = (el: _Element): GeodeticInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("GeodeticInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GeodeticInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeodeticInformation, encoded as an ASN.1 Element.
 */
export const _encode_GeodeticInformation = $._encodeOctetString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationNumber
 * @description
 *
 * Location number; internal structure is defined in ITU-T Rec. Q.763 (SIZE
 * 2..10). (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationNumber  ::=  OCTET STRING (SIZE (2..10))
 * ```
 */
export
type LocationNumber = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LocationNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LocationNumber = (el: _Element): LocationNumber => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 10) {
        throw new ASN1SizeError("LocationNumber violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LocationNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationNumber, encoded as an ASN.1 Element.
 */
export const _encode_LocationNumber = $._encodeOctetString;


/* eslint-enable */

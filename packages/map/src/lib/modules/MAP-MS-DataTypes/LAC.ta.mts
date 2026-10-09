/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LAC
 * @description
 *
 * Location Area Code of the Location Area Identification in 3GPP TS 23.003;
 * coded as in 3GPP TS 24.008 (2 octets). (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LAC  ::=  OCTET STRING (SIZE (2))
 * ```
 */
export
type LAC = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LAC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LAC = (el: _Element): LAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("LAC violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LAC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LAC, encoded as an ASN.1 Element.
 */
export const _encode_LAC = $._encodeOctetString;


/* eslint-enable */

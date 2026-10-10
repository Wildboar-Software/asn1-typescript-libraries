/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TA_Id
 * @description
 *
 * E-UTRAN Tracking Area Identity. Size 5 octets, coded as described in 3GPP TS
 * 29.118.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TA-Id  ::=  OCTET STRING (SIZE (5))
 * ```
 */
export
type TA_Id = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TA_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TA_Id = (el: _Element): TA_Id => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 5) {
        throw new ASN1SizeError("TA_Id violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TA_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TA_Id, encoded as an ASN.1 Element.
 */
export const _encode_TA_Id = $._encodeOctetString;


/* eslint-enable */

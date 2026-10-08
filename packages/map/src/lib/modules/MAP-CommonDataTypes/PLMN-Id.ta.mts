/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PLMN_Id
 * @description
 *
 * PLMN identity. Size 3 octets.
 *
 * - octet 1 bits 4321: MCC 1st digit; bits 8765: MCC 2nd digit
 * - octet 2 bits 4321: MCC 3rd digit; bits 8765: MNC 3rd digit or filler 1111
 *   for 2-digit MNCs
 * - octet 3 bits 4321: MNC 1st digit; bits 8765: MNC 2nd digit
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMN-Id  ::=  OCTET STRING (SIZE (3))
 * ```
 */
export
type PLMN_Id = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PLMN_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PLMN_Id = (el: _Element): PLMN_Id => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("PLMN_Id violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PLMN_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMN_Id, encoded as an ASN.1 Element.
 */
export const _encode_PLMN_Id = $._encodeOctetString;


/* eslint-enable */

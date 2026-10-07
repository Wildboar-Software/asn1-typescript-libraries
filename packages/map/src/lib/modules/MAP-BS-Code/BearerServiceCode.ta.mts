/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BearerServiceCode
 * @description
 *
 * Identifies a single bearer service, a group of bearer services, or all bearer
 * services, as defined in 3GPP TS 22.002. Used only for supplementary service
 * management (3GPP TS 29.002 V19.1.0 clauses 7.6.4.38 and 17.7.10).
 *
 * One octet. For PLMN-specific bearer services, bits 8-1 are defined by the
 * HPLMN operator. For other bearer services, bit 8 is unused (0); bits 7-4 are
 * the group and bits 3-1 are the rate, if applicable.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BearerServiceCode  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type BearerServiceCode = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) BearerServiceCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BearerServiceCode = (el: _Element): BearerServiceCode => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("BearerServiceCode violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) BearerServiceCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BearerServiceCode, encoded as an ASN.1 Element.
 */
export const _encode_BearerServiceCode = $._encodeOctetString;


/* eslint-enable */

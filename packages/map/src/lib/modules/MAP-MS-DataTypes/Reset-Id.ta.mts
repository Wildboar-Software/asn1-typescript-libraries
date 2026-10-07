/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Reset_Id
 * @description
 *
 * Reset identifier, unique within the HPLMN. Size 1..4 octets. VLR/SGSN/MME may
 * restore subscribers whose subscription contains at least one listed Reset-Id.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.10.1.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reset-Id  ::=  OCTET STRING (SIZE (1..4))
 * ```
 */
export
type Reset_Id = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Reset_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Reset_Id = (el: _Element): Reset_Id => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 4) {
        throw new ASN1SizeError("Reset_Id violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Reset_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reset_Id, encoded as an ASN.1 Element.
 */
export const _encode_Reset_Id = $._encodeOctetString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary USSD_DataCodingScheme
 * @description
 *
 * One octet: Cell Broadcast Data Coding Scheme as in 3GPP TS 23.038 (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.4.36 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * USSD-DataCodingScheme  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type USSD_DataCodingScheme = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) USSD_DataCodingScheme
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_USSD_DataCodingScheme = (el: _Element): USSD_DataCodingScheme => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("USSD_DataCodingScheme violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) USSD_DataCodingScheme into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The USSD_DataCodingScheme, encoded as an ASN.1 Element.
 */
export const _encode_USSD_DataCodingScheme = $._encodeOctetString;


/* eslint-enable */

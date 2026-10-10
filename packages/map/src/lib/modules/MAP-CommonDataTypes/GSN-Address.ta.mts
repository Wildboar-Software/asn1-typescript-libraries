/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GSN_Address
 * @description
 *
 * GPRS Support Node address (SGSN or GGSN IP address as in 3GPP TS 23.003).
 * Size 5..17 octets. Used e.g. as SGSN address, GGSN address, and GMLC
 * addresses.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.39, 7.6.2.40 and 7.6.2.59).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSN-Address  ::=  OCTET STRING (SIZE (5..17))
 * ```
 */
export
type GSN_Address = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GSN_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GSN_Address = (el: _Element): GSN_Address => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 17) {
        throw new ASN1SizeError("GSN_Address violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GSN_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSN_Address, encoded as an ASN.1 Element.
 */
export const _encode_GSN_Address = $._encodeOctetString;


/* eslint-enable */

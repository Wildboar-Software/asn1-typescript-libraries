/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NAEA_CIC
 * @description
 *
 * Carrier Identification Code. Size 3 octets. Internal structure is the Carrier
 * Identification parameter in ANSI T1.113.3. Carrier codes "000"-"999" may be
 * encoded as 3 digits or as 4 digits "0000"-"0999". Codes "1000"-"9999" are
 * encoded using 4 digits.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.2.34).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAEA-CIC  ::=  OCTET STRING (SIZE (3))
 * ```
 */
export
type NAEA_CIC = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) NAEA_CIC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NAEA_CIC = (el: _Element): NAEA_CIC => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("NAEA_CIC violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) NAEA_CIC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NAEA_CIC, encoded as an ASN.1 Element.
 */
export const _encode_NAEA_CIC = $._encodeOctetString;


/* eslint-enable */

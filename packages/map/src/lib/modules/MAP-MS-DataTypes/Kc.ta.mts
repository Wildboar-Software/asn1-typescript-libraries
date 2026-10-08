/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Kc
 * @description
 *
 * GSM ciphering key (8 octets). (3GPP TS 29.002 V19.1.0 clauses 7.6.7.4 and
 * 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Kc  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type Kc = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Kc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Kc = (el: _Element): Kc => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("Kc violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Kc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Kc, encoded as an ASN.1 Element.
 */
export const _encode_Kc = $._encodeOctetString;


/* eslint-enable */

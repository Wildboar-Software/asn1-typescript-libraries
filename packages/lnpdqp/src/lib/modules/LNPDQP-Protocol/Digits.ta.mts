/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Digits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Digits  ::=  OCTET STRING (SIZE(4..9))
 * ```
 */
export
type Digits = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Digits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Digits = (el: _Element): Digits => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 9) {
        throw new ASN1SizeError("Digits violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Digits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Digits, encoded as an ASN.1 Element.
 */
export const _encode_Digits = $._encodeOctetString;


/* eslint-enable */

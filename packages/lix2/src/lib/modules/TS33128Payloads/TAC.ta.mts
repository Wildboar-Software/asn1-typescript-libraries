/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAC  ::=  OCTET STRING (SIZE(2..3))
 * ```
 */
export
type TAC = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TAC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TAC = (el: _Element): TAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("TAC violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TAC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TAC, encoded as an ASN.1 Element.
 */
export const _encode_TAC = $._encodeOctetString;


/* eslint-enable */

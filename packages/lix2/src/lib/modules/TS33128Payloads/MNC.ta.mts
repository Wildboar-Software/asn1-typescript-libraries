/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNC  ::=  NumericString (SIZE(2..3))
 * ```
 */
export
type MNC = NumericString; // NumericString

/**
 * @summary Decodes an ASN.1 element into a(n) MNC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MNC = (el: _Element): MNC => {
    const value = $._decodeNumericString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("MNC violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MNC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MNC, encoded as an ASN.1 Element.
 */
export const _encode_MNC = $._encodeNumericString;


/* eslint-enable */

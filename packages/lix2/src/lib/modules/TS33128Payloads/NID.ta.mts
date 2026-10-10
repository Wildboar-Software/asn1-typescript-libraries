/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NID  ::=  UTF8String (SIZE(11))
 * ```
 */
export
type NID = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) NID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NID = (el: _Element): NID => {
    const value = $._decodeUTF8String(el);
    if (value.length < 11 || value.length > 11) {
        throw new ASN1SizeError("NID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) NID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NID, encoded as an ASN.1 Element.
 */
export const _encode_NID = $._encodeUTF8String;


/* eslint-enable */

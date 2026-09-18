/* eslint-disable */
import {
    ASN1SizeError,
    VisibleString,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary URI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * URI  ::=  VisibleString (SIZE(1..MAX))
 * ```
 */
export
type URI = VisibleString; // VisibleString


/**
 * @summary Decodes an ASN.1 element into a(n) URI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export function _decode_URI (el: _Element): URI {
    const value = $._decodeVisibleString(el);
    if (value.length < 1) {
        throw new ASN1SizeError("URI violates SIZE (1..MAX) constraint");
    }
    return value;
}


/**
 * @summary Encodes a(n) URI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The URI, encoded as an ASN.1 Element.
 */
export const _encode_URI = $._encodeVisibleString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PagingRestrictionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagingRestrictionIndicator  ::=  OCTET STRING (SIZE(1..33))
 * ```
 */
export
type PagingRestrictionIndicator = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PagingRestrictionIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PagingRestrictionIndicator = (el: _Element): PagingRestrictionIndicator => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 33) {
        throw new ASN1SizeError("PagingRestrictionIndicator violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PagingRestrictionIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagingRestrictionIndicator, encoded as an ASN.1 Element.
 */
export const _encode_PagingRestrictionIndicator = $._encodeOctetString;


/* eslint-enable */

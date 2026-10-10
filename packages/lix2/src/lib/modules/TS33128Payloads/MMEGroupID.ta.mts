/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEGroupID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type MMEGroupID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) MMEGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMEGroupID = (el: _Element): MMEGroupID => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("MMEGroupID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MMEGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEGroupID, encoded as an ASN.1 Element.
 */
export const _encode_MMEGroupID = $._encodeOctetString;


/* eslint-enable */

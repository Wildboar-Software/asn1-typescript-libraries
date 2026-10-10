/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GLI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GLI  ::=  OCTET STRING (SIZE(0..150))
 * ```
 */
export
type GLI = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GLI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GLI = (el: _Element): GLI => {
    const value = $._decodeOctetString(el);
    if (value.length < 0 || value.length > 150) {
        throw new ASN1SizeError("GLI violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) GLI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GLI, encoded as an ASN.1 Element.
 */
export const _encode_GLI = $._encodeOctetString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCapability  ::=  OCTET STRING (SIZE(1..13))
 * ```
 */
export
type FiveGMMCapability = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGMMCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGMMCapability = (el: _Element): FiveGMMCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 13) {
        throw new ASN1SizeError("FiveGMMCapability violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) FiveGMMCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGMMCapability, encoded as an ASN.1 Element.
 */
export const _encode_FiveGMMCapability = $._encodeOctetString;


/* eslint-enable */

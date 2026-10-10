/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IK
 * @description
 *
 * UMTS Integrity Key (16 octets). (3GPP TS 29.002 V19.1.0 clauses 7.6.7.5B
 * and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IK  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export
type IK = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) IK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IK = (el: _Element): IK => {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("IK violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) IK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IK, encoded as an ASN.1 Element.
 */
export const _encode_IK = $._encodeOctetString;


/* eslint-enable */

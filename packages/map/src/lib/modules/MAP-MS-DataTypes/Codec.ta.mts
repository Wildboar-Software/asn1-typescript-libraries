/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Codec
 * @description
 *
 * Iu codec: octet 1 is the Codec Identification code in 3GPP TS 26.103; octets
 * 2-4 are codec parameters as in 3GPP TS 26.103 if available (3GPP TS 29.002
 * V19.1.0 clauses 7.6.6.16 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Codec  ::=  OCTET STRING (SIZE (1..4))
 * ```
 */
export
type Codec = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Codec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Codec = (el: _Element): Codec => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 4) {
        throw new ASN1SizeError("Codec violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Codec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Codec, encoded as an ASN.1 Element.
 */
export const _encode_Codec = $._encodeOctetString;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UUID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UUID  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export
type UUID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UUID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UUID = $._decodeOctetString;

/**
 * @summary Encodes a(n) UUID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUID, encoded as an ASN.1 Element.
 */
export const _encode_UUID = $._encodeOctetString;


/* eslint-enable */

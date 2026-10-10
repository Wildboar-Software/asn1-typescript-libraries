/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary KAF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KAF  ::=  OCTET STRING
 * ```
 */
export
type KAF = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) KAF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_KAF = $._decodeOctetString;

/**
 * @summary Encodes a(n) KAF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KAF, encoded as an ASN.1 Element.
 */
export const _encode_KAF = $._encodeOctetString;


/* eslint-enable */

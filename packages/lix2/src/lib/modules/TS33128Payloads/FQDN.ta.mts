/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FQDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FQDN  ::=  UTF8String
 * ```
 */
export
type FQDN = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) FQDN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FQDN = $._decodeUTF8String;

/**
 * @summary Encodes a(n) FQDN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FQDN, encoded as an ASN.1 Element.
 */
export const _encode_FQDN = $._encodeUTF8String;


/* eslint-enable */

/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGID  ::=  INTEGER
 * ```
 */
export
type CSGID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) CSGID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CSGID = $._decodeInteger;

/**
 * @summary Encodes a(n) CSGID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSGID, encoded as an ASN.1 Element.
 */
export const _encode_CSGID = $._encodeInteger;


/* eslint-enable */

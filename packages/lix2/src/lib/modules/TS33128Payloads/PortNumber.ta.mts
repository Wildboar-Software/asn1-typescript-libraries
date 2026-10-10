/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PortNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PortNumber  ::=  INTEGER (0..65535)
 * ```
 */
export
type PortNumber = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) PortNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PortNumber = $._decodeInteger;

/**
 * @summary Encodes a(n) PortNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortNumber, encoded as an ASN.1 Element.
 */
export const _encode_PortNumber = $._encodeInteger;


/* eslint-enable */

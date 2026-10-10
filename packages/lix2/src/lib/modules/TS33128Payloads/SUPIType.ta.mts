/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIType  ::=  INTEGER (0..7)
 * ```
 */
export
type SUPIType = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SUPIType = $._decodeInteger;

/**
 * @summary Encodes a(n) SUPIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPIType, encoded as an ASN.1 Element.
 */
export const _encode_SUPIType = $._encodeInteger;


/* eslint-enable */

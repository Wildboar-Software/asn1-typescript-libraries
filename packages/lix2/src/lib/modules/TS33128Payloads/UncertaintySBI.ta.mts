/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UncertaintySBI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UncertaintySBI  ::=  UTF8String
 * ```
 */
export
type UncertaintySBI = UTF8String; // UTF8String

/**
 * @summary Decodes an ASN.1 element into a(n) UncertaintySBI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UncertaintySBI = $._decodeUTF8String;

/**
 * @summary Encodes a(n) UncertaintySBI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UncertaintySBI, encoded as an ASN.1 Element.
 */
export const _encode_UncertaintySBI = $._encodeUTF8String;


/* eslint-enable */

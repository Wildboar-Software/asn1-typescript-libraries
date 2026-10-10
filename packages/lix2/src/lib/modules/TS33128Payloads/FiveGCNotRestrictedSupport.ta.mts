/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGCNotRestrictedSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGCNotRestrictedSupport  ::=  BOOLEAN
 * ```
 */
export
type FiveGCNotRestrictedSupport = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGCNotRestrictedSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGCNotRestrictedSupport = $._decodeBoolean;

/**
 * @summary Encodes a(n) FiveGCNotRestrictedSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGCNotRestrictedSupport, encoded as an ASN.1 Element.
 */
export const _encode_FiveGCNotRestrictedSupport = $._encodeBoolean;


/* eslint-enable */

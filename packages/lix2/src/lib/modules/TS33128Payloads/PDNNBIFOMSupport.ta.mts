/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNNBIFOMSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNNBIFOMSupport  ::=  BOOLEAN
 * ```
 */
export
type PDNNBIFOMSupport = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) PDNNBIFOMSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PDNNBIFOMSupport = $._decodeBoolean;

/**
 * @summary Encodes a(n) PDNNBIFOMSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNNBIFOMSupport, encoded as an ASN.1 Element.
 */
export const _encode_PDNNBIFOMSupport = $._encodeBoolean;


/* eslint-enable */

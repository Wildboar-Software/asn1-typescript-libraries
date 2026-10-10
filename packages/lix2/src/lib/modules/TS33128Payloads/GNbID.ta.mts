/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GNbID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GNbID  ::=  BIT STRING(SIZE(22..32))
 * ```
 */
export
type GNbID = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) GNbID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GNbID = $._decodeBitString;

/**
 * @summary Encodes a(n) GNbID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GNbID, encoded as an ASN.1 Element.
 */
export const _encode_GNbID = $._encodeBitString;


/* eslint-enable */

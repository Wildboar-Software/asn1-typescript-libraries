/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Uncertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Uncertainty  ::=  INTEGER (0..127)
 * ```
 */
export
type Uncertainty = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) Uncertainty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Uncertainty = $._decodeInteger;

/**
 * @summary Encodes a(n) Uncertainty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Uncertainty, encoded as an ASN.1 Element.
 */
export const _encode_Uncertainty = $._encodeInteger;


/* eslint-enable */

/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATFrequencySelectionPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATFrequencySelectionPriority  ::=  INTEGER (1..256)
 * ```
 */
export
type RATFrequencySelectionPriority = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RATFrequencySelectionPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RATFrequencySelectionPriority = $._decodeInteger;

/**
 * @summary Encodes a(n) RATFrequencySelectionPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RATFrequencySelectionPriority, encoded as an ASN.1 Element.
 */
export const _encode_RATFrequencySelectionPriority = $._encodeInteger;


/* eslint-enable */

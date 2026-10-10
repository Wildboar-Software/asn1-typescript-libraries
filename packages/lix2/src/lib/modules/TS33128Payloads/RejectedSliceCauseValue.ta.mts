/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RejectedSliceCauseValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectedSliceCauseValue  ::=  INTEGER (0..255)
 * ```
 */
export
type RejectedSliceCauseValue = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RejectedSliceCauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RejectedSliceCauseValue = $._decodeInteger;

/**
 * @summary Encodes a(n) RejectedSliceCauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RejectedSliceCauseValue, encoded as an ASN.1 Element.
 */
export const _encode_RejectedSliceCauseValue = $._encodeInteger;


/* eslint-enable */

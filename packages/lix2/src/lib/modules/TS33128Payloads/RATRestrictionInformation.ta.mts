/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATRestrictionInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATRestrictionInformation  ::=  BIT STRING (SIZE(8, ...))
 * ```
 */
export
type RATRestrictionInformation = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) RATRestrictionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RATRestrictionInformation = $._decodeBitString;

/**
 * @summary Encodes a(n) RATRestrictionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RATRestrictionInformation, encoded as an ASN.1 Element.
 */
export const _encode_RATRestrictionInformation = $._encodeBitString;


/* eslint-enable */

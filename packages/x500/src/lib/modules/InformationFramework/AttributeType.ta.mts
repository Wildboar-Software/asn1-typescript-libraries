/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary AttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeType  ::=  ATTRIBUTE.&id
 * ```
 */
export type AttributeType = OBJECT_IDENTIFIER; // ObjectClassFieldType

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeType} The decoded data structure.
 */
export const _decode_AttributeType = $._decodeObjectIdentifier;

/**
 * @summary Encodes a(n) AttributeType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeType, encoded as an ASN.1 Element.
 */
export const _encode_AttributeType = $._encodeObjectIdentifier;


/* eslint-enable */

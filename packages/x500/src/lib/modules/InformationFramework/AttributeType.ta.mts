/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION AttributeType */
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
/* END_OF_SYMBOL_DEFINITION AttributeType */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeType */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeType} The decoded data structure.
 */
export const _decode_AttributeType = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_AttributeType */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeType */
/**
 * @summary Encodes a(n) AttributeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeType, encoded as an ASN.1 Element.
 */
export const _encode_AttributeType = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_AttributeType */

/* eslint-enable */

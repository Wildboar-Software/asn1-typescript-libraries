/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/**
 * @summary AttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdentifier  ::=  ATTRIBUTE.&id({AttributeIDs})
 * ```
 */
export type AttributeIdentifier = OBJECT_IDENTIFIER; // ObjectClassFieldType


export const _decode_AttributeIdentifier = $._decodeObjectIdentifier;


export const _encode_AttributeIdentifier = $._encodeObjectIdentifier;


/* eslint-enable */

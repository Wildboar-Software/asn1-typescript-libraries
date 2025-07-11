/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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

/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary AttributeValue
 * @description
 *
 * Open type: one stored value of an {@link AttributeType} (`ATTRIBUTE.&Type`).
 * Bound here as a raw ASN.1 element; the syntax is that of the identified
 * attribute. Distinguished values used in an RDN do not include contexts.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValue  ::=  ATTRIBUTE.&Type
 * ```
 */
export type AttributeValue = _Element; // ObjectClassFieldType


export const _decode_AttributeValue = $._decodeAny;


export const _encode_AttributeValue = $._encodeAny;


/* eslint-enable */

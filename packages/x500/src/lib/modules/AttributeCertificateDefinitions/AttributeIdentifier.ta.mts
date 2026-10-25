/* eslint-disable */
import { ASN1Element as _Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary AttributeIdentifier
 * @description
 *
 * ATTRIBUTE.&id — OID of an attribute type. Compare as OID equality.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdentifier  ::=  ATTRIBUTE.&id({AttributeIDs})
 * ```
 */
export type AttributeIdentifier = OBJECT_IDENTIFIER; // ObjectClassFieldType


export const _decode_AttributeIdentifier: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;


export const _encode_AttributeIdentifier: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */

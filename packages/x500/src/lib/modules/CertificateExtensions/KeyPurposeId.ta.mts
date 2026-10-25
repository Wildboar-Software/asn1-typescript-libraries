/* eslint-disable */
import { ASN1Element as _Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary KeyPurposeId
 * @description
 *
 * OBJECT IDENTIFIER of one extended key purpose. SEQUENCE SIZE (1..MAX) in
 * extKeyUsage. `anyExtendedKeyUsage` removes restriction. Critical EKU:
 * use only for a listed purpose. Independent of KeyUsage when both critical.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyPurposeId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type KeyPurposeId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_KeyPurposeId: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;


export const _encode_KeyPurposeId: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */

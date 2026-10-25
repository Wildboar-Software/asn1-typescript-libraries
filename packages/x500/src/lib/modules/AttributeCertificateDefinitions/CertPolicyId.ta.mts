/* eslint-disable */
import { ASN1Element as _Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CertPolicyId
 * @description
 *
 * Certificate policy OID. Compare as OID equality.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CertPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_CertPolicyId: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;


export const _encode_CertPolicyId: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */

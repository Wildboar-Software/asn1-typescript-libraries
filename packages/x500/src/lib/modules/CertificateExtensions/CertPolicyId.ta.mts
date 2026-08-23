/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CertPolicyId
 * @description
 *
 * OBJECT IDENTIFIER of one certificate policy. `anyPolicy`
 * ({id-ce-certificatePolicies 0}) is special: matches every policy and shall
 * not be mapped to or from. Qualifiers do not change this identity.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CertPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_CertPolicyId = $._decodeObjectIdentifier;


export const _encode_CertPolicyId = $._encodeObjectIdentifier;


/* eslint-enable */

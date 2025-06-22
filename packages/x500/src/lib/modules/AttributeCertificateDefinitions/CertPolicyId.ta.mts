/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CertPolicyId
 * @description
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

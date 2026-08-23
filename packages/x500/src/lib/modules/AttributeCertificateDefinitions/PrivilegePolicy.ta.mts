/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary PrivilegePolicy
 * @description
 *
 * OID identifying a privilege policy. Compare as OID equality.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivilegePolicy  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PrivilegePolicy = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_PrivilegePolicy = $._decodeObjectIdentifier;


export const _encode_PrivilegePolicy = $._encodeObjectIdentifier;


/* eslint-enable */

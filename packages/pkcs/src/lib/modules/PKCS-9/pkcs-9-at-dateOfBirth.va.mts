/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ietf_at } from "../PKCS-9/ietf-at.va.mjs";

/**
 * @summary pkcs_9_at_dateOfBirth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-dateOfBirth              OBJECT IDENTIFIER ::= {ietf-at 1}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_dateOfBirth: OBJECT_IDENTIFIER = _OID.fromParts([1], ietf_at);

/* eslint-enable */

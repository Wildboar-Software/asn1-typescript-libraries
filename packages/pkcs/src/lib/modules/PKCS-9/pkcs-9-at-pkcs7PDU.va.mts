/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va.mjs";

/**
 * @summary pkcs_9_at_pkcs7PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-pkcs7PDU                 OBJECT IDENTIFIER ::= {pkcs-9-at 5}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_pkcs7PDU: OBJECT_IDENTIFIER = _OID.fromParts([5], pkcs_9_at);

/* eslint-enable */

/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs15 } from "../PKCS-15/pkcs15.va.mjs";

/**
 * @summary pkcs15_at
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15-at OBJECT IDENTIFIER ::= {pkcs15 2}
 * ```
 *
 * @constant
 */
export const pkcs15_at: OBJECT_IDENTIFIER = _OID.fromParts([2], pkcs15);

/* eslint-enable */

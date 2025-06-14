/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary pkcs_9_at_localKeyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-localKeyId               OBJECT IDENTIFIER ::= {pkcs-9 21}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_localKeyId: OBJECT_IDENTIFIER = new _OID([21], pkcs_9);

/* eslint-enable */

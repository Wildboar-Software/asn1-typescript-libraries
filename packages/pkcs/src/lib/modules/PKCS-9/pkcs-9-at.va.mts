/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary pkcs_9_at
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at OBJECT IDENTIFIER ::= {pkcs-9 25}
 * ```
 *
 * @constant
 */
export const pkcs_9_at: OBJECT_IDENTIFIER = new _OID([25], pkcs_9);

/* eslint-enable */

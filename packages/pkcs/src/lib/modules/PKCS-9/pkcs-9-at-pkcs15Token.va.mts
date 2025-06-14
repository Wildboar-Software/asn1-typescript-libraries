/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9_at } from "../PKCS-9/pkcs-9-at.va.mjs";

/**
 * @summary pkcs_9_at_pkcs15Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-pkcs15Token              OBJECT IDENTIFIER ::= {pkcs-9-at 1}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_pkcs15Token: OBJECT_IDENTIFIER = new _OID(
    [1],
    pkcs_9_at
);

/* eslint-enable */

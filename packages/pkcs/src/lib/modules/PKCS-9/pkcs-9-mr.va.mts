/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary pkcs_9_mr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-mr OBJECT IDENTIFIER ::= {pkcs-9 27}
 * ```
 *
 * @constant
 */
export const pkcs_9_mr: OBJECT_IDENTIFIER = _OID.fromParts([27], pkcs_9);

/* eslint-enable */

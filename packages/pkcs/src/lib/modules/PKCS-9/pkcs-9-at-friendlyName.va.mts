/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary pkcs_9_at_friendlyName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-friendlyName             OBJECT IDENTIFIER ::= {pkcs-9 20}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_friendlyName: OBJECT_IDENTIFIER = _OID.fromParts([20], pkcs_9);

/* eslint-enable */

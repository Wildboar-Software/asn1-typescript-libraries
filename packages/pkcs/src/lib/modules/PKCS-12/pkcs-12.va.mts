/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs } from "../PKCS-12/pkcs.va.mjs";

/**
 * @summary pkcs_12
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-12 OBJECT IDENTIFIER ::= {pkcs 12}
 * ```
 *
 * @constant
 */
export const pkcs_12: OBJECT_IDENTIFIER = _OID.fromParts([12], pkcs);

/* eslint-enable */

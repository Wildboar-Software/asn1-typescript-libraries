/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary id_PBKDF2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-PBKDF2 OBJECT IDENTIFIER ::= {pkcs-5 12}
 * ```
 *
 * @constant
 */
export const id_PBKDF2: OBJECT_IDENTIFIER = new _OID([12], pkcs_5);

/* eslint-enable */

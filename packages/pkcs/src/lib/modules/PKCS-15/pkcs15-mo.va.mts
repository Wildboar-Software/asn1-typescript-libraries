/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs15 } from "../PKCS-15/pkcs15.va.mjs";

/**
 * @summary pkcs15_mo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15-mo OBJECT IDENTIFIER ::= {pkcs15 1}
 * ```
 *
 * @constant
 */
export const pkcs15_mo: OBJECT_IDENTIFIER = new _OID([1], pkcs15);

/* eslint-enable */

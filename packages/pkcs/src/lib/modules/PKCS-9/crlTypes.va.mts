/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary crlTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * crlTypes                           OBJECT IDENTIFIER ::= {pkcs-9 23}
 * ```
 *
 * @constant
 */
export const crlTypes: OBJECT_IDENTIFIER = new _OID([23], pkcs_9);

/* eslint-enable */

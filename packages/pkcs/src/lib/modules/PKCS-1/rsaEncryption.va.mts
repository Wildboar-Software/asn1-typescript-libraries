/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va.mjs";

/**
 * @summary rsaEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsaEncryption    OBJECT IDENTIFIER ::= { pkcs-1 1 }
 * ```
 *
 * @constant
 */
export const rsaEncryption: OBJECT_IDENTIFIER = new _OID([1], pkcs_1);

/* eslint-enable */

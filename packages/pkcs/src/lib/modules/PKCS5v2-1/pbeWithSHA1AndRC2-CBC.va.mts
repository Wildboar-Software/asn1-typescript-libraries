/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary pbeWithSHA1AndRC2_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithSHA1AndRC2-CBC OBJECT IDENTIFIER ::= {pkcs-5 11}
 * ```
 *
 * @constant
 */
export const pbeWithSHA1AndRC2_CBC: OBJECT_IDENTIFIER = new _OID([11], pkcs_5);

/* eslint-enable */

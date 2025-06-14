/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary pbeWithMD5AndRC2_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithMD5AndRC2-CBC OBJECT IDENTIFIER ::= {pkcs-5 6}
 * ```
 *
 * @constant
 */
export const pbeWithMD5AndRC2_CBC: OBJECT_IDENTIFIER = new _OID([6], pkcs_5);

/* eslint-enable */

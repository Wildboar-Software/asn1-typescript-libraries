/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary pbeWithMD2AndDES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithMD2AndDES-CBC OBJECT IDENTIFIER ::= {pkcs-5 1}
 * ```
 *
 * @constant
 */
export const pbeWithMD2AndDES_CBC: OBJECT_IDENTIFIER = _OID.fromParts([1], pkcs_5);

/* eslint-enable */

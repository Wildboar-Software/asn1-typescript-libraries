/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary pbeWithMD5AndDES_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pbeWithMD5AndDES-CBC OBJECT IDENTIFIER ::= {pkcs-5 3}
 * ```
 *
 * @constant
 */
export const pbeWithMD5AndDES_CBC: OBJECT_IDENTIFIER = _OID.fromParts([3], pkcs_5);

/* eslint-enable */

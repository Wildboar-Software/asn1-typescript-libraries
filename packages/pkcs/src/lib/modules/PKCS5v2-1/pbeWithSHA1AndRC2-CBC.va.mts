/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
export const pbeWithSHA1AndRC2_CBC: OBJECT_IDENTIFIER = _OID.fromParts([11], pkcs_5);

/* eslint-enable */

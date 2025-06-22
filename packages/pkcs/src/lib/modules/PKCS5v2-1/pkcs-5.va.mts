/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs } from "../PKCS5v2-1/pkcs.va.mjs";

/**
 * @summary pkcs_5
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-5 OBJECT IDENTIFIER ::= {pkcs 5}
 * ```
 *
 * @constant
 */
export const pkcs_5: OBJECT_IDENTIFIER = _OID.fromParts([5], pkcs);

/* eslint-enable */

/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary smime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smime                              OBJECT IDENTIFIER ::= {pkcs-9 16}
 * ```
 *
 * @constant
 */
export const smime: OBJECT_IDENTIFIER = _OID.fromParts([16], pkcs_9);

/* eslint-enable */

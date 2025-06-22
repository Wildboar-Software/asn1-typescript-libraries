/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs15 } from "../PKCS-15/pkcs15.va.mjs";

/**
 * @summary pkcs15_ct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs15-ct OBJECT IDENTIFIER ::= {pkcs15 3}
 * ```
 *
 * @constant
 */
export const pkcs15_ct: OBJECT_IDENTIFIER = _OID.fromParts([3], pkcs15);

/* eslint-enable */

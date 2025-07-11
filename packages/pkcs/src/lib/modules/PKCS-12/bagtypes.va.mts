/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_12 } from "../PKCS-12/pkcs-12.va.mjs";

/**
 * @summary bagtypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bagtypes OBJECT IDENTIFIER ::= {pkcs-12 10 1}
 * ```
 *
 * @constant
 */
export const bagtypes: OBJECT_IDENTIFIER = _OID.fromParts([10, 1], pkcs_12);

/* eslint-enable */

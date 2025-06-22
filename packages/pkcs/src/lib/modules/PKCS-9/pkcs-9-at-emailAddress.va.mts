/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_9 } from "../PKCS-9/pkcs-9.va.mjs";

/**
 * @summary pkcs_9_at_emailAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-9-at-emailAddress        OBJECT IDENTIFIER ::= {pkcs-9 1}
 * ```
 *
 * @constant
 */
export const pkcs_9_at_emailAddress: OBJECT_IDENTIFIER = _OID.fromParts([1], pkcs_9);

/* eslint-enable */

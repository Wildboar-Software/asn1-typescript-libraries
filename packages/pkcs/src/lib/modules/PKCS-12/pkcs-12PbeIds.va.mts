/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_12 } from "../PKCS-12/pkcs-12.va.mjs";

/**
 * @summary pkcs_12PbeIds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-12PbeIds OBJECT IDENTIFIER ::= {pkcs-12 1}
 * ```
 *
 * @constant
 */
export const pkcs_12PbeIds: OBJECT_IDENTIFIER = _OID.fromParts([1], pkcs_12);

/* eslint-enable */

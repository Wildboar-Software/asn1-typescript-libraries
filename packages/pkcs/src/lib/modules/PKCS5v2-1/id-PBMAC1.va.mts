/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary id_PBMAC1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-PBMAC1 OBJECT IDENTIFIER ::= {pkcs-5 14}
 * ```
 *
 * @constant
 */
export const id_PBMAC1: OBJECT_IDENTIFIER = _OID.fromParts([14], pkcs_5);

/* eslint-enable */

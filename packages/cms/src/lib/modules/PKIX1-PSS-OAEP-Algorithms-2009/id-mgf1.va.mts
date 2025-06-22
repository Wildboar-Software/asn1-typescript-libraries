/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/pkcs-1.va.mjs";

/**
 * @summary id_mgf1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgf1  OBJECT IDENTIFIER ::= { pkcs-1 8 }
 * ```
 *
 * @constant
 */
export const id_mgf1: OBJECT_IDENTIFIER = _OID.fromParts([8], pkcs_1);

/* eslint-enable */

/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/pkcs-1.va.mjs";

/**
 * @summary id_RSAES_OAEP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-RSAES-OAEP  OBJECT IDENTIFIER ::= { pkcs-1 7 }
 * ```
 *
 * @constant
 */
export const id_RSAES_OAEP: OBJECT_IDENTIFIER = new _OID([7], pkcs_1);

/* eslint-enable */

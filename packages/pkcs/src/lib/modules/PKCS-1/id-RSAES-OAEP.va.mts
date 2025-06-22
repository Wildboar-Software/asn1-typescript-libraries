/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { pkcs_1 } from "../PKCS-1/pkcs-1.va.mjs";

/**
 * @summary id_RSAES_OAEP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-RSAES-OAEP    OBJECT IDENTIFIER ::= { pkcs-1 7 }
 * ```
 *
 * @constant
 */
export const id_RSAES_OAEP: OBJECT_IDENTIFIER = _OID.fromParts([7], pkcs_1);

/* eslint-enable */

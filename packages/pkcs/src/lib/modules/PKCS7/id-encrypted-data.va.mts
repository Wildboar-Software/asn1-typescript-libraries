/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkcs } from "../PKCS7/id-pkcs.va.mjs";

/**
 * @summary id_encrypted_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-encrypted-data OBJECT IDENTIFIER ::= {id-pkcs 7 6}
 * ```
 *
 * @constant
 */
export const id_encrypted_data: OBJECT_IDENTIFIER = _OID.fromParts([7, 6], id_pkcs);

/* eslint-enable */

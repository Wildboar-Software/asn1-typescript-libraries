/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkcs } from "../PKCS7/id-pkcs.va.mjs";

/**
 * @summary id_digested_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-digested-data OBJECT IDENTIFIER ::= {id-pkcs 7 5}
 * ```
 *
 * @constant
 */
export const id_digested_data: OBJECT_IDENTIFIER = new _OID([7, 5], id_pkcs);

/* eslint-enable */

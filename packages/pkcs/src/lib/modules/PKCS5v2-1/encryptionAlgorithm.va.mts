/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { rsadsi } from "../PKCS5v2-1/rsadsi.va.mjs";

/**
 * @summary encryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encryptionAlgorithm OBJECT IDENTIFIER ::= {rsadsi 3}
 * ```
 *
 * @constant
 */
export const encryptionAlgorithm: OBJECT_IDENTIFIER = new _OID([3], rsadsi);

/* eslint-enable */

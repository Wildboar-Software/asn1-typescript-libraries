/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { aes } from "../PKCS5v2-1/aes.va.mjs";

/**
 * @summary aes128_CBC_PAD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes128-CBC-PAD OBJECT IDENTIFIER ::= { aes 2 }
 * ```
 *
 * @constant
 */
export const aes128_CBC_PAD: OBJECT_IDENTIFIER = new _OID([2], aes);

/* eslint-enable */

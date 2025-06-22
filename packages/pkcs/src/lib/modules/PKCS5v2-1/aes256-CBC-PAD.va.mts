/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { aes } from "../PKCS5v2-1/aes.va.mjs";

/**
 * @summary aes256_CBC_PAD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes256-CBC-PAD OBJECT IDENTIFIER ::= { aes 42 }
 * ```
 *
 * @constant
 */
export const aes256_CBC_PAD: OBJECT_IDENTIFIER = _OID.fromParts([42], aes);

/* eslint-enable */

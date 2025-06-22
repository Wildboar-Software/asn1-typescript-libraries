/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { aes } from "../PKCS5v2-1/aes.va.mjs";

/**
 * @summary aes192_CBC_PAD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aes192-CBC-PAD OBJECT IDENTIFIER ::= { aes 22 }
 * ```
 *
 * @constant
 */
export const aes192_CBC_PAD: OBJECT_IDENTIFIER = _OID.fromParts([22], aes);

/* eslint-enable */

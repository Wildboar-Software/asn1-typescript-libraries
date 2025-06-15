/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va.mjs";

/**
 * @summary rc5_CBC_PAD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rc5-CBC-PAD OBJECT IDENTIFIER ::= {encryptionAlgorithm 9}
 * ```
 *
 * @constant
 */
export const rc5_CBC_PAD: OBJECT_IDENTIFIER = new _OID(
    [9],
    encryptionAlgorithm
);

/* eslint-enable */

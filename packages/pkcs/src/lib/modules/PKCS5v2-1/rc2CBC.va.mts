/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { encryptionAlgorithm } from "../PKCS5v2-1/encryptionAlgorithm.va.mjs";

/**
 * @summary rc2CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rc2CBC OBJECT IDENTIFIER ::= {encryptionAlgorithm 2}
 * ```
 *
 * @constant
 */
export const rc2CBC: OBJECT_IDENTIFIER = _OID.fromParts([2], encryptionAlgorithm);

/* eslint-enable */

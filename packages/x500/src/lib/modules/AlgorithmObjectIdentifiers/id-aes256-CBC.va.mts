/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_aes256_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes256-CBC           ID ::= { aes 42 }
 * ```
 *
 * @constant
 */
export const id_aes256_CBC: ID = new _OID([42], aes);

/* eslint-enable */

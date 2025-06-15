/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_aes128_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes128-CBC           ID ::= { aes 2 }
 * ```
 *
 * @constant
 */
export const id_aes128_CBC: ID = new _OID([2], aes);

/* eslint-enable */

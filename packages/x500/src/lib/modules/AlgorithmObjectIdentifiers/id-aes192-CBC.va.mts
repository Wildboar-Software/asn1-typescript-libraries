/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_aes192_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes192-CBC           ID ::= { aes 22 }
 * ```
 *
 * @constant
 */
export const id_aes192_CBC: ID = new _OID([22], aes);

/* eslint-enable */

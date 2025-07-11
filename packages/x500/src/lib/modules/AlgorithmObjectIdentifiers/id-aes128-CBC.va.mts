/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const id_aes128_CBC: ID = _OID.fromParts([2], aes);

/* eslint-enable */

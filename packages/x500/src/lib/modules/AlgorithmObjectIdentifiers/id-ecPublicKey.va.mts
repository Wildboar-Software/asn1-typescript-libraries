/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey          ID ::= { ansi-x9-62 keyType(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: ID = _OID.fromParts([/* keyType */ 2, 1], ansi_x9_62);

/* eslint-enable */

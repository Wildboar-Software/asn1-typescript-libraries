/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_shake256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake256             ID ::= { hashAlgs 12 }
 * ```
 *
 * @constant
 */
export const id_shake256: ID = new _OID([12], hashAlgs);

/* eslint-enable */

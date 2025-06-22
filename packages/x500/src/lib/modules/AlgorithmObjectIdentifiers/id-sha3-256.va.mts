/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha3_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-256             ID ::= { hashAlgs 8 }
 * ```
 *
 * @constant
 */
export const id_sha3_256: ID = _OID.fromParts([8], hashAlgs);

/* eslint-enable */

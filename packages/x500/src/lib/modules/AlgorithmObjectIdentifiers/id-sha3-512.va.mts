/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha3_512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-512             ID ::= { hashAlgs 10 }
 * ```
 *
 * @constant
 */
export const id_sha3_512: ID = _OID.fromParts([10], hashAlgs);

/* eslint-enable */

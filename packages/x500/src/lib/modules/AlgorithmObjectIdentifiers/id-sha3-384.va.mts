/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha3_384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-384             ID ::= { hashAlgs 9 }
 * ```
 *
 * @constant
 */
export const id_sha3_384: ID = new _OID([9], hashAlgs);

/* eslint-enable */

/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
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
export const id_sha3_384: ID = _OID.fromParts([9], hashAlgs);

/* eslint-enable */

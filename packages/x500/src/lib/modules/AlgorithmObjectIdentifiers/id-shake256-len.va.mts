/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_shake256_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake256-len         ID ::= { hashAlgs 18 }
 * ```
 *
 * @constant
 */
export const id_shake256_len: ID = _OID.fromParts([18], hashAlgs);

/* eslint-enable */

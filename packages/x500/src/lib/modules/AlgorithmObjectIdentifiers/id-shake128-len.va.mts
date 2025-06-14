/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_shake128_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake128-len         ID ::= { hashAlgs 17 }
 * ```
 *
 * @constant
 */
export const id_shake128_len: ID = new _OID([17], hashAlgs);

/* eslint-enable */

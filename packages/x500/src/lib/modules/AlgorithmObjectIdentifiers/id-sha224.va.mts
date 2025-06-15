/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha224               ID ::= { hashAlgs 4 }
 * ```
 *
 * @constant
 */
export const id_sha224: ID = new _OID([4], hashAlgs);

/* eslint-enable */

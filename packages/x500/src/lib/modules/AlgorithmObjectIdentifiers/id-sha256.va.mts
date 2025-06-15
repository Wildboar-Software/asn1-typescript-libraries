/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha256               ID ::= { hashAlgs 1 }
 * ```
 *
 * @constant
 */
export const id_sha256: ID = new _OID([1], hashAlgs);

/* eslint-enable */

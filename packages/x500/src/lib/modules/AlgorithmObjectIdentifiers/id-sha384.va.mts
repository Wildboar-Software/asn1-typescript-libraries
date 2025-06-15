/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha384               ID ::= { hashAlgs 2 }
 * ```
 *
 * @constant
 */
export const id_sha384: ID = new _OID([2], hashAlgs);

/* eslint-enable */

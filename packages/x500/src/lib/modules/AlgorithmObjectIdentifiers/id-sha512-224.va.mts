/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_sha512_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha512-224           ID ::= { hashAlgs 5 }
 * ```
 *
 * @constant
 */
export const id_sha512_224: ID = new _OID([5], hashAlgs);

/* eslint-enable */

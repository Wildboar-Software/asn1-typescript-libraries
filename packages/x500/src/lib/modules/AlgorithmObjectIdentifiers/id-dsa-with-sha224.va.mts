/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { sigAlgs } from "../AlgorithmObjectIdentifiers/sigAlgs.va.mjs";
/**
 * @summary id_dsa_with_sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha224      ID ::= { sigAlgs 1 }
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha224: ID = new _OID([1], sigAlgs);

/* eslint-enable */

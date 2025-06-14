/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/* START_OF_SYMBOL_DEFINITION id_sha3_224 */
/**
 * @summary id_sha3_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-224             ID ::= { hashAlgs 7 }
 * ```
 *
 * @constant
 */
export const id_sha3_224: ID = new _OID([7], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_sha3_224 */

/* eslint-enable */

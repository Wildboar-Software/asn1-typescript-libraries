/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_algo } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-algo.va.mjs";
export { id_algo } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-algo.va.mjs";

/* START_OF_SYMBOL_DEFINITION id_algo_aead */
/**
 * @summary id_algo_aead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-aead OBJECT IDENTIFIER ::= {id-algo 3}
 * ```
 *
 * @constant
 */
export const id_algo_aead: OBJECT_IDENTIFIER = new _OID([3], id_algo);
/* END_OF_SYMBOL_DEFINITION id_algo_aead */

/* eslint-enable */

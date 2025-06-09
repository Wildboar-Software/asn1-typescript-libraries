/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_algo } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-algo.va.js";
export { id_algo } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-algo.va.js";

/* START_OF_SYMBOL_DEFINITION id_algo_dsa */
/**
 * @summary id_algo_dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dsa  OBJECT IDENTIFIER ::= {id-algo 6}
 * ```
 *
 * @constant
 */
export const id_algo_dsa: OBJECT_IDENTIFIER = new _OID([6], id_algo);
/* END_OF_SYMBOL_DEFINITION id_algo_dsa */

/* eslint-enable */

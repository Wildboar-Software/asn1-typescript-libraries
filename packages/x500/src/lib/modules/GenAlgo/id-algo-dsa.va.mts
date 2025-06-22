/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_algo } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-algo.va.mjs";
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
export const id_algo_dsa: OBJECT_IDENTIFIER = _OID.fromParts([6], id_algo);

/* eslint-enable */

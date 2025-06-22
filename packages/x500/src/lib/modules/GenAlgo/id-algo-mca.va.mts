/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_algo } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-algo.va.mjs";
/**
 * @summary id_algo_mca
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-mca  OBJECT IDENTIFIER ::= {id-algo 1}
 * ```
 *
 * @constant
 */
export const id_algo_mca: OBJECT_IDENTIFIER = _OID.fromParts([1], id_algo);

/* eslint-enable */

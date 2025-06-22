/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_algo_mca } from "../GenAlgo/id-algo-mca.va.mjs";
/**
 * @summary id_algo_multipleAuthenEncryptAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleAuthenEncryptAlgo   OBJECT IDENTIFIER ::= {id-algo-mca 5}
 * ```
 *
 * @constant
 */
export const id_algo_multipleAuthenEncryptAlgo: OBJECT_IDENTIFIER = _OID.fromParts(
    [5],
    id_algo_mca
);

/* eslint-enable */

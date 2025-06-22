/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_algo_mca } from "../GenAlgo/id-algo-mca.va.mjs";
/**
 * @summary id_algo_multipleSignaturesAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleSignaturesAlgo      OBJECT IDENTIFIER ::= {id-algo-mca 1}
 * ```
 *
 * @constant
 */
export const id_algo_multipleSignaturesAlgo: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_algo_mca
);

/* eslint-enable */

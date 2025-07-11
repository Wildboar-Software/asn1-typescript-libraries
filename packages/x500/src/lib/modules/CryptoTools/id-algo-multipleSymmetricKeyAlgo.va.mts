/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_algo_mca } from "../GenAlgo/id-algo-mca.va.mjs";
/**
 * @summary id_algo_multipleSymmetricKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleSymmetricKeyAlgo    OBJECT IDENTIFIER ::= {id-algo-mca 2}
 * ```
 *
 * @constant
 */
export const id_algo_multipleSymmetricKeyAlgo: OBJECT_IDENTIFIER = _OID.fromParts(
    [2],
    id_algo_mca
);

/* eslint-enable */

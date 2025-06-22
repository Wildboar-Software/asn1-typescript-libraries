/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_algo_mca } from "../GenAlgo/id-algo-mca.va.mjs";
/**
 * @summary id_algo_multiplePublicKeyAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multiplePublicKeyAlgo       OBJECT IDENTIFIER ::= {id-algo-mca 3}
 * ```
 *
 * @constant
 */
export const id_algo_multiplePublicKeyAlgo: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    id_algo_mca
);

/* eslint-enable */

/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_dsa_with_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha1        ID ::= {iso(1) member-body(2) us(840) x9-57(10040) x9algorithm(4)
 *                                 dsa-with-sha1(3)}
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha1: ID = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x9-57 */ 10040,
    /* x9algorithm */ 4,
    /* dsa-with-sha1 */ 3,
]);

/* eslint-enable */

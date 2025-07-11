/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary hashAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlg                 ID ::= {  iso(1) identified-organization(3) dod(6) internet(1)
 *                                   private(4) enterprise(1) kudelski(1722)
 *                                   cryptography(12) 2 }
 * ```
 *
 * @constant
 */
export const hashAlg: ID = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
    /* kudelski */ 1722,
    /* cryptography */ 12,
    2,
]);

/* eslint-enable */

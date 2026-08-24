/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary spkm_2
 * @description
 *
 * SPKM-2 mechanism OID. Replay during context establishment uses
 * timestamps (`timestamp` mandatory). Unilateral: `SPKM-REQ` only
 * (authenticates initiator to target); no K-ALG/pvno negotiation;
 * `key-src-bind` required if the K-ALG does not bind source to key.
 * Mutual: `SPKM-REQ` + `SPKM-REP-TI`. DH cannot be used unilaterally.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * spkm-2 OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    mechanisms(5) spkm(1) spkm-2(2)}
 * ```
 *
 * @constant
 */
export const spkm_2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* spkm */ 1,
    /* spkm-2 */ 2,
]);

/* eslint-enable */

/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary spkm_1
 * @description
 *
 * SPKM-1 mechanism OID. Replay during context establishment uses random
 * numbers (no secure timestamps). Unilateral: `SPKM-REQ` + `SPKM-REP-TI`
 * (authenticates target to initiator). Mutual: also `SPKM-REP-IT`.
 * Two-pass K-ALGs (e.g. DH) are allowed only for SPKM-1 mutual.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * spkm-1 OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *    mechanisms(5) spkm(1) spkm-1(1)}
 * ```
 *
 * @constant
 */
export const spkm_1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* spkm */ 1,
    /* spkm-1 */ 1,
]);

/* eslint-enable */

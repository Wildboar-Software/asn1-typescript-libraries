/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_pkix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix  OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1)
 *                     security(5) mechanisms(5) pkix(7) }
 * ```
 *
 * @constant
 */
export const id_pkix: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
]);

/* eslint-enable */

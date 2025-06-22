/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary id_dsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) x9-57(10040) x9algorithm(4) 1 }
 * ```
 *
 * @constant
 */
export const id_dsa: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x9-57 */ 10040,
    /* x9algorithm */ 4,
    1,
]);

/* eslint-enable */

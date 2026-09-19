/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_pkinit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pkinit OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1)
 *     security(5) kerberosv5(2) pkinit (3) }
 * ```
 * 
 * @constant
 */
export
const id_pkinit: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* kerberosv5 */ 2,
    /* pkinit */ 3,
]);

/* eslint-enable */

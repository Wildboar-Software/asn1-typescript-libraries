/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_krb5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-krb5         OBJECT IDENTIFIER ::= {
 *         iso(1) identified-organization(3) dod(6) internet(1)
 *         security(5) kerberosV5(2)
 * }
 * ```
 * 
 * @constant
 */
export
const id_krb5: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* kerberosV5 */ 2,
]);

/* eslint-enable */

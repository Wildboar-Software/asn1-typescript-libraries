/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary ldapSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ldapSyntax OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     identified-organization(3)
 *     dod(6)
 *     internet(1)
 *     private(4)
 *     enterprise(1)
 *     1466
 *     115
 *     121
 *     ldap-syntax(1)
 * }
 * ```
 * 
 * @constant
 */
export
const ldapSyntax: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
    1466,
    115,
    121,
    /* ldap-syntax */ 1,
]);

/* eslint-enable */

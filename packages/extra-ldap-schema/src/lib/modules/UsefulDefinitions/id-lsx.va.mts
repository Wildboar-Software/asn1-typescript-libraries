/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";

/**
 * @summary id_lsx
 * @description
 *
 * Arc imported by the LDAP-derived modules from `UsefulDefinitions`.
 * Defined locally so this package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) private(4) enterprise(1) wahl(1466) 115 121 1}
 * ```
 *
 * @constant
 */
export const id_lsx: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
    /* wahl */ 1466,
    115,
    121,
    1,
]);

/* eslint-enable */

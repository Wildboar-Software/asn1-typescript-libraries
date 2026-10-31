/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";

/**
 * @summary id_lmr
 * @description
 *
 * Arc imported by the LDAP-derived modules from `UsefulDefinitions`.
 * Defined locally so this package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lmr OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6) internet(1) private(4) enterprise(1) wahl(1466) 109 114}
 * ```
 *
 * @constant
 */
export const id_lmr: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
    /* wahl */ 1466,
    109,
    114,
]);

/* eslint-enable */

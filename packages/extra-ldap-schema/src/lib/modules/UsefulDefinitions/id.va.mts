/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";

/**
 * @summary id
 * @description
 *
 * Arc imported by the LDAP-derived modules from `UsefulDefinitions`.
 * Defined locally so this package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id OBJECT IDENTIFIER ::= {joint-iso-itu-t registration-procedures(17) module(1) directory-defs(2)}
 * ```
 *
 * @constant
 */
export const id: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* registration-procedures */ 17,
    /* module */ 1,
    /* directory-defs */ 2,
]);

/* eslint-enable */

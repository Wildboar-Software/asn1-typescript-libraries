/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";

/**
 * @summary id_at
 * @description
 *
 * Arc imported by the LDAP-derived modules from `UsefulDefinitions`.
 * Defined locally so this package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at OBJECT IDENTIFIER ::= {joint-iso-itu-t ds(5) attributeType(4)}
 * ```
 *
 * @constant
 */
export const id_at: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* ds */ 5,
    /* attributeType */ 4,
]);

/* eslint-enable */

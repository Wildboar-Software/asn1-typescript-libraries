/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";

/**
 * @summary id_coat
 * @description
 *
 * Arc imported by the LDAP-derived modules from `UsefulDefinitions`.
 * Defined locally so this package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-coat OBJECT IDENTIFIER ::= {itu-t(0) data(9) pss(2342) ucl(19200300) pilot(100) pilotAttributeType(1)}
 * ```
 *
 * @constant
 */
export const id_coat: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
    /* pilotAttributeType */ 1,
]);

/* eslint-enable */

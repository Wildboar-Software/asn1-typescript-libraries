/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_ldx
 * @description
 *
 * Arc imported by the X.500 modules in this package. Defined locally so this
 * package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx ID ::= {iso(1) identified-organization(3) dod(6) internet(1) directory(1) x509(15)}
 * ```
 *
 * @constant
 */
export
const id_ldx: OBJECT_IDENTIFIER = _OID.fromParts([1, 3, 6, 1, 1, 15]);

/* eslint-enable */

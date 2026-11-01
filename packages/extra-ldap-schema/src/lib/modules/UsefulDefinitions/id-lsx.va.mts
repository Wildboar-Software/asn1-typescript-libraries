/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_lsx
 * @description
 *
 * Arc imported by the X.500 modules in this package. Defined locally so this
 * package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lsx ID ::= {iso(1) identified-organization(3) dod(6) internet(1) private(4) enterprise(1) wahl(1466) ldap-syntax(115) 121 1}
 * ```
 *
 * @constant
 */
export
const id_lsx: OBJECT_IDENTIFIER = _OID.fromParts([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1]);

/* eslint-enable */

/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_oc
 * @description
 *
 * Arc imported by the X.500 modules in this package. Defined locally so this
 * package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc ID ::= {joint-iso-itu-t ds(5) objectClass(6)}
 * ```
 *
 * @constant
 */
export
const id_oc: OBJECT_IDENTIFIER = _OID.fromParts([2, 5, 6]);

/* eslint-enable */

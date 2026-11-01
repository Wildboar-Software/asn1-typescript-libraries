/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_ar
 * @description
 *
 * Arc imported by the X.500 modules in this package. Defined locally so this
 * package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ar ID ::= {joint-iso-itu-t ds(5) administrativeRoles(23)}
 * ```
 *
 * @constant
 */
export
const id_ar: OBJECT_IDENTIFIER = _OID.fromParts([2, 5, 23]);

/* eslint-enable */

/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_at
 * @description
 *
 * Arc imported by the X.500 modules in this package. Defined locally so this
 * package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at ID ::= {joint-iso-itu-t ds(5) attributeType(4)}
 * ```
 *
 * @constant
 */
export
const id_at: OBJECT_IDENTIFIER = _OID.fromParts([2, 5, 4]);

/* eslint-enable */

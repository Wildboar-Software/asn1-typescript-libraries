/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_nf
 * @description
 *
 * Arc imported by the X.500 modules in this package. Defined locally so this
 * package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nf ID ::= {joint-iso-itu-t ds(5) nameForm(15)}
 * ```
 *
 * @constant
 */
export
const id_nf: OBJECT_IDENTIFIER = _OID.fromParts([2, 5, 15]);

/* eslint-enable */

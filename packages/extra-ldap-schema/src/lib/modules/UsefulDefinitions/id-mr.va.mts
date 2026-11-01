/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";

/**
 * @summary id_mr
 * @description
 *
 * Arc imported by the X.500 modules in this package. Defined locally so this
 * package does not depend on another ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr ID ::= {joint-iso-itu-t ds(5) matchingRule(13)}
 * ```
 *
 * @constant
 */
export
const id_mr: OBJECT_IDENTIFIER = _OID.fromParts([2, 5, 13]);

/* eslint-enable */

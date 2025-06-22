/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";


/**
 * @summary id_scrypt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-scrypt OBJECT IDENTIFIER ::= {iso(1) identified-organization(3) dod(6)
 *     internet(1) private(4) enterprise(1) 11591 4 11}
 * ```
 *
 * @constant
 */
export
const id_scrypt: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
    11591,
    4,
    11,
]);

/* eslint-enable */

/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";


/**
 * @summary id_scrypt
 * @description
 *
 * Object identifier for the scrypt password-based key derivation
 * function (RFC 7914 §7). May be used in an `AlgorithmIdentifier`
 * where `id-PBKDF2` is used; the associated parameters type is
 * `Scrypt-params` (corresponding to `PBKDF2-params`).
 *
 * Value `{1 3 6 1 4 1 11591 4 11}` (RFC 7914 §7).
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

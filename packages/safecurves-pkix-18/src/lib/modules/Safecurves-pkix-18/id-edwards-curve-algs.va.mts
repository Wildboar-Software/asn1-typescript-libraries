/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";




/**
 * @summary id_edwards_curve_algs
 * @description
 *
 * Arc for Edwards-curve / Curve25519 family algorithm identifiers
 * ([RFC 8410 §9](https://datatracker.ietf.org/doc/html/rfc8410#section-9)).
 * Parent of `id-X25519`, `id-X448`, `id-Ed25519`, and `id-Ed448`.
 * Value `{1 3 101}`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-edwards-curve-algs OBJECT IDENTIFIER ::= { 1 3 101 }
 * ```
 * 
 * @constant
 */
export
const id_edwards_curve_algs: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
    3,
    101,
]);

/* eslint-enable */

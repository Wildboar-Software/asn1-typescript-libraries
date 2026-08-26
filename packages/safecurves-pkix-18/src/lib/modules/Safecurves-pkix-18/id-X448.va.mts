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
import { id_edwards_curve_algs } from "../Safecurves-pkix-18/id-edwards-curve-algs.va.mjs";

/**
 * @summary id_X448
 * @description
 *
 * Algorithm identifier OID for X448 Diffie-Hellman
 * ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3)); ASN.1 ([RFC 8410 §9](https://datatracker.ietf.org/doc/html/rfc8410#section-9)).
 * `AlgorithmIdentifier` parameters MUST be absent ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3)).
 * Human-readable name: "X448"
 * ([RFC 8410 §8](https://datatracker.ietf.org/doc/html/rfc8410#section-8)). Value `{ id-edwards-curve-algs 111 }` (= `{1 3 101 111}`).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-X448          OBJECT IDENTIFIER ::= { id-edwards-curve-algs 111 }
 * ```
 * 
 * @constant
 */
export
const id_X448: OBJECT_IDENTIFIER = _OID.fromParts([
    111,
], id_edwards_curve_algs);

/* eslint-enable */

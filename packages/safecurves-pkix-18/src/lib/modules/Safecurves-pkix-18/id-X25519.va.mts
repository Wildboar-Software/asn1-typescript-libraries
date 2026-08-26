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
 * @summary id_X25519
 * @description
 *
 * Algorithm identifier OID for X25519 Diffie-Hellman
 * ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3);
 * ASN.1 [RFC 8410 §9](https://datatracker.ietf.org/doc/html/rfc8410#section-9)).
 * Used for public and private keys; for all four curve/algorithm OIDs in
 * this document, `AlgorithmIdentifier` parameters MUST be absent
 * ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3)).
 * Human-readable name: "X25519"
 * ([RFC 8410 §8](https://datatracker.ietf.org/doc/html/rfc8410#section-8)).
 * Value `{ id-edwards-curve-algs 110 }` (= `{1 3 101 110}`).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-X25519        OBJECT IDENTIFIER ::= { id-edwards-curve-algs 110 }
 * ```
 * 
 * @constant
 */
export
const id_X25519: OBJECT_IDENTIFIER = _OID.fromParts([
    110,
], id_edwards_curve_algs);

/* eslint-enable */

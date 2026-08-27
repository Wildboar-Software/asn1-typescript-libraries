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
 * @summary id_Ed25519
 * @description
 *
 * Algorithm identifier OID for Ed25519 (EdDSA pure mode)
 * ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3)); ASN.1 ([RFC 8410 §9](https://datatracker.ietf.org/doc/html/rfc8410#section-9)).
 * Used for public keys, private keys, and signatures; parameters MUST
 * be absent in all of those places ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3)), ([RFC 8410 §6](https://datatracker.ietf.org/doc/html/rfc8410#section-6)).
 * Human-readable name: "Ed25519"
 * ([RFC 8410 §8](https://datatracker.ietf.org/doc/html/rfc8410#section-8)). Value `{ id-edwards-curve-algs 112 }` (= `{1 3 101 112}`).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Ed25519       OBJECT IDENTIFIER ::= { id-edwards-curve-algs 112 }
 * ```
 * 
 * @constant
 */
export
const id_Ed25519: OBJECT_IDENTIFIER = _OID.fromParts([
    112,
], id_edwards_curve_algs);

/* eslint-enable */

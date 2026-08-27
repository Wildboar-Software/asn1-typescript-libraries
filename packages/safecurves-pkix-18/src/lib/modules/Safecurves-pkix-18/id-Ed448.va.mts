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
 * @summary id_Ed448
 * @description
 *
 * Algorithm identifier OID for Ed448 (EdDSA pure mode)
 * ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3)); ASN.1 ([RFC 8410 §9](https://datatracker.ietf.org/doc/html/rfc8410#section-9)).
 * `AlgorithmIdentifier` parameters MUST be absent ([RFC 8410 §3](https://datatracker.ietf.org/doc/html/rfc8410#section-3)), ([RFC 8410 §6](https://datatracker.ietf.org/doc/html/rfc8410#section-6)).
 * Human-readable name: "Ed448"
 * ([RFC 8410 §8](https://datatracker.ietf.org/doc/html/rfc8410#section-8)). Value `{ id-edwards-curve-algs 113 }` (= `{1 3 101 113}`).
 * The published `Safecurves-pkix-18` ASN.1 module defines this OID; it does
 * not include `pk-Ed448` or `sa-Ed448` information objects
 * ([RFC 8410 §9](https://datatracker.ietf.org/doc/html/rfc8410#section-9)).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-Ed448         OBJECT IDENTIFIER ::= { id-edwards-curve-algs 113 }
 * ```
 * 
 * @constant
 */
export
const id_Ed448: OBJECT_IDENTIFIER = _OID.fromParts([
    113,
], id_edwards_curve_algs);

/* eslint-enable */

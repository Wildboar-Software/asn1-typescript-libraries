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
 * @summary id_tai
 * @description
 *
 * Root OID for ITU-T X.1089 TAI:
 * `{itu-t(0) recommendation(0) x(24) tai(1089)}`. ITU-T Rec.
 * X.1089 (05/2008)
 * [Annex A](https://www.itu.int/rec/T-REC-X.1089-200805-I).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tai                                      OBJECT IDENTIFIER ::= {itu-t(0) recommendation(0) x(24) tai(1089)}
 * ```
 * 
 * @constant
 */
export
const id_tai: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* recommendation */ 0,
    /* x */ 24,
    /* tai */ 1089,
]);

/* eslint-enable */

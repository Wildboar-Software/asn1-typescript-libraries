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
 * @summary aes
 * @description
 *
 * NIST AES algorithm arc under `nistAlgorithms`
 * ([RFC 5911 §4](https://datatracker.ietf.org/doc/html/rfc5911#section-4)).
 * Parent OID for AES CBC and AES Key Wrap algorithm identifiers from
 * ([RFC 3565](https://datatracker.ietf.org/doc/html/rfc3565)) (2009 ASN.1 rewrite in RFC 5911).
 * Value `{joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101)
 * csor(3) nistAlgorithms(4) 1}`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aes OBJECT IDENTIFIER ::= { joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101)
 *     csor(3) nistAlgorithms(4)  1 }
 * ```
 * 
 * @constant
 */
export
const aes: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistAlgorithms */ 4,
    1,
]);

/* eslint-enable */

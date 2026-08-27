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
 * @summary id_sha512
 * @description
 *
 * Object identifier for the SHA-512 one-way hash function
 * ([RFC 4055 §2.1](https://datatracker.ietf.org/doc/html/rfc4055#section-2.1));
 * 2009 ASN.1 module `PKIX1-PSS-OAEP-Algorithms-2009` ([RFC 5912 §8](https://datatracker.ietf.org/doc/html/rfc5912#section-8)).
 * Value `{joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101)
 * csor(3) nistAlgorithms(4) hashalgs(2) 3}`.
 *
 * When used in an `AlgorithmIdentifier`, parameters are preferably
 * absent (`NULL` also historically used); implementations MUST accept
 * both NULL and absent as equivalent ([RFC 4055 §2.1](https://datatracker.ietf.org/doc/html/rfc4055#section-2.1)).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sha512  OBJECT IDENTIFIER ::= { joint-iso-itu-t(2)
 *                     country(16) us(840) organization(1) gov(101)
 *                     csor(3) nistalgorithm(4) hashalgs(2) 3 }
 * ```
 * 
 * @constant
 */
export
const id_sha512: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    3,
]);

/* eslint-enable */

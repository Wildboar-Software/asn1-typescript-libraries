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

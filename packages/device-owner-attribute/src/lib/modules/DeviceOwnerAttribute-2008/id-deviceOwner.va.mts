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
 * @summary id_deviceOwner
 * @description
 *
 * Object identifier for the Device Owner attribute
 * ([RFC 5916 §2](https://datatracker.ietf.org/doc/html/rfc5916#section-2)).
 * Identifies `at-deviceOwner` when the attribute appears in public key
 * or attribute certificates.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-deviceOwner OBJECT IDENTIFIER ::= {
 *     joint-iso-ccitt(2) country(16) us(840) organization(1) gov(101)
 *     dod(2) infosec(1) attributes(5) 69
 * }
 * ```
 *
 * @constant
 */
export
const id_deviceOwner: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-ccitt */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* dod */ 2,
    /* infosec */ 1,
    /* attributes */ 5,
    69,
]);

/* eslint-enable */

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
} from 'asn1-ts';


/**
 * @summary id_signedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signedData OBJECT IDENTIFIER ::= {iso(1) member-body(2)
 * us(840)rsadsi(113549) pkcs(1) pkcs7(7) 2}
 * ```
 *
 * @constant
 */
export const id_signedData: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
    2,
]);

/* eslint-enable */

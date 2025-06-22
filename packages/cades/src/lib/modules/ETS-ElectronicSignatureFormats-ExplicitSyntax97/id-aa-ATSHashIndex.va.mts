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
} from "asn1-ts";



/**
 * @summary id_aa_ATSHashIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aa-ATSHashIndex OBJECT IDENTIFIER ::= {
 *     itu-t(0)
 *     identified-organization(4)
 *     etsi(0)
 *     electronic-signature-standard(1733)
 *     attributes(2)
 *     5 }
 * ```
 * 
 * @constant
 */
export
const id_aa_ATSHashIndex: OBJECT_IDENTIFIER = _OID.fromParts([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* electronic-signature-standard */ 1733,
    /* attributes */ 2,
    5,
]);

/* eslint-enable */

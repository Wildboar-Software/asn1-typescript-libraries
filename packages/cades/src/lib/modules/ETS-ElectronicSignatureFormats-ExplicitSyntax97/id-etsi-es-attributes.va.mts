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



/* START_OF_SYMBOL_DEFINITION id_etsi_es_attributes */
/**
 * @summary id_etsi_es_attributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-etsi-es-attributes OBJECT IDENTIFIER ::= {
 *     itu-t(0)
 *     identified-organization(4)
 *     etsi(0)
 *     electronic-signature-standard (1733)
 *     attributes(2) }
 * ```
 * 
 * @constant
 */
export
const id_etsi_es_attributes: OBJECT_IDENTIFIER = new _OID([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* electronic-signature-standard */ 1733,
    /* attributes */ 2,
]);
/* END_OF_SYMBOL_DEFINITION id_etsi_es_attributes */

/* eslint-enable */

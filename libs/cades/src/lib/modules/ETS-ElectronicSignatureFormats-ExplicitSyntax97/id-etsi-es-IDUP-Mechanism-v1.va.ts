/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION id_etsi_es_IDUP_Mechanism_v1 */
/**
 * @summary id_etsi_es_IDUP_Mechanism_v1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-etsi-es-IDUP-Mechanism-v1 OBJECT IDENTIFIER ::= {
 *     itu-t(0)
 *     identified-organization(4)
 *     etsi(0)
 *     electronic-signature-standard (1733)
 *     part1 (1)
 *     idupMechanism (4)
 *     etsiESv1(1) }
 * ```
 * 
 * @constant
 */
export
const id_etsi_es_IDUP_Mechanism_v1: OBJECT_IDENTIFIER = new _OID([
    /* itu-t */ 0,
    /* identified-organization */ 4,
    /* etsi */ 0,
    /* electronic-signature-standard */ 1733,
    /* part1 */ 1,
    /* idupMechanism */ 4,
    /* etsiESv1 */ 1,
]);
/* END_OF_SYMBOL_DEFINITION id_etsi_es_IDUP_Mechanism_v1 */

/* eslint-enable */

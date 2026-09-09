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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtensionField_criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField-criticality ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ExtensionField_criticality {
    ignore = 0,
    abort = 1,
}

/**
 * @summary ExtensionField_criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField-criticality ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ExtensionField_criticality = _enum_for_ExtensionField_criticality;

/**
 * @summary ExtensionField_criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField-criticality ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ExtensionField_criticality = _enum_for_ExtensionField_criticality;

/**
 * @summary ExtensionField_criticality_ignore
 * @constant
 * @type {number}
 */
export
const ExtensionField_criticality_ignore: ExtensionField_criticality = ExtensionField_criticality.ignore; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignore
 * @constant
 * @type {number}
 */
export
const ignore: ExtensionField_criticality = ExtensionField_criticality.ignore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ExtensionField_criticality_abort
 * @constant
 * @type {number}
 */
export
const ExtensionField_criticality_abort: ExtensionField_criticality = ExtensionField_criticality.abort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abort
 * @constant
 * @type {number}
 */
export
const abort: ExtensionField_criticality = ExtensionField_criticality.abort; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ExtensionField_criticality = $._decodeEnumerated;
export const _encode_ExtensionField_criticality = $._encodeEnumerated;


/* eslint-enable */

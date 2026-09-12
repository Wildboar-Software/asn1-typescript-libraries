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
 * @summary Journal_Entry_instance_informationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Journal-Entry-instance-informationType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Journal_Entry_instance_informationType {
    annotation = 0,
    event_data = 1,
    data = 2,
}

/**
 * @summary Journal_Entry_instance_informationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Journal-Entry-instance-informationType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Journal_Entry_instance_informationType = _enum_for_Journal_Entry_instance_informationType;

/**
 * @summary Journal_Entry_instance_informationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Journal-Entry-instance-informationType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const Journal_Entry_instance_informationType = _enum_for_Journal_Entry_instance_informationType;

/**
 * @summary Journal_Entry_instance_informationType_annotation
 * @constant
 * @type {number}
 */
export
const Journal_Entry_instance_informationType_annotation: Journal_Entry_instance_informationType = Journal_Entry_instance_informationType.annotation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary annotation
 * @constant
 * @type {number}
 */
export
const annotation: Journal_Entry_instance_informationType = Journal_Entry_instance_informationType.annotation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Journal_Entry_instance_informationType_event_data
 * @constant
 * @type {number}
 */
export
const Journal_Entry_instance_informationType_event_data: Journal_Entry_instance_informationType = Journal_Entry_instance_informationType.event_data; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary event_data
 * @constant
 * @type {number}
 */
export
const event_data: Journal_Entry_instance_informationType = Journal_Entry_instance_informationType.event_data; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Journal_Entry_instance_informationType_data
 * @constant
 * @type {number}
 */
export
const Journal_Entry_instance_informationType_data: Journal_Entry_instance_informationType = Journal_Entry_instance_informationType.data; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary data
 * @constant
 * @type {number}
 */
export
const data: Journal_Entry_instance_informationType = Journal_Entry_instance_informationType.data; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Journal_Entry_instance_informationType = $._decodeEnumerated;
export const _encode_Journal_Entry_instance_informationType = $._encodeEnumerated;


/* eslint-enable */

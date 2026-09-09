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
 * @summary taskRefused_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_taskRefused_ParameterType {
    generic = 0,
    unobtainable = 1,
    congestion = 2,
}

/**
 * @summary taskRefused_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type taskRefused_ParameterType = _enum_for_taskRefused_ParameterType;

/**
 * @summary taskRefused_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * taskRefused-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const taskRefused_ParameterType = _enum_for_taskRefused_ParameterType;

/**
 * @summary taskRefused_ParameterType_generic
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @constant
 * @type {number}
 */
export
const generic: taskRefused_ParameterType = taskRefused_ParameterType.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_unobtainable
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unobtainable
 * @constant
 * @type {number}
 */
export
const unobtainable: taskRefused_ParameterType = taskRefused_ParameterType.unobtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary taskRefused_ParameterType_congestion
 * @constant
 * @type {number}
 */
export
const taskRefused_ParameterType_congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: taskRefused_ParameterType = taskRefused_ParameterType.congestion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_taskRefused_ParameterType = $._decodeEnumerated;
export const _encode_taskRefused_ParameterType = $._encodeEnumerated;


/* eslint-enable */

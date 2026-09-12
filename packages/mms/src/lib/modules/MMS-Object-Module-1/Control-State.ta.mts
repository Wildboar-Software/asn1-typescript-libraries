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
 * @summary Control_State
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Control-State  ::=  INTEGER {
 *     normal           (0),
 *     controlling      (1),
 *     controlled       (2)
 * } (0..2)
 * ```
 */
export
type Control_State = INTEGER;

/**
 * @summary Control_State_normal
 * @constant
 * @type {number}
 */
export
const Control_State_normal: Control_State = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_normal
 * @constant
 * @type {number}
 */
export
const normal: Control_State = Control_State_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlling
 * @constant
 * @type {number}
 */
export
const Control_State_controlling: Control_State = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlling
 * @constant
 * @type {number}
 */
export
const controlling: Control_State = Control_State_controlling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlled
 * @constant
 * @type {number}
 */
export
const Control_State_controlled: Control_State = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Control_State_controlled
 * @constant
 * @type {number}
 */
export
const controlled: Control_State = Control_State_controlled; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Control_State = $._decodeInteger;
export const _encode_Control_State = $._encodeInteger;


/* eslint-enable */

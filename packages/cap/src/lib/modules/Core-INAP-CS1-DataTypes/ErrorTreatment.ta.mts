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
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment      ::=  ENUMERATED {
 *      stdErrorAndInfo(0),
 *      help(1),
 *      repeatPrompt(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ErrorTreatment {
    stdErrorAndInfo = 0,
    help = 1,
    repeatPrompt = 2,
}

/**
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment      ::=  ENUMERATED {
 *      stdErrorAndInfo(0),
 *      help(1),
 *      repeatPrompt(2)}
 * ```
 * 
 * @enum {number}
 */
export
type ErrorTreatment = _enum_for_ErrorTreatment;

/**
 * @summary ErrorTreatment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorTreatment      ::=  ENUMERATED {
 *      stdErrorAndInfo(0),
 *      help(1),
 *      repeatPrompt(2)}
 * ```
 * 
 * @enum {number}
 */
export
const ErrorTreatment = _enum_for_ErrorTreatment;

/**
 * @summary ErrorTreatment_stdErrorAndInfo
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_stdErrorAndInfo: ErrorTreatment = ErrorTreatment.stdErrorAndInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary stdErrorAndInfo
 * @constant
 * @type {number}
 */
export
const stdErrorAndInfo: ErrorTreatment = ErrorTreatment.stdErrorAndInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_help
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_help: ErrorTreatment = ErrorTreatment.help; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary help
 * @constant
 * @type {number}
 */
export
const help: ErrorTreatment = ErrorTreatment.help; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ErrorTreatment_repeatPrompt
 * @constant
 * @type {number}
 */
export
const ErrorTreatment_repeatPrompt: ErrorTreatment = ErrorTreatment.repeatPrompt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeatPrompt
 * @constant
 * @type {number}
 */
export
const repeatPrompt: ErrorTreatment = ErrorTreatment.repeatPrompt; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ErrorTreatment = $._decodeEnumerated;
export const _encode_ErrorTreatment = $._encodeEnumerated;


/* eslint-enable */

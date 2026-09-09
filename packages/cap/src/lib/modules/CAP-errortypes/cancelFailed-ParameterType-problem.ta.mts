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
 * @summary cancelFailed_ParameterType_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_cancelFailed_ParameterType_problem {
    unknownOperation = 0,
    tooLate = 1,
    operationNotCancellable = 2,
}

/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type cancelFailed_ParameterType_problem = _enum_for_cancelFailed_ParameterType_problem;

/**
 * @summary cancelFailed_ParameterType_problem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelFailed-ParameterType-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const cancelFailed_ParameterType_problem = _enum_for_cancelFailed_ParameterType_problem;

/**
 * @summary cancelFailed_ParameterType_problem_unknownOperation
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_unknownOperation: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.unknownOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOperation
 * @constant
 * @type {number}
 */
export
const unknownOperation: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.unknownOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_tooLate
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_tooLate: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.tooLate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tooLate
 * @constant
 * @type {number}
 */
export
const tooLate: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.tooLate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelFailed_ParameterType_problem_operationNotCancellable
 * @constant
 * @type {number}
 */
export
const cancelFailed_ParameterType_problem_operationNotCancellable: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.operationNotCancellable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationNotCancellable
 * @constant
 * @type {number}
 */
export
const operationNotCancellable: cancelFailed_ParameterType_problem = cancelFailed_ParameterType_problem.operationNotCancellable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_cancelFailed_ParameterType_problem = $._decodeEnumerated;
export const _encode_cancelFailed_ParameterType_problem = $._encodeEnumerated;


/* eslint-enable */

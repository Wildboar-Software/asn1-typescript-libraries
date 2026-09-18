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
 * @summary ErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorCode  ::=  INTEGER {
 *     collisionDetected          (0),
 *     vteParamNotSupported       (1),
 *     vteParamCombNotSupported   (2),
 *     vteIncomplete              (3),
 *     vteProfileNotSupported     (4),
 *     vtModeNotSupported         (5),
 *     lengthExceeded             (6)
 * }
 * ```
 */
export
type ErrorCode = INTEGER;

/**
 * @summary ErrorCode_collisionDetected
 * @constant
 * @type {number}
 */
export
const ErrorCode_collisionDetected: ErrorCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_collisionDetected
 * @constant
 * @type {number}
 */
export
const collisionDetected: ErrorCode = ErrorCode_collisionDetected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamNotSupported
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteParamNotSupported: ErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamNotSupported
 * @constant
 * @type {number}
 */
export
const vteParamNotSupported: ErrorCode = ErrorCode_vteParamNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamCombNotSupported
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteParamCombNotSupported: ErrorCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteParamCombNotSupported
 * @constant
 * @type {number}
 */
export
const vteParamCombNotSupported: ErrorCode = ErrorCode_vteParamCombNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteIncomplete
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteIncomplete: ErrorCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteIncomplete
 * @constant
 * @type {number}
 */
export
const vteIncomplete: ErrorCode = ErrorCode_vteIncomplete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteProfileNotSupported
 * @constant
 * @type {number}
 */
export
const ErrorCode_vteProfileNotSupported: ErrorCode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vteProfileNotSupported
 * @constant
 * @type {number}
 */
export
const vteProfileNotSupported: ErrorCode = ErrorCode_vteProfileNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vtModeNotSupported
 * @constant
 * @type {number}
 */
export
const ErrorCode_vtModeNotSupported: ErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_vtModeNotSupported
 * @constant
 * @type {number}
 */
export
const vtModeNotSupported: ErrorCode = ErrorCode_vtModeNotSupported; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_lengthExceeded
 * @constant
 * @type {number}
 */
export
const ErrorCode_lengthExceeded: ErrorCode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorCode_lengthExceeded
 * @constant
 * @type {number}
 */
export
const lengthExceeded: ErrorCode = ErrorCode_lengthExceeded; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ErrorCode = $._decodeInteger;
export const _encode_ErrorCode = $._encodeInteger;


/* eslint-enable */

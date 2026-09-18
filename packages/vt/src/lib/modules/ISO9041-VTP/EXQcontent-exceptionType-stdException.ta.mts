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
 * @summary EXQcontent_exceptionType_stdException
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXQcontent-exceptionType-stdException ::= INTEGER {
 *     rioFull (0),
 *     tooManyFields (1),
 *     tooManyFieldElements (2),
 *     tooManyFERs (3),
 *     tooManyFEIs (4)
 * }
 * ```
 */
export
type EXQcontent_exceptionType_stdException = INTEGER;

/**
 * @summary EXQcontent_exceptionType_stdException_rioFull
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_rioFull: EXQcontent_exceptionType_stdException = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_rioFull
 * @constant
 * @type {number}
 */
export
const rioFull: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_rioFull; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFields
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFields: EXQcontent_exceptionType_stdException = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFields
 * @constant
 * @type {number}
 */
export
const tooManyFields: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFields; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFieldElements
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFieldElements: EXQcontent_exceptionType_stdException = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFieldElements
 * @constant
 * @type {number}
 */
export
const tooManyFieldElements: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFieldElements; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFERs
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFERs: EXQcontent_exceptionType_stdException = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFERs
 * @constant
 * @type {number}
 */
export
const tooManyFERs: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFERs; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFEIs
 * @constant
 * @type {number}
 */
export
const EXQcontent_exceptionType_stdException_tooManyFEIs: EXQcontent_exceptionType_stdException = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EXQcontent_exceptionType_stdException_tooManyFEIs
 * @constant
 * @type {number}
 */
export
const tooManyFEIs: EXQcontent_exceptionType_stdException = EXQcontent_exceptionType_stdException_tooManyFEIs; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EXQcontent_exceptionType_stdException = $._decodeInteger;
export const _encode_EXQcontent_exceptionType_stdException = $._encodeInteger;


/* eslint-enable */

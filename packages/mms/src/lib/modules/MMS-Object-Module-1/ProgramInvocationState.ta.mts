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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProgramInvocationState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProgramInvocationState  ::=  INTEGER {
 *     non-existent            (0),
 *     unrunnable              (1),
 *     idle                    (2),
 *     running                 (3),
 *     stopped                 (4),
 *     starting                (5),
 *     stopping                (6),
 *     resuming                (7),
 *     resetting               (8)
 * } (0..8)
 * ```
 */
export
type ProgramInvocationState = INTEGER;

/**
 * @summary ProgramInvocationState_non_existent
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_non_existent: ProgramInvocationState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_non_existent
 * @constant
 * @type {number}
 */
export
const non_existent: ProgramInvocationState = ProgramInvocationState_non_existent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_unrunnable
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_unrunnable: ProgramInvocationState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_unrunnable
 * @constant
 * @type {number}
 */
export
const unrunnable: ProgramInvocationState = ProgramInvocationState_unrunnable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_idle
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_idle: ProgramInvocationState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_idle
 * @constant
 * @type {number}
 */
export
const idle: ProgramInvocationState = ProgramInvocationState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_running
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_running: ProgramInvocationState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_running
 * @constant
 * @type {number}
 */
export
const running: ProgramInvocationState = ProgramInvocationState_running; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopped
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_stopped: ProgramInvocationState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopped
 * @constant
 * @type {number}
 */
export
const stopped: ProgramInvocationState = ProgramInvocationState_stopped; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_starting
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_starting: ProgramInvocationState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_starting
 * @constant
 * @type {number}
 */
export
const starting: ProgramInvocationState = ProgramInvocationState_starting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopping
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_stopping: ProgramInvocationState = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_stopping
 * @constant
 * @type {number}
 */
export
const stopping: ProgramInvocationState = ProgramInvocationState_stopping; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resuming
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_resuming: ProgramInvocationState = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resuming
 * @constant
 * @type {number}
 */
export
const resuming: ProgramInvocationState = ProgramInvocationState_resuming; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resetting
 * @constant
 * @type {number}
 */
export
const ProgramInvocationState_resetting: ProgramInvocationState = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProgramInvocationState_resetting
 * @constant
 * @type {number}
 */
export
const resetting: ProgramInvocationState = ProgramInvocationState_resetting; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProgramInvocationState = (el: _Element): ProgramInvocationState => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 8) {
        throw new ASN1OverflowError("ProgramInvocationState violates INTEGER range constraint");
    }
    return value;
};
export const _encode_ProgramInvocationState = $._encodeInteger;


/* eslint-enable */

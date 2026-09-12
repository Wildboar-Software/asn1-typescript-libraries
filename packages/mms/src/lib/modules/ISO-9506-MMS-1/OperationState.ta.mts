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
 * @summary OperationState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationState  ::=  INTEGER {
 *    idle                             (0),
 *    loaded                           (1),
 *    ready                            (2),
 *    executing                        (3),
 *    motion-paused                    (4),
 *    manualInterventionRequired       (5) } (0..5)
 * ```
 */
export
type OperationState = INTEGER;

/**
 * @summary OperationState_idle
 * @constant
 * @type {number}
 */
export
const OperationState_idle: OperationState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_idle
 * @constant
 * @type {number}
 */
export
const idle: OperationState = OperationState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_loaded
 * @constant
 * @type {number}
 */
export
const OperationState_loaded: OperationState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_loaded
 * @constant
 * @type {number}
 */
export
const loaded: OperationState = OperationState_loaded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_ready
 * @constant
 * @type {number}
 */
export
const OperationState_ready: OperationState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_ready
 * @constant
 * @type {number}
 */
export
const ready: OperationState = OperationState_ready; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_executing
 * @constant
 * @type {number}
 */
export
const OperationState_executing: OperationState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_executing
 * @constant
 * @type {number}
 */
export
const executing: OperationState = OperationState_executing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_motion_paused
 * @constant
 * @type {number}
 */
export
const OperationState_motion_paused: OperationState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_motion_paused
 * @constant
 * @type {number}
 */
export
const motion_paused: OperationState = OperationState_motion_paused; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const OperationState_manualInterventionRequired: OperationState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationState_manualInterventionRequired
 * @constant
 * @type {number}
 */
export
const manualInterventionRequired: OperationState = OperationState_manualInterventionRequired; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_OperationState = (el: _Element): OperationState => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 5) {
        throw new ASN1OverflowError("OperationState violates INTEGER range constraint");
    }
    return value;
};
export const _encode_OperationState = $._encodeInteger;


/* eslint-enable */

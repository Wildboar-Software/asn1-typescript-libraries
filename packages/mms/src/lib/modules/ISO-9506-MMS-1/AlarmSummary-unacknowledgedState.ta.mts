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
 * @summary AlarmSummary_unacknowledgedState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSummary-unacknowledgedState ::= INTEGER {
 *     none (0),
 *     active (1),
 *     idle (2),
 *     both (3)
 * } (0..3)
 * ```
 */
export
type AlarmSummary_unacknowledgedState = INTEGER;

/**
 * @summary AlarmSummary_unacknowledgedState_none
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_none: AlarmSummary_unacknowledgedState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_none
 * @constant
 * @type {number}
 */
export
const none: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_active
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_active: AlarmSummary_unacknowledgedState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_active
 * @constant
 * @type {number}
 */
export
const active: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_idle
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_idle: AlarmSummary_unacknowledgedState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_idle
 * @constant
 * @type {number}
 */
export
const idle: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_both
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_both: AlarmSummary_unacknowledgedState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_both
 * @constant
 * @type {number}
 */
export
const both: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_both; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AlarmSummary_unacknowledgedState = (el: _Element): AlarmSummary_unacknowledgedState => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("AlarmSummary_unacknowledgedState violates INTEGER range constraint");
    }
    return value;
};
export const _encode_AlarmSummary_unacknowledgedState = $._encodeInteger;


/* eslint-enable */

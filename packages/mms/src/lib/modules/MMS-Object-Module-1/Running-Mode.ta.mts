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
 * @summary Running_Mode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Running-Mode  ::=  INTEGER {
 *     free-run         (0),
 *     cycle-limited    (1),
 *     step-limited     (2)
 * } (0..2)
 * ```
 */
export
type Running_Mode = INTEGER;

/**
 * @summary Running_Mode_free_run
 * @constant
 * @type {number}
 */
export
const Running_Mode_free_run: Running_Mode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_free_run
 * @constant
 * @type {number}
 */
export
const free_run: Running_Mode = Running_Mode_free_run; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_cycle_limited
 * @constant
 * @type {number}
 */
export
const Running_Mode_cycle_limited: Running_Mode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_cycle_limited
 * @constant
 * @type {number}
 */
export
const cycle_limited: Running_Mode = Running_Mode_cycle_limited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_step_limited
 * @constant
 * @type {number}
 */
export
const Running_Mode_step_limited: Running_Mode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Running_Mode_step_limited
 * @constant
 * @type {number}
 */
export
const step_limited: Running_Mode = Running_Mode_step_limited; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Running_Mode = (el: _Element): Running_Mode => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 2) {
        throw new ASN1OverflowError("Running_Mode violates INTEGER range constraint");
    }
    return value;
};
export const _encode_Running_Mode = $._encodeInteger;


/* eslint-enable */

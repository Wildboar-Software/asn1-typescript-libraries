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
 * @summary AlarmAckRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmAckRule  ::=  INTEGER {
 *     none             (0),
 *     simple           (1),
 *     ack-active       (2),
 *     ack-all          (3)
 * } (0..3)
 * ```
 */
export
type AlarmAckRule = INTEGER;

/**
 * @summary AlarmAckRule_none
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_none: AlarmAckRule = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_none
 * @constant
 * @type {number}
 */
export
const none: AlarmAckRule = AlarmAckRule_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_simple
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_simple: AlarmAckRule = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_simple
 * @constant
 * @type {number}
 */
export
const simple: AlarmAckRule = AlarmAckRule_simple; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_active
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_ack_active: AlarmAckRule = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_active
 * @constant
 * @type {number}
 */
export
const ack_active: AlarmAckRule = AlarmAckRule_ack_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_all
 * @constant
 * @type {number}
 */
export
const AlarmAckRule_ack_all: AlarmAckRule = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmAckRule_ack_all
 * @constant
 * @type {number}
 */
export
const ack_all: AlarmAckRule = AlarmAckRule_ack_all; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AlarmAckRule = (el: _Element): AlarmAckRule => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 3) {
        throw new ASN1OverflowError("AlarmAckRule violates INTEGER range constraint");
    }
    return value;
};
export const _encode_AlarmAckRule = $._encodeInteger;


/* eslint-enable */

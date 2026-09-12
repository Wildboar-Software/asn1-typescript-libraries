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
 * @summary RejectPDU_rejectReason_unconfirmedPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-unconfirmedPDU ::= INTEGER {
 *     other (0),
 *     unrecognized-service (1),
 *     invalid-argument (2),
 *     max-recursion-exceeded (3),
 *     value-out-of-range (4)
 * } (0..4)
 * ```
 */
export
type RejectPDU_rejectReason_unconfirmedPDU = INTEGER;

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_other
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_other: RejectPDU_rejectReason_unconfirmedPDU = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_other
 * @constant
 * @type {number}
 */
export
const other: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service: RejectPDU_rejectReason_unconfirmedPDU = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service
 * @constant
 * @type {number}
 */
export
const unrecognized_service: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_unrecognized_service; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_invalid_argument: RejectPDU_rejectReason_unconfirmedPDU = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_invalid_argument
 * @constant
 * @type {number}
 */
export
const invalid_argument: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_invalid_argument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded: RejectPDU_rejectReason_unconfirmedPDU = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded
 * @constant
 * @type {number}
 */
export
const max_recursion_exceeded: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_max_recursion_exceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range: RejectPDU_rejectReason_unconfirmedPDU = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range
 * @constant
 * @type {number}
 */
export
const value_out_of_range: RejectPDU_rejectReason_unconfirmedPDU = RejectPDU_rejectReason_unconfirmedPDU_value_out_of_range; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_unconfirmedPDU = (el: _Element): RejectPDU_rejectReason_unconfirmedPDU => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 4) {
        throw new ASN1OverflowError("RejectPDU_rejectReason_unconfirmedPDU violates INTEGER range constraint");
    }
    return value;
};
export const _encode_RejectPDU_rejectReason_unconfirmedPDU = $._encodeInteger;


/* eslint-enable */

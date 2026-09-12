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
 * @summary RejectPDU_rejectReason_pdu_error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RejectPDU-rejectReason-pdu-error ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RejectPDU_rejectReason_pdu_error = INTEGER;

/**
 * @summary RejectPDU_rejectReason_pdu_error_unknown_pdu_type
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_unknown_pdu_type: RejectPDU_rejectReason_pdu_error = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_unknown_pdu_type
 * @constant
 * @type {number}
 */
export
const unknown_pdu_type: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_unknown_pdu_type; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_invalid_pdu: RejectPDU_rejectReason_pdu_error = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_invalid_pdu
 * @constant
 * @type {number}
 */
export
const invalid_pdu: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_invalid_pdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @constant
 * @type {number}
 */
export
const RejectPDU_rejectReason_pdu_error_illegal_acse_mapping: RejectPDU_rejectReason_pdu_error = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RejectPDU_rejectReason_pdu_error_illegal_acse_mapping
 * @constant
 * @type {number}
 */
export
const illegal_acse_mapping: RejectPDU_rejectReason_pdu_error = RejectPDU_rejectReason_pdu_error_illegal_acse_mapping; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RejectPDU_rejectReason_pdu_error = $._decodeInteger;
export const _encode_RejectPDU_rejectReason_pdu_error = $._encodeInteger;


/* eslint-enable */

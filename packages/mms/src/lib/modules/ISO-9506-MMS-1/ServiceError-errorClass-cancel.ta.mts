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
 * @summary ServiceError_errorClass_cancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass-cancel ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServiceError_errorClass_cancel = INTEGER;

/**
 * @summary ServiceError_errorClass_cancel_other
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_other: ServiceError_errorClass_cancel = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_other
 * @constant
 * @type {number}
 */
export
const other: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_invoke_id_unknown
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_invoke_id_unknown: ServiceError_errorClass_cancel = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_invoke_id_unknown
 * @constant
 * @type {number}
 */
export
const invoke_id_unknown: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_invoke_id_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_cancel_not_possible
 * @constant
 * @type {number}
 */
export
const ServiceError_errorClass_cancel_cancel_not_possible: ServiceError_errorClass_cancel = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceError_errorClass_cancel_cancel_not_possible
 * @constant
 * @type {number}
 */
export
const cancel_not_possible: ServiceError_errorClass_cancel = ServiceError_errorClass_cancel_cancel_not_possible; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ServiceError_errorClass_cancel = $._decodeInteger;
export const _encode_ServiceError_errorClass_cancel = $._encodeInteger;


/* eslint-enable */

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
 * @summary requestedInfoError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_requestedInfoError_ParameterType {
    unknownRequestedInfo = 1,
    requestedInfoNotAvailable = 2,
}

/**
 * @summary requestedInfoError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type requestedInfoError_ParameterType = _enum_for_requestedInfoError_ParameterType;

/**
 * @summary requestedInfoError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestedInfoError-ParameterType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const requestedInfoError_ParameterType = _enum_for_requestedInfoError_ParameterType;

/**
 * @summary requestedInfoError_ParameterType_unknownRequestedInfo
 * @constant
 * @type {number}
 */
export
const requestedInfoError_ParameterType_unknownRequestedInfo: requestedInfoError_ParameterType = requestedInfoError_ParameterType.unknownRequestedInfo; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownRequestedInfo
 * @constant
 * @type {number}
 */
export
const unknownRequestedInfo: requestedInfoError_ParameterType = requestedInfoError_ParameterType.unknownRequestedInfo; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoError_ParameterType_requestedInfoNotAvailable
 * @constant
 * @type {number}
 */
export
const requestedInfoError_ParameterType_requestedInfoNotAvailable: requestedInfoError_ParameterType = requestedInfoError_ParameterType.requestedInfoNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestedInfoNotAvailable
 * @constant
 * @type {number}
 */
export
const requestedInfoNotAvailable: requestedInfoError_ParameterType = requestedInfoError_ParameterType.requestedInfoNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_requestedInfoError_ParameterType = $._decodeEnumerated;
export const _encode_requestedInfoError_ParameterType = $._encodeEnumerated;


/* eslint-enable */

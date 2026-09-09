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
 * @summary ResponseCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseCondition  ::=  ENUMERATED {intermediateResponse(0), lastResponse(1)
 * 
 * -- additional values are for further study
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ResponseCondition {
    intermediateResponse = 0,
    lastResponse = 1,
}

/**
 * @summary ResponseCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseCondition  ::=  ENUMERATED {intermediateResponse(0), lastResponse(1)
 * 
 * -- additional values are for further study
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ResponseCondition = _enum_for_ResponseCondition;

/**
 * @summary ResponseCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseCondition  ::=  ENUMERATED {intermediateResponse(0), lastResponse(1)
 * 
 * -- additional values are for further study
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ResponseCondition = _enum_for_ResponseCondition;

/**
 * @summary ResponseCondition_intermediateResponse
 * @constant
 * @type {number}
 */
export
const ResponseCondition_intermediateResponse: ResponseCondition = ResponseCondition.intermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intermediateResponse
 * @constant
 * @type {number}
 */
export
const intermediateResponse: ResponseCondition = ResponseCondition.intermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseCondition_lastResponse
 * @constant
 * @type {number}
 */
export
const ResponseCondition_lastResponse: ResponseCondition = ResponseCondition.lastResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastResponse
 * @constant
 * @type {number}
 */
export
const lastResponse: ResponseCondition = ResponseCondition.lastResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ResponseCondition = $._decodeEnumerated;
export const _encode_ResponseCondition = $._encodeEnumerated;


/* eslint-enable */

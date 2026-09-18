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
 * @summary ParameterOffers_defaultCOPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-defaultCOPriority ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterOffers_defaultCOPriority = BIT_STRING;

/**
 * @summary ParameterOffers_defaultCOPriority_normal
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_normal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary normal
 * @constant
 */
export
const normal: number = ParameterOffers_defaultCOPriority_normal; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOPriority_high
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_high: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary high
 * @constant
 */
export
const high: number = ParameterOffers_defaultCOPriority_high; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOPriority_urgent
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_urgent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary urgent
 * @constant
 */
export
const urgent: number = ParameterOffers_defaultCOPriority_urgent; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_defaultCOPriority = $._decodeBitString;
export const _encode_ParameterOffers_defaultCOPriority = $._encodeBitString;


/* eslint-enable */

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
 * @summary ParameterOffers_dimensionOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-dimensionOffer ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterOffers_dimensionOffer = BIT_STRING;

/**
 * @summary ParameterOffers_dimensionOffer_oneDimension
 * @constant
 */
export
const ParameterOffers_dimensionOffer_oneDimension: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oneDimension
 * @constant
 */
export
const oneDimension: number = ParameterOffers_dimensionOffer_oneDimension; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_dimensionOffer_twoDimensions
 * @constant
 */
export
const ParameterOffers_dimensionOffer_twoDimensions: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary twoDimensions
 * @constant
 */
export
const twoDimensions: number = ParameterOffers_dimensionOffer_twoDimensions; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_dimensionOffer_threeDimensions
 * @constant
 */
export
const ParameterOffers_dimensionOffer_threeDimensions: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary threeDimensions
 * @constant
 */
export
const threeDimensions: number = ParameterOffers_dimensionOffer_threeDimensions; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_dimensionOffer = $._decodeBitString;
export const _encode_ParameterOffers_dimensionOffer = $._encodeBitString;


/* eslint-enable */

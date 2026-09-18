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
 * @summary ParameterOffers_category
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-category ::= BIT STRING {
 *     character   (0),
 *     boolean     (1),
 *     symbolic    (2),
 *     integer     (3),
 *     transparent (4)
 * }
 * ```
 */
export
type ParameterOffers_category = BIT_STRING;

/**
 * @summary ParameterOffers_category_character
 * @constant
 */
export
const ParameterOffers_category_character: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary character
 * @constant
 */
export
const character: number = ParameterOffers_category_character; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_category_boolean_
 * @constant
 */
export
const ParameterOffers_category_boolean_: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary boolean_
 * @constant
 */
export
const boolean_: number = ParameterOffers_category_boolean_; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_category_symbolic
 * @constant
 */
export
const ParameterOffers_category_symbolic: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary symbolic
 * @constant
 */
export
const symbolic: number = ParameterOffers_category_symbolic; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_category_integer
 * @constant
 */
export
const ParameterOffers_category_integer: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary integer
 * @constant
 */
export
const integer: number = ParameterOffers_category_integer; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_category_transparent
 * @constant
 */
export
const ParameterOffers_category_transparent: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary transparent
 * @constant
 */
export
const transparent: number = ParameterOffers_category_transparent; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_category = $._decodeBitString;
export const _encode_ParameterOffers_category = $._encodeBitString;


/* eslint-enable */

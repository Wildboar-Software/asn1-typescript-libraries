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
 * @summary ASQcontent_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASQcontent-class ::= INTEGER { basic (1) }
 * ```
 */
export
type ASQcontent_class = INTEGER;

/**
 * @summary ASQcontent_class_basic
 * @constant
 * @type {number}
 */
export
const ASQcontent_class_basic: ASQcontent_class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASQcontent_class_basic
 * @constant
 * @type {number}
 */
export
const basic: ASQcontent_class = ASQcontent_class_basic; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ASQcontent_class = $._decodeInteger;
export const _encode_ASQcontent_class = $._encodeInteger;


/* eslint-enable */

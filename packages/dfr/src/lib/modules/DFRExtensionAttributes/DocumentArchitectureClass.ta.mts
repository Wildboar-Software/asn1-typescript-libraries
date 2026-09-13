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
 * @summary DocumentArchitectureClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentArchitectureClass  ::=  INTEGER {
 *     formatted                (0),
 *     processable              (1),
 *     formatted-processable    (2)
 * }
 * ```
 */
export
type DocumentArchitectureClass = INTEGER;

/**
 * @summary DocumentArchitectureClass_formatted
 * @constant
 * @type {number}
 */
export
const DocumentArchitectureClass_formatted: DocumentArchitectureClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_formatted
 * @constant
 * @type {number}
 */
export
const formatted: DocumentArchitectureClass = DocumentArchitectureClass_formatted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_processable
 * @constant
 * @type {number}
 */
export
const DocumentArchitectureClass_processable: DocumentArchitectureClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_processable
 * @constant
 * @type {number}
 */
export
const processable: DocumentArchitectureClass = DocumentArchitectureClass_processable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_formatted_processable
 * @constant
 * @type {number}
 */
export
const DocumentArchitectureClass_formatted_processable: DocumentArchitectureClass = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentArchitectureClass_formatted_processable
 * @constant
 * @type {number}
 */
export
const formatted_processable: DocumentArchitectureClass = DocumentArchitectureClass_formatted_processable; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DocumentArchitectureClass = $._decodeInteger;
export const _encode_DocumentArchitectureClass = $._encodeInteger;


/* eslint-enable */

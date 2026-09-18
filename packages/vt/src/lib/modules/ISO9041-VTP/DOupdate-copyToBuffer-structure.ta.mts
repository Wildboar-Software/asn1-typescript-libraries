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
 * @summary DOupdate_copyToBuffer_structure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-copyToBuffer-structure ::= INTEGER { none (0), x (1), xAndy (2) }
 * ```
 */
export
type DOupdate_copyToBuffer_structure = INTEGER;

/**
 * @summary DOupdate_copyToBuffer_structure_none
 * @constant
 * @type {number}
 */
export
const DOupdate_copyToBuffer_structure_none: DOupdate_copyToBuffer_structure = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_none
 * @constant
 * @type {number}
 */
export
const none: DOupdate_copyToBuffer_structure = DOupdate_copyToBuffer_structure_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_x
 * @constant
 * @type {number}
 */
export
const DOupdate_copyToBuffer_structure_x: DOupdate_copyToBuffer_structure = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_x
 * @constant
 * @type {number}
 */
export
const x: DOupdate_copyToBuffer_structure = DOupdate_copyToBuffer_structure_x; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_xAndy
 * @constant
 * @type {number}
 */
export
const DOupdate_copyToBuffer_structure_xAndy: DOupdate_copyToBuffer_structure = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DOupdate_copyToBuffer_structure_xAndy
 * @constant
 * @type {number}
 */
export
const xAndy: DOupdate_copyToBuffer_structure = DOupdate_copyToBuffer_structure_xAndy; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DOupdate_copyToBuffer_structure = $._decodeInteger;
export const _encode_DOupdate_copyToBuffer_structure = $._encodeInteger;


/* eslint-enable */

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
 * @summary SemaphoreEntry_entryClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemaphoreEntry-entryClass ::= INTEGER {
 *     simple (0),
 *     modifier (1)
 * } (0..1)
 * ```
 */
export
type SemaphoreEntry_entryClass = INTEGER;

/**
 * @summary SemaphoreEntry_entryClass_simple
 * @constant
 * @type {number}
 */
export
const SemaphoreEntry_entryClass_simple: SemaphoreEntry_entryClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_simple
 * @constant
 * @type {number}
 */
export
const simple: SemaphoreEntry_entryClass = SemaphoreEntry_entryClass_simple; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_modifier
 * @constant
 * @type {number}
 */
export
const SemaphoreEntry_entryClass_modifier: SemaphoreEntry_entryClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_modifier
 * @constant
 * @type {number}
 */
export
const modifier: SemaphoreEntry_entryClass = SemaphoreEntry_entryClass_modifier; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SemaphoreEntry_entryClass = $._decodeInteger;
export const _encode_SemaphoreEntry_entryClass = $._encodeInteger;


/* eslint-enable */

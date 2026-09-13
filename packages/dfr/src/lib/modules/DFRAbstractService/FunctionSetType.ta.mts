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
 * @summary FunctionSetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionSetType  ::=  ENUMERATED {
 *     flat-store          (1),
 *     pre-defined-store   (2),
 *     full-set            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FunctionSetType {
    flat_store = 1,
    pre_defined_store = 2,
    full_set = 3,
}

/**
 * @summary FunctionSetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionSetType  ::=  ENUMERATED {
 *     flat-store          (1),
 *     pre-defined-store   (2),
 *     full-set            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FunctionSetType = _enum_for_FunctionSetType;

/**
 * @summary FunctionSetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionSetType  ::=  ENUMERATED {
 *     flat-store          (1),
 *     pre-defined-store   (2),
 *     full-set            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FunctionSetType = _enum_for_FunctionSetType;

/**
 * @summary FunctionSetType_flat_store
 * @constant
 * @type {number}
 */
export
const FunctionSetType_flat_store: FunctionSetType = FunctionSetType.flat_store; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flat_store
 * @constant
 * @type {number}
 */
export
const flat_store: FunctionSetType = FunctionSetType.flat_store; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FunctionSetType_pre_defined_store
 * @constant
 * @type {number}
 */
export
const FunctionSetType_pre_defined_store: FunctionSetType = FunctionSetType.pre_defined_store; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_defined_store
 * @constant
 * @type {number}
 */
export
const pre_defined_store: FunctionSetType = FunctionSetType.pre_defined_store; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FunctionSetType_full_set
 * @constant
 * @type {number}
 */
export
const FunctionSetType_full_set: FunctionSetType = FunctionSetType.full_set; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary full_set
 * @constant
 * @type {number}
 */
export
const full_set: FunctionSetType = FunctionSetType.full_set; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FunctionSetType = $._decodeEnumerated;
export const _encode_FunctionSetType = $._encodeEnumerated;


/* eslint-enable */

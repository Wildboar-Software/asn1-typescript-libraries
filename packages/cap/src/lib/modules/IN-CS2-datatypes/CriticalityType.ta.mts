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
 * @summary CriticalityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {ignore(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CriticalityType {
    ignore = 0,
    abort = 1,
}

/**
 * @summary CriticalityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {ignore(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
type CriticalityType = _enum_for_CriticalityType;

/**
 * @summary CriticalityType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CriticalityType  ::=  ENUMERATED {ignore(0), abort(1)}
 * ```
 * 
 * @enum {number}
 */
export
const CriticalityType = _enum_for_CriticalityType;

/**
 * @summary CriticalityType_ignore
 * @constant
 * @type {number}
 */
export
const CriticalityType_ignore: CriticalityType = CriticalityType.ignore; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignore
 * @constant
 * @type {number}
 */
export
const ignore: CriticalityType = CriticalityType.ignore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CriticalityType_abort
 * @constant
 * @type {number}
 */
export
const CriticalityType_abort: CriticalityType = CriticalityType.abort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abort
 * @constant
 * @type {number}
 */
export
const abort: CriticalityType = CriticalityType.abort; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CriticalityType = $._decodeEnumerated;
export const _encode_CriticalityType = $._encodeEnumerated;


/* eslint-enable */

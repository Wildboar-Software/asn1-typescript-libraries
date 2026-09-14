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



export
enum _enum_for_PasswordType {
    bcd = 0,
    ascii_numeric = 1,
    utf8 = 2,
    half_nibble_bcd = 3,
    iso9564_1 = 4,
}

/**
 * @summary PasswordType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PasswordType  ::=  ENUMERATED {
 *     bcd,
 *     ascii-numeric,
 *     utf8,
 *     half-nibble-bcd,
 *     iso9564-1,
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PasswordType = _enum_for_PasswordType | ENUMERATED;

/**
 * @summary PasswordType_bcd
 * @constant
 * @type {number}
 */
export
const PasswordType_bcd: PasswordType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bcd
 * @constant
 * @type {number}
 */
export
const bcd: PasswordType = PasswordType_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PasswordType_ascii_numeric
 * @constant
 * @type {number}
 */
export
const PasswordType_ascii_numeric: PasswordType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascii_numeric
 * @constant
 * @type {number}
 */
export
const ascii_numeric: PasswordType = PasswordType_ascii_numeric; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PasswordType_utf8
 * @constant
 * @type {number}
 */
export
const PasswordType_utf8: PasswordType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utf8
 * @constant
 * @type {number}
 */
export
const utf8: PasswordType = PasswordType_utf8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PasswordType_half_nibble_bcd
 * @constant
 * @type {number}
 */
export
const PasswordType_half_nibble_bcd: PasswordType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary half_nibble_bcd
 * @constant
 * @type {number}
 */
export
const half_nibble_bcd: PasswordType = PasswordType_half_nibble_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PasswordType_iso9564_1
 * @constant
 * @type {number}
 */
export
const PasswordType_iso9564_1: PasswordType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iso9564_1
 * @constant
 * @type {number}
 */
export
const iso9564_1: PasswordType = PasswordType_iso9564_1; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PasswordType = $._decodeEnumerated;
export const _encode_PasswordType = $._encodeEnumerated;


/* eslint-enable */

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
 * @summary ReportAmount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportAmount  ::=  ENUMERATED {
 *     d1 (0),
 *     d2 (1),
 *     d4 (2),
 *     d8 (3),
 *     d16 (4),
 *     d32 (5),
 *     d64 (6),
 *     infinity (7)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportAmount {
    d1 = 0,
    d2 = 1,
    d4 = 2,
    d8 = 3,
    d16 = 4,
    d32 = 5,
    d64 = 6,
    infinity = 7,
}

/**
 * @summary ReportAmount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportAmount  ::=  ENUMERATED {
 *     d1 (0),
 *     d2 (1),
 *     d4 (2),
 *     d8 (3),
 *     d16 (4),
 *     d32 (5),
 *     d64 (6),
 *     infinity (7)}
 * ```
 * 
 * @enum {number}
 */
export
type ReportAmount = _enum_for_ReportAmount;

/**
 * @summary ReportAmount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportAmount  ::=  ENUMERATED {
 *     d1 (0),
 *     d2 (1),
 *     d4 (2),
 *     d8 (3),
 *     d16 (4),
 *     d32 (5),
 *     d64 (6),
 *     infinity (7)}
 * ```
 * 
 * @enum {number}
 */
export
const ReportAmount = _enum_for_ReportAmount;

/**
 * @summary ReportAmount_d1
 * @constant
 * @type {number}
 */
export
const ReportAmount_d1: ReportAmount = ReportAmount.d1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d1
 * @constant
 * @type {number}
 */
export
const d1: ReportAmount = ReportAmount.d1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d2
 * @constant
 * @type {number}
 */
export
const ReportAmount_d2: ReportAmount = ReportAmount.d2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d2
 * @constant
 * @type {number}
 */
export
const d2: ReportAmount = ReportAmount.d2; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d4
 * @constant
 * @type {number}
 */
export
const ReportAmount_d4: ReportAmount = ReportAmount.d4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d4
 * @constant
 * @type {number}
 */
export
const d4: ReportAmount = ReportAmount.d4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d8
 * @constant
 * @type {number}
 */
export
const ReportAmount_d8: ReportAmount = ReportAmount.d8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d8
 * @constant
 * @type {number}
 */
export
const d8: ReportAmount = ReportAmount.d8; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d16
 * @constant
 * @type {number}
 */
export
const ReportAmount_d16: ReportAmount = ReportAmount.d16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d16
 * @constant
 * @type {number}
 */
export
const d16: ReportAmount = ReportAmount.d16; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d32
 * @constant
 * @type {number}
 */
export
const ReportAmount_d32: ReportAmount = ReportAmount.d32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d32
 * @constant
 * @type {number}
 */
export
const d32: ReportAmount = ReportAmount.d32; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_d64
 * @constant
 * @type {number}
 */
export
const ReportAmount_d64: ReportAmount = ReportAmount.d64; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary d64
 * @constant
 * @type {number}
 */
export
const d64: ReportAmount = ReportAmount.d64; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportAmount_infinity
 * @constant
 * @type {number}
 */
export
const ReportAmount_infinity: ReportAmount = ReportAmount.infinity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary infinity
 * @constant
 * @type {number}
 */
export
const infinity: ReportAmount = ReportAmount.infinity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ReportAmount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportAmount = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ReportAmount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportAmount, encoded as an ASN.1 Element.
 */
export const _encode_ReportAmount = $._encodeEnumerated;


/* eslint-enable */

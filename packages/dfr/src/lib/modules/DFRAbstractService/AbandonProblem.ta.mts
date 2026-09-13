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
 * @summary AbandonProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonProblem  ::=  ENUMERATED {
 *     no-such-operation   (1),
 *     too-late            (2),
 *     cannot-abandon      (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AbandonProblem {
    no_such_operation = 1,
    too_late = 2,
    cannot_abandon = 3,
}

/**
 * @summary AbandonProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonProblem  ::=  ENUMERATED {
 *     no-such-operation   (1),
 *     too-late            (2),
 *     cannot-abandon      (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AbandonProblem = _enum_for_AbandonProblem;

/**
 * @summary AbandonProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbandonProblem  ::=  ENUMERATED {
 *     no-such-operation   (1),
 *     too-late            (2),
 *     cannot-abandon      (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AbandonProblem = _enum_for_AbandonProblem;

/**
 * @summary AbandonProblem_no_such_operation
 * @constant
 * @type {number}
 */
export
const AbandonProblem_no_such_operation: AbandonProblem = AbandonProblem.no_such_operation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_such_operation
 * @constant
 * @type {number}
 */
export
const no_such_operation: AbandonProblem = AbandonProblem.no_such_operation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbandonProblem_too_late
 * @constant
 * @type {number}
 */
export
const AbandonProblem_too_late: AbandonProblem = AbandonProblem.too_late; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary too_late
 * @constant
 * @type {number}
 */
export
const too_late: AbandonProblem = AbandonProblem.too_late; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbandonProblem_cannot_abandon
 * @constant
 * @type {number}
 */
export
const AbandonProblem_cannot_abandon: AbandonProblem = AbandonProblem.cannot_abandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cannot_abandon
 * @constant
 * @type {number}
 */
export
const cannot_abandon: AbandonProblem = AbandonProblem.cannot_abandon; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AbandonProblem = $._decodeEnumerated;
export const _encode_AbandonProblem = $._encodeEnumerated;


/* eslint-enable */

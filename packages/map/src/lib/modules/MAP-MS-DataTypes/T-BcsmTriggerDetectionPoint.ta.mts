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
enum _enum_for_T_BcsmTriggerDetectionPoint {
    termAttemptAuthorized = 12,
    tBusy = 13,
    tNoAnswer = 14,
}

/**
 * @summary T_BcsmTriggerDetectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-BcsmTriggerDetectionPoint  ::=  ENUMERATED {
 *     termAttemptAuthorized (12),
 *     ... ,
 *     tBusy (13),
 *     tNoAnswer (14)}
 * ```
 * 
 * @enum {number}
 */
export
type T_BcsmTriggerDetectionPoint = _enum_for_T_BcsmTriggerDetectionPoint | ENUMERATED;

/**
 * @summary T_BcsmTriggerDetectionPoint_termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const T_BcsmTriggerDetectionPoint_termAttemptAuthorized: T_BcsmTriggerDetectionPoint = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary termAttemptAuthorized
 * @constant
 * @type {number}
 */
export
const termAttemptAuthorized: T_BcsmTriggerDetectionPoint = T_BcsmTriggerDetectionPoint_termAttemptAuthorized; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary T_BcsmTriggerDetectionPoint_tBusy
 * @constant
 * @type {number}
 */
export
const T_BcsmTriggerDetectionPoint_tBusy: T_BcsmTriggerDetectionPoint = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBusy
 * @constant
 * @type {number}
 */
export
const tBusy: T_BcsmTriggerDetectionPoint = T_BcsmTriggerDetectionPoint_tBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary T_BcsmTriggerDetectionPoint_tNoAnswer
 * @constant
 * @type {number}
 */
export
const T_BcsmTriggerDetectionPoint_tNoAnswer: T_BcsmTriggerDetectionPoint = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tNoAnswer
 * @constant
 * @type {number}
 */
export
const tNoAnswer: T_BcsmTriggerDetectionPoint = T_BcsmTriggerDetectionPoint_tNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) T_BcsmTriggerDetectionPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_T_BcsmTriggerDetectionPoint = $._decodeEnumerated;

/**
 * @summary Encodes a(n) T_BcsmTriggerDetectionPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_BcsmTriggerDetectionPoint, encoded as an ASN.1 Element.
 */
export const _encode_T_BcsmTriggerDetectionPoint = $._encodeEnumerated;


/* eslint-enable */

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
enum _enum_for_TerminationCause {
    normal = 0,
    errorundefined = 1,
    internalTimeout = 2,
    congestion = 3,
    mt_lrRestart = 4,
    privacyViolation = 5,
    shapeOfLocationEstimateNotSupported = 6,
    subscriberTermination = 7,
    uETermination = 8,
    networkTermination = 9,
}

/**
 * @summary TerminationCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationCause  ::=  ENUMERATED {
 *     normal  (0),
 *     errorundefined  (1),
 *     internalTimeout  (2),
 *     congestion  (3),
 *     mt-lrRestart  (4),
 *     privacyViolation  (5),
 *     ...,
 *     shapeOfLocationEstimateNotSupported (6) ,
 *     subscriberTermination (7),
 *     uETermination (8),
 *     networkTermination (9)  }
 * ```
 * 
 * @enum {number}
 */
export
type TerminationCause = _enum_for_TerminationCause | ENUMERATED;

/**
 * @summary TerminationCause_normal
 * @constant
 * @type {number}
 */
export
const TerminationCause_normal: TerminationCause = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: TerminationCause = TerminationCause_normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_errorundefined
 * @constant
 * @type {number}
 */
export
const TerminationCause_errorundefined: TerminationCause = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorundefined
 * @constant
 * @type {number}
 */
export
const errorundefined: TerminationCause = TerminationCause_errorundefined; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_internalTimeout
 * @constant
 * @type {number}
 */
export
const TerminationCause_internalTimeout: TerminationCause = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalTimeout
 * @constant
 * @type {number}
 */
export
const internalTimeout: TerminationCause = TerminationCause_internalTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_congestion
 * @constant
 * @type {number}
 */
export
const TerminationCause_congestion: TerminationCause = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary congestion
 * @constant
 * @type {number}
 */
export
const congestion: TerminationCause = TerminationCause_congestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_mt_lrRestart
 * @constant
 * @type {number}
 */
export
const TerminationCause_mt_lrRestart: TerminationCause = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mt_lrRestart
 * @constant
 * @type {number}
 */
export
const mt_lrRestart: TerminationCause = TerminationCause_mt_lrRestart; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_privacyViolation
 * @constant
 * @type {number}
 */
export
const TerminationCause_privacyViolation: TerminationCause = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privacyViolation
 * @constant
 * @type {number}
 */
export
const privacyViolation: TerminationCause = TerminationCause_privacyViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_shapeOfLocationEstimateNotSupported
 * @constant
 * @type {number}
 */
export
const TerminationCause_shapeOfLocationEstimateNotSupported: TerminationCause = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shapeOfLocationEstimateNotSupported
 * @constant
 * @type {number}
 */
export
const shapeOfLocationEstimateNotSupported: TerminationCause = TerminationCause_shapeOfLocationEstimateNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_subscriberTermination
 * @constant
 * @type {number}
 */
export
const TerminationCause_subscriberTermination: TerminationCause = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberTermination
 * @constant
 * @type {number}
 */
export
const subscriberTermination: TerminationCause = TerminationCause_subscriberTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_uETermination
 * @constant
 * @type {number}
 */
export
const TerminationCause_uETermination: TerminationCause = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uETermination
 * @constant
 * @type {number}
 */
export
const uETermination: TerminationCause = TerminationCause_uETermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TerminationCause_networkTermination
 * @constant
 * @type {number}
 */
export
const TerminationCause_networkTermination: TerminationCause = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkTermination
 * @constant
 * @type {number}
 */
export
const networkTermination: TerminationCause = TerminationCause_networkTermination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TerminationCause = $._decodeEnumerated;

/**
 * @summary Encodes a(n) TerminationCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationCause, encoded as an ASN.1 Element.
 */
export const _encode_TerminationCause = $._encodeEnumerated;


/* eslint-enable */

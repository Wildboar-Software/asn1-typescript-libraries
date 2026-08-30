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
enum _enum_for_CCBS_SubscriberStatus {
    ccbsNotIdle = 0,
    ccbsIdle = 1,
    ccbsNotReachable = 2,
}

/**
 * @summary CCBS_SubscriberStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-SubscriberStatus  ::=  ENUMERATED {
 *     ccbsNotIdle    (0),
 *     ccbsIdle    (1),
 *     ccbsNotReachable    (2),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type CCBS_SubscriberStatus = _enum_for_CCBS_SubscriberStatus | ENUMERATED;

/**
 * @summary CCBS_SubscriberStatus_ccbsNotIdle
 * @constant
 * @type {number}
 */
export
const CCBS_SubscriberStatus_ccbsNotIdle: CCBS_SubscriberStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ccbsNotIdle
 * @constant
 * @type {number}
 */
export
const ccbsNotIdle: CCBS_SubscriberStatus = CCBS_SubscriberStatus_ccbsNotIdle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_SubscriberStatus_ccbsIdle
 * @constant
 * @type {number}
 */
export
const CCBS_SubscriberStatus_ccbsIdle: CCBS_SubscriberStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ccbsIdle
 * @constant
 * @type {number}
 */
export
const ccbsIdle: CCBS_SubscriberStatus = CCBS_SubscriberStatus_ccbsIdle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CCBS_SubscriberStatus_ccbsNotReachable
 * @constant
 * @type {number}
 */
export
const CCBS_SubscriberStatus_ccbsNotReachable: CCBS_SubscriberStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ccbsNotReachable
 * @constant
 * @type {number}
 */
export
const ccbsNotReachable: CCBS_SubscriberStatus = CCBS_SubscriberStatus_ccbsNotReachable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_SubscriberStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CCBS_SubscriberStatus = $._decodeEnumerated;

/**
 * @summary Encodes a(n) CCBS_SubscriberStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_SubscriberStatus, encoded as an ASN.1 Element.
 */
export const _encode_CCBS_SubscriberStatus = $._encodeEnumerated;


/* eslint-enable */

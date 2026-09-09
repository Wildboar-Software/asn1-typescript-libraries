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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary Notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification  ::=  ENUMERATED {
 *   userAbandon(0), callFailure(1), noReply(2), callRelease(3), ssInvocation(4),
 *   creditLimitReached(5), callDuration(6), calledNumber(7), answeredCall(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Notification {
    userAbandon = 0,
    callFailure = 1,
    noReply = 2,
    callRelease = 3,
    ssInvocation = 4,
    creditLimitReached = 5,
    callDuration = 6,
    calledNumber = 7,
    answeredCall = 8,
}

/**
 * @summary Notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification  ::=  ENUMERATED {
 *   userAbandon(0), callFailure(1), noReply(2), callRelease(3), ssInvocation(4),
 *   creditLimitReached(5), callDuration(6), calledNumber(7), answeredCall(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Notification = _enum_for_Notification;

/**
 * @summary Notification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Notification  ::=  ENUMERATED {
 *   userAbandon(0), callFailure(1), noReply(2), callRelease(3), ssInvocation(4),
 *   creditLimitReached(5), callDuration(6), calledNumber(7), answeredCall(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Notification = _enum_for_Notification;

/**
 * @summary Notification_userAbandon
 * @constant
 * @type {number}
 */
export
const Notification_userAbandon: Notification = Notification.userAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userAbandon
 * @constant
 * @type {number}
 */
export
const userAbandon: Notification = Notification.userAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callFailure
 * @constant
 * @type {number}
 */
export
const Notification_callFailure: Notification = Notification.callFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callFailure
 * @constant
 * @type {number}
 */
export
const callFailure: Notification = Notification.callFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_noReply
 * @constant
 * @type {number}
 */
export
const Notification_noReply: Notification = Notification.noReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReply
 * @constant
 * @type {number}
 */
export
const noReply: Notification = Notification.noReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callRelease
 * @constant
 * @type {number}
 */
export
const Notification_callRelease: Notification = Notification.callRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRelease
 * @constant
 * @type {number}
 */
export
const callRelease: Notification = Notification.callRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_ssInvocation
 * @constant
 * @type {number}
 */
export
const Notification_ssInvocation: Notification = Notification.ssInvocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ssInvocation
 * @constant
 * @type {number}
 */
export
const ssInvocation: Notification = Notification.ssInvocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_creditLimitReached
 * @constant
 * @type {number}
 */
export
const Notification_creditLimitReached: Notification = Notification.creditLimitReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditLimitReached
 * @constant
 * @type {number}
 */
export
const creditLimitReached: Notification = Notification.creditLimitReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callDuration
 * @constant
 * @type {number}
 */
export
const Notification_callDuration: Notification = Notification.callDuration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDuration
 * @constant
 * @type {number}
 */
export
const callDuration: Notification = Notification.callDuration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_calledNumber
 * @constant
 * @type {number}
 */
export
const Notification_calledNumber: Notification = Notification.calledNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledNumber
 * @constant
 * @type {number}
 */
export
const calledNumber: Notification = Notification.calledNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_answeredCall
 * @constant
 * @type {number}
 */
export
const Notification_answeredCall: Notification = Notification.answeredCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answeredCall
 * @constant
 * @type {number}
 */
export
const answeredCall: Notification = Notification.answeredCall; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Notification: $.ASN1Decoder<Notification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Notification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Notification (el: _Element): Notification {
    if (!_cached_decoder_for_Notification) { _cached_decoder_for_Notification = $._decodeEnumerated; }
    return _cached_decoder_for_Notification(el);
}

let _cached_encoder_for_Notification: $.ASN1Encoder<Notification> | null = null;

/**
 * @summary Encodes a(n) Notification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Notification, encoded as an ASN.1 Element.
 */
export
function _encode_Notification (value: Notification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Notification) { _cached_encoder_for_Notification = $._encodeEnumerated; }
    return _cached_encoder_for_Notification(value, elGetter);
}


/* eslint-enable */

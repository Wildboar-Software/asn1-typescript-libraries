/* eslint-disable */
import {
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
export const _decode_Notification = $._decodeEnumerated;
export const _encode_Notification = $._encodeEnumerated;


/* eslint-enable */

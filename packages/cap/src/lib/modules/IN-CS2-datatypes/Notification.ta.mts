/* eslint-disable */
import {
    type ASN1Element as _Element,
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
const Notification_userAbandon = Notification.userAbandon satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userAbandon
 * @constant
 * @type {number}
 */
export
const userAbandon = Notification.userAbandon satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callFailure
 * @constant
 * @type {number}
 */
export
const Notification_callFailure = Notification.callFailure satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callFailure
 * @constant
 * @type {number}
 */
export
const callFailure = Notification.callFailure satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_noReply
 * @constant
 * @type {number}
 */
export
const Notification_noReply = Notification.noReply satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReply
 * @constant
 * @type {number}
 */
export
const noReply = Notification.noReply satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callRelease
 * @constant
 * @type {number}
 */
export
const Notification_callRelease = Notification.callRelease satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRelease
 * @constant
 * @type {number}
 */
export
const callRelease = Notification.callRelease satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_ssInvocation
 * @constant
 * @type {number}
 */
export
const Notification_ssInvocation = Notification.ssInvocation satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ssInvocation
 * @constant
 * @type {number}
 */
export
const ssInvocation = Notification.ssInvocation satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_creditLimitReached
 * @constant
 * @type {number}
 */
export
const Notification_creditLimitReached = Notification.creditLimitReached satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditLimitReached
 * @constant
 * @type {number}
 */
export
const creditLimitReached = Notification.creditLimitReached satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callDuration
 * @constant
 * @type {number}
 */
export
const Notification_callDuration = Notification.callDuration satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDuration
 * @constant
 * @type {number}
 */
export
const callDuration = Notification.callDuration satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_calledNumber
 * @constant
 * @type {number}
 */
export
const Notification_calledNumber = Notification.calledNumber satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledNumber
 * @constant
 * @type {number}
 */
export
const calledNumber = Notification.calledNumber satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_answeredCall
 * @constant
 * @type {number}
 */
export
const Notification_answeredCall = Notification.answeredCall satisfies Notification; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answeredCall
 * @constant
 * @type {number}
 */
export
const answeredCall = Notification.answeredCall satisfies Notification; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Notification = $._decodeEnumerated;
export const _encode_Notification = $._encodeEnumerated;


/* eslint-enable */

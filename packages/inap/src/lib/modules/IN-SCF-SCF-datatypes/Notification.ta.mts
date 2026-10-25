/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const Notification: typeof _enum_for_Notification = _enum_for_Notification;

/**
 * @summary Notification_userAbandon
 * @constant
 * @type {number}
 */
export
const Notification_userAbandon: _enum_for_Notification.userAbandon = Notification.userAbandon; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userAbandon
 * @constant
 * @type {number}
 */
export
const userAbandon: _enum_for_Notification.userAbandon = Notification.userAbandon; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callFailure
 * @constant
 * @type {number}
 */
export
const Notification_callFailure: _enum_for_Notification.callFailure = Notification.callFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callFailure
 * @constant
 * @type {number}
 */
export
const callFailure: _enum_for_Notification.callFailure = Notification.callFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_noReply
 * @constant
 * @type {number}
 */
export
const Notification_noReply: _enum_for_Notification.noReply = Notification.noReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReply
 * @constant
 * @type {number}
 */
export
const noReply: _enum_for_Notification.noReply = Notification.noReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callRelease
 * @constant
 * @type {number}
 */
export
const Notification_callRelease: _enum_for_Notification.callRelease = Notification.callRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRelease
 * @constant
 * @type {number}
 */
export
const callRelease: _enum_for_Notification.callRelease = Notification.callRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_ssInvocation
 * @constant
 * @type {number}
 */
export
const Notification_ssInvocation: _enum_for_Notification.ssInvocation = Notification.ssInvocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ssInvocation
 * @constant
 * @type {number}
 */
export
const ssInvocation: _enum_for_Notification.ssInvocation = Notification.ssInvocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_creditLimitReached
 * @constant
 * @type {number}
 */
export
const Notification_creditLimitReached: _enum_for_Notification.creditLimitReached = Notification.creditLimitReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary creditLimitReached
 * @constant
 * @type {number}
 */
export
const creditLimitReached: _enum_for_Notification.creditLimitReached = Notification.creditLimitReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_callDuration
 * @constant
 * @type {number}
 */
export
const Notification_callDuration: _enum_for_Notification.callDuration = Notification.callDuration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDuration
 * @constant
 * @type {number}
 */
export
const callDuration: _enum_for_Notification.callDuration = Notification.callDuration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_calledNumber
 * @constant
 * @type {number}
 */
export
const Notification_calledNumber: _enum_for_Notification.calledNumber = Notification.calledNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledNumber
 * @constant
 * @type {number}
 */
export
const calledNumber: _enum_for_Notification.calledNumber = Notification.calledNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Notification_answeredCall
 * @constant
 * @type {number}
 */
export
const Notification_answeredCall: _enum_for_Notification.answeredCall = Notification.answeredCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answeredCall
 * @constant
 * @type {number}
 */
export
const answeredCall: _enum_for_Notification.answeredCall = Notification.answeredCall; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_Notification(el: _Element): Notification {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case Notification.userAbandon: return Notification.userAbandon;
        case Notification.callFailure: return Notification.callFailure;
        case Notification.noReply: return Notification.noReply;
        case Notification.callRelease: return Notification.callRelease;
        case Notification.ssInvocation: return Notification.ssInvocation;
        case Notification.creditLimitReached: return Notification.creditLimitReached;
        case Notification.callDuration: return Notification.callDuration;
        case Notification.calledNumber: return Notification.calledNumber;
        case Notification.answeredCall: return Notification.answeredCall;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for Notification.",
                el,
            );
    }
}

export
const _encode_Notification: $.ASN1Encoder<Notification> = $._encodeEnumerated as $.ASN1Encoder<Notification>;

/* eslint-enable */

/* eslint-disable */
import {
    type ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ChangeDeniedReason {
    waitingVerificationOfClosure = 1,
    troubleReportAlreadyClosed = 2,
    activityAuthorizationPending = 3,
}

/**
 * @summary ChangeDeniedReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeDeniedReason  ::=  ENUMERATED {
 *   waitingVerificationOfClosure(1), troubleReportAlreadyClosed(2),
 *   activityAuthorizationPending(3), ...
 *   }
 * ```
 * 
 * @enum {number}
 */
export
type ChangeDeniedReason = _enum_for_ChangeDeniedReason | ENUMERATED;

/**
 * @summary ChangeDeniedReason_waitingVerificationOfClosure
 * @constant
 * @type {number}
 */
export
const ChangeDeniedReason_waitingVerificationOfClosure = _enum_for_ChangeDeniedReason.waitingVerificationOfClosure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary waitingVerificationOfClosure
 * @constant
 * @type {number}
 */
export
const waitingVerificationOfClosure = ChangeDeniedReason_waitingVerificationOfClosure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeDeniedReason_troubleReportAlreadyClosed
 * @constant
 * @type {number}
 */
export
const ChangeDeniedReason_troubleReportAlreadyClosed = _enum_for_ChangeDeniedReason.troubleReportAlreadyClosed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary troubleReportAlreadyClosed
 * @constant
 * @type {number}
 */
export
const troubleReportAlreadyClosed = ChangeDeniedReason_troubleReportAlreadyClosed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChangeDeniedReason_activityAuthorizationPending
 * @constant
 * @type {number}
 */
export
const ChangeDeniedReason_activityAuthorizationPending = _enum_for_ChangeDeniedReason.activityAuthorizationPending; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activityAuthorizationPending
 * @constant
 * @type {number}
 */
export
const activityAuthorizationPending = ChangeDeniedReason_activityAuthorizationPending; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ChangeDeniedReason = $._decodeEnumerated;
export const _encode_ChangeDeniedReason = $._encodeEnumerated;


/* eslint-enable */

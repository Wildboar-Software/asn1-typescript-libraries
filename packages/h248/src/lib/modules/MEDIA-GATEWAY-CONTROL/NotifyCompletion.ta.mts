/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotifyCompletion
 * @description
 * 
 * Reasons for which the MG should report that a signal finished (ITU-T Rec.
 * H.248.1 (03/2013) clause 7.1.11.5).
 *
 * If the parameter is absent, a notification is produced only for
 * `otherReason`: the signal stopped, or never started, for a reason other than
 * timeout, interruption, replacement, or end of an iteration. The Signal
 * Completion event (clause E.1.2) still has to be enabled in the active Events
 * descriptor before any of these are reported.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyCompletion  ::=  BIT STRING
 *     {
 *         onTimeOut(0), onInterruptByEvent(1),
 *         onInterruptByNewSignalDescr(2), otherReason(3), onIteration(4)
 *     }
 * ```
 */
export
type NotifyCompletion = BIT_STRING;

/**
 * @summary NotifyCompletion_onTimeOut
 * @description
 *
 * The signal timed out, or otherwise finished on its own (clause 7.1.11.5).
 *
 * @constant
 */
export
const NotifyCompletion_onTimeOut: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary onTimeOut
 * @constant
 */
export
const onTimeOut: number = NotifyCompletion_onTimeOut; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_onInterruptByEvent
 * @description
 *
 * An event on the termination interrupted the signal (clauses 7.1.9.5 and
 * 7.1.11.5).
 *
 * @constant
 */
export
const NotifyCompletion_onInterruptByEvent: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary onInterruptByEvent
 * @constant
 */
export
const onInterruptByEvent: number = NotifyCompletion_onInterruptByEvent; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_onInterruptByNewSignalDescr
 * @description
 *
 * A replacement Signals descriptor stopped the signal (clause 7.1.11.5).
 *
 * @constant
 */
export
const NotifyCompletion_onInterruptByNewSignalDescr: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary onInterruptByNewSignalDescr
 * @constant
 */
export
const onInterruptByNewSignalDescr: number = NotifyCompletion_onInterruptByNewSignalDescr; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_otherReason
 * @description
 *
 * The signal stopped, or never started, for a reason other than timeout, event
 * interruption, descriptor replacement, or end of an iteration. This is the
 * only completion reported when `notifyCompletion` itself is omitted (clause
 * 7.1.11.5).
 *
 * @constant
 */
export
const NotifyCompletion_otherReason: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary otherReason
 * @constant
 */
export
const otherReason: number = NotifyCompletion_otherReason; /* SHORT_NAMED_BIT */

/**
 * @summary NotifyCompletion_onIteration
 * @description
 *
 * One cycle or iteration of the signal completed (clause 7.1.11.5).
 *
 * @constant
 */
export
const NotifyCompletion_onIteration: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary onIteration
 * @constant
 */
export
const onIteration: number = NotifyCompletion_onIteration; /* SHORT_NAMED_BIT */
export const _decode_NotifyCompletion = $._decodeBitString;
export const _encode_NotifyCompletion = $._encodeBitString;


/* eslint-enable */

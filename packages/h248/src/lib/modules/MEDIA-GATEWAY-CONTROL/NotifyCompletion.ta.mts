/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotifyCompletion
 * @description
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

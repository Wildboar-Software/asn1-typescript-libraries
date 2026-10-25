/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TroubleReportStatus_number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleReportStatus-number ::= INTEGER {-- Integer values are to be registered in the
 *              -- standard. Administrations may restrict
 *              -- the values to be used.
 *              screening(1), testing(2), dispatchedIn(3), dispatchedOut(4),
 *              preassignedOut(5), bulkDispatchedOut(6), startRepair(7),
 *              pendingTest(8), pendingDispatch(9), requestRepair(10),
 *              referMtceCenter(11), referVendor(12), noAccessOther(13),
 *              startNoAccess(14), stopNoAccess(15), startDelayedMtce(16),
 *              stopDelayedMtce(17), troubleEscalated(18), craftDispatched(19),
 *              temporaryOK(20), cableFailure(21), originatingEquipFailure(22),
 *              backOrder(23), clearedCustNotAdvised(24), clearedCustAdvised(25),
 *              clearedAwaitingCustVerification(26), closedOut(27),
 *              closedOutByCustReq(28), closedOutCustVerified(29),
 *              closedOutCustDenied(30), canceledPendingWorkInProgress(31),
 *              canceledPendingTestCompletion(32),
 *              canceledPendingDispatchCompl(33), techOnSite(34), techLeftSite(35)}
 * ```
 */
export
type TroubleReportStatus_number = INTEGER;

/**
 * @summary TroubleReportStatus_number_screening
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_screening: 1 = 1 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_screening
 * @constant
 * @type {number}
 */
export
const screening: 1 = TroubleReportStatus_number_screening; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_testing: 2 = 2 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export
const testing: 2 = TroubleReportStatus_number_testing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_dispatchedIn: 3 = 3 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export
const dispatchedIn: 3 = TroubleReportStatus_number_dispatchedIn; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_dispatchedOut: 4 = 4 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export
const dispatchedOut: 4 = TroubleReportStatus_number_dispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_preassignedOut: 5 = 5 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export
const preassignedOut: 5 = TroubleReportStatus_number_preassignedOut; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_bulkDispatchedOut: 6 = 6 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export
const bulkDispatchedOut: 6 = TroubleReportStatus_number_bulkDispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_startRepair: 7 = 7 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export
const startRepair: 7 = TroubleReportStatus_number_startRepair; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_pendingTest: 8 = 8 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export
const pendingTest: 8 = TroubleReportStatus_number_pendingTest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_pendingDispatch: 9 = 9 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export
const pendingDispatch: 9 = TroubleReportStatus_number_pendingDispatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_requestRepair: 10 = 10 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export
const requestRepair: 10 = TroubleReportStatus_number_requestRepair; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_referMtceCenter: 11 = 11 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export
const referMtceCenter: 11 = TroubleReportStatus_number_referMtceCenter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_referVendor: 12 = 12 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export
const referVendor: 12 = TroubleReportStatus_number_referVendor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_noAccessOther: 13 = 13 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export
const noAccessOther: 13 = TroubleReportStatus_number_noAccessOther; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_startNoAccess: 14 = 14 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export
const startNoAccess: 14 = TroubleReportStatus_number_startNoAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_stopNoAccess: 15 = 15 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export
const stopNoAccess: 15 = TroubleReportStatus_number_stopNoAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_startDelayedMtce: 16 = 16 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export
const startDelayedMtce: 16 = TroubleReportStatus_number_startDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_stopDelayedMtce: 17 = 17 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export
const stopDelayedMtce: 17 = TroubleReportStatus_number_stopDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_troubleEscalated: 18 = 18 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export
const troubleEscalated: 18 = TroubleReportStatus_number_troubleEscalated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_craftDispatched: 19 = 19 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export
const craftDispatched: 19 = TroubleReportStatus_number_craftDispatched; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_temporaryOK: 20 = 20 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export
const temporaryOK: 20 = TroubleReportStatus_number_temporaryOK; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_cableFailure: 21 = 21 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export
const cableFailure: 21 = TroubleReportStatus_number_cableFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_originatingEquipFailure: 22 = 22 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export
const originatingEquipFailure: 22 = TroubleReportStatus_number_originatingEquipFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_backOrder: 23 = 23 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export
const backOrder: 23 = TroubleReportStatus_number_backOrder; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_clearedCustNotAdvised: 24 = 24 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export
const clearedCustNotAdvised: 24 = TroubleReportStatus_number_clearedCustNotAdvised; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_clearedCustAdvised: 25 = 25 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export
const clearedCustAdvised: 25 = TroubleReportStatus_number_clearedCustAdvised; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_clearedAwaitingCustVerification: 26 = 26 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export
const clearedAwaitingCustVerification: 26 = TroubleReportStatus_number_clearedAwaitingCustVerification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_closedOut: 27 = 27 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export
const closedOut: 27 = TroubleReportStatus_number_closedOut; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_closedOutByCustReq: 28 = 28 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export
const closedOutByCustReq: 28 = TroubleReportStatus_number_closedOutByCustReq; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_closedOutCustVerified: 29 = 29 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export
const closedOutCustVerified: 29 = TroubleReportStatus_number_closedOutCustVerified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_closedOutCustDenied: 30 = 30 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export
const closedOutCustDenied: 30 = TroubleReportStatus_number_closedOutCustDenied; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_canceledPendingWorkInProgress: 31 = 31 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export
const canceledPendingWorkInProgress: 31 = TroubleReportStatus_number_canceledPendingWorkInProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_canceledPendingTestCompletion: 32 = 32 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export
const canceledPendingTestCompletion: 32 = TroubleReportStatus_number_canceledPendingTestCompletion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_canceledPendingDispatchCompl: 33 = 33 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export
const canceledPendingDispatchCompl: 33 = TroubleReportStatus_number_canceledPendingDispatchCompl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_techOnSite: 34 = 34 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export
const techOnSite: 34 = TroubleReportStatus_number_techOnSite; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export
const TroubleReportStatus_number_techLeftSite: 35 = 35 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export
const techLeftSite: 35 = TroubleReportStatus_number_techLeftSite; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TroubleReportStatus_number: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_TroubleReportStatus_number: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */

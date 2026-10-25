/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary TroubleReportStatus_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportStatus-number ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TroubleReportStatus_number = INTEGER;


/**
 * @summary TroubleReportStatus_number_screening
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_screening = 1 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_screening
 * @constant
 * @type {number}
 */
export const screening = TroubleReportStatus_number_screening; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_testing = 2 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export const testing = TroubleReportStatus_number_testing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_dispatchedIn = 3 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export const dispatchedIn = TroubleReportStatus_number_dispatchedIn; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_dispatchedOut = 4 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export const dispatchedOut = TroubleReportStatus_number_dispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_preassignedOut = 5 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export const preassignedOut = TroubleReportStatus_number_preassignedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_bulkDispatchedOut = 6 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export const bulkDispatchedOut = TroubleReportStatus_number_bulkDispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startRepair = 7 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export const startRepair = TroubleReportStatus_number_startRepair; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_pendingTest = 8 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export const pendingTest = TroubleReportStatus_number_pendingTest; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_pendingDispatch = 9 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export const pendingDispatch = TroubleReportStatus_number_pendingDispatch; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_requestRepair = 10 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export const requestRepair = TroubleReportStatus_number_requestRepair; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_referMtceCenter = 11 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export const referMtceCenter = TroubleReportStatus_number_referMtceCenter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_referVendor = 12 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export const referVendor = TroubleReportStatus_number_referVendor; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_noAccessOther = 13 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export const noAccessOther = TroubleReportStatus_number_noAccessOther; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startNoAccess = 14 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export const startNoAccess = TroubleReportStatus_number_startNoAccess; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_stopNoAccess = 15 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export const stopNoAccess = TroubleReportStatus_number_stopNoAccess; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startDelayedMtce = 16 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export const startDelayedMtce = TroubleReportStatus_number_startDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_stopDelayedMtce = 17 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export const stopDelayedMtce = TroubleReportStatus_number_stopDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_troubleEscalated = 18 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export const troubleEscalated = TroubleReportStatus_number_troubleEscalated; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_craftDispatched = 19 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export const craftDispatched = TroubleReportStatus_number_craftDispatched; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_temporaryOK = 20 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export const temporaryOK = TroubleReportStatus_number_temporaryOK; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_cableFailure = 21 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export const cableFailure = TroubleReportStatus_number_cableFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_originatingEquipFailure = 22 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export const originatingEquipFailure = TroubleReportStatus_number_originatingEquipFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_backOrder = 23 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export const backOrder = TroubleReportStatus_number_backOrder; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedCustNotAdvised = 24 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export const clearedCustNotAdvised = TroubleReportStatus_number_clearedCustNotAdvised; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedCustAdvised = 25 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export const clearedCustAdvised = TroubleReportStatus_number_clearedCustAdvised; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedAwaitingCustVerification = 26 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export const clearedAwaitingCustVerification = TroubleReportStatus_number_clearedAwaitingCustVerification; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOut = 27 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export const closedOut = TroubleReportStatus_number_closedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutByCustReq = 28 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export const closedOutByCustReq = TroubleReportStatus_number_closedOutByCustReq; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutCustVerified = 29 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export const closedOutCustVerified = TroubleReportStatus_number_closedOutCustVerified; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutCustDenied = 30 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export const closedOutCustDenied = TroubleReportStatus_number_closedOutCustDenied; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingWorkInProgress = 31 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export const canceledPendingWorkInProgress = TroubleReportStatus_number_canceledPendingWorkInProgress; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingTestCompletion = 32 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export const canceledPendingTestCompletion = TroubleReportStatus_number_canceledPendingTestCompletion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingDispatchCompl = 33 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export const canceledPendingDispatchCompl = TroubleReportStatus_number_canceledPendingDispatchCompl; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_techOnSite = 34 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export const techOnSite = TroubleReportStatus_number_techOnSite; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_techLeftSite = 35 satisfies TroubleReportStatus_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export const techLeftSite = TroubleReportStatus_number_techLeftSite; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TroubleReportStatus_number = $._decodeInteger;




export const _encode_TroubleReportStatus_number = $._encodeInteger;


/* eslint-enable */

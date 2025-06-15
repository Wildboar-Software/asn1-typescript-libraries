/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


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
export const TroubleReportStatus_number_screening: TroubleReportStatus_number = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_screening
 * @constant
 * @type {number}
 */
export const screening: TroubleReportStatus_number = TroubleReportStatus_number_screening; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_testing: TroubleReportStatus_number = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export const testing: TroubleReportStatus_number = TroubleReportStatus_number_testing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_dispatchedIn: TroubleReportStatus_number = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export const dispatchedIn: TroubleReportStatus_number = TroubleReportStatus_number_dispatchedIn; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_dispatchedOut: TroubleReportStatus_number = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export const dispatchedOut: TroubleReportStatus_number = TroubleReportStatus_number_dispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_preassignedOut: TroubleReportStatus_number = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export const preassignedOut: TroubleReportStatus_number = TroubleReportStatus_number_preassignedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_bulkDispatchedOut: TroubleReportStatus_number = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export const bulkDispatchedOut: TroubleReportStatus_number = TroubleReportStatus_number_bulkDispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startRepair: TroubleReportStatus_number = 7; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export const startRepair: TroubleReportStatus_number = TroubleReportStatus_number_startRepair; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_pendingTest: TroubleReportStatus_number = 8; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export const pendingTest: TroubleReportStatus_number = TroubleReportStatus_number_pendingTest; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_pendingDispatch: TroubleReportStatus_number = 9; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export const pendingDispatch: TroubleReportStatus_number = TroubleReportStatus_number_pendingDispatch; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_requestRepair: TroubleReportStatus_number = 10; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export const requestRepair: TroubleReportStatus_number = TroubleReportStatus_number_requestRepair; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_referMtceCenter: TroubleReportStatus_number = 11; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export const referMtceCenter: TroubleReportStatus_number = TroubleReportStatus_number_referMtceCenter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_referVendor: TroubleReportStatus_number = 12; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export const referVendor: TroubleReportStatus_number = TroubleReportStatus_number_referVendor; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_noAccessOther: TroubleReportStatus_number = 13; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export const noAccessOther: TroubleReportStatus_number = TroubleReportStatus_number_noAccessOther; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startNoAccess: TroubleReportStatus_number = 14; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export const startNoAccess: TroubleReportStatus_number = TroubleReportStatus_number_startNoAccess; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_stopNoAccess: TroubleReportStatus_number = 15; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export const stopNoAccess: TroubleReportStatus_number = TroubleReportStatus_number_stopNoAccess; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startDelayedMtce: TroubleReportStatus_number = 16; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export const startDelayedMtce: TroubleReportStatus_number = TroubleReportStatus_number_startDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_stopDelayedMtce: TroubleReportStatus_number = 17; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export const stopDelayedMtce: TroubleReportStatus_number = TroubleReportStatus_number_stopDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_troubleEscalated: TroubleReportStatus_number = 18; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export const troubleEscalated: TroubleReportStatus_number = TroubleReportStatus_number_troubleEscalated; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_craftDispatched: TroubleReportStatus_number = 19; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export const craftDispatched: TroubleReportStatus_number = TroubleReportStatus_number_craftDispatched; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_temporaryOK: TroubleReportStatus_number = 20; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export const temporaryOK: TroubleReportStatus_number = TroubleReportStatus_number_temporaryOK; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_cableFailure: TroubleReportStatus_number = 21; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export const cableFailure: TroubleReportStatus_number = TroubleReportStatus_number_cableFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_originatingEquipFailure: TroubleReportStatus_number = 22; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export const originatingEquipFailure: TroubleReportStatus_number = TroubleReportStatus_number_originatingEquipFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_backOrder: TroubleReportStatus_number = 23; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export const backOrder: TroubleReportStatus_number = TroubleReportStatus_number_backOrder; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedCustNotAdvised: TroubleReportStatus_number = 24; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export const clearedCustNotAdvised: TroubleReportStatus_number = TroubleReportStatus_number_clearedCustNotAdvised; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedCustAdvised: TroubleReportStatus_number = 25; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export const clearedCustAdvised: TroubleReportStatus_number = TroubleReportStatus_number_clearedCustAdvised; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedAwaitingCustVerification: TroubleReportStatus_number = 26; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export const clearedAwaitingCustVerification: TroubleReportStatus_number = TroubleReportStatus_number_clearedAwaitingCustVerification; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOut: TroubleReportStatus_number = 27; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export const closedOut: TroubleReportStatus_number = TroubleReportStatus_number_closedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutByCustReq: TroubleReportStatus_number = 28; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export const closedOutByCustReq: TroubleReportStatus_number = TroubleReportStatus_number_closedOutByCustReq; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutCustVerified: TroubleReportStatus_number = 29; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export const closedOutCustVerified: TroubleReportStatus_number = TroubleReportStatus_number_closedOutCustVerified; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutCustDenied: TroubleReportStatus_number = 30; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export const closedOutCustDenied: TroubleReportStatus_number = TroubleReportStatus_number_closedOutCustDenied; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingWorkInProgress: TroubleReportStatus_number = 31; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export const canceledPendingWorkInProgress: TroubleReportStatus_number = TroubleReportStatus_number_canceledPendingWorkInProgress; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingTestCompletion: TroubleReportStatus_number = 32; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export const canceledPendingTestCompletion: TroubleReportStatus_number = TroubleReportStatus_number_canceledPendingTestCompletion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingDispatchCompl: TroubleReportStatus_number = 33; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export const canceledPendingDispatchCompl: TroubleReportStatus_number = TroubleReportStatus_number_canceledPendingDispatchCompl; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_techOnSite: TroubleReportStatus_number = 34; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export const techOnSite: TroubleReportStatus_number = TroubleReportStatus_number_techOnSite; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_techLeftSite: TroubleReportStatus_number = 35; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export const techLeftSite: TroubleReportStatus_number = TroubleReportStatus_number_techLeftSite; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TroubleReportStatus_number = $._decodeInteger;




export const _encode_TroubleReportStatus_number = $._encodeInteger;


/* eslint-enable */

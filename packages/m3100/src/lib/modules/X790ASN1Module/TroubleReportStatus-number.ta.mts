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

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number */
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
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_screening */
/**
 * @summary TroubleReportStatus_number_screening
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_screening: TroubleReportStatus_number = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_screening */

/* START_OF_SYMBOL_DEFINITION screening */
/**
 * @summary TroubleReportStatus_number_screening
 * @constant
 * @type {number}
 */
export const screening: TroubleReportStatus_number = TroubleReportStatus_number_screening; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION screening */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_testing */
/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_testing: TroubleReportStatus_number = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_testing */

/* START_OF_SYMBOL_DEFINITION testing */
/**
 * @summary TroubleReportStatus_number_testing
 * @constant
 * @type {number}
 */
export const testing: TroubleReportStatus_number = TroubleReportStatus_number_testing; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION testing */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_dispatchedIn */
/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_dispatchedIn: TroubleReportStatus_number = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_dispatchedIn */

/* START_OF_SYMBOL_DEFINITION dispatchedIn */
/**
 * @summary TroubleReportStatus_number_dispatchedIn
 * @constant
 * @type {number}
 */
export const dispatchedIn: TroubleReportStatus_number = TroubleReportStatus_number_dispatchedIn; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dispatchedIn */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_dispatchedOut */
/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_dispatchedOut: TroubleReportStatus_number = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_dispatchedOut */

/* START_OF_SYMBOL_DEFINITION dispatchedOut */
/**
 * @summary TroubleReportStatus_number_dispatchedOut
 * @constant
 * @type {number}
 */
export const dispatchedOut: TroubleReportStatus_number = TroubleReportStatus_number_dispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dispatchedOut */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_preassignedOut */
/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_preassignedOut: TroubleReportStatus_number = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_preassignedOut */

/* START_OF_SYMBOL_DEFINITION preassignedOut */
/**
 * @summary TroubleReportStatus_number_preassignedOut
 * @constant
 * @type {number}
 */
export const preassignedOut: TroubleReportStatus_number = TroubleReportStatus_number_preassignedOut; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION preassignedOut */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_bulkDispatchedOut */
/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_bulkDispatchedOut: TroubleReportStatus_number = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_bulkDispatchedOut */

/* START_OF_SYMBOL_DEFINITION bulkDispatchedOut */
/**
 * @summary TroubleReportStatus_number_bulkDispatchedOut
 * @constant
 * @type {number}
 */
export const bulkDispatchedOut: TroubleReportStatus_number = TroubleReportStatus_number_bulkDispatchedOut; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION bulkDispatchedOut */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_startRepair */
/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startRepair: TroubleReportStatus_number = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_startRepair */

/* START_OF_SYMBOL_DEFINITION startRepair */
/**
 * @summary TroubleReportStatus_number_startRepair
 * @constant
 * @type {number}
 */
export const startRepair: TroubleReportStatus_number = TroubleReportStatus_number_startRepair; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION startRepair */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_pendingTest */
/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_pendingTest: TroubleReportStatus_number = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_pendingTest */

/* START_OF_SYMBOL_DEFINITION pendingTest */
/**
 * @summary TroubleReportStatus_number_pendingTest
 * @constant
 * @type {number}
 */
export const pendingTest: TroubleReportStatus_number = TroubleReportStatus_number_pendingTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pendingTest */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_pendingDispatch */
/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_pendingDispatch: TroubleReportStatus_number = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_pendingDispatch */

/* START_OF_SYMBOL_DEFINITION pendingDispatch */
/**
 * @summary TroubleReportStatus_number_pendingDispatch
 * @constant
 * @type {number}
 */
export const pendingDispatch: TroubleReportStatus_number = TroubleReportStatus_number_pendingDispatch; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pendingDispatch */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_requestRepair */
/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_requestRepair: TroubleReportStatus_number = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_requestRepair */

/* START_OF_SYMBOL_DEFINITION requestRepair */
/**
 * @summary TroubleReportStatus_number_requestRepair
 * @constant
 * @type {number}
 */
export const requestRepair: TroubleReportStatus_number = TroubleReportStatus_number_requestRepair; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION requestRepair */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_referMtceCenter */
/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_referMtceCenter: TroubleReportStatus_number = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_referMtceCenter */

/* START_OF_SYMBOL_DEFINITION referMtceCenter */
/**
 * @summary TroubleReportStatus_number_referMtceCenter
 * @constant
 * @type {number}
 */
export const referMtceCenter: TroubleReportStatus_number = TroubleReportStatus_number_referMtceCenter; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION referMtceCenter */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_referVendor */
/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_referVendor: TroubleReportStatus_number = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_referVendor */

/* START_OF_SYMBOL_DEFINITION referVendor */
/**
 * @summary TroubleReportStatus_number_referVendor
 * @constant
 * @type {number}
 */
export const referVendor: TroubleReportStatus_number = TroubleReportStatus_number_referVendor; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION referVendor */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_noAccessOther */
/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_noAccessOther: TroubleReportStatus_number = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_noAccessOther */

/* START_OF_SYMBOL_DEFINITION noAccessOther */
/**
 * @summary TroubleReportStatus_number_noAccessOther
 * @constant
 * @type {number}
 */
export const noAccessOther: TroubleReportStatus_number = TroubleReportStatus_number_noAccessOther; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noAccessOther */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_startNoAccess */
/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startNoAccess: TroubleReportStatus_number = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_startNoAccess */

/* START_OF_SYMBOL_DEFINITION startNoAccess */
/**
 * @summary TroubleReportStatus_number_startNoAccess
 * @constant
 * @type {number}
 */
export const startNoAccess: TroubleReportStatus_number = TroubleReportStatus_number_startNoAccess; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION startNoAccess */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_stopNoAccess */
/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_stopNoAccess: TroubleReportStatus_number = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_stopNoAccess */

/* START_OF_SYMBOL_DEFINITION stopNoAccess */
/**
 * @summary TroubleReportStatus_number_stopNoAccess
 * @constant
 * @type {number}
 */
export const stopNoAccess: TroubleReportStatus_number = TroubleReportStatus_number_stopNoAccess; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stopNoAccess */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_startDelayedMtce */
/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_startDelayedMtce: TroubleReportStatus_number = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_startDelayedMtce */

/* START_OF_SYMBOL_DEFINITION startDelayedMtce */
/**
 * @summary TroubleReportStatus_number_startDelayedMtce
 * @constant
 * @type {number}
 */
export const startDelayedMtce: TroubleReportStatus_number = TroubleReportStatus_number_startDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION startDelayedMtce */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_stopDelayedMtce */
/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_stopDelayedMtce: TroubleReportStatus_number = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_stopDelayedMtce */

/* START_OF_SYMBOL_DEFINITION stopDelayedMtce */
/**
 * @summary TroubleReportStatus_number_stopDelayedMtce
 * @constant
 * @type {number}
 */
export const stopDelayedMtce: TroubleReportStatus_number = TroubleReportStatus_number_stopDelayedMtce; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stopDelayedMtce */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_troubleEscalated */
/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_troubleEscalated: TroubleReportStatus_number = 18; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_troubleEscalated */

/* START_OF_SYMBOL_DEFINITION troubleEscalated */
/**
 * @summary TroubleReportStatus_number_troubleEscalated
 * @constant
 * @type {number}
 */
export const troubleEscalated: TroubleReportStatus_number = TroubleReportStatus_number_troubleEscalated; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION troubleEscalated */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_craftDispatched */
/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_craftDispatched: TroubleReportStatus_number = 19; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_craftDispatched */

/* START_OF_SYMBOL_DEFINITION craftDispatched */
/**
 * @summary TroubleReportStatus_number_craftDispatched
 * @constant
 * @type {number}
 */
export const craftDispatched: TroubleReportStatus_number = TroubleReportStatus_number_craftDispatched; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION craftDispatched */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_temporaryOK */
/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_temporaryOK: TroubleReportStatus_number = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_temporaryOK */

/* START_OF_SYMBOL_DEFINITION temporaryOK */
/**
 * @summary TroubleReportStatus_number_temporaryOK
 * @constant
 * @type {number}
 */
export const temporaryOK: TroubleReportStatus_number = TroubleReportStatus_number_temporaryOK; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION temporaryOK */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_cableFailure */
/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_cableFailure: TroubleReportStatus_number = 21; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_cableFailure */

/* START_OF_SYMBOL_DEFINITION cableFailure */
/**
 * @summary TroubleReportStatus_number_cableFailure
 * @constant
 * @type {number}
 */
export const cableFailure: TroubleReportStatus_number = TroubleReportStatus_number_cableFailure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cableFailure */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_originatingEquipFailure */
/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_originatingEquipFailure: TroubleReportStatus_number = 22; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_originatingEquipFailure */

/* START_OF_SYMBOL_DEFINITION originatingEquipFailure */
/**
 * @summary TroubleReportStatus_number_originatingEquipFailure
 * @constant
 * @type {number}
 */
export const originatingEquipFailure: TroubleReportStatus_number = TroubleReportStatus_number_originatingEquipFailure; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION originatingEquipFailure */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_backOrder */
/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_backOrder: TroubleReportStatus_number = 23; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_backOrder */

/* START_OF_SYMBOL_DEFINITION backOrder */
/**
 * @summary TroubleReportStatus_number_backOrder
 * @constant
 * @type {number}
 */
export const backOrder: TroubleReportStatus_number = TroubleReportStatus_number_backOrder; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION backOrder */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_clearedCustNotAdvised */
/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedCustNotAdvised: TroubleReportStatus_number = 24; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_clearedCustNotAdvised */

/* START_OF_SYMBOL_DEFINITION clearedCustNotAdvised */
/**
 * @summary TroubleReportStatus_number_clearedCustNotAdvised
 * @constant
 * @type {number}
 */
export const clearedCustNotAdvised: TroubleReportStatus_number = TroubleReportStatus_number_clearedCustNotAdvised; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION clearedCustNotAdvised */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_clearedCustAdvised */
/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedCustAdvised: TroubleReportStatus_number = 25; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_clearedCustAdvised */

/* START_OF_SYMBOL_DEFINITION clearedCustAdvised */
/**
 * @summary TroubleReportStatus_number_clearedCustAdvised
 * @constant
 * @type {number}
 */
export const clearedCustAdvised: TroubleReportStatus_number = TroubleReportStatus_number_clearedCustAdvised; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION clearedCustAdvised */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_clearedAwaitingCustVerification */
/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_clearedAwaitingCustVerification: TroubleReportStatus_number = 26; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_clearedAwaitingCustVerification */

/* START_OF_SYMBOL_DEFINITION clearedAwaitingCustVerification */
/**
 * @summary TroubleReportStatus_number_clearedAwaitingCustVerification
 * @constant
 * @type {number}
 */
export const clearedAwaitingCustVerification: TroubleReportStatus_number = TroubleReportStatus_number_clearedAwaitingCustVerification; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION clearedAwaitingCustVerification */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOut */
/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOut: TroubleReportStatus_number = 27; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOut */

/* START_OF_SYMBOL_DEFINITION closedOut */
/**
 * @summary TroubleReportStatus_number_closedOut
 * @constant
 * @type {number}
 */
export const closedOut: TroubleReportStatus_number = TroubleReportStatus_number_closedOut; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION closedOut */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOutByCustReq */
/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutByCustReq: TroubleReportStatus_number = 28; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOutByCustReq */

/* START_OF_SYMBOL_DEFINITION closedOutByCustReq */
/**
 * @summary TroubleReportStatus_number_closedOutByCustReq
 * @constant
 * @type {number}
 */
export const closedOutByCustReq: TroubleReportStatus_number = TroubleReportStatus_number_closedOutByCustReq; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION closedOutByCustReq */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOutCustVerified */
/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutCustVerified: TroubleReportStatus_number = 29; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOutCustVerified */

/* START_OF_SYMBOL_DEFINITION closedOutCustVerified */
/**
 * @summary TroubleReportStatus_number_closedOutCustVerified
 * @constant
 * @type {number}
 */
export const closedOutCustVerified: TroubleReportStatus_number = TroubleReportStatus_number_closedOutCustVerified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION closedOutCustVerified */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOutCustDenied */
/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_closedOutCustDenied: TroubleReportStatus_number = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_closedOutCustDenied */

/* START_OF_SYMBOL_DEFINITION closedOutCustDenied */
/**
 * @summary TroubleReportStatus_number_closedOutCustDenied
 * @constant
 * @type {number}
 */
export const closedOutCustDenied: TroubleReportStatus_number = TroubleReportStatus_number_closedOutCustDenied; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION closedOutCustDenied */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_canceledPendingWorkInProgress */
/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingWorkInProgress: TroubleReportStatus_number = 31; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_canceledPendingWorkInProgress */

/* START_OF_SYMBOL_DEFINITION canceledPendingWorkInProgress */
/**
 * @summary TroubleReportStatus_number_canceledPendingWorkInProgress
 * @constant
 * @type {number}
 */
export const canceledPendingWorkInProgress: TroubleReportStatus_number = TroubleReportStatus_number_canceledPendingWorkInProgress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION canceledPendingWorkInProgress */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_canceledPendingTestCompletion */
/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingTestCompletion: TroubleReportStatus_number = 32; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_canceledPendingTestCompletion */

/* START_OF_SYMBOL_DEFINITION canceledPendingTestCompletion */
/**
 * @summary TroubleReportStatus_number_canceledPendingTestCompletion
 * @constant
 * @type {number}
 */
export const canceledPendingTestCompletion: TroubleReportStatus_number = TroubleReportStatus_number_canceledPendingTestCompletion; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION canceledPendingTestCompletion */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_canceledPendingDispatchCompl */
/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_canceledPendingDispatchCompl: TroubleReportStatus_number = 33; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_canceledPendingDispatchCompl */

/* START_OF_SYMBOL_DEFINITION canceledPendingDispatchCompl */
/**
 * @summary TroubleReportStatus_number_canceledPendingDispatchCompl
 * @constant
 * @type {number}
 */
export const canceledPendingDispatchCompl: TroubleReportStatus_number = TroubleReportStatus_number_canceledPendingDispatchCompl; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION canceledPendingDispatchCompl */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_techOnSite */
/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_techOnSite: TroubleReportStatus_number = 34; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_techOnSite */

/* START_OF_SYMBOL_DEFINITION techOnSite */
/**
 * @summary TroubleReportStatus_number_techOnSite
 * @constant
 * @type {number}
 */
export const techOnSite: TroubleReportStatus_number = TroubleReportStatus_number_techOnSite; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION techOnSite */

/* START_OF_SYMBOL_DEFINITION TroubleReportStatus_number_techLeftSite */
/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export const TroubleReportStatus_number_techLeftSite: TroubleReportStatus_number = 35; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportStatus_number_techLeftSite */

/* START_OF_SYMBOL_DEFINITION techLeftSite */
/**
 * @summary TroubleReportStatus_number_techLeftSite
 * @constant
 * @type {number}
 */
export const techLeftSite: TroubleReportStatus_number = TroubleReportStatus_number_techLeftSite; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION techLeftSite */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportStatus_number */
let _cached_decoder_for_TroubleReportStatus_number: $.ASN1Decoder<TroubleReportStatus_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportStatus_number */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportStatus_number */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportStatus_number
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportStatus_number} The decoded data structure.
 */
export function _decode_TroubleReportStatus_number(el: _Element) {
    if (!_cached_decoder_for_TroubleReportStatus_number) {
        _cached_decoder_for_TroubleReportStatus_number = $._decodeInteger;
    }
    return _cached_decoder_for_TroubleReportStatus_number(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportStatus_number */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportStatus_number */
let _cached_encoder_for_TroubleReportStatus_number: $.ASN1Encoder<TroubleReportStatus_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportStatus_number */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportStatus_number */
/**
 * @summary Encodes a(n) TroubleReportStatus_number into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportStatus_number, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportStatus_number(
    value: TroubleReportStatus_number,
    elGetter: $.ASN1Encoder<TroubleReportStatus_number>
) {
    if (!_cached_encoder_for_TroubleReportStatus_number) {
        _cached_encoder_for_TroubleReportStatus_number = $._encodeInteger;
    }
    return _cached_encoder_for_TroubleReportStatus_number(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportStatus_number */

/* eslint-enable */

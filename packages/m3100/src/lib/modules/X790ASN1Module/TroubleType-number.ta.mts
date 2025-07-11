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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary TroubleType_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleType-number ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TroubleType_number = INTEGER;


/**
 * @summary TroubleType_number_noDialToneGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_noDialToneGroup: TroubleType_number = 100; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDialToneGroup
 * @constant
 * @type {number}
 */
export const noDialToneGroup: TroubleType_number = TroubleType_number_noDialToneGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDialTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_noDialTone: TroubleType_number = 101; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDialTone
 * @constant
 * @type {number}
 */
export const noDialTone: TroubleType_number = TroubleType_number_noDialTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowDialTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_slowDialTone: TroubleType_number = 102; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowDialTone
 * @constant
 * @type {number}
 */
export const slowDialTone: TroubleType_number = TroubleType_number_slowDialTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDead
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitDead: TroubleType_number = 103; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDead
 * @constant
 * @type {number}
 */
export const circuitDead: TroubleType_number = TroubleType_number_circuitDead; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOutGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOutGroup: TroubleType_number = 200; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOutGroup
 * @constant
 * @type {number}
 */
export const canNotCallOutGroup: TroubleType_number = TroubleType_number_canNotCallOutGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOut: TroubleType_number = 201; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut
 * @constant
 * @type {number}
 */
export const canNotCallOut: TroubleType_number = TroubleType_number_canNotCallOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBreakDialTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBreakDialTone: TroubleType_number = 203; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBreakDialTone
 * @constant
 * @type {number}
 */
export const canNotBreakDialTone: TroubleType_number = TroubleType_number_canNotBreakDialTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dialToneAfterDialing
 * @constant
 * @type {number}
 */
export const TroubleType_number_dialToneAfterDialing: TroubleType_number = 204; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dialToneAfterDialing
 * @constant
 * @type {number}
 */
export const dialToneAfterDialing: TroubleType_number = TroubleType_number_dialToneAfterDialing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highAndDry
 * @constant
 * @type {number}
 */
export const TroubleType_number_highAndDry: TroubleType_number = 205; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highAndDry
 * @constant
 * @type {number}
 */
export const highAndDry: TroubleType_number = TroubleType_number_highAndDry; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaise
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaise: TroubleType_number = 206; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaise
 * @constant
 * @type {number}
 */
export const canNotRaise: TroubleType_number = TroubleType_number_canNotRaise; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_allAccessBusy
 * @constant
 * @type {number}
 */
export const TroubleType_number_allAccessBusy: TroubleType_number = 207; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_allAccessBusy
 * @constant
 * @type {number}
 */
export const allAccessBusy: TroubleType_number = TroubleType_number_allAccessBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut2
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOut2: TroubleType_number = 208; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut2
 * @constant
 * @type {number}
 */
export const canNotCallOut2: TroubleType_number = TroubleType_number_canNotCallOut2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallLongDistance
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallLongDistance: TroubleType_number = 209; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallLongDistance
 * @constant
 * @type {number}
 */
export const canNotCallLongDistance: TroubleType_number = TroubleType_number_canNotCallLongDistance; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOverseas
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOverseas: TroubleType_number = 210; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOverseas
 * @constant
 * @type {number}
 */
export const canNotCallOverseas: TroubleType_number = TroubleType_number_canNotCallOverseas; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_speedCall
 * @constant
 * @type {number}
 */
export const TroubleType_number_speedCall: TroubleType_number = 211; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_speedCall
 * @constant
 * @type {number}
 */
export const speedCall: TroubleType_number = TroubleType_number_speedCall; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeCalledGroup: TroubleType_number = 300; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledGroup
 * @constant
 * @type {number}
 */
export const canNotBeCalledGroup: TroubleType_number = TroubleType_number_canNotBeCalledGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalled
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeCalled: TroubleType_number = 301; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalled
 * @constant
 * @type {number}
 */
export const canNotBeCalled: TroubleType_number = TroubleType_number_canNotBeCalled; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledBusy
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeCalledBusy: TroubleType_number = 302; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledBusy
 * @constant
 * @type {number}
 */
export const canNotBeCalledBusy: TroubleType_number = TroubleType_number_canNotBeCalledBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotGetCalled
 * @constant
 * @type {number}
 */
export const TroubleType_number_doNotGetCalled: TroubleType_number = 303; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotGetCalled
 * @constant
 * @type {number}
 */
export const doNotGetCalled: TroubleType_number = TroubleType_number_doNotGetCalled; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTripRing
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotTripRing: TroubleType_number = 304; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTripRing
 * @constant
 * @type {number}
 */
export const canNotTripRing: TroubleType_number = TroubleType_number_canNotTripRing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseRings
 * @constant
 * @type {number}
 */
export const TroubleType_number_falseRings: TroubleType_number = 305; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseRings
 * @constant
 * @type {number}
 */
export const falseRings: TroubleType_number = TroubleType_number_falseRings; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_doNotAnswer: TroubleType_number = 306; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotAnswer
 * @constant
 * @type {number}
 */
export const doNotAnswer: TroubleType_number = TroubleType_number_doNotAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachRecording
 * @constant
 * @type {number}
 */
export const TroubleType_number_reachRecording: TroubleType_number = 307; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachRecording
 * @constant
 * @type {number}
 */
export const reachRecording: TroubleType_number = TroubleType_number_reachRecording; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseAStation
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaiseAStation: TroubleType_number = 308; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseAStation
 * @constant
 * @type {number}
 */
export const canNotRaiseAStation: TroubleType_number = TroubleType_number_canNotRaiseAStation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseADrop
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaiseADrop: TroubleType_number = 309; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseADrop
 * @constant
 * @type {number}
 */
export const canNotRaiseADrop: TroubleType_number = TroubleType_number_canNotRaiseADrop; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseACircuitLocation
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaiseACircuitLocation: TroubleType_number = 310; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseACircuitLocation
 * @constant
 * @type {number}
 */
export const canNotRaiseACircuitLocation: TroubleType_number = TroubleType_number_canNotRaiseACircuitLocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ringNoAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_ringNoAnswer: TroubleType_number = 311; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ringNoAnswer
 * @constant
 * @type {number}
 */
export const ringNoAnswer: TroubleType_number = TroubleType_number_ringNoAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reorder
 * @constant
 * @type {number}
 */
export const TroubleType_number_reorder: TroubleType_number = 312; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reorder
 * @constant
 * @type {number}
 */
export const reorder: TroubleType_number = TroubleType_number_reorder; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alwaysBusy
 * @constant
 * @type {number}
 */
export const TroubleType_number_alwaysBusy: TroubleType_number = 313; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alwaysBusy
 * @constant
 * @type {number}
 */
export const alwaysBusy: TroubleType_number = TroubleType_number_alwaysBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellDoesNotRing: TroubleType_number = 314; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing
 * @constant
 * @type {number}
 */
export const bellDoesNotRing: TroubleType_number = TroubleType_number_bellDoesNotRing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing2
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellDoesNotRing2: TroubleType_number = 315; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing2
 * @constant
 * @type {number}
 */
export const bellDoesNotRing2: TroubleType_number = TroubleType_number_bellDoesNotRing2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsCanNotAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellRingsCanNotAnswer: TroubleType_number = 316; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsCanNotAnswer
 * @constant
 * @type {number}
 */
export const bellRingsCanNotAnswer: TroubleType_number = TroubleType_number_bellRingsCanNotAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsAfterAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellRingsAfterAnswer: TroubleType_number = 317; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsAfterAnswer
 * @constant
 * @type {number}
 */
export const bellRingsAfterAnswer: TroubleType_number = TroubleType_number_bellRingsAfterAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingNoAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_noRingNoAnswer: TroubleType_number = 318; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingNoAnswer
 * @constant
 * @type {number}
 */
export const noRingNoAnswer: TroubleType_number = TroubleType_number_noRingNoAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherRingTrouble
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherRingTrouble: TroubleType_number = 319; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherRingTrouble
 * @constant
 * @type {number}
 */
export const otherRingTrouble: TroubleType_number = TroubleType_number_otherRingTrouble; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_receivesCallsForWrongNumber
 * @constant
 * @type {number}
 */
export const TroubleType_number_receivesCallsForWrongNumber: TroubleType_number = 320; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_receivesCallsForWrongNumber
 * @constant
 * @type {number}
 */
export const receivesCallsForWrongNumber: TroubleType_number = TroubleType_number_receivesCallsForWrongNumber; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_recordingOnLine: TroubleType_number = 321; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnLine
 * @constant
 * @type {number}
 */
export const recordingOnLine: TroubleType_number = TroubleType_number_recordingOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeardGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeHeardGroup: TroubleType_number = 400; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeardGroup
 * @constant
 * @type {number}
 */
export const canNotBeHeardGroup: TroubleType_number = TroubleType_number_canNotBeHeardGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeard
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeHeard: TroubleType_number = 401; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeard
 * @constant
 * @type {number}
 */
export const canNotBeHeard: TroubleType_number = TroubleType_number_canNotBeHeard; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotHear
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotHear: TroubleType_number = 402; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotHear
 * @constant
 * @type {number}
 */
export const canNotHear: TroubleType_number = TroubleType_number_canNotHear; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_fading
 * @constant
 * @type {number}
 */
export const TroubleType_number_fading: TroubleType_number = 403; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_fading
 * @constant
 * @type {number}
 */
export const fading: TroubleType_number = TroubleType_number_fading; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_distant
 * @constant
 * @type {number}
 */
export const TroubleType_number_distant: TroubleType_number = 404; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_distant
 * @constant
 * @type {number}
 */
export const distant: TroubleType_number = TroubleType_number_distant; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachedWrongNumberGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_reachedWrongNumberGroup: TroubleType_number = 500; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachedWrongNumberGroup
 * @constant
 * @type {number}
 */
export const reachedWrongNumberGroup: TroubleType_number = TroubleType_number_reachedWrongNumberGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wrongNumber
 * @constant
 * @type {number}
 */
export const TroubleType_number_wrongNumber: TroubleType_number = 501; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wrongNumber
 * @constant
 * @type {number}
 */
export const wrongNumber: TroubleType_number = TroubleType_number_wrongNumber; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitOperationGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitOperationGroup: TroubleType_number = 600; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitOperationGroup
 * @constant
 * @type {number}
 */
export const circuitOperationGroup: TroubleType_number = TroubleType_number_circuitOperationGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_open
 * @constant
 * @type {number}
 */
export const TroubleType_number_open: TroubleType_number = 601; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_open
 * @constant
 * @type {number}
 */
export const open: TroubleType_number = TroubleType_number_open; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseDisconnect
 * @constant
 * @type {number}
 */
export const TroubleType_number_falseDisconnect: TroubleType_number = 602; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseDisconnect
 * @constant
 * @type {number}
 */
export const falseDisconnect: TroubleType_number = TroubleType_number_falseDisconnect; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_grounded
 * @constant
 * @type {number}
 */
export const TroubleType_number_grounded: TroubleType_number = 603; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_grounded
 * @constant
 * @type {number}
 */
export const grounded: TroubleType_number = TroubleType_number_grounded; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeSignalled
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeSignalled: TroubleType_number = 604; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeSignalled
 * @constant
 * @type {number}
 */
export const canNotBeSignalled: TroubleType_number = TroubleType_number_canNotBeSignalled; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSignal
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotSignal: TroubleType_number = 605; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSignal
 * @constant
 * @type {number}
 */
export const canNotSignal: TroubleType_number = TroubleType_number_canNotSignal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_permanentSignal
 * @constant
 * @type {number}
 */
export const TroubleType_number_permanentSignal: TroubleType_number = 606; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_permanentSignal
 * @constant
 * @type {number}
 */
export const permanentSignal: TroubleType_number = TroubleType_number_permanentSignal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_improperSupervision
 * @constant
 * @type {number}
 */
export const TroubleType_number_improperSupervision: TroubleType_number = 607; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_improperSupervision
 * @constant
 * @type {number}
 */
export const improperSupervision: TroubleType_number = TroubleType_number_improperSupervision; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_supervision
 * @constant
 * @type {number}
 */
export const TroubleType_number_supervision: TroubleType_number = 608; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_supervision
 * @constant
 * @type {number}
 */
export const supervision: TroubleType_number = TroubleType_number_supervision; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotMeet
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotMeet: TroubleType_number = 609; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotMeet
 * @constant
 * @type {number}
 */
export const canNotMeet: TroubleType_number = TroubleType_number_canNotMeet; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReleaseCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotReleaseCircuit: TroubleType_number = 610; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReleaseCircuit
 * @constant
 * @type {number}
 */
export const canNotReleaseCircuit: TroubleType_number = TroubleType_number_canNotReleaseCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hungUp
 * @constant
 * @type {number}
 */
export const TroubleType_number_hungUp: TroubleType_number = 611; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hungUp
 * @constant
 * @type {number}
 */
export const hungUp: TroubleType_number = TroubleType_number_hungUp; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noWinkStart
 * @constant
 * @type {number}
 */
export const TroubleType_number_noWinkStart: TroubleType_number = 612; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noWinkStart
 * @constant
 * @type {number}
 */
export const noWinkStart: TroubleType_number = TroubleType_number_noWinkStart; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSF
 * @constant
 * @type {number}
 */
export const TroubleType_number_noSF: TroubleType_number = 613; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSF
 * @constant
 * @type {number}
 */
export const noSF: TroubleType_number = TroubleType_number_noSF; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowSF
 * @constant
 * @type {number}
 */
export const TroubleType_number_lowSF: TroubleType_number = 614; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowSF
 * @constant
 * @type {number}
 */
export const lowSF: TroubleType_number = TroubleType_number_lowSF; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noContinuity
 * @constant
 * @type {number}
 */
export const TroubleType_number_noContinuity: TroubleType_number = 615; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noContinuity
 * @constant
 * @type {number}
 */
export const noContinuity: TroubleType_number = TroubleType_number_noContinuity; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutCable
 * @constant
 * @type {number}
 */
export const TroubleType_number_cutCable: TroubleType_number = 616; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutCable
 * @constant
 * @type {number}
 */
export const cutCable: TroubleType_number = TroubleType_number_cutCable; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openToDEMARC
 * @constant
 * @type {number}
 */
export const TroubleType_number_openToDEMARC: TroubleType_number = 617; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openToDEMARC
 * @constant
 * @type {number}
 */
export const openToDEMARC: TroubleType_number = TroubleType_number_openToDEMARC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingGenerator
 * @constant
 * @type {number}
 */
export const TroubleType_number_noRingGenerator: TroubleType_number = 618; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingGenerator
 * @constant
 * @type {number}
 */
export const noRingGenerator: TroubleType_number = TroubleType_number_noRingGenerator; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_badERL
 * @constant
 * @type {number}
 */
export const TroubleType_number_badERL: TroubleType_number = 619; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_badERL
 * @constant
 * @type {number}
 */
export const badERL: TroubleType_number = TroubleType_number_badERL; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_echo
 * @constant
 * @type {number}
 */
export const TroubleType_number_echo: TroubleType_number = 620; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_echo
 * @constant
 * @type {number}
 */
export const echo: TroubleType_number = TroubleType_number_echo; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hollow
 * @constant
 * @type {number}
 */
export const TroubleType_number_hollow: TroubleType_number = 621; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hollow
 * @constant
 * @type {number}
 */
export const hollow: TroubleType_number = TroubleType_number_hollow; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDeadNoActivity
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitDeadNoActivity: TroubleType_number = 622; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDeadNoActivity
 * @constant
 * @type {number}
 */
export const circuitDeadNoActivity: TroubleType_number = TroubleType_number_circuitDeadNoActivity; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitDown: TroubleType_number = 623; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDown
 * @constant
 * @type {number}
 */
export const circuitDown: TroubleType_number = TroubleType_number_circuitDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_failingCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_failingCircuit: TroubleType_number = 624; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_failingCircuit
 * @constant
 * @type {number}
 */
export const failingCircuit: TroubleType_number = TroubleType_number_failingCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSignal
 * @constant
 * @type {number}
 */
export const TroubleType_number_noSignal: TroubleType_number = 625; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSignal
 * @constant
 * @type {number}
 */
export const noSignal: TroubleType_number = TroubleType_number_noSignal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_seizureOnCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_seizureOnCircuit: TroubleType_number = 626; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_seizureOnCircuit
 * @constant
 * @type {number}
 */
export const seizureOnCircuit: TroubleType_number = TroubleType_number_seizureOnCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const TroubleType_number_lossEPSCSorSwitchedServices: TroubleType_number = 627; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const lossEPSCSorSwitchedServices: TroubleType_number = TroubleType_number_lossEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_monitorCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_monitorCircuit: TroubleType_number = 628; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_monitorCircuit
 * @constant
 * @type {number}
 */
export const monitorCircuit: TroubleType_number = TroubleType_number_monitorCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_newServiceNotWorking
 * @constant
 * @type {number}
 */
export const TroubleType_number_newServiceNotWorking: TroubleType_number = 629; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_newServiceNotWorking
 * @constant
 * @type {number}
 */
export const newServiceNotWorking: TroubleType_number = TroubleType_number_newServiceNotWorking; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const TroubleType_number_openEPSCSorSwitchedServices: TroubleType_number = 630; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const openEPSCSorSwitchedServices: TroubleType_number = TroubleType_number_openEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherVoiceDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherVoiceDescribeAdditInfo: TroubleType_number = 631; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherVoiceDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const otherVoiceDescribeAdditInfo: TroubleType_number = TroubleType_number_otherVoiceDescribeAdditInfo; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutOffsGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_cutOffsGroup: TroubleType_number = 700; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutOffsGroup
 * @constant
 * @type {number}
 */
export const cutOffsGroup: TroubleType_number = TroubleType_number_cutOffsGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutsOff
 * @constant
 * @type {number}
 */
export const TroubleType_number_cutsOff: TroubleType_number = 701; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutsOff
 * @constant
 * @type {number}
 */
export const cutsOff: TroubleType_number = TroubleType_number_cutsOff; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseProblemGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_noiseProblemGroup: TroubleType_number = 800; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseProblemGroup
 * @constant
 * @type {number}
 */
export const noiseProblemGroup: TroubleType_number = TroubleType_number_noiseProblemGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_intermittentNoise
 * @constant
 * @type {number}
 */
export const TroubleType_number_intermittentNoise: TroubleType_number = 801; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_intermittentNoise
 * @constant
 * @type {number}
 */
export const intermittentNoise: TroubleType_number = TroubleType_number_intermittentNoise; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noisy
 * @constant
 * @type {number}
 */
export const TroubleType_number_noisy: TroubleType_number = 802; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noisy
 * @constant
 * @type {number}
 */
export const noisy: TroubleType_number = TroubleType_number_noisy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_foreignTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_foreignTone: TroubleType_number = 803; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_foreignTone
 * @constant
 * @type {number}
 */
export const foreignTone: TroubleType_number = TroubleType_number_foreignTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clipping
 * @constant
 * @type {number}
 */
export const TroubleType_number_clipping: TroubleType_number = 804; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clipping
 * @constant
 * @type {number}
 */
export const clipping: TroubleType_number = TroubleType_number_clipping; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossTalk
 * @constant
 * @type {number}
 */
export const TroubleType_number_crossTalk: TroubleType_number = 805; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossTalk
 * @constant
 * @type {number}
 */
export const crossTalk: TroubleType_number = TroubleType_number_crossTalk; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_staticOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_staticOnLine: TroubleType_number = 806; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_staticOnLine
 * @constant
 * @type {number}
 */
export const staticOnLine: TroubleType_number = TroubleType_number_staticOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_groundHum
 * @constant
 * @type {number}
 */
export const TroubleType_number_groundHum: TroubleType_number = 807; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_groundHum
 * @constant
 * @type {number}
 */
export const groundHum: TroubleType_number = TroubleType_number_groundHum; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hearsOtherOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_hearsOtherOnLine: TroubleType_number = 808; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hearsOtherOnLine
 * @constant
 * @type {number}
 */
export const hearsOtherOnLine: TroubleType_number = TroubleType_number_hearsOtherOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_humOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_humOnLine: TroubleType_number = 809; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_humOnLine
 * @constant
 * @type {number}
 */
export const humOnLine: TroubleType_number = TroubleType_number_humOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clicking
 * @constant
 * @type {number}
 */
export const TroubleType_number_clicking: TroubleType_number = 810; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clicking
 * @constant
 * @type {number}
 */
export const clicking: TroubleType_number = TroubleType_number_clicking; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const TroubleType_number_noiseEPSCSorSwitchedServices: TroubleType_number = 811; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const noiseEPSCSorSwitchedServices: TroubleType_number = TroubleType_number_noiseEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_levelTroublesGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_levelTroublesGroup: TroubleType_number = 900; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_levelTroublesGroup
 * @constant
 * @type {number}
 */
export const levelTroublesGroup: TroubleType_number = TroubleType_number_levelTroublesGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_lowLevels: TroubleType_number = 901; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowLevels
 * @constant
 * @type {number}
 */
export const lowLevels: TroubleType_number = TroubleType_number_lowLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_highLevels: TroubleType_number = 902; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highLevels
 * @constant
 * @type {number}
 */
export const highLevels: TroubleType_number = TroubleType_number_highLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_longLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_longLevels: TroubleType_number = 903; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_longLevels
 * @constant
 * @type {number}
 */
export const longLevels: TroubleType_number = TroubleType_number_longLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hotLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_hotLevels: TroubleType_number = 904; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hotLevels
 * @constant
 * @type {number}
 */
export const hotLevels: TroubleType_number = TroubleType_number_hotLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highEndRollOff
 * @constant
 * @type {number}
 */
export const TroubleType_number_highEndRollOff: TroubleType_number = 905; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highEndRollOff
 * @constant
 * @type {number}
 */
export const highEndRollOff: TroubleType_number = TroubleType_number_highEndRollOff; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowEndRollOff
 * @constant
 * @type {number}
 */
export const TroubleType_number_lowEndRollOff: TroubleType_number = 906; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowEndRollOff
 * @constant
 * @type {number}
 */
export const lowEndRollOff: TroubleType_number = TroubleType_number_lowEndRollOff; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_needsEqualized
 * @constant
 * @type {number}
 */
export const TroubleType_number_needsEqualized: TroubleType_number = 907; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_needsEqualized
 * @constant
 * @type {number}
 */
export const needsEqualized: TroubleType_number = TroubleType_number_needsEqualized; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lineLoss
 * @constant
 * @type {number}
 */
export const TroubleType_number_lineLoss: TroubleType_number = 908; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lineLoss
 * @constant
 * @type {number}
 */
export const lineLoss: TroubleType_number = TroubleType_number_lineLoss; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doesNotPassFreqResponse
 * @constant
 * @type {number}
 */
export const TroubleType_number_doesNotPassFreqResponse: TroubleType_number = 909; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doesNotPassFreqResponse
 * @constant
 * @type {number}
 */
export const doesNotPassFreqResponse: TroubleType_number = TroubleType_number_doesNotPassFreqResponse; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_miscellaneousTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_miscellaneousTroubleGroup: TroubleType_number = 1000; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_miscellaneousTroubleGroup
 * @constant
 * @type {number}
 */
export const miscellaneousTroubleGroup: TroubleType_number = TroubleType_number_miscellaneousTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hiCapDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_hiCapDown: TroubleType_number = 1001; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hiCapDown
 * @constant
 * @type {number}
 */
export const hiCapDown: TroubleType_number = TroubleType_number_hiCapDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_carrierDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_carrierDown: TroubleType_number = 1002; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_carrierDown
 * @constant
 * @type {number}
 */
export const carrierDown: TroubleType_number = TroubleType_number_carrierDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_biPolarViolations
 * @constant
 * @type {number}
 */
export const TroubleType_number_biPolarViolations: TroubleType_number = 1003; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_biPolarViolations
 * @constant
 * @type {number}
 */
export const biPolarViolations: TroubleType_number = TroubleType_number_biPolarViolations; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameErrorsHiCap
 * @constant
 * @type {number}
 */
export const TroubleType_number_frameErrorsHiCap: TroubleType_number = 1004; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameErrorsHiCap
 * @constant
 * @type {number}
 */
export const frameErrorsHiCap: TroubleType_number = TroubleType_number_frameErrorsHiCap; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfFrame
 * @constant
 * @type {number}
 */
export const TroubleType_number_outOfFrame: TroubleType_number = 1005; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfFrame
 * @constant
 * @type {number}
 */
export const outOfFrame: TroubleType_number = TroubleType_number_outOfFrame; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossOfSync
 * @constant
 * @type {number}
 */
export const TroubleType_number_lossOfSync: TroubleType_number = 1006; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossOfSync
 * @constant
 * @type {number}
 */
export const lossOfSync: TroubleType_number = TroubleType_number_lossOfSync; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameSlips
 * @constant
 * @type {number}
 */
export const TroubleType_number_frameSlips: TroubleType_number = 1007; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameSlips
 * @constant
 * @type {number}
 */
export const frameSlips: TroubleType_number = TroubleType_number_frameSlips; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noLoopback
 * @constant
 * @type {number}
 */
export const TroubleType_number_noLoopback: TroubleType_number = 1008; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noLoopback
 * @constant
 * @type {number}
 */
export const noLoopback: TroubleType_number = TroubleType_number_noLoopback; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotLoopbackDEMARC
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotLoopbackDEMARC: TroubleType_number = 1009; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotLoopbackDEMARC
 * @constant
 * @type {number}
 */
export const canNotLoopbackDEMARC: TroubleType_number = TroubleType_number_canNotLoopbackDEMARC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_recordingOnCircuit: TroubleType_number = 1010; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnCircuit
 * @constant
 * @type {number}
 */
export const recordingOnCircuit: TroubleType_number = TroubleType_number_recordingOnCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_linesNeedTagging
 * @constant
 * @type {number}
 */
export const TroubleType_number_linesNeedTagging: TroubleType_number = 1011; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_linesNeedTagging
 * @constant
 * @type {number}
 */
export const linesNeedTagging: TroubleType_number = TroubleType_number_linesNeedTagging; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outwatsRingingin
 * @constant
 * @type {number}
 */
export const TroubleType_number_outwatsRingingin: TroubleType_number = 1012; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outwatsRingingin
 * @constant
 * @type {number}
 */
export const outwatsRingingin: TroubleType_number = TroubleType_number_outwatsRingingin; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_remoteAccess
 * @constant
 * @type {number}
 */
export const TroubleType_number_remoteAccess: TroubleType_number = 1013; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_remoteAccess
 * @constant
 * @type {number}
 */
export const remoteAccess: TroubleType_number = TroubleType_number_remoteAccess; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_other
 * @constant
 * @type {number}
 */
export const TroubleType_number_other: TroubleType_number = 1014; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_other
 * @constant
 * @type {number}
 */
export const other: TroubleType_number = TroubleType_number_other; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alarm
 * @constant
 * @type {number}
 */
export const TroubleType_number_alarm: TroubleType_number = 1015; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alarm
 * @constant
 * @type {number}
 */
export const alarm: TroubleType_number = TroubleType_number_alarm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_memoryServiceProblemGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_memoryServiceProblemGroup: TroubleType_number = 1100; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_memoryServiceProblemGroup
 * @constant
 * @type {number}
 */
export const memoryServiceProblemGroup: TroubleType_number = TroubleType_number_memoryServiceProblemGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataTroubleGroup: TroubleType_number = 1200; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataTroubleGroup
 * @constant
 * @type {number}
 */
export const dataTroubleGroup: TroubleType_number = TroubleType_number_dataTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReceiveData
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotReceiveData: TroubleType_number = 1201; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReceiveData
 * @constant
 * @type {number}
 */
export const canNotReceiveData: TroubleType_number = TroubleType_number_canNotReceiveData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSendData
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotSendData: TroubleType_number = 1202; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSendData
 * @constant
 * @type {number}
 */
export const canNotSendData: TroubleType_number = TroubleType_number_canNotSendData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTransmitCanNotReceive
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotTransmitCanNotReceive: TroubleType_number = 1203; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTransmitCanNotReceive
 * @constant
 * @type {number}
 */
export const canNotTransmitCanNotReceive: TroubleType_number = TroubleType_number_canNotTransmitCanNotReceive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noReceive
 * @constant
 * @type {number}
 */
export const TroubleType_number_noReceive: TroubleType_number = 1204; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noReceive
 * @constant
 * @type {number}
 */
export const noReceive: TroubleType_number = TroubleType_number_noReceive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noResponse
 * @constant
 * @type {number}
 */
export const TroubleType_number_noResponse: TroubleType_number = 1205; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noResponse
 * @constant
 * @type {number}
 */
export const noResponse: TroubleType_number = TroubleType_number_noResponse; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_delay
 * @constant
 * @type {number}
 */
export const TroubleType_number_delay: TroubleType_number = 1206; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_delay
 * @constant
 * @type {number}
 */
export const delay: TroubleType_number = TroubleType_number_delay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_impulseNoise
 * @constant
 * @type {number}
 */
export const TroubleType_number_impulseNoise: TroubleType_number = 1207; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_impulseNoise
 * @constant
 * @type {number}
 */
export const impulseNoise: TroubleType_number = TroubleType_number_impulseNoise; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_phaseJitter
 * @constant
 * @type {number}
 */
export const TroubleType_number_phaseJitter: TroubleType_number = 1208; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_phaseJitter
 * @constant
 * @type {number}
 */
export const phaseJitter: TroubleType_number = TroubleType_number_phaseJitter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_harmonicDistortion
 * @constant
 * @type {number}
 */
export const TroubleType_number_harmonicDistortion: TroubleType_number = 1209; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_harmonicDistortion
 * @constant
 * @type {number}
 */
export const harmonicDistortion: TroubleType_number = TroubleType_number_harmonicDistortion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highDistortion
 * @constant
 * @type {number}
 */
export const TroubleType_number_highDistortion: TroubleType_number = 1210; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highDistortion
 * @constant
 * @type {number}
 */
export const highDistortion: TroubleType_number = TroubleType_number_highDistortion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDataLoopback
 * @constant
 * @type {number}
 */
export const TroubleType_number_noDataLoopback: TroubleType_number = 1211; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDataLoopback
 * @constant
 * @type {number}
 */
export const noDataLoopback: TroubleType_number = TroubleType_number_noDataLoopback; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noCarrier
 * @constant
 * @type {number}
 */
export const TroubleType_number_noCarrier: TroubleType_number = 1212; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noCarrier
 * @constant
 * @type {number}
 */
export const noCarrier: TroubleType_number = TroubleType_number_noCarrier; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_notPolling
 * @constant
 * @type {number}
 */
export const TroubleType_number_notPolling: TroubleType_number = 1213; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_notPolling
 * @constant
 * @type {number}
 */
export const notPolling: TroubleType_number = TroubleType_number_notPolling; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataFramingErrors
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataFramingErrors: TroubleType_number = 1214; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataFramingErrors
 * @constant
 * @type {number}
 */
export const dataFramingErrors: TroubleType_number = TroubleType_number_dataFramingErrors; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dropOuts
 * @constant
 * @type {number}
 */
export const TroubleType_number_dropOuts: TroubleType_number = 1215; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dropOuts
 * @constant
 * @type {number}
 */
export const dropOuts: TroubleType_number = TroubleType_number_dropOuts; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hits
 * @constant
 * @type {number}
 */
export const TroubleType_number_hits: TroubleType_number = 1216; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hits
 * @constant
 * @type {number}
 */
export const hits: TroubleType_number = TroubleType_number_hits; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noAnswerBack
 * @constant
 * @type {number}
 */
export const TroubleType_number_noAnswerBack: TroubleType_number = 1217; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noAnswerBack
 * @constant
 * @type {number}
 */
export const noAnswerBack: TroubleType_number = TroubleType_number_noAnswerBack; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_streamer
 * @constant
 * @type {number}
 */
export const TroubleType_number_streamer: TroubleType_number = 1218; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_streamer
 * @constant
 * @type {number}
 */
export const streamer: TroubleType_number = TroubleType_number_streamer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfSpecification
 * @constant
 * @type {number}
 */
export const TroubleType_number_outOfSpecification: TroubleType_number = 1219; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfSpecification
 * @constant
 * @type {number}
 */
export const outOfSpecification: TroubleType_number = TroubleType_number_outOfSpecification; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToCSU
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRunToCSU: TroubleType_number = 1220; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToCSU
 * @constant
 * @type {number}
 */
export const canNotRunToCSU: TroubleType_number = TroubleType_number_canNotRunToCSU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToOSU
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRunToOSU: TroubleType_number = 1221; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToOSU
 * @constant
 * @type {number}
 */
export const canNotRunToOSU: TroubleType_number = TroubleType_number_canNotRunToOSU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_deadDataCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_deadDataCircuit: TroubleType_number = 1222; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_deadDataCircuit
 * @constant
 * @type {number}
 */
export const deadDataCircuit: TroubleType_number = TroubleType_number_deadDataCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitInLoopback
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitInLoopback: TroubleType_number = 1223; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitInLoopback
 * @constant
 * @type {number}
 */
export const circuitInLoopback: TroubleType_number = TroubleType_number_circuitInLoopback; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_errors
 * @constant
 * @type {number}
 */
export const TroubleType_number_errors: TroubleType_number = 1224; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_errors
 * @constant
 * @type {number}
 */
export const errors: TroubleType_number = TroubleType_number_errors; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_garbledData
 * @constant
 * @type {number}
 */
export const TroubleType_number_garbledData: TroubleType_number = 1225; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_garbledData
 * @constant
 * @type {number}
 */
export const garbledData: TroubleType_number = TroubleType_number_garbledData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_invalidData
 * @constant
 * @type {number}
 */
export const TroubleType_number_invalidData: TroubleType_number = 1226; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_invalidData
 * @constant
 * @type {number}
 */
export const invalidData: TroubleType_number = TroubleType_number_invalidData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossModulation
 * @constant
 * @type {number}
 */
export const TroubleType_number_crossModulation: TroubleType_number = 1227; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossModulation
 * @constant
 * @type {number}
 */
export const crossModulation: TroubleType_number = TroubleType_number_crossModulation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowResponse
 * @constant
 * @type {number}
 */
export const TroubleType_number_slowResponse: TroubleType_number = 1228; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowResponse
 * @constant
 * @type {number}
 */
export const slowResponse: TroubleType_number = TroubleType_number_slowResponse; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherDataDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherDataDescribeAdditInfo: TroubleType_number = 1229; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherDataDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const otherDataDescribeAdditInfo: TroubleType_number = TroubleType_number_otherDataDescribeAdditInfo; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_gettingAllOnes
 * @constant
 * @type {number}
 */
export const TroubleType_number_gettingAllOnes: TroubleType_number = 1230; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_gettingAllOnes
 * @constant
 * @type {number}
 */
export const gettingAllOnes: TroubleType_number = TroubleType_number_gettingAllOnes; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slip
 * @constant
 * @type {number}
 */
export const TroubleType_number_slip: TroubleType_number = 1231; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slip
 * @constant
 * @type {number}
 */
export const slip: TroubleType_number = TroubleType_number_slip; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_stationTroubleGroup: TroubleType_number = 1300; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationTroubleGroup
 * @constant
 * @type {number}
 */
export const stationTroubleGroup: TroubleType_number = TroubleType_number_stationTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_voiceEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_voiceEquipment: TroubleType_number = 1301; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_voiceEquipment
 * @constant
 * @type {number}
 */
export const voiceEquipment: TroubleType_number = TroubleType_number_voiceEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataEquipment: TroubleType_number = 1302; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataEquipment
 * @constant
 * @type {number}
 */
export const dataEquipment: TroubleType_number = TroubleType_number_dataEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_videoEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_videoEquipment: TroubleType_number = 1303; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_videoEquipment
 * @constant
 * @type {number}
 */
export const videoEquipment: TroubleType_number = TroubleType_number_videoEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherEquipment: TroubleType_number = 1304; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherEquipment
 * @constant
 * @type {number}
 */
export const otherEquipment: TroubleType_number = TroubleType_number_otherEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationWiring
 * @constant
 * @type {number}
 */
export const TroubleType_number_stationWiring: TroubleType_number = 1305; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationWiring
 * @constant
 * @type {number}
 */
export const stationWiring: TroubleType_number = TroubleType_number_stationWiring; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_physicalTroubleGroup: TroubleType_number = 1400; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalTroubleGroup
 * @constant
 * @type {number}
 */
export const physicalTroubleGroup: TroubleType_number = TroubleType_number_physicalTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lightBurnedOut
 * @constant
 * @type {number}
 */
export const TroubleType_number_lightBurnedOut: TroubleType_number = 1401; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lightBurnedOut
 * @constant
 * @type {number}
 */
export const lightBurnedOut: TroubleType_number = TroubleType_number_lightBurnedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataset
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataset: TroubleType_number = 1402; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataset
 * @constant
 * @type {number}
 */
export const dataset: TroubleType_number = TroubleType_number_dataset; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ttySet
 * @constant
 * @type {number}
 */
export const TroubleType_number_ttySet: TroubleType_number = 1403; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ttySet
 * @constant
 * @type {number}
 */
export const ttySet: TroubleType_number = TroubleType_number_ttySet; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highSpeedPrinter
 * @constant
 * @type {number}
 */
export const TroubleType_number_highSpeedPrinter: TroubleType_number = 1404; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highSpeedPrinter
 * @constant
 * @type {number}
 */
export const highSpeedPrinter: TroubleType_number = TroubleType_number_highSpeedPrinter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aNI
 * @constant
 * @type {number}
 */
export const TroubleType_number_aNI: TroubleType_number = 1405; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aNI
 * @constant
 * @type {number}
 */
export const aNI: TroubleType_number = TroubleType_number_aNI; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aLI
 * @constant
 * @type {number}
 */
export const TroubleType_number_aLI: TroubleType_number = 1406; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aLI
 * @constant
 * @type {number}
 */
export const aLI: TroubleType_number = TroubleType_number_aLI; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotActivatePC
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotActivatePC: TroubleType_number = 1407; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotActivatePC
 * @constant
 * @type {number}
 */
export const canNotActivatePC: TroubleType_number = TroubleType_number_canNotActivatePC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_modem
 * @constant
 * @type {number}
 */
export const TroubleType_number_modem: TroubleType_number = 1408; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_modem
 * @constant
 * @type {number}
 */
export const modem: TroubleType_number = TroubleType_number_modem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cathodeRayTube
 * @constant
 * @type {number}
 */
export const TroubleType_number_cathodeRayTube: TroubleType_number = 1409; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cathodeRayTube
 * @constant
 * @type {number}
 */
export const cathodeRayTube: TroubleType_number = TroubleType_number_cathodeRayTube; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_looseJack
 * @constant
 * @type {number}
 */
export const TroubleType_number_looseJack: TroubleType_number = 1410; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_looseJack
 * @constant
 * @type {number}
 */
export const looseJack: TroubleType_number = TroubleType_number_looseJack; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_offHook
 * @constant
 * @type {number}
 */
export const TroubleType_number_offHook: TroubleType_number = 1411; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_offHook
 * @constant
 * @type {number}
 */
export const offHook: TroubleType_number = TroubleType_number_offHook; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_physicalProblem: TroubleType_number = 1412; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalProblem
 * @constant
 * @type {number}
 */
export const physicalProblem: TroubleType_number = TroubleType_number_physicalProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_processorDead
 * @constant
 * @type {number}
 */
export const TroubleType_number_processorDead: TroubleType_number = 1413; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_processorDead
 * @constant
 * @type {number}
 */
export const processorDead: TroubleType_number = TroubleType_number_processorDead; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wiringProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_wiringProblem: TroubleType_number = 1414; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wiringProblem
 * @constant
 * @type {number}
 */
export const wiringProblem: TroubleType_number = TroubleType_number_wiringProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wireBrokeSetBrokePoleDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_wireBrokeSetBrokePoleDown: TroubleType_number = 1415; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wireBrokeSetBrokePoleDown
 * @constant
 * @type {number}
 */
export const wireBrokeSetBrokePoleDown: TroubleType_number = TroubleType_number_wireBrokeSetBrokePoleDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRegister
 * @constant
 * @type {number}
 */
export const TroubleType_number_noRegister: TroubleType_number = 1416; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRegister
 * @constant
 * @type {number}
 */
export const noRegister: TroubleType_number = TroubleType_number_noRegister; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stuckSender
 * @constant
 * @type {number}
 */
export const TroubleType_number_stuckSender: TroubleType_number = 1417; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stuckSender
 * @constant
 * @type {number}
 */
export const stuckSender: TroubleType_number = TroubleType_number_stuckSender; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherStationTrouble
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherStationTrouble: TroubleType_number = 1418; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherStationTrouble
 * @constant
 * @type {number}
 */
export const otherStationTrouble: TroubleType_number = TroubleType_number_otherStationTrouble; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherCaseGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherCaseGroup: TroubleType_number = 1500; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherCaseGroup
 * @constant
 * @type {number}
 */
export const otherCaseGroup: TroubleType_number = TroubleType_number_otherCaseGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callTransferProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_callTransferProblem: TroubleType_number = 1501; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callTransferProblem
 * @constant
 * @type {number}
 */
export const callTransferProblem: TroubleType_number = TroubleType_number_callTransferProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callWaitingProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_callWaitingProblem: TroubleType_number = 1502; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callWaitingProblem
 * @constant
 * @type {number}
 */
export const callWaitingProblem: TroubleType_number = TroubleType_number_callWaitingProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_customCallFeatureDoNotWork
 * @constant
 * @type {number}
 */
export const TroubleType_number_customCallFeatureDoNotWork: TroubleType_number = 1503; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_customCallFeatureDoNotWork
 * @constant
 * @type {number}
 */
export const customCallFeatureDoNotWork: TroubleType_number = TroubleType_number_customCallFeatureDoNotWork; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_information
 * @constant
 * @type {number}
 */
export const TroubleType_number_information: TroubleType_number = 1504; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_information
 * @constant
 * @type {number}
 */
export const information: TroubleType_number = TroubleType_number_information; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_threeWayCallingProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_threeWayCallingProblem: TroubleType_number = 1505; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_threeWayCallingProblem
 * @constant
 * @type {number}
 */
export const threeWayCallingProblem: TroubleType_number = TroubleType_number_threeWayCallingProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_orderWork
 * @constant
 * @type {number}
 */
export const TroubleType_number_orderWork: TroubleType_number = 1506; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_orderWork
 * @constant
 * @type {number}
 */
export const orderWork: TroubleType_number = TroubleType_number_orderWork; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByIC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseCktRequestedByIC: TroubleType_number = 1507; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByIC
 * @constant
 * @type {number}
 */
export const releaseCktRequestedByIC: TroubleType_number = TroubleType_number_releaseCktRequestedByIC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByEC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseCktRequestedByEC: TroubleType_number = 1508; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByEC
 * @constant
 * @type {number}
 */
export const releaseCktRequestedByEC: TroubleType_number = TroubleType_number_releaseCktRequestedByEC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByIC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseFacilityRequestedByIC: TroubleType_number = 1509; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByIC
 * @constant
 * @type {number}
 */
export const releaseFacilityRequestedByIC: TroubleType_number = TroubleType_number_releaseFacilityRequestedByIC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByEC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseFacilityRequestedByEC: TroubleType_number = 1510; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByEC
 * @constant
 * @type {number}
 */
export const releaseFacilityRequestedByEC: TroubleType_number = TroubleType_number_releaseFacilityRequestedByEC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestForRoutine
 * @constant
 * @type {number}
 */
export const TroubleType_number_requestForRoutine: TroubleType_number = 1511; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestForRoutine
 * @constant
 * @type {number}
 */
export const requestForRoutine: TroubleType_number = TroubleType_number_requestForRoutine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_release
 * @constant
 * @type {number}
 */
export const TroubleType_number_release: TroubleType_number = 1512; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_release
 * @constant
 * @type {number}
 */
export const release: TroubleType_number = TroubleType_number_release; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestDispatch
 * @constant
 * @type {number}
 */
export const TroubleType_number_requestDispatch: TroubleType_number = 1513; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestDispatch
 * @constant
 * @type {number}
 */
export const requestDispatch: TroubleType_number = TroubleType_number_requestDispatch; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestMonitorOfCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_requestMonitorOfCircuit: TroubleType_number = 1514; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestMonitorOfCircuit
 * @constant
 * @type {number}
 */
export const requestMonitorOfCircuit: TroubleType_number = TroubleType_number_requestMonitorOfCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_routineTestFailure
 * @constant
 * @type {number}
 */
export const TroubleType_number_routineTestFailure: TroubleType_number = 1515; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_routineTestFailure
 * @constant
 * @type {number}
 */
export const routineTestFailure: TroubleType_number = TroubleType_number_routineTestFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lostTimerReport
 * @constant
 * @type {number}
 */
export const TroubleType_number_lostTimerReport: TroubleType_number = 1516; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lostTimerReport
 * @constant
 * @type {number}
 */
export const lostTimerReport: TroubleType_number = TroubleType_number_lostTimerReport; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_historicalReports
 * @constant
 * @type {number}
 */
export const TroubleType_number_historicalReports: TroubleType_number = 1517; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_historicalReports
 * @constant
 * @type {number}
 */
export const historicalReports: TroubleType_number = TroubleType_number_historicalReports; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_switchOrTrunkRelated
 * @constant
 * @type {number}
 */
export const TroubleType_number_switchOrTrunkRelated: TroubleType_number = 1518; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_switchOrTrunkRelated
 * @constant
 * @type {number}
 */
export const switchOrTrunkRelated: TroubleType_number = TroubleType_number_switchOrTrunkRelated; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_testAssist
 * @constant
 * @type {number}
 */
export const TroubleType_number_testAssist: TroubleType_number = 1519; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_testAssist
 * @constant
 * @type {number}
 */
export const testAssist: TroubleType_number = TroubleType_number_testAssist; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TroubleType_number = $._decodeInteger;




export const _encode_TroubleType_number = $._encodeInteger;


/* eslint-enable */

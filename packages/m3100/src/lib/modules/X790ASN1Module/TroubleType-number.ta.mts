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
export const TroubleType_number_noDialToneGroup = 100 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDialToneGroup
 * @constant
 * @type {number}
 */
export const noDialToneGroup = TroubleType_number_noDialToneGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDialTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_noDialTone = 101 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDialTone
 * @constant
 * @type {number}
 */
export const noDialTone = TroubleType_number_noDialTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowDialTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_slowDialTone = 102 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowDialTone
 * @constant
 * @type {number}
 */
export const slowDialTone = TroubleType_number_slowDialTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDead
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitDead = 103 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDead
 * @constant
 * @type {number}
 */
export const circuitDead = TroubleType_number_circuitDead; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOutGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOutGroup = 200 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOutGroup
 * @constant
 * @type {number}
 */
export const canNotCallOutGroup = TroubleType_number_canNotCallOutGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOut = 201 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut
 * @constant
 * @type {number}
 */
export const canNotCallOut = TroubleType_number_canNotCallOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBreakDialTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBreakDialTone = 203 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBreakDialTone
 * @constant
 * @type {number}
 */
export const canNotBreakDialTone = TroubleType_number_canNotBreakDialTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dialToneAfterDialing
 * @constant
 * @type {number}
 */
export const TroubleType_number_dialToneAfterDialing = 204 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dialToneAfterDialing
 * @constant
 * @type {number}
 */
export const dialToneAfterDialing = TroubleType_number_dialToneAfterDialing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highAndDry
 * @constant
 * @type {number}
 */
export const TroubleType_number_highAndDry = 205 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highAndDry
 * @constant
 * @type {number}
 */
export const highAndDry = TroubleType_number_highAndDry; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaise
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaise = 206 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaise
 * @constant
 * @type {number}
 */
export const canNotRaise = TroubleType_number_canNotRaise; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_allAccessBusy
 * @constant
 * @type {number}
 */
export const TroubleType_number_allAccessBusy = 207 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_allAccessBusy
 * @constant
 * @type {number}
 */
export const allAccessBusy = TroubleType_number_allAccessBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut2
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOut2 = 208 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOut2
 * @constant
 * @type {number}
 */
export const canNotCallOut2 = TroubleType_number_canNotCallOut2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallLongDistance
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallLongDistance = 209 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallLongDistance
 * @constant
 * @type {number}
 */
export const canNotCallLongDistance = TroubleType_number_canNotCallLongDistance; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOverseas
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotCallOverseas = 210 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotCallOverseas
 * @constant
 * @type {number}
 */
export const canNotCallOverseas = TroubleType_number_canNotCallOverseas; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_speedCall
 * @constant
 * @type {number}
 */
export const TroubleType_number_speedCall = 211 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_speedCall
 * @constant
 * @type {number}
 */
export const speedCall = TroubleType_number_speedCall; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeCalledGroup = 300 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledGroup
 * @constant
 * @type {number}
 */
export const canNotBeCalledGroup = TroubleType_number_canNotBeCalledGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalled
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeCalled = 301 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalled
 * @constant
 * @type {number}
 */
export const canNotBeCalled = TroubleType_number_canNotBeCalled; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledBusy
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeCalledBusy = 302 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeCalledBusy
 * @constant
 * @type {number}
 */
export const canNotBeCalledBusy = TroubleType_number_canNotBeCalledBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotGetCalled
 * @constant
 * @type {number}
 */
export const TroubleType_number_doNotGetCalled = 303 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotGetCalled
 * @constant
 * @type {number}
 */
export const doNotGetCalled = TroubleType_number_doNotGetCalled; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTripRing
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotTripRing = 304 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTripRing
 * @constant
 * @type {number}
 */
export const canNotTripRing = TroubleType_number_canNotTripRing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseRings
 * @constant
 * @type {number}
 */
export const TroubleType_number_falseRings = 305 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseRings
 * @constant
 * @type {number}
 */
export const falseRings = TroubleType_number_falseRings; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_doNotAnswer = 306 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doNotAnswer
 * @constant
 * @type {number}
 */
export const doNotAnswer = TroubleType_number_doNotAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachRecording
 * @constant
 * @type {number}
 */
export const TroubleType_number_reachRecording = 307 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachRecording
 * @constant
 * @type {number}
 */
export const reachRecording = TroubleType_number_reachRecording; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseAStation
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaiseAStation = 308 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseAStation
 * @constant
 * @type {number}
 */
export const canNotRaiseAStation = TroubleType_number_canNotRaiseAStation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseADrop
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaiseADrop = 309 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseADrop
 * @constant
 * @type {number}
 */
export const canNotRaiseADrop = TroubleType_number_canNotRaiseADrop; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseACircuitLocation
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRaiseACircuitLocation = 310 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRaiseACircuitLocation
 * @constant
 * @type {number}
 */
export const canNotRaiseACircuitLocation = TroubleType_number_canNotRaiseACircuitLocation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ringNoAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_ringNoAnswer = 311 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ringNoAnswer
 * @constant
 * @type {number}
 */
export const ringNoAnswer = TroubleType_number_ringNoAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reorder
 * @constant
 * @type {number}
 */
export const TroubleType_number_reorder = 312 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reorder
 * @constant
 * @type {number}
 */
export const reorder = TroubleType_number_reorder; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alwaysBusy
 * @constant
 * @type {number}
 */
export const TroubleType_number_alwaysBusy = 313 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alwaysBusy
 * @constant
 * @type {number}
 */
export const alwaysBusy = TroubleType_number_alwaysBusy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellDoesNotRing = 314 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing
 * @constant
 * @type {number}
 */
export const bellDoesNotRing = TroubleType_number_bellDoesNotRing; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing2
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellDoesNotRing2 = 315 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellDoesNotRing2
 * @constant
 * @type {number}
 */
export const bellDoesNotRing2 = TroubleType_number_bellDoesNotRing2; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsCanNotAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellRingsCanNotAnswer = 316 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsCanNotAnswer
 * @constant
 * @type {number}
 */
export const bellRingsCanNotAnswer = TroubleType_number_bellRingsCanNotAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsAfterAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_bellRingsAfterAnswer = 317 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_bellRingsAfterAnswer
 * @constant
 * @type {number}
 */
export const bellRingsAfterAnswer = TroubleType_number_bellRingsAfterAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingNoAnswer
 * @constant
 * @type {number}
 */
export const TroubleType_number_noRingNoAnswer = 318 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingNoAnswer
 * @constant
 * @type {number}
 */
export const noRingNoAnswer = TroubleType_number_noRingNoAnswer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherRingTrouble
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherRingTrouble = 319 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherRingTrouble
 * @constant
 * @type {number}
 */
export const otherRingTrouble = TroubleType_number_otherRingTrouble; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_receivesCallsForWrongNumber
 * @constant
 * @type {number}
 */
export const TroubleType_number_receivesCallsForWrongNumber = 320 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_receivesCallsForWrongNumber
 * @constant
 * @type {number}
 */
export const receivesCallsForWrongNumber = TroubleType_number_receivesCallsForWrongNumber; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_recordingOnLine = 321 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnLine
 * @constant
 * @type {number}
 */
export const recordingOnLine = TroubleType_number_recordingOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeardGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeHeardGroup = 400 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeardGroup
 * @constant
 * @type {number}
 */
export const canNotBeHeardGroup = TroubleType_number_canNotBeHeardGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeard
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeHeard = 401 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeHeard
 * @constant
 * @type {number}
 */
export const canNotBeHeard = TroubleType_number_canNotBeHeard; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotHear
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotHear = 402 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotHear
 * @constant
 * @type {number}
 */
export const canNotHear = TroubleType_number_canNotHear; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_fading
 * @constant
 * @type {number}
 */
export const TroubleType_number_fading = 403 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_fading
 * @constant
 * @type {number}
 */
export const fading = TroubleType_number_fading; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_distant
 * @constant
 * @type {number}
 */
export const TroubleType_number_distant = 404 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_distant
 * @constant
 * @type {number}
 */
export const distant = TroubleType_number_distant; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachedWrongNumberGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_reachedWrongNumberGroup = 500 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_reachedWrongNumberGroup
 * @constant
 * @type {number}
 */
export const reachedWrongNumberGroup = TroubleType_number_reachedWrongNumberGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wrongNumber
 * @constant
 * @type {number}
 */
export const TroubleType_number_wrongNumber = 501 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wrongNumber
 * @constant
 * @type {number}
 */
export const wrongNumber = TroubleType_number_wrongNumber; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitOperationGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitOperationGroup = 600 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitOperationGroup
 * @constant
 * @type {number}
 */
export const circuitOperationGroup = TroubleType_number_circuitOperationGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_open
 * @constant
 * @type {number}
 */
export const TroubleType_number_open = 601 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_open
 * @constant
 * @type {number}
 */
export const open = TroubleType_number_open; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseDisconnect
 * @constant
 * @type {number}
 */
export const TroubleType_number_falseDisconnect = 602 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_falseDisconnect
 * @constant
 * @type {number}
 */
export const falseDisconnect = TroubleType_number_falseDisconnect; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_grounded
 * @constant
 * @type {number}
 */
export const TroubleType_number_grounded = 603 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_grounded
 * @constant
 * @type {number}
 */
export const grounded = TroubleType_number_grounded; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeSignalled
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotBeSignalled = 604 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotBeSignalled
 * @constant
 * @type {number}
 */
export const canNotBeSignalled = TroubleType_number_canNotBeSignalled; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSignal
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotSignal = 605 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSignal
 * @constant
 * @type {number}
 */
export const canNotSignal = TroubleType_number_canNotSignal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_permanentSignal
 * @constant
 * @type {number}
 */
export const TroubleType_number_permanentSignal = 606 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_permanentSignal
 * @constant
 * @type {number}
 */
export const permanentSignal = TroubleType_number_permanentSignal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_improperSupervision
 * @constant
 * @type {number}
 */
export const TroubleType_number_improperSupervision = 607 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_improperSupervision
 * @constant
 * @type {number}
 */
export const improperSupervision = TroubleType_number_improperSupervision; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_supervision
 * @constant
 * @type {number}
 */
export const TroubleType_number_supervision = 608 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_supervision
 * @constant
 * @type {number}
 */
export const supervision = TroubleType_number_supervision; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotMeet
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotMeet = 609 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotMeet
 * @constant
 * @type {number}
 */
export const canNotMeet = TroubleType_number_canNotMeet; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReleaseCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotReleaseCircuit = 610 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReleaseCircuit
 * @constant
 * @type {number}
 */
export const canNotReleaseCircuit = TroubleType_number_canNotReleaseCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hungUp
 * @constant
 * @type {number}
 */
export const TroubleType_number_hungUp = 611 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hungUp
 * @constant
 * @type {number}
 */
export const hungUp = TroubleType_number_hungUp; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noWinkStart
 * @constant
 * @type {number}
 */
export const TroubleType_number_noWinkStart = 612 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noWinkStart
 * @constant
 * @type {number}
 */
export const noWinkStart = TroubleType_number_noWinkStart; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSF
 * @constant
 * @type {number}
 */
export const TroubleType_number_noSF = 613 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSF
 * @constant
 * @type {number}
 */
export const noSF = TroubleType_number_noSF; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowSF
 * @constant
 * @type {number}
 */
export const TroubleType_number_lowSF = 614 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowSF
 * @constant
 * @type {number}
 */
export const lowSF = TroubleType_number_lowSF; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noContinuity
 * @constant
 * @type {number}
 */
export const TroubleType_number_noContinuity = 615 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noContinuity
 * @constant
 * @type {number}
 */
export const noContinuity = TroubleType_number_noContinuity; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutCable
 * @constant
 * @type {number}
 */
export const TroubleType_number_cutCable = 616 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutCable
 * @constant
 * @type {number}
 */
export const cutCable = TroubleType_number_cutCable; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openToDEMARC
 * @constant
 * @type {number}
 */
export const TroubleType_number_openToDEMARC = 617 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openToDEMARC
 * @constant
 * @type {number}
 */
export const openToDEMARC = TroubleType_number_openToDEMARC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingGenerator
 * @constant
 * @type {number}
 */
export const TroubleType_number_noRingGenerator = 618 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRingGenerator
 * @constant
 * @type {number}
 */
export const noRingGenerator = TroubleType_number_noRingGenerator; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_badERL
 * @constant
 * @type {number}
 */
export const TroubleType_number_badERL = 619 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_badERL
 * @constant
 * @type {number}
 */
export const badERL = TroubleType_number_badERL; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_echo
 * @constant
 * @type {number}
 */
export const TroubleType_number_echo = 620 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_echo
 * @constant
 * @type {number}
 */
export const echo = TroubleType_number_echo; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hollow
 * @constant
 * @type {number}
 */
export const TroubleType_number_hollow = 621 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hollow
 * @constant
 * @type {number}
 */
export const hollow = TroubleType_number_hollow; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDeadNoActivity
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitDeadNoActivity = 622 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDeadNoActivity
 * @constant
 * @type {number}
 */
export const circuitDeadNoActivity = TroubleType_number_circuitDeadNoActivity; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitDown = 623 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitDown
 * @constant
 * @type {number}
 */
export const circuitDown = TroubleType_number_circuitDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_failingCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_failingCircuit = 624 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_failingCircuit
 * @constant
 * @type {number}
 */
export const failingCircuit = TroubleType_number_failingCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSignal
 * @constant
 * @type {number}
 */
export const TroubleType_number_noSignal = 625 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noSignal
 * @constant
 * @type {number}
 */
export const noSignal = TroubleType_number_noSignal; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_seizureOnCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_seizureOnCircuit = 626 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_seizureOnCircuit
 * @constant
 * @type {number}
 */
export const seizureOnCircuit = TroubleType_number_seizureOnCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const TroubleType_number_lossEPSCSorSwitchedServices = 627 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const lossEPSCSorSwitchedServices = TroubleType_number_lossEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_monitorCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_monitorCircuit = 628 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_monitorCircuit
 * @constant
 * @type {number}
 */
export const monitorCircuit = TroubleType_number_monitorCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_newServiceNotWorking
 * @constant
 * @type {number}
 */
export const TroubleType_number_newServiceNotWorking = 629 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_newServiceNotWorking
 * @constant
 * @type {number}
 */
export const newServiceNotWorking = TroubleType_number_newServiceNotWorking; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const TroubleType_number_openEPSCSorSwitchedServices = 630 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_openEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const openEPSCSorSwitchedServices = TroubleType_number_openEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherVoiceDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherVoiceDescribeAdditInfo = 631 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherVoiceDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const otherVoiceDescribeAdditInfo = TroubleType_number_otherVoiceDescribeAdditInfo; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutOffsGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_cutOffsGroup = 700 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutOffsGroup
 * @constant
 * @type {number}
 */
export const cutOffsGroup = TroubleType_number_cutOffsGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutsOff
 * @constant
 * @type {number}
 */
export const TroubleType_number_cutsOff = 701 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cutsOff
 * @constant
 * @type {number}
 */
export const cutsOff = TroubleType_number_cutsOff; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseProblemGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_noiseProblemGroup = 800 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseProblemGroup
 * @constant
 * @type {number}
 */
export const noiseProblemGroup = TroubleType_number_noiseProblemGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_intermittentNoise
 * @constant
 * @type {number}
 */
export const TroubleType_number_intermittentNoise = 801 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_intermittentNoise
 * @constant
 * @type {number}
 */
export const intermittentNoise = TroubleType_number_intermittentNoise; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noisy
 * @constant
 * @type {number}
 */
export const TroubleType_number_noisy = 802 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noisy
 * @constant
 * @type {number}
 */
export const noisy = TroubleType_number_noisy; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_foreignTone
 * @constant
 * @type {number}
 */
export const TroubleType_number_foreignTone = 803 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_foreignTone
 * @constant
 * @type {number}
 */
export const foreignTone = TroubleType_number_foreignTone; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clipping
 * @constant
 * @type {number}
 */
export const TroubleType_number_clipping = 804 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clipping
 * @constant
 * @type {number}
 */
export const clipping = TroubleType_number_clipping; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossTalk
 * @constant
 * @type {number}
 */
export const TroubleType_number_crossTalk = 805 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossTalk
 * @constant
 * @type {number}
 */
export const crossTalk = TroubleType_number_crossTalk; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_staticOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_staticOnLine = 806 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_staticOnLine
 * @constant
 * @type {number}
 */
export const staticOnLine = TroubleType_number_staticOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_groundHum
 * @constant
 * @type {number}
 */
export const TroubleType_number_groundHum = 807 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_groundHum
 * @constant
 * @type {number}
 */
export const groundHum = TroubleType_number_groundHum; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hearsOtherOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_hearsOtherOnLine = 808 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hearsOtherOnLine
 * @constant
 * @type {number}
 */
export const hearsOtherOnLine = TroubleType_number_hearsOtherOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_humOnLine
 * @constant
 * @type {number}
 */
export const TroubleType_number_humOnLine = 809 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_humOnLine
 * @constant
 * @type {number}
 */
export const humOnLine = TroubleType_number_humOnLine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clicking
 * @constant
 * @type {number}
 */
export const TroubleType_number_clicking = 810 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_clicking
 * @constant
 * @type {number}
 */
export const clicking = TroubleType_number_clicking; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const TroubleType_number_noiseEPSCSorSwitchedServices = 811 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noiseEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export const noiseEPSCSorSwitchedServices = TroubleType_number_noiseEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_levelTroublesGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_levelTroublesGroup = 900 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_levelTroublesGroup
 * @constant
 * @type {number}
 */
export const levelTroublesGroup = TroubleType_number_levelTroublesGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_lowLevels = 901 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowLevels
 * @constant
 * @type {number}
 */
export const lowLevels = TroubleType_number_lowLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_highLevels = 902 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highLevels
 * @constant
 * @type {number}
 */
export const highLevels = TroubleType_number_highLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_longLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_longLevels = 903 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_longLevels
 * @constant
 * @type {number}
 */
export const longLevels = TroubleType_number_longLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hotLevels
 * @constant
 * @type {number}
 */
export const TroubleType_number_hotLevels = 904 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hotLevels
 * @constant
 * @type {number}
 */
export const hotLevels = TroubleType_number_hotLevels; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highEndRollOff
 * @constant
 * @type {number}
 */
export const TroubleType_number_highEndRollOff = 905 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highEndRollOff
 * @constant
 * @type {number}
 */
export const highEndRollOff = TroubleType_number_highEndRollOff; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowEndRollOff
 * @constant
 * @type {number}
 */
export const TroubleType_number_lowEndRollOff = 906 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lowEndRollOff
 * @constant
 * @type {number}
 */
export const lowEndRollOff = TroubleType_number_lowEndRollOff; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_needsEqualized
 * @constant
 * @type {number}
 */
export const TroubleType_number_needsEqualized = 907 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_needsEqualized
 * @constant
 * @type {number}
 */
export const needsEqualized = TroubleType_number_needsEqualized; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lineLoss
 * @constant
 * @type {number}
 */
export const TroubleType_number_lineLoss = 908 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lineLoss
 * @constant
 * @type {number}
 */
export const lineLoss = TroubleType_number_lineLoss; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doesNotPassFreqResponse
 * @constant
 * @type {number}
 */
export const TroubleType_number_doesNotPassFreqResponse = 909 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_doesNotPassFreqResponse
 * @constant
 * @type {number}
 */
export const doesNotPassFreqResponse = TroubleType_number_doesNotPassFreqResponse; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_miscellaneousTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_miscellaneousTroubleGroup = 1000 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_miscellaneousTroubleGroup
 * @constant
 * @type {number}
 */
export const miscellaneousTroubleGroup = TroubleType_number_miscellaneousTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hiCapDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_hiCapDown = 1001 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hiCapDown
 * @constant
 * @type {number}
 */
export const hiCapDown = TroubleType_number_hiCapDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_carrierDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_carrierDown = 1002 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_carrierDown
 * @constant
 * @type {number}
 */
export const carrierDown = TroubleType_number_carrierDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_biPolarViolations
 * @constant
 * @type {number}
 */
export const TroubleType_number_biPolarViolations = 1003 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_biPolarViolations
 * @constant
 * @type {number}
 */
export const biPolarViolations = TroubleType_number_biPolarViolations; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameErrorsHiCap
 * @constant
 * @type {number}
 */
export const TroubleType_number_frameErrorsHiCap = 1004 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameErrorsHiCap
 * @constant
 * @type {number}
 */
export const frameErrorsHiCap = TroubleType_number_frameErrorsHiCap; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfFrame
 * @constant
 * @type {number}
 */
export const TroubleType_number_outOfFrame = 1005 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfFrame
 * @constant
 * @type {number}
 */
export const outOfFrame = TroubleType_number_outOfFrame; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossOfSync
 * @constant
 * @type {number}
 */
export const TroubleType_number_lossOfSync = 1006 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lossOfSync
 * @constant
 * @type {number}
 */
export const lossOfSync = TroubleType_number_lossOfSync; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameSlips
 * @constant
 * @type {number}
 */
export const TroubleType_number_frameSlips = 1007 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_frameSlips
 * @constant
 * @type {number}
 */
export const frameSlips = TroubleType_number_frameSlips; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noLoopback
 * @constant
 * @type {number}
 */
export const TroubleType_number_noLoopback = 1008 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noLoopback
 * @constant
 * @type {number}
 */
export const noLoopback = TroubleType_number_noLoopback; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotLoopbackDEMARC
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotLoopbackDEMARC = 1009 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotLoopbackDEMARC
 * @constant
 * @type {number}
 */
export const canNotLoopbackDEMARC = TroubleType_number_canNotLoopbackDEMARC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_recordingOnCircuit = 1010 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_recordingOnCircuit
 * @constant
 * @type {number}
 */
export const recordingOnCircuit = TroubleType_number_recordingOnCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_linesNeedTagging
 * @constant
 * @type {number}
 */
export const TroubleType_number_linesNeedTagging = 1011 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_linesNeedTagging
 * @constant
 * @type {number}
 */
export const linesNeedTagging = TroubleType_number_linesNeedTagging; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outwatsRingingin
 * @constant
 * @type {number}
 */
export const TroubleType_number_outwatsRingingin = 1012 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outwatsRingingin
 * @constant
 * @type {number}
 */
export const outwatsRingingin = TroubleType_number_outwatsRingingin; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_remoteAccess
 * @constant
 * @type {number}
 */
export const TroubleType_number_remoteAccess = 1013 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_remoteAccess
 * @constant
 * @type {number}
 */
export const remoteAccess = TroubleType_number_remoteAccess; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_other
 * @constant
 * @type {number}
 */
export const TroubleType_number_other = 1014 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_other
 * @constant
 * @type {number}
 */
export const other = TroubleType_number_other; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alarm
 * @constant
 * @type {number}
 */
export const TroubleType_number_alarm = 1015 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_alarm
 * @constant
 * @type {number}
 */
export const alarm = TroubleType_number_alarm; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_memoryServiceProblemGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_memoryServiceProblemGroup = 1100 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_memoryServiceProblemGroup
 * @constant
 * @type {number}
 */
export const memoryServiceProblemGroup = TroubleType_number_memoryServiceProblemGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataTroubleGroup = 1200 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataTroubleGroup
 * @constant
 * @type {number}
 */
export const dataTroubleGroup = TroubleType_number_dataTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReceiveData
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotReceiveData = 1201 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotReceiveData
 * @constant
 * @type {number}
 */
export const canNotReceiveData = TroubleType_number_canNotReceiveData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSendData
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotSendData = 1202 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotSendData
 * @constant
 * @type {number}
 */
export const canNotSendData = TroubleType_number_canNotSendData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTransmitCanNotReceive
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotTransmitCanNotReceive = 1203 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotTransmitCanNotReceive
 * @constant
 * @type {number}
 */
export const canNotTransmitCanNotReceive = TroubleType_number_canNotTransmitCanNotReceive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noReceive
 * @constant
 * @type {number}
 */
export const TroubleType_number_noReceive = 1204 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noReceive
 * @constant
 * @type {number}
 */
export const noReceive = TroubleType_number_noReceive; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noResponse
 * @constant
 * @type {number}
 */
export const TroubleType_number_noResponse = 1205 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noResponse
 * @constant
 * @type {number}
 */
export const noResponse = TroubleType_number_noResponse; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_delay
 * @constant
 * @type {number}
 */
export const TroubleType_number_delay = 1206 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_delay
 * @constant
 * @type {number}
 */
export const delay = TroubleType_number_delay; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_impulseNoise
 * @constant
 * @type {number}
 */
export const TroubleType_number_impulseNoise = 1207 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_impulseNoise
 * @constant
 * @type {number}
 */
export const impulseNoise = TroubleType_number_impulseNoise; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_phaseJitter
 * @constant
 * @type {number}
 */
export const TroubleType_number_phaseJitter = 1208 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_phaseJitter
 * @constant
 * @type {number}
 */
export const phaseJitter = TroubleType_number_phaseJitter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_harmonicDistortion
 * @constant
 * @type {number}
 */
export const TroubleType_number_harmonicDistortion = 1209 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_harmonicDistortion
 * @constant
 * @type {number}
 */
export const harmonicDistortion = TroubleType_number_harmonicDistortion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highDistortion
 * @constant
 * @type {number}
 */
export const TroubleType_number_highDistortion = 1210 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highDistortion
 * @constant
 * @type {number}
 */
export const highDistortion = TroubleType_number_highDistortion; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDataLoopback
 * @constant
 * @type {number}
 */
export const TroubleType_number_noDataLoopback = 1211 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noDataLoopback
 * @constant
 * @type {number}
 */
export const noDataLoopback = TroubleType_number_noDataLoopback; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noCarrier
 * @constant
 * @type {number}
 */
export const TroubleType_number_noCarrier = 1212 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noCarrier
 * @constant
 * @type {number}
 */
export const noCarrier = TroubleType_number_noCarrier; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_notPolling
 * @constant
 * @type {number}
 */
export const TroubleType_number_notPolling = 1213 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_notPolling
 * @constant
 * @type {number}
 */
export const notPolling = TroubleType_number_notPolling; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataFramingErrors
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataFramingErrors = 1214 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataFramingErrors
 * @constant
 * @type {number}
 */
export const dataFramingErrors = TroubleType_number_dataFramingErrors; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dropOuts
 * @constant
 * @type {number}
 */
export const TroubleType_number_dropOuts = 1215 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dropOuts
 * @constant
 * @type {number}
 */
export const dropOuts = TroubleType_number_dropOuts; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hits
 * @constant
 * @type {number}
 */
export const TroubleType_number_hits = 1216 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_hits
 * @constant
 * @type {number}
 */
export const hits = TroubleType_number_hits; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noAnswerBack
 * @constant
 * @type {number}
 */
export const TroubleType_number_noAnswerBack = 1217 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noAnswerBack
 * @constant
 * @type {number}
 */
export const noAnswerBack = TroubleType_number_noAnswerBack; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_streamer
 * @constant
 * @type {number}
 */
export const TroubleType_number_streamer = 1218 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_streamer
 * @constant
 * @type {number}
 */
export const streamer = TroubleType_number_streamer; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfSpecification
 * @constant
 * @type {number}
 */
export const TroubleType_number_outOfSpecification = 1219 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_outOfSpecification
 * @constant
 * @type {number}
 */
export const outOfSpecification = TroubleType_number_outOfSpecification; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToCSU
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRunToCSU = 1220 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToCSU
 * @constant
 * @type {number}
 */
export const canNotRunToCSU = TroubleType_number_canNotRunToCSU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToOSU
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotRunToOSU = 1221 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotRunToOSU
 * @constant
 * @type {number}
 */
export const canNotRunToOSU = TroubleType_number_canNotRunToOSU; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_deadDataCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_deadDataCircuit = 1222 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_deadDataCircuit
 * @constant
 * @type {number}
 */
export const deadDataCircuit = TroubleType_number_deadDataCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitInLoopback
 * @constant
 * @type {number}
 */
export const TroubleType_number_circuitInLoopback = 1223 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_circuitInLoopback
 * @constant
 * @type {number}
 */
export const circuitInLoopback = TroubleType_number_circuitInLoopback; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_errors
 * @constant
 * @type {number}
 */
export const TroubleType_number_errors = 1224 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_errors
 * @constant
 * @type {number}
 */
export const errors = TroubleType_number_errors; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_garbledData
 * @constant
 * @type {number}
 */
export const TroubleType_number_garbledData = 1225 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_garbledData
 * @constant
 * @type {number}
 */
export const garbledData = TroubleType_number_garbledData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_invalidData
 * @constant
 * @type {number}
 */
export const TroubleType_number_invalidData = 1226 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_invalidData
 * @constant
 * @type {number}
 */
export const invalidData = TroubleType_number_invalidData; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossModulation
 * @constant
 * @type {number}
 */
export const TroubleType_number_crossModulation = 1227 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_crossModulation
 * @constant
 * @type {number}
 */
export const crossModulation = TroubleType_number_crossModulation; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowResponse
 * @constant
 * @type {number}
 */
export const TroubleType_number_slowResponse = 1228 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slowResponse
 * @constant
 * @type {number}
 */
export const slowResponse = TroubleType_number_slowResponse; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherDataDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherDataDescribeAdditInfo = 1229 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherDataDescribeAdditInfo
 * @constant
 * @type {number}
 */
export const otherDataDescribeAdditInfo = TroubleType_number_otherDataDescribeAdditInfo; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_gettingAllOnes
 * @constant
 * @type {number}
 */
export const TroubleType_number_gettingAllOnes = 1230 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_gettingAllOnes
 * @constant
 * @type {number}
 */
export const gettingAllOnes = TroubleType_number_gettingAllOnes; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slip
 * @constant
 * @type {number}
 */
export const TroubleType_number_slip = 1231 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_slip
 * @constant
 * @type {number}
 */
export const slip = TroubleType_number_slip; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_stationTroubleGroup = 1300 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationTroubleGroup
 * @constant
 * @type {number}
 */
export const stationTroubleGroup = TroubleType_number_stationTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_voiceEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_voiceEquipment = 1301 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_voiceEquipment
 * @constant
 * @type {number}
 */
export const voiceEquipment = TroubleType_number_voiceEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataEquipment = 1302 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataEquipment
 * @constant
 * @type {number}
 */
export const dataEquipment = TroubleType_number_dataEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_videoEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_videoEquipment = 1303 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_videoEquipment
 * @constant
 * @type {number}
 */
export const videoEquipment = TroubleType_number_videoEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherEquipment
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherEquipment = 1304 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherEquipment
 * @constant
 * @type {number}
 */
export const otherEquipment = TroubleType_number_otherEquipment; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationWiring
 * @constant
 * @type {number}
 */
export const TroubleType_number_stationWiring = 1305 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stationWiring
 * @constant
 * @type {number}
 */
export const stationWiring = TroubleType_number_stationWiring; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalTroubleGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_physicalTroubleGroup = 1400 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalTroubleGroup
 * @constant
 * @type {number}
 */
export const physicalTroubleGroup = TroubleType_number_physicalTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lightBurnedOut
 * @constant
 * @type {number}
 */
export const TroubleType_number_lightBurnedOut = 1401 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lightBurnedOut
 * @constant
 * @type {number}
 */
export const lightBurnedOut = TroubleType_number_lightBurnedOut; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataset
 * @constant
 * @type {number}
 */
export const TroubleType_number_dataset = 1402 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_dataset
 * @constant
 * @type {number}
 */
export const dataset = TroubleType_number_dataset; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ttySet
 * @constant
 * @type {number}
 */
export const TroubleType_number_ttySet = 1403 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_ttySet
 * @constant
 * @type {number}
 */
export const ttySet = TroubleType_number_ttySet; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highSpeedPrinter
 * @constant
 * @type {number}
 */
export const TroubleType_number_highSpeedPrinter = 1404 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_highSpeedPrinter
 * @constant
 * @type {number}
 */
export const highSpeedPrinter = TroubleType_number_highSpeedPrinter; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aNI
 * @constant
 * @type {number}
 */
export const TroubleType_number_aNI = 1405 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aNI
 * @constant
 * @type {number}
 */
export const aNI = TroubleType_number_aNI; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aLI
 * @constant
 * @type {number}
 */
export const TroubleType_number_aLI = 1406 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_aLI
 * @constant
 * @type {number}
 */
export const aLI = TroubleType_number_aLI; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotActivatePC
 * @constant
 * @type {number}
 */
export const TroubleType_number_canNotActivatePC = 1407 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_canNotActivatePC
 * @constant
 * @type {number}
 */
export const canNotActivatePC = TroubleType_number_canNotActivatePC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_modem
 * @constant
 * @type {number}
 */
export const TroubleType_number_modem = 1408 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_modem
 * @constant
 * @type {number}
 */
export const modem = TroubleType_number_modem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cathodeRayTube
 * @constant
 * @type {number}
 */
export const TroubleType_number_cathodeRayTube = 1409 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_cathodeRayTube
 * @constant
 * @type {number}
 */
export const cathodeRayTube = TroubleType_number_cathodeRayTube; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_looseJack
 * @constant
 * @type {number}
 */
export const TroubleType_number_looseJack = 1410 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_looseJack
 * @constant
 * @type {number}
 */
export const looseJack = TroubleType_number_looseJack; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_offHook
 * @constant
 * @type {number}
 */
export const TroubleType_number_offHook = 1411 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_offHook
 * @constant
 * @type {number}
 */
export const offHook = TroubleType_number_offHook; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_physicalProblem = 1412 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_physicalProblem
 * @constant
 * @type {number}
 */
export const physicalProblem = TroubleType_number_physicalProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_processorDead
 * @constant
 * @type {number}
 */
export const TroubleType_number_processorDead = 1413 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_processorDead
 * @constant
 * @type {number}
 */
export const processorDead = TroubleType_number_processorDead; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wiringProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_wiringProblem = 1414 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wiringProblem
 * @constant
 * @type {number}
 */
export const wiringProblem = TroubleType_number_wiringProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wireBrokeSetBrokePoleDown
 * @constant
 * @type {number}
 */
export const TroubleType_number_wireBrokeSetBrokePoleDown = 1415 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_wireBrokeSetBrokePoleDown
 * @constant
 * @type {number}
 */
export const wireBrokeSetBrokePoleDown = TroubleType_number_wireBrokeSetBrokePoleDown; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRegister
 * @constant
 * @type {number}
 */
export const TroubleType_number_noRegister = 1416 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_noRegister
 * @constant
 * @type {number}
 */
export const noRegister = TroubleType_number_noRegister; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stuckSender
 * @constant
 * @type {number}
 */
export const TroubleType_number_stuckSender = 1417 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_stuckSender
 * @constant
 * @type {number}
 */
export const stuckSender = TroubleType_number_stuckSender; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherStationTrouble
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherStationTrouble = 1418 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherStationTrouble
 * @constant
 * @type {number}
 */
export const otherStationTrouble = TroubleType_number_otherStationTrouble; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherCaseGroup
 * @constant
 * @type {number}
 */
export const TroubleType_number_otherCaseGroup = 1500 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_otherCaseGroup
 * @constant
 * @type {number}
 */
export const otherCaseGroup = TroubleType_number_otherCaseGroup; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callTransferProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_callTransferProblem = 1501 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callTransferProblem
 * @constant
 * @type {number}
 */
export const callTransferProblem = TroubleType_number_callTransferProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callWaitingProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_callWaitingProblem = 1502 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_callWaitingProblem
 * @constant
 * @type {number}
 */
export const callWaitingProblem = TroubleType_number_callWaitingProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_customCallFeatureDoNotWork
 * @constant
 * @type {number}
 */
export const TroubleType_number_customCallFeatureDoNotWork = 1503 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_customCallFeatureDoNotWork
 * @constant
 * @type {number}
 */
export const customCallFeatureDoNotWork = TroubleType_number_customCallFeatureDoNotWork; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_information
 * @constant
 * @type {number}
 */
export const TroubleType_number_information = 1504 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_information
 * @constant
 * @type {number}
 */
export const information = TroubleType_number_information; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_threeWayCallingProblem
 * @constant
 * @type {number}
 */
export const TroubleType_number_threeWayCallingProblem = 1505 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_threeWayCallingProblem
 * @constant
 * @type {number}
 */
export const threeWayCallingProblem = TroubleType_number_threeWayCallingProblem; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_orderWork
 * @constant
 * @type {number}
 */
export const TroubleType_number_orderWork = 1506 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_orderWork
 * @constant
 * @type {number}
 */
export const orderWork = TroubleType_number_orderWork; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByIC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseCktRequestedByIC = 1507 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByIC
 * @constant
 * @type {number}
 */
export const releaseCktRequestedByIC = TroubleType_number_releaseCktRequestedByIC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByEC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseCktRequestedByEC = 1508 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseCktRequestedByEC
 * @constant
 * @type {number}
 */
export const releaseCktRequestedByEC = TroubleType_number_releaseCktRequestedByEC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByIC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseFacilityRequestedByIC = 1509 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByIC
 * @constant
 * @type {number}
 */
export const releaseFacilityRequestedByIC = TroubleType_number_releaseFacilityRequestedByIC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByEC
 * @constant
 * @type {number}
 */
export const TroubleType_number_releaseFacilityRequestedByEC = 1510 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_releaseFacilityRequestedByEC
 * @constant
 * @type {number}
 */
export const releaseFacilityRequestedByEC = TroubleType_number_releaseFacilityRequestedByEC; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestForRoutine
 * @constant
 * @type {number}
 */
export const TroubleType_number_requestForRoutine = 1511 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestForRoutine
 * @constant
 * @type {number}
 */
export const requestForRoutine = TroubleType_number_requestForRoutine; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_release
 * @constant
 * @type {number}
 */
export const TroubleType_number_release = 1512 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_release
 * @constant
 * @type {number}
 */
export const release = TroubleType_number_release; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestDispatch
 * @constant
 * @type {number}
 */
export const TroubleType_number_requestDispatch = 1513 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestDispatch
 * @constant
 * @type {number}
 */
export const requestDispatch = TroubleType_number_requestDispatch; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestMonitorOfCircuit
 * @constant
 * @type {number}
 */
export const TroubleType_number_requestMonitorOfCircuit = 1514 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_requestMonitorOfCircuit
 * @constant
 * @type {number}
 */
export const requestMonitorOfCircuit = TroubleType_number_requestMonitorOfCircuit; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_routineTestFailure
 * @constant
 * @type {number}
 */
export const TroubleType_number_routineTestFailure = 1515 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_routineTestFailure
 * @constant
 * @type {number}
 */
export const routineTestFailure = TroubleType_number_routineTestFailure; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lostTimerReport
 * @constant
 * @type {number}
 */
export const TroubleType_number_lostTimerReport = 1516 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_lostTimerReport
 * @constant
 * @type {number}
 */
export const lostTimerReport = TroubleType_number_lostTimerReport; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_historicalReports
 * @constant
 * @type {number}
 */
export const TroubleType_number_historicalReports = 1517 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_historicalReports
 * @constant
 * @type {number}
 */
export const historicalReports = TroubleType_number_historicalReports; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_switchOrTrunkRelated
 * @constant
 * @type {number}
 */
export const TroubleType_number_switchOrTrunkRelated = 1518 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_switchOrTrunkRelated
 * @constant
 * @type {number}
 */
export const switchOrTrunkRelated = TroubleType_number_switchOrTrunkRelated; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_testAssist
 * @constant
 * @type {number}
 */
export const TroubleType_number_testAssist = 1519 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleType_number_testAssist
 * @constant
 * @type {number}
 */
export const testAssist = TroubleType_number_testAssist; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TroubleType_number = $._decodeInteger;




export const _encode_TroubleType_number = $._encodeInteger;


/* eslint-enable */

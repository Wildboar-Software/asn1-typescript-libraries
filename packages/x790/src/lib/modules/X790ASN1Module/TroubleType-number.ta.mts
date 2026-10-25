/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TroubleType_number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleType-number ::= INTEGER {-- Integer values are to be registered in the
 *              -- standard. Administrations may restrict
 *              -- the values to be used.
 *              noDialToneGroup(100), noDialTone(101), slowDialTone(102),
 *              circuitDead(103),
 *              -- No audible tone when the telephone receiver is off-hook
 *              canNotCallOutGroup(200), canNotCallOut(201),
 *              canNotBreakDialTone(203), dialToneAfterDialing(204),
 *              highAndDry(205), canNotRaise(206), allAccessBusy(207),
 *              canNotCallOut2(208), canNotCallLongDistance(209),
 *              canNotCallOverseas(210), speedCall(211), canNotBeCalledGroup(300),
 *              canNotBeCalled(301), canNotBeCalledBusy(302), doNotGetCalled(303),
 *              canNotTripRing(304), falseRings(305), doNotAnswer(306),
 *              reachRecording(307), canNotRaiseAStation(308),
 *              canNotRaiseADrop(309), canNotRaiseACircuitLocation(310),
 *              ringNoAnswer(311), reorder(312), alwaysBusy(313),
 *              bellDoesNotRing(314), bellDoesNotRing2(315),
 *              bellRingsCanNotAnswer(316), bellRingsAfterAnswer(317),
 *              noRingNoAnswer(318), otherRingTrouble(319),
 *              receivesCallsForWrongNumber(320), recordingOnLine(321),
 *              canNotBeHeardGroup(400), canNotBeHeard(401), canNotHear(402),
 *              fading(403), distant(404), reachedWrongNumberGroup(500),
 *              wrongNumber(501), circuitOperationGroup(600), open(601),
 *              falseDisconnect(602), grounded(603), canNotBeSignalled(604),
 *              canNotSignal(605), permanentSignal(606), improperSupervision(607),
 *              supervision(608), canNotMeet(609), canNotReleaseCircuit(610),
 *              hungUp(611), noWinkStart(612), noSF(613), lowSF(614),
 *              noContinuity(615), cutCable(616), openToDEMARC(617),
 *              noRingGenerator(618), badERL(619), echo(620), hollow(621),
 *              circuitDeadNoActivity(622),
 *              -- No activity on circuit at all. Circuit shows no sign of continuity with service provider
 *              circuitDown(623), failingCircuit(624), noSignal(625),
 *              seizureOnCircuit(626), lossEPSCSorSwitchedServices(627),
 *              monitorCircuit(628), newServiceNotWorking(629),
 *              openEPSCSorSwitchedServices(630),
 *              otherVoiceDescribeAdditInfo(631), cutOffsGroup(700), cutsOff(701),
 *              noiseProblemGroup(800), intermittentNoise(801), noisy(802),
 *              foreignTone(803), clipping(804), crossTalk(805),
 *              staticOnLine(806), groundHum(807), hearsOtherOnLine(808),
 *              humOnLine(809), clicking(810), noiseEPSCSorSwitchedServices(811),
 *              levelTroublesGroup(900), lowLevels(901), highLevels(902),
 *              longLevels(903), hotLevels(904), highEndRollOff(905),
 *              lowEndRollOff(906), needsEqualized(907), lineLoss(908),
 *              doesNotPassFreqResponse(909), miscellaneousTroubleGroup(1000),
 *              hiCapDown(1001), carrierDown(1002), biPolarViolations(1003),
 *              frameErrorsHiCap(1004), outOfFrame(1005), lossOfSync(1006),
 *              frameSlips(1007), noLoopback(1008), canNotLoopbackDEMARC(1009),
 *              recordingOnCircuit(1010), linesNeedTagging(1011),
 *              outwatsRingingin(1012), remoteAccess(1013), other(1014),
 *              alarm(1015), memoryServiceProblemGroup(1100),
 *              dataTroubleGroup(1200), canNotReceiveData(1201),
 *              canNotSendData(1202), canNotTransmitCanNotReceive(1203),
 *              noReceive(1204), noResponse(1205), delay(1206),
 *              impulseNoise(1207), phaseJitter(1208), harmonicDistortion(1209),
 *              highDistortion(1210), noDataLoopback(1211), noCarrier(1212),
 *              notPolling(1213), dataFramingErrors(1214), dropOuts(1215),
 *              hits(1216), noAnswerBack(1217), streamer(1218),
 *              outOfSpecification(1219), canNotRunToCSU(1220),
 *              canNotRunToOSU(1221), deadDataCircuit(1222),
 *              circuitInLoopback(1223), errors(1224), garbledData(1225),
 *              invalidData(1226), crossModulation(1227), slowResponse(1228),
 *              otherDataDescribeAdditInfo(1229), gettingAllOnes(1230),
 *              slip(1231), stationTroubleGroup(1300), voiceEquipment(1301),
 *              dataEquipment(1302), videoEquipment(1303), otherEquipment(1304),
 *              stationWiring(1305), physicalTroubleGroup(1400),
 *              lightBurnedOut(1401), dataset(1402), ttySet(1403),
 *              highSpeedPrinter(1404), aNI(1405), aLI(1406),
 *              canNotActivatePC(1407), modem(1408), cathodeRayTube(1409),
 *              looseJack(1410), offHook(1411), physicalProblem(1412),
 *              processorDead(1413), wiringProblem(1414),
 *              wireBrokeSetBrokePoleDown(1415), noRegister(1416),
 *              stuckSender(1417), otherStationTrouble(1418),
 *              otherCaseGroup(1500), callTransferProblem(1501),
 *              callWaitingProblem(1502), customCallFeatureDoNotWork(1503),
 *              information(1504), threeWayCallingProblem(1505), orderWork(1506),
 *              releaseCktRequestedByIC(1507), releaseCktRequestedByEC(1508),
 *              releaseFacilityRequestedByIC(1509),
 *              releaseFacilityRequestedByEC(1510),
 *              requestForRoutine(1511),
 *              --release    (1512)
 *              release(1512), requestDispatch(1513),
 *              requestMonitorOfCircuit(1514), routineTestFailure(1515),
 *              lostTimerReport(1516), historicalReports(1517),
 *              switchOrTrunkRelated(1518), testAssist(1519)}
 * ```
 */
export
type TroubleType_number = INTEGER;

/**
 * @summary TroubleType_number_noDialToneGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noDialToneGroup: 100 = 100 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noDialToneGroup
 * @constant
 * @type {number}
 */
export
const noDialToneGroup: 100 = TroubleType_number_noDialToneGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noDialTone
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noDialTone: 101 = 101 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noDialTone
 * @constant
 * @type {number}
 */
export
const noDialTone: 101 = TroubleType_number_noDialTone; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_slowDialTone
 * @constant
 * @type {number}
 */
export
const TroubleType_number_slowDialTone: 102 = 102 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_slowDialTone
 * @constant
 * @type {number}
 */
export
const slowDialTone: 102 = TroubleType_number_slowDialTone; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitDead
 * @constant
 * @type {number}
 */
export
const TroubleType_number_circuitDead: 103 = 103 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitDead
 * @constant
 * @type {number}
 */
export
const circuitDead: 103 = TroubleType_number_circuitDead; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOutGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotCallOutGroup: 200 = 200 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOutGroup
 * @constant
 * @type {number}
 */
export
const canNotCallOutGroup: 200 = TroubleType_number_canNotCallOutGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOut
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotCallOut: 201 = 201 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOut
 * @constant
 * @type {number}
 */
export
const canNotCallOut: 201 = TroubleType_number_canNotCallOut; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBreakDialTone
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotBreakDialTone: 203 = 203 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBreakDialTone
 * @constant
 * @type {number}
 */
export
const canNotBreakDialTone: 203 = TroubleType_number_canNotBreakDialTone; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dialToneAfterDialing
 * @constant
 * @type {number}
 */
export
const TroubleType_number_dialToneAfterDialing: 204 = 204 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dialToneAfterDialing
 * @constant
 * @type {number}
 */
export
const dialToneAfterDialing: 204 = TroubleType_number_dialToneAfterDialing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highAndDry
 * @constant
 * @type {number}
 */
export
const TroubleType_number_highAndDry: 205 = 205 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highAndDry
 * @constant
 * @type {number}
 */
export
const highAndDry: 205 = TroubleType_number_highAndDry; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaise
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotRaise: 206 = 206 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaise
 * @constant
 * @type {number}
 */
export
const canNotRaise: 206 = TroubleType_number_canNotRaise; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_allAccessBusy
 * @constant
 * @type {number}
 */
export
const TroubleType_number_allAccessBusy: 207 = 207 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_allAccessBusy
 * @constant
 * @type {number}
 */
export
const allAccessBusy: 207 = TroubleType_number_allAccessBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOut2
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotCallOut2: 208 = 208 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOut2
 * @constant
 * @type {number}
 */
export
const canNotCallOut2: 208 = TroubleType_number_canNotCallOut2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallLongDistance
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotCallLongDistance: 209 = 209 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallLongDistance
 * @constant
 * @type {number}
 */
export
const canNotCallLongDistance: 209 = TroubleType_number_canNotCallLongDistance; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOverseas
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotCallOverseas: 210 = 210 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotCallOverseas
 * @constant
 * @type {number}
 */
export
const canNotCallOverseas: 210 = TroubleType_number_canNotCallOverseas; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_speedCall
 * @constant
 * @type {number}
 */
export
const TroubleType_number_speedCall: 211 = 211 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_speedCall
 * @constant
 * @type {number}
 */
export
const speedCall: 211 = TroubleType_number_speedCall; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeCalledGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotBeCalledGroup: 300 = 300 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeCalledGroup
 * @constant
 * @type {number}
 */
export
const canNotBeCalledGroup: 300 = TroubleType_number_canNotBeCalledGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeCalled
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotBeCalled: 301 = 301 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeCalled
 * @constant
 * @type {number}
 */
export
const canNotBeCalled: 301 = TroubleType_number_canNotBeCalled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeCalledBusy
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotBeCalledBusy: 302 = 302 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeCalledBusy
 * @constant
 * @type {number}
 */
export
const canNotBeCalledBusy: 302 = TroubleType_number_canNotBeCalledBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_doNotGetCalled
 * @constant
 * @type {number}
 */
export
const TroubleType_number_doNotGetCalled: 303 = 303 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_doNotGetCalled
 * @constant
 * @type {number}
 */
export
const doNotGetCalled: 303 = TroubleType_number_doNotGetCalled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotTripRing
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotTripRing: 304 = 304 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotTripRing
 * @constant
 * @type {number}
 */
export
const canNotTripRing: 304 = TroubleType_number_canNotTripRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_falseRings
 * @constant
 * @type {number}
 */
export
const TroubleType_number_falseRings: 305 = 305 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_falseRings
 * @constant
 * @type {number}
 */
export
const falseRings: 305 = TroubleType_number_falseRings; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_doNotAnswer
 * @constant
 * @type {number}
 */
export
const TroubleType_number_doNotAnswer: 306 = 306 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_doNotAnswer
 * @constant
 * @type {number}
 */
export
const doNotAnswer: 306 = TroubleType_number_doNotAnswer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_reachRecording
 * @constant
 * @type {number}
 */
export
const TroubleType_number_reachRecording: 307 = 307 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_reachRecording
 * @constant
 * @type {number}
 */
export
const reachRecording: 307 = TroubleType_number_reachRecording; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaiseAStation
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotRaiseAStation: 308 = 308 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaiseAStation
 * @constant
 * @type {number}
 */
export
const canNotRaiseAStation: 308 = TroubleType_number_canNotRaiseAStation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaiseADrop
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotRaiseADrop: 309 = 309 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaiseADrop
 * @constant
 * @type {number}
 */
export
const canNotRaiseADrop: 309 = TroubleType_number_canNotRaiseADrop; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaiseACircuitLocation
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotRaiseACircuitLocation: 310 = 310 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRaiseACircuitLocation
 * @constant
 * @type {number}
 */
export
const canNotRaiseACircuitLocation: 310 = TroubleType_number_canNotRaiseACircuitLocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_ringNoAnswer
 * @constant
 * @type {number}
 */
export
const TroubleType_number_ringNoAnswer: 311 = 311 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_ringNoAnswer
 * @constant
 * @type {number}
 */
export
const ringNoAnswer: 311 = TroubleType_number_ringNoAnswer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_reorder
 * @constant
 * @type {number}
 */
export
const TroubleType_number_reorder: 312 = 312 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_reorder
 * @constant
 * @type {number}
 */
export
const reorder: 312 = TroubleType_number_reorder; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_alwaysBusy
 * @constant
 * @type {number}
 */
export
const TroubleType_number_alwaysBusy: 313 = 313 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_alwaysBusy
 * @constant
 * @type {number}
 */
export
const alwaysBusy: 313 = TroubleType_number_alwaysBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellDoesNotRing
 * @constant
 * @type {number}
 */
export
const TroubleType_number_bellDoesNotRing: 314 = 314 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellDoesNotRing
 * @constant
 * @type {number}
 */
export
const bellDoesNotRing: 314 = TroubleType_number_bellDoesNotRing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellDoesNotRing2
 * @constant
 * @type {number}
 */
export
const TroubleType_number_bellDoesNotRing2: 315 = 315 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellDoesNotRing2
 * @constant
 * @type {number}
 */
export
const bellDoesNotRing2: 315 = TroubleType_number_bellDoesNotRing2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellRingsCanNotAnswer
 * @constant
 * @type {number}
 */
export
const TroubleType_number_bellRingsCanNotAnswer: 316 = 316 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellRingsCanNotAnswer
 * @constant
 * @type {number}
 */
export
const bellRingsCanNotAnswer: 316 = TroubleType_number_bellRingsCanNotAnswer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellRingsAfterAnswer
 * @constant
 * @type {number}
 */
export
const TroubleType_number_bellRingsAfterAnswer: 317 = 317 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_bellRingsAfterAnswer
 * @constant
 * @type {number}
 */
export
const bellRingsAfterAnswer: 317 = TroubleType_number_bellRingsAfterAnswer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noRingNoAnswer
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noRingNoAnswer: 318 = 318 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noRingNoAnswer
 * @constant
 * @type {number}
 */
export
const noRingNoAnswer: 318 = TroubleType_number_noRingNoAnswer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherRingTrouble
 * @constant
 * @type {number}
 */
export
const TroubleType_number_otherRingTrouble: 319 = 319 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherRingTrouble
 * @constant
 * @type {number}
 */
export
const otherRingTrouble: 319 = TroubleType_number_otherRingTrouble; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_receivesCallsForWrongNumber
 * @constant
 * @type {number}
 */
export
const TroubleType_number_receivesCallsForWrongNumber: 320 = 320 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_receivesCallsForWrongNumber
 * @constant
 * @type {number}
 */
export
const receivesCallsForWrongNumber: 320 = TroubleType_number_receivesCallsForWrongNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_recordingOnLine
 * @constant
 * @type {number}
 */
export
const TroubleType_number_recordingOnLine: 321 = 321 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_recordingOnLine
 * @constant
 * @type {number}
 */
export
const recordingOnLine: 321 = TroubleType_number_recordingOnLine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeHeardGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotBeHeardGroup: 400 = 400 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeHeardGroup
 * @constant
 * @type {number}
 */
export
const canNotBeHeardGroup: 400 = TroubleType_number_canNotBeHeardGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeHeard
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotBeHeard: 401 = 401 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeHeard
 * @constant
 * @type {number}
 */
export
const canNotBeHeard: 401 = TroubleType_number_canNotBeHeard; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotHear
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotHear: 402 = 402 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotHear
 * @constant
 * @type {number}
 */
export
const canNotHear: 402 = TroubleType_number_canNotHear; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_fading
 * @constant
 * @type {number}
 */
export
const TroubleType_number_fading: 403 = 403 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_fading
 * @constant
 * @type {number}
 */
export
const fading: 403 = TroubleType_number_fading; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_distant
 * @constant
 * @type {number}
 */
export
const TroubleType_number_distant: 404 = 404 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_distant
 * @constant
 * @type {number}
 */
export
const distant: 404 = TroubleType_number_distant; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_reachedWrongNumberGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_reachedWrongNumberGroup: 500 = 500 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_reachedWrongNumberGroup
 * @constant
 * @type {number}
 */
export
const reachedWrongNumberGroup: 500 = TroubleType_number_reachedWrongNumberGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_wrongNumber
 * @constant
 * @type {number}
 */
export
const TroubleType_number_wrongNumber: 501 = 501 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_wrongNumber
 * @constant
 * @type {number}
 */
export
const wrongNumber: 501 = TroubleType_number_wrongNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitOperationGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_circuitOperationGroup: 600 = 600 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitOperationGroup
 * @constant
 * @type {number}
 */
export
const circuitOperationGroup: 600 = TroubleType_number_circuitOperationGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_open
 * @constant
 * @type {number}
 */
export
const TroubleType_number_open: 601 = 601 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_open
 * @constant
 * @type {number}
 */
export
const open: 601 = TroubleType_number_open; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_falseDisconnect
 * @constant
 * @type {number}
 */
export
const TroubleType_number_falseDisconnect: 602 = 602 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_falseDisconnect
 * @constant
 * @type {number}
 */
export
const falseDisconnect: 602 = TroubleType_number_falseDisconnect; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_grounded
 * @constant
 * @type {number}
 */
export
const TroubleType_number_grounded: 603 = 603 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_grounded
 * @constant
 * @type {number}
 */
export
const grounded: 603 = TroubleType_number_grounded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeSignalled
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotBeSignalled: 604 = 604 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotBeSignalled
 * @constant
 * @type {number}
 */
export
const canNotBeSignalled: 604 = TroubleType_number_canNotBeSignalled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotSignal
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotSignal: 605 = 605 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotSignal
 * @constant
 * @type {number}
 */
export
const canNotSignal: 605 = TroubleType_number_canNotSignal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_permanentSignal
 * @constant
 * @type {number}
 */
export
const TroubleType_number_permanentSignal: 606 = 606 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_permanentSignal
 * @constant
 * @type {number}
 */
export
const permanentSignal: 606 = TroubleType_number_permanentSignal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_improperSupervision
 * @constant
 * @type {number}
 */
export
const TroubleType_number_improperSupervision: 607 = 607 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_improperSupervision
 * @constant
 * @type {number}
 */
export
const improperSupervision: 607 = TroubleType_number_improperSupervision; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_supervision
 * @constant
 * @type {number}
 */
export
const TroubleType_number_supervision: 608 = 608 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_supervision
 * @constant
 * @type {number}
 */
export
const supervision: 608 = TroubleType_number_supervision; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotMeet
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotMeet: 609 = 609 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotMeet
 * @constant
 * @type {number}
 */
export
const canNotMeet: 609 = TroubleType_number_canNotMeet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotReleaseCircuit
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotReleaseCircuit: 610 = 610 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotReleaseCircuit
 * @constant
 * @type {number}
 */
export
const canNotReleaseCircuit: 610 = TroubleType_number_canNotReleaseCircuit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hungUp
 * @constant
 * @type {number}
 */
export
const TroubleType_number_hungUp: 611 = 611 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hungUp
 * @constant
 * @type {number}
 */
export
const hungUp: 611 = TroubleType_number_hungUp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noWinkStart
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noWinkStart: 612 = 612 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noWinkStart
 * @constant
 * @type {number}
 */
export
const noWinkStart: 612 = TroubleType_number_noWinkStart; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noSF
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noSF: 613 = 613 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noSF
 * @constant
 * @type {number}
 */
export
const noSF: 613 = TroubleType_number_noSF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lowSF
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lowSF: 614 = 614 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lowSF
 * @constant
 * @type {number}
 */
export
const lowSF: 614 = TroubleType_number_lowSF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noContinuity
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noContinuity: 615 = 615 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noContinuity
 * @constant
 * @type {number}
 */
export
const noContinuity: 615 = TroubleType_number_noContinuity; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cutCable
 * @constant
 * @type {number}
 */
export
const TroubleType_number_cutCable: 616 = 616 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cutCable
 * @constant
 * @type {number}
 */
export
const cutCable: 616 = TroubleType_number_cutCable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_openToDEMARC
 * @constant
 * @type {number}
 */
export
const TroubleType_number_openToDEMARC: 617 = 617 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_openToDEMARC
 * @constant
 * @type {number}
 */
export
const openToDEMARC: 617 = TroubleType_number_openToDEMARC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noRingGenerator
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noRingGenerator: 618 = 618 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noRingGenerator
 * @constant
 * @type {number}
 */
export
const noRingGenerator: 618 = TroubleType_number_noRingGenerator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_badERL
 * @constant
 * @type {number}
 */
export
const TroubleType_number_badERL: 619 = 619 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_badERL
 * @constant
 * @type {number}
 */
export
const badERL: 619 = TroubleType_number_badERL; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_echo
 * @constant
 * @type {number}
 */
export
const TroubleType_number_echo: 620 = 620 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_echo
 * @constant
 * @type {number}
 */
export
const echo: 620 = TroubleType_number_echo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hollow
 * @constant
 * @type {number}
 */
export
const TroubleType_number_hollow: 621 = 621 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hollow
 * @constant
 * @type {number}
 */
export
const hollow: 621 = TroubleType_number_hollow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitDeadNoActivity
 * @constant
 * @type {number}
 */
export
const TroubleType_number_circuitDeadNoActivity: 622 = 622 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitDeadNoActivity
 * @constant
 * @type {number}
 */
export
const circuitDeadNoActivity: 622 = TroubleType_number_circuitDeadNoActivity; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitDown
 * @constant
 * @type {number}
 */
export
const TroubleType_number_circuitDown: 623 = 623 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitDown
 * @constant
 * @type {number}
 */
export
const circuitDown: 623 = TroubleType_number_circuitDown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_failingCircuit
 * @constant
 * @type {number}
 */
export
const TroubleType_number_failingCircuit: 624 = 624 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_failingCircuit
 * @constant
 * @type {number}
 */
export
const failingCircuit: 624 = TroubleType_number_failingCircuit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noSignal
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noSignal: 625 = 625 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noSignal
 * @constant
 * @type {number}
 */
export
const noSignal: 625 = TroubleType_number_noSignal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_seizureOnCircuit
 * @constant
 * @type {number}
 */
export
const TroubleType_number_seizureOnCircuit: 626 = 626 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_seizureOnCircuit
 * @constant
 * @type {number}
 */
export
const seizureOnCircuit: 626 = TroubleType_number_seizureOnCircuit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lossEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lossEPSCSorSwitchedServices: 627 = 627 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lossEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export
const lossEPSCSorSwitchedServices: 627 = TroubleType_number_lossEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_monitorCircuit
 * @constant
 * @type {number}
 */
export
const TroubleType_number_monitorCircuit: 628 = 628 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_monitorCircuit
 * @constant
 * @type {number}
 */
export
const monitorCircuit: 628 = TroubleType_number_monitorCircuit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_newServiceNotWorking
 * @constant
 * @type {number}
 */
export
const TroubleType_number_newServiceNotWorking: 629 = 629 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_newServiceNotWorking
 * @constant
 * @type {number}
 */
export
const newServiceNotWorking: 629 = TroubleType_number_newServiceNotWorking; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_openEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export
const TroubleType_number_openEPSCSorSwitchedServices: 630 = 630 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_openEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export
const openEPSCSorSwitchedServices: 630 = TroubleType_number_openEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherVoiceDescribeAdditInfo
 * @constant
 * @type {number}
 */
export
const TroubleType_number_otherVoiceDescribeAdditInfo: 631 = 631 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherVoiceDescribeAdditInfo
 * @constant
 * @type {number}
 */
export
const otherVoiceDescribeAdditInfo: 631 = TroubleType_number_otherVoiceDescribeAdditInfo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cutOffsGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_cutOffsGroup: 700 = 700 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cutOffsGroup
 * @constant
 * @type {number}
 */
export
const cutOffsGroup: 700 = TroubleType_number_cutOffsGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cutsOff
 * @constant
 * @type {number}
 */
export
const TroubleType_number_cutsOff: 701 = 701 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cutsOff
 * @constant
 * @type {number}
 */
export
const cutsOff: 701 = TroubleType_number_cutsOff; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noiseProblemGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noiseProblemGroup: 800 = 800 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noiseProblemGroup
 * @constant
 * @type {number}
 */
export
const noiseProblemGroup: 800 = TroubleType_number_noiseProblemGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_intermittentNoise
 * @constant
 * @type {number}
 */
export
const TroubleType_number_intermittentNoise: 801 = 801 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_intermittentNoise
 * @constant
 * @type {number}
 */
export
const intermittentNoise: 801 = TroubleType_number_intermittentNoise; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noisy
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noisy: 802 = 802 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noisy
 * @constant
 * @type {number}
 */
export
const noisy: 802 = TroubleType_number_noisy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_foreignTone
 * @constant
 * @type {number}
 */
export
const TroubleType_number_foreignTone: 803 = 803 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_foreignTone
 * @constant
 * @type {number}
 */
export
const foreignTone: 803 = TroubleType_number_foreignTone; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_clipping
 * @constant
 * @type {number}
 */
export
const TroubleType_number_clipping: 804 = 804 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_clipping
 * @constant
 * @type {number}
 */
export
const clipping: 804 = TroubleType_number_clipping; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_crossTalk
 * @constant
 * @type {number}
 */
export
const TroubleType_number_crossTalk: 805 = 805 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_crossTalk
 * @constant
 * @type {number}
 */
export
const crossTalk: 805 = TroubleType_number_crossTalk; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_staticOnLine
 * @constant
 * @type {number}
 */
export
const TroubleType_number_staticOnLine: 806 = 806 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_staticOnLine
 * @constant
 * @type {number}
 */
export
const staticOnLine: 806 = TroubleType_number_staticOnLine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_groundHum
 * @constant
 * @type {number}
 */
export
const TroubleType_number_groundHum: 807 = 807 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_groundHum
 * @constant
 * @type {number}
 */
export
const groundHum: 807 = TroubleType_number_groundHum; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hearsOtherOnLine
 * @constant
 * @type {number}
 */
export
const TroubleType_number_hearsOtherOnLine: 808 = 808 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hearsOtherOnLine
 * @constant
 * @type {number}
 */
export
const hearsOtherOnLine: 808 = TroubleType_number_hearsOtherOnLine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_humOnLine
 * @constant
 * @type {number}
 */
export
const TroubleType_number_humOnLine: 809 = 809 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_humOnLine
 * @constant
 * @type {number}
 */
export
const humOnLine: 809 = TroubleType_number_humOnLine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_clicking
 * @constant
 * @type {number}
 */
export
const TroubleType_number_clicking: 810 = 810 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_clicking
 * @constant
 * @type {number}
 */
export
const clicking: 810 = TroubleType_number_clicking; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noiseEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noiseEPSCSorSwitchedServices: 811 = 811 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noiseEPSCSorSwitchedServices
 * @constant
 * @type {number}
 */
export
const noiseEPSCSorSwitchedServices: 811 = TroubleType_number_noiseEPSCSorSwitchedServices; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_levelTroublesGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_levelTroublesGroup: 900 = 900 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_levelTroublesGroup
 * @constant
 * @type {number}
 */
export
const levelTroublesGroup: 900 = TroubleType_number_levelTroublesGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lowLevels
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lowLevels: 901 = 901 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lowLevels
 * @constant
 * @type {number}
 */
export
const lowLevels: 901 = TroubleType_number_lowLevels; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highLevels
 * @constant
 * @type {number}
 */
export
const TroubleType_number_highLevels: 902 = 902 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highLevels
 * @constant
 * @type {number}
 */
export
const highLevels: 902 = TroubleType_number_highLevels; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_longLevels
 * @constant
 * @type {number}
 */
export
const TroubleType_number_longLevels: 903 = 903 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_longLevels
 * @constant
 * @type {number}
 */
export
const longLevels: 903 = TroubleType_number_longLevels; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hotLevels
 * @constant
 * @type {number}
 */
export
const TroubleType_number_hotLevels: 904 = 904 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hotLevels
 * @constant
 * @type {number}
 */
export
const hotLevels: 904 = TroubleType_number_hotLevels; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highEndRollOff
 * @constant
 * @type {number}
 */
export
const TroubleType_number_highEndRollOff: 905 = 905 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highEndRollOff
 * @constant
 * @type {number}
 */
export
const highEndRollOff: 905 = TroubleType_number_highEndRollOff; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lowEndRollOff
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lowEndRollOff: 906 = 906 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lowEndRollOff
 * @constant
 * @type {number}
 */
export
const lowEndRollOff: 906 = TroubleType_number_lowEndRollOff; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_needsEqualized
 * @constant
 * @type {number}
 */
export
const TroubleType_number_needsEqualized: 907 = 907 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_needsEqualized
 * @constant
 * @type {number}
 */
export
const needsEqualized: 907 = TroubleType_number_needsEqualized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lineLoss
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lineLoss: 908 = 908 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lineLoss
 * @constant
 * @type {number}
 */
export
const lineLoss: 908 = TroubleType_number_lineLoss; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_doesNotPassFreqResponse
 * @constant
 * @type {number}
 */
export
const TroubleType_number_doesNotPassFreqResponse: 909 = 909 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_doesNotPassFreqResponse
 * @constant
 * @type {number}
 */
export
const doesNotPassFreqResponse: 909 = TroubleType_number_doesNotPassFreqResponse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_miscellaneousTroubleGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_miscellaneousTroubleGroup: 1000 = 1000 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_miscellaneousTroubleGroup
 * @constant
 * @type {number}
 */
export
const miscellaneousTroubleGroup: 1000 = TroubleType_number_miscellaneousTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hiCapDown
 * @constant
 * @type {number}
 */
export
const TroubleType_number_hiCapDown: 1001 = 1001 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hiCapDown
 * @constant
 * @type {number}
 */
export
const hiCapDown: 1001 = TroubleType_number_hiCapDown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_carrierDown
 * @constant
 * @type {number}
 */
export
const TroubleType_number_carrierDown: 1002 = 1002 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_carrierDown
 * @constant
 * @type {number}
 */
export
const carrierDown: 1002 = TroubleType_number_carrierDown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_biPolarViolations
 * @constant
 * @type {number}
 */
export
const TroubleType_number_biPolarViolations: 1003 = 1003 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_biPolarViolations
 * @constant
 * @type {number}
 */
export
const biPolarViolations: 1003 = TroubleType_number_biPolarViolations; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_frameErrorsHiCap
 * @constant
 * @type {number}
 */
export
const TroubleType_number_frameErrorsHiCap: 1004 = 1004 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_frameErrorsHiCap
 * @constant
 * @type {number}
 */
export
const frameErrorsHiCap: 1004 = TroubleType_number_frameErrorsHiCap; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_outOfFrame
 * @constant
 * @type {number}
 */
export
const TroubleType_number_outOfFrame: 1005 = 1005 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_outOfFrame
 * @constant
 * @type {number}
 */
export
const outOfFrame: 1005 = TroubleType_number_outOfFrame; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lossOfSync
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lossOfSync: 1006 = 1006 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lossOfSync
 * @constant
 * @type {number}
 */
export
const lossOfSync: 1006 = TroubleType_number_lossOfSync; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_frameSlips
 * @constant
 * @type {number}
 */
export
const TroubleType_number_frameSlips: 1007 = 1007 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_frameSlips
 * @constant
 * @type {number}
 */
export
const frameSlips: 1007 = TroubleType_number_frameSlips; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noLoopback
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noLoopback: 1008 = 1008 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noLoopback
 * @constant
 * @type {number}
 */
export
const noLoopback: 1008 = TroubleType_number_noLoopback; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotLoopbackDEMARC
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotLoopbackDEMARC: 1009 = 1009 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotLoopbackDEMARC
 * @constant
 * @type {number}
 */
export
const canNotLoopbackDEMARC: 1009 = TroubleType_number_canNotLoopbackDEMARC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_recordingOnCircuit
 * @constant
 * @type {number}
 */
export
const TroubleType_number_recordingOnCircuit: 1010 = 1010 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_recordingOnCircuit
 * @constant
 * @type {number}
 */
export
const recordingOnCircuit: 1010 = TroubleType_number_recordingOnCircuit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_linesNeedTagging
 * @constant
 * @type {number}
 */
export
const TroubleType_number_linesNeedTagging: 1011 = 1011 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_linesNeedTagging
 * @constant
 * @type {number}
 */
export
const linesNeedTagging: 1011 = TroubleType_number_linesNeedTagging; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_outwatsRingingin
 * @constant
 * @type {number}
 */
export
const TroubleType_number_outwatsRingingin: 1012 = 1012 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_outwatsRingingin
 * @constant
 * @type {number}
 */
export
const outwatsRingingin: 1012 = TroubleType_number_outwatsRingingin; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_remoteAccess
 * @constant
 * @type {number}
 */
export
const TroubleType_number_remoteAccess: 1013 = 1013 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_remoteAccess
 * @constant
 * @type {number}
 */
export
const remoteAccess: 1013 = TroubleType_number_remoteAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_other
 * @constant
 * @type {number}
 */
export
const TroubleType_number_other: 1014 = 1014 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_other
 * @constant
 * @type {number}
 */
export
const other: 1014 = TroubleType_number_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_alarm
 * @constant
 * @type {number}
 */
export
const TroubleType_number_alarm: 1015 = 1015 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_alarm
 * @constant
 * @type {number}
 */
export
const alarm: 1015 = TroubleType_number_alarm; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_memoryServiceProblemGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_memoryServiceProblemGroup: 1100 = 1100 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_memoryServiceProblemGroup
 * @constant
 * @type {number}
 */
export
const memoryServiceProblemGroup: 1100 = TroubleType_number_memoryServiceProblemGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataTroubleGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_dataTroubleGroup: 1200 = 1200 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataTroubleGroup
 * @constant
 * @type {number}
 */
export
const dataTroubleGroup: 1200 = TroubleType_number_dataTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotReceiveData
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotReceiveData: 1201 = 1201 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotReceiveData
 * @constant
 * @type {number}
 */
export
const canNotReceiveData: 1201 = TroubleType_number_canNotReceiveData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotSendData
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotSendData: 1202 = 1202 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotSendData
 * @constant
 * @type {number}
 */
export
const canNotSendData: 1202 = TroubleType_number_canNotSendData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotTransmitCanNotReceive
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotTransmitCanNotReceive: 1203 = 1203 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotTransmitCanNotReceive
 * @constant
 * @type {number}
 */
export
const canNotTransmitCanNotReceive: 1203 = TroubleType_number_canNotTransmitCanNotReceive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noReceive
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noReceive: 1204 = 1204 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noReceive
 * @constant
 * @type {number}
 */
export
const noReceive: 1204 = TroubleType_number_noReceive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noResponse
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noResponse: 1205 = 1205 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noResponse
 * @constant
 * @type {number}
 */
export
const noResponse: 1205 = TroubleType_number_noResponse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_delay
 * @constant
 * @type {number}
 */
export
const TroubleType_number_delay: 1206 = 1206 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_delay
 * @constant
 * @type {number}
 */
export
const delay: 1206 = TroubleType_number_delay; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_impulseNoise
 * @constant
 * @type {number}
 */
export
const TroubleType_number_impulseNoise: 1207 = 1207 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_impulseNoise
 * @constant
 * @type {number}
 */
export
const impulseNoise: 1207 = TroubleType_number_impulseNoise; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_phaseJitter
 * @constant
 * @type {number}
 */
export
const TroubleType_number_phaseJitter: 1208 = 1208 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_phaseJitter
 * @constant
 * @type {number}
 */
export
const phaseJitter: 1208 = TroubleType_number_phaseJitter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_harmonicDistortion
 * @constant
 * @type {number}
 */
export
const TroubleType_number_harmonicDistortion: 1209 = 1209 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_harmonicDistortion
 * @constant
 * @type {number}
 */
export
const harmonicDistortion: 1209 = TroubleType_number_harmonicDistortion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highDistortion
 * @constant
 * @type {number}
 */
export
const TroubleType_number_highDistortion: 1210 = 1210 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highDistortion
 * @constant
 * @type {number}
 */
export
const highDistortion: 1210 = TroubleType_number_highDistortion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noDataLoopback
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noDataLoopback: 1211 = 1211 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noDataLoopback
 * @constant
 * @type {number}
 */
export
const noDataLoopback: 1211 = TroubleType_number_noDataLoopback; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noCarrier
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noCarrier: 1212 = 1212 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noCarrier
 * @constant
 * @type {number}
 */
export
const noCarrier: 1212 = TroubleType_number_noCarrier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_notPolling
 * @constant
 * @type {number}
 */
export
const TroubleType_number_notPolling: 1213 = 1213 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_notPolling
 * @constant
 * @type {number}
 */
export
const notPolling: 1213 = TroubleType_number_notPolling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataFramingErrors
 * @constant
 * @type {number}
 */
export
const TroubleType_number_dataFramingErrors: 1214 = 1214 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataFramingErrors
 * @constant
 * @type {number}
 */
export
const dataFramingErrors: 1214 = TroubleType_number_dataFramingErrors; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dropOuts
 * @constant
 * @type {number}
 */
export
const TroubleType_number_dropOuts: 1215 = 1215 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dropOuts
 * @constant
 * @type {number}
 */
export
const dropOuts: 1215 = TroubleType_number_dropOuts; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hits
 * @constant
 * @type {number}
 */
export
const TroubleType_number_hits: 1216 = 1216 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_hits
 * @constant
 * @type {number}
 */
export
const hits: 1216 = TroubleType_number_hits; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noAnswerBack
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noAnswerBack: 1217 = 1217 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noAnswerBack
 * @constant
 * @type {number}
 */
export
const noAnswerBack: 1217 = TroubleType_number_noAnswerBack; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_streamer
 * @constant
 * @type {number}
 */
export
const TroubleType_number_streamer: 1218 = 1218 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_streamer
 * @constant
 * @type {number}
 */
export
const streamer: 1218 = TroubleType_number_streamer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_outOfSpecification
 * @constant
 * @type {number}
 */
export
const TroubleType_number_outOfSpecification: 1219 = 1219 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_outOfSpecification
 * @constant
 * @type {number}
 */
export
const outOfSpecification: 1219 = TroubleType_number_outOfSpecification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRunToCSU
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotRunToCSU: 1220 = 1220 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRunToCSU
 * @constant
 * @type {number}
 */
export
const canNotRunToCSU: 1220 = TroubleType_number_canNotRunToCSU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRunToOSU
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotRunToOSU: 1221 = 1221 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotRunToOSU
 * @constant
 * @type {number}
 */
export
const canNotRunToOSU: 1221 = TroubleType_number_canNotRunToOSU; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_deadDataCircuit
 * @constant
 * @type {number}
 */
export
const TroubleType_number_deadDataCircuit: 1222 = 1222 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_deadDataCircuit
 * @constant
 * @type {number}
 */
export
const deadDataCircuit: 1222 = TroubleType_number_deadDataCircuit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitInLoopback
 * @constant
 * @type {number}
 */
export
const TroubleType_number_circuitInLoopback: 1223 = 1223 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_circuitInLoopback
 * @constant
 * @type {number}
 */
export
const circuitInLoopback: 1223 = TroubleType_number_circuitInLoopback; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_errors
 * @constant
 * @type {number}
 */
export
const TroubleType_number_errors: 1224 = 1224 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_errors
 * @constant
 * @type {number}
 */
export
const errors: 1224 = TroubleType_number_errors; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_garbledData
 * @constant
 * @type {number}
 */
export
const TroubleType_number_garbledData: 1225 = 1225 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_garbledData
 * @constant
 * @type {number}
 */
export
const garbledData: 1225 = TroubleType_number_garbledData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_invalidData
 * @constant
 * @type {number}
 */
export
const TroubleType_number_invalidData: 1226 = 1226 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_invalidData
 * @constant
 * @type {number}
 */
export
const invalidData: 1226 = TroubleType_number_invalidData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_crossModulation
 * @constant
 * @type {number}
 */
export
const TroubleType_number_crossModulation: 1227 = 1227 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_crossModulation
 * @constant
 * @type {number}
 */
export
const crossModulation: 1227 = TroubleType_number_crossModulation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_slowResponse
 * @constant
 * @type {number}
 */
export
const TroubleType_number_slowResponse: 1228 = 1228 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_slowResponse
 * @constant
 * @type {number}
 */
export
const slowResponse: 1228 = TroubleType_number_slowResponse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherDataDescribeAdditInfo
 * @constant
 * @type {number}
 */
export
const TroubleType_number_otherDataDescribeAdditInfo: 1229 = 1229 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherDataDescribeAdditInfo
 * @constant
 * @type {number}
 */
export
const otherDataDescribeAdditInfo: 1229 = TroubleType_number_otherDataDescribeAdditInfo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_gettingAllOnes
 * @constant
 * @type {number}
 */
export
const TroubleType_number_gettingAllOnes: 1230 = 1230 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_gettingAllOnes
 * @constant
 * @type {number}
 */
export
const gettingAllOnes: 1230 = TroubleType_number_gettingAllOnes; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_slip
 * @constant
 * @type {number}
 */
export
const TroubleType_number_slip: 1231 = 1231 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_slip
 * @constant
 * @type {number}
 */
export
const slip: 1231 = TroubleType_number_slip; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_stationTroubleGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_stationTroubleGroup: 1300 = 1300 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_stationTroubleGroup
 * @constant
 * @type {number}
 */
export
const stationTroubleGroup: 1300 = TroubleType_number_stationTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_voiceEquipment
 * @constant
 * @type {number}
 */
export
const TroubleType_number_voiceEquipment: 1301 = 1301 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_voiceEquipment
 * @constant
 * @type {number}
 */
export
const voiceEquipment: 1301 = TroubleType_number_voiceEquipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataEquipment
 * @constant
 * @type {number}
 */
export
const TroubleType_number_dataEquipment: 1302 = 1302 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataEquipment
 * @constant
 * @type {number}
 */
export
const dataEquipment: 1302 = TroubleType_number_dataEquipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_videoEquipment
 * @constant
 * @type {number}
 */
export
const TroubleType_number_videoEquipment: 1303 = 1303 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_videoEquipment
 * @constant
 * @type {number}
 */
export
const videoEquipment: 1303 = TroubleType_number_videoEquipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherEquipment
 * @constant
 * @type {number}
 */
export
const TroubleType_number_otherEquipment: 1304 = 1304 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherEquipment
 * @constant
 * @type {number}
 */
export
const otherEquipment: 1304 = TroubleType_number_otherEquipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_stationWiring
 * @constant
 * @type {number}
 */
export
const TroubleType_number_stationWiring: 1305 = 1305 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_stationWiring
 * @constant
 * @type {number}
 */
export
const stationWiring: 1305 = TroubleType_number_stationWiring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_physicalTroubleGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_physicalTroubleGroup: 1400 = 1400 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_physicalTroubleGroup
 * @constant
 * @type {number}
 */
export
const physicalTroubleGroup: 1400 = TroubleType_number_physicalTroubleGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lightBurnedOut
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lightBurnedOut: 1401 = 1401 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lightBurnedOut
 * @constant
 * @type {number}
 */
export
const lightBurnedOut: 1401 = TroubleType_number_lightBurnedOut; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataset
 * @constant
 * @type {number}
 */
export
const TroubleType_number_dataset: 1402 = 1402 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_dataset
 * @constant
 * @type {number}
 */
export
const dataset: 1402 = TroubleType_number_dataset; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_ttySet
 * @constant
 * @type {number}
 */
export
const TroubleType_number_ttySet: 1403 = 1403 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_ttySet
 * @constant
 * @type {number}
 */
export
const ttySet: 1403 = TroubleType_number_ttySet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highSpeedPrinter
 * @constant
 * @type {number}
 */
export
const TroubleType_number_highSpeedPrinter: 1404 = 1404 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_highSpeedPrinter
 * @constant
 * @type {number}
 */
export
const highSpeedPrinter: 1404 = TroubleType_number_highSpeedPrinter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_aNI
 * @constant
 * @type {number}
 */
export
const TroubleType_number_aNI: 1405 = 1405 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_aNI
 * @constant
 * @type {number}
 */
export
const aNI: 1405 = TroubleType_number_aNI; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_aLI
 * @constant
 * @type {number}
 */
export
const TroubleType_number_aLI: 1406 = 1406 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_aLI
 * @constant
 * @type {number}
 */
export
const aLI: 1406 = TroubleType_number_aLI; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotActivatePC
 * @constant
 * @type {number}
 */
export
const TroubleType_number_canNotActivatePC: 1407 = 1407 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_canNotActivatePC
 * @constant
 * @type {number}
 */
export
const canNotActivatePC: 1407 = TroubleType_number_canNotActivatePC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_modem
 * @constant
 * @type {number}
 */
export
const TroubleType_number_modem: 1408 = 1408 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_modem
 * @constant
 * @type {number}
 */
export
const modem: 1408 = TroubleType_number_modem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cathodeRayTube
 * @constant
 * @type {number}
 */
export
const TroubleType_number_cathodeRayTube: 1409 = 1409 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_cathodeRayTube
 * @constant
 * @type {number}
 */
export
const cathodeRayTube: 1409 = TroubleType_number_cathodeRayTube; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_looseJack
 * @constant
 * @type {number}
 */
export
const TroubleType_number_looseJack: 1410 = 1410 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_looseJack
 * @constant
 * @type {number}
 */
export
const looseJack: 1410 = TroubleType_number_looseJack; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_offHook
 * @constant
 * @type {number}
 */
export
const TroubleType_number_offHook: 1411 = 1411 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_offHook
 * @constant
 * @type {number}
 */
export
const offHook: 1411 = TroubleType_number_offHook; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_physicalProblem
 * @constant
 * @type {number}
 */
export
const TroubleType_number_physicalProblem: 1412 = 1412 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_physicalProblem
 * @constant
 * @type {number}
 */
export
const physicalProblem: 1412 = TroubleType_number_physicalProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_processorDead
 * @constant
 * @type {number}
 */
export
const TroubleType_number_processorDead: 1413 = 1413 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_processorDead
 * @constant
 * @type {number}
 */
export
const processorDead: 1413 = TroubleType_number_processorDead; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_wiringProblem
 * @constant
 * @type {number}
 */
export
const TroubleType_number_wiringProblem: 1414 = 1414 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_wiringProblem
 * @constant
 * @type {number}
 */
export
const wiringProblem: 1414 = TroubleType_number_wiringProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_wireBrokeSetBrokePoleDown
 * @constant
 * @type {number}
 */
export
const TroubleType_number_wireBrokeSetBrokePoleDown: 1415 = 1415 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_wireBrokeSetBrokePoleDown
 * @constant
 * @type {number}
 */
export
const wireBrokeSetBrokePoleDown: 1415 = TroubleType_number_wireBrokeSetBrokePoleDown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noRegister
 * @constant
 * @type {number}
 */
export
const TroubleType_number_noRegister: 1416 = 1416 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_noRegister
 * @constant
 * @type {number}
 */
export
const noRegister: 1416 = TroubleType_number_noRegister; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_stuckSender
 * @constant
 * @type {number}
 */
export
const TroubleType_number_stuckSender: 1417 = 1417 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_stuckSender
 * @constant
 * @type {number}
 */
export
const stuckSender: 1417 = TroubleType_number_stuckSender; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherStationTrouble
 * @constant
 * @type {number}
 */
export
const TroubleType_number_otherStationTrouble: 1418 = 1418 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherStationTrouble
 * @constant
 * @type {number}
 */
export
const otherStationTrouble: 1418 = TroubleType_number_otherStationTrouble; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherCaseGroup
 * @constant
 * @type {number}
 */
export
const TroubleType_number_otherCaseGroup: 1500 = 1500 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_otherCaseGroup
 * @constant
 * @type {number}
 */
export
const otherCaseGroup: 1500 = TroubleType_number_otherCaseGroup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_callTransferProblem
 * @constant
 * @type {number}
 */
export
const TroubleType_number_callTransferProblem: 1501 = 1501 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_callTransferProblem
 * @constant
 * @type {number}
 */
export
const callTransferProblem: 1501 = TroubleType_number_callTransferProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_callWaitingProblem
 * @constant
 * @type {number}
 */
export
const TroubleType_number_callWaitingProblem: 1502 = 1502 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_callWaitingProblem
 * @constant
 * @type {number}
 */
export
const callWaitingProblem: 1502 = TroubleType_number_callWaitingProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_customCallFeatureDoNotWork
 * @constant
 * @type {number}
 */
export
const TroubleType_number_customCallFeatureDoNotWork: 1503 = 1503 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_customCallFeatureDoNotWork
 * @constant
 * @type {number}
 */
export
const customCallFeatureDoNotWork: 1503 = TroubleType_number_customCallFeatureDoNotWork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_information
 * @constant
 * @type {number}
 */
export
const TroubleType_number_information: 1504 = 1504 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_information
 * @constant
 * @type {number}
 */
export
const information: 1504 = TroubleType_number_information; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_threeWayCallingProblem
 * @constant
 * @type {number}
 */
export
const TroubleType_number_threeWayCallingProblem: 1505 = 1505 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_threeWayCallingProblem
 * @constant
 * @type {number}
 */
export
const threeWayCallingProblem: 1505 = TroubleType_number_threeWayCallingProblem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_orderWork
 * @constant
 * @type {number}
 */
export
const TroubleType_number_orderWork: 1506 = 1506 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_orderWork
 * @constant
 * @type {number}
 */
export
const orderWork: 1506 = TroubleType_number_orderWork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseCktRequestedByIC
 * @constant
 * @type {number}
 */
export
const TroubleType_number_releaseCktRequestedByIC: 1507 = 1507 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseCktRequestedByIC
 * @constant
 * @type {number}
 */
export
const releaseCktRequestedByIC: 1507 = TroubleType_number_releaseCktRequestedByIC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseCktRequestedByEC
 * @constant
 * @type {number}
 */
export
const TroubleType_number_releaseCktRequestedByEC: 1508 = 1508 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseCktRequestedByEC
 * @constant
 * @type {number}
 */
export
const releaseCktRequestedByEC: 1508 = TroubleType_number_releaseCktRequestedByEC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseFacilityRequestedByIC
 * @constant
 * @type {number}
 */
export
const TroubleType_number_releaseFacilityRequestedByIC: 1509 = 1509 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseFacilityRequestedByIC
 * @constant
 * @type {number}
 */
export
const releaseFacilityRequestedByIC: 1509 = TroubleType_number_releaseFacilityRequestedByIC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseFacilityRequestedByEC
 * @constant
 * @type {number}
 */
export
const TroubleType_number_releaseFacilityRequestedByEC: 1510 = 1510 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_releaseFacilityRequestedByEC
 * @constant
 * @type {number}
 */
export
const releaseFacilityRequestedByEC: 1510 = TroubleType_number_releaseFacilityRequestedByEC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_requestForRoutine
 * @constant
 * @type {number}
 */
export
const TroubleType_number_requestForRoutine: 1511 = 1511 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_requestForRoutine
 * @constant
 * @type {number}
 */
export
const requestForRoutine: 1511 = TroubleType_number_requestForRoutine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_release
 * @constant
 * @type {number}
 */
export
const TroubleType_number_release: 1512 = 1512 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_release
 * @constant
 * @type {number}
 */
export
const release: 1512 = TroubleType_number_release; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_requestDispatch
 * @constant
 * @type {number}
 */
export
const TroubleType_number_requestDispatch: 1513 = 1513 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_requestDispatch
 * @constant
 * @type {number}
 */
export
const requestDispatch: 1513 = TroubleType_number_requestDispatch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_requestMonitorOfCircuit
 * @constant
 * @type {number}
 */
export
const TroubleType_number_requestMonitorOfCircuit: 1514 = 1514 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_requestMonitorOfCircuit
 * @constant
 * @type {number}
 */
export
const requestMonitorOfCircuit: 1514 = TroubleType_number_requestMonitorOfCircuit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_routineTestFailure
 * @constant
 * @type {number}
 */
export
const TroubleType_number_routineTestFailure: 1515 = 1515 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_routineTestFailure
 * @constant
 * @type {number}
 */
export
const routineTestFailure: 1515 = TroubleType_number_routineTestFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lostTimerReport
 * @constant
 * @type {number}
 */
export
const TroubleType_number_lostTimerReport: 1516 = 1516 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_lostTimerReport
 * @constant
 * @type {number}
 */
export
const lostTimerReport: 1516 = TroubleType_number_lostTimerReport; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_historicalReports
 * @constant
 * @type {number}
 */
export
const TroubleType_number_historicalReports: 1517 = 1517 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_historicalReports
 * @constant
 * @type {number}
 */
export
const historicalReports: 1517 = TroubleType_number_historicalReports; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_switchOrTrunkRelated
 * @constant
 * @type {number}
 */
export
const TroubleType_number_switchOrTrunkRelated: 1518 = 1518 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_switchOrTrunkRelated
 * @constant
 * @type {number}
 */
export
const switchOrTrunkRelated: 1518 = TroubleType_number_switchOrTrunkRelated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_testAssist
 * @constant
 * @type {number}
 */
export
const TroubleType_number_testAssist: 1519 = 1519 satisfies TroubleType_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleType_number_testAssist
 * @constant
 * @type {number}
 */
export
const testAssist: 1519 = TroubleType_number_testAssist; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TroubleType_number: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_TroubleType_number: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */

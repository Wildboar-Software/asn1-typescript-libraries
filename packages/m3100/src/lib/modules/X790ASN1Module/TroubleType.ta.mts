/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
import {
    TroubleType_number,
    _decode_TroubleType_number,
    _encode_TroubleType_number,
} from '../X790ASN1Module/TroubleType-number.ta.mjs';

/**
 * @summary TroubleType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleType  ::=  CHOICE {
 *   number
 *     INTEGER {-- Integer values are to be registered in the
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
 *              switchOrTrunkRelated(1518), testAssist(1519)},
 *   identifier  OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type TroubleType =
    | { number_: TroubleType_number } /* CHOICE_ALT_ROOT */
    | { identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_TroubleType: $.ASN1Decoder<TroubleType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TroubleType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleType} The decoded data structure.
 */
export function _decode_TroubleType(el: _Element) {
    if (!_cached_decoder_for_TroubleType) {
        _cached_decoder_for_TroubleType = $._decode_extensible_choice<TroubleType>(
            {
                'UNIVERSAL 2': ['number_', _decode_TroubleType_number],
                'UNIVERSAL 6': ['identifier', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_TroubleType(el);
}


let _cached_encoder_for_TroubleType: $.ASN1Encoder<TroubleType> | null = null;


/**
 * @summary Encodes a(n) TroubleType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleType, encoded as an ASN.1 Element.
 */
export function _encode_TroubleType(
    value: TroubleType,
    elGetter: $.ASN1Encoder<TroubleType>
) {
    if (!_cached_encoder_for_TroubleType) {
        _cached_encoder_for_TroubleType = $._encode_choice<TroubleType>(
            {
                number_: _encode_TroubleType_number,
                identifier: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TroubleType(value, elGetter);
}


/* eslint-enable */

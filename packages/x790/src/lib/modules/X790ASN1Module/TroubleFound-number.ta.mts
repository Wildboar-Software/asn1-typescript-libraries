/* eslint-disable */
import {
    type INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TroubleFound_number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleFound-number ::= INTEGER {-- Integer values are to be registered in the
 *              -- standard. Administrations may restrict
 *              -- the values to be used.
 *              pending(0), cameClear(1), centralOffice(2), switchTrouble(3),
 *              customerProvidedEquipment(4), facility(5),
 *              centralOfficeFacility(6), iCfacility(7), interexchangeCarrier(8),
 *              information(9), nonplanClassified(10), nonplanClassifiedIC(11),
 *              nonplanClassifiedEA(12), noTroubleFound(13), station(14),
 *              stationProductData(15), stationProductTerminal(16),
 *              stationProductVideo(17), stationProductVoice(18),
 *              stationWiring(19), otherStationEquipment(20), foundOKStation(21),
 *              servingBureau(22), testOK(23), publicServicesCoinSet(24),
 *              customerOperatingInstructions(25), testedOKVerifiedOK(26),
 *              coFacilityTestedFoundOK(27), outsideFacilityTestedFoundOK(28),
 *              referredOutToOtherDept(29), protectiveConnectingArrang(30),
 *              cpeCustomerResponsibility(31), preService(32), preServiceIC(33),
 *              preServiceEA(34), serviceNode(35), data(36),
 *              customerReferredToVendor(37), exchangeAccess(38),
 *              international(39), otherProvidedAccess(40), existingReport(41),
 *              cancelExclude(42), paBX(43), outsideWire(44),
 *              outsideTerminals(45), outsidePlantEquipment(46),
 *              outsidePlantFiberOptic(47), outsidePlantOther(48),
 *              coEquipmentOther(49), coEquipmentFrames(50), coConcentrator(51),
 *              receiverOffHook(52), cpeAuthorized(53), cpeTelcoMaintained(54),
 *              independentCompany(55), cpeCalledNumber(56),
 *              assigningProvisioning(57), interServiceCenter(58),
 *              referredOut(59), network(60)}
 * ```
 */
export
type TroubleFound_number = INTEGER;

/**
 * @summary TroubleFound_number_pending
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_pending: 0 = 0 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_pending
 * @constant
 * @type {number}
 */
export
const pending: 0 = TroubleFound_number_pending; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cameClear
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_cameClear: 1 = 1 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cameClear
 * @constant
 * @type {number}
 */
export
const cameClear: 1 = TroubleFound_number_cameClear; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_centralOffice
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_centralOffice: 2 = 2 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_centralOffice
 * @constant
 * @type {number}
 */
export
const centralOffice: 2 = TroubleFound_number_centralOffice; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_switchTrouble
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_switchTrouble: 3 = 3 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_switchTrouble
 * @constant
 * @type {number}
 */
export
const switchTrouble: 3 = TroubleFound_number_switchTrouble; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_customerProvidedEquipment
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_customerProvidedEquipment: 4 = 4 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_customerProvidedEquipment
 * @constant
 * @type {number}
 */
export
const customerProvidedEquipment: 4 = TroubleFound_number_customerProvidedEquipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_facility
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_facility: 5 = 5 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_facility
 * @constant
 * @type {number}
 */
export
const facility: 5 = TroubleFound_number_facility; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_centralOfficeFacility
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_centralOfficeFacility: 6 = 6 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_centralOfficeFacility
 * @constant
 * @type {number}
 */
export
const centralOfficeFacility: 6 = TroubleFound_number_centralOfficeFacility; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_iCfacility
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_iCfacility: 7 = 7 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_iCfacility
 * @constant
 * @type {number}
 */
export
const iCfacility: 7 = TroubleFound_number_iCfacility; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_interexchangeCarrier
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_interexchangeCarrier: 8 = 8 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_interexchangeCarrier
 * @constant
 * @type {number}
 */
export
const interexchangeCarrier: 8 = TroubleFound_number_interexchangeCarrier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_information
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_information: 9 = 9 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_information
 * @constant
 * @type {number}
 */
export
const information: 9 = TroubleFound_number_information; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_nonplanClassified
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_nonplanClassified: 10 = 10 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_nonplanClassified
 * @constant
 * @type {number}
 */
export
const nonplanClassified: 10 = TroubleFound_number_nonplanClassified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_nonplanClassifiedIC
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_nonplanClassifiedIC: 11 = 11 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_nonplanClassifiedIC
 * @constant
 * @type {number}
 */
export
const nonplanClassifiedIC: 11 = TroubleFound_number_nonplanClassifiedIC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_nonplanClassifiedEA
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_nonplanClassifiedEA: 12 = 12 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_nonplanClassifiedEA
 * @constant
 * @type {number}
 */
export
const nonplanClassifiedEA: 12 = TroubleFound_number_nonplanClassifiedEA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_noTroubleFound
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_noTroubleFound: 13 = 13 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_noTroubleFound
 * @constant
 * @type {number}
 */
export
const noTroubleFound: 13 = TroubleFound_number_noTroubleFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_station
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_station: 14 = 14 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_station
 * @constant
 * @type {number}
 */
export
const station: 14 = TroubleFound_number_station; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductData
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_stationProductData: 15 = 15 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductData
 * @constant
 * @type {number}
 */
export
const stationProductData: 15 = TroubleFound_number_stationProductData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductTerminal
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_stationProductTerminal: 16 = 16 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductTerminal
 * @constant
 * @type {number}
 */
export
const stationProductTerminal: 16 = TroubleFound_number_stationProductTerminal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductVideo
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_stationProductVideo: 17 = 17 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductVideo
 * @constant
 * @type {number}
 */
export
const stationProductVideo: 17 = TroubleFound_number_stationProductVideo; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductVoice
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_stationProductVoice: 18 = 18 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationProductVoice
 * @constant
 * @type {number}
 */
export
const stationProductVoice: 18 = TroubleFound_number_stationProductVoice; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationWiring
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_stationWiring: 19 = 19 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_stationWiring
 * @constant
 * @type {number}
 */
export
const stationWiring: 19 = TroubleFound_number_stationWiring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_otherStationEquipment
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_otherStationEquipment: 20 = 20 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_otherStationEquipment
 * @constant
 * @type {number}
 */
export
const otherStationEquipment: 20 = TroubleFound_number_otherStationEquipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_foundOKStation
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_foundOKStation: 21 = 21 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_foundOKStation
 * @constant
 * @type {number}
 */
export
const foundOKStation: 21 = TroubleFound_number_foundOKStation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_servingBureau
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_servingBureau: 22 = 22 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_servingBureau
 * @constant
 * @type {number}
 */
export
const servingBureau: 22 = TroubleFound_number_servingBureau; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_testOK
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_testOK: 23 = 23 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_testOK
 * @constant
 * @type {number}
 */
export
const testOK: 23 = TroubleFound_number_testOK; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_publicServicesCoinSet
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_publicServicesCoinSet: 24 = 24 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_publicServicesCoinSet
 * @constant
 * @type {number}
 */
export
const publicServicesCoinSet: 24 = TroubleFound_number_publicServicesCoinSet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_customerOperatingInstructions
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_customerOperatingInstructions: 25 = 25 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_customerOperatingInstructions
 * @constant
 * @type {number}
 */
export
const customerOperatingInstructions: 25 = TroubleFound_number_customerOperatingInstructions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_testedOKVerifiedOK
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_testedOKVerifiedOK: 26 = 26 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_testedOKVerifiedOK
 * @constant
 * @type {number}
 */
export
const testedOKVerifiedOK: 26 = TroubleFound_number_testedOKVerifiedOK; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_coFacilityTestedFoundOK: 27 = 27 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export
const coFacilityTestedFoundOK: 27 = TroubleFound_number_coFacilityTestedFoundOK; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsideFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_outsideFacilityTestedFoundOK: 28 = 28 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsideFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export
const outsideFacilityTestedFoundOK: 28 = TroubleFound_number_outsideFacilityTestedFoundOK; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_referredOutToOtherDept
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_referredOutToOtherDept: 29 = 29 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_referredOutToOtherDept
 * @constant
 * @type {number}
 */
export
const referredOutToOtherDept: 29 = TroubleFound_number_referredOutToOtherDept; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_protectiveConnectingArrang
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_protectiveConnectingArrang: 30 = 30 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_protectiveConnectingArrang
 * @constant
 * @type {number}
 */
export
const protectiveConnectingArrang: 30 = TroubleFound_number_protectiveConnectingArrang; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeCustomerResponsibility
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_cpeCustomerResponsibility: 31 = 31 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeCustomerResponsibility
 * @constant
 * @type {number}
 */
export
const cpeCustomerResponsibility: 31 = TroubleFound_number_cpeCustomerResponsibility; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_preService
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_preService: 32 = 32 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_preService
 * @constant
 * @type {number}
 */
export
const preService: 32 = TroubleFound_number_preService; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_preServiceIC
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_preServiceIC: 33 = 33 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_preServiceIC
 * @constant
 * @type {number}
 */
export
const preServiceIC: 33 = TroubleFound_number_preServiceIC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_preServiceEA
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_preServiceEA: 34 = 34 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_preServiceEA
 * @constant
 * @type {number}
 */
export
const preServiceEA: 34 = TroubleFound_number_preServiceEA; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_serviceNode
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_serviceNode: 35 = 35 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_serviceNode
 * @constant
 * @type {number}
 */
export
const serviceNode: 35 = TroubleFound_number_serviceNode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_data
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_data: 36 = 36 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_data
 * @constant
 * @type {number}
 */
export
const data: 36 = TroubleFound_number_data; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_customerReferredToVendor
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_customerReferredToVendor: 37 = 37 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_customerReferredToVendor
 * @constant
 * @type {number}
 */
export
const customerReferredToVendor: 37 = TroubleFound_number_customerReferredToVendor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_exchangeAccess
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_exchangeAccess: 38 = 38 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_exchangeAccess
 * @constant
 * @type {number}
 */
export
const exchangeAccess: 38 = TroubleFound_number_exchangeAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_international
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_international: 39 = 39 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_international
 * @constant
 * @type {number}
 */
export
const international: 39 = TroubleFound_number_international; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_otherProvidedAccess
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_otherProvidedAccess: 40 = 40 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_otherProvidedAccess
 * @constant
 * @type {number}
 */
export
const otherProvidedAccess: 40 = TroubleFound_number_otherProvidedAccess; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_existingReport
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_existingReport: 41 = 41 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_existingReport
 * @constant
 * @type {number}
 */
export
const existingReport: 41 = TroubleFound_number_existingReport; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cancelExclude
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_cancelExclude: 42 = 42 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cancelExclude
 * @constant
 * @type {number}
 */
export
const cancelExclude: 42 = TroubleFound_number_cancelExclude; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_paBX
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_paBX: 43 = 43 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_paBX
 * @constant
 * @type {number}
 */
export
const paBX: 43 = TroubleFound_number_paBX; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsideWire
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_outsideWire: 44 = 44 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsideWire
 * @constant
 * @type {number}
 */
export
const outsideWire: 44 = TroubleFound_number_outsideWire; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsideTerminals
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_outsideTerminals: 45 = 45 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsideTerminals
 * @constant
 * @type {number}
 */
export
const outsideTerminals: 45 = TroubleFound_number_outsideTerminals; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsidePlantEquipment
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_outsidePlantEquipment: 46 = 46 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsidePlantEquipment
 * @constant
 * @type {number}
 */
export
const outsidePlantEquipment: 46 = TroubleFound_number_outsidePlantEquipment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsidePlantFiberOptic
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_outsidePlantFiberOptic: 47 = 47 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsidePlantFiberOptic
 * @constant
 * @type {number}
 */
export
const outsidePlantFiberOptic: 47 = TroubleFound_number_outsidePlantFiberOptic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsidePlantOther
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_outsidePlantOther: 48 = 48 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_outsidePlantOther
 * @constant
 * @type {number}
 */
export
const outsidePlantOther: 48 = TroubleFound_number_outsidePlantOther; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coEquipmentOther
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_coEquipmentOther: 49 = 49 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coEquipmentOther
 * @constant
 * @type {number}
 */
export
const coEquipmentOther: 49 = TroubleFound_number_coEquipmentOther; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coEquipmentFrames
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_coEquipmentFrames: 50 = 50 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coEquipmentFrames
 * @constant
 * @type {number}
 */
export
const coEquipmentFrames: 50 = TroubleFound_number_coEquipmentFrames; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coConcentrator
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_coConcentrator: 51 = 51 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_coConcentrator
 * @constant
 * @type {number}
 */
export
const coConcentrator: 51 = TroubleFound_number_coConcentrator; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_receiverOffHook
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_receiverOffHook: 52 = 52 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_receiverOffHook
 * @constant
 * @type {number}
 */
export
const receiverOffHook: 52 = TroubleFound_number_receiverOffHook; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeAuthorized
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_cpeAuthorized: 53 = 53 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeAuthorized
 * @constant
 * @type {number}
 */
export
const cpeAuthorized: 53 = TroubleFound_number_cpeAuthorized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeTelcoMaintained
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_cpeTelcoMaintained: 54 = 54 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeTelcoMaintained
 * @constant
 * @type {number}
 */
export
const cpeTelcoMaintained: 54 = TroubleFound_number_cpeTelcoMaintained; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_independentCompany
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_independentCompany: 55 = 55 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_independentCompany
 * @constant
 * @type {number}
 */
export
const independentCompany: 55 = TroubleFound_number_independentCompany; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeCalledNumber
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_cpeCalledNumber: 56 = 56 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_cpeCalledNumber
 * @constant
 * @type {number}
 */
export
const cpeCalledNumber: 56 = TroubleFound_number_cpeCalledNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_assigningProvisioning
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_assigningProvisioning: 57 = 57 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_assigningProvisioning
 * @constant
 * @type {number}
 */
export
const assigningProvisioning: 57 = TroubleFound_number_assigningProvisioning; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_interServiceCenter
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_interServiceCenter: 58 = 58 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_interServiceCenter
 * @constant
 * @type {number}
 */
export
const interServiceCenter: 58 = TroubleFound_number_interServiceCenter; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_referredOut
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_referredOut: 59 = 59 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_referredOut
 * @constant
 * @type {number}
 */
export
const referredOut: 59 = TroubleFound_number_referredOut; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_network
 * @constant
 * @type {number}
 */
export
const TroubleFound_number_network: 60 = 60 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TroubleFound_number_network
 * @constant
 * @type {number}
 */
export
const network: 60 = TroubleFound_number_network; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TroubleFound_number: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_TroubleFound_number: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */

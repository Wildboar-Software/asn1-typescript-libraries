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
 * @summary TroubleFound_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleFound-number ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TroubleFound_number = INTEGER;


/**
 * @summary TroubleFound_number_pending
 * @constant
 * @type {number}
 */
export const TroubleFound_number_pending = 0 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_pending
 * @constant
 * @type {number}
 */
export const pending = TroubleFound_number_pending satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cameClear
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cameClear = 1 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cameClear
 * @constant
 * @type {number}
 */
export const cameClear = TroubleFound_number_cameClear satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_centralOffice
 * @constant
 * @type {number}
 */
export const TroubleFound_number_centralOffice = 2 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_centralOffice
 * @constant
 * @type {number}
 */
export const centralOffice = TroubleFound_number_centralOffice satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_switchTrouble
 * @constant
 * @type {number}
 */
export const TroubleFound_number_switchTrouble = 3 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_switchTrouble
 * @constant
 * @type {number}
 */
export const switchTrouble = TroubleFound_number_switchTrouble satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_customerProvidedEquipment
 * @constant
 * @type {number}
 */
export const TroubleFound_number_customerProvidedEquipment = 4 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_customerProvidedEquipment
 * @constant
 * @type {number}
 */
export const customerProvidedEquipment = TroubleFound_number_customerProvidedEquipment satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_facility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_facility = 5 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_facility
 * @constant
 * @type {number}
 */
export const facility = TroubleFound_number_facility satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_centralOfficeFacility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_centralOfficeFacility = 6 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_centralOfficeFacility
 * @constant
 * @type {number}
 */
export const centralOfficeFacility = TroubleFound_number_centralOfficeFacility satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_iCfacility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_iCfacility = 7 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_iCfacility
 * @constant
 * @type {number}
 */
export const iCfacility = TroubleFound_number_iCfacility satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_interexchangeCarrier
 * @constant
 * @type {number}
 */
export const TroubleFound_number_interexchangeCarrier = 8 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_interexchangeCarrier
 * @constant
 * @type {number}
 */
export const interexchangeCarrier = TroubleFound_number_interexchangeCarrier satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_information
 * @constant
 * @type {number}
 */
export const TroubleFound_number_information = 9 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_information
 * @constant
 * @type {number}
 */
export const information = TroubleFound_number_information satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_nonplanClassified
 * @constant
 * @type {number}
 */
export const TroubleFound_number_nonplanClassified = 10 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_nonplanClassified
 * @constant
 * @type {number}
 */
export const nonplanClassified = TroubleFound_number_nonplanClassified satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_nonplanClassifiedIC
 * @constant
 * @type {number}
 */
export const TroubleFound_number_nonplanClassifiedIC = 11 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_nonplanClassifiedIC
 * @constant
 * @type {number}
 */
export const nonplanClassifiedIC = TroubleFound_number_nonplanClassifiedIC satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_nonplanClassifiedEA
 * @constant
 * @type {number}
 */
export const TroubleFound_number_nonplanClassifiedEA = 12 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_nonplanClassifiedEA
 * @constant
 * @type {number}
 */
export const nonplanClassifiedEA = TroubleFound_number_nonplanClassifiedEA satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_noTroubleFound
 * @constant
 * @type {number}
 */
export const TroubleFound_number_noTroubleFound = 13 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_noTroubleFound
 * @constant
 * @type {number}
 */
export const noTroubleFound = TroubleFound_number_noTroubleFound satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_station
 * @constant
 * @type {number}
 */
export const TroubleFound_number_station = 14 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_station
 * @constant
 * @type {number}
 */
export const station = TroubleFound_number_station satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductData
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductData = 15 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductData
 * @constant
 * @type {number}
 */
export const stationProductData = TroubleFound_number_stationProductData satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductTerminal
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductTerminal = 16 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductTerminal
 * @constant
 * @type {number}
 */
export const stationProductTerminal = TroubleFound_number_stationProductTerminal satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductVideo
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductVideo = 17 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductVideo
 * @constant
 * @type {number}
 */
export const stationProductVideo = TroubleFound_number_stationProductVideo satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductVoice
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductVoice = 18 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationProductVoice
 * @constant
 * @type {number}
 */
export const stationProductVoice = TroubleFound_number_stationProductVoice satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationWiring
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationWiring = 19 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_stationWiring
 * @constant
 * @type {number}
 */
export const stationWiring = TroubleFound_number_stationWiring satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_otherStationEquipment
 * @constant
 * @type {number}
 */
export const TroubleFound_number_otherStationEquipment = 20 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_otherStationEquipment
 * @constant
 * @type {number}
 */
export const otherStationEquipment = TroubleFound_number_otherStationEquipment satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_foundOKStation
 * @constant
 * @type {number}
 */
export const TroubleFound_number_foundOKStation = 21 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_foundOKStation
 * @constant
 * @type {number}
 */
export const foundOKStation = TroubleFound_number_foundOKStation satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_servingBureau
 * @constant
 * @type {number}
 */
export const TroubleFound_number_servingBureau = 22 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_servingBureau
 * @constant
 * @type {number}
 */
export const servingBureau = TroubleFound_number_servingBureau satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_testOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_testOK = 23 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_testOK
 * @constant
 * @type {number}
 */
export const testOK = TroubleFound_number_testOK satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_publicServicesCoinSet
 * @constant
 * @type {number}
 */
export const TroubleFound_number_publicServicesCoinSet = 24 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_publicServicesCoinSet
 * @constant
 * @type {number}
 */
export const publicServicesCoinSet = TroubleFound_number_publicServicesCoinSet satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_customerOperatingInstructions
 * @constant
 * @type {number}
 */
export const TroubleFound_number_customerOperatingInstructions = 25 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_customerOperatingInstructions
 * @constant
 * @type {number}
 */
export const customerOperatingInstructions = TroubleFound_number_customerOperatingInstructions satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_testedOKVerifiedOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_testedOKVerifiedOK = 26 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_testedOKVerifiedOK
 * @constant
 * @type {number}
 */
export const testedOKVerifiedOK = TroubleFound_number_testedOKVerifiedOK satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coFacilityTestedFoundOK = 27 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const coFacilityTestedFoundOK = TroubleFound_number_coFacilityTestedFoundOK satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsideFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsideFacilityTestedFoundOK = 28 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsideFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const outsideFacilityTestedFoundOK = TroubleFound_number_outsideFacilityTestedFoundOK satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_referredOutToOtherDept
 * @constant
 * @type {number}
 */
export const TroubleFound_number_referredOutToOtherDept = 29 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_referredOutToOtherDept
 * @constant
 * @type {number}
 */
export const referredOutToOtherDept = TroubleFound_number_referredOutToOtherDept satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_protectiveConnectingArrang
 * @constant
 * @type {number}
 */
export const TroubleFound_number_protectiveConnectingArrang = 30 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_protectiveConnectingArrang
 * @constant
 * @type {number}
 */
export const protectiveConnectingArrang = TroubleFound_number_protectiveConnectingArrang satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeCustomerResponsibility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeCustomerResponsibility = 31 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeCustomerResponsibility
 * @constant
 * @type {number}
 */
export const cpeCustomerResponsibility = TroubleFound_number_cpeCustomerResponsibility satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_preService
 * @constant
 * @type {number}
 */
export const TroubleFound_number_preService = 32 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_preService
 * @constant
 * @type {number}
 */
export const preService = TroubleFound_number_preService satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_preServiceIC
 * @constant
 * @type {number}
 */
export const TroubleFound_number_preServiceIC = 33 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_preServiceIC
 * @constant
 * @type {number}
 */
export const preServiceIC = TroubleFound_number_preServiceIC satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_preServiceEA
 * @constant
 * @type {number}
 */
export const TroubleFound_number_preServiceEA = 34 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_preServiceEA
 * @constant
 * @type {number}
 */
export const preServiceEA = TroubleFound_number_preServiceEA satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_serviceNode
 * @constant
 * @type {number}
 */
export const TroubleFound_number_serviceNode = 35 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_serviceNode
 * @constant
 * @type {number}
 */
export const serviceNode = TroubleFound_number_serviceNode satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_data
 * @constant
 * @type {number}
 */
export const TroubleFound_number_data = 36 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_data
 * @constant
 * @type {number}
 */
export const data = TroubleFound_number_data satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_customerReferredToVendor
 * @constant
 * @type {number}
 */
export const TroubleFound_number_customerReferredToVendor = 37 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_customerReferredToVendor
 * @constant
 * @type {number}
 */
export const customerReferredToVendor = TroubleFound_number_customerReferredToVendor satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_exchangeAccess
 * @constant
 * @type {number}
 */
export const TroubleFound_number_exchangeAccess = 38 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_exchangeAccess
 * @constant
 * @type {number}
 */
export const exchangeAccess = TroubleFound_number_exchangeAccess satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_international
 * @constant
 * @type {number}
 */
export const TroubleFound_number_international = 39 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_international
 * @constant
 * @type {number}
 */
export const international = TroubleFound_number_international satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_otherProvidedAccess
 * @constant
 * @type {number}
 */
export const TroubleFound_number_otherProvidedAccess = 40 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_otherProvidedAccess
 * @constant
 * @type {number}
 */
export const otherProvidedAccess = TroubleFound_number_otherProvidedAccess satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_existingReport
 * @constant
 * @type {number}
 */
export const TroubleFound_number_existingReport = 41 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_existingReport
 * @constant
 * @type {number}
 */
export const existingReport = TroubleFound_number_existingReport satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cancelExclude
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cancelExclude = 42 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cancelExclude
 * @constant
 * @type {number}
 */
export const cancelExclude = TroubleFound_number_cancelExclude satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_paBX
 * @constant
 * @type {number}
 */
export const TroubleFound_number_paBX = 43 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_paBX
 * @constant
 * @type {number}
 */
export const paBX = TroubleFound_number_paBX satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsideWire
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsideWire = 44 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsideWire
 * @constant
 * @type {number}
 */
export const outsideWire = TroubleFound_number_outsideWire satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsideTerminals
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsideTerminals = 45 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsideTerminals
 * @constant
 * @type {number}
 */
export const outsideTerminals = TroubleFound_number_outsideTerminals satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsidePlantEquipment
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsidePlantEquipment = 46 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsidePlantEquipment
 * @constant
 * @type {number}
 */
export const outsidePlantEquipment = TroubleFound_number_outsidePlantEquipment satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsidePlantFiberOptic
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsidePlantFiberOptic = 47 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsidePlantFiberOptic
 * @constant
 * @type {number}
 */
export const outsidePlantFiberOptic = TroubleFound_number_outsidePlantFiberOptic satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsidePlantOther
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsidePlantOther = 48 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_outsidePlantOther
 * @constant
 * @type {number}
 */
export const outsidePlantOther = TroubleFound_number_outsidePlantOther satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coEquipmentOther
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coEquipmentOther = 49 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coEquipmentOther
 * @constant
 * @type {number}
 */
export const coEquipmentOther = TroubleFound_number_coEquipmentOther satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coEquipmentFrames
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coEquipmentFrames = 50 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coEquipmentFrames
 * @constant
 * @type {number}
 */
export const coEquipmentFrames = TroubleFound_number_coEquipmentFrames satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coConcentrator
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coConcentrator = 51 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_coConcentrator
 * @constant
 * @type {number}
 */
export const coConcentrator = TroubleFound_number_coConcentrator satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_receiverOffHook
 * @constant
 * @type {number}
 */
export const TroubleFound_number_receiverOffHook = 52 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_receiverOffHook
 * @constant
 * @type {number}
 */
export const receiverOffHook = TroubleFound_number_receiverOffHook satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeAuthorized
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeAuthorized = 53 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeAuthorized
 * @constant
 * @type {number}
 */
export const cpeAuthorized = TroubleFound_number_cpeAuthorized satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeTelcoMaintained
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeTelcoMaintained = 54 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeTelcoMaintained
 * @constant
 * @type {number}
 */
export const cpeTelcoMaintained = TroubleFound_number_cpeTelcoMaintained satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_independentCompany
 * @constant
 * @type {number}
 */
export const TroubleFound_number_independentCompany = 55 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_independentCompany
 * @constant
 * @type {number}
 */
export const independentCompany = TroubleFound_number_independentCompany satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeCalledNumber
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeCalledNumber = 56 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_cpeCalledNumber
 * @constant
 * @type {number}
 */
export const cpeCalledNumber = TroubleFound_number_cpeCalledNumber satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_assigningProvisioning
 * @constant
 * @type {number}
 */
export const TroubleFound_number_assigningProvisioning = 57 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_assigningProvisioning
 * @constant
 * @type {number}
 */
export const assigningProvisioning = TroubleFound_number_assigningProvisioning satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_interServiceCenter
 * @constant
 * @type {number}
 */
export const TroubleFound_number_interServiceCenter = 58 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_interServiceCenter
 * @constant
 * @type {number}
 */
export const interServiceCenter = TroubleFound_number_interServiceCenter satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_referredOut
 * @constant
 * @type {number}
 */
export const TroubleFound_number_referredOut = 59 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_referredOut
 * @constant
 * @type {number}
 */
export const referredOut = TroubleFound_number_referredOut satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_network
 * @constant
 * @type {number}
 */
export const TroubleFound_number_network = 60 satisfies TroubleFound_number; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary TroubleFound_number_network
 * @constant
 * @type {number}
 */
export const network = TroubleFound_number_network satisfies TroubleFound_number; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_TroubleFound_number = $._decodeInteger;




export const _encode_TroubleFound_number = $._encodeInteger;


/* eslint-enable */

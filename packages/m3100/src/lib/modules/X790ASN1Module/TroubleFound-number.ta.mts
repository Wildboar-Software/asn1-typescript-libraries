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

/* START_OF_SYMBOL_DEFINITION TroubleFound_number */
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
/* END_OF_SYMBOL_DEFINITION TroubleFound_number */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_pending */
/**
 * @summary TroubleFound_number_pending
 * @constant
 * @type {number}
 */
export const TroubleFound_number_pending: TroubleFound_number = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_pending */

/* START_OF_SYMBOL_DEFINITION pending */
/**
 * @summary TroubleFound_number_pending
 * @constant
 * @type {number}
 */
export const pending: TroubleFound_number = TroubleFound_number_pending; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pending */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_cameClear */
/**
 * @summary TroubleFound_number_cameClear
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cameClear: TroubleFound_number = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_cameClear */

/* START_OF_SYMBOL_DEFINITION cameClear */
/**
 * @summary TroubleFound_number_cameClear
 * @constant
 * @type {number}
 */
export const cameClear: TroubleFound_number = TroubleFound_number_cameClear; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cameClear */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_centralOffice */
/**
 * @summary TroubleFound_number_centralOffice
 * @constant
 * @type {number}
 */
export const TroubleFound_number_centralOffice: TroubleFound_number = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_centralOffice */

/* START_OF_SYMBOL_DEFINITION centralOffice */
/**
 * @summary TroubleFound_number_centralOffice
 * @constant
 * @type {number}
 */
export const centralOffice: TroubleFound_number = TroubleFound_number_centralOffice; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION centralOffice */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_switchTrouble */
/**
 * @summary TroubleFound_number_switchTrouble
 * @constant
 * @type {number}
 */
export const TroubleFound_number_switchTrouble: TroubleFound_number = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_switchTrouble */

/* START_OF_SYMBOL_DEFINITION switchTrouble */
/**
 * @summary TroubleFound_number_switchTrouble
 * @constant
 * @type {number}
 */
export const switchTrouble: TroubleFound_number = TroubleFound_number_switchTrouble; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION switchTrouble */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_customerProvidedEquipment */
/**
 * @summary TroubleFound_number_customerProvidedEquipment
 * @constant
 * @type {number}
 */
export const TroubleFound_number_customerProvidedEquipment: TroubleFound_number = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_customerProvidedEquipment */

/* START_OF_SYMBOL_DEFINITION customerProvidedEquipment */
/**
 * @summary TroubleFound_number_customerProvidedEquipment
 * @constant
 * @type {number}
 */
export const customerProvidedEquipment: TroubleFound_number = TroubleFound_number_customerProvidedEquipment; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION customerProvidedEquipment */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_facility */
/**
 * @summary TroubleFound_number_facility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_facility: TroubleFound_number = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_facility */

/* START_OF_SYMBOL_DEFINITION facility */
/**
 * @summary TroubleFound_number_facility
 * @constant
 * @type {number}
 */
export const facility: TroubleFound_number = TroubleFound_number_facility; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION facility */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_centralOfficeFacility */
/**
 * @summary TroubleFound_number_centralOfficeFacility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_centralOfficeFacility: TroubleFound_number = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_centralOfficeFacility */

/* START_OF_SYMBOL_DEFINITION centralOfficeFacility */
/**
 * @summary TroubleFound_number_centralOfficeFacility
 * @constant
 * @type {number}
 */
export const centralOfficeFacility: TroubleFound_number = TroubleFound_number_centralOfficeFacility; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION centralOfficeFacility */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_iCfacility */
/**
 * @summary TroubleFound_number_iCfacility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_iCfacility: TroubleFound_number = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_iCfacility */

/* START_OF_SYMBOL_DEFINITION iCfacility */
/**
 * @summary TroubleFound_number_iCfacility
 * @constant
 * @type {number}
 */
export const iCfacility: TroubleFound_number = TroubleFound_number_iCfacility; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION iCfacility */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_interexchangeCarrier */
/**
 * @summary TroubleFound_number_interexchangeCarrier
 * @constant
 * @type {number}
 */
export const TroubleFound_number_interexchangeCarrier: TroubleFound_number = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_interexchangeCarrier */

/* START_OF_SYMBOL_DEFINITION interexchangeCarrier */
/**
 * @summary TroubleFound_number_interexchangeCarrier
 * @constant
 * @type {number}
 */
export const interexchangeCarrier: TroubleFound_number = TroubleFound_number_interexchangeCarrier; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interexchangeCarrier */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_information */
/**
 * @summary TroubleFound_number_information
 * @constant
 * @type {number}
 */
export const TroubleFound_number_information: TroubleFound_number = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_information */

/* START_OF_SYMBOL_DEFINITION information */
/**
 * @summary TroubleFound_number_information
 * @constant
 * @type {number}
 */
export const information: TroubleFound_number = TroubleFound_number_information; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION information */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_nonplanClassified */
/**
 * @summary TroubleFound_number_nonplanClassified
 * @constant
 * @type {number}
 */
export const TroubleFound_number_nonplanClassified: TroubleFound_number = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_nonplanClassified */

/* START_OF_SYMBOL_DEFINITION nonplanClassified */
/**
 * @summary TroubleFound_number_nonplanClassified
 * @constant
 * @type {number}
 */
export const nonplanClassified: TroubleFound_number = TroubleFound_number_nonplanClassified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION nonplanClassified */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_nonplanClassifiedIC */
/**
 * @summary TroubleFound_number_nonplanClassifiedIC
 * @constant
 * @type {number}
 */
export const TroubleFound_number_nonplanClassifiedIC: TroubleFound_number = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_nonplanClassifiedIC */

/* START_OF_SYMBOL_DEFINITION nonplanClassifiedIC */
/**
 * @summary TroubleFound_number_nonplanClassifiedIC
 * @constant
 * @type {number}
 */
export const nonplanClassifiedIC: TroubleFound_number = TroubleFound_number_nonplanClassifiedIC; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION nonplanClassifiedIC */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_nonplanClassifiedEA */
/**
 * @summary TroubleFound_number_nonplanClassifiedEA
 * @constant
 * @type {number}
 */
export const TroubleFound_number_nonplanClassifiedEA: TroubleFound_number = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_nonplanClassifiedEA */

/* START_OF_SYMBOL_DEFINITION nonplanClassifiedEA */
/**
 * @summary TroubleFound_number_nonplanClassifiedEA
 * @constant
 * @type {number}
 */
export const nonplanClassifiedEA: TroubleFound_number = TroubleFound_number_nonplanClassifiedEA; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION nonplanClassifiedEA */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_noTroubleFound */
/**
 * @summary TroubleFound_number_noTroubleFound
 * @constant
 * @type {number}
 */
export const TroubleFound_number_noTroubleFound: TroubleFound_number = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_noTroubleFound */

/* START_OF_SYMBOL_DEFINITION noTroubleFound */
/**
 * @summary TroubleFound_number_noTroubleFound
 * @constant
 * @type {number}
 */
export const noTroubleFound: TroubleFound_number = TroubleFound_number_noTroubleFound; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noTroubleFound */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_station */
/**
 * @summary TroubleFound_number_station
 * @constant
 * @type {number}
 */
export const TroubleFound_number_station: TroubleFound_number = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_station */

/* START_OF_SYMBOL_DEFINITION station */
/**
 * @summary TroubleFound_number_station
 * @constant
 * @type {number}
 */
export const station: TroubleFound_number = TroubleFound_number_station; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION station */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductData */
/**
 * @summary TroubleFound_number_stationProductData
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductData: TroubleFound_number = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductData */

/* START_OF_SYMBOL_DEFINITION stationProductData */
/**
 * @summary TroubleFound_number_stationProductData
 * @constant
 * @type {number}
 */
export const stationProductData: TroubleFound_number = TroubleFound_number_stationProductData; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stationProductData */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductTerminal */
/**
 * @summary TroubleFound_number_stationProductTerminal
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductTerminal: TroubleFound_number = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductTerminal */

/* START_OF_SYMBOL_DEFINITION stationProductTerminal */
/**
 * @summary TroubleFound_number_stationProductTerminal
 * @constant
 * @type {number}
 */
export const stationProductTerminal: TroubleFound_number = TroubleFound_number_stationProductTerminal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stationProductTerminal */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductVideo */
/**
 * @summary TroubleFound_number_stationProductVideo
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductVideo: TroubleFound_number = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductVideo */

/* START_OF_SYMBOL_DEFINITION stationProductVideo */
/**
 * @summary TroubleFound_number_stationProductVideo
 * @constant
 * @type {number}
 */
export const stationProductVideo: TroubleFound_number = TroubleFound_number_stationProductVideo; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stationProductVideo */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductVoice */
/**
 * @summary TroubleFound_number_stationProductVoice
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationProductVoice: TroubleFound_number = 18; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_stationProductVoice */

/* START_OF_SYMBOL_DEFINITION stationProductVoice */
/**
 * @summary TroubleFound_number_stationProductVoice
 * @constant
 * @type {number}
 */
export const stationProductVoice: TroubleFound_number = TroubleFound_number_stationProductVoice; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stationProductVoice */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_stationWiring */
/**
 * @summary TroubleFound_number_stationWiring
 * @constant
 * @type {number}
 */
export const TroubleFound_number_stationWiring: TroubleFound_number = 19; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_stationWiring */

/* START_OF_SYMBOL_DEFINITION stationWiring */
/**
 * @summary TroubleFound_number_stationWiring
 * @constant
 * @type {number}
 */
export const stationWiring: TroubleFound_number = TroubleFound_number_stationWiring; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION stationWiring */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_otherStationEquipment */
/**
 * @summary TroubleFound_number_otherStationEquipment
 * @constant
 * @type {number}
 */
export const TroubleFound_number_otherStationEquipment: TroubleFound_number = 20; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_otherStationEquipment */

/* START_OF_SYMBOL_DEFINITION otherStationEquipment */
/**
 * @summary TroubleFound_number_otherStationEquipment
 * @constant
 * @type {number}
 */
export const otherStationEquipment: TroubleFound_number = TroubleFound_number_otherStationEquipment; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION otherStationEquipment */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_foundOKStation */
/**
 * @summary TroubleFound_number_foundOKStation
 * @constant
 * @type {number}
 */
export const TroubleFound_number_foundOKStation: TroubleFound_number = 21; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_foundOKStation */

/* START_OF_SYMBOL_DEFINITION foundOKStation */
/**
 * @summary TroubleFound_number_foundOKStation
 * @constant
 * @type {number}
 */
export const foundOKStation: TroubleFound_number = TroubleFound_number_foundOKStation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION foundOKStation */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_servingBureau */
/**
 * @summary TroubleFound_number_servingBureau
 * @constant
 * @type {number}
 */
export const TroubleFound_number_servingBureau: TroubleFound_number = 22; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_servingBureau */

/* START_OF_SYMBOL_DEFINITION servingBureau */
/**
 * @summary TroubleFound_number_servingBureau
 * @constant
 * @type {number}
 */
export const servingBureau: TroubleFound_number = TroubleFound_number_servingBureau; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION servingBureau */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_testOK */
/**
 * @summary TroubleFound_number_testOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_testOK: TroubleFound_number = 23; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_testOK */

/* START_OF_SYMBOL_DEFINITION testOK */
/**
 * @summary TroubleFound_number_testOK
 * @constant
 * @type {number}
 */
export const testOK: TroubleFound_number = TroubleFound_number_testOK; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION testOK */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_publicServicesCoinSet */
/**
 * @summary TroubleFound_number_publicServicesCoinSet
 * @constant
 * @type {number}
 */
export const TroubleFound_number_publicServicesCoinSet: TroubleFound_number = 24; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_publicServicesCoinSet */

/* START_OF_SYMBOL_DEFINITION publicServicesCoinSet */
/**
 * @summary TroubleFound_number_publicServicesCoinSet
 * @constant
 * @type {number}
 */
export const publicServicesCoinSet: TroubleFound_number = TroubleFound_number_publicServicesCoinSet; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION publicServicesCoinSet */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_customerOperatingInstructions */
/**
 * @summary TroubleFound_number_customerOperatingInstructions
 * @constant
 * @type {number}
 */
export const TroubleFound_number_customerOperatingInstructions: TroubleFound_number = 25; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_customerOperatingInstructions */

/* START_OF_SYMBOL_DEFINITION customerOperatingInstructions */
/**
 * @summary TroubleFound_number_customerOperatingInstructions
 * @constant
 * @type {number}
 */
export const customerOperatingInstructions: TroubleFound_number = TroubleFound_number_customerOperatingInstructions; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION customerOperatingInstructions */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_testedOKVerifiedOK */
/**
 * @summary TroubleFound_number_testedOKVerifiedOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_testedOKVerifiedOK: TroubleFound_number = 26; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_testedOKVerifiedOK */

/* START_OF_SYMBOL_DEFINITION testedOKVerifiedOK */
/**
 * @summary TroubleFound_number_testedOKVerifiedOK
 * @constant
 * @type {number}
 */
export const testedOKVerifiedOK: TroubleFound_number = TroubleFound_number_testedOKVerifiedOK; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION testedOKVerifiedOK */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_coFacilityTestedFoundOK */
/**
 * @summary TroubleFound_number_coFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coFacilityTestedFoundOK: TroubleFound_number = 27; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_coFacilityTestedFoundOK */

/* START_OF_SYMBOL_DEFINITION coFacilityTestedFoundOK */
/**
 * @summary TroubleFound_number_coFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const coFacilityTestedFoundOK: TroubleFound_number = TroubleFound_number_coFacilityTestedFoundOK; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION coFacilityTestedFoundOK */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_outsideFacilityTestedFoundOK */
/**
 * @summary TroubleFound_number_outsideFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsideFacilityTestedFoundOK: TroubleFound_number = 28; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_outsideFacilityTestedFoundOK */

/* START_OF_SYMBOL_DEFINITION outsideFacilityTestedFoundOK */
/**
 * @summary TroubleFound_number_outsideFacilityTestedFoundOK
 * @constant
 * @type {number}
 */
export const outsideFacilityTestedFoundOK: TroubleFound_number = TroubleFound_number_outsideFacilityTestedFoundOK; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outsideFacilityTestedFoundOK */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_referredOutToOtherDept */
/**
 * @summary TroubleFound_number_referredOutToOtherDept
 * @constant
 * @type {number}
 */
export const TroubleFound_number_referredOutToOtherDept: TroubleFound_number = 29; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_referredOutToOtherDept */

/* START_OF_SYMBOL_DEFINITION referredOutToOtherDept */
/**
 * @summary TroubleFound_number_referredOutToOtherDept
 * @constant
 * @type {number}
 */
export const referredOutToOtherDept: TroubleFound_number = TroubleFound_number_referredOutToOtherDept; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION referredOutToOtherDept */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_protectiveConnectingArrang */
/**
 * @summary TroubleFound_number_protectiveConnectingArrang
 * @constant
 * @type {number}
 */
export const TroubleFound_number_protectiveConnectingArrang: TroubleFound_number = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_protectiveConnectingArrang */

/* START_OF_SYMBOL_DEFINITION protectiveConnectingArrang */
/**
 * @summary TroubleFound_number_protectiveConnectingArrang
 * @constant
 * @type {number}
 */
export const protectiveConnectingArrang: TroubleFound_number = TroubleFound_number_protectiveConnectingArrang; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION protectiveConnectingArrang */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_cpeCustomerResponsibility */
/**
 * @summary TroubleFound_number_cpeCustomerResponsibility
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeCustomerResponsibility: TroubleFound_number = 31; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_cpeCustomerResponsibility */

/* START_OF_SYMBOL_DEFINITION cpeCustomerResponsibility */
/**
 * @summary TroubleFound_number_cpeCustomerResponsibility
 * @constant
 * @type {number}
 */
export const cpeCustomerResponsibility: TroubleFound_number = TroubleFound_number_cpeCustomerResponsibility; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cpeCustomerResponsibility */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_preService */
/**
 * @summary TroubleFound_number_preService
 * @constant
 * @type {number}
 */
export const TroubleFound_number_preService: TroubleFound_number = 32; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_preService */

/* START_OF_SYMBOL_DEFINITION preService */
/**
 * @summary TroubleFound_number_preService
 * @constant
 * @type {number}
 */
export const preService: TroubleFound_number = TroubleFound_number_preService; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION preService */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_preServiceIC */
/**
 * @summary TroubleFound_number_preServiceIC
 * @constant
 * @type {number}
 */
export const TroubleFound_number_preServiceIC: TroubleFound_number = 33; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_preServiceIC */

/* START_OF_SYMBOL_DEFINITION preServiceIC */
/**
 * @summary TroubleFound_number_preServiceIC
 * @constant
 * @type {number}
 */
export const preServiceIC: TroubleFound_number = TroubleFound_number_preServiceIC; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION preServiceIC */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_preServiceEA */
/**
 * @summary TroubleFound_number_preServiceEA
 * @constant
 * @type {number}
 */
export const TroubleFound_number_preServiceEA: TroubleFound_number = 34; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_preServiceEA */

/* START_OF_SYMBOL_DEFINITION preServiceEA */
/**
 * @summary TroubleFound_number_preServiceEA
 * @constant
 * @type {number}
 */
export const preServiceEA: TroubleFound_number = TroubleFound_number_preServiceEA; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION preServiceEA */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_serviceNode */
/**
 * @summary TroubleFound_number_serviceNode
 * @constant
 * @type {number}
 */
export const TroubleFound_number_serviceNode: TroubleFound_number = 35; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_serviceNode */

/* START_OF_SYMBOL_DEFINITION serviceNode */
/**
 * @summary TroubleFound_number_serviceNode
 * @constant
 * @type {number}
 */
export const serviceNode: TroubleFound_number = TroubleFound_number_serviceNode; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION serviceNode */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_data */
/**
 * @summary TroubleFound_number_data
 * @constant
 * @type {number}
 */
export const TroubleFound_number_data: TroubleFound_number = 36; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_data */

/* START_OF_SYMBOL_DEFINITION data */
/**
 * @summary TroubleFound_number_data
 * @constant
 * @type {number}
 */
export const data: TroubleFound_number = TroubleFound_number_data; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION data */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_customerReferredToVendor */
/**
 * @summary TroubleFound_number_customerReferredToVendor
 * @constant
 * @type {number}
 */
export const TroubleFound_number_customerReferredToVendor: TroubleFound_number = 37; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_customerReferredToVendor */

/* START_OF_SYMBOL_DEFINITION customerReferredToVendor */
/**
 * @summary TroubleFound_number_customerReferredToVendor
 * @constant
 * @type {number}
 */
export const customerReferredToVendor: TroubleFound_number = TroubleFound_number_customerReferredToVendor; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION customerReferredToVendor */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_exchangeAccess */
/**
 * @summary TroubleFound_number_exchangeAccess
 * @constant
 * @type {number}
 */
export const TroubleFound_number_exchangeAccess: TroubleFound_number = 38; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_exchangeAccess */

/* START_OF_SYMBOL_DEFINITION exchangeAccess */
/**
 * @summary TroubleFound_number_exchangeAccess
 * @constant
 * @type {number}
 */
export const exchangeAccess: TroubleFound_number = TroubleFound_number_exchangeAccess; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION exchangeAccess */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_international */
/**
 * @summary TroubleFound_number_international
 * @constant
 * @type {number}
 */
export const TroubleFound_number_international: TroubleFound_number = 39; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_international */

/* START_OF_SYMBOL_DEFINITION international */
/**
 * @summary TroubleFound_number_international
 * @constant
 * @type {number}
 */
export const international: TroubleFound_number = TroubleFound_number_international; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION international */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_otherProvidedAccess */
/**
 * @summary TroubleFound_number_otherProvidedAccess
 * @constant
 * @type {number}
 */
export const TroubleFound_number_otherProvidedAccess: TroubleFound_number = 40; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_otherProvidedAccess */

/* START_OF_SYMBOL_DEFINITION otherProvidedAccess */
/**
 * @summary TroubleFound_number_otherProvidedAccess
 * @constant
 * @type {number}
 */
export const otherProvidedAccess: TroubleFound_number = TroubleFound_number_otherProvidedAccess; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION otherProvidedAccess */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_existingReport */
/**
 * @summary TroubleFound_number_existingReport
 * @constant
 * @type {number}
 */
export const TroubleFound_number_existingReport: TroubleFound_number = 41; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_existingReport */

/* START_OF_SYMBOL_DEFINITION existingReport */
/**
 * @summary TroubleFound_number_existingReport
 * @constant
 * @type {number}
 */
export const existingReport: TroubleFound_number = TroubleFound_number_existingReport; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION existingReport */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_cancelExclude */
/**
 * @summary TroubleFound_number_cancelExclude
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cancelExclude: TroubleFound_number = 42; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_cancelExclude */

/* START_OF_SYMBOL_DEFINITION cancelExclude */
/**
 * @summary TroubleFound_number_cancelExclude
 * @constant
 * @type {number}
 */
export const cancelExclude: TroubleFound_number = TroubleFound_number_cancelExclude; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cancelExclude */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_paBX */
/**
 * @summary TroubleFound_number_paBX
 * @constant
 * @type {number}
 */
export const TroubleFound_number_paBX: TroubleFound_number = 43; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_paBX */

/* START_OF_SYMBOL_DEFINITION paBX */
/**
 * @summary TroubleFound_number_paBX
 * @constant
 * @type {number}
 */
export const paBX: TroubleFound_number = TroubleFound_number_paBX; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION paBX */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_outsideWire */
/**
 * @summary TroubleFound_number_outsideWire
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsideWire: TroubleFound_number = 44; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_outsideWire */

/* START_OF_SYMBOL_DEFINITION outsideWire */
/**
 * @summary TroubleFound_number_outsideWire
 * @constant
 * @type {number}
 */
export const outsideWire: TroubleFound_number = TroubleFound_number_outsideWire; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outsideWire */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_outsideTerminals */
/**
 * @summary TroubleFound_number_outsideTerminals
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsideTerminals: TroubleFound_number = 45; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_outsideTerminals */

/* START_OF_SYMBOL_DEFINITION outsideTerminals */
/**
 * @summary TroubleFound_number_outsideTerminals
 * @constant
 * @type {number}
 */
export const outsideTerminals: TroubleFound_number = TroubleFound_number_outsideTerminals; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outsideTerminals */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_outsidePlantEquipment */
/**
 * @summary TroubleFound_number_outsidePlantEquipment
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsidePlantEquipment: TroubleFound_number = 46; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_outsidePlantEquipment */

/* START_OF_SYMBOL_DEFINITION outsidePlantEquipment */
/**
 * @summary TroubleFound_number_outsidePlantEquipment
 * @constant
 * @type {number}
 */
export const outsidePlantEquipment: TroubleFound_number = TroubleFound_number_outsidePlantEquipment; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outsidePlantEquipment */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_outsidePlantFiberOptic */
/**
 * @summary TroubleFound_number_outsidePlantFiberOptic
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsidePlantFiberOptic: TroubleFound_number = 47; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_outsidePlantFiberOptic */

/* START_OF_SYMBOL_DEFINITION outsidePlantFiberOptic */
/**
 * @summary TroubleFound_number_outsidePlantFiberOptic
 * @constant
 * @type {number}
 */
export const outsidePlantFiberOptic: TroubleFound_number = TroubleFound_number_outsidePlantFiberOptic; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outsidePlantFiberOptic */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_outsidePlantOther */
/**
 * @summary TroubleFound_number_outsidePlantOther
 * @constant
 * @type {number}
 */
export const TroubleFound_number_outsidePlantOther: TroubleFound_number = 48; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_outsidePlantOther */

/* START_OF_SYMBOL_DEFINITION outsidePlantOther */
/**
 * @summary TroubleFound_number_outsidePlantOther
 * @constant
 * @type {number}
 */
export const outsidePlantOther: TroubleFound_number = TroubleFound_number_outsidePlantOther; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outsidePlantOther */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_coEquipmentOther */
/**
 * @summary TroubleFound_number_coEquipmentOther
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coEquipmentOther: TroubleFound_number = 49; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_coEquipmentOther */

/* START_OF_SYMBOL_DEFINITION coEquipmentOther */
/**
 * @summary TroubleFound_number_coEquipmentOther
 * @constant
 * @type {number}
 */
export const coEquipmentOther: TroubleFound_number = TroubleFound_number_coEquipmentOther; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION coEquipmentOther */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_coEquipmentFrames */
/**
 * @summary TroubleFound_number_coEquipmentFrames
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coEquipmentFrames: TroubleFound_number = 50; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_coEquipmentFrames */

/* START_OF_SYMBOL_DEFINITION coEquipmentFrames */
/**
 * @summary TroubleFound_number_coEquipmentFrames
 * @constant
 * @type {number}
 */
export const coEquipmentFrames: TroubleFound_number = TroubleFound_number_coEquipmentFrames; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION coEquipmentFrames */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_coConcentrator */
/**
 * @summary TroubleFound_number_coConcentrator
 * @constant
 * @type {number}
 */
export const TroubleFound_number_coConcentrator: TroubleFound_number = 51; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_coConcentrator */

/* START_OF_SYMBOL_DEFINITION coConcentrator */
/**
 * @summary TroubleFound_number_coConcentrator
 * @constant
 * @type {number}
 */
export const coConcentrator: TroubleFound_number = TroubleFound_number_coConcentrator; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION coConcentrator */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_receiverOffHook */
/**
 * @summary TroubleFound_number_receiverOffHook
 * @constant
 * @type {number}
 */
export const TroubleFound_number_receiverOffHook: TroubleFound_number = 52; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_receiverOffHook */

/* START_OF_SYMBOL_DEFINITION receiverOffHook */
/**
 * @summary TroubleFound_number_receiverOffHook
 * @constant
 * @type {number}
 */
export const receiverOffHook: TroubleFound_number = TroubleFound_number_receiverOffHook; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION receiverOffHook */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_cpeAuthorized */
/**
 * @summary TroubleFound_number_cpeAuthorized
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeAuthorized: TroubleFound_number = 53; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_cpeAuthorized */

/* START_OF_SYMBOL_DEFINITION cpeAuthorized */
/**
 * @summary TroubleFound_number_cpeAuthorized
 * @constant
 * @type {number}
 */
export const cpeAuthorized: TroubleFound_number = TroubleFound_number_cpeAuthorized; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cpeAuthorized */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_cpeTelcoMaintained */
/**
 * @summary TroubleFound_number_cpeTelcoMaintained
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeTelcoMaintained: TroubleFound_number = 54; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_cpeTelcoMaintained */

/* START_OF_SYMBOL_DEFINITION cpeTelcoMaintained */
/**
 * @summary TroubleFound_number_cpeTelcoMaintained
 * @constant
 * @type {number}
 */
export const cpeTelcoMaintained: TroubleFound_number = TroubleFound_number_cpeTelcoMaintained; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cpeTelcoMaintained */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_independentCompany */
/**
 * @summary TroubleFound_number_independentCompany
 * @constant
 * @type {number}
 */
export const TroubleFound_number_independentCompany: TroubleFound_number = 55; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_independentCompany */

/* START_OF_SYMBOL_DEFINITION independentCompany */
/**
 * @summary TroubleFound_number_independentCompany
 * @constant
 * @type {number}
 */
export const independentCompany: TroubleFound_number = TroubleFound_number_independentCompany; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION independentCompany */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_cpeCalledNumber */
/**
 * @summary TroubleFound_number_cpeCalledNumber
 * @constant
 * @type {number}
 */
export const TroubleFound_number_cpeCalledNumber: TroubleFound_number = 56; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_cpeCalledNumber */

/* START_OF_SYMBOL_DEFINITION cpeCalledNumber */
/**
 * @summary TroubleFound_number_cpeCalledNumber
 * @constant
 * @type {number}
 */
export const cpeCalledNumber: TroubleFound_number = TroubleFound_number_cpeCalledNumber; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cpeCalledNumber */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_assigningProvisioning */
/**
 * @summary TroubleFound_number_assigningProvisioning
 * @constant
 * @type {number}
 */
export const TroubleFound_number_assigningProvisioning: TroubleFound_number = 57; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_assigningProvisioning */

/* START_OF_SYMBOL_DEFINITION assigningProvisioning */
/**
 * @summary TroubleFound_number_assigningProvisioning
 * @constant
 * @type {number}
 */
export const assigningProvisioning: TroubleFound_number = TroubleFound_number_assigningProvisioning; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION assigningProvisioning */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_interServiceCenter */
/**
 * @summary TroubleFound_number_interServiceCenter
 * @constant
 * @type {number}
 */
export const TroubleFound_number_interServiceCenter: TroubleFound_number = 58; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_interServiceCenter */

/* START_OF_SYMBOL_DEFINITION interServiceCenter */
/**
 * @summary TroubleFound_number_interServiceCenter
 * @constant
 * @type {number}
 */
export const interServiceCenter: TroubleFound_number = TroubleFound_number_interServiceCenter; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION interServiceCenter */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_referredOut */
/**
 * @summary TroubleFound_number_referredOut
 * @constant
 * @type {number}
 */
export const TroubleFound_number_referredOut: TroubleFound_number = 59; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_referredOut */

/* START_OF_SYMBOL_DEFINITION referredOut */
/**
 * @summary TroubleFound_number_referredOut
 * @constant
 * @type {number}
 */
export const referredOut: TroubleFound_number = TroubleFound_number_referredOut; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION referredOut */

/* START_OF_SYMBOL_DEFINITION TroubleFound_number_network */
/**
 * @summary TroubleFound_number_network
 * @constant
 * @type {number}
 */
export const TroubleFound_number_network: TroubleFound_number = 60; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleFound_number_network */

/* START_OF_SYMBOL_DEFINITION network */
/**
 * @summary TroubleFound_number_network
 * @constant
 * @type {number}
 */
export const network: TroubleFound_number = TroubleFound_number_network; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION network */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleFound_number */
let _cached_decoder_for_TroubleFound_number: $.ASN1Decoder<TroubleFound_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleFound_number */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleFound_number */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleFound_number
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleFound_number} The decoded data structure.
 */
export function _decode_TroubleFound_number(el: _Element) {
    if (!_cached_decoder_for_TroubleFound_number) {
        _cached_decoder_for_TroubleFound_number = $._decodeInteger;
    }
    return _cached_decoder_for_TroubleFound_number(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleFound_number */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleFound_number */
let _cached_encoder_for_TroubleFound_number: $.ASN1Encoder<TroubleFound_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleFound_number */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleFound_number */
/**
 * @summary Encodes a(n) TroubleFound_number into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleFound_number, encoded as an ASN.1 Element.
 */
export function _encode_TroubleFound_number(
    value: TroubleFound_number,
    elGetter: $.ASN1Encoder<TroubleFound_number>
) {
    if (!_cached_encoder_for_TroubleFound_number) {
        _cached_encoder_for_TroubleFound_number = $._encodeInteger;
    }
    return _cached_encoder_for_TroubleFound_number(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleFound_number */

/* eslint-enable */

/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CallInformation, CallInformation_callingDevice /* IMPORTED_LONG_NAMED_BIT */, callingDevice /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_accountInfo /* IMPORTED_LONG_NAMED_BIT */, accountInfo /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_authorisatinonCode /* IMPORTED_LONG_NAMED_BIT */, authorisatinonCode /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_correlatorData /* IMPORTED_LONG_NAMED_BIT */, correlatorData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, servicesPermitted /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_userData /* IMPORTED_LONG_NAMED_BIT */, userData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_callQualifyingData /* IMPORTED_LONG_NAMED_BIT */, callQualifyingData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, CallInformation_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, callLinkageData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, subjectOfCall /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, languagePreferences /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, CallInformation_genCallInfoForOutdatedConnID /* IMPORTED_LONG_NAMED_BIT */, genCallInfoForOutdatedConnID /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_deviceInfo /* IMPORTED_LONG_NAMED_BIT */, deviceInfo /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallInformation, _encode_CallInformation } from "../CSTA-capability-exchange/CallInformation.ta.mjs";
// export { CallInformation, CallInformation_callingDevice /* IMPORTED_LONG_NAMED_BIT */, callingDevice /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_accountInfo /* IMPORTED_LONG_NAMED_BIT */, accountInfo /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_authorisatinonCode /* IMPORTED_LONG_NAMED_BIT */, authorisatinonCode /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_correlatorData /* IMPORTED_LONG_NAMED_BIT */, correlatorData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, servicesPermitted /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_userData /* IMPORTED_LONG_NAMED_BIT */, userData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_callQualifyingData /* IMPORTED_LONG_NAMED_BIT */, callQualifyingData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, CallInformation_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, callLinkageData /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, subjectOfCall /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, languagePreferences /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, CallInformation_genCallInfoForOutdatedConnID /* IMPORTED_LONG_NAMED_BIT */, genCallInfoForOutdatedConnID /* IMPORTED_SHORT_NAMED_BIT */, CallInformation_deviceInfo /* IMPORTED_LONG_NAMED_BIT */, deviceInfo /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallInformation, _encode_CallInformation } from "../CSTA-capability-exchange/CallInformation.ta.mjs";
import { Charging, Charging_numberUnitsNumberOfChargingUnits /* IMPORTED_LONG_NAMED_BIT */, numberUnitsNumberOfChargingUnits /* IMPORTED_SHORT_NAMED_BIT */, Charging_numberUnitsTypeOfUnits /* IMPORTED_LONG_NAMED_BIT */, numberUnitsTypeOfUnits /* IMPORTED_SHORT_NAMED_BIT */, Charging_numberUnitsNumberOfCurrencyUnits /* IMPORTED_LONG_NAMED_BIT */, numberUnitsNumberOfCurrencyUnits /* IMPORTED_SHORT_NAMED_BIT */, Charging_typeOfChargingInfoSubTotal /* IMPORTED_LONG_NAMED_BIT */, typeOfChargingInfoSubTotal /* IMPORTED_SHORT_NAMED_BIT */, Charging_typeOfChargingInfoTotal /* IMPORTED_LONG_NAMED_BIT */, typeOfChargingInfoTotal /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierAThousandth /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierAThousandth /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierAHundredth /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierAHundredth /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierATenth /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierATenth /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierOne /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierOne /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierTen /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierTen /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierHundred /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierHundred /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierThousand /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierThousand /* IMPORTED_SHORT_NAMED_BIT */, Charging_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_Charging, _encode_Charging } from "../CSTA-capability-exchange/Charging.ta.mjs";
// export { Charging, Charging_numberUnitsNumberOfChargingUnits /* IMPORTED_LONG_NAMED_BIT */, numberUnitsNumberOfChargingUnits /* IMPORTED_SHORT_NAMED_BIT */, Charging_numberUnitsTypeOfUnits /* IMPORTED_LONG_NAMED_BIT */, numberUnitsTypeOfUnits /* IMPORTED_SHORT_NAMED_BIT */, Charging_numberUnitsNumberOfCurrencyUnits /* IMPORTED_LONG_NAMED_BIT */, numberUnitsNumberOfCurrencyUnits /* IMPORTED_SHORT_NAMED_BIT */, Charging_typeOfChargingInfoSubTotal /* IMPORTED_LONG_NAMED_BIT */, typeOfChargingInfoSubTotal /* IMPORTED_SHORT_NAMED_BIT */, Charging_typeOfChargingInfoTotal /* IMPORTED_LONG_NAMED_BIT */, typeOfChargingInfoTotal /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierAThousandth /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierAThousandth /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierAHundredth /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierAHundredth /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierATenth /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierATenth /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierOne /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierOne /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierTen /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierTen /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierHundred /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierHundred /* IMPORTED_SHORT_NAMED_BIT */, Charging_chargingMultiplierThousand /* IMPORTED_LONG_NAMED_BIT */, chargingMultiplierThousand /* IMPORTED_SHORT_NAMED_BIT */, Charging_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_Charging, _encode_Charging } from "../CSTA-capability-exchange/Charging.ta.mjs";
import { DigitsGenerated, DigitsGenerated_digitsDurationList /* IMPORTED_LONG_NAMED_BIT */, digitsDurationList /* IMPORTED_SHORT_NAMED_BIT */, DigitsGenerated_pauseDurationList /* IMPORTED_LONG_NAMED_BIT */, DigitsGenerated_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, DigitsGenerated_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DigitsGenerated, _encode_DigitsGenerated } from "../CSTA-capability-exchange/DigitsGenerated.ta.mjs";
// export { DigitsGenerated, DigitsGenerated_digitsDurationList /* IMPORTED_LONG_NAMED_BIT */, digitsDurationList /* IMPORTED_SHORT_NAMED_BIT */, DigitsGenerated_pauseDurationList /* IMPORTED_LONG_NAMED_BIT */, DigitsGenerated_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, DigitsGenerated_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_DigitsGenerated, _encode_DigitsGenerated } from "../CSTA-capability-exchange/DigitsGenerated.ta.mjs";
import { TelephonyTonesGenerated, TelephonyTonesGenerated_toneToSendBeep /* IMPORTED_LONG_NAMED_BIT */, toneToSendBeep /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendBilling /* IMPORTED_LONG_NAMED_BIT */, toneToSendBilling /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendBusy /* IMPORTED_LONG_NAMED_BIT */, toneToSendBusy /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendCarrier /* IMPORTED_LONG_NAMED_BIT */, toneToSendCarrier /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendConfirmation /* IMPORTED_LONG_NAMED_BIT */, toneToSendConfirmation /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendDial /* IMPORTED_LONG_NAMED_BIT */, toneToSendDial /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendFaxCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendFaxCNG /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendHold /* IMPORTED_LONG_NAMED_BIT */, toneToSendHold /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendHowler /* IMPORTED_LONG_NAMED_BIT */, toneToSendHowler /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendIntrusion /* IMPORTED_LONG_NAMED_BIT */, toneToSendIntrusion /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendModemCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendModemCNG /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendPark /* IMPORTED_LONG_NAMED_BIT */, toneToSendPark /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendRecordWarning /* IMPORTED_LONG_NAMED_BIT */, toneToSendRecordWarning /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendReorder /* IMPORTED_LONG_NAMED_BIT */, toneToSendReorder /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendRingback /* IMPORTED_LONG_NAMED_BIT */, toneToSendRingback /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSilence /* IMPORTED_LONG_NAMED_BIT */, toneToSendSilence /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitVC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitVC /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitIC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitIC /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitRO /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitRO /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitNC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitNC /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf0 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf0 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf1 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf1 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf2 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf2 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf3 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf3 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf4 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf4 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf5 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf5 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf6 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf6 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf7 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf7 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf8 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf8 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf9 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf9 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf10 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf10 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf11 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf11 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf12 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf12 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf13 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf13 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf14 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf14 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf15 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf15 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf16 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf16 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf17 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf17 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf18 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf18 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf19 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf19 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf20 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf20 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf21 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf21 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf22 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf22 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf23 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf23 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf24 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf24 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf25 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf25 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf26 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf26 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf27 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf27 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf28 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf28 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf29 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf29 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf30 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf30 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf31 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf31 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf32 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf32 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf33 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf33 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf34 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf34 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf35 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf35 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf36 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf36 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf37 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf37 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf38 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf38 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf39 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf39 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf40 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf40 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf41 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf41 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf42 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf42 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf43 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf43 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf44 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf44 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf45 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf45 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf46 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf46 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf47 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf47 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf48 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf48 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf49 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf49 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf50 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf50 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf51 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf51 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf52 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf52 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf53 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf53 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf54 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf54 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf55 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf55 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf56 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf56 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf57 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf57 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf58 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf58 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf59 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf59 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf60 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf60 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf61 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf61 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf62 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf62 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf63 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf63 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf64 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf64 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf65 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf65 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf66 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf66 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf67 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf67 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf68 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf68 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf69 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf69 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf70 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf70 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf71 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf71 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf72 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf72 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf73 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf73 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf74 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf74 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf75 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf75 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf76 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf76 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf77 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf77 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf78 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf78 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf79 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf79 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf80 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf80 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf81 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf81 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf82 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf82 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf83 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf83 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf84 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf84 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf85 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf85 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf86 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf86 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf87 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf87 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf88 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf88 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf89 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf89 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf90 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf90 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf91 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf91 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf92 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf92 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf93 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf93 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf94 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf94 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf95 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf95 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf96 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf96 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf97 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf97 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf98 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf98 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf99 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf99 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf100 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf100 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneFrequency /* IMPORTED_LONG_NAMED_BIT */, toneFrequency /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneDuration /* IMPORTED_LONG_NAMED_BIT */, toneDuration /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_pauseDurationList /* IMPORTED_LONG_NAMED_BIT */, TelephonyTonesGenerated_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, TelephonyTonesGenerated_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_TelephonyTonesGenerated, _encode_TelephonyTonesGenerated } from "../CSTA-capability-exchange/TelephonyTonesGenerated.ta.mjs";
// export { TelephonyTonesGenerated, TelephonyTonesGenerated_toneToSendBeep /* IMPORTED_LONG_NAMED_BIT */, toneToSendBeep /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendBilling /* IMPORTED_LONG_NAMED_BIT */, toneToSendBilling /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendBusy /* IMPORTED_LONG_NAMED_BIT */, toneToSendBusy /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendCarrier /* IMPORTED_LONG_NAMED_BIT */, toneToSendCarrier /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendConfirmation /* IMPORTED_LONG_NAMED_BIT */, toneToSendConfirmation /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendDial /* IMPORTED_LONG_NAMED_BIT */, toneToSendDial /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendFaxCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendFaxCNG /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendHold /* IMPORTED_LONG_NAMED_BIT */, toneToSendHold /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendHowler /* IMPORTED_LONG_NAMED_BIT */, toneToSendHowler /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendIntrusion /* IMPORTED_LONG_NAMED_BIT */, toneToSendIntrusion /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendModemCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendModemCNG /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendPark /* IMPORTED_LONG_NAMED_BIT */, toneToSendPark /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendRecordWarning /* IMPORTED_LONG_NAMED_BIT */, toneToSendRecordWarning /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendReorder /* IMPORTED_LONG_NAMED_BIT */, toneToSendReorder /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendRingback /* IMPORTED_LONG_NAMED_BIT */, toneToSendRingback /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSilence /* IMPORTED_LONG_NAMED_BIT */, toneToSendSilence /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitVC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitVC /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitIC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitIC /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitRO /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitRO /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSitNC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitNC /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf0 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf0 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf1 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf1 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf2 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf2 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf3 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf3 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf4 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf4 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf5 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf5 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf6 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf6 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf7 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf7 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf8 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf8 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf9 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf9 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf10 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf10 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf11 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf11 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf12 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf12 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf13 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf13 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf14 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf14 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf15 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf15 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf16 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf16 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf17 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf17 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf18 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf18 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf19 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf19 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf20 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf20 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf21 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf21 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf22 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf22 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf23 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf23 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf24 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf24 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf25 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf25 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf26 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf26 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf27 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf27 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf28 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf28 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf29 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf29 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf30 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf30 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf31 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf31 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf32 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf32 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf33 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf33 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf34 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf34 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf35 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf35 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf36 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf36 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf37 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf37 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf38 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf38 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf39 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf39 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf40 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf40 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf41 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf41 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf42 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf42 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf43 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf43 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf44 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf44 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf45 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf45 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf46 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf46 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf47 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf47 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf48 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf48 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf49 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf49 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf50 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf50 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf51 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf51 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf52 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf52 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf53 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf53 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf54 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf54 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf55 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf55 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf56 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf56 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf57 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf57 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf58 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf58 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf59 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf59 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf60 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf60 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf61 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf61 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf62 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf62 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf63 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf63 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf64 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf64 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf65 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf65 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf66 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf66 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf67 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf67 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf68 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf68 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf69 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf69 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf70 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf70 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf71 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf71 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf72 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf72 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf73 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf73 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf74 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf74 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf75 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf75 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf76 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf76 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf77 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf77 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf78 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf78 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf79 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf79 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf80 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf80 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf81 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf81 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf82 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf82 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf83 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf83 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf84 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf84 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf85 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf85 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf86 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf86 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf87 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf87 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf88 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf88 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf89 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf89 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf90 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf90 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf91 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf91 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf92 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf92 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf93 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf93 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf94 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf94 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf95 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf95 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf96 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf96 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf97 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf97 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf98 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf98 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf99 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf99 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneToSendSf100 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf100 /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneFrequency /* IMPORTED_LONG_NAMED_BIT */, toneFrequency /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_toneDuration /* IMPORTED_LONG_NAMED_BIT */, toneDuration /* IMPORTED_SHORT_NAMED_BIT */, TelephonyTonesGenerated_pauseDurationList /* IMPORTED_LONG_NAMED_BIT */, TelephonyTonesGenerated_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, TelephonyTonesGenerated_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_TelephonyTonesGenerated, _encode_TelephonyTonesGenerated } from "../CSTA-capability-exchange/TelephonyTonesGenerated.ta.mjs";
import { ServiceCompletionFailure, ServiceCompletionFailure_primaryCallConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, primaryCallConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_secondaryCallConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, secondaryCallConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_otherDevicesPrimaryCallList /* IMPORTED_LONG_NAMED_BIT */, otherDevicesPrimaryCallList /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_otherDevicesSecondaryCallList /* IMPORTED_LONG_NAMED_BIT */, otherDevicesSecondaryCallList /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ServiceCompletionFailure, _encode_ServiceCompletionFailure } from "../CSTA-capability-exchange/ServiceCompletionFailure.ta.mjs";
// export { ServiceCompletionFailure, ServiceCompletionFailure_primaryCallConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, primaryCallConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_secondaryCallConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, secondaryCallConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_otherDevicesPrimaryCallList /* IMPORTED_LONG_NAMED_BIT */, otherDevicesPrimaryCallList /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_otherDevicesSecondaryCallList /* IMPORTED_LONG_NAMED_BIT */, otherDevicesSecondaryCallList /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, ServiceCompletionFailure_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_ServiceCompletionFailure, _encode_ServiceCompletionFailure } from "../CSTA-capability-exchange/ServiceCompletionFailure.ta.mjs";


/**
 * @summary CallAssociatedEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedEvtsList ::= SEQUENCE
 * {     callInformation         [0] IMPLICIT     CallInformation         OPTIONAL,
 *     charging             [1] IMPLICIT     Charging             OPTIONAL,
 *     digitsGenerated         [2] IMPLICIT     DigitsGenerated         OPTIONAL,
 *     telephonyTonesGenerated     [3] IMPLICIT     TelephonyTonesGenerated     OPTIONAL,
 *     serviceCompletionFailure     [4] IMPLICIT     ServiceCompletionFailure     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallAssociatedEvtsList {
    constructor (
        /**
         * @summary `callInformation`.
         * @public
         * @readonly
         */
        readonly callInformation: OPTIONAL<CallInformation>,
        /**
         * @summary `charging`.
         * @public
         * @readonly
         */
        readonly charging: OPTIONAL<Charging>,
        /**
         * @summary `digitsGenerated`.
         * @public
         * @readonly
         */
        readonly digitsGenerated: OPTIONAL<DigitsGenerated>,
        /**
         * @summary `telephonyTonesGenerated`.
         * @public
         * @readonly
         */
        readonly telephonyTonesGenerated: OPTIONAL<TelephonyTonesGenerated>,
        /**
         * @summary `serviceCompletionFailure`.
         * @public
         * @readonly
         */
        readonly serviceCompletionFailure: OPTIONAL<ServiceCompletionFailure>
    ) {}

    /**
     * @summary Restructures an object into a CallAssociatedEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `CallAssociatedEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallAssociatedEvtsList`.
     * @returns {CallAssociatedEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (CallAssociatedEvtsList)]: (CallAssociatedEvtsList)[_K] }): CallAssociatedEvtsList {
        return new CallAssociatedEvtsList(_o.callInformation, _o.charging, _o.digitsGenerated, _o.telephonyTonesGenerated, _o.serviceCompletionFailure);
    }


}

/**
 * @summary The Leading Root Component Types of CallAssociatedEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallAssociatedEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("callInformation", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("charging", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("digitsGenerated", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("telephonyTonesGenerated", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("serviceCompletionFailure", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallAssociatedEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallAssociatedEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallAssociatedEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallAssociatedEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallAssociatedEvtsList: $.ASN1Decoder<CallAssociatedEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedEvtsList (el: _Element): CallAssociatedEvtsList {
    if (!_cached_decoder_for_CallAssociatedEvtsList) { _cached_decoder_for_CallAssociatedEvtsList = function (el: _Element): CallAssociatedEvtsList {
    let callInformation: OPTIONAL<CallInformation>;
    let charging: OPTIONAL<Charging>;
    let digitsGenerated: OPTIONAL<DigitsGenerated>;
    let telephonyTonesGenerated: OPTIONAL<TelephonyTonesGenerated>;
    let serviceCompletionFailure: OPTIONAL<ServiceCompletionFailure>;
    const callbacks: $.DecodingMap = {
        "callInformation": (_el: _Element): void => { callInformation = $._decode_implicit<CallInformation>(() => _decode_CallInformation)(_el); },
        "charging": (_el: _Element): void => { charging = $._decode_implicit<Charging>(() => _decode_Charging)(_el); },
        "digitsGenerated": (_el: _Element): void => { digitsGenerated = $._decode_implicit<DigitsGenerated>(() => _decode_DigitsGenerated)(_el); },
        "telephonyTonesGenerated": (_el: _Element): void => { telephonyTonesGenerated = $._decode_implicit<TelephonyTonesGenerated>(() => _decode_TelephonyTonesGenerated)(_el); },
        "serviceCompletionFailure": (_el: _Element): void => { serviceCompletionFailure = $._decode_implicit<ServiceCompletionFailure>(() => _decode_ServiceCompletionFailure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallAssociatedEvtsList,
        _extension_additions_list_spec_for_CallAssociatedEvtsList,
        _root_component_type_list_2_spec_for_CallAssociatedEvtsList,
        undefined,
    );
    return new CallAssociatedEvtsList(
        callInformation,
        charging,
        digitsGenerated,
        telephonyTonesGenerated,
        serviceCompletionFailure
    );
}; }
    return _cached_decoder_for_CallAssociatedEvtsList(el);
}

let _cached_encoder_for_CallAssociatedEvtsList: $.ASN1Encoder<CallAssociatedEvtsList> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedEvtsList (value: CallAssociatedEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedEvtsList) { _cached_encoder_for_CallAssociatedEvtsList = function (value: CallAssociatedEvtsList, elGetter: $.ASN1Encoder<CallAssociatedEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallInformation, $.BER)(value.callInformation, $.BER)),
            /* IF_ABSENT  */ ((value.charging === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Charging, $.BER)(value.charging, $.BER)),
            /* IF_ABSENT  */ ((value.digitsGenerated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DigitsGenerated, $.BER)(value.digitsGenerated, $.BER)),
            /* IF_ABSENT  */ ((value.telephonyTonesGenerated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TelephonyTonesGenerated, $.BER)(value.telephonyTonesGenerated, $.BER)),
            /* IF_ABSENT  */ ((value.serviceCompletionFailure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ServiceCompletionFailure, $.BER)(value.serviceCompletionFailure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallAssociatedEvtsList(value, elGetter);
}


/* eslint-enable */

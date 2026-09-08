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
import { AssociateData, AssociateData_accountCode /* IMPORTED_LONG_NAMED_BIT */, accountCode /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_authCode /* IMPORTED_LONG_NAMED_BIT */, authCode /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_correlatorData /* IMPORTED_LONG_NAMED_BIT */, correlatorData /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_callQualifyingData /* IMPORTED_LONG_NAMED_BIT */, callQualifyingData /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, subjectOfCall /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, languagePreferences /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_privateData /* IMPORTED_LONG_NAMED_BIT */, AssociateData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AssociateData_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AssociateData_rejectsRequestsWithOldConnectionID /* IMPORTED_LONG_NAMED_BIT */, rejectsRequestsWithOldConnectionID /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, AssociateData_deviceInfo /* IMPORTED_LONG_NAMED_BIT */, deviceInfo /* IMPORTED_SHORT_NAMED_BIT */, _decode_AssociateData, _encode_AssociateData } from "../CSTA-capability-exchange/AssociateData.ta.mjs";
// export { AssociateData, AssociateData_accountCode /* IMPORTED_LONG_NAMED_BIT */, accountCode /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_authCode /* IMPORTED_LONG_NAMED_BIT */, authCode /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_correlatorData /* IMPORTED_LONG_NAMED_BIT */, correlatorData /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_callQualifyingData /* IMPORTED_LONG_NAMED_BIT */, callQualifyingData /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, subjectOfCall /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, languagePreferences /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_privateData /* IMPORTED_LONG_NAMED_BIT */, AssociateData_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AssociateData_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AssociateData_rejectsRequestsWithOldConnectionID /* IMPORTED_LONG_NAMED_BIT */, rejectsRequestsWithOldConnectionID /* IMPORTED_SHORT_NAMED_BIT */, AssociateData_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, AssociateData_deviceInfo /* IMPORTED_LONG_NAMED_BIT */, deviceInfo /* IMPORTED_SHORT_NAMED_BIT */, _decode_AssociateData, _encode_AssociateData } from "../CSTA-capability-exchange/AssociateData.ta.mjs";
import { CancelTelephonyTones, CancelTelephonyTones_privateData /* IMPORTED_LONG_NAMED_BIT */, CancelTelephonyTones_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CancelTelephonyTones_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CancelTelephonyTones, _encode_CancelTelephonyTones } from "../CSTA-capability-exchange/CancelTelephonyTones.ta.mjs";
// export { CancelTelephonyTones, CancelTelephonyTones_privateData /* IMPORTED_LONG_NAMED_BIT */, CancelTelephonyTones_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CancelTelephonyTones_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CancelTelephonyTones, _encode_CancelTelephonyTones } from "../CSTA-capability-exchange/CancelTelephonyTones.ta.mjs";
import { ChangeConnectionInformation, ChangeConnectionInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, ChangeConnectionInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ChangeConnectionInformation, _encode_ChangeConnectionInformation } from "../CSTA-capability-exchange/ChangeConnectionInformation.ta.mjs";
// export { ChangeConnectionInformation, ChangeConnectionInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, ChangeConnectionInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_ChangeConnectionInformation, _encode_ChangeConnectionInformation } from "../CSTA-capability-exchange/ChangeConnectionInformation.ta.mjs";
import { GenerateDigits, GenerateDigits_digitModeDTMF /* IMPORTED_LONG_NAMED_BIT */, digitModeDTMF /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_digitModePulse /* IMPORTED_LONG_NAMED_BIT */, digitModePulse /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_toneDuration /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_pulseRate /* IMPORTED_LONG_NAMED_BIT */, pulseRate /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_pauseDuration /* IMPORTED_LONG_NAMED_BIT */, pauseDuration /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_privateData /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_supportsDTMFTonesABCD /* IMPORTED_LONG_NAMED_BIT */, supportsDTMFTonesABCD /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_supportsPauseToneChar /* IMPORTED_LONG_NAMED_BIT */, supportsPauseToneChar /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_GenerateDigits, _encode_GenerateDigits } from "../CSTA-capability-exchange/GenerateDigits.ta.mjs";
// export { GenerateDigits, GenerateDigits_digitModeDTMF /* IMPORTED_LONG_NAMED_BIT */, digitModeDTMF /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_digitModePulse /* IMPORTED_LONG_NAMED_BIT */, digitModePulse /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_toneDuration /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_pulseRate /* IMPORTED_LONG_NAMED_BIT */, pulseRate /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_pauseDuration /* IMPORTED_LONG_NAMED_BIT */, pauseDuration /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_privateData /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, GenerateDigits_supportsDTMFTonesABCD /* IMPORTED_LONG_NAMED_BIT */, supportsDTMFTonesABCD /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_supportsPauseToneChar /* IMPORTED_LONG_NAMED_BIT */, supportsPauseToneChar /* IMPORTED_SHORT_NAMED_BIT */, GenerateDigits_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_GenerateDigits, _encode_GenerateDigits } from "../CSTA-capability-exchange/GenerateDigits.ta.mjs";
import { GenerateTelephonyTones, GenerateTelephonyTones_toneToSendBeep /* IMPORTED_LONG_NAMED_BIT */, toneToSendBeep /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendBilling /* IMPORTED_LONG_NAMED_BIT */, toneToSendBilling /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendBusy /* IMPORTED_LONG_NAMED_BIT */, toneToSendBusy /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendCarrier /* IMPORTED_LONG_NAMED_BIT */, toneToSendCarrier /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendConfirmation /* IMPORTED_LONG_NAMED_BIT */, toneToSendConfirmation /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendDial /* IMPORTED_LONG_NAMED_BIT */, toneToSendDial /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendFaxCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendFaxCNG /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendHold /* IMPORTED_LONG_NAMED_BIT */, toneToSendHold /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendHowler /* IMPORTED_LONG_NAMED_BIT */, toneToSendHowler /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendIntrusion /* IMPORTED_LONG_NAMED_BIT */, toneToSendIntrusion /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendModemCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendModemCNG /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendPark /* IMPORTED_LONG_NAMED_BIT */, toneToSendPark /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendRecordWarning /* IMPORTED_LONG_NAMED_BIT */, toneToSendRecordWarning /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendReorder /* IMPORTED_LONG_NAMED_BIT */, toneToSendReorder /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendRingback /* IMPORTED_LONG_NAMED_BIT */, toneToSendRingback /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSilence /* IMPORTED_LONG_NAMED_BIT */, toneToSendSilence /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitVC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitVC /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitIC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitIC /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitRO /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitRO /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitNC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitNC /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf0 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf0 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf1 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf1 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf2 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf2 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf3 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf3 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf4 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf4 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf5 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf5 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf6 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf6 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf7 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf7 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf8 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf8 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf9 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf9 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf10 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf10 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf11 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf11 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf12 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf12 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf13 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf13 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf14 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf14 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf15 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf15 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf16 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf16 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf17 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf17 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf18 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf18 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf19 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf19 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf20 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf20 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf21 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf21 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf22 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf22 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf23 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf23 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf24 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf24 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf25 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf25 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf26 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf26 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf27 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf27 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf28 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf28 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf29 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf29 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf30 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf30 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf31 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf31 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf32 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf32 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf33 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf33 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf34 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf34 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf35 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf35 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf36 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf36 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf37 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf37 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf38 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf38 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf39 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf39 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf40 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf40 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf41 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf41 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf42 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf42 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf43 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf43 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf44 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf44 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf45 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf45 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf46 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf46 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf47 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf47 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf48 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf48 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf49 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf49 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf50 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf50 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf51 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf51 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf52 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf52 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf53 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf53 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf54 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf54 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf55 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf55 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf56 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf56 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf57 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf57 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf58 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf58 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf59 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf59 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf60 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf60 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf61 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf61 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf62 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf62 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf63 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf63 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf64 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf64 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf65 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf65 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf66 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf66 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf67 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf67 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf68 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf68 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf69 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf69 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf70 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf70 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf71 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf71 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf72 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf72 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf73 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf73 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf74 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf74 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf75 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf75 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf76 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf76 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf77 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf77 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf78 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf78 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf79 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf79 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf80 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf80 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf81 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf81 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf82 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf82 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf83 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf83 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf84 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf84 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf85 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf85 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf86 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf86 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf87 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf87 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf88 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf88 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf89 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf89 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf90 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf90 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf91 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf91 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf92 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf92 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf93 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf93 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf94 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf94 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf95 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf95 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf96 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf96 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf97 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf97 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf98 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf98 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf99 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf99 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf100 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf100 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneDuration /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_privateData /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_GenerateTelephonyTones, _encode_GenerateTelephonyTones } from "../CSTA-capability-exchange/GenerateTelephonyTones.ta.mjs";
// export { GenerateTelephonyTones, GenerateTelephonyTones_toneToSendBeep /* IMPORTED_LONG_NAMED_BIT */, toneToSendBeep /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendBilling /* IMPORTED_LONG_NAMED_BIT */, toneToSendBilling /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendBusy /* IMPORTED_LONG_NAMED_BIT */, toneToSendBusy /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendCarrier /* IMPORTED_LONG_NAMED_BIT */, toneToSendCarrier /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendConfirmation /* IMPORTED_LONG_NAMED_BIT */, toneToSendConfirmation /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendDial /* IMPORTED_LONG_NAMED_BIT */, toneToSendDial /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendFaxCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendFaxCNG /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendHold /* IMPORTED_LONG_NAMED_BIT */, toneToSendHold /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendHowler /* IMPORTED_LONG_NAMED_BIT */, toneToSendHowler /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendIntrusion /* IMPORTED_LONG_NAMED_BIT */, toneToSendIntrusion /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendModemCNG /* IMPORTED_LONG_NAMED_BIT */, toneToSendModemCNG /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendPark /* IMPORTED_LONG_NAMED_BIT */, toneToSendPark /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendRecordWarning /* IMPORTED_LONG_NAMED_BIT */, toneToSendRecordWarning /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendReorder /* IMPORTED_LONG_NAMED_BIT */, toneToSendReorder /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendRingback /* IMPORTED_LONG_NAMED_BIT */, toneToSendRingback /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSilence /* IMPORTED_LONG_NAMED_BIT */, toneToSendSilence /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitVC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitVC /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitIC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitIC /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitRO /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitRO /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSitNC /* IMPORTED_LONG_NAMED_BIT */, toneToSendSitNC /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf0 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf0 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf1 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf1 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf2 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf2 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf3 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf3 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf4 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf4 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf5 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf5 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf6 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf6 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf7 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf7 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf8 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf8 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf9 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf9 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf10 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf10 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf11 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf11 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf12 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf12 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf13 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf13 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf14 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf14 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf15 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf15 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf16 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf16 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf17 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf17 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf18 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf18 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf19 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf19 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf20 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf20 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf21 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf21 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf22 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf22 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf23 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf23 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf24 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf24 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf25 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf25 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf26 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf26 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf27 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf27 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf28 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf28 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf29 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf29 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf30 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf30 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf31 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf31 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf32 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf32 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf33 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf33 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf34 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf34 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf35 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf35 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf36 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf36 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf37 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf37 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf38 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf38 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf39 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf39 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf40 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf40 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf41 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf41 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf42 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf42 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf43 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf43 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf44 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf44 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf45 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf45 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf46 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf46 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf47 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf47 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf48 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf48 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf49 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf49 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf50 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf50 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf51 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf51 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf52 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf52 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf53 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf53 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf54 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf54 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf55 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf55 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf56 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf56 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf57 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf57 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf58 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf58 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf59 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf59 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf60 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf60 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf61 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf61 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf62 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf62 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf63 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf63 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf64 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf64 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf65 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf65 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf66 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf66 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf67 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf67 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf68 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf68 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf69 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf69 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf70 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf70 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf71 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf71 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf72 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf72 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf73 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf73 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf74 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf74 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf75 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf75 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf76 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf76 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf77 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf77 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf78 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf78 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf79 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf79 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf80 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf80 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf81 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf81 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf82 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf82 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf83 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf83 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf84 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf84 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf85 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf85 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf86 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf86 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf87 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf87 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf88 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf88 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf89 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf89 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf90 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf90 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf91 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf91 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf92 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf92 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf93 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf93 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf94 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf94 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf95 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf95 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf96 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf96 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf97 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf97 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf98 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf98 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf99 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf99 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneToSendSf100 /* IMPORTED_LONG_NAMED_BIT */, toneToSendSf100 /* IMPORTED_SHORT_NAMED_BIT */, GenerateTelephonyTones_toneDuration /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_privateData /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, GenerateTelephonyTones_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_GenerateTelephonyTones, _encode_GenerateTelephonyTones } from "../CSTA-capability-exchange/GenerateTelephonyTones.ta.mjs";
import { SendUserInformation, SendUserInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, SendUserInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendUserInformation_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, SendUserInformation_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SendUserInformation, _encode_SendUserInformation } from "../CSTA-capability-exchange/SendUserInformation.ta.mjs";
// export { SendUserInformation, SendUserInformation_privateData /* IMPORTED_LONG_NAMED_BIT */, SendUserInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SendUserInformation_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, SendUserInformation_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SendUserInformation, _encode_SendUserInformation } from "../CSTA-capability-exchange/SendUserInformation.ta.mjs";


/**
 * @summary CallAssociatedServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedServList ::= SEQUENCE
 * {     associateData             [0] IMPLICIT     AssociateData             OPTIONAL,
 *     cancelTelephonyTones         [1] IMPLICIT     CancelTelephonyTones         OPTIONAL,
 *     changeConnectionInformation    [5] IMPLICIT     ChangeConnectionInformation    OPTIONAL,
 *     generateDigits             [2] IMPLICIT     GenerateDigits             OPTIONAL,
 *     generateTelephonyTones         [3] IMPLICIT     GenerateTelephonyTones         OPTIONAL,
 *     sendUserInformation         [4] IMPLICIT     SendUserInformation         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallAssociatedServList {
    constructor (
        /**
         * @summary `associateData`.
         * @public
         * @readonly
         */
        readonly associateData: OPTIONAL<AssociateData>,
        /**
         * @summary `cancelTelephonyTones`.
         * @public
         * @readonly
         */
        readonly cancelTelephonyTones: OPTIONAL<CancelTelephonyTones>,
        /**
         * @summary `changeConnectionInformation`.
         * @public
         * @readonly
         */
        readonly changeConnectionInformation: OPTIONAL<ChangeConnectionInformation>,
        /**
         * @summary `generateDigits`.
         * @public
         * @readonly
         */
        readonly generateDigits: OPTIONAL<GenerateDigits>,
        /**
         * @summary `generateTelephonyTones`.
         * @public
         * @readonly
         */
        readonly generateTelephonyTones: OPTIONAL<GenerateTelephonyTones>,
        /**
         * @summary `sendUserInformation`.
         * @public
         * @readonly
         */
        readonly sendUserInformation: OPTIONAL<SendUserInformation>
    ) {}

    /**
     * @summary Restructures an object into a CallAssociatedServList
     * @description
     * 
     * This takes an `object` and converts it to a `CallAssociatedServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallAssociatedServList`.
     * @returns {CallAssociatedServList}
     */
    public static _from_object (_o: { [_K in keyof (CallAssociatedServList)]: (CallAssociatedServList)[_K] }): CallAssociatedServList {
        return new CallAssociatedServList(_o.associateData, _o.cancelTelephonyTones, _o.changeConnectionInformation, _o.generateDigits, _o.generateTelephonyTones, _o.sendUserInformation);
    }


}

/**
 * @summary The Leading Root Component Types of CallAssociatedServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallAssociatedServList: $.ComponentSpec[] = [
    new $.ComponentSpec("associateData", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cancelTelephonyTones", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("changeConnectionInformation", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("generateDigits", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("generateTelephonyTones", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("sendUserInformation", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallAssociatedServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallAssociatedServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallAssociatedServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallAssociatedServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallAssociatedServList: $.ASN1Decoder<CallAssociatedServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedServList (el: _Element): CallAssociatedServList {
    if (!_cached_decoder_for_CallAssociatedServList) { _cached_decoder_for_CallAssociatedServList = function (el: _Element): CallAssociatedServList {
    let associateData: OPTIONAL<AssociateData>;
    let cancelTelephonyTones: OPTIONAL<CancelTelephonyTones>;
    let changeConnectionInformation: OPTIONAL<ChangeConnectionInformation>;
    let generateDigits: OPTIONAL<GenerateDigits>;
    let generateTelephonyTones: OPTIONAL<GenerateTelephonyTones>;
    let sendUserInformation: OPTIONAL<SendUserInformation>;
    const callbacks: $.DecodingMap = {
        "associateData": (_el: _Element): void => { associateData = $._decode_implicit<AssociateData>(() => _decode_AssociateData)(_el); },
        "cancelTelephonyTones": (_el: _Element): void => { cancelTelephonyTones = $._decode_implicit<CancelTelephonyTones>(() => _decode_CancelTelephonyTones)(_el); },
        "changeConnectionInformation": (_el: _Element): void => { changeConnectionInformation = $._decode_implicit<ChangeConnectionInformation>(() => _decode_ChangeConnectionInformation)(_el); },
        "generateDigits": (_el: _Element): void => { generateDigits = $._decode_implicit<GenerateDigits>(() => _decode_GenerateDigits)(_el); },
        "generateTelephonyTones": (_el: _Element): void => { generateTelephonyTones = $._decode_implicit<GenerateTelephonyTones>(() => _decode_GenerateTelephonyTones)(_el); },
        "sendUserInformation": (_el: _Element): void => { sendUserInformation = $._decode_implicit<SendUserInformation>(() => _decode_SendUserInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallAssociatedServList,
        _extension_additions_list_spec_for_CallAssociatedServList,
        _root_component_type_list_2_spec_for_CallAssociatedServList,
        undefined,
    );
    return new CallAssociatedServList(
        associateData,
        cancelTelephonyTones,
        changeConnectionInformation,
        generateDigits,
        generateTelephonyTones,
        sendUserInformation
    );
}; }
    return _cached_decoder_for_CallAssociatedServList(el);
}

let _cached_encoder_for_CallAssociatedServList: $.ASN1Encoder<CallAssociatedServList> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedServList, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedServList (value: CallAssociatedServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedServList) { _cached_encoder_for_CallAssociatedServList = function (value: CallAssociatedServList, elGetter: $.ASN1Encoder<CallAssociatedServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.associateData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AssociateData, $.BER)(value.associateData, $.BER)),
            /* IF_ABSENT  */ ((value.cancelTelephonyTones === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CancelTelephonyTones, $.BER)(value.cancelTelephonyTones, $.BER)),
            /* IF_ABSENT  */ ((value.changeConnectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ChangeConnectionInformation, $.BER)(value.changeConnectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.generateDigits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GenerateDigits, $.BER)(value.generateDigits, $.BER)),
            /* IF_ABSENT  */ ((value.generateTelephonyTones === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GenerateTelephonyTones, $.BER)(value.generateTelephonyTones, $.BER)),
            /* IF_ABSENT  */ ((value.sendUserInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SendUserInformation, $.BER)(value.sendUserInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallAssociatedServList(value, elGetter);
}


/* eslint-enable */

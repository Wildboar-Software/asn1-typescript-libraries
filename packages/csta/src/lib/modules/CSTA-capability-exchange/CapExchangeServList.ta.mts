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
import { GetCSTAFeatures, GetCSTAFeatures_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, GetCSTAFeatures_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetCSTAFeatures, _encode_GetCSTAFeatures } from "../CSTA-capability-exchange/GetCSTAFeatures.ta.mjs";
// export { GetCSTAFeatures, GetCSTAFeatures_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, GetCSTAFeatures_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetCSTAFeatures, _encode_GetCSTAFeatures } from "../CSTA-capability-exchange/GetCSTAFeatures.ta.mjs";
import { GetLogicalDeviceInformation, GetLogicalDeviceInformation_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, GetLogicalDeviceInformation_namedDeviceTypeInAck /* IMPORTED_LONG_NAMED_BIT */, namedDeviceTypeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_shortFormDeviceIDInAck /* IMPORTED_LONG_NAMED_BIT */, shortFormDeviceIDInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_miscMonitorCapsInAck /* IMPORTED_LONG_NAMED_BIT */, miscMonitorCapsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxCallBacksInAck /* IMPORTED_LONG_NAMED_BIT */, maxCallBacksInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxAutoAnswerRingsInAck /* IMPORTED_LONG_NAMED_BIT */, maxAutoAnswerRingsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxActiveCallsInAck /* IMPORTED_LONG_NAMED_BIT */, maxActiveCallsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxHeldCallsInAck /* IMPORTED_LONG_NAMED_BIT */, maxHeldCallsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxFwdSettingsInAck /* IMPORTED_LONG_NAMED_BIT */, maxFwdSettingsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxDevicesInConfInAck /* IMPORTED_LONG_NAMED_BIT */, maxDevicesInConfInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupParameter /* IMPORTED_LONG_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupConsultationInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupConsultationInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupHoldMakeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupAlternateInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupAlternateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCallsHoldInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCallsConnectedInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_mediaClassSupportInAck /* IMPORTED_LONG_NAMED_BIT */, mediaClassSupportInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_connectionRateListInAck /* IMPORTED_LONG_NAMED_BIT */, connectionRateListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_delayToleranceListInAck /* IMPORTED_LONG_NAMED_BIT */, delayToleranceListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_numberOfChannelsInAck /* IMPORTED_LONG_NAMED_BIT */, numberOfChannelsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxChannelBindInAck /* IMPORTED_LONG_NAMED_BIT */, maxChannelBindInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLogicalDeviceInformation, _encode_GetLogicalDeviceInformation } from "../CSTA-capability-exchange/GetLogicalDeviceInformation.ta.mjs";
// export { GetLogicalDeviceInformation, GetLogicalDeviceInformation_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, GetLogicalDeviceInformation_namedDeviceTypeInAck /* IMPORTED_LONG_NAMED_BIT */, namedDeviceTypeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_shortFormDeviceIDInAck /* IMPORTED_LONG_NAMED_BIT */, shortFormDeviceIDInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_miscMonitorCapsInAck /* IMPORTED_LONG_NAMED_BIT */, miscMonitorCapsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxCallBacksInAck /* IMPORTED_LONG_NAMED_BIT */, maxCallBacksInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxAutoAnswerRingsInAck /* IMPORTED_LONG_NAMED_BIT */, maxAutoAnswerRingsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxActiveCallsInAck /* IMPORTED_LONG_NAMED_BIT */, maxActiveCallsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxHeldCallsInAck /* IMPORTED_LONG_NAMED_BIT */, maxHeldCallsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxFwdSettingsInAck /* IMPORTED_LONG_NAMED_BIT */, maxFwdSettingsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxDevicesInConfInAck /* IMPORTED_LONG_NAMED_BIT */, maxDevicesInConfInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupParameter /* IMPORTED_LONG_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupConsultationInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupConsultationInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupHoldMakeInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupHoldMakeInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupAlternateInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupAlternateInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupTwoCallsHoldInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCallsHoldInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_transAndConfSetupTwoCallsConnectedInAck /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCallsConnectedInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_mediaClassSupportInAck /* IMPORTED_LONG_NAMED_BIT */, mediaClassSupportInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_connectionRateListInAck /* IMPORTED_LONG_NAMED_BIT */, connectionRateListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_delayToleranceListInAck /* IMPORTED_LONG_NAMED_BIT */, delayToleranceListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_numberOfChannelsInAck /* IMPORTED_LONG_NAMED_BIT */, numberOfChannelsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_maxChannelBindInAck /* IMPORTED_LONG_NAMED_BIT */, maxChannelBindInAck /* IMPORTED_SHORT_NAMED_BIT */, GetLogicalDeviceInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetLogicalDeviceInformation, _encode_GetLogicalDeviceInformation } from "../CSTA-capability-exchange/GetLogicalDeviceInformation.ta.mjs";
import { GetPhysicalDeviceInformation, GetPhysicalDeviceInformation_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, GetPhysicalDeviceInformation_namedDeviceTypesInAck /* IMPORTED_LONG_NAMED_BIT */, namedDeviceTypesInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_otherLogicalDeviceListInAck /* IMPORTED_LONG_NAMED_BIT */, otherLogicalDeviceListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_deviceModelNameInAck /* IMPORTED_LONG_NAMED_BIT */, deviceModelNameInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxDisplaysInAck /* IMPORTED_LONG_NAMED_BIT */, maxDisplaysInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxButtonsInAck /* IMPORTED_LONG_NAMED_BIT */, maxButtonsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxLampsInAck /* IMPORTED_LONG_NAMED_BIT */, maxLampsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxRingPatternsInAck /* IMPORTED_LONG_NAMED_BIT */, maxRingPatternsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetPhysicalDeviceInformation, _encode_GetPhysicalDeviceInformation } from "../CSTA-capability-exchange/GetPhysicalDeviceInformation.ta.mjs";
// export { GetPhysicalDeviceInformation, GetPhysicalDeviceInformation_privateDataInReq /* IMPORTED_LONG_NAMED_BIT */, GetPhysicalDeviceInformation_namedDeviceTypesInAck /* IMPORTED_LONG_NAMED_BIT */, namedDeviceTypesInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_otherLogicalDeviceListInAck /* IMPORTED_LONG_NAMED_BIT */, otherLogicalDeviceListInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_deviceModelNameInAck /* IMPORTED_LONG_NAMED_BIT */, deviceModelNameInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxDisplaysInAck /* IMPORTED_LONG_NAMED_BIT */, maxDisplaysInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxButtonsInAck /* IMPORTED_LONG_NAMED_BIT */, maxButtonsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxLampsInAck /* IMPORTED_LONG_NAMED_BIT */, maxLampsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_maxRingPatternsInAck /* IMPORTED_LONG_NAMED_BIT */, maxRingPatternsInAck /* IMPORTED_SHORT_NAMED_BIT */, GetPhysicalDeviceInformation_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetPhysicalDeviceInformation, _encode_GetPhysicalDeviceInformation } from "../CSTA-capability-exchange/GetPhysicalDeviceInformation.ta.mjs";
import { GetSwitchingFunctionCapabilities, GetSwitchingFunctionCapabilities_privateData /* IMPORTED_LONG_NAMED_BIT */, GetSwitchingFunctionCapabilities_mediaClassSupport /* IMPORTED_LONG_NAMED_BIT */, mediaClassSupport /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_numberOfChannels /* IMPORTED_LONG_NAMED_BIT */, numberOfChannels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_maxChannelBind /* IMPORTED_LONG_NAMED_BIT */, maxChannelBind /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, miscMediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_connectionRateList /* IMPORTED_LONG_NAMED_BIT */, connectionRateList /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_delayToleranceRateList /* IMPORTED_LONG_NAMED_BIT */, delayToleranceRateList /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_pauseTime /* IMPORTED_LONG_NAMED_BIT */, pauseTime /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_currentTime /* IMPORTED_LONG_NAMED_BIT */, currentTime /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupParameter /* IMPORTED_LONG_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupConsultation /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupConsultation /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupHoldMake /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupAlternate /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupAlternate /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCalls /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCallsConnected /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_miscMonitor /* IMPORTED_LONG_NAMED_BIT */, miscMonitor /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_correlatorDataSupported /* IMPORTED_LONG_NAMED_BIT */, correlatorDataSupported /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_dynamicFeatureSupported /* IMPORTED_LONG_NAMED_BIT */, dynamicFeatureSupported /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_callLinkageOptions /* IMPORTED_LONG_NAMED_BIT */, callLinkageOptions /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_acdModels /* IMPORTED_LONG_NAMED_BIT */, acdModels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_agentLogOnModels /* IMPORTED_LONG_NAMED_BIT */, agentLogOnModels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_agentStateModels /* IMPORTED_LONG_NAMED_BIT */, agentStateModels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_privateDataVersionList /* IMPORTED_LONG_NAMED_BIT */, privateDataVersionList /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_simpleThreshold /* IMPORTED_LONG_NAMED_BIT */, simpleThreshold /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_filterThreshold /* IMPORTED_LONG_NAMED_BIT */, filterThreshold /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries /* IMPORTED_LONG_NAMED_BIT */, maxDeviceHistoryEntries /* IMPORTED_SHORT_NAMED_BIT */, _decode_GetSwitchingFunctionCapabilities, _encode_GetSwitchingFunctionCapabilities } from "../CSTA-capability-exchange/GetSwitchingFunctionCapabilities.ta.mjs";
// export { GetSwitchingFunctionCapabilities, GetSwitchingFunctionCapabilities_privateData /* IMPORTED_LONG_NAMED_BIT */, GetSwitchingFunctionCapabilities_mediaClassSupport /* IMPORTED_LONG_NAMED_BIT */, mediaClassSupport /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_numberOfChannels /* IMPORTED_LONG_NAMED_BIT */, numberOfChannels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_maxChannelBind /* IMPORTED_LONG_NAMED_BIT */, maxChannelBind /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_miscMediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, miscMediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_connectionRateList /* IMPORTED_LONG_NAMED_BIT */, connectionRateList /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_delayToleranceRateList /* IMPORTED_LONG_NAMED_BIT */, delayToleranceRateList /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_pauseTime /* IMPORTED_LONG_NAMED_BIT */, pauseTime /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_currentTime /* IMPORTED_LONG_NAMED_BIT */, currentTime /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupParameter /* IMPORTED_LONG_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupConsultation /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupConsultation /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupHoldMake /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupHoldMake /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupAlternate /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupAlternate /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupTwoCalls /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCalls /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_transAndConfSetupTwoCallsConnected /* IMPORTED_LONG_NAMED_BIT */, transAndConfSetupTwoCallsConnected /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_miscMonitor /* IMPORTED_LONG_NAMED_BIT */, miscMonitor /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_correlatorDataSupported /* IMPORTED_LONG_NAMED_BIT */, correlatorDataSupported /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_dynamicFeatureSupported /* IMPORTED_LONG_NAMED_BIT */, dynamicFeatureSupported /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_callLinkageOptions /* IMPORTED_LONG_NAMED_BIT */, callLinkageOptions /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_acdModels /* IMPORTED_LONG_NAMED_BIT */, acdModels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_agentLogOnModels /* IMPORTED_LONG_NAMED_BIT */, agentLogOnModels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_agentStateModels /* IMPORTED_LONG_NAMED_BIT */, agentStateModels /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_privateDataVersionList /* IMPORTED_LONG_NAMED_BIT */, privateDataVersionList /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_simpleThreshold /* IMPORTED_LONG_NAMED_BIT */, simpleThreshold /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_filterThreshold /* IMPORTED_LONG_NAMED_BIT */, filterThreshold /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionCapabilities_maxDeviceHistoryEntries /* IMPORTED_LONG_NAMED_BIT */, maxDeviceHistoryEntries /* IMPORTED_SHORT_NAMED_BIT */, _decode_GetSwitchingFunctionCapabilities, _encode_GetSwitchingFunctionCapabilities } from "../CSTA-capability-exchange/GetSwitchingFunctionCapabilities.ta.mjs";
import { GetSwitchingFunctionDevices, GetSwitchingFunctionDevices_requestedDeviceID /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceID /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryACD /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryACD /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryACDGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryHuntGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPickGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryUserGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryOtherGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryNetwInterface /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPark /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPark /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryRouteingDevice /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryStation /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryStation /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryVoiceUnit /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryGenericIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryListenerIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryVDTMFIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPromptIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPromptQueueIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryMessageIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryConference /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryConference /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryOther /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryOther /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_privateData /* IMPORTED_LONG_NAMED_BIT */, GetSwitchingFunctionDevices_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetSwitchingFunctionDevices, _encode_GetSwitchingFunctionDevices } from "../CSTA-capability-exchange/GetSwitchingFunctionDevices.ta.mjs";
// export { GetSwitchingFunctionDevices, GetSwitchingFunctionDevices_requestedDeviceID /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceID /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryACD /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryACD /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryACDGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryACDGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryHuntGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryHuntGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPickGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPickGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryUserGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryUserGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryOtherGroup /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryOtherGroup /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryNetwInterface /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryNetwInterface /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPark /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPark /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryRouteingDevice /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryRouteingDevice /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryStation /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryStation /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryVoiceUnit /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryVoiceUnit /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryGenericIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryGenericIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryListenerIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryListenerIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryVDTMFIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryVDTMFIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPromptIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPromptIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryPromptQueueIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryPromptQueueIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryMessageIV /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryMessageIV /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryConference /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryConference /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_requestedDeviceCategoryOther /* IMPORTED_LONG_NAMED_BIT */, requestedDeviceCategoryOther /* IMPORTED_SHORT_NAMED_BIT */, GetSwitchingFunctionDevices_privateData /* IMPORTED_LONG_NAMED_BIT */, GetSwitchingFunctionDevices_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_GetSwitchingFunctionDevices, _encode_GetSwitchingFunctionDevices } from "../CSTA-capability-exchange/GetSwitchingFunctionDevices.ta.mjs";
import { SwitchingFunctionDevices, SwitchingFunctionDevices_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListDeviceCategory /* IMPORTED_LONG_NAMED_BIT */, deviceListDeviceCategory /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListNamedDeviceTypes /* IMPORTED_LONG_NAMED_BIT */, deviceListNamedDeviceTypes /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListDeviceAttributes /* IMPORTED_LONG_NAMED_BIT */, deviceListDeviceAttributes /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListDeviceModelName /* IMPORTED_LONG_NAMED_BIT */, deviceListDeviceModelName /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListNidGroup /* IMPORTED_LONG_NAMED_BIT */, deviceListNidGroup /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SwitchingFunctionDevices, _encode_SwitchingFunctionDevices } from "../CSTA-capability-exchange/SwitchingFunctionDevices.ta.mjs";
// export { SwitchingFunctionDevices, SwitchingFunctionDevices_segmentID /* IMPORTED_LONG_NAMED_BIT */, segmentID /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListDeviceCategory /* IMPORTED_LONG_NAMED_BIT */, deviceListDeviceCategory /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListNamedDeviceTypes /* IMPORTED_LONG_NAMED_BIT */, deviceListNamedDeviceTypes /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListDeviceAttributes /* IMPORTED_LONG_NAMED_BIT */, deviceListDeviceAttributes /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListDeviceModelName /* IMPORTED_LONG_NAMED_BIT */, deviceListDeviceModelName /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_deviceListNidGroup /* IMPORTED_LONG_NAMED_BIT */, deviceListNidGroup /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionDevices_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_SwitchingFunctionDevices, _encode_SwitchingFunctionDevices } from "../CSTA-capability-exchange/SwitchingFunctionDevices.ta.mjs";


/**
 * @summary CapExchangeServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CapExchangeServList ::= SEQUENCE
 * {     getCSTAFeatures            [5] IMPLICIT GetCSTAFeatures            OPTIONAL,
 *     getLogicalDeviceInformation     [0] IMPLICIT GetLogicalDeviceInformation     OPTIONAL,
 *     getPhysicalDeviceInformation     [1] IMPLICIT GetPhysicalDeviceInformation     OPTIONAL,
 *     getSwitchingFunctionCaps    [4] IMPLICIT GetSwitchingFunctionCapabilities    OPTIONAL,
 *     getSwitchingFunctionDevices     [2] IMPLICIT GetSwitchingFunctionDevices     OPTIONAL,
 *     switchingFunctionDevices     [3] IMPLICIT SwitchingFunctionDevices         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CapExchangeServList {
    constructor (
        /**
         * @summary `getCSTAFeatures`.
         * @public
         * @readonly
         */
        readonly getCSTAFeatures: OPTIONAL<GetCSTAFeatures>,
        /**
         * @summary `getLogicalDeviceInformation`.
         * @public
         * @readonly
         */
        readonly getLogicalDeviceInformation: OPTIONAL<GetLogicalDeviceInformation>,
        /**
         * @summary `getPhysicalDeviceInformation`.
         * @public
         * @readonly
         */
        readonly getPhysicalDeviceInformation: OPTIONAL<GetPhysicalDeviceInformation>,
        /**
         * @summary `getSwitchingFunctionCaps`.
         * @public
         * @readonly
         */
        readonly getSwitchingFunctionCaps: OPTIONAL<GetSwitchingFunctionCapabilities>,
        /**
         * @summary `getSwitchingFunctionDevices`.
         * @public
         * @readonly
         */
        readonly getSwitchingFunctionDevices: OPTIONAL<GetSwitchingFunctionDevices>,
        /**
         * @summary `switchingFunctionDevices`.
         * @public
         * @readonly
         */
        readonly switchingFunctionDevices: OPTIONAL<SwitchingFunctionDevices>
    ) {}

    /**
     * @summary Restructures an object into a CapExchangeServList
     * @description
     * 
     * This takes an `object` and converts it to a `CapExchangeServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CapExchangeServList`.
     * @returns {CapExchangeServList}
     */
    public static _from_object (_o: { [_K in keyof (CapExchangeServList)]: (CapExchangeServList)[_K] }): CapExchangeServList {
        return new CapExchangeServList(_o.getCSTAFeatures, _o.getLogicalDeviceInformation, _o.getPhysicalDeviceInformation, _o.getSwitchingFunctionCaps, _o.getSwitchingFunctionDevices, _o.switchingFunctionDevices);
    }


}

/**
 * @summary The Leading Root Component Types of CapExchangeServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CapExchangeServList: $.ComponentSpec[] = [
    new $.ComponentSpec("getCSTAFeatures", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("getLogicalDeviceInformation", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("getPhysicalDeviceInformation", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("getSwitchingFunctionCaps", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("getSwitchingFunctionDevices", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("switchingFunctionDevices", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CapExchangeServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CapExchangeServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CapExchangeServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CapExchangeServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CapExchangeServList: $.ASN1Decoder<CapExchangeServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CapExchangeServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CapExchangeServList (el: _Element): CapExchangeServList {
    if (!_cached_decoder_for_CapExchangeServList) { _cached_decoder_for_CapExchangeServList = function (el: _Element): CapExchangeServList {
    let getCSTAFeatures: OPTIONAL<GetCSTAFeatures>;
    let getLogicalDeviceInformation: OPTIONAL<GetLogicalDeviceInformation>;
    let getPhysicalDeviceInformation: OPTIONAL<GetPhysicalDeviceInformation>;
    let getSwitchingFunctionCaps: OPTIONAL<GetSwitchingFunctionCapabilities>;
    let getSwitchingFunctionDevices: OPTIONAL<GetSwitchingFunctionDevices>;
    let switchingFunctionDevices: OPTIONAL<SwitchingFunctionDevices>;
    const callbacks: $.DecodingMap = {
        "getCSTAFeatures": (_el: _Element): void => { getCSTAFeatures = $._decode_implicit<GetCSTAFeatures>(() => _decode_GetCSTAFeatures)(_el); },
        "getLogicalDeviceInformation": (_el: _Element): void => { getLogicalDeviceInformation = $._decode_implicit<GetLogicalDeviceInformation>(() => _decode_GetLogicalDeviceInformation)(_el); },
        "getPhysicalDeviceInformation": (_el: _Element): void => { getPhysicalDeviceInformation = $._decode_implicit<GetPhysicalDeviceInformation>(() => _decode_GetPhysicalDeviceInformation)(_el); },
        "getSwitchingFunctionCaps": (_el: _Element): void => { getSwitchingFunctionCaps = $._decode_implicit<GetSwitchingFunctionCapabilities>(() => _decode_GetSwitchingFunctionCapabilities)(_el); },
        "getSwitchingFunctionDevices": (_el: _Element): void => { getSwitchingFunctionDevices = $._decode_implicit<GetSwitchingFunctionDevices>(() => _decode_GetSwitchingFunctionDevices)(_el); },
        "switchingFunctionDevices": (_el: _Element): void => { switchingFunctionDevices = $._decode_implicit<SwitchingFunctionDevices>(() => _decode_SwitchingFunctionDevices)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CapExchangeServList,
        _extension_additions_list_spec_for_CapExchangeServList,
        _root_component_type_list_2_spec_for_CapExchangeServList,
        undefined,
    );
    return new CapExchangeServList(
        getCSTAFeatures,
        getLogicalDeviceInformation,
        getPhysicalDeviceInformation,
        getSwitchingFunctionCaps,
        getSwitchingFunctionDevices,
        switchingFunctionDevices
    );
}; }
    return _cached_decoder_for_CapExchangeServList(el);
}

let _cached_encoder_for_CapExchangeServList: $.ASN1Encoder<CapExchangeServList> | null = null;

/**
 * @summary Encodes a(n) CapExchangeServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CapExchangeServList, encoded as an ASN.1 Element.
 */
export
function _encode_CapExchangeServList (value: CapExchangeServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CapExchangeServList) { _cached_encoder_for_CapExchangeServList = function (value: CapExchangeServList, elGetter: $.ASN1Encoder<CapExchangeServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.getCSTAFeatures === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GetCSTAFeatures, $.BER)(value.getCSTAFeatures, $.BER)),
            /* IF_ABSENT  */ ((value.getLogicalDeviceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GetLogicalDeviceInformation, $.BER)(value.getLogicalDeviceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.getPhysicalDeviceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_GetPhysicalDeviceInformation, $.BER)(value.getPhysicalDeviceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.getSwitchingFunctionCaps === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GetSwitchingFunctionCapabilities, $.BER)(value.getSwitchingFunctionCaps, $.BER)),
            /* IF_ABSENT  */ ((value.getSwitchingFunctionDevices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GetSwitchingFunctionDevices, $.BER)(value.getSwitchingFunctionDevices, $.BER)),
            /* IF_ABSENT  */ ((value.switchingFunctionDevices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SwitchingFunctionDevices, $.BER)(value.switchingFunctionDevices, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CapExchangeServList(value, elGetter);
}


/* eslint-enable */

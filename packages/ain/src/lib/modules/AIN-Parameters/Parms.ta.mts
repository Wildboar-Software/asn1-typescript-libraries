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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
// export { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
import { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
// export { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
import { AlternateBillingIndicator, _decode_AlternateBillingIndicator, _encode_AlternateBillingIndicator } from "../AIN-Parameters/AlternateBillingIndicator.ta.mjs";
// export { AlternateBillingIndicator, _decode_AlternateBillingIndicator, _encode_AlternateBillingIndicator } from "../AIN-Parameters/AlternateBillingIndicator.ta.mjs";
import { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
// export { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
import { AlternateTrunkGroup, _decode_AlternateTrunkGroup, _encode_AlternateTrunkGroup } from "../AIN-Parameters/AlternateTrunkGroup.ta.mjs";
// export { AlternateTrunkGroup, _decode_AlternateTrunkGroup, _encode_AlternateTrunkGroup } from "../AIN-Parameters/AlternateTrunkGroup.ta.mjs";
import { AMAAlternateBillingNumber, _decode_AMAAlternateBillingNumber, _encode_AMAAlternateBillingNumber } from "../AIN-Parameters/AMAAlternateBillingNumber.ta.mjs";
// export { AMAAlternateBillingNumber, _decode_AMAAlternateBillingNumber, _encode_AMAAlternateBillingNumber } from "../AIN-Parameters/AMAAlternateBillingNumber.ta.mjs";
import { AMABusinessCustomerID, _decode_AMABusinessCustomerID, _encode_AMABusinessCustomerID } from "../AIN-Parameters/AMABusinessCustomerID.ta.mjs";
// export { AMABusinessCustomerID, _decode_AMABusinessCustomerID, _encode_AMABusinessCustomerID } from "../AIN-Parameters/AMABusinessCustomerID.ta.mjs";
import { AMAslpID, _decode_AMAslpID, _encode_AMAslpID } from "../AIN-Parameters/AMAslpID.ta.mjs";
// export { AMAslpID, _decode_AMAslpID, _encode_AMAslpID } from "../AIN-Parameters/AMAslpID.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { AnswerIndicator, _decode_AnswerIndicator, _encode_AnswerIndicator } from "../AIN-Parameters/AnswerIndicator.ta.mjs";
// export { AnswerIndicator, _decode_AnswerIndicator, _encode_AnswerIndicator } from "../AIN-Parameters/AnswerIndicator.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { BusyCause, _decode_BusyCause, _encode_BusyCause } from "../AIN-Parameters/BusyCause.ta.mjs";
// export { BusyCause, _decode_BusyCause, _encode_BusyCause } from "../AIN-Parameters/BusyCause.ta.mjs";
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { CalledPartyStationType, _decode_CalledPartyStationType, _encode_CalledPartyStationType } from "../AIN-Parameters/CalledPartyStationType.ta.mjs";
// export { CalledPartyStationType, _decode_CalledPartyStationType, _encode_CalledPartyStationType } from "../AIN-Parameters/CalledPartyStationType.ta.mjs";
import { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../AIN-Parameters/CallingGeodeticLocation.ta.mjs";
// export { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../AIN-Parameters/CallingGeodeticLocation.ta.mjs";
import { CallingPartyBGID, _decode_CallingPartyBGID, _encode_CallingPartyBGID } from "../AIN-Parameters/CallingPartyBGID.ta.mjs";
// export { CallingPartyBGID, _decode_CallingPartyBGID, _encode_CallingPartyBGID } from "../AIN-Parameters/CallingPartyBGID.ta.mjs";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { CallType, _decode_CallType, _encode_CallType } from "../AIN-Parameters/CallType.ta.mjs";
// export { CallType, _decode_CallType, _encode_CallType } from "../AIN-Parameters/CallType.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { ClearCause, _decode_ClearCause, _encode_ClearCause } from "../AIN-Parameters/ClearCause.ta.mjs";
// export { ClearCause, _decode_ClearCause, _encode_ClearCause } from "../AIN-Parameters/ClearCause.ta.mjs";
import { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
// export { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
// export { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
import { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
// export { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
import { DisconnectFlag, _decode_DisconnectFlag, _encode_DisconnectFlag } from "../AIN-Parameters/DisconnectFlag.ta.mjs";
// export { DisconnectFlag, _decode_DisconnectFlag, _encode_DisconnectFlag } from "../AIN-Parameters/DisconnectFlag.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
// export { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
import { DTMFDigitsDetected, _decode_DTMFDigitsDetected, _encode_DTMFDigitsDetected } from "../AIN-Parameters/DTMFDigitsDetected.ta.mjs";
// export { DTMFDigitsDetected, _decode_DTMFDigitsDetected, _encode_DTMFDigitsDetected } from "../AIN-Parameters/DTMFDigitsDetected.ta.mjs";
import { FacilityGID, _decode_FacilityGID, _encode_FacilityGID } from "../AIN-Parameters/FacilityGID.ta.mjs";
// export { FacilityGID, _decode_FacilityGID, _encode_FacilityGID } from "../AIN-Parameters/FacilityGID.ta.mjs";
import { FacilityMemberID, _decode_FacilityMemberID, _encode_FacilityMemberID } from "../AIN-Parameters/FacilityMemberID.ta.mjs";
// export { FacilityMemberID, _decode_FacilityMemberID, _encode_FacilityMemberID } from "../AIN-Parameters/FacilityMemberID.ta.mjs";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
// export { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
import { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
import { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
// export { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
import { ODTMFDigitsString, _decode_ODTMFDigitsString, _encode_ODTMFDigitsString } from "../AIN-Parameters/ODTMFDigitsString.ta.mjs";
// export { ODTMFDigitsString, _decode_ODTMFDigitsString, _encode_ODTMFDigitsString } from "../AIN-Parameters/ODTMFDigitsString.ta.mjs";
import { ODTMFNumberOfDigits, _decode_ODTMFNumberOfDigits, _encode_ODTMFNumberOfDigits } from "../AIN-Parameters/ODTMFNumberOfDigits.ta.mjs";
// export { ODTMFNumberOfDigits, _decode_ODTMFNumberOfDigits, _encode_ODTMFNumberOfDigits } from "../AIN-Parameters/ODTMFNumberOfDigits.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
import { OutpulseNumber, _decode_OutpulseNumber, _encode_OutpulseNumber } from "../AIN-Parameters/OutpulseNumber.ta.mjs";
// export { OutpulseNumber, _decode_OutpulseNumber, _encode_OutpulseNumber } from "../AIN-Parameters/OutpulseNumber.ta.mjs";
import { OverflowBillingIndicator, _decode_OverflowBillingIndicator, _encode_OverflowBillingIndicator } from "../AIN-Parameters/OverflowBillingIndicator.ta.mjs";
// export { OverflowBillingIndicator, _decode_OverflowBillingIndicator, _encode_OverflowBillingIndicator } from "../AIN-Parameters/OverflowBillingIndicator.ta.mjs";
import { PassiveLegTreatment, _decode_PassiveLegTreatment, _encode_PassiveLegTreatment } from "../AIN-Parameters/PassiveLegTreatment.ta.mjs";
// export { PassiveLegTreatment, _decode_PassiveLegTreatment, _encode_PassiveLegTreatment } from "../AIN-Parameters/PassiveLegTreatment.ta.mjs";
import { PartyID, _decode_PartyID, _encode_PartyID } from "../AIN-Parameters/PartyID.ta.mjs";
// export { PartyID, _decode_PartyID, _encode_PartyID } from "../AIN-Parameters/PartyID.ta.mjs";
import { PartyOnHold, _decode_PartyOnHold, _encode_PartyOnHold } from "../AIN-Parameters/PartyOnHold.ta.mjs";
// export { PartyOnHold, _decode_PartyOnHold, _encode_PartyOnHold } from "../AIN-Parameters/PartyOnHold.ta.mjs";
import { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
// export { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { PrimaryTrunkGroup, _decode_PrimaryTrunkGroup, _encode_PrimaryTrunkGroup } from "../AIN-Parameters/PrimaryTrunkGroup.ta.mjs";
// export { PrimaryTrunkGroup, _decode_PrimaryTrunkGroup, _encode_PrimaryTrunkGroup } from "../AIN-Parameters/PrimaryTrunkGroup.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
import { ResourceType, _decode_ResourceType, _encode_ResourceType } from "../AIN-Parameters/ResourceType.ta.mjs";
// export { ResourceType, _decode_ResourceType, _encode_ResourceType } from "../AIN-Parameters/ResourceType.ta.mjs";
import { SecondAlternateBillingIndicator, _decode_SecondAlternateBillingIndicator, _encode_SecondAlternateBillingIndicator } from "../AIN-Parameters/SecondAlternateBillingIndicator.ta.mjs";
// export { SecondAlternateBillingIndicator, _decode_SecondAlternateBillingIndicator, _encode_SecondAlternateBillingIndicator } from "../AIN-Parameters/SecondAlternateBillingIndicator.ta.mjs";
import { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
// export { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
import { SecondAlternateTrunkGroup, _decode_SecondAlternateTrunkGroup, _encode_SecondAlternateTrunkGroup } from "../AIN-Parameters/SecondAlternateTrunkGroup.ta.mjs";
// export { SecondAlternateTrunkGroup, _decode_SecondAlternateTrunkGroup, _encode_SecondAlternateTrunkGroup } from "../AIN-Parameters/SecondAlternateTrunkGroup.ta.mjs";
import { Spid, _decode_Spid, _encode_Spid } from "../AIN-Parameters/Spid.ta.mjs";
// export { Spid, _decode_Spid, _encode_Spid } from "../AIN-Parameters/Spid.ta.mjs";
import { SSPResponseMessageTimerT1, _decode_SSPResponseMessageTimerT1, _encode_SSPResponseMessageTimerT1 } from "../AIN-Parameters/SSPResponseMessageTimerT1.ta.mjs";
// export { SSPResponseMessageTimerT1, _decode_SSPResponseMessageTimerT1, _encode_SSPResponseMessageTimerT1 } from "../AIN-Parameters/SSPResponseMessageTimerT1.ta.mjs";
import { StrParameterBlock, _decode_StrParameterBlock, _encode_StrParameterBlock } from "../AIN-Parameters/StrParameterBlock.ta.mjs";
// export { StrParameterBlock, _decode_StrParameterBlock, _encode_StrParameterBlock } from "../AIN-Parameters/StrParameterBlock.ta.mjs";
import { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
// export { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
import { TDTMFDigitString, _decode_TDTMFDigitString, _encode_TDTMFDigitString } from "../AIN-Parameters/TDTMFDigitString.ta.mjs";
// export { TDTMFDigitString, _decode_TDTMFDigitString, _encode_TDTMFDigitString } from "../AIN-Parameters/TDTMFDigitString.ta.mjs";
import { TDTMFNumberOfDigits, _decode_TDTMFNumberOfDigits, _encode_TDTMFNumberOfDigits } from "../AIN-Parameters/TDTMFNumberOfDigits.ta.mjs";
// export { TDTMFNumberOfDigits, _decode_TDTMFNumberOfDigits, _encode_TDTMFNumberOfDigits } from "../AIN-Parameters/TDTMFNumberOfDigits.ta.mjs";
import { TimerUpdated, _decode_TimerUpdated, _encode_TimerUpdated } from "../AIN-Parameters/TimerUpdated.ta.mjs";
// export { TimerUpdated, _decode_TimerUpdated, _encode_TimerUpdated } from "../AIN-Parameters/TimerUpdated.ta.mjs";
import { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
// export { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
import { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";
// export { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
// export { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
import { ConnectTime, _decode_ConnectTime, _encode_ConnectTime } from "../AIN-Parameters/ConnectTime.ta.mjs";
// export { ConnectTime, _decode_ConnectTime, _encode_ConnectTime } from "../AIN-Parameters/ConnectTime.ta.mjs";
import { ControlCauseIndicator, _decode_ControlCauseIndicator, _encode_ControlCauseIndicator } from "../AIN-Parameters/ControlCauseIndicator.ta.mjs";
// export { ControlCauseIndicator, _decode_ControlCauseIndicator, _encode_ControlCauseIndicator } from "../AIN-Parameters/ControlCauseIndicator.ta.mjs";
import { EchoData, _decode_EchoData, _encode_EchoData } from "../AIN-Parameters/EchoData.ta.mjs";
// export { EchoData, _decode_EchoData, _encode_EchoData } from "../AIN-Parameters/EchoData.ta.mjs";
import { FacilityStatus, _decode_FacilityStatus, _encode_FacilityStatus } from "../AIN-Parameters/FacilityStatus.ta.mjs";
// export { FacilityStatus, _decode_FacilityStatus, _encode_FacilityStatus } from "../AIN-Parameters/FacilityStatus.ta.mjs";
import { GapDuration, _decode_GapDuration, _encode_GapDuration } from "../AIN-Parameters/GapDuration.ta.mjs";
// export { GapDuration, _decode_GapDuration, _encode_GapDuration } from "../AIN-Parameters/GapDuration.ta.mjs";
import { GapInterval, _decode_GapInterval, _encode_GapInterval } from "../AIN-Parameters/GapInterval.ta.mjs";
// export { GapInterval, _decode_GapInterval, _encode_GapInterval } from "../AIN-Parameters/GapInterval.ta.mjs";
import { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
// export { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
import { MonitorTime, _decode_MonitorTime, _encode_MonitorTime } from "../AIN-Parameters/MonitorTime.ta.mjs";
// export { MonitorTime, _decode_MonitorTime, _encode_MonitorTime } from "../AIN-Parameters/MonitorTime.ta.mjs";
import { StatusCause, _decode_StatusCause, _encode_StatusCause } from "../AIN-Parameters/StatusCause.ta.mjs";
// export { StatusCause, _decode_StatusCause, _encode_StatusCause } from "../AIN-Parameters/StatusCause.ta.mjs";
import { TerminationIndicator, _decode_TerminationIndicator, _encode_TerminationIndicator } from "../AIN-Parameters/TerminationIndicator.ta.mjs";
// export { TerminationIndicator, _decode_TerminationIndicator, _encode_TerminationIndicator } from "../AIN-Parameters/TerminationIndicator.ta.mjs";
import { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
// export { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
import { TriggerCriteriaFlag, _decode_TriggerCriteriaFlag, _encode_TriggerCriteriaFlag } from "../AIN-Parameters/TriggerCriteriaFlag.ta.mjs";
// export { TriggerCriteriaFlag, _decode_TriggerCriteriaFlag, _encode_TriggerCriteriaFlag } from "../AIN-Parameters/TriggerCriteriaFlag.ta.mjs";
import { TSTRCTimer, _decode_TSTRCTimer, _encode_TSTRCTimer } from "../AIN-Parameters/TSTRCTimer.ta.mjs";
// export { TSTRCTimer, _decode_TSTRCTimer, _encode_TSTRCTimer } from "../AIN-Parameters/TSTRCTimer.ta.mjs";
import { AMAMeasure, _decode_AMAMeasure, _encode_AMAMeasure } from "../AIN-Parameters/AMAMeasure.ta.mjs";
// export { AMAMeasure, _decode_AMAMeasure, _encode_AMAMeasure } from "../AIN-Parameters/AMAMeasure.ta.mjs";
import { AMAMeasurement, _decode_AMAMeasurement, _encode_AMAMeasurement } from "../AIN-Parameters/AMAMeasurement.ta.mjs";
// export { AMAMeasurement, _decode_AMAMeasurement, _encode_AMAMeasurement } from "../AIN-Parameters/AMAMeasurement.ta.mjs";
import { ClearCauseData, _decode_ClearCauseData, _encode_ClearCauseData } from "../AIN-Parameters/ClearCauseData.ta.mjs";
// export { ClearCauseData, _decode_ClearCauseData, _encode_ClearCauseData } from "../AIN-Parameters/ClearCauseData.ta.mjs";
import { EnvelopContent, _decode_EnvelopContent, _encode_EnvelopContent } from "../AIN-Parameters/EnvelopContent.ta.mjs";
// export { EnvelopContent, _decode_EnvelopContent, _encode_EnvelopContent } from "../AIN-Parameters/EnvelopContent.ta.mjs";
import { IPReturnBlock, _decode_IPReturnBlock, _encode_IPReturnBlock } from "../AIN-Parameters/IPReturnBlock.ta.mjs";
// export { IPReturnBlock, _decode_IPReturnBlock, _encode_IPReturnBlock } from "../AIN-Parameters/IPReturnBlock.ta.mjs";
import { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
// export { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
import { AMASetHexABIndicator, _decode_AMASetHexABIndicator, _encode_AMASetHexABIndicator } from "../AIN-Parameters/AMASetHexABIndicator.ta.mjs";
// export { AMASetHexABIndicator, _decode_AMASetHexABIndicator, _encode_AMASetHexABIndicator } from "../AIN-Parameters/AMASetHexABIndicator.ta.mjs";
import { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
// export { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { SecurityEnvelope, _decode_SecurityEnvelope, _encode_SecurityEnvelope } from "../AIN-Parameters/SecurityEnvelope.ta.mjs";
// export { SecurityEnvelope, _decode_SecurityEnvelope, _encode_SecurityEnvelope } from "../AIN-Parameters/SecurityEnvelope.ta.mjs";
import { DestinationAddress, _decode_DestinationAddress, _encode_DestinationAddress } from "../AIN-Parameters/DestinationAddress.ta.mjs";
// export { DestinationAddress, _decode_DestinationAddress, _encode_DestinationAddress } from "../AIN-Parameters/DestinationAddress.ta.mjs";
import { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
// export { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
import { AMABillingFeature, _decode_AMABillingFeature, _encode_AMABillingFeature } from "../AIN-Parameters/AMABillingFeature.ta.mjs";
// export { AMABillingFeature, _decode_AMABillingFeature, _encode_AMABillingFeature } from "../AIN-Parameters/AMABillingFeature.ta.mjs";
import { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
// export { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
import { ApplicationIndicator, _decode_ApplicationIndicator, _encode_ApplicationIndicator } from "../AIN-Parameters/ApplicationIndicator.ta.mjs";
// export { ApplicationIndicator, _decode_ApplicationIndicator, _encode_ApplicationIndicator } from "../AIN-Parameters/ApplicationIndicator.ta.mjs";
import { ONoAnswerTimer, _decode_ONoAnswerTimer, _encode_ONoAnswerTimer } from "../AIN-Parameters/ONoAnswerTimer.ta.mjs";
// export { ONoAnswerTimer, _decode_ONoAnswerTimer, _encode_ONoAnswerTimer } from "../AIN-Parameters/ONoAnswerTimer.ta.mjs";
import { EDPRequest, _decode_EDPRequest, _encode_EDPRequest } from "../AIN-Parameters/EDPRequest.ta.mjs";
// export { EDPRequest, _decode_EDPRequest, _encode_EDPRequest } from "../AIN-Parameters/EDPRequest.ta.mjs";
import { EDPNotification, _decode_EDPNotification, _encode_EDPNotification } from "../AIN-Parameters/EDPNotification.ta.mjs";
// export { EDPNotification, _decode_EDPNotification, _encode_EDPNotification } from "../AIN-Parameters/EDPNotification.ta.mjs";
import { BusyType, _decode_BusyType, _encode_BusyType } from "../AIN-Parameters/BusyType.ta.mjs";
// export { BusyType, _decode_BusyType, _encode_BusyType } from "../AIN-Parameters/BusyType.ta.mjs";
import { AMABAFModules, _decode_AMABAFModules, _encode_AMABAFModules } from "../AIN-Parameters/AMABAFModules.ta.mjs";
// export { AMABAFModules, _decode_AMABAFModules, _encode_AMABAFModules } from "../AIN-Parameters/AMABAFModules.ta.mjs";
import { STRConnection, _decode_STRConnection, _encode_STRConnection } from "../AIN-Parameters/STRConnection.ta.mjs";
// export { STRConnection, _decode_STRConnection, _encode_STRConnection } from "../AIN-Parameters/STRConnection.ta.mjs";
import { ErrorCause, _decode_ErrorCause, _encode_ErrorCause } from "../AIN-Parameters/ErrorCause.ta.mjs";
// export { ErrorCause, _decode_ErrorCause, _encode_ErrorCause } from "../AIN-Parameters/ErrorCause.ta.mjs";
import { ResultCause, _decode_ResultCause, _encode_ResultCause } from "../AIN-Parameters/ResultCause.ta.mjs";
// export { ResultCause, _decode_ResultCause, _encode_ResultCause } from "../AIN-Parameters/ResultCause.ta.mjs";
import { CTRConnection, _decode_CTRConnection, _encode_CTRConnection } from "../AIN-Parameters/CTRConnection.ta.mjs";
// export { CTRConnection, _decode_CTRConnection, _encode_CTRConnection } from "../AIN-Parameters/CTRConnection.ta.mjs";
import { RTPReroutingNumber, _decode_RTPReroutingNumber, _encode_RTPReroutingNumber } from "../AIN-Parameters/RTPReroutingNumber.ta.mjs";
// export { RTPReroutingNumber, _decode_RTPReroutingNumber, _encode_RTPReroutingNumber } from "../AIN-Parameters/RTPReroutingNumber.ta.mjs";
import { RTPServiceIndicator, _decode_RTPServiceIndicator, _encode_RTPServiceIndicator } from "../AIN-Parameters/RTPServiceIndicator.ta.mjs";
// export { RTPServiceIndicator, _decode_RTPServiceIndicator, _encode_RTPServiceIndicator } from "../AIN-Parameters/RTPServiceIndicator.ta.mjs";
import { AdministrableObject, _decode_AdministrableObject, _encode_AdministrableObject } from "../AIN-Parameters/AdministrableObject.ta.mjs";
// export { AdministrableObject, _decode_AdministrableObject, _encode_AdministrableObject } from "../AIN-Parameters/AdministrableObject.ta.mjs";
import { EnvelopeEncodingAuthority, _decode_EnvelopeEncodingAuthority, _encode_EnvelopeEncodingAuthority } from "../AIN-Parameters/EnvelopeEncodingAuthority.ta.mjs";
// export { EnvelopeEncodingAuthority, _decode_EnvelopeEncodingAuthority, _encode_EnvelopeEncodingAuthority } from "../AIN-Parameters/EnvelopeEncodingAuthority.ta.mjs";
import { TNoAnswerTimer, _decode_TNoAnswerTimer, _encode_TNoAnswerTimer } from "../AIN-Parameters/TNoAnswerTimer.ta.mjs";
// export { TNoAnswerTimer, _decode_TNoAnswerTimer, _encode_TNoAnswerTimer } from "../AIN-Parameters/TNoAnswerTimer.ta.mjs";
import { EditListType, _enum_for_EditListType, EditListType_addListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, addListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EditListType_deleteListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EditListType, _encode_EditListType } from "../AIN-Parameters/EditListType.ta.mjs";
// export { EditListType, _enum_for_EditListType, EditListType_addListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, addListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EditListType_deleteListElement /* IMPORTED_LONG_ENUMERATION_ITEM */, deleteListElement /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EditListType, _encode_EditListType } from "../AIN-Parameters/EditListType.ta.mjs";
import { ACGGlobalOverride, _decode_ACGGlobalOverride, _encode_ACGGlobalOverride } from "../AIN-Parameters/ACGGlobalOverride.ta.mjs";
// export { ACGGlobalOverride, _decode_ACGGlobalOverride, _encode_ACGGlobalOverride } from "../AIN-Parameters/ACGGlobalOverride.ta.mjs";
import { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
// export { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
import { AMALineNumber, _decode_AMALineNumber, _encode_AMALineNumber } from "../AIN-Parameters/AMALineNumber.ta.mjs";
// export { AMALineNumber, _decode_AMALineNumber, _encode_AMALineNumber } from "../AIN-Parameters/AMALineNumber.ta.mjs";
import { AMADigitsDialedWC, _decode_AMADigitsDialedWC, _encode_AMADigitsDialedWC } from "../AIN-Parameters/AMADigitsDialedWC.ta.mjs";
// export { AMADigitsDialedWC, _decode_AMADigitsDialedWC, _encode_AMADigitsDialedWC } from "../AIN-Parameters/AMADigitsDialedWC.ta.mjs";
import { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
// export { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
import { CloseCause, _decode_CloseCause, _encode_CloseCause } from "../AIN-Parameters/CloseCause.ta.mjs";
// export { CloseCause, _decode_CloseCause, _encode_CloseCause } from "../AIN-Parameters/CloseCause.ta.mjs";
import { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
// export { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
import { FailureCauseData, _decode_FailureCauseData, _encode_FailureCauseData } from "../AIN-Parameters/FailureCauseData.ta.mjs";
// export { FailureCauseData, _decode_FailureCauseData, _encode_FailureCauseData } from "../AIN-Parameters/FailureCauseData.ta.mjs";
import { GenericAddress, _decode_GenericAddress, _encode_GenericAddress } from "../AIN-Parameters/GenericAddress.ta.mjs";
// export { GenericAddress, _decode_GenericAddress, _encode_GenericAddress } from "../AIN-Parameters/GenericAddress.ta.mjs";
import { SrhrGroupID, _decode_SrhrGroupID, _encode_SrhrGroupID } from "../AIN-Parameters/SrhrGroupID.ta.mjs";
// export { SrhrGroupID, _decode_SrhrGroupID, _encode_SrhrGroupID } from "../AIN-Parameters/SrhrGroupID.ta.mjs";
import { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
// export { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
import { NetworkSpecificFacilities, _decode_NetworkSpecificFacilities, _encode_NetworkSpecificFacilities } from "../AIN-Parameters/NetworkSpecificFacilities.ta.mjs";
// export { NetworkSpecificFacilities, _decode_NetworkSpecificFacilities, _encode_NetworkSpecificFacilities } from "../AIN-Parameters/NetworkSpecificFacilities.ta.mjs";
import { ForwardCallIndicator, _decode_ForwardCallIndicator, _encode_ForwardCallIndicator } from "../AIN-Parameters/ForwardCallIndicator.ta.mjs";
// export { ForwardCallIndicator, _decode_ForwardCallIndicator, _encode_ForwardCallIndicator } from "../AIN-Parameters/ForwardCallIndicator.ta.mjs";
import { AlternateDialingPlanInd, _decode_AlternateDialingPlanInd, _encode_AlternateDialingPlanInd } from "../AIN-Parameters/AlternateDialingPlanInd.ta.mjs";
// export { AlternateDialingPlanInd, _decode_AlternateDialingPlanInd, _encode_AlternateDialingPlanInd } from "../AIN-Parameters/AlternateDialingPlanInd.ta.mjs";
import { DisconnectCause, _decode_DisconnectCause, _encode_DisconnectCause } from "../AIN-Parameters/DisconnectCause.ta.mjs";
// export { DisconnectCause, _decode_DisconnectCause, _encode_DisconnectCause } from "../AIN-Parameters/DisconnectCause.ta.mjs";
import { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
// export { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
import { CongestionLevel, _decode_CongestionLevel, _encode_CongestionLevel } from "../AIN-Parameters/CongestionLevel.ta.mjs";
// export { CongestionLevel, _decode_CongestionLevel, _encode_CongestionLevel } from "../AIN-Parameters/CongestionLevel.ta.mjs";
import { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
// export { ControlEncountered, _decode_ControlEncountered, _encode_ControlEncountered } from "../AIN-Parameters/ControlEncountered.ta.mjs";
import { InfoProvided, _decode_InfoProvided, _encode_InfoProvided } from "../AIN-Parameters/InfoProvided.ta.mjs";
// export { InfoProvided, _decode_InfoProvided, _encode_InfoProvided } from "../AIN-Parameters/InfoProvided.ta.mjs";
import { ProvideInfo, _decode_ProvideInfo, _encode_ProvideInfo } from "../AIN-Parameters/ProvideInfo.ta.mjs";
// export { ProvideInfo, _decode_ProvideInfo, _encode_ProvideInfo } from "../AIN-Parameters/ProvideInfo.ta.mjs";
import { SignalingPointCode, _decode_SignalingPointCode, _encode_SignalingPointCode } from "../AIN-Parameters/SignalingPointCode.ta.mjs";
// export { SignalingPointCode, _decode_SignalingPointCode, _encode_SignalingPointCode } from "../AIN-Parameters/SignalingPointCode.ta.mjs";
import { SubsystemNumber, _decode_SubsystemNumber, _encode_SubsystemNumber } from "../AIN-Parameters/SubsystemNumber.ta.mjs";
// export { SubsystemNumber, _decode_SubsystemNumber, _encode_SubsystemNumber } from "../AIN-Parameters/SubsystemNumber.ta.mjs";
import { NotificationDuration, _decode_NotificationDuration, _encode_NotificationDuration } from "../AIN-Parameters/NotificationDuration.ta.mjs";
// export { NotificationDuration, _decode_NotificationDuration, _encode_NotificationDuration } from "../AIN-Parameters/NotificationDuration.ta.mjs";
import { WakeUpDuration, _decode_WakeUpDuration, _encode_WakeUpDuration } from "../AIN-Parameters/WakeUpDuration.ta.mjs";
// export { WakeUpDuration, _decode_WakeUpDuration, _encode_WakeUpDuration } from "../AIN-Parameters/WakeUpDuration.ta.mjs";
import { OSIIndicator, _decode_OSIIndicator, _encode_OSIIndicator } from "../AIN-Parameters/OSIIndicator.ta.mjs";
// export { OSIIndicator, _decode_OSIIndicator, _encode_OSIIndicator } from "../AIN-Parameters/OSIIndicator.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
// export { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
import { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
// export { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
import { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
// export { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
import { FeatureActivatorID, _decode_FeatureActivatorID, _encode_FeatureActivatorID } from "../AIN-Parameters/FeatureActivatorID.ta.mjs";
// export { FeatureActivatorID, _decode_FeatureActivatorID, _encode_FeatureActivatorID } from "../AIN-Parameters/FeatureActivatorID.ta.mjs";
import { CsID, _decode_CsID, _encode_CsID } from "../AIN-Parameters/CsID.ta.mjs";
// export { CsID, _decode_CsID, _encode_CsID } from "../AIN-Parameters/CsID.ta.mjs";
import { LampTreatment, _decode_LampTreatment, _encode_LampTreatment } from "../AIN-Parameters/LampTreatment.ta.mjs";
// export { LampTreatment, _decode_LampTreatment, _encode_LampTreatment } from "../AIN-Parameters/LampTreatment.ta.mjs";
import { TimeoutTimer, _decode_TimeoutTimer, _encode_TimeoutTimer } from "../AIN-Parameters/TimeoutTimer.ta.mjs";
// export { TimeoutTimer, _decode_TimeoutTimer, _encode_TimeoutTimer } from "../AIN-Parameters/TimeoutTimer.ta.mjs";
import { TransID, _decode_TransID, _encode_TransID } from "../AIN-Parameters/TransID.ta.mjs";
// export { TransID, _decode_TransID, _encode_TransID } from "../AIN-Parameters/TransID.ta.mjs";
import { ActResult, _decode_ActResult, _encode_ActResult } from "../AIN-Parameters/ActResult.ta.mjs";
// export { ActResult, _decode_ActResult, _encode_ActResult } from "../AIN-Parameters/ActResult.ta.mjs";
import { ExtendedRinging, _decode_ExtendedRinging, _encode_ExtendedRinging } from "../AIN-Parameters/ExtendedRinging.ta.mjs";
// export { ExtendedRinging, _decode_ExtendedRinging, _encode_ExtendedRinging } from "../AIN-Parameters/ExtendedRinging.ta.mjs";
import { JurisdictionInformation, _decode_JurisdictionInformation, _encode_JurisdictionInformation } from "../AIN-Parameters/JurisdictionInformation.ta.mjs";
// export { JurisdictionInformation, _decode_JurisdictionInformation, _encode_JurisdictionInformation } from "../AIN-Parameters/JurisdictionInformation.ta.mjs";
import { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";
// export { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";
import { GenericDigitsList, _decode_GenericDigitsList, _encode_GenericDigitsList } from "../AIN-Parameters/GenericDigitsList.ta.mjs";
// export { GenericDigitsList, _decode_GenericDigitsList, _encode_GenericDigitsList } from "../AIN-Parameters/GenericDigitsList.ta.mjs";
import { ApplyRestrictions, _decode_ApplyRestrictions, _encode_ApplyRestrictions } from "../AIN-Parameters/ApplyRestrictions.ta.mjs";
// export { ApplyRestrictions, _decode_ApplyRestrictions, _encode_ApplyRestrictions } from "../AIN-Parameters/ApplyRestrictions.ta.mjs";


/**
 * @summary Parms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Parms  ::=  CHOICE{
 *         accessCode                              AccessCode,
 *         aCGEncountered                          ACGEncountered,
 *         alternateBillingIndicator               AlternateBillingIndicator,
 *         alternateCarrier                        AlternateCarrier,
 *         alternateTrunkGroup                     AlternateTrunkGroup,
 *         aMAAlternateBillingNumber               AMAAlternateBillingNumber,
 *         aMABusinessCustomerID                   AMABusinessCustomerID,
 *         aMAslpID                                [10] IMPLICIT AMAslpID,
 *         amp1                                    Amp1,
 *         amp2                                    Amp2,
 *         answerIndicator                         AnswerIndicator,
 *         bearerCapability                        BearerCapability,
 *         busyCause                               BusyCause,
 *         calledPartyID                           CalledPartyID,
 *         calledPartyStationType                  CalledPartyStationType,
 *         callingGeodeticLocation                 CallingGeodeticLocation,
 *         callingPartyBGID                        CallingPartyBGID,
 *         callingPartyID                          CallingPartyID,
 *         callType                                CallType,
 *         chargeNumber                            ChargeNumber,
 *         chargePartyStationType                  ChargePartyStationType,
 *         clearCause                              ClearCause,
 *         collectedAddressInfo                    CollectedAddressInfo,
 *         collectedDigits                         CollectedDigits,
 *         controllingLegTreatment                 ControllingLegTreatment,
 *         disconnectFlag                          DisconnectFlag,
 *         displayText                             DisplayText,
 *         dTMFDigitsDetected                      DTMFDigitsDetected,
 *         facilityGID                             FacilityGID,
 *         facilityMemberID                        FacilityMemberID,
 *         failureCause                            FailureCause,
 *         genericName                             GenericName,
 *         lata                                    Lata,
 *         oDTMFDigitsString                       ODTMFDigitsString,
 *         oDTMFNumberofDigits                     ODTMFNumberOfDigits,
 *         originalCalledPartyID                   OriginalCalledPartyID,
 *         outpulseNumber                          OutpulseNumber,
 *         overflowBillingIndicator                OverflowBillingIndicator,
 *         passiveLegTreatment                     PassiveLegTreatment,
 *         partyID                                 PartyID,
 *         partyOnHold                             PartyOnHold,
 *         primaryBillingIndicator                 PrimaryBillingIndicator,
 *         carrier                                 Carrier,
 *         primaryTrunkGroup                       PrimaryTrunkGroup,
 *         redirectingPartyID                      RedirectingPartyID,
 *         redirectionInformation                  RedirectionInformation,
 *         resourceType                            ResourceType,
 *         secondAlternateBillingIndicator         SecondAlternateBillingIndicator,
 *         secondAlternateCarrier                  SecondAlternateCarrier,
 *         secondAlternateTrunkGroup               SecondAlternateTrunkGroup,
 *         spid                                    Spid,
 *         sSPResponseMessageTimerT1               SSPResponseMessageTimerT1,
 *         strParameterBlock                       StrParameterBlock,
 *         tcm                                     Tcm,
 *         tDTMFDigitString                        TDTMFDigitString,
 *         tDTMFNumberOfDigits                     TDTMFNumberOfDigits,
 *         timerUpdated                            TimerUpdated,
 *         triggerCriteriaType                     TriggerCriteriaType,
 *         triggerInformation                      TriggerInformation,
 *         userID                                  UserID,
 *         verticalServiceCode                     VerticalServiceCode,
 *         connectTime                             ConnectTime,
 *         controlCauseIndicator                   ControlCauseIndicator,
 *         echoData                                EchoData,
 *         facilityStatus                          FacilityStatus,
 *         gapDuration                             GapDuration,
 *         gapInterval                             GapInterval,
 *         globalTitleAddress                      GlobalTitleAddress,
 *         monitorTime                             MonitorTime,
 *         statusCause                             StatusCause,
 *         terminationIndicator                    TerminationIndicator,
 *         translationType                         TranslationType,
 *         triggerCriteriaFlag                     TriggerCriteriaFlag,
 *         tSTRCTimer                              TSTRCTimer,
 *         aMAMeasure                              AMAMeasure,
 *         aMAMeasurement                          AMAMeasurement,
 *         clearCauseData                          ClearCauseData,
 *         envelopContent                          EnvelopContent,
 *         iPReturnBlock                           IPReturnBlock,
 *         sap                                     Sap,
 *         aMASetHexABIndicator                    AMASetHexABIndicator,
 *         serviceContext                          ServiceContext,
 *         extensionParameter                      [84] IMPLICIT ExtensionParameter,
 *         securityEnvelope                        SecurityEnvelope,
 *         destinationAddress                      DestinationAddress,
 *         derviceProviderID                       ServiceProviderID,
 *         aMABillingFeature                       AMABillingFeature,
 *         aMASequenceNumber                       AMASequenceNumber,
 *         applicationIndicator                    ApplicationIndicator,
 *         oNoAnswerTimer                          ONoAnswerTimer,
 *         eDPRequest                              EDPRequest,
 *         eDPNotification                         EDPNotification,
 *         busyType BusyType,
 *         aMABAFModules AMABAFModules,
 *         sTRConnection STRConnection,
 *         errorCause ErrorCause,
 *         resultCause ResultCause,
 *         cTRConnection CTRConnection,
 *         rTPReroutingNumber RTPReroutingNumber,
 *         rTPServiceIndicator RTPServiceIndicator,
 *         administrableObject AdministrableObject,
 *         envelopeEncodingAuthority EnvelopeEncodingAuthority,
 *         tNoAnswerTimer TNoAnswerTimer,
 *         editListType EditListType,
 *         aCGGlobalOverride ACGGlobalOverride,
 *         notificationIndicator                  [111] IMPLICIT NotificationIndicator,
 *                             -- TRUE = Switch Notification Message
 *                             -- FALSE = Switch Request Message
 *         aMALineNumber AMALineNumber,
 *         aMADigitsDialedWC AMADigitsDialedWC,
 *         carrierUsage                                CarrierUsage,
 *         closeCause CloseCause,
 *         dPConverter DPConverter,
 *         failureCauseData FailureCauseData,
 *         genericAddress GenericAddress,
 *         srhrGroupID SrhrGroupID,
 *         genericAddressList GenericAddressList,
 *         networkSpecificFacilities NetworkSpecificFacilities,
 *         forwardCallIndicator ForwardCallIndicator,
 *         alternateDialingPlanInd AlternateDialingPlanInd,
 *         disconnectCause DisconnectCause,
 *         aMAServiceProviderID AMAServiceProviderID,
 *         congestionLevel CongestionLevel,
 *         controlEncountered ControlEncountered,
 *         infoProvided InfoProvided,
 *         provideInfo ProvideInfo,
 *         signalingPointCode SignalingPointCode,
 *         subsystemNumber SubsystemNumber,
 *         notificationDuration NotificationDuration,
 *         wakeUpDuration WakeUpDuration,
 *         oSIIndicator OSIIndicator,
 *         legID LegID,
 *         ccID CcID,
 *         bCMType BCMType,
 *         pointInCall PointInCall,
 *         featureActivatorID                          FeatureActivatorID,
 *         csID                                        CsID,
 *         lampTreatment                               LampTreatment,
 *         timeoutTimer                                TimeoutTimer,
 *         transID                                     TransID,
 *         actResult                                   ActResult,
 *         extendedRinging                             ExtendedRinging,
 *         jurisdictionInformation                     JurisdictionInformation,
 *         prefix                                      Prefix,
 *         genericDigitsList                           GenericDigitsList,
 *         applyRestrictions                           ApplyRestrictions
 *     }
 * ```
 */
export
type Parms =
    { accessCode: AccessCode } /* CHOICE_ALT_ROOT */
    | { aCGEncountered: ACGEncountered } /* CHOICE_ALT_ROOT */
    | { alternateBillingIndicator: AlternateBillingIndicator } /* CHOICE_ALT_ROOT */
    | { alternateCarrier: AlternateCarrier } /* CHOICE_ALT_ROOT */
    | { alternateTrunkGroup: AlternateTrunkGroup } /* CHOICE_ALT_ROOT */
    | { aMAAlternateBillingNumber: AMAAlternateBillingNumber } /* CHOICE_ALT_ROOT */
    | { aMABusinessCustomerID: AMABusinessCustomerID } /* CHOICE_ALT_ROOT */
    | { aMAslpID: AMAslpID } /* CHOICE_ALT_ROOT */
    | { amp1: Amp1 } /* CHOICE_ALT_ROOT */
    | { amp2: Amp2 } /* CHOICE_ALT_ROOT */
    | { answerIndicator: AnswerIndicator } /* CHOICE_ALT_ROOT */
    | { bearerCapability: BearerCapability } /* CHOICE_ALT_ROOT */
    | { busyCause: BusyCause } /* CHOICE_ALT_ROOT */
    | { calledPartyID: CalledPartyID } /* CHOICE_ALT_ROOT */
    | { calledPartyStationType: CalledPartyStationType } /* CHOICE_ALT_ROOT */
    | { callingGeodeticLocation: CallingGeodeticLocation } /* CHOICE_ALT_ROOT */
    | { callingPartyBGID: CallingPartyBGID } /* CHOICE_ALT_ROOT */
    | { callingPartyID: CallingPartyID } /* CHOICE_ALT_ROOT */
    | { callType: CallType } /* CHOICE_ALT_ROOT */
    | { chargeNumber: ChargeNumber } /* CHOICE_ALT_ROOT */
    | { chargePartyStationType: ChargePartyStationType } /* CHOICE_ALT_ROOT */
    | { clearCause: ClearCause } /* CHOICE_ALT_ROOT */
    | { collectedAddressInfo: CollectedAddressInfo } /* CHOICE_ALT_ROOT */
    | { collectedDigits: CollectedDigits } /* CHOICE_ALT_ROOT */
    | { controllingLegTreatment: ControllingLegTreatment } /* CHOICE_ALT_ROOT */
    | { disconnectFlag: DisconnectFlag } /* CHOICE_ALT_ROOT */
    | { displayText: DisplayText } /* CHOICE_ALT_ROOT */
    | { dTMFDigitsDetected: DTMFDigitsDetected } /* CHOICE_ALT_ROOT */
    | { facilityGID: FacilityGID } /* CHOICE_ALT_ROOT */
    | { facilityMemberID: FacilityMemberID } /* CHOICE_ALT_ROOT */
    | { failureCause: FailureCause } /* CHOICE_ALT_ROOT */
    | { genericName: GenericName } /* CHOICE_ALT_ROOT */
    | { lata: Lata } /* CHOICE_ALT_ROOT */
    | { oDTMFDigitsString: ODTMFDigitsString } /* CHOICE_ALT_ROOT */
    | { oDTMFNumberofDigits: ODTMFNumberOfDigits } /* CHOICE_ALT_ROOT */
    | { originalCalledPartyID: OriginalCalledPartyID } /* CHOICE_ALT_ROOT */
    | { outpulseNumber: OutpulseNumber } /* CHOICE_ALT_ROOT */
    | { overflowBillingIndicator: OverflowBillingIndicator } /* CHOICE_ALT_ROOT */
    | { passiveLegTreatment: PassiveLegTreatment } /* CHOICE_ALT_ROOT */
    | { partyID: PartyID } /* CHOICE_ALT_ROOT */
    | { partyOnHold: PartyOnHold } /* CHOICE_ALT_ROOT */
    | { primaryBillingIndicator: PrimaryBillingIndicator } /* CHOICE_ALT_ROOT */
    | { carrier: Carrier } /* CHOICE_ALT_ROOT */
    | { primaryTrunkGroup: PrimaryTrunkGroup } /* CHOICE_ALT_ROOT */
    | { redirectingPartyID: RedirectingPartyID } /* CHOICE_ALT_ROOT */
    | { redirectionInformation: RedirectionInformation } /* CHOICE_ALT_ROOT */
    | { resourceType: ResourceType } /* CHOICE_ALT_ROOT */
    | { secondAlternateBillingIndicator: SecondAlternateBillingIndicator } /* CHOICE_ALT_ROOT */
    | { secondAlternateCarrier: SecondAlternateCarrier } /* CHOICE_ALT_ROOT */
    | { secondAlternateTrunkGroup: SecondAlternateTrunkGroup } /* CHOICE_ALT_ROOT */
    | { spid: Spid } /* CHOICE_ALT_ROOT */
    | { sSPResponseMessageTimerT1: SSPResponseMessageTimerT1 } /* CHOICE_ALT_ROOT */
    | { strParameterBlock: StrParameterBlock } /* CHOICE_ALT_ROOT */
    | { tcm: Tcm } /* CHOICE_ALT_ROOT */
    | { tDTMFDigitString: TDTMFDigitString } /* CHOICE_ALT_ROOT */
    | { tDTMFNumberOfDigits: TDTMFNumberOfDigits } /* CHOICE_ALT_ROOT */
    | { timerUpdated: TimerUpdated } /* CHOICE_ALT_ROOT */
    | { triggerCriteriaType: TriggerCriteriaType } /* CHOICE_ALT_ROOT */
    | { triggerInformation: TriggerInformation } /* CHOICE_ALT_ROOT */
    | { userID: UserID } /* CHOICE_ALT_ROOT */
    | { verticalServiceCode: VerticalServiceCode } /* CHOICE_ALT_ROOT */
    | { connectTime: ConnectTime } /* CHOICE_ALT_ROOT */
    | { controlCauseIndicator: ControlCauseIndicator } /* CHOICE_ALT_ROOT */
    | { echoData: EchoData } /* CHOICE_ALT_ROOT */
    | { facilityStatus: FacilityStatus } /* CHOICE_ALT_ROOT */
    | { gapDuration: GapDuration } /* CHOICE_ALT_ROOT */
    | { gapInterval: GapInterval } /* CHOICE_ALT_ROOT */
    | { globalTitleAddress: GlobalTitleAddress } /* CHOICE_ALT_ROOT */
    | { monitorTime: MonitorTime } /* CHOICE_ALT_ROOT */
    | { statusCause: StatusCause } /* CHOICE_ALT_ROOT */
    | { terminationIndicator: TerminationIndicator } /* CHOICE_ALT_ROOT */
    | { translationType: TranslationType } /* CHOICE_ALT_ROOT */
    | { triggerCriteriaFlag: TriggerCriteriaFlag } /* CHOICE_ALT_ROOT */
    | { tSTRCTimer: TSTRCTimer } /* CHOICE_ALT_ROOT */
    | { aMAMeasure: AMAMeasure } /* CHOICE_ALT_ROOT */
    | { aMAMeasurement: AMAMeasurement } /* CHOICE_ALT_ROOT */
    | { clearCauseData: ClearCauseData } /* CHOICE_ALT_ROOT */
    | { envelopContent: EnvelopContent } /* CHOICE_ALT_ROOT */
    | { iPReturnBlock: IPReturnBlock } /* CHOICE_ALT_ROOT */
    | { sap: Sap } /* CHOICE_ALT_ROOT */
    | { aMASetHexABIndicator: AMASetHexABIndicator } /* CHOICE_ALT_ROOT */
    | { serviceContext: ServiceContext } /* CHOICE_ALT_ROOT */
    | { extensionParameter: ExtensionParameter } /* CHOICE_ALT_ROOT */
    | { securityEnvelope: SecurityEnvelope } /* CHOICE_ALT_ROOT */
    | { destinationAddress: DestinationAddress } /* CHOICE_ALT_ROOT */
    | { derviceProviderID: ServiceProviderID } /* CHOICE_ALT_ROOT */
    | { aMABillingFeature: AMABillingFeature } /* CHOICE_ALT_ROOT */
    | { aMASequenceNumber: AMASequenceNumber } /* CHOICE_ALT_ROOT */
    | { applicationIndicator: ApplicationIndicator } /* CHOICE_ALT_ROOT */
    | { oNoAnswerTimer: ONoAnswerTimer } /* CHOICE_ALT_ROOT */
    | { eDPRequest: EDPRequest } /* CHOICE_ALT_ROOT */
    | { eDPNotification: EDPNotification } /* CHOICE_ALT_ROOT */
    | { busyType: BusyType } /* CHOICE_ALT_ROOT */
    | { aMABAFModules: AMABAFModules } /* CHOICE_ALT_ROOT */
    | { sTRConnection: STRConnection } /* CHOICE_ALT_ROOT */
    | { errorCause: ErrorCause } /* CHOICE_ALT_ROOT */
    | { resultCause: ResultCause } /* CHOICE_ALT_ROOT */
    | { cTRConnection: CTRConnection } /* CHOICE_ALT_ROOT */
    | { rTPReroutingNumber: RTPReroutingNumber } /* CHOICE_ALT_ROOT */
    | { rTPServiceIndicator: RTPServiceIndicator } /* CHOICE_ALT_ROOT */
    | { administrableObject: AdministrableObject } /* CHOICE_ALT_ROOT */
    | { envelopeEncodingAuthority: EnvelopeEncodingAuthority } /* CHOICE_ALT_ROOT */
    | { tNoAnswerTimer: TNoAnswerTimer } /* CHOICE_ALT_ROOT */
    | { editListType: EditListType } /* CHOICE_ALT_ROOT */
    | { aCGGlobalOverride: ACGGlobalOverride } /* CHOICE_ALT_ROOT */
    | { notificationIndicator: NotificationIndicator } /* CHOICE_ALT_ROOT */
    | { aMALineNumber: AMALineNumber } /* CHOICE_ALT_ROOT */
    | { aMADigitsDialedWC: AMADigitsDialedWC } /* CHOICE_ALT_ROOT */
    | { carrierUsage: CarrierUsage } /* CHOICE_ALT_ROOT */
    | { closeCause: CloseCause } /* CHOICE_ALT_ROOT */
    | { dPConverter: DPConverter } /* CHOICE_ALT_ROOT */
    | { failureCauseData: FailureCauseData } /* CHOICE_ALT_ROOT */
    | { genericAddress: GenericAddress } /* CHOICE_ALT_ROOT */
    | { srhrGroupID: SrhrGroupID } /* CHOICE_ALT_ROOT */
    | { genericAddressList: GenericAddressList } /* CHOICE_ALT_ROOT */
    | { networkSpecificFacilities: NetworkSpecificFacilities } /* CHOICE_ALT_ROOT */
    | { forwardCallIndicator: ForwardCallIndicator } /* CHOICE_ALT_ROOT */
    | { alternateDialingPlanInd: AlternateDialingPlanInd } /* CHOICE_ALT_ROOT */
    | { disconnectCause: DisconnectCause } /* CHOICE_ALT_ROOT */
    | { aMAServiceProviderID: AMAServiceProviderID } /* CHOICE_ALT_ROOT */
    | { congestionLevel: CongestionLevel } /* CHOICE_ALT_ROOT */
    | { controlEncountered: ControlEncountered } /* CHOICE_ALT_ROOT */
    | { infoProvided: InfoProvided } /* CHOICE_ALT_ROOT */
    | { provideInfo: ProvideInfo } /* CHOICE_ALT_ROOT */
    | { signalingPointCode: SignalingPointCode } /* CHOICE_ALT_ROOT */
    | { subsystemNumber: SubsystemNumber } /* CHOICE_ALT_ROOT */
    | { notificationDuration: NotificationDuration } /* CHOICE_ALT_ROOT */
    | { wakeUpDuration: WakeUpDuration } /* CHOICE_ALT_ROOT */
    | { oSIIndicator: OSIIndicator } /* CHOICE_ALT_ROOT */
    | { legID: LegID } /* CHOICE_ALT_ROOT */
    | { ccID: CcID } /* CHOICE_ALT_ROOT */
    | { bCMType: BCMType } /* CHOICE_ALT_ROOT */
    | { pointInCall: PointInCall } /* CHOICE_ALT_ROOT */
    | { featureActivatorID: FeatureActivatorID } /* CHOICE_ALT_ROOT */
    | { csID: CsID } /* CHOICE_ALT_ROOT */
    | { lampTreatment: LampTreatment } /* CHOICE_ALT_ROOT */
    | { timeoutTimer: TimeoutTimer } /* CHOICE_ALT_ROOT */
    | { transID: TransID } /* CHOICE_ALT_ROOT */
    | { actResult: ActResult } /* CHOICE_ALT_ROOT */
    | { extendedRinging: ExtendedRinging } /* CHOICE_ALT_ROOT */
    | { jurisdictionInformation: JurisdictionInformation } /* CHOICE_ALT_ROOT */
    | { prefix: Prefix } /* CHOICE_ALT_ROOT */
    | { genericDigitsList: GenericDigitsList } /* CHOICE_ALT_ROOT */
    | { applyRestrictions: ApplyRestrictions } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Parms: $.ASN1Decoder<Parms> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Parms
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Parms (el: _Element): Parms {
    if (!_cached_decoder_for_Parms) { _cached_decoder_for_Parms = $._decode_inextensible_choice<Parms>({
    "CONTEXT 1": [ "accessCode", _decode_AccessCode ],
    "CONTEXT 2": [ "aCGEncountered", _decode_ACGEncountered ],
    "CONTEXT 3": [ "alternateBillingIndicator", _decode_AlternateBillingIndicator ],
    "CONTEXT 4": [ "alternateCarrier", _decode_AlternateCarrier ],
    "CONTEXT 5": [ "alternateTrunkGroup", _decode_AlternateTrunkGroup ],
    "CONTEXT 6": [ "aMAAlternateBillingNumber", _decode_AMAAlternateBillingNumber ],
    "CONTEXT 7": [ "aMABusinessCustomerID", _decode_AMABusinessCustomerID ],
    "CONTEXT 10": [ "aMAslpID", $._decode_implicit<AMAslpID>(() => _decode_AMAslpID) ],
    "CONTEXT 11": [ "amp1", _decode_Amp1 ],
    "CONTEXT 109": [ "amp2", _decode_Amp2 ],
    "CONTEXT 12": [ "answerIndicator", _decode_AnswerIndicator ],
    "CONTEXT 13": [ "bearerCapability", _decode_BearerCapability ],
    "CONTEXT 14": [ "busyCause", _decode_BusyCause ],
    "CONTEXT 15": [ "calledPartyID", _decode_CalledPartyID ],
    "CONTEXT 16": [ "calledPartyStationType", _decode_CalledPartyStationType ],
    "CONTEXT 162": [ "callingGeodeticLocation", _decode_CallingGeodeticLocation ],
    "CONTEXT 17": [ "callingPartyBGID", _decode_CallingPartyBGID ],
    "CONTEXT 18": [ "callingPartyID", _decode_CallingPartyID ],
    "CONTEXT 165": [ "callType", _decode_CallType ],
    "CONTEXT 19": [ "chargeNumber", _decode_ChargeNumber ],
    "CONTEXT 20": [ "chargePartyStationType", _decode_ChargePartyStationType ],
    "CONTEXT 21": [ "clearCause", _decode_ClearCause ],
    "CONTEXT 22": [ "collectedAddressInfo", _decode_CollectedAddressInfo ],
    "CONTEXT 23": [ "collectedDigits", _decode_CollectedDigits ],
    "CONTEXT 24": [ "controllingLegTreatment", _decode_ControllingLegTreatment ],
    "CONTEXT 25": [ "disconnectFlag", _decode_DisconnectFlag ],
    "CONTEXT 26": [ "displayText", _decode_DisplayText ],
    "CONTEXT 153": [ "dTMFDigitsDetected", _decode_DTMFDigitsDetected ],
    "CONTEXT 29": [ "facilityGID", _decode_FacilityGID ],
    "CONTEXT 31": [ "facilityMemberID", _decode_FacilityMemberID ],
    "CONTEXT 32": [ "failureCause", _decode_FailureCause ],
    "CONTEXT 33": [ "genericName", _decode_GenericName ],
    "CONTEXT 35": [ "lata", _decode_Lata ],
    "CONTEXT 154": [ "oDTMFDigitsString", _decode_ODTMFDigitsString ],
    "CONTEXT 155": [ "oDTMFNumberofDigits", _decode_ODTMFNumberOfDigits ],
    "CONTEXT 36": [ "originalCalledPartyID", _decode_OriginalCalledPartyID ],
    "CONTEXT 37": [ "outpulseNumber", _decode_OutpulseNumber ],
    "CONTEXT 38": [ "overflowBillingIndicator", _decode_OverflowBillingIndicator ],
    "CONTEXT 39": [ "passiveLegTreatment", _decode_PassiveLegTreatment ],
    "CONTEXT 159": [ "partyID", _decode_PartyID ],
    "CONTEXT 146": [ "partyOnHold", _decode_PartyOnHold ],
    "CONTEXT 40": [ "primaryBillingIndicator", _decode_PrimaryBillingIndicator ],
    "CONTEXT 41": [ "carrier", _decode_Carrier ],
    "CONTEXT 42": [ "primaryTrunkGroup", _decode_PrimaryTrunkGroup ],
    "CONTEXT 43": [ "redirectingPartyID", _decode_RedirectingPartyID ],
    "CONTEXT 44": [ "redirectionInformation", _decode_RedirectionInformation ],
    "CONTEXT 45": [ "resourceType", _decode_ResourceType ],
    "CONTEXT 46": [ "secondAlternateBillingIndicator", _decode_SecondAlternateBillingIndicator ],
    "CONTEXT 47": [ "secondAlternateCarrier", _decode_SecondAlternateCarrier ],
    "CONTEXT 48": [ "secondAlternateTrunkGroup", _decode_SecondAlternateTrunkGroup ],
    "CONTEXT 49": [ "spid", _decode_Spid ],
    "CONTEXT 166": [ "sSPResponseMessageTimerT1", _decode_SSPResponseMessageTimerT1 ],
    "CONTEXT 50": [ "strParameterBlock", _decode_StrParameterBlock ],
    "CONTEXT 51": [ "tcm", _decode_Tcm ],
    "CONTEXT 157": [ "tDTMFDigitString", _decode_TDTMFDigitString ],
    "CONTEXT 158": [ "tDTMFNumberOfDigits", _decode_TDTMFNumberOfDigits ],
    "CONTEXT 167": [ "timerUpdated", _decode_TimerUpdated ],
    "CONTEXT 52": [ "triggerCriteriaType", _decode_TriggerCriteriaType ],
    "UNIVERSAL 4": [ "triggerInformation", _decode_TriggerInformation ],
    "CONTEXT 53": [ "userID", _decode_UserID ],
    "CONTEXT 54": [ "verticalServiceCode", _decode_VerticalServiceCode ],
    "CONTEXT 58": [ "connectTime", _decode_ConnectTime ],
    "CONTEXT 59": [ "controlCauseIndicator", _decode_ControlCauseIndicator ],
    "CONTEXT 60": [ "echoData", _decode_EchoData ],
    "CONTEXT 61": [ "facilityStatus", _decode_FacilityStatus ],
    "CONTEXT 62": [ "gapDuration", _decode_GapDuration ],
    "CONTEXT 63": [ "gapInterval", _decode_GapInterval ],
    "CONTEXT 64": [ "gapInterval", _decode_GapInterval ],
    "CONTEXT 69": [ "globalTitleAddress", _decode_GlobalTitleAddress ],
    "CONTEXT 65": [ "monitorTime", _decode_MonitorTime ],
    "CONTEXT 66": [ "statusCause", _decode_StatusCause ],
    "CONTEXT 67": [ "terminationIndicator", _decode_TerminationIndicator ],
    "CONTEXT 70": [ "translationType", _decode_TranslationType ],
    "CONTEXT 68": [ "triggerCriteriaFlag", _decode_TriggerCriteriaFlag ],
    "CONTEXT 156": [ "tSTRCTimer", _decode_TSTRCTimer ],
    "CONTEXT 71": [ "aMAMeasure", _decode_AMAMeasure ],
    "CONTEXT 73": [ "aMAMeasurement", _decode_AMAMeasurement ],
    "CONTEXT 74": [ "clearCauseData", _decode_ClearCauseData ],
    "CONTEXT 75": [ "envelopContent", _decode_EnvelopContent ],
    "CONTEXT 78": [ "iPReturnBlock", _decode_IPReturnBlock ],
    "CONTEXT 81": [ "sap", _decode_Sap ],
    "CONTEXT 82": [ "aMASetHexABIndicator", _decode_AMASetHexABIndicator ],
    "CONTEXT 83": [ "serviceContext", _decode_ServiceContext ],
    "CONTEXT 84": [ "extensionParameter", $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter) ],
    "CONTEXT 85": [ "securityEnvelope", _decode_SecurityEnvelope ],
    "CONTEXT 86": [ "destinationAddress", _decode_DestinationAddress ],
    "CONTEXT 87": [ "derviceProviderID", _decode_ServiceProviderID ],
    "CONTEXT 106": [ "derviceProviderID", _decode_ServiceProviderID ],
    "CONTEXT 88": [ "aMABillingFeature", _decode_AMABillingFeature ],
    "CONTEXT 89": [ "aMASequenceNumber", _decode_AMASequenceNumber ],
    "CONTEXT 90": [ "applicationIndicator", _decode_ApplicationIndicator ],
    "CONTEXT 91": [ "oNoAnswerTimer", _decode_ONoAnswerTimer ],
    "CONTEXT 92": [ "eDPRequest", _decode_EDPRequest ],
    "CONTEXT 93": [ "eDPNotification", _decode_EDPNotification ],
    "CONTEXT 94": [ "busyType", _decode_BusyType ],
    "CONTEXT 95": [ "aMABAFModules", _decode_AMABAFModules ],
    "CONTEXT 96": [ "sTRConnection", _decode_STRConnection ],
    "CONTEXT 56": [ "errorCause", _decode_ErrorCause ],
    "CONTEXT 151": [ "resultCause", _decode_ResultCause ],
    "CONTEXT 141": [ "cTRConnection", _decode_CTRConnection ],
    "CONTEXT 143": [ "rTPReroutingNumber", _decode_RTPReroutingNumber ],
    "CONTEXT 144": [ "rTPServiceIndicator", _decode_RTPServiceIndicator ],
    "CONTEXT 102": [ "administrableObject", _decode_AdministrableObject ],
    "CONTEXT 103": [ "administrableObject", _decode_AdministrableObject ],
    "CONTEXT 104": [ "administrableObject", _decode_AdministrableObject ],
    "CONTEXT 97": [ "administrableObject", _decode_AdministrableObject ],
    "CONTEXT 118": [ "administrableObject", _decode_AdministrableObject ],
    "CONTEXT 98": [ "envelopeEncodingAuthority", _decode_EnvelopeEncodingAuthority ],
    "CONTEXT 99": [ "tNoAnswerTimer", _decode_TNoAnswerTimer ],
    "UNIVERSAL 10": [ "editListType", _decode_EditListType ],
    "CONTEXT 110": [ "aCGGlobalOverride", _decode_ACGGlobalOverride ],
    "CONTEXT 111": [ "notificationIndicator", $._decode_implicit<NotificationIndicator>(() => _decode_NotificationIndicator) ],
    "CONTEXT 9": [ "aMALineNumber", _decode_AMALineNumber ],
    "CONTEXT 8": [ "aMADigitsDialedWC", _decode_AMADigitsDialedWC ],
    "CONTEXT 79": [ "carrierUsage", _decode_CarrierUsage ],
    "CONTEXT 72": [ "closeCause", _decode_CloseCause ],
    "CONTEXT 76": [ "dPConverter", _decode_DPConverter ],
    "CONTEXT 112": [ "failureCauseData", _decode_FailureCauseData ],
    "CONTEXT 80": [ "genericAddress", _decode_GenericAddress ],
    "CONTEXT 77": [ "srhrGroupID", _decode_SrhrGroupID ],
    "CONTEXT 107": [ "genericAddressList", _decode_GenericAddressList ],
    "CONTEXT 108": [ "networkSpecificFacilities", _decode_NetworkSpecificFacilities ],
    "CONTEXT 113": [ "forwardCallIndicator", _decode_ForwardCallIndicator ],
    "CONTEXT 115": [ "alternateDialingPlanInd", _decode_AlternateDialingPlanInd ],
    "CONTEXT 116": [ "disconnectCause", _decode_DisconnectCause ],
    "CONTEXT 101": [ "aMAServiceProviderID", _decode_AMAServiceProviderID ],
    "CONTEXT 117": [ "congestionLevel", _decode_CongestionLevel ],
    "CONTEXT 127": [ "controlEncountered", _decode_ControlEncountered ],
    "CONTEXT 100": [ "infoProvided", _decode_InfoProvided ],
    "CONTEXT 114": [ "provideInfo", _decode_ProvideInfo ],
    "CONTEXT 142": [ "signalingPointCode", _decode_SignalingPointCode ],
    "CONTEXT 130": [ "subsystemNumber", _decode_SubsystemNumber ],
    "CONTEXT 128": [ "notificationDuration", _decode_NotificationDuration ],
    "CONTEXT 131": [ "wakeUpDuration", _decode_WakeUpDuration ],
    "CONTEXT 129": [ "oSIIndicator", _decode_OSIIndicator ],
    "CONTEXT 132": [ "legID", _decode_LegID ],
    "CONTEXT 133": [ "ccID", _decode_CcID ],
    "CONTEXT 134": [ "bCMType", _decode_BCMType ],
    "CONTEXT 135": [ "pointInCall", _decode_PointInCall ],
    "CONTEXT 136": [ "featureActivatorID", _decode_FeatureActivatorID ],
    "CONTEXT 137": [ "csID", _decode_CsID ],
    "CONTEXT 138": [ "lampTreatment", _decode_LampTreatment ],
    "CONTEXT 139": [ "timeoutTimer", _decode_TimeoutTimer ],
    "CONTEXT 163": [ "transID", _decode_TransID ],
    "CONTEXT 164": [ "actResult", _decode_ActResult ],
    "CONTEXT 146": [ "extendedRinging", _decode_ExtendedRinging ],
    "CONTEXT 147": [ "jurisdictionInformation", _decode_JurisdictionInformation ],
    "CONTEXT 148": [ "prefix", _decode_Prefix ],
    "CONTEXT 150": [ "genericDigitsList", _decode_GenericDigitsList ],
    "CONTEXT 152": [ "applyRestrictions", _decode_ApplyRestrictions ]
}); }
    return _cached_decoder_for_Parms(el);
}

let _cached_encoder_for_Parms: $.ASN1Encoder<Parms> | null = null;

/**
 * @summary Encodes a(n) Parms into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parms, encoded as an ASN.1 Element.
 */
export
function _encode_Parms (value: Parms, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Parms) { _cached_encoder_for_Parms = $._encode_choice<Parms>({
    "accessCode": _encode_AccessCode,
    "aCGEncountered": _encode_ACGEncountered,
    "alternateBillingIndicator": _encode_AlternateBillingIndicator,
    "alternateCarrier": _encode_AlternateCarrier,
    "alternateTrunkGroup": _encode_AlternateTrunkGroup,
    "aMAAlternateBillingNumber": _encode_AMAAlternateBillingNumber,
    "aMABusinessCustomerID": _encode_AMABusinessCustomerID,
    "aMAslpID": $._encode_implicit(_TagClass.context, 10, () => _encode_AMAslpID, $.BER),
    "amp1": _encode_Amp1,
    "amp2": _encode_Amp2,
    "answerIndicator": _encode_AnswerIndicator,
    "bearerCapability": _encode_BearerCapability,
    "busyCause": _encode_BusyCause,
    "calledPartyID": _encode_CalledPartyID,
    "calledPartyStationType": _encode_CalledPartyStationType,
    "callingGeodeticLocation": _encode_CallingGeodeticLocation,
    "callingPartyBGID": _encode_CallingPartyBGID,
    "callingPartyID": _encode_CallingPartyID,
    "callType": _encode_CallType,
    "chargeNumber": _encode_ChargeNumber,
    "chargePartyStationType": _encode_ChargePartyStationType,
    "clearCause": _encode_ClearCause,
    "collectedAddressInfo": _encode_CollectedAddressInfo,
    "collectedDigits": _encode_CollectedDigits,
    "controllingLegTreatment": _encode_ControllingLegTreatment,
    "disconnectFlag": _encode_DisconnectFlag,
    "displayText": _encode_DisplayText,
    "dTMFDigitsDetected": _encode_DTMFDigitsDetected,
    "facilityGID": _encode_FacilityGID,
    "facilityMemberID": _encode_FacilityMemberID,
    "failureCause": _encode_FailureCause,
    "genericName": _encode_GenericName,
    "lata": _encode_Lata,
    "oDTMFDigitsString": _encode_ODTMFDigitsString,
    "oDTMFNumberofDigits": _encode_ODTMFNumberOfDigits,
    "originalCalledPartyID": _encode_OriginalCalledPartyID,
    "outpulseNumber": _encode_OutpulseNumber,
    "overflowBillingIndicator": _encode_OverflowBillingIndicator,
    "passiveLegTreatment": _encode_PassiveLegTreatment,
    "partyID": _encode_PartyID,
    "partyOnHold": _encode_PartyOnHold,
    "primaryBillingIndicator": _encode_PrimaryBillingIndicator,
    "carrier": _encode_Carrier,
    "primaryTrunkGroup": _encode_PrimaryTrunkGroup,
    "redirectingPartyID": _encode_RedirectingPartyID,
    "redirectionInformation": _encode_RedirectionInformation,
    "resourceType": _encode_ResourceType,
    "secondAlternateBillingIndicator": _encode_SecondAlternateBillingIndicator,
    "secondAlternateCarrier": _encode_SecondAlternateCarrier,
    "secondAlternateTrunkGroup": _encode_SecondAlternateTrunkGroup,
    "spid": _encode_Spid,
    "sSPResponseMessageTimerT1": _encode_SSPResponseMessageTimerT1,
    "strParameterBlock": _encode_StrParameterBlock,
    "tcm": _encode_Tcm,
    "tDTMFDigitString": _encode_TDTMFDigitString,
    "tDTMFNumberOfDigits": _encode_TDTMFNumberOfDigits,
    "timerUpdated": _encode_TimerUpdated,
    "triggerCriteriaType": _encode_TriggerCriteriaType,
    "triggerInformation": _encode_TriggerInformation,
    "userID": _encode_UserID,
    "verticalServiceCode": _encode_VerticalServiceCode,
    "connectTime": _encode_ConnectTime,
    "controlCauseIndicator": _encode_ControlCauseIndicator,
    "echoData": _encode_EchoData,
    "facilityStatus": _encode_FacilityStatus,
    "gapDuration": _encode_GapDuration,
    "gapInterval": _encode_GapInterval,
    "globalTitleAddress": _encode_GlobalTitleAddress,
    "monitorTime": _encode_MonitorTime,
    "statusCause": _encode_StatusCause,
    "terminationIndicator": _encode_TerminationIndicator,
    "translationType": _encode_TranslationType,
    "triggerCriteriaFlag": _encode_TriggerCriteriaFlag,
    "tSTRCTimer": _encode_TSTRCTimer,
    "aMAMeasure": _encode_AMAMeasure,
    "aMAMeasurement": _encode_AMAMeasurement,
    "clearCauseData": _encode_ClearCauseData,
    "envelopContent": _encode_EnvelopContent,
    "iPReturnBlock": _encode_IPReturnBlock,
    "sap": _encode_Sap,
    "aMASetHexABIndicator": _encode_AMASetHexABIndicator,
    "serviceContext": _encode_ServiceContext,
    "extensionParameter": $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER),
    "securityEnvelope": _encode_SecurityEnvelope,
    "destinationAddress": _encode_DestinationAddress,
    "derviceProviderID": _encode_ServiceProviderID,
    "aMABillingFeature": _encode_AMABillingFeature,
    "aMASequenceNumber": _encode_AMASequenceNumber,
    "applicationIndicator": _encode_ApplicationIndicator,
    "oNoAnswerTimer": _encode_ONoAnswerTimer,
    "eDPRequest": _encode_EDPRequest,
    "eDPNotification": _encode_EDPNotification,
    "busyType": _encode_BusyType,
    "aMABAFModules": _encode_AMABAFModules,
    "sTRConnection": _encode_STRConnection,
    "errorCause": _encode_ErrorCause,
    "resultCause": _encode_ResultCause,
    "cTRConnection": _encode_CTRConnection,
    "rTPReroutingNumber": _encode_RTPReroutingNumber,
    "rTPServiceIndicator": _encode_RTPServiceIndicator,
    "administrableObject": _encode_AdministrableObject,
    "envelopeEncodingAuthority": _encode_EnvelopeEncodingAuthority,
    "tNoAnswerTimer": _encode_TNoAnswerTimer,
    "editListType": _encode_EditListType,
    "aCGGlobalOverride": _encode_ACGGlobalOverride,
    "notificationIndicator": $._encode_implicit(_TagClass.context, 111, () => _encode_NotificationIndicator, $.BER),
    "aMALineNumber": _encode_AMALineNumber,
    "aMADigitsDialedWC": _encode_AMADigitsDialedWC,
    "carrierUsage": _encode_CarrierUsage,
    "closeCause": _encode_CloseCause,
    "dPConverter": _encode_DPConverter,
    "failureCauseData": _encode_FailureCauseData,
    "genericAddress": _encode_GenericAddress,
    "srhrGroupID": _encode_SrhrGroupID,
    "genericAddressList": _encode_GenericAddressList,
    "networkSpecificFacilities": _encode_NetworkSpecificFacilities,
    "forwardCallIndicator": _encode_ForwardCallIndicator,
    "alternateDialingPlanInd": _encode_AlternateDialingPlanInd,
    "disconnectCause": _encode_DisconnectCause,
    "aMAServiceProviderID": _encode_AMAServiceProviderID,
    "congestionLevel": _encode_CongestionLevel,
    "controlEncountered": _encode_ControlEncountered,
    "infoProvided": _encode_InfoProvided,
    "provideInfo": _encode_ProvideInfo,
    "signalingPointCode": _encode_SignalingPointCode,
    "subsystemNumber": _encode_SubsystemNumber,
    "notificationDuration": _encode_NotificationDuration,
    "wakeUpDuration": _encode_WakeUpDuration,
    "oSIIndicator": _encode_OSIIndicator,
    "legID": _encode_LegID,
    "ccID": _encode_CcID,
    "bCMType": _encode_BCMType,
    "pointInCall": _encode_PointInCall,
    "featureActivatorID": _encode_FeatureActivatorID,
    "csID": _encode_CsID,
    "lampTreatment": _encode_LampTreatment,
    "timeoutTimer": _encode_TimeoutTimer,
    "transID": _encode_TransID,
    "actResult": _encode_ActResult,
    "extendedRinging": _encode_ExtendedRinging,
    "jurisdictionInformation": _encode_JurisdictionInformation,
    "prefix": _encode_Prefix,
    "genericDigitsList": _encode_GenericDigitsList,
    "applyRestrictions": _encode_ApplyRestrictions,
}, $.BER); }
    return _cached_encoder_for_Parms(value, elGetter);
}


/* eslint-enable */

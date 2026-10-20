/**
 * @description
 *
 * Assignments whose ASN.1 is identical in more than one charging
 * data-record module. Each original module re-exports the symbols
 * it defines.
 */
export * from "./APNRateControlParameters-rateControlTimeUnit.ta.mjs";
export * from "./AccessCorrelationID.ta.mjs";
export * from "./AoCCostInformation.ta.mjs";
export {
    type CauseForRecClosing,
    CauseForRecClosing_normalRelease,
    CauseForRecClosing_abnormalRelease,
    CauseForRecClosing_cAMELInitCallRelease,
    CauseForRecClosing_volumeLimit,
    volumeLimit,
    CauseForRecClosing_timeLimit,
    timeLimit,
    CauseForRecClosing_servingNodeChange,
    servingNodeChange,
    CauseForRecClosing_maxChangeCond,
    maxChangeCond,
    CauseForRecClosing_managementIntervention,
    managementIntervention,
    CauseForRecClosing_intraSGSNIntersystemChange,
    intraSGSNIntersystemChange,
    CauseForRecClosing_rATChange,
    rATChange,
    CauseForRecClosing_mSTimeZoneChange,
    mSTimeZoneChange,
    CauseForRecClosing_sGSNPLMNIDChange,
    sGSNPLMNIDChange,
    CauseForRecClosing_sGWChange,
    sGWChange,
    CauseForRecClosing_aPNAMBRChange,
    aPNAMBRChange,
    CauseForRecClosing_mOExceptionDataCounterReceipt,
    mOExceptionDataCounterReceipt,
    CauseForRecClosing_unauthorizedRequestingNetwork,
    CauseForRecClosing_unauthorizedLCSClient,
    CauseForRecClosing_positionMethodFailure,
    CauseForRecClosing_unknownOrUnreachableLCSClient,
    CauseForRecClosing_listofDownstreamNodeChange,
    listofDownstreamNodeChange,
    _decode_CauseForRecClosing,
    _encode_CauseForRecClosing,
} from "./CauseForRecClosing.ta.mjs";
export {
    type CauseForTerm,
    CauseForTerm_normalRelease,
    CauseForTerm_partialRecord,
    partialRecord,
    CauseForTerm_partialRecordCallReestablishment,
    partialRecordCallReestablishment,
    CauseForTerm_unsuccessfulCallAttempt,
    unsuccessfulCallAttempt,
    CauseForTerm_abnormalRelease,
    CauseForTerm_cAMELInitCallRelease,
    CauseForTerm_unauthorizedRequestingNetwork,
    CauseForTerm_unauthorizedLCSClient,
    CauseForTerm_positionMethodFailure,
    CauseForTerm_unknownOrUnreachableLCSClient,
    _decode_CauseForTerm,
    _encode_CauseForTerm,
} from "./CauseForTerm.ta.mjs";
export * from "./ChChSelectionMode.ta.mjs";
export * from "./ChangeCondition.ta.mjs";
export * from "./DMI-EXTENSION.oca.mjs";
export * from "./DataVolume.ta.mjs";
export * from "./Diagnostics.ta.mjs";
export * from "./EnhancedDiagnostics.ta.mjs";
export * from "./ExtensionContainer.ta.mjs";
export * from "./ExtensionSet.osa.mjs";
export * from "./FreeFormatData.ta.mjs";
export * from "./GSNAddress.ta.mjs";
export * from "./IPAddress.ta.mjs";
export * from "./IPBinV6AddressWithOrWithoutPrefixLength.ta.mjs";
export * from "./IPBinV6AddressWithPrefixLength.ta.mjs";
export * from "./IPBinaryAddress.ta.mjs";
export * from "./IPTextRepresentedAddress.ta.mjs";
export {
    _enum_for_Incomplete_CDR_Indication_aCRInterimLost,
    type Incomplete_CDR_Indication_aCRInterimLost,
    Incomplete_CDR_Indication_aCRInterimLost_no,
    no,
    Incomplete_CDR_Indication_aCRInterimLost_yes,
    yes,
    Incomplete_CDR_Indication_aCRInterimLost_unknown,
    _decode_Incomplete_CDR_Indication_aCRInterimLost,
    _encode_Incomplete_CDR_Indication_aCRInterimLost,
} from "./Incomplete-CDR-Indication-aCRInterimLost.ta.mjs";
export * from "./Incomplete-CDR-Indication.ta.mjs";
export * from "./InterOperatorIdentifiers.ta.mjs";
export * from "./InvolvedParty.ta.mjs";
export * from "./LCSClientExternalID.ta.mjs";
export * from "./LCSClientIdentity-lcsClientInternalID.ta.mjs";
export * from "./LCSClientIdentity.ta.mjs";
export * from "./LCSClientType.ta.mjs";
export * from "./List-Of-Message-Bodies.ta.mjs";
export * from "./LocationAreaAndCell.ta.mjs";
export * from "./LocationType-deferredLocationEventType.ta.mjs";
export * from "./LocationType-locationEstimateType.ta.mjs";
export * from "./LocationType.ta.mjs";
export * from "./MAP-EXTENSION.oca.mjs";
export * from "./MBMSInformation-cNIPMulticastDistribution.ta.mjs";
export * from "./MBMSInformation-mBMS2G3GIndicator.ta.mjs";
export * from "./MBMSInformation-mBMSServiceType.ta.mjs";
export * from "./MBMSInformation-mBMSUserServiceType.ta.mjs";
export * from "./ManagementExtension.ta.mjs";
export * from "./ManagementExtensionSet.osa.mjs";
export * from "./MessageClass.ta.mjs";
export * from "./NodeAddress.ta.mjs";
export * from "./PDPAddress.ta.mjs";
export * from "./Pcs-Extensions.ta.mjs";
export * from "./PositionMethodFailure-Diagnostic.ta.mjs";
export * from "./PresenceReportingAreaInfo-presenceReportingAreaNode.ta.mjs";
export * from "./PriorityType.ta.mjs";
export * from "./PrivateExtension.ta.mjs";
export * from "./RecordType.ta.mjs";
export * from "./SCSASAddress.ta.mjs";
export * from "./SDP-Media-Components.ta.mjs";
export * from "./SDP-Type.ta.mjs";
export * from "./SMAddressDomain.ta.mjs";
export * from "./SMAddressType.ta.mjs";
export * from "./SMSResult.ta.mjs";
export * from "./ServiceSpecificInfo.ta.mjs";
export * from "./ServingPLMNRateControl.ta.mjs";
export * from "./SubscriberEquipmentNumber-subscriberEquipmentNumberType.ta.mjs";
export * from "./SubscriberEquipmentNumber.ta.mjs";
export * from "./SubscriptionID-subscriptionIDType.ta.mjs";
export * from "./SubscriptionID.ta.mjs";
export {
    _enum_for_SystemType,
    type SystemType,
    SystemType_unknown,
    SystemType_iuUTRAN,
    iuUTRAN,
    SystemType_gERAN,
    gERAN,
    _decode_SystemType,
    _encode_SystemType,
} from "./SystemType.ta.mjs";
export * from "./ThreeGPPPSDataOffStatus.ta.mjs";
export * from "./UnauthorizedLCSClient-Diagnostic.ta.mjs";

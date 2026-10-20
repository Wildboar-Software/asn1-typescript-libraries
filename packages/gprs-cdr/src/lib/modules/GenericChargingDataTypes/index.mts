/**
 * @description
 *
 * ASN.1 module `GenericChargingDataTypes`.
 *
 * Identical assignments that also appear in other charging modules
 * are re-exported from `shared`.
 */
export * from "./BCDDirectoryNumber.ta.mjs";
export * from "./CNIPMulticastDistribution.ta.mjs";
export * from "./CallDuration.ta.mjs";
export * from "./CalledNumber.ta.mjs";
export * from "./CallingNumber.ta.mjs";
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
export * from "./CellId.ta.mjs";
export * from "./ChargeIndicator.ta.mjs";
export * from "./ChargingID.ta.mjs";
export * from "./CivicAddressInformation.ta.mjs";
export * from "./DMI-EXTENSION.oca.mjs";
export * from "./DataVolumeOctets.ta.mjs";
export * from "./Diagnostics.ta.mjs";
export * from "./DiameterIdentity.ta.mjs";
export * from "./DynamicAddressFlag.ta.mjs";
export * from "./EnhancedDiagnostics.ta.mjs";
export * from "./ExtensionSet.osa.mjs";
export * from "./GSNAddress.ta.mjs";
export * from "./IPAddress.ta.mjs";
export * from "./IPBinV4Address.ta.mjs";
export * from "./IPBinV6Address.ta.mjs";
export * from "./IPBinV6AddressWithOrWithoutPrefixLength.ta.mjs";
export * from "./IPBinV6AddressWithPrefixLength.ta.mjs";
export * from "./IPBinaryAddress.ta.mjs";
export * from "./IPTextRepresentedAddress.ta.mjs";
export * from "./InvolvedParty.ta.mjs";
export * from "./LCSCause.ta.mjs";
export * from "./LCSClientIdentity-lcsClientExternalID-extensionContainer-pcs-Extensions.ta.mjs";
export * from "./LCSClientIdentity-lcsClientExternalID-extensionContainer-privateExtensionList-Item.ta.mjs";
export * from "./LCSClientIdentity-lcsClientExternalID-extensionContainer.ta.mjs";
export * from "./LCSClientIdentity-lcsClientExternalID.ta.mjs";
export * from "./LCSClientIdentity-lcsClientInternalID.ta.mjs";
export * from "./LCSClientIdentity.ta.mjs";
export * from "./LCSQoSInfo.ta.mjs";
export * from "./LevelOfCAMELService.ta.mjs";
export * from "./LocalSequenceNumber.ta.mjs";
export * from "./LocationAreaAndCell.ta.mjs";
export * from "./LocationAreaCode.ta.mjs";
export * from "./MAP-EXTENSION.oca.mjs";
export * from "./MBMS2G3GIndicator.ta.mjs";
export * from "./MBMSInformation.ta.mjs";
export * from "./MBMSServiceArea.ta.mjs";
export * from "./MBMSServiceType.ta.mjs";
export * from "./MBMSSessionIdentity.ta.mjs";
export * from "./MBMSTime.ta.mjs";
export * from "./MBMSUserServiceType.ta.mjs";
export * from "./MCC-MNC.ta.mjs";
export * from "./MSCAddress.ta.mjs";
export * from "./MSISDN.ta.mjs";
export * from "./MSTimeZone.ta.mjs";
export * from "./ManagementExtension.ta.mjs";
export * from "./ManagementExtensionSet.osa.mjs";
export * from "./ManagementExtensions.ta.mjs";
export * from "./MessageClass.ta.mjs";
export * from "./MessageReference.ta.mjs";
export * from "./MscNo.ta.mjs";
export * from "./NodeAddress.ta.mjs";
export * from "./NodeID.ta.mjs";
export * from "./PDPAddress.ta.mjs";
export * from "./PDPAddressPrefixLength.ta.mjs";
export * from "./PLMN-Id.ta.mjs";
export * from "./PositionMethodFailure-Diagnostic.ta.mjs";
export * from "./PositioningData.ta.mjs";
export * from "./PriorityType.ta.mjs";
export * from "./RANNASCause.ta.mjs";
export * from "./RATType.ta.mjs";
export * from "./RecordType.ta.mjs";
export * from "./RecordingEntity.ta.mjs";
export * from "./RequiredMBMSBearerCapabilities.ta.mjs";
export * from "./RoutingAreaCode.ta.mjs";
export * from "./SCSASAddress.ta.mjs";
export * from "./SMSResult.ta.mjs";
export * from "./ServiceContextID.ta.mjs";
export * from "./ServiceSpecificInfo.ta.mjs";
export * from "./Session-Id.ta.mjs";
export * from "./SmsTpDestinationNumber.ta.mjs";
export * from "./SubscriberEquipmentNumber.ta.mjs";
export * from "./SubscriberEquipmentType.ta.mjs";
export * from "./SubscriptionID.ta.mjs";
export * from "./SubscriptionIDType.ta.mjs";
export * from "./SystemType.ta.mjs";
export * from "./TMGI.ta.mjs";
export * from "./ThreeGPPPSDataOffStatus.ta.mjs";
export * from "./TimeStamp.ta.mjs";
export * from "./UnauthorizedLCSClient-Diagnostic.ta.mjs";

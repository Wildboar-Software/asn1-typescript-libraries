/**
 * @description
 *
 * ASN.1 module `IN-CS2-datatypes`.
 */
// Colliding short named bits, integers, and enumerations are omitted.
// Use the long form (`TypeName_variant`).
export * from "./AChBillingChargingCharacteristics.ta.mjs";
export * from "./AccessCode.ta.mjs";
export * from "./AccountNumber.ta.mjs";
export {
    _enum_for_ActionIndicator,
    ActionIndicator,
    ActionIndicator_activate,
    activate,
    ActionIndicator_deactivate,
    deactivate,
    ActionIndicator_retrieve,
    _decode_ActionIndicator,
    _encode_ActionIndicator,
} from "./ActionIndicator.ta.mjs";
export * from "./ActionPerformed.ta.mjs";
export {
    type ActivableServices,
    ActivableServices_callingLineIdentificationPresentation,
    ActivableServices_callingLineIdentificationRestriction,
    ActivableServices_connectedLineIdentificationPresentation,
    ActivableServices_connectedLineIdentificationRestriction,
    ActivableServices_callForwardingOnNoReply,
    ActivableServices_callForwardingUnconditional,
    ActivableServices_callForwardingOnBusy,
    ActivableServices_callForwardingOnNotReachable,
    ActivableServices_reverseCharging,
    ActivableServices_adviceOfChargeOnStart,
    ActivableServices_adviceOfChargeAtEnd,
    ActivableServices_adviceOfChargeDuringCall,
    ActivableServices_timeDependentRouting,
    ActivableServices_callingPartingDependentRouting,
    ActivableServices_outgoingCallBarring,
    ActivableServices_incomingCallBarring,
    _decode_ActivableServices,
    _encode_ActivableServices,
} from "./ActivableServices.ta.mjs";
export * from "./AdditionalCallingPartyNumber.ta.mjs";
export * from "./AlertingPattern.ta.mjs";
export * from "./ApplicationTimer.ta.mjs";
export * from "./AssistingSSPIPRoutingAddress.ta.mjs";
export * from "./BCSMEvent.ta.mjs";
export * from "./BCUSMEvent.ta.mjs";
export * from "./BackwardGVNS.ta.mjs";
export * from "./BackwardServiceInteractionInd.ta.mjs";
export * from "./BearerCapabilities.ta.mjs";
export * from "./BearerCapability.ta.mjs";
export * from "./BothwayThroughConnectionInd.ta.mjs";
export * from "./CGEncountered.ta.mjs";
export * from "./CSAID.ta.mjs";
export * from "./CallConditions.ta.mjs";
export * from "./CallIdentifier.ta.mjs";
export {
    _enum_for_CallProcessingOperationCorrelationID,
    CallProcessingOperationCorrelationID,
    CallProcessingOperationCorrelationID_aLERTing,
    aLERTing,
    CallProcessingOperationCorrelationID_sETUP,
    sETUP,
    CallProcessingOperationCorrelationID_cONNect,
    cONNect,
    CallProcessingOperationCorrelationID_dISConnect,
    dISConnect,
    CallProcessingOperationCorrelationID_rELease,
    CallProcessingOperationCorrelationID_rELeaseCOMPlete,
    CallProcessingOperationCorrelationID_fACility,
    _decode_CallProcessingOperationCorrelationID,
    _encode_CallProcessingOperationCorrelationID,
} from "./CallProcessingOperationCorrelationID.ta.mjs";
export * from "./CallRecord.ta.mjs";
export * from "./CallResult.ta.mjs";
export * from "./CallSegmentID.ta.mjs";
export * from "./CallUnrelatedDpSpecificCommonParameters.ta.mjs";
export * from "./CalledPartyBusinessGroupID.ta.mjs";
export * from "./CalledPartyNumber.ta.mjs";
export * from "./CalledPartySubaddress.ta.mjs";
export * from "./CallingPartyBusinessGroupID.ta.mjs";
export * from "./CallingPartyNumber.ta.mjs";
export * from "./CallingPartySubaddress.ta.mjs";
export * from "./CallingPartysCategory.ta.mjs";
export * from "./Carrier.ta.mjs";
export * from "./Cause.ta.mjs";
export * from "./CauseValue.ta.mjs";
export * from "./ChargeNumber.ta.mjs";
export * from "./ChargingEvent.ta.mjs";
export * from "./ChargingParameters.ta.mjs";
export * from "./CollectedDigits.ta.mjs";
export * from "./CollectedInfo.ta.mjs";
export * from "./Component.ta.mjs";
export * from "./ComponentCorrelationID.ta.mjs";
export {
    _enum_for_ComponentType,
    ComponentType,
    ComponentType_any_,
    ComponentType_invoke,
    invoke,
    ComponentType_rResult,
    rResult,
    ComponentType_rError,
    rError,
    ComponentType_rReject,
    rReject,
    _decode_ComponentType,
    _encode_ComponentType,
} from "./ComponentType.ta.mjs";
export * from "./ConnectedNumberTreatmentInd.ta.mjs";
export * from "./Constraints.ta.mjs";
export * from "./ControlConditionByCallParty.ta.mjs";
export * from "./ControlType.ta.mjs";
export * from "./CorrelationID.ta.mjs";
export * from "./CounterAndValue.ta.mjs";
export * from "./CounterID.ta.mjs";
export * from "./CountersValue.ta.mjs";
export * from "./Credit.ta.mjs";
export * from "./CreditUnit.ta.mjs";
export * from "./CriticalityType.ta.mjs";
export * from "./CurrencyID.ta.mjs";
export * from "./CurrencyValue.ta.mjs";
export * from "./CutAndPaste.ta.mjs";
export * from "./DateAndTime.ta.mjs";
export * from "./DestinationRoutingAddress.ta.mjs";
export * from "./Digits.ta.mjs";
export * from "./DisplayInformation.ta.mjs";
export * from "./DpSpecificCommonParameters.ta.mjs";
export * from "./DpSpecificCriteria.ta.mjs";
export * from "./Duration.ta.mjs";
export * from "./ElementaryMessageID.ta.mjs";
export * from "./Entry.ta.mjs";
export * from "./ErrorTreatment.ta.mjs";
export * from "./EventSpecificInformationBCSM-analysedInfoSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-callAccepted.ta.mjs";
export * from "./EventSpecificInformationBCSM-collectedInfoSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-facilitySelectedAndAvailable.ta.mjs";
export * from "./EventSpecificInformationBCSM-oAbandon.ta.mjs";
export * from "./EventSpecificInformationBCSM-oAnswerSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-oDisconnectSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-oMidCallSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-oNoAnswerSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-oReAnswer.ta.mjs";
export * from "./EventSpecificInformationBCSM-oSuspended.ta.mjs";
export * from "./EventSpecificInformationBCSM-oTermSeizedSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-origAttemptAuthorized.ta.mjs";
export * from "./EventSpecificInformationBCSM-routeSelectFailureSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-tAbandon.ta.mjs";
export * from "./EventSpecificInformationBCSM-tAnswerSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-tBusySpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-tDisconnectSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-tMidCallSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-tNoAnswerSpecificInfo.ta.mjs";
export * from "./EventSpecificInformationBCSM-tReAnswer.ta.mjs";
export * from "./EventSpecificInformationBCSM-tSuspended.ta.mjs";
export * from "./EventSpecificInformationBCSM.ta.mjs";
export * from "./EventSpecificInformationCharging.ta.mjs";
export {
    _enum_for_EventTypeBCSM,
    EventTypeBCSM,
    EventTypeBCSM_origAttemptAuthorized,
    origAttemptAuthorized,
    EventTypeBCSM_collectedInfo,
    collectedInfo,
    EventTypeBCSM_analysedInformation,
    analysedInformation,
    EventTypeBCSM_routeSelectFailure,
    routeSelectFailure,
    EventTypeBCSM_oCalledPartyBusy,
    EventTypeBCSM_oNoAnswer,
    EventTypeBCSM_oAnswer,
    EventTypeBCSM_oMidCall,
    oMidCall,
    EventTypeBCSM_oDisconnect,
    EventTypeBCSM_oAbandon,
    oAbandon,
    EventTypeBCSM_termAttemptAuthorized,
    EventTypeBCSM_tBusy,
    EventTypeBCSM_tNoAnswer,
    EventTypeBCSM_tAnswer,
    EventTypeBCSM_tMidCall,
    tMidCall,
    EventTypeBCSM_tDisconnect,
    EventTypeBCSM_tAbandon,
    tAbandon,
    EventTypeBCSM_oTermSeized,
    oTermSeized,
    EventTypeBCSM_oSuspended,
    oSuspended,
    EventTypeBCSM_tSuspended,
    tSuspended,
    EventTypeBCSM_origAttempt,
    origAttempt,
    EventTypeBCSM_termAttempt,
    termAttempt,
    EventTypeBCSM_oReAnswer,
    oReAnswer,
    EventTypeBCSM_tReAnswer,
    tReAnswer,
    EventTypeBCSM_facilitySelectedAndAvailable,
    facilitySelectedAndAvailable,
    EventTypeBCSM_callAccepted,
    callAccepted,
    _decode_EventTypeBCSM,
    _encode_EventTypeBCSM,
} from "./EventTypeBCSM.ta.mjs";
export * from "./EventTypeBCUSM.ta.mjs";
export * from "./EventTypeCharging.ta.mjs";
export * from "./ExtensionField.ta.mjs";
export * from "./FCIBillingChargingCharacteristics.ta.mjs";
export * from "./FacilityGroup.ta.mjs";
export * from "./FacilityGroupMember.ta.mjs";
export * from "./FailureCause.ta.mjs";
export * from "./FeatureCode.ta.mjs";
export {
    _enum_for_FeatureRequestIndicator,
    FeatureRequestIndicator,
    FeatureRequestIndicator_hold,
    hold,
    FeatureRequestIndicator_retrieve,
    FeatureRequestIndicator_featureActivation,
    FeatureRequestIndicator_spare1,
    spare1,
    FeatureRequestIndicator_sparen,
    sparen,
    _decode_FeatureRequestIndicator,
    _encode_FeatureRequestIndicator,
} from "./FeatureRequestIndicator.ta.mjs";
export * from "./FilteredCallTreatment.ta.mjs";
export * from "./FilteringCharacteristics.ta.mjs";
export * from "./FilteringCriteria-addressAndService.ta.mjs";
export * from "./FilteringCriteria.ta.mjs";
export * from "./FilteringTimeOut.ta.mjs";
export * from "./ForwardCallIndicators.ta.mjs";
export * from "./ForwardGVNS.ta.mjs";
export * from "./ForwardServiceInteractionInd.ta.mjs";
export {
    _enum_for_ForwardingCondition,
    ForwardingCondition,
    ForwardingCondition_busy,
    ForwardingCondition_noanswer,
    noanswer,
    ForwardingCondition_any_,
    _decode_ForwardingCondition,
    _encode_ForwardingCondition,
} from "./ForwardingCondition.ta.mjs";
export * from "./GapCriteria-calledAddressAndService.ta.mjs";
export * from "./GapCriteria-callingAddressAndService.ta.mjs";
export * from "./GapCriteria.ta.mjs";
export * from "./GapIndicators.ta.mjs";
export * from "./GapOnService.ta.mjs";
export * from "./GapTreatment-both.ta.mjs";
export * from "./GapTreatment.ta.mjs";
export * from "./GenericName.ta.mjs";
export * from "./GenericNumber.ta.mjs";
export * from "./GenericNumbers.ta.mjs";
export * from "./HighLayerCompatibilities.ta.mjs";
export * from "./HighLayerCompatibility.ta.mjs";
export * from "./HoldCause.ta.mjs";
export * from "./INServiceCompatibilityIndication.ta.mjs";
export * from "./INServiceCompatibilityResponse.ta.mjs";
export * from "./IPAvailable.ta.mjs";
export * from "./IPRoutingAddress.ta.mjs";
export * from "./IPSSPCapabilities.ta.mjs";
export * from "./ISDNAccessRelatedInformation.ta.mjs";
export * from "./InbandInfo.ta.mjs";
export * from "./InfoToSend.ta.mjs";
export * from "./InfoType.ta.mjs";
export * from "./InformationToRecord-controlDigits.ta.mjs";
export * from "./InformationToRecord.ta.mjs";
export * from "./InformationToSend.ta.mjs";
export * from "./Integer4.ta.mjs";
export * from "./InteractionStrategy.ta.mjs";
export * from "./Interval.ta.mjs";
export {
    _enum_for_InvokableService,
    InvokableService,
    InvokableService_callingLineIdentificationRestriction,
    InvokableService_connectedLineIdentificationRestriction,
    InvokableService_callWaiting,
    InvokableService_callHold,
    InvokableService_reverseCharging,
    InvokableService_explicitCallTransfer,
    InvokableService_callCompletionOnBusySubscriber,
    _decode_InvokableService,
    _encode_InvokableService,
} from "./InvokableService.ta.mjs";
export * from "./InvokeID.ta.mjs";
export * from "./InvokeIdType.ta.mjs";
export * from "./Language.ta.mjs";
export * from "./LegID.ta.mjs";
export * from "./LegType.ta.mjs";
export * from "./LocationNumber.ta.mjs";
export * from "./MailBoxID.ta.mjs";
export * from "./MaximumNumberOfCounters.ta.mjs";
export * from "./Media.ta.mjs";
export {
    _enum_for_Message,
    Message,
    Message_rELease,
    Message_rELeaseCOMPlete,
    Message_fACility,
    _decode_Message,
    _encode_Message,
} from "./Message.ta.mjs";
export * from "./MessageID-text.ta.mjs";
export * from "./MessageID-variableMessage.ta.mjs";
export * from "./MessageID.ta.mjs";
export * from "./MidCallControlInfo-Item-midCallReportType.ta.mjs";
export * from "./MidCallControlInfo-Item.ta.mjs";
export * from "./MidCallControlInfo.ta.mjs";
export * from "./MidCallInfo.ta.mjs";
export * from "./MidCallInfoType.ta.mjs";
export * from "./MiscCallInfo-dpAssignment.ta.mjs";
export * from "./MiscCallInfo-messageType.ta.mjs";
export * from "./MiscCallInfo.ta.mjs";
export * from "./MonitorMode.ta.mjs";
export * from "./Notification.ta.mjs";
export * from "./NotificationInformation-answeredCallSpecificInfo.ta.mjs";
export * from "./NotificationInformation-callDurationSpecificInfo.ta.mjs";
export * from "./NotificationInformation-callFailureSpecificInfo.ta.mjs";
export * from "./NotificationInformation-callReleaseSpecificInfo.ta.mjs";
export * from "./NotificationInformation-calledNumberSpecificInfo.ta.mjs";
export * from "./NotificationInformation-creditLimitReachedSpecificInfo.ta.mjs";
export * from "./NotificationInformation-noReplySpecificInfo.ta.mjs";
export * from "./NotificationInformation-ssInvocationSpecificInfo.ta.mjs";
export * from "./NotificationInformation-userAbandonSpecificInfo.ta.mjs";
export * from "./NotificationInformation.ta.mjs";
export * from "./NumberMatch.ta.mjs";
export * from "./NumberOfDigits.ta.mjs";
export * from "./NumberingPlan.ta.mjs";
export * from "./OperationCode.ta.mjs";
export * from "./OriginalCalledPartyID.ta.mjs";
export * from "./PartyID.ta.mjs";
export * from "./ProfileIdentifier.ta.mjs";
export * from "./Reason.ta.mjs";
export * from "./ReceivedInformation.ta.mjs";
export * from "./ReceivedStatus.ta.mjs";
export * from "./RecordedMessageID.ta.mjs";
export * from "./RedirectingPartyID.ta.mjs";
export * from "./RedirectionInformation.ta.mjs";
export * from "./RegistratorIdentifier.ta.mjs";
export * from "./ReportCondition.ta.mjs";
export * from "./RequestedInformation.ta.mjs";
export * from "./RequestedInformationList.ta.mjs";
export * from "./RequestedInformationType.ta.mjs";
export * from "./RequestedInformationTypeList.ta.mjs";
export * from "./RequestedInformationValue.ta.mjs";
export * from "./RequestedNotifications.ta.mjs";
export * from "./RequestedType.ta.mjs";
export * from "./RequestedUTSI.ta.mjs";
export * from "./RequestedUTSIList.ta.mjs";
export * from "./ResourceID.ta.mjs";
export {
    _enum_for_ResourceStatus,
    ResourceStatus,
    ResourceStatus_busy,
    ResourceStatus_idle,
    idle,
    _decode_ResourceStatus,
    _encode_ResourceStatus,
} from "./ResourceStatus.ta.mjs";
export * from "./ResponseCondition.ta.mjs";
export * from "./RouteList.ta.mjs";
export * from "./RoutingAddress.ta.mjs";
export * from "./SCIBillingChargingCharacteristics.ta.mjs";
export * from "./SFBillingChargingCharacteristics.ta.mjs";
export * from "./ScfAddress.ta.mjs";
export * from "./ScfID.ta.mjs";
export * from "./ServiceAddressInformation.ta.mjs";
export * from "./ServiceInteractionIndicators.ta.mjs";
export * from "./ServiceInteractionIndicatorsTwo.ta.mjs";
export * from "./ServiceKey.ta.mjs";
export * from "./ServiceProfileIdentifier.ta.mjs";
export * from "./ServingAreaID.ta.mjs";
export * from "./SubscriberId.ta.mjs";
export {
    type SupplementaryServices,
    SupplementaryServices_callingLineIdentificationPresentation,
    SupplementaryServices_callingLineIdentificationRestriction,
    SupplementaryServices_connectedLineIdentificationPresentation,
    SupplementaryServices_connectedLineIdentificationRestriction,
    SupplementaryServices_callForwardingOnNoReply,
    SupplementaryServices_callForwardingUnconditional,
    SupplementaryServices_callForwardingOnBusy,
    SupplementaryServices_callForwardingOnNotReachable,
    SupplementaryServices_callWaiting,
    SupplementaryServices_callHold,
    SupplementaryServices_reverseCharging,
    SupplementaryServices_explicitCallTransfer,
    SupplementaryServices_callCompletionOnBusySubscriber,
    SupplementaryServices_adviceOfChargeOnStart,
    SupplementaryServices_adviceOfChargeAtEnd,
    SupplementaryServices_adviceOfChargeDuringCall,
    SupplementaryServices_timeDependentRouting,
    SupplementaryServices_callingPartingDependentRouting,
    SupplementaryServices_outgoingCallBarring,
    SupplementaryServices_incomingCallBarring,
    _decode_SupplementaryServices,
    _encode_SupplementaryServices,
} from "./SupplementaryServices.ta.mjs";
export * from "./SuspendTimer.ta.mjs";
export * from "./TargetLineIdentifier.ta.mjs";
export * from "./TerminalType.ta.mjs";
export * from "./TimerID.ta.mjs";
export * from "./TimerValue.ta.mjs";
export * from "./Tone.ta.mjs";
export * from "./ToneId.ta.mjs";
export * from "./TraceInformation.ta.mjs";
export * from "./TraceItem.ta.mjs";
export * from "./TravellingClassMark.ta.mjs";
export * from "./TriggerDataIdentifier.ta.mjs";
export {
    _enum_for_TriggerType,
    TriggerType,
    TriggerType_featureActivation,
    TriggerType_verticalServiceCode,
    verticalServiceCode,
    TriggerType_customizedAccess,
    customizedAccess,
    TriggerType_customizedIntercom,
    customizedIntercom,
    TriggerType_emergencyService,
    emergencyService,
    TriggerType_aFR,
    aFR,
    TriggerType_sharedIOTrunk,
    sharedIOTrunk,
    TriggerType_offHookDelay,
    offHookDelay,
    TriggerType_channelSetupPRI,
    channelSetupPRI,
    TriggerType_tNoAnswer,
    TriggerType_tBusy,
    TriggerType_oCalledPartyBusy,
    TriggerType_oNoAnswer,
    TriggerType_originationAttemptAuthorized,
    originationAttemptAuthorized,
    TriggerType_oAnswer,
    TriggerType_oDisconnect,
    TriggerType_termAttemptAuthorized,
    TriggerType_tAnswer,
    TriggerType_tDisconnect,
    _decode_TriggerType,
    _encode_TriggerType,
} from "./TriggerType.ta.mjs";
export * from "./USIInformation.ta.mjs";
export * from "./USIMonitorMode.ta.mjs";
export * from "./USIServiceIndicator.ta.mjs";
export * from "./UnavailableNetworkResource.ta.mjs";
export * from "./UserCredit.ta.mjs";
export * from "./UserInfo.ta.mjs";
export * from "./UserInformation.ta.mjs";
export * from "./UserInteractionModes.ta.mjs";
export * from "./VariablePart.ta.mjs";
export * from "./highLayerCompatibilityLength.va.mjs";
export * from "./initialCallSegment.va.mjs";
export * from "./leg1.va.mjs";
export * from "./leg2.va.mjs";
export * from "./maxCreditUnit.va.mjs";
export * from "./minCauseLength.va.mjs";
export * from "./numOfCounters.va.mjs";
export * from "./numOfInfoItems.va.mjs";

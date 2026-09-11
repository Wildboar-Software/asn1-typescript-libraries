/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary OperationErrors
 * @description
 *
 * Error in the service request (ECMA-269 §9.3.1, §12.2.14.1). Hierarchy of
 * generic, invalid-value, object-type, privilege, compatibility, and
 * out-of-range codes.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationErrors  ::=  ENUMERATED -- in CSTA2 added in CSTA3
 * {     generic                     (  1),
 *     atLeastOneConditionalParameterNotProvided     ( 29),
 *     featureAlreadySet                 ( 30),
 *     invalidMsgID                     ( 25),
 *     invalidParameterValue                 ( 31),
 *     invalidAccountCode                 ( 21),
 *     invalidAgentGroup                 ( 32),
 *     invalidAgentIdentifier                 ( 33),
 *     invalidAgentPassword                 ( 34),
 *     invalidAgentState                 ( 35),
 *     invalidAlertTime                 ( 36),
 *     invalidAllocationState                 ( 16),
 *     invalidAuthCode                 ( 22),
 *     invalidAutoAnswer                 ( 37),
 *     invalidBitRate                     ( 38),
 *     invalidButtonIdentifier             ( 39),
 *     invalidCallType                 ( 42),
 *     invalidConnectionRate                 ( 43),
 *     invalidConsultPurpose                 ( 44),
 *     invalidCorrelatorData                 ( 20),
 *     invalidCrossRefID                 ( 17),
 *     invalidDelayTolerance                 ( 45),
 *     invalidDestination                 ( 14),
 *     invalidDestinationDetect             ( 46),
 *     invalidDoNotDisturb                 ( 47),
 *     invalidEscapeCrossRefID             ( 48),
 *     invalidFeature                     ( 15),
 *     invalidFile                     ( 28),
 *     invalidFlowDirection                 ( 49),
 *     invalidForwardingDestination             (  7),
 *     invalidForwardingFlag                 ( 51),
 *     invalidForwardingType                 ( 52),
 *     invalidHookswitchType                 ( 53),
 *     invalidHookswitchComponent             ( 54),
 *     invalidLampMode                 ( 55),
 *     invalidLampID                     ( 56),
 *     invalidMessageWaitingSetting             ( 57),
 *     invalidMicrophoneGain                 ( 58),
 *     invalidMicrophoneMute                 ( 59),
 *     invalidMonitorCrossRefID             ( 60),
 *     invalidMonitorFilter                 ( 61),
 *     invalidMonitorObject                 ( 62),
 *     invalidMonitorType                 ( 63),
 *     invalidNumberOFChannels             ( 64),
 *     invalidParticipationType             ( 65),
 *     invalidRemainRetry                 ( 66),
 *     invalidRingCount                 ( 67),
 *     invalidRingPattern                 ( 68),
 *     invalidRingVolume                 ( 69),
 *     invalidRouteingAlgorithm             ( 70),
 *     invalidRouteingCrossRefID             ( 71),
 *     invalidRouteRegistrationCrossRefID         ( 72),
 *     invalidSpeakerVolume                 ( 73),
 *     invalidSpeakerMute                 ( 74),
 *     invalidSwitchingSubdomainCharsType         ( 75),
 *     invalidObjectType                 ( 18),
 *     invalidActiveCallObject             ( 76),
 *     invalidCalledDeviceObjectType             ( 77),
 *     invalidCallingDeviceObjectType             ( 78),
 *     invalidCallToBePickedUpObjectType         ( 79),
 *     invalidCallToDivertObjectType             ( 80),
 *     invalidCallToParkObjectType             ( 81),
 *     invalidDestinationDeviceObject             (195),
 *     invalidHeldCallObject                 ( 82),
 *     invalidMonitorObjectType             ( 83),
 *     invalidParkToObjectType             ( 84),
 *     messageIDRequired                 ( 26),
 *     notDifferentDevices                 ( 85),
 *     notSameDevice                     ( 86),
 *     objectNotKnown                     (  4),
 *     invalidCallID                     ( 11),
 *     invalidActiveCallID                 ( 87),
 *     invalidHeldCallID                 ( 88),
 *     invalidConnectionID                 ( 13),
 *     invalidActiveConnectionID             ( 89),
 *     invalidHeldConnectionID             ( 90),
 *     invalidDeviceID                 ( 12),
 *     invalidActiveDeviceID                 ( 91),
 *     invalidCalledDeviceID                 (  6),
 *     invalidCallingDeviceID                 (  5),
 *     invalidCallToParkDeviceID             ( 92),
 *     invalidDestinationDeviceID             ( 93),
 *     invalidDivertingDeviceID             ( 94),
 *     invalidHeldDeviceID                 ( 95),
 *     invalidParkToDeviceID                 ( 96),
 *     invalidPickUpDeviceID                 ( 97),
 *     parameterNotSupported                 ( 98),
 *     accountCodeNotSupported             ( 99),
 *     agentGroupNotSupported                 (100),
 *     agentPasswordNotSupported             (101),
 *     agentStateNotSupported                 (102),
 *     alertTimeNotSupported                 (103),
 *     allocationNotSupported                 (104),
 *     authorisationCodeNotSupported             (105),
 *     autoAnswerNotSupported                 (106),
 *     bitRateNotSupported                 (107),
 *     buttonNotSupported                 (108),
 *     callTypeNotSupported                 (109),
 *     charactersToSendNotSupported             (110),
 *     connectionRateNotSupported             (111),
 *     connectionReservationNotSupported         (112),
 *     consultPurposeNotSupported             (113),
 *     correlatorDataNotSupported             (114),
 *     delayToleranceNotSupported             (115),
 *     destinationDetectNotSupported             (116),
 *     digitModeNotSupported                 (117),
 *     errorValueNotSupported                 (118),
 *     flowDirectionNotSupported             (119),
 *     forwardingDestinationNotSupported         (120),
 *     lampNotSupported                 (121),
 *     monitorTypeNotSupported             (122),
 *     numberOfChannelsNotSupported             (123),
 *     parameterTypeNotSupported             (124),
 *     priorityNotSupported                 (125),
 *     privateDataNotSupported             (126),
 *     pulseDurationNotSupported             (127),
 *     pulseRateNotSupported                 (128),
 *     remainRetryNotSupported             (129),
 *     ringCountNotSupported                 (130),
 *     routeUsedNotSupported                 (131),
 *     securityNotSupported                 (132),
 *     swSubdomainCCIETypeNotSupported         (133),
 *     toneDurationNotSupported             (134),
 *     sysStatRegIDNotSupported             (135),
 *     userDataNotSupported                 (136),
 *     privilegeViolationSpecifiedDevice        (  8),
 *     privilegeViolationActiveDevice             (137),
 *     privilegeViolationCalledDevice            (  9),
 *     privilegeViolationCallingDevice            ( 10),
 *     privilegeViolationCallToParkDevice         (138),
 *     privilegeViolationDestinationDevice         (139),
 *     privilegeViolationOnDivertingDevice         (140),
 *     privilegeViolationHeldDevice             (141),
 *     privilegeViolationOnParkToDevice         (142),
 *     privilegeViolationPickUpDevice             (143),
 *     routeingTimerExpired                 (144),
 *     requestIncompatibleWithObject             (  2),
 *     requestIncompatibleWithConnection         (145),
 *     requestIncompatibleWithActiveConnection     (146),
 *     requestIncompatibleWithHeldConnection         (147),
 *     requestIncompatibleWithDevice             (148),
 *     requestIncompatibleWithCalledDevice         ( 24),
 *     requestIncompatibleWithCallingDevice         ( 23),
 *     requestIncompatibleWithSubjectDevice         (149),
 *     requestIncompatibleWithActiveDevice         (150),
 *     requestIncompatibleWithCallToParkDevice     (151),
 *     requestIncompatibleWithDestinationDevice     (152),
 *     requestIncompatibleWithDivertingDevice         (153),
 *     requestIncompatibleWithHeldDevice         (154),
 *     requestIncompatibleWithMedia             ( 27),
 *     requestIncompatibleWithParkToDevice         (155),
 *     requestIncompatibleWithPickupDevice         (156),
 *     serviceNotSupported                 ( 50),
 *     securityViolation                 ( 19),
 *     valueOutOfRange                 (  3),
 *     agentStateOutOfRange                 (157),
 *     alertTimeOutOfRange                 (158),
 *     allocationOutOfRange                 (159),
 *     autoAnswerOutOfRange                 (160),
 *     bitRateOutOfRange                 (161),
 *     callTypeOutOfRange                 (162),
 *     connectionRateOutOfRange             (163),
 *     connectionReservoationOutOfRange         (164),
 *     consultPurposeOutOfRange             (165),
 *     correlatorDataOutOfRange             (166),
 *     delayToleranceOutOfRange             (167),
 *     destinationDetectOutOfRange             (168),
 *     digitModeOutOfRange                 (169),
 *     doNotDisturbOutOfRange                 (170),
 *     flowDirectionOutOfRange             (171),
 *     forwardingFlagOutOfRange             (172),
 *     forwardingTypeOutOfRange             (173),
 *     hookswitchComponentOutOfRange             (174),
 *     hookswitchTypeOutOfRange             (175),
 *     lampModeOutOfRange                 (176),
 *     messageWaitingSettingOutOfRange         (177),
 *     micGainOutOfRange                 (178),
 *     micMuteOutOfRange                 (179),
 *     monitorTypeOutOfRange                 (180),
 *     numberOfChannelsOutOfRange             (181),
 *     participationTypeOutOfRange             (182),
 *     pulseDurationOutOfRange             (183),
 *     pulseRateOutOfRange                 (184),
 *     ringCountOutOfRange                 (185),
 *     ringPatternOutOfRange                 (186),
 *     ringVolumnOutOfRange                 (187),
 *     routeingAlgorithmOutOfRange             (188),
 *     speakerMuteOutOfRange                 (189),
 *     speakerVolumeOutOfRange             (190),
 *     switchingCcittTypeOutOfRange             (191),
 *     systemStatusOutOfRange                 (192),
 *     toneCharacterOutOfRange             (193),
 *     toneDurationOutOfRange                 (194) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_OperationErrors {
    generic = 1,
    atLeastOneConditionalParameterNotProvided = 29,
    featureAlreadySet = 30,
    invalidMsgID = 25,
    invalidParameterValue = 31,
    invalidAccountCode = 21,
    invalidAgentGroup = 32,
    invalidAgentIdentifier = 33,
    invalidAgentPassword = 34,
    invalidAgentState = 35,
    invalidAlertTime = 36,
    invalidAllocationState = 16,
    invalidAuthCode = 22,
    invalidAutoAnswer = 37,
    invalidBitRate = 38,
    invalidButtonIdentifier = 39,
    invalidCallType = 42,
    invalidConnectionRate = 43,
    invalidConsultPurpose = 44,
    invalidCorrelatorData = 20,
    invalidCrossRefID = 17,
    invalidDelayTolerance = 45,
    invalidDestination = 14,
    invalidDestinationDetect = 46,
    invalidDoNotDisturb = 47,
    invalidEscapeCrossRefID = 48,
    invalidFeature = 15,
    invalidFile = 28,
    invalidFlowDirection = 49,
    invalidForwardingDestination = 7,
    invalidForwardingFlag = 51,
    invalidForwardingType = 52,
    invalidHookswitchType = 53,
    invalidHookswitchComponent = 54,
    invalidLampMode = 55,
    invalidLampID = 56,
    invalidMessageWaitingSetting = 57,
    invalidMicrophoneGain = 58,
    invalidMicrophoneMute = 59,
    invalidMonitorCrossRefID = 60,
    invalidMonitorFilter = 61,
    invalidMonitorObject = 62,
    invalidMonitorType = 63,
    invalidNumberOFChannels = 64,
    invalidParticipationType = 65,
    invalidRemainRetry = 66,
    invalidRingCount = 67,
    invalidRingPattern = 68,
    invalidRingVolume = 69,
    invalidRouteingAlgorithm = 70,
    invalidRouteingCrossRefID = 71,
    invalidRouteRegistrationCrossRefID = 72,
    invalidSpeakerVolume = 73,
    invalidSpeakerMute = 74,
    invalidSwitchingSubdomainCharsType = 75,
    invalidObjectType = 18,
    invalidActiveCallObject = 76,
    invalidCalledDeviceObjectType = 77,
    invalidCallingDeviceObjectType = 78,
    invalidCallToBePickedUpObjectType = 79,
    invalidCallToDivertObjectType = 80,
    invalidCallToParkObjectType = 81,
    invalidDestinationDeviceObject = 195,
    invalidHeldCallObject = 82,
    invalidMonitorObjectType = 83,
    invalidParkToObjectType = 84,
    messageIDRequired = 26,
    notDifferentDevices = 85,
    notSameDevice = 86,
    objectNotKnown = 4,
    invalidCallID = 11,
    invalidActiveCallID = 87,
    invalidHeldCallID = 88,
    invalidConnectionID = 13,
    invalidActiveConnectionID = 89,
    invalidHeldConnectionID = 90,
    invalidDeviceID = 12,
    invalidActiveDeviceID = 91,
    invalidCalledDeviceID = 6,
    invalidCallingDeviceID = 5,
    invalidCallToParkDeviceID = 92,
    invalidDestinationDeviceID = 93,
    invalidDivertingDeviceID = 94,
    invalidHeldDeviceID = 95,
    invalidParkToDeviceID = 96,
    invalidPickUpDeviceID = 97,
    parameterNotSupported = 98,
    accountCodeNotSupported = 99,
    agentGroupNotSupported = 100,
    agentPasswordNotSupported = 101,
    agentStateNotSupported = 102,
    alertTimeNotSupported = 103,
    allocationNotSupported = 104,
    authorisationCodeNotSupported = 105,
    autoAnswerNotSupported = 106,
    bitRateNotSupported = 107,
    buttonNotSupported = 108,
    callTypeNotSupported = 109,
    charactersToSendNotSupported = 110,
    connectionRateNotSupported = 111,
    connectionReservationNotSupported = 112,
    consultPurposeNotSupported = 113,
    correlatorDataNotSupported = 114,
    delayToleranceNotSupported = 115,
    destinationDetectNotSupported = 116,
    digitModeNotSupported = 117,
    errorValueNotSupported = 118,
    flowDirectionNotSupported = 119,
    forwardingDestinationNotSupported = 120,
    lampNotSupported = 121,
    monitorTypeNotSupported = 122,
    numberOfChannelsNotSupported = 123,
    parameterTypeNotSupported = 124,
    priorityNotSupported = 125,
    privateDataNotSupported = 126,
    pulseDurationNotSupported = 127,
    pulseRateNotSupported = 128,
    remainRetryNotSupported = 129,
    ringCountNotSupported = 130,
    routeUsedNotSupported = 131,
    securityNotSupported = 132,
    swSubdomainCCIETypeNotSupported = 133,
    toneDurationNotSupported = 134,
    sysStatRegIDNotSupported = 135,
    userDataNotSupported = 136,
    privilegeViolationSpecifiedDevice = 8,
    privilegeViolationActiveDevice = 137,
    privilegeViolationCalledDevice = 9,
    privilegeViolationCallingDevice = 10,
    privilegeViolationCallToParkDevice = 138,
    privilegeViolationDestinationDevice = 139,
    privilegeViolationOnDivertingDevice = 140,
    privilegeViolationHeldDevice = 141,
    privilegeViolationOnParkToDevice = 142,
    privilegeViolationPickUpDevice = 143,
    routeingTimerExpired = 144,
    requestIncompatibleWithObject = 2,
    requestIncompatibleWithConnection = 145,
    requestIncompatibleWithActiveConnection = 146,
    requestIncompatibleWithHeldConnection = 147,
    requestIncompatibleWithDevice = 148,
    requestIncompatibleWithCalledDevice = 24,
    requestIncompatibleWithCallingDevice = 23,
    requestIncompatibleWithSubjectDevice = 149,
    requestIncompatibleWithActiveDevice = 150,
    requestIncompatibleWithCallToParkDevice = 151,
    requestIncompatibleWithDestinationDevice = 152,
    requestIncompatibleWithDivertingDevice = 153,
    requestIncompatibleWithHeldDevice = 154,
    requestIncompatibleWithMedia = 27,
    requestIncompatibleWithParkToDevice = 155,
    requestIncompatibleWithPickupDevice = 156,
    serviceNotSupported = 50,
    securityViolation = 19,
    valueOutOfRange = 3,
    agentStateOutOfRange = 157,
    alertTimeOutOfRange = 158,
    allocationOutOfRange = 159,
    autoAnswerOutOfRange = 160,
    bitRateOutOfRange = 161,
    callTypeOutOfRange = 162,
    connectionRateOutOfRange = 163,
    connectionReservoationOutOfRange = 164,
    consultPurposeOutOfRange = 165,
    correlatorDataOutOfRange = 166,
    delayToleranceOutOfRange = 167,
    destinationDetectOutOfRange = 168,
    digitModeOutOfRange = 169,
    doNotDisturbOutOfRange = 170,
    flowDirectionOutOfRange = 171,
    forwardingFlagOutOfRange = 172,
    forwardingTypeOutOfRange = 173,
    hookswitchComponentOutOfRange = 174,
    hookswitchTypeOutOfRange = 175,
    lampModeOutOfRange = 176,
    messageWaitingSettingOutOfRange = 177,
    micGainOutOfRange = 178,
    micMuteOutOfRange = 179,
    monitorTypeOutOfRange = 180,
    numberOfChannelsOutOfRange = 181,
    participationTypeOutOfRange = 182,
    pulseDurationOutOfRange = 183,
    pulseRateOutOfRange = 184,
    ringCountOutOfRange = 185,
    ringPatternOutOfRange = 186,
    ringVolumnOutOfRange = 187,
    routeingAlgorithmOutOfRange = 188,
    speakerMuteOutOfRange = 189,
    speakerVolumeOutOfRange = 190,
    switchingCcittTypeOutOfRange = 191,
    systemStatusOutOfRange = 192,
    toneCharacterOutOfRange = 193,
    toneDurationOutOfRange = 194,
}

/**
 * @summary OperationErrors
 * @description
 *
 * Error in the service request (ECMA-269 §9.3.1, §12.2.14.1). Hierarchy of
 * generic, invalid-value, object-type, privilege, compatibility, and
 * out-of-range codes.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationErrors  ::=  ENUMERATED -- in CSTA2 added in CSTA3
 * {     generic                     (  1),
 *     atLeastOneConditionalParameterNotProvided     ( 29),
 *     featureAlreadySet                 ( 30),
 *     invalidMsgID                     ( 25),
 *     invalidParameterValue                 ( 31),
 *     invalidAccountCode                 ( 21),
 *     invalidAgentGroup                 ( 32),
 *     invalidAgentIdentifier                 ( 33),
 *     invalidAgentPassword                 ( 34),
 *     invalidAgentState                 ( 35),
 *     invalidAlertTime                 ( 36),
 *     invalidAllocationState                 ( 16),
 *     invalidAuthCode                 ( 22),
 *     invalidAutoAnswer                 ( 37),
 *     invalidBitRate                     ( 38),
 *     invalidButtonIdentifier             ( 39),
 *     invalidCallType                 ( 42),
 *     invalidConnectionRate                 ( 43),
 *     invalidConsultPurpose                 ( 44),
 *     invalidCorrelatorData                 ( 20),
 *     invalidCrossRefID                 ( 17),
 *     invalidDelayTolerance                 ( 45),
 *     invalidDestination                 ( 14),
 *     invalidDestinationDetect             ( 46),
 *     invalidDoNotDisturb                 ( 47),
 *     invalidEscapeCrossRefID             ( 48),
 *     invalidFeature                     ( 15),
 *     invalidFile                     ( 28),
 *     invalidFlowDirection                 ( 49),
 *     invalidForwardingDestination             (  7),
 *     invalidForwardingFlag                 ( 51),
 *     invalidForwardingType                 ( 52),
 *     invalidHookswitchType                 ( 53),
 *     invalidHookswitchComponent             ( 54),
 *     invalidLampMode                 ( 55),
 *     invalidLampID                     ( 56),
 *     invalidMessageWaitingSetting             ( 57),
 *     invalidMicrophoneGain                 ( 58),
 *     invalidMicrophoneMute                 ( 59),
 *     invalidMonitorCrossRefID             ( 60),
 *     invalidMonitorFilter                 ( 61),
 *     invalidMonitorObject                 ( 62),
 *     invalidMonitorType                 ( 63),
 *     invalidNumberOFChannels             ( 64),
 *     invalidParticipationType             ( 65),
 *     invalidRemainRetry                 ( 66),
 *     invalidRingCount                 ( 67),
 *     invalidRingPattern                 ( 68),
 *     invalidRingVolume                 ( 69),
 *     invalidRouteingAlgorithm             ( 70),
 *     invalidRouteingCrossRefID             ( 71),
 *     invalidRouteRegistrationCrossRefID         ( 72),
 *     invalidSpeakerVolume                 ( 73),
 *     invalidSpeakerMute                 ( 74),
 *     invalidSwitchingSubdomainCharsType         ( 75),
 *     invalidObjectType                 ( 18),
 *     invalidActiveCallObject             ( 76),
 *     invalidCalledDeviceObjectType             ( 77),
 *     invalidCallingDeviceObjectType             ( 78),
 *     invalidCallToBePickedUpObjectType         ( 79),
 *     invalidCallToDivertObjectType             ( 80),
 *     invalidCallToParkObjectType             ( 81),
 *     invalidDestinationDeviceObject             (195),
 *     invalidHeldCallObject                 ( 82),
 *     invalidMonitorObjectType             ( 83),
 *     invalidParkToObjectType             ( 84),
 *     messageIDRequired                 ( 26),
 *     notDifferentDevices                 ( 85),
 *     notSameDevice                     ( 86),
 *     objectNotKnown                     (  4),
 *     invalidCallID                     ( 11),
 *     invalidActiveCallID                 ( 87),
 *     invalidHeldCallID                 ( 88),
 *     invalidConnectionID                 ( 13),
 *     invalidActiveConnectionID             ( 89),
 *     invalidHeldConnectionID             ( 90),
 *     invalidDeviceID                 ( 12),
 *     invalidActiveDeviceID                 ( 91),
 *     invalidCalledDeviceID                 (  6),
 *     invalidCallingDeviceID                 (  5),
 *     invalidCallToParkDeviceID             ( 92),
 *     invalidDestinationDeviceID             ( 93),
 *     invalidDivertingDeviceID             ( 94),
 *     invalidHeldDeviceID                 ( 95),
 *     invalidParkToDeviceID                 ( 96),
 *     invalidPickUpDeviceID                 ( 97),
 *     parameterNotSupported                 ( 98),
 *     accountCodeNotSupported             ( 99),
 *     agentGroupNotSupported                 (100),
 *     agentPasswordNotSupported             (101),
 *     agentStateNotSupported                 (102),
 *     alertTimeNotSupported                 (103),
 *     allocationNotSupported                 (104),
 *     authorisationCodeNotSupported             (105),
 *     autoAnswerNotSupported                 (106),
 *     bitRateNotSupported                 (107),
 *     buttonNotSupported                 (108),
 *     callTypeNotSupported                 (109),
 *     charactersToSendNotSupported             (110),
 *     connectionRateNotSupported             (111),
 *     connectionReservationNotSupported         (112),
 *     consultPurposeNotSupported             (113),
 *     correlatorDataNotSupported             (114),
 *     delayToleranceNotSupported             (115),
 *     destinationDetectNotSupported             (116),
 *     digitModeNotSupported                 (117),
 *     errorValueNotSupported                 (118),
 *     flowDirectionNotSupported             (119),
 *     forwardingDestinationNotSupported         (120),
 *     lampNotSupported                 (121),
 *     monitorTypeNotSupported             (122),
 *     numberOfChannelsNotSupported             (123),
 *     parameterTypeNotSupported             (124),
 *     priorityNotSupported                 (125),
 *     privateDataNotSupported             (126),
 *     pulseDurationNotSupported             (127),
 *     pulseRateNotSupported                 (128),
 *     remainRetryNotSupported             (129),
 *     ringCountNotSupported                 (130),
 *     routeUsedNotSupported                 (131),
 *     securityNotSupported                 (132),
 *     swSubdomainCCIETypeNotSupported         (133),
 *     toneDurationNotSupported             (134),
 *     sysStatRegIDNotSupported             (135),
 *     userDataNotSupported                 (136),
 *     privilegeViolationSpecifiedDevice        (  8),
 *     privilegeViolationActiveDevice             (137),
 *     privilegeViolationCalledDevice            (  9),
 *     privilegeViolationCallingDevice            ( 10),
 *     privilegeViolationCallToParkDevice         (138),
 *     privilegeViolationDestinationDevice         (139),
 *     privilegeViolationOnDivertingDevice         (140),
 *     privilegeViolationHeldDevice             (141),
 *     privilegeViolationOnParkToDevice         (142),
 *     privilegeViolationPickUpDevice             (143),
 *     routeingTimerExpired                 (144),
 *     requestIncompatibleWithObject             (  2),
 *     requestIncompatibleWithConnection         (145),
 *     requestIncompatibleWithActiveConnection     (146),
 *     requestIncompatibleWithHeldConnection         (147),
 *     requestIncompatibleWithDevice             (148),
 *     requestIncompatibleWithCalledDevice         ( 24),
 *     requestIncompatibleWithCallingDevice         ( 23),
 *     requestIncompatibleWithSubjectDevice         (149),
 *     requestIncompatibleWithActiveDevice         (150),
 *     requestIncompatibleWithCallToParkDevice     (151),
 *     requestIncompatibleWithDestinationDevice     (152),
 *     requestIncompatibleWithDivertingDevice         (153),
 *     requestIncompatibleWithHeldDevice         (154),
 *     requestIncompatibleWithMedia             ( 27),
 *     requestIncompatibleWithParkToDevice         (155),
 *     requestIncompatibleWithPickupDevice         (156),
 *     serviceNotSupported                 ( 50),
 *     securityViolation                 ( 19),
 *     valueOutOfRange                 (  3),
 *     agentStateOutOfRange                 (157),
 *     alertTimeOutOfRange                 (158),
 *     allocationOutOfRange                 (159),
 *     autoAnswerOutOfRange                 (160),
 *     bitRateOutOfRange                 (161),
 *     callTypeOutOfRange                 (162),
 *     connectionRateOutOfRange             (163),
 *     connectionReservoationOutOfRange         (164),
 *     consultPurposeOutOfRange             (165),
 *     correlatorDataOutOfRange             (166),
 *     delayToleranceOutOfRange             (167),
 *     destinationDetectOutOfRange             (168),
 *     digitModeOutOfRange                 (169),
 *     doNotDisturbOutOfRange                 (170),
 *     flowDirectionOutOfRange             (171),
 *     forwardingFlagOutOfRange             (172),
 *     forwardingTypeOutOfRange             (173),
 *     hookswitchComponentOutOfRange             (174),
 *     hookswitchTypeOutOfRange             (175),
 *     lampModeOutOfRange                 (176),
 *     messageWaitingSettingOutOfRange         (177),
 *     micGainOutOfRange                 (178),
 *     micMuteOutOfRange                 (179),
 *     monitorTypeOutOfRange                 (180),
 *     numberOfChannelsOutOfRange             (181),
 *     participationTypeOutOfRange             (182),
 *     pulseDurationOutOfRange             (183),
 *     pulseRateOutOfRange                 (184),
 *     ringCountOutOfRange                 (185),
 *     ringPatternOutOfRange                 (186),
 *     ringVolumnOutOfRange                 (187),
 *     routeingAlgorithmOutOfRange             (188),
 *     speakerMuteOutOfRange                 (189),
 *     speakerVolumeOutOfRange             (190),
 *     switchingCcittTypeOutOfRange             (191),
 *     systemStatusOutOfRange                 (192),
 *     toneCharacterOutOfRange             (193),
 *     toneDurationOutOfRange                 (194) }
 * ```
 * 
 * @enum {number}
 */
export
type OperationErrors = _enum_for_OperationErrors;

/**
 * @summary OperationErrors
 * @description
 *
 * Error in the service request (ECMA-269 §9.3.1, §12.2.14.1). Hierarchy of
 * generic, invalid-value, object-type, privilege, compatibility, and
 * out-of-range codes.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationErrors  ::=  ENUMERATED -- in CSTA2 added in CSTA3
 * {     generic                     (  1),
 *     atLeastOneConditionalParameterNotProvided     ( 29),
 *     featureAlreadySet                 ( 30),
 *     invalidMsgID                     ( 25),
 *     invalidParameterValue                 ( 31),
 *     invalidAccountCode                 ( 21),
 *     invalidAgentGroup                 ( 32),
 *     invalidAgentIdentifier                 ( 33),
 *     invalidAgentPassword                 ( 34),
 *     invalidAgentState                 ( 35),
 *     invalidAlertTime                 ( 36),
 *     invalidAllocationState                 ( 16),
 *     invalidAuthCode                 ( 22),
 *     invalidAutoAnswer                 ( 37),
 *     invalidBitRate                     ( 38),
 *     invalidButtonIdentifier             ( 39),
 *     invalidCallType                 ( 42),
 *     invalidConnectionRate                 ( 43),
 *     invalidConsultPurpose                 ( 44),
 *     invalidCorrelatorData                 ( 20),
 *     invalidCrossRefID                 ( 17),
 *     invalidDelayTolerance                 ( 45),
 *     invalidDestination                 ( 14),
 *     invalidDestinationDetect             ( 46),
 *     invalidDoNotDisturb                 ( 47),
 *     invalidEscapeCrossRefID             ( 48),
 *     invalidFeature                     ( 15),
 *     invalidFile                     ( 28),
 *     invalidFlowDirection                 ( 49),
 *     invalidForwardingDestination             (  7),
 *     invalidForwardingFlag                 ( 51),
 *     invalidForwardingType                 ( 52),
 *     invalidHookswitchType                 ( 53),
 *     invalidHookswitchComponent             ( 54),
 *     invalidLampMode                 ( 55),
 *     invalidLampID                     ( 56),
 *     invalidMessageWaitingSetting             ( 57),
 *     invalidMicrophoneGain                 ( 58),
 *     invalidMicrophoneMute                 ( 59),
 *     invalidMonitorCrossRefID             ( 60),
 *     invalidMonitorFilter                 ( 61),
 *     invalidMonitorObject                 ( 62),
 *     invalidMonitorType                 ( 63),
 *     invalidNumberOFChannels             ( 64),
 *     invalidParticipationType             ( 65),
 *     invalidRemainRetry                 ( 66),
 *     invalidRingCount                 ( 67),
 *     invalidRingPattern                 ( 68),
 *     invalidRingVolume                 ( 69),
 *     invalidRouteingAlgorithm             ( 70),
 *     invalidRouteingCrossRefID             ( 71),
 *     invalidRouteRegistrationCrossRefID         ( 72),
 *     invalidSpeakerVolume                 ( 73),
 *     invalidSpeakerMute                 ( 74),
 *     invalidSwitchingSubdomainCharsType         ( 75),
 *     invalidObjectType                 ( 18),
 *     invalidActiveCallObject             ( 76),
 *     invalidCalledDeviceObjectType             ( 77),
 *     invalidCallingDeviceObjectType             ( 78),
 *     invalidCallToBePickedUpObjectType         ( 79),
 *     invalidCallToDivertObjectType             ( 80),
 *     invalidCallToParkObjectType             ( 81),
 *     invalidDestinationDeviceObject             (195),
 *     invalidHeldCallObject                 ( 82),
 *     invalidMonitorObjectType             ( 83),
 *     invalidParkToObjectType             ( 84),
 *     messageIDRequired                 ( 26),
 *     notDifferentDevices                 ( 85),
 *     notSameDevice                     ( 86),
 *     objectNotKnown                     (  4),
 *     invalidCallID                     ( 11),
 *     invalidActiveCallID                 ( 87),
 *     invalidHeldCallID                 ( 88),
 *     invalidConnectionID                 ( 13),
 *     invalidActiveConnectionID             ( 89),
 *     invalidHeldConnectionID             ( 90),
 *     invalidDeviceID                 ( 12),
 *     invalidActiveDeviceID                 ( 91),
 *     invalidCalledDeviceID                 (  6),
 *     invalidCallingDeviceID                 (  5),
 *     invalidCallToParkDeviceID             ( 92),
 *     invalidDestinationDeviceID             ( 93),
 *     invalidDivertingDeviceID             ( 94),
 *     invalidHeldDeviceID                 ( 95),
 *     invalidParkToDeviceID                 ( 96),
 *     invalidPickUpDeviceID                 ( 97),
 *     parameterNotSupported                 ( 98),
 *     accountCodeNotSupported             ( 99),
 *     agentGroupNotSupported                 (100),
 *     agentPasswordNotSupported             (101),
 *     agentStateNotSupported                 (102),
 *     alertTimeNotSupported                 (103),
 *     allocationNotSupported                 (104),
 *     authorisationCodeNotSupported             (105),
 *     autoAnswerNotSupported                 (106),
 *     bitRateNotSupported                 (107),
 *     buttonNotSupported                 (108),
 *     callTypeNotSupported                 (109),
 *     charactersToSendNotSupported             (110),
 *     connectionRateNotSupported             (111),
 *     connectionReservationNotSupported         (112),
 *     consultPurposeNotSupported             (113),
 *     correlatorDataNotSupported             (114),
 *     delayToleranceNotSupported             (115),
 *     destinationDetectNotSupported             (116),
 *     digitModeNotSupported                 (117),
 *     errorValueNotSupported                 (118),
 *     flowDirectionNotSupported             (119),
 *     forwardingDestinationNotSupported         (120),
 *     lampNotSupported                 (121),
 *     monitorTypeNotSupported             (122),
 *     numberOfChannelsNotSupported             (123),
 *     parameterTypeNotSupported             (124),
 *     priorityNotSupported                 (125),
 *     privateDataNotSupported             (126),
 *     pulseDurationNotSupported             (127),
 *     pulseRateNotSupported                 (128),
 *     remainRetryNotSupported             (129),
 *     ringCountNotSupported                 (130),
 *     routeUsedNotSupported                 (131),
 *     securityNotSupported                 (132),
 *     swSubdomainCCIETypeNotSupported         (133),
 *     toneDurationNotSupported             (134),
 *     sysStatRegIDNotSupported             (135),
 *     userDataNotSupported                 (136),
 *     privilegeViolationSpecifiedDevice        (  8),
 *     privilegeViolationActiveDevice             (137),
 *     privilegeViolationCalledDevice            (  9),
 *     privilegeViolationCallingDevice            ( 10),
 *     privilegeViolationCallToParkDevice         (138),
 *     privilegeViolationDestinationDevice         (139),
 *     privilegeViolationOnDivertingDevice         (140),
 *     privilegeViolationHeldDevice             (141),
 *     privilegeViolationOnParkToDevice         (142),
 *     privilegeViolationPickUpDevice             (143),
 *     routeingTimerExpired                 (144),
 *     requestIncompatibleWithObject             (  2),
 *     requestIncompatibleWithConnection         (145),
 *     requestIncompatibleWithActiveConnection     (146),
 *     requestIncompatibleWithHeldConnection         (147),
 *     requestIncompatibleWithDevice             (148),
 *     requestIncompatibleWithCalledDevice         ( 24),
 *     requestIncompatibleWithCallingDevice         ( 23),
 *     requestIncompatibleWithSubjectDevice         (149),
 *     requestIncompatibleWithActiveDevice         (150),
 *     requestIncompatibleWithCallToParkDevice     (151),
 *     requestIncompatibleWithDestinationDevice     (152),
 *     requestIncompatibleWithDivertingDevice         (153),
 *     requestIncompatibleWithHeldDevice         (154),
 *     requestIncompatibleWithMedia             ( 27),
 *     requestIncompatibleWithParkToDevice         (155),
 *     requestIncompatibleWithPickupDevice         (156),
 *     serviceNotSupported                 ( 50),
 *     securityViolation                 ( 19),
 *     valueOutOfRange                 (  3),
 *     agentStateOutOfRange                 (157),
 *     alertTimeOutOfRange                 (158),
 *     allocationOutOfRange                 (159),
 *     autoAnswerOutOfRange                 (160),
 *     bitRateOutOfRange                 (161),
 *     callTypeOutOfRange                 (162),
 *     connectionRateOutOfRange             (163),
 *     connectionReservoationOutOfRange         (164),
 *     consultPurposeOutOfRange             (165),
 *     correlatorDataOutOfRange             (166),
 *     delayToleranceOutOfRange             (167),
 *     destinationDetectOutOfRange             (168),
 *     digitModeOutOfRange                 (169),
 *     doNotDisturbOutOfRange                 (170),
 *     flowDirectionOutOfRange             (171),
 *     forwardingFlagOutOfRange             (172),
 *     forwardingTypeOutOfRange             (173),
 *     hookswitchComponentOutOfRange             (174),
 *     hookswitchTypeOutOfRange             (175),
 *     lampModeOutOfRange                 (176),
 *     messageWaitingSettingOutOfRange         (177),
 *     micGainOutOfRange                 (178),
 *     micMuteOutOfRange                 (179),
 *     monitorTypeOutOfRange                 (180),
 *     numberOfChannelsOutOfRange             (181),
 *     participationTypeOutOfRange             (182),
 *     pulseDurationOutOfRange             (183),
 *     pulseRateOutOfRange                 (184),
 *     ringCountOutOfRange                 (185),
 *     ringPatternOutOfRange                 (186),
 *     ringVolumnOutOfRange                 (187),
 *     routeingAlgorithmOutOfRange             (188),
 *     speakerMuteOutOfRange                 (189),
 *     speakerVolumeOutOfRange             (190),
 *     switchingCcittTypeOutOfRange             (191),
 *     systemStatusOutOfRange                 (192),
 *     toneCharacterOutOfRange             (193),
 *     toneDurationOutOfRange                 (194) }
 * ```
 * 
 * @enum {number}
 */
export
const OperationErrors = _enum_for_OperationErrors;

/**
 * @summary OperationErrors_generic
 * @description
 * Operational error in the service request; not a more specific Operation
 * error, or the server cannot be more specific. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_generic: OperationErrors = OperationErrors.generic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @description Alias of {@link OperationErrors_generic}.
 * @constant
 * @type {number}
 */
export
const generic: OperationErrors = OperationErrors.generic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_atLeastOneConditionalParameterNotProvided
 * @description
 * A required conditional-parameter set was empty. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_atLeastOneConditionalParameterNotProvided: OperationErrors = OperationErrors.atLeastOneConditionalParameterNotProvided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary atLeastOneConditionalParameterNotProvided
 * @description
 * Alias of {@link OperationErrors_atLeastOneConditionalParameterNotProvided}.
 * @constant
 * @type {number}
 */
export
const atLeastOneConditionalParameterNotProvided: OperationErrors = OperationErrors.atLeastOneConditionalParameterNotProvided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_featureAlreadySet
 * @description
 * The feature cannot be set because it is already set. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_featureAlreadySet: OperationErrors = OperationErrors.featureAlreadySet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureAlreadySet
 * @description Alias of {@link OperationErrors_featureAlreadySet}.
 * @constant
 * @type {number}
 */
export
const featureAlreadySet: OperationErrors = OperationErrors.featureAlreadySet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMsgID
 * @description
 * There is no message with the specified Message Identifier. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMsgID: OperationErrors = OperationErrors.invalidMsgID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMsgID
 * @description Alias of {@link OperationErrors_invalidMsgID}.
 * @constant
 * @type {number}
 */
export
const invalidMsgID: OperationErrors = OperationErrors.invalidMsgID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidParameterValue
 * @description
 * A parameter value is in range but invalid in this circumstance. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidParameterValue: OperationErrors = OperationErrors.invalidParameterValue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParameterValue
 * @description Alias of {@link OperationErrors_invalidParameterValue}.
 * @constant
 * @type {number}
 */
export
const invalidParameterValue: OperationErrors = OperationErrors.invalidParameterValue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAccountCode
 * @description The account code parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAccountCode: OperationErrors = OperationErrors.invalidAccountCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAccountCode
 * @description Alias of {@link OperationErrors_invalidAccountCode}.
 * @constant
 * @type {number}
 */
export
const invalidAccountCode: OperationErrors = OperationErrors.invalidAccountCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentGroup
 * @description An agent group is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentGroup: OperationErrors = OperationErrors.invalidAgentGroup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentGroup
 * @description Alias of {@link OperationErrors_invalidAgentGroup}.
 * @constant
 * @type {number}
 */
export
const invalidAgentGroup: OperationErrors = OperationErrors.invalidAgentGroup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentIdentifier
 * @description An agent identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentIdentifier: OperationErrors = OperationErrors.invalidAgentIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentIdentifier
 * @description Alias of {@link OperationErrors_invalidAgentIdentifier}.
 * @constant
 * @type {number}
 */
export
const invalidAgentIdentifier: OperationErrors = OperationErrors.invalidAgentIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentPassword
 * @description An agent password is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentPassword: OperationErrors = OperationErrors.invalidAgentPassword; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentPassword
 * @description Alias of {@link OperationErrors_invalidAgentPassword}.
 * @constant
 * @type {number}
 */
export
const invalidAgentPassword: OperationErrors = OperationErrors.invalidAgentPassword; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentState
 * @description An agent state setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentState: OperationErrors = OperationErrors.invalidAgentState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentState
 * @description Alias of {@link OperationErrors_invalidAgentState}.
 * @constant
 * @type {number}
 */
export
const invalidAgentState: OperationErrors = OperationErrors.invalidAgentState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAlertTime
 * @description The alertTime parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAlertTime: OperationErrors = OperationErrors.invalidAlertTime; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAlertTime
 * @description Alias of {@link OperationErrors_invalidAlertTime}.
 * @constant
 * @type {number}
 */
export
const invalidAlertTime: OperationErrors = OperationErrors.invalidAlertTime; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAllocationState
 * @description
 * MakePredictiveCall specified an allocation state invalid here. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAllocationState: OperationErrors = OperationErrors.invalidAllocationState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAllocationState
 * @description Alias of {@link OperationErrors_invalidAllocationState}.
 * @constant
 * @type {number}
 */
export
const invalidAllocationState: OperationErrors = OperationErrors.invalidAllocationState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAuthCode
 * @description The authorization code is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAuthCode: OperationErrors = OperationErrors.invalidAuthCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAuthCode
 * @description Alias of {@link OperationErrors_invalidAuthCode}.
 * @constant
 * @type {number}
 */
export
const invalidAuthCode: OperationErrors = OperationErrors.invalidAuthCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAutoAnswer
 * @description The autoanswer parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAutoAnswer: OperationErrors = OperationErrors.invalidAutoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAutoAnswer
 * @description Alias of {@link OperationErrors_invalidAutoAnswer}.
 * @constant
 * @type {number}
 */
export
const invalidAutoAnswer: OperationErrors = OperationErrors.invalidAutoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidBitRate
 * @description The bitRate parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidBitRate: OperationErrors = OperationErrors.invalidBitRate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidBitRate
 * @description Alias of {@link OperationErrors_invalidBitRate}.
 * @constant
 * @type {number}
 */
export
const invalidBitRate: OperationErrors = OperationErrors.invalidBitRate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidButtonIdentifier
 * @description A button identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidButtonIdentifier: OperationErrors = OperationErrors.invalidButtonIdentifier; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidButtonIdentifier
 * @description Alias of {@link OperationErrors_invalidButtonIdentifier}.
 * @constant
 * @type {number}
 */
export
const invalidButtonIdentifier: OperationErrors = OperationErrors.invalidButtonIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallType
 * @description The callType parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallType: OperationErrors = OperationErrors.invalidCallType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallType
 * @description Alias of {@link OperationErrors_invalidCallType}.
 * @constant
 * @type {number}
 */
export
const invalidCallType: OperationErrors = OperationErrors.invalidCallType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidConnectionRate
 * @description The connectionRate parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidConnectionRate: OperationErrors = OperationErrors.invalidConnectionRate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionRate
 * @description Alias of {@link OperationErrors_invalidConnectionRate}.
 * @constant
 * @type {number}
 */
export
const invalidConnectionRate: OperationErrors = OperationErrors.invalidConnectionRate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidConsultPurpose
 * @description The consultPurpose parameter is not valid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidConsultPurpose: OperationErrors = OperationErrors.invalidConsultPurpose; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConsultPurpose
 * @description Alias of {@link OperationErrors_invalidConsultPurpose}.
 * @constant
 * @type {number}
 */
export
const invalidConsultPurpose: OperationErrors = OperationErrors.invalidConsultPurpose; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCorrelatorData
 * @description The Correlator Data parameter is not valid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCorrelatorData: OperationErrors = OperationErrors.invalidCorrelatorData; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCorrelatorData
 * @description Alias of {@link OperationErrors_invalidCorrelatorData}.
 * @constant
 * @type {number}
 */
export
const invalidCorrelatorData: OperationErrors = OperationErrors.invalidCorrelatorData; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCrossRefID
 * @description
 * The service request specified a Cross Reference Identifier that is not in
 * use. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCrossRefID: OperationErrors = OperationErrors.invalidCrossRefID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCrossRefID
 * @description Alias of {@link OperationErrors_invalidCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidCrossRefID: OperationErrors = OperationErrors.invalidCrossRefID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDelayTolerance
 * @description The delayTolerance parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDelayTolerance: OperationErrors = OperationErrors.invalidDelayTolerance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDelayTolerance
 * @description Alias of {@link OperationErrors_invalidDelayTolerance}.
 * @constant
 * @type {number}
 */
export
const invalidDelayTolerance: OperationErrors = OperationErrors.invalidDelayTolerance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDestination
 * @description
 * calledDirectoryNumber, newDestination, or routeSelected is invalid.
 * Forwarding destinations use invalidForwardingDestination instead. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDestination: OperationErrors = OperationErrors.invalidDestination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestination
 * @description Alias of {@link OperationErrors_invalidDestination}.
 * @constant
 * @type {number}
 */
export
const invalidDestination: OperationErrors = OperationErrors.invalidDestination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDestinationDetect
 * @description The destinationDetect parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDestinationDetect: OperationErrors = OperationErrors.invalidDestinationDetect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationDetect
 * @description Alias of {@link OperationErrors_invalidDestinationDetect}.
 * @constant
 * @type {number}
 */
export
const invalidDestinationDetect: OperationErrors = OperationErrors.invalidDestinationDetect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDoNotDisturb
 * @description The do-not-disturb setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDoNotDisturb: OperationErrors = OperationErrors.invalidDoNotDisturb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDoNotDisturb
 * @description Alias of {@link OperationErrors_invalidDoNotDisturb}.
 * @constant
 * @type {number}
 */
export
const invalidDoNotDisturb: OperationErrors = OperationErrors.invalidDoNotDisturb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidEscapeCrossRefID
 * @description
 * The escape registration request identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidEscapeCrossRefID: OperationErrors = OperationErrors.invalidEscapeCrossRefID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidEscapeCrossRefID
 * @description Alias of {@link OperationErrors_invalidEscapeCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidEscapeCrossRefID: OperationErrors = OperationErrors.invalidEscapeCrossRefID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidFeature
 * @description
 * The requested feature is invalid or unsupported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidFeature: OperationErrors = OperationErrors.invalidFeature; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidFeature
 * @description Alias of {@link OperationErrors_invalidFeature}.
 * @constant
 * @type {number}
 */
export
const invalidFeature: OperationErrors = OperationErrors.invalidFeature; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidFile
 * @description The specified file is not accessible. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidFile: OperationErrors = OperationErrors.invalidFile; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidFile
 * @description Alias of {@link OperationErrors_invalidFile}.
 * @constant
 * @type {number}
 */
export
const invalidFile: OperationErrors = OperationErrors.invalidFile; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidFlowDirection
 * @description The flowDirection parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidFlowDirection: OperationErrors = OperationErrors.invalidFlowDirection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidFlowDirection
 * @description Alias of {@link OperationErrors_invalidFlowDirection}.
 * @constant
 * @type {number}
 */
export
const invalidFlowDirection: OperationErrors = OperationErrors.invalidFlowDirection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidForwardingDestination
 * @description
 * The forwarding destination device is not valid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidForwardingDestination: OperationErrors = OperationErrors.invalidForwardingDestination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidForwardingDestination
 * @description Alias of {@link OperationErrors_invalidForwardingDestination}.
 * @constant
 * @type {number}
 */
export
const invalidForwardingDestination: OperationErrors = OperationErrors.invalidForwardingDestination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidForwardingFlag
 * @description The forwarding flag is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidForwardingFlag: OperationErrors = OperationErrors.invalidForwardingFlag; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidForwardingFlag
 * @description Alias of {@link OperationErrors_invalidForwardingFlag}.
 * @constant
 * @type {number}
 */
export
const invalidForwardingFlag: OperationErrors = OperationErrors.invalidForwardingFlag; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidForwardingType
 * @description The forwarding type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidForwardingType: OperationErrors = OperationErrors.invalidForwardingType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidForwardingType
 * @description Alias of {@link OperationErrors_invalidForwardingType}.
 * @constant
 * @type {number}
 */
export
const invalidForwardingType: OperationErrors = OperationErrors.invalidForwardingType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHookswitchType
 * @description A hookswitch type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHookswitchType: OperationErrors = OperationErrors.invalidHookswitchType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHookswitchType
 * @description Alias of {@link OperationErrors_invalidHookswitchType}.
 * @constant
 * @type {number}
 */
export
const invalidHookswitchType: OperationErrors = OperationErrors.invalidHookswitchType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHookswitchComponent
 * @description A hookswitch component is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHookswitchComponent: OperationErrors = OperationErrors.invalidHookswitchComponent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHookswitchComponent
 * @description Alias of {@link OperationErrors_invalidHookswitchComponent}.
 * @constant
 * @type {number}
 */
export
const invalidHookswitchComponent: OperationErrors = OperationErrors.invalidHookswitchComponent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidLampMode
 * @description A lamp mode is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidLampMode: OperationErrors = OperationErrors.invalidLampMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidLampMode
 * @description Alias of {@link OperationErrors_invalidLampMode}.
 * @constant
 * @type {number}
 */
export
const invalidLampMode: OperationErrors = OperationErrors.invalidLampMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidLampID
 * @description A lamp identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidLampID: OperationErrors = OperationErrors.invalidLampID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidLampID
 * @description Alias of {@link OperationErrors_invalidLampID}.
 * @constant
 * @type {number}
 */
export
const invalidLampID: OperationErrors = OperationErrors.invalidLampID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMessageWaitingSetting
 * @description
 * A message-waiting setting is invalid (messageWaitingOn). ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMessageWaitingSetting: OperationErrors = OperationErrors.invalidMessageWaitingSetting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMessageWaitingSetting
 * @description Alias of {@link OperationErrors_invalidMessageWaitingSetting}.
 * @constant
 * @type {number}
 */
export
const invalidMessageWaitingSetting: OperationErrors = OperationErrors.invalidMessageWaitingSetting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMicrophoneGain
 * @description A microphone gain setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMicrophoneGain: OperationErrors = OperationErrors.invalidMicrophoneGain; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMicrophoneGain
 * @description Alias of {@link OperationErrors_invalidMicrophoneGain}.
 * @constant
 * @type {number}
 */
export
const invalidMicrophoneGain: OperationErrors = OperationErrors.invalidMicrophoneGain; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMicrophoneMute
 * @description A microphone mute setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMicrophoneMute: OperationErrors = OperationErrors.invalidMicrophoneMute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMicrophoneMute
 * @description Alias of {@link OperationErrors_invalidMicrophoneMute}.
 * @constant
 * @type {number}
 */
export
const invalidMicrophoneMute: OperationErrors = OperationErrors.invalidMicrophoneMute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorCrossRefID
 * @description
 * The monitor cross-reference identifier is not in use. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorCrossRefID: OperationErrors = OperationErrors.invalidMonitorCrossRefID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorCrossRefID
 * @description Alias of {@link OperationErrors_invalidMonitorCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorCrossRefID: OperationErrors = OperationErrors.invalidMonitorCrossRefID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorFilter
 * @description The monitor filter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorFilter: OperationErrors = OperationErrors.invalidMonitorFilter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorFilter
 * @description Alias of {@link OperationErrors_invalidMonitorFilter}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorFilter: OperationErrors = OperationErrors.invalidMonitorFilter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorObject
 * @description The monitor object is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorObject: OperationErrors = OperationErrors.invalidMonitorObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorObject
 * @description Alias of {@link OperationErrors_invalidMonitorObject}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorObject: OperationErrors = OperationErrors.invalidMonitorObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorType
 * @description The monitor type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorType: OperationErrors = OperationErrors.invalidMonitorType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorType
 * @description Alias of {@link OperationErrors_invalidMonitorType}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorType: OperationErrors = OperationErrors.invalidMonitorType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidNumberOFChannels
 * @description The numberOfChannels parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidNumberOFChannels: OperationErrors = OperationErrors.invalidNumberOFChannels; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNumberOFChannels
 * @description Alias of {@link OperationErrors_invalidNumberOFChannels}.
 * @constant
 * @type {number}
 */
export
const invalidNumberOFChannels: OperationErrors = OperationErrors.invalidNumberOFChannels; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidParticipationType
 * @description The participationType parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidParticipationType: OperationErrors = OperationErrors.invalidParticipationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParticipationType
 * @description Alias of {@link OperationErrors_invalidParticipationType}.
 * @constant
 * @type {number}
 */
export
const invalidParticipationType: OperationErrors = OperationErrors.invalidParticipationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRemainRetry
 * @description The remainRetry parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRemainRetry: OperationErrors = OperationErrors.invalidRemainRetry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRemainRetry
 * @description Alias of {@link OperationErrors_invalidRemainRetry}.
 * @constant
 * @type {number}
 */
export
const invalidRemainRetry: OperationErrors = OperationErrors.invalidRemainRetry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRingCount
 * @description The ring-count setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRingCount: OperationErrors = OperationErrors.invalidRingCount; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRingCount
 * @description Alias of {@link OperationErrors_invalidRingCount}.
 * @constant
 * @type {number}
 */
export
const invalidRingCount: OperationErrors = OperationErrors.invalidRingCount; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRingPattern
 * @description A ring-pattern setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRingPattern: OperationErrors = OperationErrors.invalidRingPattern; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRingPattern
 * @description Alias of {@link OperationErrors_invalidRingPattern}.
 * @constant
 * @type {number}
 */
export
const invalidRingPattern: OperationErrors = OperationErrors.invalidRingPattern; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRingVolume
 * @description A ring-volume setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRingVolume: OperationErrors = OperationErrors.invalidRingVolume; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRingVolume
 * @description Alias of {@link OperationErrors_invalidRingVolume}.
 * @constant
 * @type {number}
 */
export
const invalidRingVolume: OperationErrors = OperationErrors.invalidRingVolume; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRouteingAlgorithm
 * @description
 * The computing function does not support the routeing algorithm. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRouteingAlgorithm: OperationErrors = OperationErrors.invalidRouteingAlgorithm; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRouteingAlgorithm
 * @description Alias of {@link OperationErrors_invalidRouteingAlgorithm}.
 * @constant
 * @type {number}
 */
export
const invalidRouteingAlgorithm: OperationErrors = OperationErrors.invalidRouteingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRouteingCrossRefID
 * @description
 * The routeing cross-reference identifier is not in use. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRouteingCrossRefID: OperationErrors = OperationErrors.invalidRouteingCrossRefID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRouteingCrossRefID
 * @description Alias of {@link OperationErrors_invalidRouteingCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidRouteingCrossRefID: OperationErrors = OperationErrors.invalidRouteingCrossRefID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRouteRegistrationCrossRefID
 * @description
 * The route registration request identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRouteRegistrationCrossRefID: OperationErrors = OperationErrors.invalidRouteRegistrationCrossRefID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRouteRegistrationCrossRefID
 * @description
 * Alias of {@link OperationErrors_invalidRouteRegistrationCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidRouteRegistrationCrossRefID: OperationErrors = OperationErrors.invalidRouteRegistrationCrossRefID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidSpeakerVolume
 * @description A speaker volume is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidSpeakerVolume: OperationErrors = OperationErrors.invalidSpeakerVolume; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSpeakerVolume
 * @description Alias of {@link OperationErrors_invalidSpeakerVolume}.
 * @constant
 * @type {number}
 */
export
const invalidSpeakerVolume: OperationErrors = OperationErrors.invalidSpeakerVolume; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidSpeakerMute
 * @description A speaker mute setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidSpeakerMute: OperationErrors = OperationErrors.invalidSpeakerMute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSpeakerMute
 * @description Alias of {@link OperationErrors_invalidSpeakerMute}.
 * @constant
 * @type {number}
 */
export
const invalidSpeakerMute: OperationErrors = OperationErrors.invalidSpeakerMute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidSwitchingSubdomainCharsType
 * @description
 * The switchingSubDomainCCIEType parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidSwitchingSubdomainCharsType: OperationErrors = OperationErrors.invalidSwitchingSubdomainCharsType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSwitchingSubdomainCharsType
 * @description
 * Alias of {@link OperationErrors_invalidSwitchingSubdomainCharsType}.
 * @constant
 * @type {number}
 */
export
const invalidSwitchingSubdomainCharsType: OperationErrors = OperationErrors.invalidSwitchingSubdomainCharsType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidObjectType
 * @description
 * A parameter has an object type other than the defined type. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidObjectType: OperationErrors = OperationErrors.invalidObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidObjectType
 * @description Alias of {@link OperationErrors_invalidObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidObjectType: OperationErrors = OperationErrors.invalidObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidActiveCallObject
 * @description
 * activeCall or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidActiveCallObject: OperationErrors = OperationErrors.invalidActiveCallObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveCallObject
 * @description Alias of {@link OperationErrors_invalidActiveCallObject}.
 * @constant
 * @type {number}
 */
export
const invalidActiveCallObject: OperationErrors = OperationErrors.invalidActiveCallObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCalledDeviceObjectType
 * @description calledDevice is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCalledDeviceObjectType: OperationErrors = OperationErrors.invalidCalledDeviceObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCalledDeviceObjectType
 * @description Alias of {@link OperationErrors_invalidCalledDeviceObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCalledDeviceObjectType: OperationErrors = OperationErrors.invalidCalledDeviceObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallingDeviceObjectType
 * @description callingDevice is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallingDeviceObjectType: OperationErrors = OperationErrors.invalidCallingDeviceObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallingDeviceObjectType
 * @description Alias of {@link OperationErrors_invalidCallingDeviceObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallingDeviceObjectType: OperationErrors = OperationErrors.invalidCallingDeviceObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallToBePickedUpObjectType
 * @description
 * callToBePickedUp or a component is not of the proper type. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallToBePickedUpObjectType: OperationErrors = OperationErrors.invalidCallToBePickedUpObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToBePickedUpObjectType
 * @description
 * Alias of {@link OperationErrors_invalidCallToBePickedUpObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallToBePickedUpObjectType: OperationErrors = OperationErrors.invalidCallToBePickedUpObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallToDivertObjectType
 * @description callToBeDiverted is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallToDivertObjectType: OperationErrors = OperationErrors.invalidCallToDivertObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToDivertObjectType
 * @description Alias of {@link OperationErrors_invalidCallToDivertObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallToDivertObjectType: OperationErrors = OperationErrors.invalidCallToDivertObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallToParkObjectType
 * @description
 * callToPark or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallToParkObjectType: OperationErrors = OperationErrors.invalidCallToParkObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToParkObjectType
 * @description Alias of {@link OperationErrors_invalidCallToParkObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallToParkObjectType: OperationErrors = OperationErrors.invalidCallToParkObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDestinationDeviceObject
 * @description
 * newDestination or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDestinationDeviceObject: OperationErrors = OperationErrors.invalidDestinationDeviceObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationDeviceObject
 * @description Alias of {@link OperationErrors_invalidDestinationDeviceObject}.
 * @constant
 * @type {number}
 */
export
const invalidDestinationDeviceObject: OperationErrors = OperationErrors.invalidDestinationDeviceObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHeldCallObject
 * @description
 * heldCall or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHeldCallObject: OperationErrors = OperationErrors.invalidHeldCallObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldCallObject
 * @description Alias of {@link OperationErrors_invalidHeldCallObject}.
 * @constant
 * @type {number}
 */
export
const invalidHeldCallObject: OperationErrors = OperationErrors.invalidHeldCallObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorObjectType
 * @description The monitorObject type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorObjectType: OperationErrors = OperationErrors.invalidMonitorObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorObjectType
 * @description Alias of {@link OperationErrors_invalidMonitorObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorObjectType: OperationErrors = OperationErrors.invalidMonitorObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidParkToObjectType
 * @description parkTo is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidParkToObjectType: OperationErrors = OperationErrors.invalidParkToObjectType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParkToObjectType
 * @description Alias of {@link OperationErrors_invalidParkToObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidParkToObjectType: OperationErrors = OperationErrors.invalidParkToObjectType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_messageIDRequired
 * @description The request requires a Message Identifier. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_messageIDRequired: OperationErrors = OperationErrors.messageIDRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageIDRequired
 * @description Alias of {@link OperationErrors_messageIDRequired}.
 * @constant
 * @type {number}
 */
export
const messageIDRequired: OperationErrors = OperationErrors.messageIDRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_notDifferentDevices
 * @description
 * Parameters that shall name different devices do not. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_notDifferentDevices: OperationErrors = OperationErrors.notDifferentDevices; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notDifferentDevices
 * @description Alias of {@link OperationErrors_notDifferentDevices}.
 * @constant
 * @type {number}
 */
export
const notDifferentDevices: OperationErrors = OperationErrors.notDifferentDevices; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_notSameDevice
 * @description
 * Parameters that shall name the same device do not. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_notSameDevice: OperationErrors = OperationErrors.notSameDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSameDevice
 * @description Alias of {@link OperationErrors_notSameDevice}.
 * @constant
 * @type {number}
 */
export
const notSameDevice: OperationErrors = OperationErrors.notSameDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_objectNotKnown
 * @description
 * A connection, device, or call value is not known. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_objectNotKnown: OperationErrors = OperationErrors.objectNotKnown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectNotKnown
 * @description Alias of {@link OperationErrors_objectNotKnown}.
 * @constant
 * @type {number}
 */
export
const objectNotKnown: OperationErrors = OperationErrors.objectNotKnown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallID
 * @description
 * A call identifier (or CallID in a ConnectionID) is invalid or unknown.
 * ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallID: OperationErrors = OperationErrors.invalidCallID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallID
 * @description Alias of {@link OperationErrors_invalidCallID}.
 * @constant
 * @type {number}
 */
export
const invalidCallID: OperationErrors = OperationErrors.invalidCallID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidActiveCallID
 * @description
 * The CallID in the activeCall connection is not a valid call. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidActiveCallID: OperationErrors = OperationErrors.invalidActiveCallID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveCallID
 * @description Alias of {@link OperationErrors_invalidActiveCallID}.
 * @constant
 * @type {number}
 */
export
const invalidActiveCallID: OperationErrors = OperationErrors.invalidActiveCallID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHeldCallID
 * @description
 * The CallID in the heldCall connection is not a valid call. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHeldCallID: OperationErrors = OperationErrors.invalidHeldCallID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldCallID
 * @description Alias of {@link OperationErrors_invalidHeldCallID}.
 * @constant
 * @type {number}
 */
export
const invalidHeldCallID: OperationErrors = OperationErrors.invalidHeldCallID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidConnectionID
 * @description
 * A connection identifier or a component of it is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidConnectionID: OperationErrors = OperationErrors.invalidConnectionID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionID
 * @description Alias of {@link OperationErrors_invalidConnectionID}.
 * @constant
 * @type {number}
 */
export
const invalidConnectionID: OperationErrors = OperationErrors.invalidConnectionID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidActiveConnectionID
 * @description
 * The activeCall connection does not specify a valid call. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidActiveConnectionID: OperationErrors = OperationErrors.invalidActiveConnectionID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveConnectionID
 * @description Alias of {@link OperationErrors_invalidActiveConnectionID}.
 * @constant
 * @type {number}
 */
export
const invalidActiveConnectionID: OperationErrors = OperationErrors.invalidActiveConnectionID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHeldConnectionID
 * @description
 * The heldCall connection does not specify a valid call. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHeldConnectionID: OperationErrors = OperationErrors.invalidHeldConnectionID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldConnectionID
 * @description Alias of {@link OperationErrors_invalidHeldConnectionID}.
 * @constant
 * @type {number}
 */
export
const invalidHeldConnectionID: OperationErrors = OperationErrors.invalidHeldConnectionID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDeviceID
 * @description
 * A device identifier (or DeviceID in a ConnectionID) is invalid or unknown.
 * ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDeviceID: OperationErrors = OperationErrors.invalidDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDeviceID
 * @description Alias of {@link OperationErrors_invalidDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidDeviceID: OperationErrors = OperationErrors.invalidDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidActiveDeviceID
 * @description
 * The DeviceID in the activeCall connection is not a valid device. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidActiveDeviceID: OperationErrors = OperationErrors.invalidActiveDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveDeviceID
 * @description Alias of {@link OperationErrors_invalidActiveDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidActiveDeviceID: OperationErrors = OperationErrors.invalidActiveDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCalledDeviceID
 * @description The called device parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCalledDeviceID: OperationErrors = OperationErrors.invalidCalledDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCalledDeviceID
 * @description Alias of {@link OperationErrors_invalidCalledDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidCalledDeviceID: OperationErrors = OperationErrors.invalidCalledDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallingDeviceID
 * @description The calling device parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallingDeviceID: OperationErrors = OperationErrors.invalidCallingDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallingDeviceID
 * @description Alias of {@link OperationErrors_invalidCallingDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidCallingDeviceID: OperationErrors = OperationErrors.invalidCallingDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallToParkDeviceID
 * @description
 * The DeviceID in the callToPark connection is not a valid device. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallToParkDeviceID: OperationErrors = OperationErrors.invalidCallToParkDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToParkDeviceID
 * @description Alias of {@link OperationErrors_invalidCallToParkDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidCallToParkDeviceID: OperationErrors = OperationErrors.invalidCallToParkDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDestinationDeviceID
 * @description
 * The DeviceID in newDestination is not a valid device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDestinationDeviceID: OperationErrors = OperationErrors.invalidDestinationDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationDeviceID
 * @description Alias of {@link OperationErrors_invalidDestinationDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidDestinationDeviceID: OperationErrors = OperationErrors.invalidDestinationDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDivertingDeviceID
 * @description The diverting device identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDivertingDeviceID: OperationErrors = OperationErrors.invalidDivertingDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDivertingDeviceID
 * @description Alias of {@link OperationErrors_invalidDivertingDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidDivertingDeviceID: OperationErrors = OperationErrors.invalidDivertingDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHeldDeviceID
 * @description
 * The DeviceID in the heldCall connection is not a valid device. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHeldDeviceID: OperationErrors = OperationErrors.invalidHeldDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldDeviceID
 * @description Alias of {@link OperationErrors_invalidHeldDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidHeldDeviceID: OperationErrors = OperationErrors.invalidHeldDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidParkToDeviceID
 * @description parkTo does not specify a valid device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidParkToDeviceID: OperationErrors = OperationErrors.invalidParkToDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParkToDeviceID
 * @description Alias of {@link OperationErrors_invalidParkToDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidParkToDeviceID: OperationErrors = OperationErrors.invalidParkToDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidPickUpDeviceID
 * @description
 * The DeviceID in callToBePickedUp is not a valid device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidPickUpDeviceID: OperationErrors = OperationErrors.invalidPickUpDeviceID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidPickUpDeviceID
 * @description Alias of {@link OperationErrors_invalidPickUpDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidPickUpDeviceID: OperationErrors = OperationErrors.invalidPickUpDeviceID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_parameterNotSupported
 * @description
 * The switching function does not support a parameter. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_parameterNotSupported: OperationErrors = OperationErrors.parameterNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parameterNotSupported
 * @description Alias of {@link OperationErrors_parameterNotSupported}.
 * @constant
 * @type {number}
 */
export
const parameterNotSupported: OperationErrors = OperationErrors.parameterNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_accountCodeNotSupported
 * @description accountCode is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_accountCodeNotSupported: OperationErrors = OperationErrors.accountCodeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accountCodeNotSupported
 * @description Alias of {@link OperationErrors_accountCodeNotSupported}.
 * @constant
 * @type {number}
 */
export
const accountCodeNotSupported: OperationErrors = OperationErrors.accountCodeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentGroupNotSupported
 * @description The agent group parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentGroupNotSupported: OperationErrors = OperationErrors.agentGroupNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentGroupNotSupported
 * @description Alias of {@link OperationErrors_agentGroupNotSupported}.
 * @constant
 * @type {number}
 */
export
const agentGroupNotSupported: OperationErrors = OperationErrors.agentGroupNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentPasswordNotSupported
 * @description
 * The agent password parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentPasswordNotSupported: OperationErrors = OperationErrors.agentPasswordNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentPasswordNotSupported
 * @description Alias of {@link OperationErrors_agentPasswordNotSupported}.
 * @constant
 * @type {number}
 */
export
const agentPasswordNotSupported: OperationErrors = OperationErrors.agentPasswordNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentStateNotSupported
 * @description The agent state is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentStateNotSupported: OperationErrors = OperationErrors.agentStateNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentStateNotSupported
 * @description Alias of {@link OperationErrors_agentStateNotSupported}.
 * @constant
 * @type {number}
 */
export
const agentStateNotSupported: OperationErrors = OperationErrors.agentStateNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_alertTimeNotSupported
 * @description alertTime is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_alertTimeNotSupported: OperationErrors = OperationErrors.alertTimeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeNotSupported
 * @description Alias of {@link OperationErrors_alertTimeNotSupported}.
 * @constant
 * @type {number}
 */
export
const alertTimeNotSupported: OperationErrors = OperationErrors.alertTimeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_allocationNotSupported
 * @description The allocation parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_allocationNotSupported: OperationErrors = OperationErrors.allocationNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allocationNotSupported
 * @description Alias of {@link OperationErrors_allocationNotSupported}.
 * @constant
 * @type {number}
 */
export
const allocationNotSupported: OperationErrors = OperationErrors.allocationNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_authorisationCodeNotSupported
 * @description The authorization code is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_authorisationCodeNotSupported: OperationErrors = OperationErrors.authorisationCodeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorisationCodeNotSupported
 * @description Alias of {@link OperationErrors_authorisationCodeNotSupported}.
 * @constant
 * @type {number}
 */
export
const authorisationCodeNotSupported: OperationErrors = OperationErrors.authorisationCodeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_autoAnswerNotSupported
 * @description autoAnswer is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_autoAnswerNotSupported: OperationErrors = OperationErrors.autoAnswerNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoAnswerNotSupported
 * @description Alias of {@link OperationErrors_autoAnswerNotSupported}.
 * @constant
 * @type {number}
 */
export
const autoAnswerNotSupported: OperationErrors = OperationErrors.autoAnswerNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_bitRateNotSupported
 * @description bitRate is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_bitRateNotSupported: OperationErrors = OperationErrors.bitRateNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bitRateNotSupported
 * @description Alias of {@link OperationErrors_bitRateNotSupported}.
 * @constant
 * @type {number}
 */
export
const bitRateNotSupported: OperationErrors = OperationErrors.bitRateNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_buttonNotSupported
 * @description The button parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_buttonNotSupported: OperationErrors = OperationErrors.buttonNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary buttonNotSupported
 * @description Alias of {@link OperationErrors_buttonNotSupported}.
 * @constant
 * @type {number}
 */
export
const buttonNotSupported: OperationErrors = OperationErrors.buttonNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_callTypeNotSupported
 * @description callType is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_callTypeNotSupported: OperationErrors = OperationErrors.callTypeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTypeNotSupported
 * @description Alias of {@link OperationErrors_callTypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const callTypeNotSupported: OperationErrors = OperationErrors.callTypeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_charactersToSendNotSupported
 * @description charactersToSend is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_charactersToSendNotSupported: OperationErrors = OperationErrors.charactersToSendNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary charactersToSendNotSupported
 * @description Alias of {@link OperationErrors_charactersToSendNotSupported}.
 * @constant
 * @type {number}
 */
export
const charactersToSendNotSupported: OperationErrors = OperationErrors.charactersToSendNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionRateNotSupported
 * @description connectionRate is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionRateNotSupported: OperationErrors = OperationErrors.connectionRateNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionRateNotSupported
 * @description Alias of {@link OperationErrors_connectionRateNotSupported}.
 * @constant
 * @type {number}
 */
export
const connectionRateNotSupported: OperationErrors = OperationErrors.connectionRateNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionReservationNotSupported
 * @description connectionReservation is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionReservationNotSupported: OperationErrors = OperationErrors.connectionReservationNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionReservationNotSupported
 * @description
 * Alias of {@link OperationErrors_connectionReservationNotSupported}.
 * @constant
 * @type {number}
 */
export
const connectionReservationNotSupported: OperationErrors = OperationErrors.connectionReservationNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_consultPurposeNotSupported
 * @description consultPurpose is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_consultPurposeNotSupported: OperationErrors = OperationErrors.consultPurposeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultPurposeNotSupported
 * @description Alias of {@link OperationErrors_consultPurposeNotSupported}.
 * @constant
 * @type {number}
 */
export
const consultPurposeNotSupported: OperationErrors = OperationErrors.consultPurposeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_correlatorDataNotSupported
 * @description Correlator data is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_correlatorDataNotSupported: OperationErrors = OperationErrors.correlatorDataNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary correlatorDataNotSupported
 * @description Alias of {@link OperationErrors_correlatorDataNotSupported}.
 * @constant
 * @type {number}
 */
export
const correlatorDataNotSupported: OperationErrors = OperationErrors.correlatorDataNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_delayToleranceNotSupported
 * @description delayTolerance is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_delayToleranceNotSupported: OperationErrors = OperationErrors.delayToleranceNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delayToleranceNotSupported
 * @description Alias of {@link OperationErrors_delayToleranceNotSupported}.
 * @constant
 * @type {number}
 */
export
const delayToleranceNotSupported: OperationErrors = OperationErrors.delayToleranceNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_destinationDetectNotSupported
 * @description destinationDetect is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_destinationDetectNotSupported: OperationErrors = OperationErrors.destinationDetectNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDetectNotSupported
 * @description Alias of {@link OperationErrors_destinationDetectNotSupported}.
 * @constant
 * @type {number}
 */
export
const destinationDetectNotSupported: OperationErrors = OperationErrors.destinationDetectNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_digitModeNotSupported
 * @description digitMode is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_digitModeNotSupported: OperationErrors = OperationErrors.digitModeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitModeNotSupported
 * @description Alias of {@link OperationErrors_digitModeNotSupported}.
 * @constant
 * @type {number}
 */
export
const digitModeNotSupported: OperationErrors = OperationErrors.digitModeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_errorValueNotSupported
 * @description errorValue is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_errorValueNotSupported: OperationErrors = OperationErrors.errorValueNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorValueNotSupported
 * @description Alias of {@link OperationErrors_errorValueNotSupported}.
 * @constant
 * @type {number}
 */
export
const errorValueNotSupported: OperationErrors = OperationErrors.errorValueNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_flowDirectionNotSupported
 * @description flowDirection is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_flowDirectionNotSupported: OperationErrors = OperationErrors.flowDirectionNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowDirectionNotSupported
 * @description Alias of {@link OperationErrors_flowDirectionNotSupported}.
 * @constant
 * @type {number}
 */
export
const flowDirectionNotSupported: OperationErrors = OperationErrors.flowDirectionNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_forwardingDestinationNotSupported
 * @description
 * The forwarding destination parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_forwardingDestinationNotSupported: OperationErrors = OperationErrors.forwardingDestinationNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingDestinationNotSupported
 * @description
 * Alias of {@link OperationErrors_forwardingDestinationNotSupported}.
 * @constant
 * @type {number}
 */
export
const forwardingDestinationNotSupported: OperationErrors = OperationErrors.forwardingDestinationNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_lampNotSupported
 * @description The lamp parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_lampNotSupported: OperationErrors = OperationErrors.lampNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lampNotSupported
 * @description Alias of {@link OperationErrors_lampNotSupported}.
 * @constant
 * @type {number}
 */
export
const lampNotSupported: OperationErrors = OperationErrors.lampNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_monitorTypeNotSupported
 * @description The monitor type is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_monitorTypeNotSupported: OperationErrors = OperationErrors.monitorTypeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitorTypeNotSupported
 * @description Alias of {@link OperationErrors_monitorTypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const monitorTypeNotSupported: OperationErrors = OperationErrors.monitorTypeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_numberOfChannelsNotSupported
 * @description numberOfChannels is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_numberOfChannelsNotSupported: OperationErrors = OperationErrors.numberOfChannelsNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfChannelsNotSupported
 * @description Alias of {@link OperationErrors_numberOfChannelsNotSupported}.
 * @constant
 * @type {number}
 */
export
const numberOfChannelsNotSupported: OperationErrors = OperationErrors.numberOfChannelsNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_parameterTypeNotSupported
 * @description
 * The participationType parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_parameterTypeNotSupported: OperationErrors = OperationErrors.parameterTypeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parameterTypeNotSupported
 * @description Alias of {@link OperationErrors_parameterTypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const parameterTypeNotSupported: OperationErrors = OperationErrors.parameterTypeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_priorityNotSupported
 * @description The priority parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_priorityNotSupported: OperationErrors = OperationErrors.priorityNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priorityNotSupported
 * @description Alias of {@link OperationErrors_priorityNotSupported}.
 * @constant
 * @type {number}
 */
export
const priorityNotSupported: OperationErrors = OperationErrors.priorityNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privateDataNotSupported
 * @description privateData is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privateDataNotSupported: OperationErrors = OperationErrors.privateDataNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privateDataNotSupported
 * @description Alias of {@link OperationErrors_privateDataNotSupported}.
 * @constant
 * @type {number}
 */
export
const privateDataNotSupported: OperationErrors = OperationErrors.privateDataNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseDurationNotSupported
 * @description pulseDuration is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseDurationNotSupported: OperationErrors = OperationErrors.pulseDurationNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseDurationNotSupported
 * @description Alias of {@link OperationErrors_pulseDurationNotSupported}.
 * @constant
 * @type {number}
 */
export
const pulseDurationNotSupported: OperationErrors = OperationErrors.pulseDurationNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseRateNotSupported
 * @description pulseRate is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseRateNotSupported: OperationErrors = OperationErrors.pulseRateNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseRateNotSupported
 * @description Alias of {@link OperationErrors_pulseRateNotSupported}.
 * @constant
 * @type {number}
 */
export
const pulseRateNotSupported: OperationErrors = OperationErrors.pulseRateNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_remainRetryNotSupported
 * @description remainRetry is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_remainRetryNotSupported: OperationErrors = OperationErrors.remainRetryNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainRetryNotSupported
 * @description Alias of {@link OperationErrors_remainRetryNotSupported}.
 * @constant
 * @type {number}
 */
export
const remainRetryNotSupported: OperationErrors = OperationErrors.remainRetryNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringCountNotSupported
 * @description ringCount is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringCountNotSupported: OperationErrors = OperationErrors.ringCountNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringCountNotSupported
 * @description Alias of {@link OperationErrors_ringCountNotSupported}.
 * @constant
 * @type {number}
 */
export
const ringCountNotSupported: OperationErrors = OperationErrors.ringCountNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_routeUsedNotSupported
 * @description routeUsed is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_routeUsedNotSupported: OperationErrors = OperationErrors.routeUsedNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeUsedNotSupported
 * @description Alias of {@link OperationErrors_routeUsedNotSupported}.
 * @constant
 * @type {number}
 */
export
const routeUsedNotSupported: OperationErrors = OperationErrors.routeUsedNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_securityNotSupported
 * @description The security parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_securityNotSupported: OperationErrors = OperationErrors.securityNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityNotSupported
 * @description Alias of {@link OperationErrors_securityNotSupported}.
 * @constant
 * @type {number}
 */
export
const securityNotSupported: OperationErrors = OperationErrors.securityNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_swSubdomainCCIETypeNotSupported
 * @description
 * switchingSubDomainCCIEType is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_swSubdomainCCIETypeNotSupported: OperationErrors = OperationErrors.swSubdomainCCIETypeNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swSubdomainCCIETypeNotSupported
 * @description
 * Alias of {@link OperationErrors_swSubdomainCCIETypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const swSubdomainCCIETypeNotSupported: OperationErrors = OperationErrors.swSubdomainCCIETypeNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_toneDurationNotSupported
 * @description toneDuration is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_toneDurationNotSupported: OperationErrors = OperationErrors.toneDurationNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneDurationNotSupported
 * @description Alias of {@link OperationErrors_toneDurationNotSupported}.
 * @constant
 * @type {number}
 */
export
const toneDurationNotSupported: OperationErrors = OperationErrors.toneDurationNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_sysStatRegIDNotSupported
 * @description sysStatRegID is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_sysStatRegIDNotSupported: OperationErrors = OperationErrors.sysStatRegIDNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sysStatRegIDNotSupported
 * @description Alias of {@link OperationErrors_sysStatRegIDNotSupported}.
 * @constant
 * @type {number}
 */
export
const sysStatRegIDNotSupported: OperationErrors = OperationErrors.sysStatRegIDNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_userDataNotSupported
 * @description userData is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_userDataNotSupported: OperationErrors = OperationErrors.userDataNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDataNotSupported
 * @description Alias of {@link OperationErrors_userDataNotSupported}.
 * @constant
 * @type {number}
 */
export
const userDataNotSupported: OperationErrors = OperationErrors.userDataNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationSpecifiedDevice
 * @description
 * Performing the request would result in a privilege violation. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationSpecifiedDevice: OperationErrors = OperationErrors.privilegeViolationSpecifiedDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationSpecifiedDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationSpecifiedDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationSpecifiedDevice: OperationErrors = OperationErrors.privilegeViolationSpecifiedDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationActiveDevice
 * @description
 * Would violate a restriction on the device in activeCall. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationActiveDevice: OperationErrors = OperationErrors.privilegeViolationActiveDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationActiveDevice
 * @description Alias of {@link OperationErrors_privilegeViolationActiveDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationActiveDevice: OperationErrors = OperationErrors.privilegeViolationActiveDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationCalledDevice
 * @description
 * Would violate a restriction that limits the called device. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationCalledDevice: OperationErrors = OperationErrors.privilegeViolationCalledDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationCalledDevice
 * @description Alias of {@link OperationErrors_privilegeViolationCalledDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationCalledDevice: OperationErrors = OperationErrors.privilegeViolationCalledDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationCallingDevice
 * @description
 * Would violate a restriction that limits the calling device. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationCallingDevice: OperationErrors = OperationErrors.privilegeViolationCallingDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationCallingDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationCallingDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationCallingDevice: OperationErrors = OperationErrors.privilegeViolationCallingDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationCallToParkDevice
 * @description
 * Would violate a restriction on the device in callToPark. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationCallToParkDevice: OperationErrors = OperationErrors.privilegeViolationCallToParkDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationCallToParkDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationCallToParkDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationCallToParkDevice: OperationErrors = OperationErrors.privilegeViolationCallToParkDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationDestinationDevice
 * @description
 * Would violate a restriction on newDestination. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationDestinationDevice: OperationErrors = OperationErrors.privilegeViolationDestinationDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationDestinationDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationDestinationDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationDestinationDevice: OperationErrors = OperationErrors.privilegeViolationDestinationDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationOnDivertingDevice
 * @description
 * Would violate a restriction on the diverting device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationOnDivertingDevice: OperationErrors = OperationErrors.privilegeViolationOnDivertingDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationOnDivertingDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationOnDivertingDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationOnDivertingDevice: OperationErrors = OperationErrors.privilegeViolationOnDivertingDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationHeldDevice
 * @description
 * Would violate a restriction on the device in heldCall. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationHeldDevice: OperationErrors = OperationErrors.privilegeViolationHeldDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationHeldDevice
 * @description Alias of {@link OperationErrors_privilegeViolationHeldDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationHeldDevice: OperationErrors = OperationErrors.privilegeViolationHeldDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationOnParkToDevice
 * @description Would violate a restriction on parkTo. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationOnParkToDevice: OperationErrors = OperationErrors.privilegeViolationOnParkToDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationOnParkToDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationOnParkToDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationOnParkToDevice: OperationErrors = OperationErrors.privilegeViolationOnParkToDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationPickUpDevice
 * @description
 * Would violate a restriction on the device in callToBePickedUp. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationPickUpDevice: OperationErrors = OperationErrors.privilegeViolationPickUpDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationPickUpDevice
 * @description Alias of {@link OperationErrors_privilegeViolationPickUpDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationPickUpDevice: OperationErrors = OperationErrors.privilegeViolationPickUpDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_routeingTimerExpired
 * @description
 * The routeing timer or delayed-ringback timer expired. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_routeingTimerExpired: OperationErrors = OperationErrors.routeingTimerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeingTimerExpired
 * @description Alias of {@link OperationErrors_routeingTimerExpired}.
 * @constant
 * @type {number}
 */
export
const routeingTimerExpired: OperationErrors = OperationErrors.routeingTimerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithObject
 * @description
 * The request is not compatible with the corresponding object (not a
 * state-incompatibility error). ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithObject: OperationErrors = OperationErrors.requestIncompatibleWithObject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithObject
 * @description Alias of {@link OperationErrors_requestIncompatibleWithObject}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithObject: OperationErrors = OperationErrors.requestIncompatibleWithObject; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithConnection
 * @description
 * The request is not compatible with a specified connection. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithConnection: OperationErrors = OperationErrors.requestIncompatibleWithConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithConnection
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithConnection}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithConnection: OperationErrors = OperationErrors.requestIncompatibleWithConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithActiveConnection
 * @description
 * Incompatible with the activeCall connection. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithActiveConnection: OperationErrors = OperationErrors.requestIncompatibleWithActiveConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithActiveConnection
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithActiveConnection}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithActiveConnection: OperationErrors = OperationErrors.requestIncompatibleWithActiveConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithHeldConnection
 * @description Incompatible with the heldCall connection. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithHeldConnection: OperationErrors = OperationErrors.requestIncompatibleWithHeldConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithHeldConnection
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithHeldConnection}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithHeldConnection: OperationErrors = OperationErrors.requestIncompatibleWithHeldConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithDevice
 * @description
 * The request is not compatible with a specified device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithDevice: OperationErrors = OperationErrors.requestIncompatibleWithDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithDevice
 * @description Alias of {@link OperationErrors_requestIncompatibleWithDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithDevice: OperationErrors = OperationErrors.requestIncompatibleWithDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithCalledDevice
 * @description Incompatible with the called device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithCalledDevice: OperationErrors = OperationErrors.requestIncompatibleWithCalledDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithCalledDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithCalledDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithCalledDevice: OperationErrors = OperationErrors.requestIncompatibleWithCalledDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithCallingDevice
 * @description Incompatible with the calling device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithCallingDevice: OperationErrors = OperationErrors.requestIncompatibleWithCallingDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithCallingDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithCallingDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithCallingDevice: OperationErrors = OperationErrors.requestIncompatibleWithCallingDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithSubjectDevice
 * @description
 * Incompatible with the subject device (not called or calling). ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithSubjectDevice: OperationErrors = OperationErrors.requestIncompatibleWithSubjectDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithSubjectDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithSubjectDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithSubjectDevice: OperationErrors = OperationErrors.requestIncompatibleWithSubjectDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithActiveDevice
 * @description
 * Incompatible with the device in the activeCall connection. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithActiveDevice: OperationErrors = OperationErrors.requestIncompatibleWithActiveDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithActiveDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithActiveDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithActiveDevice: OperationErrors = OperationErrors.requestIncompatibleWithActiveDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithCallToParkDevice
 * @description Incompatible with the device in callToPark. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithCallToParkDevice: OperationErrors = OperationErrors.requestIncompatibleWithCallToParkDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithCallToParkDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithCallToParkDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithCallToParkDevice: OperationErrors = OperationErrors.requestIncompatibleWithCallToParkDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithDestinationDevice
 * @description
 * Incompatible with the device in newDestination. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithDestinationDevice: OperationErrors = OperationErrors.requestIncompatibleWithDestinationDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithDestinationDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithDestinationDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithDestinationDevice: OperationErrors = OperationErrors.requestIncompatibleWithDestinationDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithDivertingDevice
 * @description
 * Incompatible with the device in callToBeDiverted. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithDivertingDevice: OperationErrors = OperationErrors.requestIncompatibleWithDivertingDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithDivertingDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithDivertingDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithDivertingDevice: OperationErrors = OperationErrors.requestIncompatibleWithDivertingDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithHeldDevice
 * @description Incompatible with the device in heldCall. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithHeldDevice: OperationErrors = OperationErrors.requestIncompatibleWithHeldDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithHeldDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithHeldDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithHeldDevice: OperationErrors = OperationErrors.requestIncompatibleWithHeldDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithMedia
 * @description
 * The media type of the message is incompatible with the device. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithMedia: OperationErrors = OperationErrors.requestIncompatibleWithMedia; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithMedia
 * @description Alias of {@link OperationErrors_requestIncompatibleWithMedia}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithMedia: OperationErrors = OperationErrors.requestIncompatibleWithMedia; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithParkToDevice
 * @description Incompatible with parkTo. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithParkToDevice: OperationErrors = OperationErrors.requestIncompatibleWithParkToDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithParkToDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithParkToDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithParkToDevice: OperationErrors = OperationErrors.requestIncompatibleWithParkToDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithPickupDevice
 * @description
 * Incompatible with the device in callToBePickedUp. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithPickupDevice: OperationErrors = OperationErrors.requestIncompatibleWithPickupDevice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithPickupDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithPickupDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithPickupDevice: OperationErrors = OperationErrors.requestIncompatibleWithPickupDevice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_serviceNotSupported
 * @description The service is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_serviceNotSupported: OperationErrors = OperationErrors.serviceNotSupported; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceNotSupported
 * @description Alias of {@link OperationErrors_serviceNotSupported}.
 * @constant
 * @type {number}
 */
export
const serviceNotSupported: OperationErrors = OperationErrors.serviceNotSupported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_securityViolation
 * @description The service request violates security. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_securityViolation: OperationErrors = OperationErrors.securityViolation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityViolation
 * @description Alias of {@link OperationErrors_securityViolation}.
 * @constant
 * @type {number}
 */
export
const securityViolation: OperationErrors = OperationErrors.securityViolation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_valueOutOfRange
 * @description
 * A non-object parameter is outside its enumeration or range. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_valueOutOfRange: OperationErrors = OperationErrors.valueOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary valueOutOfRange
 * @description Alias of {@link OperationErrors_valueOutOfRange}.
 * @constant
 * @type {number}
 */
export
const valueOutOfRange: OperationErrors = OperationErrors.valueOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentStateOutOfRange
 * @description
 * An agent state is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentStateOutOfRange: OperationErrors = OperationErrors.agentStateOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentStateOutOfRange
 * @description Alias of {@link OperationErrors_agentStateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const agentStateOutOfRange: OperationErrors = OperationErrors.agentStateOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_alertTimeOutOfRange
 * @description alertTime is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_alertTimeOutOfRange: OperationErrors = OperationErrors.alertTimeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeOutOfRange
 * @description Alias of {@link OperationErrors_alertTimeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const alertTimeOutOfRange: OperationErrors = OperationErrors.alertTimeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_allocationOutOfRange
 * @description allocation is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_allocationOutOfRange: OperationErrors = OperationErrors.allocationOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allocationOutOfRange
 * @description Alias of {@link OperationErrors_allocationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const allocationOutOfRange: OperationErrors = OperationErrors.allocationOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_autoAnswerOutOfRange
 * @description autoAnswer is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_autoAnswerOutOfRange: OperationErrors = OperationErrors.autoAnswerOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoAnswerOutOfRange
 * @description Alias of {@link OperationErrors_autoAnswerOutOfRange}.
 * @constant
 * @type {number}
 */
export
const autoAnswerOutOfRange: OperationErrors = OperationErrors.autoAnswerOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_bitRateOutOfRange
 * @description bitRate is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_bitRateOutOfRange: OperationErrors = OperationErrors.bitRateOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bitRateOutOfRange
 * @description Alias of {@link OperationErrors_bitRateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const bitRateOutOfRange: OperationErrors = OperationErrors.bitRateOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_callTypeOutOfRange
 * @description callType is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_callTypeOutOfRange: OperationErrors = OperationErrors.callTypeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTypeOutOfRange
 * @description Alias of {@link OperationErrors_callTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const callTypeOutOfRange: OperationErrors = OperationErrors.callTypeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionRateOutOfRange
 * @description
 * connectionRate is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionRateOutOfRange: OperationErrors = OperationErrors.connectionRateOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionRateOutOfRange
 * @description Alias of {@link OperationErrors_connectionRateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const connectionRateOutOfRange: OperationErrors = OperationErrors.connectionRateOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionReservoationOutOfRange
 * @description connectionReservation is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionReservoationOutOfRange: OperationErrors = OperationErrors.connectionReservoationOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionReservoationOutOfRange
 * @description
 * Alias of {@link OperationErrors_connectionReservoationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const connectionReservoationOutOfRange: OperationErrors = OperationErrors.connectionReservoationOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_consultPurposeOutOfRange
 * @description
 * consultPurpose is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_consultPurposeOutOfRange: OperationErrors = OperationErrors.consultPurposeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultPurposeOutOfRange
 * @description Alias of {@link OperationErrors_consultPurposeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const consultPurposeOutOfRange: OperationErrors = OperationErrors.consultPurposeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_correlatorDataOutOfRange
 * @description
 * Correlator data exceeds the switching function maximum length. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_correlatorDataOutOfRange: OperationErrors = OperationErrors.correlatorDataOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary correlatorDataOutOfRange
 * @description Alias of {@link OperationErrors_correlatorDataOutOfRange}.
 * @constant
 * @type {number}
 */
export
const correlatorDataOutOfRange: OperationErrors = OperationErrors.correlatorDataOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_delayToleranceOutOfRange
 * @description
 * delayTolerance is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_delayToleranceOutOfRange: OperationErrors = OperationErrors.delayToleranceOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delayToleranceOutOfRange
 * @description Alias of {@link OperationErrors_delayToleranceOutOfRange}.
 * @constant
 * @type {number}
 */
export
const delayToleranceOutOfRange: OperationErrors = OperationErrors.delayToleranceOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_destinationDetectOutOfRange
 * @description
 * destinationDetect is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_destinationDetectOutOfRange: OperationErrors = OperationErrors.destinationDetectOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDetectOutOfRange
 * @description Alias of {@link OperationErrors_destinationDetectOutOfRange}.
 * @constant
 * @type {number}
 */
export
const destinationDetectOutOfRange: OperationErrors = OperationErrors.destinationDetectOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_digitModeOutOfRange
 * @description digitMode is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_digitModeOutOfRange: OperationErrors = OperationErrors.digitModeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitModeOutOfRange
 * @description Alias of {@link OperationErrors_digitModeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const digitModeOutOfRange: OperationErrors = OperationErrors.digitModeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_doNotDisturbOutOfRange
 * @description The do-not-disturb setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_doNotDisturbOutOfRange: OperationErrors = OperationErrors.doNotDisturbOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotDisturbOutOfRange
 * @description Alias of {@link OperationErrors_doNotDisturbOutOfRange}.
 * @constant
 * @type {number}
 */
export
const doNotDisturbOutOfRange: OperationErrors = OperationErrors.doNotDisturbOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_flowDirectionOutOfRange
 * @description flowDirection is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_flowDirectionOutOfRange: OperationErrors = OperationErrors.flowDirectionOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowDirectionOutOfRange
 * @description Alias of {@link OperationErrors_flowDirectionOutOfRange}.
 * @constant
 * @type {number}
 */
export
const flowDirectionOutOfRange: OperationErrors = OperationErrors.flowDirectionOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_forwardingFlagOutOfRange
 * @description The forwarding flag is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_forwardingFlagOutOfRange: OperationErrors = OperationErrors.forwardingFlagOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingFlagOutOfRange
 * @description Alias of {@link OperationErrors_forwardingFlagOutOfRange}.
 * @constant
 * @type {number}
 */
export
const forwardingFlagOutOfRange: OperationErrors = OperationErrors.forwardingFlagOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_forwardingTypeOutOfRange
 * @description
 * forwardingType is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_forwardingTypeOutOfRange: OperationErrors = OperationErrors.forwardingTypeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingTypeOutOfRange
 * @description Alias of {@link OperationErrors_forwardingTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const forwardingTypeOutOfRange: OperationErrors = OperationErrors.forwardingTypeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_hookswitchComponentOutOfRange
 * @description
 * A hookswitch component is not a defined component. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_hookswitchComponentOutOfRange: OperationErrors = OperationErrors.hookswitchComponentOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hookswitchComponentOutOfRange
 * @description Alias of {@link OperationErrors_hookswitchComponentOutOfRange}.
 * @constant
 * @type {number}
 */
export
const hookswitchComponentOutOfRange: OperationErrors = OperationErrors.hookswitchComponentOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_hookswitchTypeOutOfRange
 * @description A hookswitch type is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_hookswitchTypeOutOfRange: OperationErrors = OperationErrors.hookswitchTypeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hookswitchTypeOutOfRange
 * @description Alias of {@link OperationErrors_hookswitchTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const hookswitchTypeOutOfRange: OperationErrors = OperationErrors.hookswitchTypeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_lampModeOutOfRange
 * @description A lamp mode setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_lampModeOutOfRange: OperationErrors = OperationErrors.lampModeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lampModeOutOfRange
 * @description Alias of {@link OperationErrors_lampModeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const lampModeOutOfRange: OperationErrors = OperationErrors.lampModeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_messageWaitingSettingOutOfRange
 * @description
 * A message-waiting setting is out of range (messageWaitingOn). ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_messageWaitingSettingOutOfRange: OperationErrors = OperationErrors.messageWaitingSettingOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageWaitingSettingOutOfRange
 * @description
 * Alias of {@link OperationErrors_messageWaitingSettingOutOfRange}.
 * @constant
 * @type {number}
 */
export
const messageWaitingSettingOutOfRange: OperationErrors = OperationErrors.messageWaitingSettingOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_micGainOutOfRange
 * @description A microphone gain setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_micGainOutOfRange: OperationErrors = OperationErrors.micGainOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary micGainOutOfRange
 * @description Alias of {@link OperationErrors_micGainOutOfRange}.
 * @constant
 * @type {number}
 */
export
const micGainOutOfRange: OperationErrors = OperationErrors.micGainOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_micMuteOutOfRange
 * @description A microphone mute setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_micMuteOutOfRange: OperationErrors = OperationErrors.micMuteOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary micMuteOutOfRange
 * @description Alias of {@link OperationErrors_micMuteOutOfRange}.
 * @constant
 * @type {number}
 */
export
const micMuteOutOfRange: OperationErrors = OperationErrors.micMuteOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_monitorTypeOutOfRange
 * @description The monitor type is not a defined value. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_monitorTypeOutOfRange: OperationErrors = OperationErrors.monitorTypeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitorTypeOutOfRange
 * @description Alias of {@link OperationErrors_monitorTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const monitorTypeOutOfRange: OperationErrors = OperationErrors.monitorTypeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_numberOfChannelsOutOfRange
 * @description
 * numberOfChannels is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_numberOfChannelsOutOfRange: OperationErrors = OperationErrors.numberOfChannelsOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfChannelsOutOfRange
 * @description Alias of {@link OperationErrors_numberOfChannelsOutOfRange}.
 * @constant
 * @type {number}
 */
export
const numberOfChannelsOutOfRange: OperationErrors = OperationErrors.numberOfChannelsOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_participationTypeOutOfRange
 * @description participationType is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_participationTypeOutOfRange: OperationErrors = OperationErrors.participationTypeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary participationTypeOutOfRange
 * @description Alias of {@link OperationErrors_participationTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const participationTypeOutOfRange: OperationErrors = OperationErrors.participationTypeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseDurationOutOfRange
 * @description pulseDuration is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseDurationOutOfRange: OperationErrors = OperationErrors.pulseDurationOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseDurationOutOfRange
 * @description Alias of {@link OperationErrors_pulseDurationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const pulseDurationOutOfRange: OperationErrors = OperationErrors.pulseDurationOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseRateOutOfRange
 * @description pulseRate is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseRateOutOfRange: OperationErrors = OperationErrors.pulseRateOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseRateOutOfRange
 * @description Alias of {@link OperationErrors_pulseRateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const pulseRateOutOfRange: OperationErrors = OperationErrors.pulseRateOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringCountOutOfRange
 * @description The ring count is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringCountOutOfRange: OperationErrors = OperationErrors.ringCountOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringCountOutOfRange
 * @description Alias of {@link OperationErrors_ringCountOutOfRange}.
 * @constant
 * @type {number}
 */
export
const ringCountOutOfRange: OperationErrors = OperationErrors.ringCountOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringPatternOutOfRange
 * @description A ring-pattern setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringPatternOutOfRange: OperationErrors = OperationErrors.ringPatternOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringPatternOutOfRange
 * @description Alias of {@link OperationErrors_ringPatternOutOfRange}.
 * @constant
 * @type {number}
 */
export
const ringPatternOutOfRange: OperationErrors = OperationErrors.ringPatternOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringVolumnOutOfRange
 * @description A ring volume is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringVolumnOutOfRange: OperationErrors = OperationErrors.ringVolumnOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringVolumnOutOfRange
 * @description Alias of {@link OperationErrors_ringVolumnOutOfRange}.
 * @constant
 * @type {number}
 */
export
const ringVolumnOutOfRange: OperationErrors = OperationErrors.ringVolumnOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_routeingAlgorithmOutOfRange
 * @description
 * routeSelAlgorithm is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_routeingAlgorithmOutOfRange: OperationErrors = OperationErrors.routeingAlgorithmOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeingAlgorithmOutOfRange
 * @description Alias of {@link OperationErrors_routeingAlgorithmOutOfRange}.
 * @constant
 * @type {number}
 */
export
const routeingAlgorithmOutOfRange: OperationErrors = OperationErrors.routeingAlgorithmOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_speakerMuteOutOfRange
 * @description A speaker mute setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_speakerMuteOutOfRange: OperationErrors = OperationErrors.speakerMuteOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerMuteOutOfRange
 * @description Alias of {@link OperationErrors_speakerMuteOutOfRange}.
 * @constant
 * @type {number}
 */
export
const speakerMuteOutOfRange: OperationErrors = OperationErrors.speakerMuteOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_speakerVolumeOutOfRange
 * @description A speaker volume is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_speakerVolumeOutOfRange: OperationErrors = OperationErrors.speakerVolumeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerVolumeOutOfRange
 * @description Alias of {@link OperationErrors_speakerVolumeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const speakerVolumeOutOfRange: OperationErrors = OperationErrors.speakerVolumeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_switchingCcittTypeOutOfRange
 * @description
 * switchingSubDomainCCIEType is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_switchingCcittTypeOutOfRange: OperationErrors = OperationErrors.switchingCcittTypeOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchingCcittTypeOutOfRange
 * @description Alias of {@link OperationErrors_switchingCcittTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const switchingCcittTypeOutOfRange: OperationErrors = OperationErrors.switchingCcittTypeOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_systemStatusOutOfRange
 * @description
 * The system status is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_systemStatusOutOfRange: OperationErrors = OperationErrors.systemStatusOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary systemStatusOutOfRange
 * @description Alias of {@link OperationErrors_systemStatusOutOfRange}.
 * @constant
 * @type {number}
 */
export
const systemStatusOutOfRange: OperationErrors = OperationErrors.systemStatusOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_toneCharacterOutOfRange
 * @description
 * One or more characters in charactersToSend are not permitted. ECMA-269
 * §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_toneCharacterOutOfRange: OperationErrors = OperationErrors.toneCharacterOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneCharacterOutOfRange
 * @description Alias of {@link OperationErrors_toneCharacterOutOfRange}.
 * @constant
 * @type {number}
 */
export
const toneCharacterOutOfRange: OperationErrors = OperationErrors.toneCharacterOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_toneDurationOutOfRange
 * @description toneDuration is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_toneDurationOutOfRange: OperationErrors = OperationErrors.toneDurationOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneDurationOutOfRange
 * @description Alias of {@link OperationErrors_toneDurationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const toneDurationOutOfRange: OperationErrors = OperationErrors.toneDurationOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_OperationErrors: $.ASN1Decoder<OperationErrors> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OperationErrors
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OperationErrors (el: _Element): OperationErrors {
    if (!_cached_decoder_for_OperationErrors) { _cached_decoder_for_OperationErrors = $._decodeEnumerated; }
    return _cached_decoder_for_OperationErrors(el);
}

let _cached_encoder_for_OperationErrors: $.ASN1Encoder<OperationErrors> | null = null;

/**
 * @summary Encodes a(n) OperationErrors into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationErrors, encoded as an ASN.1 Element.
 */
export
function _encode_OperationErrors (value: OperationErrors, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OperationErrors) { _cached_encoder_for_OperationErrors = $._encodeEnumerated; }
    return _cached_encoder_for_OperationErrors(value, elGetter);
}


/* eslint-enable */

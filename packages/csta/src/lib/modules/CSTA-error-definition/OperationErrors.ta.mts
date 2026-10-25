/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



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
const OperationErrors_generic = OperationErrors.generic satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary generic
 * @description Alias of {@link OperationErrors_generic}.
 * @constant
 * @type {number}
 */
export
const generic = OperationErrors.generic satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_atLeastOneConditionalParameterNotProvided
 * @description
 * A required conditional-parameter set was empty. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_atLeastOneConditionalParameterNotProvided = OperationErrors.atLeastOneConditionalParameterNotProvided satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary atLeastOneConditionalParameterNotProvided
 * @description
 * Alias of {@link OperationErrors_atLeastOneConditionalParameterNotProvided}.
 * @constant
 * @type {number}
 */
export
const atLeastOneConditionalParameterNotProvided = OperationErrors.atLeastOneConditionalParameterNotProvided satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_featureAlreadySet
 * @description
 * The feature cannot be set because it is already set. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_featureAlreadySet = OperationErrors.featureAlreadySet satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary featureAlreadySet
 * @description Alias of {@link OperationErrors_featureAlreadySet}.
 * @constant
 * @type {number}
 */
export
const featureAlreadySet = OperationErrors.featureAlreadySet satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidMsgID = OperationErrors.invalidMsgID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMsgID
 * @description Alias of {@link OperationErrors_invalidMsgID}.
 * @constant
 * @type {number}
 */
export
const invalidMsgID = OperationErrors.invalidMsgID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidParameterValue = OperationErrors.invalidParameterValue satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParameterValue
 * @description Alias of {@link OperationErrors_invalidParameterValue}.
 * @constant
 * @type {number}
 */
export
const invalidParameterValue = OperationErrors.invalidParameterValue satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAccountCode
 * @description The account code parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAccountCode = OperationErrors.invalidAccountCode satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAccountCode
 * @description Alias of {@link OperationErrors_invalidAccountCode}.
 * @constant
 * @type {number}
 */
export
const invalidAccountCode = OperationErrors.invalidAccountCode satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentGroup
 * @description An agent group is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentGroup = OperationErrors.invalidAgentGroup satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentGroup
 * @description Alias of {@link OperationErrors_invalidAgentGroup}.
 * @constant
 * @type {number}
 */
export
const invalidAgentGroup = OperationErrors.invalidAgentGroup satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentIdentifier
 * @description An agent identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentIdentifier = OperationErrors.invalidAgentIdentifier satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentIdentifier
 * @description Alias of {@link OperationErrors_invalidAgentIdentifier}.
 * @constant
 * @type {number}
 */
export
const invalidAgentIdentifier = OperationErrors.invalidAgentIdentifier satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentPassword
 * @description An agent password is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentPassword = OperationErrors.invalidAgentPassword satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentPassword
 * @description Alias of {@link OperationErrors_invalidAgentPassword}.
 * @constant
 * @type {number}
 */
export
const invalidAgentPassword = OperationErrors.invalidAgentPassword satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAgentState
 * @description An agent state setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAgentState = OperationErrors.invalidAgentState satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAgentState
 * @description Alias of {@link OperationErrors_invalidAgentState}.
 * @constant
 * @type {number}
 */
export
const invalidAgentState = OperationErrors.invalidAgentState satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAlertTime
 * @description The alertTime parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAlertTime = OperationErrors.invalidAlertTime satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAlertTime
 * @description Alias of {@link OperationErrors_invalidAlertTime}.
 * @constant
 * @type {number}
 */
export
const invalidAlertTime = OperationErrors.invalidAlertTime satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidAllocationState = OperationErrors.invalidAllocationState satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAllocationState
 * @description Alias of {@link OperationErrors_invalidAllocationState}.
 * @constant
 * @type {number}
 */
export
const invalidAllocationState = OperationErrors.invalidAllocationState satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAuthCode
 * @description The authorization code is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAuthCode = OperationErrors.invalidAuthCode satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAuthCode
 * @description Alias of {@link OperationErrors_invalidAuthCode}.
 * @constant
 * @type {number}
 */
export
const invalidAuthCode = OperationErrors.invalidAuthCode satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidAutoAnswer
 * @description The autoanswer parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidAutoAnswer = OperationErrors.invalidAutoAnswer satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAutoAnswer
 * @description Alias of {@link OperationErrors_invalidAutoAnswer}.
 * @constant
 * @type {number}
 */
export
const invalidAutoAnswer = OperationErrors.invalidAutoAnswer satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidBitRate
 * @description The bitRate parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidBitRate = OperationErrors.invalidBitRate satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidBitRate
 * @description Alias of {@link OperationErrors_invalidBitRate}.
 * @constant
 * @type {number}
 */
export
const invalidBitRate = OperationErrors.invalidBitRate satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidButtonIdentifier
 * @description A button identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidButtonIdentifier = OperationErrors.invalidButtonIdentifier satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidButtonIdentifier
 * @description Alias of {@link OperationErrors_invalidButtonIdentifier}.
 * @constant
 * @type {number}
 */
export
const invalidButtonIdentifier = OperationErrors.invalidButtonIdentifier satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallType
 * @description The callType parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallType = OperationErrors.invalidCallType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallType
 * @description Alias of {@link OperationErrors_invalidCallType}.
 * @constant
 * @type {number}
 */
export
const invalidCallType = OperationErrors.invalidCallType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidConnectionRate
 * @description The connectionRate parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidConnectionRate = OperationErrors.invalidConnectionRate satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionRate
 * @description Alias of {@link OperationErrors_invalidConnectionRate}.
 * @constant
 * @type {number}
 */
export
const invalidConnectionRate = OperationErrors.invalidConnectionRate satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidConsultPurpose
 * @description The consultPurpose parameter is not valid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidConsultPurpose = OperationErrors.invalidConsultPurpose satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConsultPurpose
 * @description Alias of {@link OperationErrors_invalidConsultPurpose}.
 * @constant
 * @type {number}
 */
export
const invalidConsultPurpose = OperationErrors.invalidConsultPurpose satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCorrelatorData
 * @description The Correlator Data parameter is not valid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCorrelatorData = OperationErrors.invalidCorrelatorData satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCorrelatorData
 * @description Alias of {@link OperationErrors_invalidCorrelatorData}.
 * @constant
 * @type {number}
 */
export
const invalidCorrelatorData = OperationErrors.invalidCorrelatorData satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidCrossRefID = OperationErrors.invalidCrossRefID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCrossRefID
 * @description Alias of {@link OperationErrors_invalidCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidCrossRefID = OperationErrors.invalidCrossRefID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDelayTolerance
 * @description The delayTolerance parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDelayTolerance = OperationErrors.invalidDelayTolerance satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDelayTolerance
 * @description Alias of {@link OperationErrors_invalidDelayTolerance}.
 * @constant
 * @type {number}
 */
export
const invalidDelayTolerance = OperationErrors.invalidDelayTolerance satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidDestination = OperationErrors.invalidDestination satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestination
 * @description Alias of {@link OperationErrors_invalidDestination}.
 * @constant
 * @type {number}
 */
export
const invalidDestination = OperationErrors.invalidDestination satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDestinationDetect
 * @description The destinationDetect parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDestinationDetect = OperationErrors.invalidDestinationDetect satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationDetect
 * @description Alias of {@link OperationErrors_invalidDestinationDetect}.
 * @constant
 * @type {number}
 */
export
const invalidDestinationDetect = OperationErrors.invalidDestinationDetect satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDoNotDisturb
 * @description The do-not-disturb setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDoNotDisturb = OperationErrors.invalidDoNotDisturb satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDoNotDisturb
 * @description Alias of {@link OperationErrors_invalidDoNotDisturb}.
 * @constant
 * @type {number}
 */
export
const invalidDoNotDisturb = OperationErrors.invalidDoNotDisturb satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidEscapeCrossRefID
 * @description
 * The escape registration request identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidEscapeCrossRefID = OperationErrors.invalidEscapeCrossRefID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidEscapeCrossRefID
 * @description Alias of {@link OperationErrors_invalidEscapeCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidEscapeCrossRefID = OperationErrors.invalidEscapeCrossRefID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidFeature
 * @description
 * The requested feature is invalid or unsupported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidFeature = OperationErrors.invalidFeature satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidFeature
 * @description Alias of {@link OperationErrors_invalidFeature}.
 * @constant
 * @type {number}
 */
export
const invalidFeature = OperationErrors.invalidFeature satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidFile
 * @description The specified file is not accessible. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidFile = OperationErrors.invalidFile satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidFile
 * @description Alias of {@link OperationErrors_invalidFile}.
 * @constant
 * @type {number}
 */
export
const invalidFile = OperationErrors.invalidFile satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidFlowDirection
 * @description The flowDirection parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidFlowDirection = OperationErrors.invalidFlowDirection satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidFlowDirection
 * @description Alias of {@link OperationErrors_invalidFlowDirection}.
 * @constant
 * @type {number}
 */
export
const invalidFlowDirection = OperationErrors.invalidFlowDirection satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidForwardingDestination
 * @description
 * The forwarding destination device is not valid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidForwardingDestination = OperationErrors.invalidForwardingDestination satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidForwardingDestination
 * @description Alias of {@link OperationErrors_invalidForwardingDestination}.
 * @constant
 * @type {number}
 */
export
const invalidForwardingDestination = OperationErrors.invalidForwardingDestination satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidForwardingFlag
 * @description The forwarding flag is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidForwardingFlag = OperationErrors.invalidForwardingFlag satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidForwardingFlag
 * @description Alias of {@link OperationErrors_invalidForwardingFlag}.
 * @constant
 * @type {number}
 */
export
const invalidForwardingFlag = OperationErrors.invalidForwardingFlag satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidForwardingType
 * @description The forwarding type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidForwardingType = OperationErrors.invalidForwardingType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidForwardingType
 * @description Alias of {@link OperationErrors_invalidForwardingType}.
 * @constant
 * @type {number}
 */
export
const invalidForwardingType = OperationErrors.invalidForwardingType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHookswitchType
 * @description A hookswitch type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHookswitchType = OperationErrors.invalidHookswitchType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHookswitchType
 * @description Alias of {@link OperationErrors_invalidHookswitchType}.
 * @constant
 * @type {number}
 */
export
const invalidHookswitchType = OperationErrors.invalidHookswitchType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHookswitchComponent
 * @description A hookswitch component is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHookswitchComponent = OperationErrors.invalidHookswitchComponent satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHookswitchComponent
 * @description Alias of {@link OperationErrors_invalidHookswitchComponent}.
 * @constant
 * @type {number}
 */
export
const invalidHookswitchComponent = OperationErrors.invalidHookswitchComponent satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidLampMode
 * @description A lamp mode is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidLampMode = OperationErrors.invalidLampMode satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidLampMode
 * @description Alias of {@link OperationErrors_invalidLampMode}.
 * @constant
 * @type {number}
 */
export
const invalidLampMode = OperationErrors.invalidLampMode satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidLampID
 * @description A lamp identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidLampID = OperationErrors.invalidLampID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidLampID
 * @description Alias of {@link OperationErrors_invalidLampID}.
 * @constant
 * @type {number}
 */
export
const invalidLampID = OperationErrors.invalidLampID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMessageWaitingSetting
 * @description
 * A message-waiting setting is invalid (messageWaitingOn). ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMessageWaitingSetting = OperationErrors.invalidMessageWaitingSetting satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMessageWaitingSetting
 * @description Alias of {@link OperationErrors_invalidMessageWaitingSetting}.
 * @constant
 * @type {number}
 */
export
const invalidMessageWaitingSetting = OperationErrors.invalidMessageWaitingSetting satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMicrophoneGain
 * @description A microphone gain setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMicrophoneGain = OperationErrors.invalidMicrophoneGain satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMicrophoneGain
 * @description Alias of {@link OperationErrors_invalidMicrophoneGain}.
 * @constant
 * @type {number}
 */
export
const invalidMicrophoneGain = OperationErrors.invalidMicrophoneGain satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMicrophoneMute
 * @description A microphone mute setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMicrophoneMute = OperationErrors.invalidMicrophoneMute satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMicrophoneMute
 * @description Alias of {@link OperationErrors_invalidMicrophoneMute}.
 * @constant
 * @type {number}
 */
export
const invalidMicrophoneMute = OperationErrors.invalidMicrophoneMute satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorCrossRefID
 * @description
 * The monitor cross-reference identifier is not in use. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorCrossRefID = OperationErrors.invalidMonitorCrossRefID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorCrossRefID
 * @description Alias of {@link OperationErrors_invalidMonitorCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorCrossRefID = OperationErrors.invalidMonitorCrossRefID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorFilter
 * @description The monitor filter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorFilter = OperationErrors.invalidMonitorFilter satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorFilter
 * @description Alias of {@link OperationErrors_invalidMonitorFilter}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorFilter = OperationErrors.invalidMonitorFilter satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorObject
 * @description The monitor object is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorObject = OperationErrors.invalidMonitorObject satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorObject
 * @description Alias of {@link OperationErrors_invalidMonitorObject}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorObject = OperationErrors.invalidMonitorObject satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorType
 * @description The monitor type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorType = OperationErrors.invalidMonitorType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorType
 * @description Alias of {@link OperationErrors_invalidMonitorType}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorType = OperationErrors.invalidMonitorType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidNumberOFChannels
 * @description The numberOfChannels parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidNumberOFChannels = OperationErrors.invalidNumberOFChannels satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNumberOFChannels
 * @description Alias of {@link OperationErrors_invalidNumberOFChannels}.
 * @constant
 * @type {number}
 */
export
const invalidNumberOFChannels = OperationErrors.invalidNumberOFChannels satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidParticipationType
 * @description The participationType parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidParticipationType = OperationErrors.invalidParticipationType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParticipationType
 * @description Alias of {@link OperationErrors_invalidParticipationType}.
 * @constant
 * @type {number}
 */
export
const invalidParticipationType = OperationErrors.invalidParticipationType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRemainRetry
 * @description The remainRetry parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRemainRetry = OperationErrors.invalidRemainRetry satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRemainRetry
 * @description Alias of {@link OperationErrors_invalidRemainRetry}.
 * @constant
 * @type {number}
 */
export
const invalidRemainRetry = OperationErrors.invalidRemainRetry satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRingCount
 * @description The ring-count setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRingCount = OperationErrors.invalidRingCount satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRingCount
 * @description Alias of {@link OperationErrors_invalidRingCount}.
 * @constant
 * @type {number}
 */
export
const invalidRingCount = OperationErrors.invalidRingCount satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRingPattern
 * @description A ring-pattern setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRingPattern = OperationErrors.invalidRingPattern satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRingPattern
 * @description Alias of {@link OperationErrors_invalidRingPattern}.
 * @constant
 * @type {number}
 */
export
const invalidRingPattern = OperationErrors.invalidRingPattern satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRingVolume
 * @description A ring-volume setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRingVolume = OperationErrors.invalidRingVolume satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRingVolume
 * @description Alias of {@link OperationErrors_invalidRingVolume}.
 * @constant
 * @type {number}
 */
export
const invalidRingVolume = OperationErrors.invalidRingVolume satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidRouteingAlgorithm = OperationErrors.invalidRouteingAlgorithm satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRouteingAlgorithm
 * @description Alias of {@link OperationErrors_invalidRouteingAlgorithm}.
 * @constant
 * @type {number}
 */
export
const invalidRouteingAlgorithm = OperationErrors.invalidRouteingAlgorithm satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRouteingCrossRefID
 * @description
 * The routeing cross-reference identifier is not in use. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRouteingCrossRefID = OperationErrors.invalidRouteingCrossRefID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRouteingCrossRefID
 * @description Alias of {@link OperationErrors_invalidRouteingCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidRouteingCrossRefID = OperationErrors.invalidRouteingCrossRefID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidRouteRegistrationCrossRefID
 * @description
 * The route registration request identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidRouteRegistrationCrossRefID = OperationErrors.invalidRouteRegistrationCrossRefID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidRouteRegistrationCrossRefID
 * @description
 * Alias of {@link OperationErrors_invalidRouteRegistrationCrossRefID}.
 * @constant
 * @type {number}
 */
export
const invalidRouteRegistrationCrossRefID = OperationErrors.invalidRouteRegistrationCrossRefID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidSpeakerVolume
 * @description A speaker volume is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidSpeakerVolume = OperationErrors.invalidSpeakerVolume satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSpeakerVolume
 * @description Alias of {@link OperationErrors_invalidSpeakerVolume}.
 * @constant
 * @type {number}
 */
export
const invalidSpeakerVolume = OperationErrors.invalidSpeakerVolume satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidSpeakerMute
 * @description A speaker mute setting is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidSpeakerMute = OperationErrors.invalidSpeakerMute satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSpeakerMute
 * @description Alias of {@link OperationErrors_invalidSpeakerMute}.
 * @constant
 * @type {number}
 */
export
const invalidSpeakerMute = OperationErrors.invalidSpeakerMute satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidSwitchingSubdomainCharsType
 * @description
 * The switchingSubDomainCCIEType parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidSwitchingSubdomainCharsType = OperationErrors.invalidSwitchingSubdomainCharsType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidSwitchingSubdomainCharsType
 * @description
 * Alias of {@link OperationErrors_invalidSwitchingSubdomainCharsType}.
 * @constant
 * @type {number}
 */
export
const invalidSwitchingSubdomainCharsType = OperationErrors.invalidSwitchingSubdomainCharsType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidObjectType = OperationErrors.invalidObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidObjectType
 * @description Alias of {@link OperationErrors_invalidObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidObjectType = OperationErrors.invalidObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidActiveCallObject
 * @description
 * activeCall or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidActiveCallObject = OperationErrors.invalidActiveCallObject satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveCallObject
 * @description Alias of {@link OperationErrors_invalidActiveCallObject}.
 * @constant
 * @type {number}
 */
export
const invalidActiveCallObject = OperationErrors.invalidActiveCallObject satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCalledDeviceObjectType
 * @description calledDevice is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCalledDeviceObjectType = OperationErrors.invalidCalledDeviceObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCalledDeviceObjectType
 * @description Alias of {@link OperationErrors_invalidCalledDeviceObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCalledDeviceObjectType = OperationErrors.invalidCalledDeviceObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallingDeviceObjectType
 * @description callingDevice is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallingDeviceObjectType = OperationErrors.invalidCallingDeviceObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallingDeviceObjectType
 * @description Alias of {@link OperationErrors_invalidCallingDeviceObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallingDeviceObjectType = OperationErrors.invalidCallingDeviceObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidCallToBePickedUpObjectType = OperationErrors.invalidCallToBePickedUpObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToBePickedUpObjectType
 * @description
 * Alias of {@link OperationErrors_invalidCallToBePickedUpObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallToBePickedUpObjectType = OperationErrors.invalidCallToBePickedUpObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallToDivertObjectType
 * @description callToBeDiverted is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallToDivertObjectType = OperationErrors.invalidCallToDivertObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToDivertObjectType
 * @description Alias of {@link OperationErrors_invalidCallToDivertObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallToDivertObjectType = OperationErrors.invalidCallToDivertObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallToParkObjectType
 * @description
 * callToPark or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallToParkObjectType = OperationErrors.invalidCallToParkObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToParkObjectType
 * @description Alias of {@link OperationErrors_invalidCallToParkObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidCallToParkObjectType = OperationErrors.invalidCallToParkObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDestinationDeviceObject
 * @description
 * newDestination or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDestinationDeviceObject = OperationErrors.invalidDestinationDeviceObject satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationDeviceObject
 * @description Alias of {@link OperationErrors_invalidDestinationDeviceObject}.
 * @constant
 * @type {number}
 */
export
const invalidDestinationDeviceObject = OperationErrors.invalidDestinationDeviceObject satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHeldCallObject
 * @description
 * heldCall or a component is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHeldCallObject = OperationErrors.invalidHeldCallObject satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldCallObject
 * @description Alias of {@link OperationErrors_invalidHeldCallObject}.
 * @constant
 * @type {number}
 */
export
const invalidHeldCallObject = OperationErrors.invalidHeldCallObject satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidMonitorObjectType
 * @description The monitorObject type is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidMonitorObjectType = OperationErrors.invalidMonitorObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMonitorObjectType
 * @description Alias of {@link OperationErrors_invalidMonitorObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidMonitorObjectType = OperationErrors.invalidMonitorObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidParkToObjectType
 * @description parkTo is not of the proper type. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidParkToObjectType = OperationErrors.invalidParkToObjectType satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParkToObjectType
 * @description Alias of {@link OperationErrors_invalidParkToObjectType}.
 * @constant
 * @type {number}
 */
export
const invalidParkToObjectType = OperationErrors.invalidParkToObjectType satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_messageIDRequired
 * @description The request requires a Message Identifier. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_messageIDRequired = OperationErrors.messageIDRequired satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageIDRequired
 * @description Alias of {@link OperationErrors_messageIDRequired}.
 * @constant
 * @type {number}
 */
export
const messageIDRequired = OperationErrors.messageIDRequired satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_notDifferentDevices
 * @description
 * Parameters that shall name different devices do not. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_notDifferentDevices = OperationErrors.notDifferentDevices satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notDifferentDevices
 * @description Alias of {@link OperationErrors_notDifferentDevices}.
 * @constant
 * @type {number}
 */
export
const notDifferentDevices = OperationErrors.notDifferentDevices satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_notSameDevice
 * @description
 * Parameters that shall name the same device do not. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_notSameDevice = OperationErrors.notSameDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSameDevice
 * @description Alias of {@link OperationErrors_notSameDevice}.
 * @constant
 * @type {number}
 */
export
const notSameDevice = OperationErrors.notSameDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_objectNotKnown
 * @description
 * A connection, device, or call value is not known. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_objectNotKnown = OperationErrors.objectNotKnown satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary objectNotKnown
 * @description Alias of {@link OperationErrors_objectNotKnown}.
 * @constant
 * @type {number}
 */
export
const objectNotKnown = OperationErrors.objectNotKnown satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidCallID = OperationErrors.invalidCallID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallID
 * @description Alias of {@link OperationErrors_invalidCallID}.
 * @constant
 * @type {number}
 */
export
const invalidCallID = OperationErrors.invalidCallID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidActiveCallID = OperationErrors.invalidActiveCallID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveCallID
 * @description Alias of {@link OperationErrors_invalidActiveCallID}.
 * @constant
 * @type {number}
 */
export
const invalidActiveCallID = OperationErrors.invalidActiveCallID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidHeldCallID = OperationErrors.invalidHeldCallID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldCallID
 * @description Alias of {@link OperationErrors_invalidHeldCallID}.
 * @constant
 * @type {number}
 */
export
const invalidHeldCallID = OperationErrors.invalidHeldCallID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidConnectionID
 * @description
 * A connection identifier or a component of it is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidConnectionID = OperationErrors.invalidConnectionID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionID
 * @description Alias of {@link OperationErrors_invalidConnectionID}.
 * @constant
 * @type {number}
 */
export
const invalidConnectionID = OperationErrors.invalidConnectionID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidActiveConnectionID
 * @description
 * The activeCall connection does not specify a valid call. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidActiveConnectionID = OperationErrors.invalidActiveConnectionID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveConnectionID
 * @description Alias of {@link OperationErrors_invalidActiveConnectionID}.
 * @constant
 * @type {number}
 */
export
const invalidActiveConnectionID = OperationErrors.invalidActiveConnectionID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidHeldConnectionID
 * @description
 * The heldCall connection does not specify a valid call. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidHeldConnectionID = OperationErrors.invalidHeldConnectionID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldConnectionID
 * @description Alias of {@link OperationErrors_invalidHeldConnectionID}.
 * @constant
 * @type {number}
 */
export
const invalidHeldConnectionID = OperationErrors.invalidHeldConnectionID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidDeviceID = OperationErrors.invalidDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDeviceID
 * @description Alias of {@link OperationErrors_invalidDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidDeviceID = OperationErrors.invalidDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidActiveDeviceID = OperationErrors.invalidActiveDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidActiveDeviceID
 * @description Alias of {@link OperationErrors_invalidActiveDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidActiveDeviceID = OperationErrors.invalidActiveDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCalledDeviceID
 * @description The called device parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCalledDeviceID = OperationErrors.invalidCalledDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCalledDeviceID
 * @description Alias of {@link OperationErrors_invalidCalledDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidCalledDeviceID = OperationErrors.invalidCalledDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidCallingDeviceID
 * @description The calling device parameter is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidCallingDeviceID = OperationErrors.invalidCallingDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallingDeviceID
 * @description Alias of {@link OperationErrors_invalidCallingDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidCallingDeviceID = OperationErrors.invalidCallingDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidCallToParkDeviceID = OperationErrors.invalidCallToParkDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidCallToParkDeviceID
 * @description Alias of {@link OperationErrors_invalidCallToParkDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidCallToParkDeviceID = OperationErrors.invalidCallToParkDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDestinationDeviceID
 * @description
 * The DeviceID in newDestination is not a valid device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDestinationDeviceID = OperationErrors.invalidDestinationDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDestinationDeviceID
 * @description Alias of {@link OperationErrors_invalidDestinationDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidDestinationDeviceID = OperationErrors.invalidDestinationDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidDivertingDeviceID
 * @description The diverting device identifier is invalid. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidDivertingDeviceID = OperationErrors.invalidDivertingDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidDivertingDeviceID
 * @description Alias of {@link OperationErrors_invalidDivertingDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidDivertingDeviceID = OperationErrors.invalidDivertingDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_invalidHeldDeviceID = OperationErrors.invalidHeldDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidHeldDeviceID
 * @description Alias of {@link OperationErrors_invalidHeldDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidHeldDeviceID = OperationErrors.invalidHeldDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidParkToDeviceID
 * @description parkTo does not specify a valid device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidParkToDeviceID = OperationErrors.invalidParkToDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidParkToDeviceID
 * @description Alias of {@link OperationErrors_invalidParkToDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidParkToDeviceID = OperationErrors.invalidParkToDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_invalidPickUpDeviceID
 * @description
 * The DeviceID in callToBePickedUp is not a valid device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_invalidPickUpDeviceID = OperationErrors.invalidPickUpDeviceID satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidPickUpDeviceID
 * @description Alias of {@link OperationErrors_invalidPickUpDeviceID}.
 * @constant
 * @type {number}
 */
export
const invalidPickUpDeviceID = OperationErrors.invalidPickUpDeviceID satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_parameterNotSupported
 * @description
 * The switching function does not support a parameter. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_parameterNotSupported = OperationErrors.parameterNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parameterNotSupported
 * @description Alias of {@link OperationErrors_parameterNotSupported}.
 * @constant
 * @type {number}
 */
export
const parameterNotSupported = OperationErrors.parameterNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_accountCodeNotSupported
 * @description accountCode is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_accountCodeNotSupported = OperationErrors.accountCodeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accountCodeNotSupported
 * @description Alias of {@link OperationErrors_accountCodeNotSupported}.
 * @constant
 * @type {number}
 */
export
const accountCodeNotSupported = OperationErrors.accountCodeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentGroupNotSupported
 * @description The agent group parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentGroupNotSupported = OperationErrors.agentGroupNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentGroupNotSupported
 * @description Alias of {@link OperationErrors_agentGroupNotSupported}.
 * @constant
 * @type {number}
 */
export
const agentGroupNotSupported = OperationErrors.agentGroupNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentPasswordNotSupported
 * @description
 * The agent password parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentPasswordNotSupported = OperationErrors.agentPasswordNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentPasswordNotSupported
 * @description Alias of {@link OperationErrors_agentPasswordNotSupported}.
 * @constant
 * @type {number}
 */
export
const agentPasswordNotSupported = OperationErrors.agentPasswordNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentStateNotSupported
 * @description The agent state is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentStateNotSupported = OperationErrors.agentStateNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentStateNotSupported
 * @description Alias of {@link OperationErrors_agentStateNotSupported}.
 * @constant
 * @type {number}
 */
export
const agentStateNotSupported = OperationErrors.agentStateNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_alertTimeNotSupported
 * @description alertTime is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_alertTimeNotSupported = OperationErrors.alertTimeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeNotSupported
 * @description Alias of {@link OperationErrors_alertTimeNotSupported}.
 * @constant
 * @type {number}
 */
export
const alertTimeNotSupported = OperationErrors.alertTimeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_allocationNotSupported
 * @description The allocation parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_allocationNotSupported = OperationErrors.allocationNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allocationNotSupported
 * @description Alias of {@link OperationErrors_allocationNotSupported}.
 * @constant
 * @type {number}
 */
export
const allocationNotSupported = OperationErrors.allocationNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_authorisationCodeNotSupported
 * @description The authorization code is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_authorisationCodeNotSupported = OperationErrors.authorisationCodeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authorisationCodeNotSupported
 * @description Alias of {@link OperationErrors_authorisationCodeNotSupported}.
 * @constant
 * @type {number}
 */
export
const authorisationCodeNotSupported = OperationErrors.authorisationCodeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_autoAnswerNotSupported
 * @description autoAnswer is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_autoAnswerNotSupported = OperationErrors.autoAnswerNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoAnswerNotSupported
 * @description Alias of {@link OperationErrors_autoAnswerNotSupported}.
 * @constant
 * @type {number}
 */
export
const autoAnswerNotSupported = OperationErrors.autoAnswerNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_bitRateNotSupported
 * @description bitRate is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_bitRateNotSupported = OperationErrors.bitRateNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bitRateNotSupported
 * @description Alias of {@link OperationErrors_bitRateNotSupported}.
 * @constant
 * @type {number}
 */
export
const bitRateNotSupported = OperationErrors.bitRateNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_buttonNotSupported
 * @description The button parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_buttonNotSupported = OperationErrors.buttonNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary buttonNotSupported
 * @description Alias of {@link OperationErrors_buttonNotSupported}.
 * @constant
 * @type {number}
 */
export
const buttonNotSupported = OperationErrors.buttonNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_callTypeNotSupported
 * @description callType is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_callTypeNotSupported = OperationErrors.callTypeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTypeNotSupported
 * @description Alias of {@link OperationErrors_callTypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const callTypeNotSupported = OperationErrors.callTypeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_charactersToSendNotSupported
 * @description charactersToSend is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_charactersToSendNotSupported = OperationErrors.charactersToSendNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary charactersToSendNotSupported
 * @description Alias of {@link OperationErrors_charactersToSendNotSupported}.
 * @constant
 * @type {number}
 */
export
const charactersToSendNotSupported = OperationErrors.charactersToSendNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionRateNotSupported
 * @description connectionRate is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionRateNotSupported = OperationErrors.connectionRateNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionRateNotSupported
 * @description Alias of {@link OperationErrors_connectionRateNotSupported}.
 * @constant
 * @type {number}
 */
export
const connectionRateNotSupported = OperationErrors.connectionRateNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionReservationNotSupported
 * @description connectionReservation is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionReservationNotSupported = OperationErrors.connectionReservationNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionReservationNotSupported
 * @description
 * Alias of {@link OperationErrors_connectionReservationNotSupported}.
 * @constant
 * @type {number}
 */
export
const connectionReservationNotSupported = OperationErrors.connectionReservationNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_consultPurposeNotSupported
 * @description consultPurpose is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_consultPurposeNotSupported = OperationErrors.consultPurposeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultPurposeNotSupported
 * @description Alias of {@link OperationErrors_consultPurposeNotSupported}.
 * @constant
 * @type {number}
 */
export
const consultPurposeNotSupported = OperationErrors.consultPurposeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_correlatorDataNotSupported
 * @description Correlator data is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_correlatorDataNotSupported = OperationErrors.correlatorDataNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary correlatorDataNotSupported
 * @description Alias of {@link OperationErrors_correlatorDataNotSupported}.
 * @constant
 * @type {number}
 */
export
const correlatorDataNotSupported = OperationErrors.correlatorDataNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_delayToleranceNotSupported
 * @description delayTolerance is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_delayToleranceNotSupported = OperationErrors.delayToleranceNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delayToleranceNotSupported
 * @description Alias of {@link OperationErrors_delayToleranceNotSupported}.
 * @constant
 * @type {number}
 */
export
const delayToleranceNotSupported = OperationErrors.delayToleranceNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_destinationDetectNotSupported
 * @description destinationDetect is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_destinationDetectNotSupported = OperationErrors.destinationDetectNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDetectNotSupported
 * @description Alias of {@link OperationErrors_destinationDetectNotSupported}.
 * @constant
 * @type {number}
 */
export
const destinationDetectNotSupported = OperationErrors.destinationDetectNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_digitModeNotSupported
 * @description digitMode is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_digitModeNotSupported = OperationErrors.digitModeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitModeNotSupported
 * @description Alias of {@link OperationErrors_digitModeNotSupported}.
 * @constant
 * @type {number}
 */
export
const digitModeNotSupported = OperationErrors.digitModeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_errorValueNotSupported
 * @description errorValue is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_errorValueNotSupported = OperationErrors.errorValueNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorValueNotSupported
 * @description Alias of {@link OperationErrors_errorValueNotSupported}.
 * @constant
 * @type {number}
 */
export
const errorValueNotSupported = OperationErrors.errorValueNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_flowDirectionNotSupported
 * @description flowDirection is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_flowDirectionNotSupported = OperationErrors.flowDirectionNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowDirectionNotSupported
 * @description Alias of {@link OperationErrors_flowDirectionNotSupported}.
 * @constant
 * @type {number}
 */
export
const flowDirectionNotSupported = OperationErrors.flowDirectionNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_forwardingDestinationNotSupported
 * @description
 * The forwarding destination parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_forwardingDestinationNotSupported = OperationErrors.forwardingDestinationNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingDestinationNotSupported
 * @description
 * Alias of {@link OperationErrors_forwardingDestinationNotSupported}.
 * @constant
 * @type {number}
 */
export
const forwardingDestinationNotSupported = OperationErrors.forwardingDestinationNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_lampNotSupported
 * @description The lamp parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_lampNotSupported = OperationErrors.lampNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lampNotSupported
 * @description Alias of {@link OperationErrors_lampNotSupported}.
 * @constant
 * @type {number}
 */
export
const lampNotSupported = OperationErrors.lampNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_monitorTypeNotSupported
 * @description The monitor type is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_monitorTypeNotSupported = OperationErrors.monitorTypeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitorTypeNotSupported
 * @description Alias of {@link OperationErrors_monitorTypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const monitorTypeNotSupported = OperationErrors.monitorTypeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_numberOfChannelsNotSupported
 * @description numberOfChannels is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_numberOfChannelsNotSupported = OperationErrors.numberOfChannelsNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfChannelsNotSupported
 * @description Alias of {@link OperationErrors_numberOfChannelsNotSupported}.
 * @constant
 * @type {number}
 */
export
const numberOfChannelsNotSupported = OperationErrors.numberOfChannelsNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_parameterTypeNotSupported
 * @description
 * The participationType parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_parameterTypeNotSupported = OperationErrors.parameterTypeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary parameterTypeNotSupported
 * @description Alias of {@link OperationErrors_parameterTypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const parameterTypeNotSupported = OperationErrors.parameterTypeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_priorityNotSupported
 * @description The priority parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_priorityNotSupported = OperationErrors.priorityNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary priorityNotSupported
 * @description Alias of {@link OperationErrors_priorityNotSupported}.
 * @constant
 * @type {number}
 */
export
const priorityNotSupported = OperationErrors.priorityNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privateDataNotSupported
 * @description privateData is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privateDataNotSupported = OperationErrors.privateDataNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privateDataNotSupported
 * @description Alias of {@link OperationErrors_privateDataNotSupported}.
 * @constant
 * @type {number}
 */
export
const privateDataNotSupported = OperationErrors.privateDataNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseDurationNotSupported
 * @description pulseDuration is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseDurationNotSupported = OperationErrors.pulseDurationNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseDurationNotSupported
 * @description Alias of {@link OperationErrors_pulseDurationNotSupported}.
 * @constant
 * @type {number}
 */
export
const pulseDurationNotSupported = OperationErrors.pulseDurationNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseRateNotSupported
 * @description pulseRate is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseRateNotSupported = OperationErrors.pulseRateNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseRateNotSupported
 * @description Alias of {@link OperationErrors_pulseRateNotSupported}.
 * @constant
 * @type {number}
 */
export
const pulseRateNotSupported = OperationErrors.pulseRateNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_remainRetryNotSupported
 * @description remainRetry is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_remainRetryNotSupported = OperationErrors.remainRetryNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainRetryNotSupported
 * @description Alias of {@link OperationErrors_remainRetryNotSupported}.
 * @constant
 * @type {number}
 */
export
const remainRetryNotSupported = OperationErrors.remainRetryNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringCountNotSupported
 * @description ringCount is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringCountNotSupported = OperationErrors.ringCountNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringCountNotSupported
 * @description Alias of {@link OperationErrors_ringCountNotSupported}.
 * @constant
 * @type {number}
 */
export
const ringCountNotSupported = OperationErrors.ringCountNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_routeUsedNotSupported
 * @description routeUsed is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_routeUsedNotSupported = OperationErrors.routeUsedNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeUsedNotSupported
 * @description Alias of {@link OperationErrors_routeUsedNotSupported}.
 * @constant
 * @type {number}
 */
export
const routeUsedNotSupported = OperationErrors.routeUsedNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_securityNotSupported
 * @description The security parameter is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_securityNotSupported = OperationErrors.securityNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityNotSupported
 * @description Alias of {@link OperationErrors_securityNotSupported}.
 * @constant
 * @type {number}
 */
export
const securityNotSupported = OperationErrors.securityNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_swSubdomainCCIETypeNotSupported
 * @description
 * switchingSubDomainCCIEType is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_swSubdomainCCIETypeNotSupported = OperationErrors.swSubdomainCCIETypeNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary swSubdomainCCIETypeNotSupported
 * @description
 * Alias of {@link OperationErrors_swSubdomainCCIETypeNotSupported}.
 * @constant
 * @type {number}
 */
export
const swSubdomainCCIETypeNotSupported = OperationErrors.swSubdomainCCIETypeNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_toneDurationNotSupported
 * @description toneDuration is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_toneDurationNotSupported = OperationErrors.toneDurationNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneDurationNotSupported
 * @description Alias of {@link OperationErrors_toneDurationNotSupported}.
 * @constant
 * @type {number}
 */
export
const toneDurationNotSupported = OperationErrors.toneDurationNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_sysStatRegIDNotSupported
 * @description sysStatRegID is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_sysStatRegIDNotSupported = OperationErrors.sysStatRegIDNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sysStatRegIDNotSupported
 * @description Alias of {@link OperationErrors_sysStatRegIDNotSupported}.
 * @constant
 * @type {number}
 */
export
const sysStatRegIDNotSupported = OperationErrors.sysStatRegIDNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_userDataNotSupported
 * @description userData is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_userDataNotSupported = OperationErrors.userDataNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userDataNotSupported
 * @description Alias of {@link OperationErrors_userDataNotSupported}.
 * @constant
 * @type {number}
 */
export
const userDataNotSupported = OperationErrors.userDataNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_privilegeViolationSpecifiedDevice = OperationErrors.privilegeViolationSpecifiedDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationSpecifiedDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationSpecifiedDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationSpecifiedDevice = OperationErrors.privilegeViolationSpecifiedDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationActiveDevice
 * @description
 * Would violate a restriction on the device in activeCall. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationActiveDevice = OperationErrors.privilegeViolationActiveDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationActiveDevice
 * @description Alias of {@link OperationErrors_privilegeViolationActiveDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationActiveDevice = OperationErrors.privilegeViolationActiveDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_privilegeViolationCalledDevice = OperationErrors.privilegeViolationCalledDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationCalledDevice
 * @description Alias of {@link OperationErrors_privilegeViolationCalledDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationCalledDevice = OperationErrors.privilegeViolationCalledDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_privilegeViolationCallingDevice = OperationErrors.privilegeViolationCallingDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationCallingDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationCallingDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationCallingDevice = OperationErrors.privilegeViolationCallingDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationCallToParkDevice
 * @description
 * Would violate a restriction on the device in callToPark. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationCallToParkDevice = OperationErrors.privilegeViolationCallToParkDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationCallToParkDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationCallToParkDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationCallToParkDevice = OperationErrors.privilegeViolationCallToParkDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationDestinationDevice
 * @description
 * Would violate a restriction on newDestination. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationDestinationDevice = OperationErrors.privilegeViolationDestinationDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationDestinationDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationDestinationDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationDestinationDevice = OperationErrors.privilegeViolationDestinationDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationOnDivertingDevice
 * @description
 * Would violate a restriction on the diverting device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationOnDivertingDevice = OperationErrors.privilegeViolationOnDivertingDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationOnDivertingDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationOnDivertingDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationOnDivertingDevice = OperationErrors.privilegeViolationOnDivertingDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationHeldDevice
 * @description
 * Would violate a restriction on the device in heldCall. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationHeldDevice = OperationErrors.privilegeViolationHeldDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationHeldDevice
 * @description Alias of {@link OperationErrors_privilegeViolationHeldDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationHeldDevice = OperationErrors.privilegeViolationHeldDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_privilegeViolationOnParkToDevice
 * @description Would violate a restriction on parkTo. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_privilegeViolationOnParkToDevice = OperationErrors.privilegeViolationOnParkToDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationOnParkToDevice
 * @description
 * Alias of {@link OperationErrors_privilegeViolationOnParkToDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationOnParkToDevice = OperationErrors.privilegeViolationOnParkToDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_privilegeViolationPickUpDevice = OperationErrors.privilegeViolationPickUpDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary privilegeViolationPickUpDevice
 * @description Alias of {@link OperationErrors_privilegeViolationPickUpDevice}.
 * @constant
 * @type {number}
 */
export
const privilegeViolationPickUpDevice = OperationErrors.privilegeViolationPickUpDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_routeingTimerExpired
 * @description
 * The routeing timer or delayed-ringback timer expired. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_routeingTimerExpired = OperationErrors.routeingTimerExpired satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeingTimerExpired
 * @description Alias of {@link OperationErrors_routeingTimerExpired}.
 * @constant
 * @type {number}
 */
export
const routeingTimerExpired = OperationErrors.routeingTimerExpired satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_requestIncompatibleWithObject = OperationErrors.requestIncompatibleWithObject satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithObject
 * @description Alias of {@link OperationErrors_requestIncompatibleWithObject}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithObject = OperationErrors.requestIncompatibleWithObject satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_requestIncompatibleWithConnection = OperationErrors.requestIncompatibleWithConnection satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithConnection
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithConnection}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithConnection = OperationErrors.requestIncompatibleWithConnection satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithActiveConnection
 * @description
 * Incompatible with the activeCall connection. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithActiveConnection = OperationErrors.requestIncompatibleWithActiveConnection satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithActiveConnection
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithActiveConnection}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithActiveConnection = OperationErrors.requestIncompatibleWithActiveConnection satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithHeldConnection
 * @description Incompatible with the heldCall connection. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithHeldConnection = OperationErrors.requestIncompatibleWithHeldConnection satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithHeldConnection
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithHeldConnection}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithHeldConnection = OperationErrors.requestIncompatibleWithHeldConnection satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithDevice
 * @description
 * The request is not compatible with a specified device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithDevice = OperationErrors.requestIncompatibleWithDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithDevice
 * @description Alias of {@link OperationErrors_requestIncompatibleWithDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithDevice = OperationErrors.requestIncompatibleWithDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithCalledDevice
 * @description Incompatible with the called device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithCalledDevice = OperationErrors.requestIncompatibleWithCalledDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithCalledDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithCalledDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithCalledDevice = OperationErrors.requestIncompatibleWithCalledDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithCallingDevice
 * @description Incompatible with the calling device. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithCallingDevice = OperationErrors.requestIncompatibleWithCallingDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithCallingDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithCallingDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithCallingDevice = OperationErrors.requestIncompatibleWithCallingDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_requestIncompatibleWithSubjectDevice = OperationErrors.requestIncompatibleWithSubjectDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithSubjectDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithSubjectDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithSubjectDevice = OperationErrors.requestIncompatibleWithSubjectDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_requestIncompatibleWithActiveDevice = OperationErrors.requestIncompatibleWithActiveDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithActiveDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithActiveDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithActiveDevice = OperationErrors.requestIncompatibleWithActiveDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithCallToParkDevice
 * @description Incompatible with the device in callToPark. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithCallToParkDevice = OperationErrors.requestIncompatibleWithCallToParkDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithCallToParkDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithCallToParkDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithCallToParkDevice = OperationErrors.requestIncompatibleWithCallToParkDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithDestinationDevice
 * @description
 * Incompatible with the device in newDestination. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithDestinationDevice = OperationErrors.requestIncompatibleWithDestinationDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithDestinationDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithDestinationDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithDestinationDevice = OperationErrors.requestIncompatibleWithDestinationDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithDivertingDevice
 * @description
 * Incompatible with the device in callToBeDiverted. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithDivertingDevice = OperationErrors.requestIncompatibleWithDivertingDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithDivertingDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithDivertingDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithDivertingDevice = OperationErrors.requestIncompatibleWithDivertingDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithHeldDevice
 * @description Incompatible with the device in heldCall. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithHeldDevice = OperationErrors.requestIncompatibleWithHeldDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithHeldDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithHeldDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithHeldDevice = OperationErrors.requestIncompatibleWithHeldDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_requestIncompatibleWithMedia = OperationErrors.requestIncompatibleWithMedia satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithMedia
 * @description Alias of {@link OperationErrors_requestIncompatibleWithMedia}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithMedia = OperationErrors.requestIncompatibleWithMedia satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithParkToDevice
 * @description Incompatible with parkTo. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithParkToDevice = OperationErrors.requestIncompatibleWithParkToDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithParkToDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithParkToDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithParkToDevice = OperationErrors.requestIncompatibleWithParkToDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_requestIncompatibleWithPickupDevice
 * @description
 * Incompatible with the device in callToBePickedUp. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_requestIncompatibleWithPickupDevice = OperationErrors.requestIncompatibleWithPickupDevice satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestIncompatibleWithPickupDevice
 * @description
 * Alias of {@link OperationErrors_requestIncompatibleWithPickupDevice}.
 * @constant
 * @type {number}
 */
export
const requestIncompatibleWithPickupDevice = OperationErrors.requestIncompatibleWithPickupDevice satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_serviceNotSupported
 * @description The service is not supported. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_serviceNotSupported = OperationErrors.serviceNotSupported satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceNotSupported
 * @description Alias of {@link OperationErrors_serviceNotSupported}.
 * @constant
 * @type {number}
 */
export
const serviceNotSupported = OperationErrors.serviceNotSupported satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_securityViolation
 * @description The service request violates security. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_securityViolation = OperationErrors.securityViolation satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary securityViolation
 * @description Alias of {@link OperationErrors_securityViolation}.
 * @constant
 * @type {number}
 */
export
const securityViolation = OperationErrors.securityViolation satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_valueOutOfRange = OperationErrors.valueOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary valueOutOfRange
 * @description Alias of {@link OperationErrors_valueOutOfRange}.
 * @constant
 * @type {number}
 */
export
const valueOutOfRange = OperationErrors.valueOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_agentStateOutOfRange
 * @description
 * An agent state is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_agentStateOutOfRange = OperationErrors.agentStateOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary agentStateOutOfRange
 * @description Alias of {@link OperationErrors_agentStateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const agentStateOutOfRange = OperationErrors.agentStateOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_alertTimeOutOfRange
 * @description alertTime is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_alertTimeOutOfRange = OperationErrors.alertTimeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeOutOfRange
 * @description Alias of {@link OperationErrors_alertTimeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const alertTimeOutOfRange = OperationErrors.alertTimeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_allocationOutOfRange
 * @description allocation is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_allocationOutOfRange = OperationErrors.allocationOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary allocationOutOfRange
 * @description Alias of {@link OperationErrors_allocationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const allocationOutOfRange = OperationErrors.allocationOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_autoAnswerOutOfRange
 * @description autoAnswer is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_autoAnswerOutOfRange = OperationErrors.autoAnswerOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoAnswerOutOfRange
 * @description Alias of {@link OperationErrors_autoAnswerOutOfRange}.
 * @constant
 * @type {number}
 */
export
const autoAnswerOutOfRange = OperationErrors.autoAnswerOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_bitRateOutOfRange
 * @description bitRate is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_bitRateOutOfRange = OperationErrors.bitRateOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bitRateOutOfRange
 * @description Alias of {@link OperationErrors_bitRateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const bitRateOutOfRange = OperationErrors.bitRateOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_callTypeOutOfRange
 * @description callType is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_callTypeOutOfRange = OperationErrors.callTypeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callTypeOutOfRange
 * @description Alias of {@link OperationErrors_callTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const callTypeOutOfRange = OperationErrors.callTypeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionRateOutOfRange
 * @description
 * connectionRate is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionRateOutOfRange = OperationErrors.connectionRateOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionRateOutOfRange
 * @description Alias of {@link OperationErrors_connectionRateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const connectionRateOutOfRange = OperationErrors.connectionRateOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_connectionReservoationOutOfRange
 * @description connectionReservation is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_connectionReservoationOutOfRange = OperationErrors.connectionReservoationOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectionReservoationOutOfRange
 * @description
 * Alias of {@link OperationErrors_connectionReservoationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const connectionReservoationOutOfRange = OperationErrors.connectionReservoationOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_consultPurposeOutOfRange
 * @description
 * consultPurpose is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_consultPurposeOutOfRange = OperationErrors.consultPurposeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultPurposeOutOfRange
 * @description Alias of {@link OperationErrors_consultPurposeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const consultPurposeOutOfRange = OperationErrors.consultPurposeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_correlatorDataOutOfRange = OperationErrors.correlatorDataOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary correlatorDataOutOfRange
 * @description Alias of {@link OperationErrors_correlatorDataOutOfRange}.
 * @constant
 * @type {number}
 */
export
const correlatorDataOutOfRange = OperationErrors.correlatorDataOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_delayToleranceOutOfRange
 * @description
 * delayTolerance is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_delayToleranceOutOfRange = OperationErrors.delayToleranceOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delayToleranceOutOfRange
 * @description Alias of {@link OperationErrors_delayToleranceOutOfRange}.
 * @constant
 * @type {number}
 */
export
const delayToleranceOutOfRange = OperationErrors.delayToleranceOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_destinationDetectOutOfRange
 * @description
 * destinationDetect is outside its permitted range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_destinationDetectOutOfRange = OperationErrors.destinationDetectOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationDetectOutOfRange
 * @description Alias of {@link OperationErrors_destinationDetectOutOfRange}.
 * @constant
 * @type {number}
 */
export
const destinationDetectOutOfRange = OperationErrors.destinationDetectOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_digitModeOutOfRange
 * @description digitMode is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_digitModeOutOfRange = OperationErrors.digitModeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary digitModeOutOfRange
 * @description Alias of {@link OperationErrors_digitModeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const digitModeOutOfRange = OperationErrors.digitModeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_doNotDisturbOutOfRange
 * @description The do-not-disturb setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_doNotDisturbOutOfRange = OperationErrors.doNotDisturbOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotDisturbOutOfRange
 * @description Alias of {@link OperationErrors_doNotDisturbOutOfRange}.
 * @constant
 * @type {number}
 */
export
const doNotDisturbOutOfRange = OperationErrors.doNotDisturbOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_flowDirectionOutOfRange
 * @description flowDirection is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_flowDirectionOutOfRange = OperationErrors.flowDirectionOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flowDirectionOutOfRange
 * @description Alias of {@link OperationErrors_flowDirectionOutOfRange}.
 * @constant
 * @type {number}
 */
export
const flowDirectionOutOfRange = OperationErrors.flowDirectionOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_forwardingFlagOutOfRange
 * @description The forwarding flag is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_forwardingFlagOutOfRange = OperationErrors.forwardingFlagOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingFlagOutOfRange
 * @description Alias of {@link OperationErrors_forwardingFlagOutOfRange}.
 * @constant
 * @type {number}
 */
export
const forwardingFlagOutOfRange = OperationErrors.forwardingFlagOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_forwardingTypeOutOfRange
 * @description
 * forwardingType is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_forwardingTypeOutOfRange = OperationErrors.forwardingTypeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwardingTypeOutOfRange
 * @description Alias of {@link OperationErrors_forwardingTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const forwardingTypeOutOfRange = OperationErrors.forwardingTypeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_hookswitchComponentOutOfRange
 * @description
 * A hookswitch component is not a defined component. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_hookswitchComponentOutOfRange = OperationErrors.hookswitchComponentOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hookswitchComponentOutOfRange
 * @description Alias of {@link OperationErrors_hookswitchComponentOutOfRange}.
 * @constant
 * @type {number}
 */
export
const hookswitchComponentOutOfRange = OperationErrors.hookswitchComponentOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_hookswitchTypeOutOfRange
 * @description A hookswitch type is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_hookswitchTypeOutOfRange = OperationErrors.hookswitchTypeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hookswitchTypeOutOfRange
 * @description Alias of {@link OperationErrors_hookswitchTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const hookswitchTypeOutOfRange = OperationErrors.hookswitchTypeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_lampModeOutOfRange
 * @description A lamp mode setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_lampModeOutOfRange = OperationErrors.lampModeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lampModeOutOfRange
 * @description Alias of {@link OperationErrors_lampModeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const lampModeOutOfRange = OperationErrors.lampModeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_messageWaitingSettingOutOfRange = OperationErrors.messageWaitingSettingOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageWaitingSettingOutOfRange
 * @description
 * Alias of {@link OperationErrors_messageWaitingSettingOutOfRange}.
 * @constant
 * @type {number}
 */
export
const messageWaitingSettingOutOfRange = OperationErrors.messageWaitingSettingOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_micGainOutOfRange
 * @description A microphone gain setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_micGainOutOfRange = OperationErrors.micGainOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary micGainOutOfRange
 * @description Alias of {@link OperationErrors_micGainOutOfRange}.
 * @constant
 * @type {number}
 */
export
const micGainOutOfRange = OperationErrors.micGainOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_micMuteOutOfRange
 * @description A microphone mute setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_micMuteOutOfRange = OperationErrors.micMuteOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary micMuteOutOfRange
 * @description Alias of {@link OperationErrors_micMuteOutOfRange}.
 * @constant
 * @type {number}
 */
export
const micMuteOutOfRange = OperationErrors.micMuteOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_monitorTypeOutOfRange
 * @description The monitor type is not a defined value. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_monitorTypeOutOfRange = OperationErrors.monitorTypeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary monitorTypeOutOfRange
 * @description Alias of {@link OperationErrors_monitorTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const monitorTypeOutOfRange = OperationErrors.monitorTypeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_numberOfChannelsOutOfRange
 * @description
 * numberOfChannels is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_numberOfChannelsOutOfRange = OperationErrors.numberOfChannelsOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberOfChannelsOutOfRange
 * @description Alias of {@link OperationErrors_numberOfChannelsOutOfRange}.
 * @constant
 * @type {number}
 */
export
const numberOfChannelsOutOfRange = OperationErrors.numberOfChannelsOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_participationTypeOutOfRange
 * @description participationType is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_participationTypeOutOfRange = OperationErrors.participationTypeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary participationTypeOutOfRange
 * @description Alias of {@link OperationErrors_participationTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const participationTypeOutOfRange = OperationErrors.participationTypeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseDurationOutOfRange
 * @description pulseDuration is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseDurationOutOfRange = OperationErrors.pulseDurationOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseDurationOutOfRange
 * @description Alias of {@link OperationErrors_pulseDurationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const pulseDurationOutOfRange = OperationErrors.pulseDurationOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_pulseRateOutOfRange
 * @description pulseRate is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_pulseRateOutOfRange = OperationErrors.pulseRateOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pulseRateOutOfRange
 * @description Alias of {@link OperationErrors_pulseRateOutOfRange}.
 * @constant
 * @type {number}
 */
export
const pulseRateOutOfRange = OperationErrors.pulseRateOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringCountOutOfRange
 * @description The ring count is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringCountOutOfRange = OperationErrors.ringCountOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringCountOutOfRange
 * @description Alias of {@link OperationErrors_ringCountOutOfRange}.
 * @constant
 * @type {number}
 */
export
const ringCountOutOfRange = OperationErrors.ringCountOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringPatternOutOfRange
 * @description A ring-pattern setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringPatternOutOfRange = OperationErrors.ringPatternOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringPatternOutOfRange
 * @description Alias of {@link OperationErrors_ringPatternOutOfRange}.
 * @constant
 * @type {number}
 */
export
const ringPatternOutOfRange = OperationErrors.ringPatternOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_ringVolumnOutOfRange
 * @description A ring volume is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_ringVolumnOutOfRange = OperationErrors.ringVolumnOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ringVolumnOutOfRange
 * @description Alias of {@link OperationErrors_ringVolumnOutOfRange}.
 * @constant
 * @type {number}
 */
export
const ringVolumnOutOfRange = OperationErrors.ringVolumnOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_routeingAlgorithmOutOfRange
 * @description
 * routeSelAlgorithm is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_routeingAlgorithmOutOfRange = OperationErrors.routeingAlgorithmOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routeingAlgorithmOutOfRange
 * @description Alias of {@link OperationErrors_routeingAlgorithmOutOfRange}.
 * @constant
 * @type {number}
 */
export
const routeingAlgorithmOutOfRange = OperationErrors.routeingAlgorithmOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_speakerMuteOutOfRange
 * @description A speaker mute setting is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_speakerMuteOutOfRange = OperationErrors.speakerMuteOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerMuteOutOfRange
 * @description Alias of {@link OperationErrors_speakerMuteOutOfRange}.
 * @constant
 * @type {number}
 */
export
const speakerMuteOutOfRange = OperationErrors.speakerMuteOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_speakerVolumeOutOfRange
 * @description A speaker volume is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_speakerVolumeOutOfRange = OperationErrors.speakerVolumeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerVolumeOutOfRange
 * @description Alias of {@link OperationErrors_speakerVolumeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const speakerVolumeOutOfRange = OperationErrors.speakerVolumeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_switchingCcittTypeOutOfRange
 * @description
 * switchingSubDomainCCIEType is outside the defined range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_switchingCcittTypeOutOfRange = OperationErrors.switchingCcittTypeOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchingCcittTypeOutOfRange
 * @description Alias of {@link OperationErrors_switchingCcittTypeOutOfRange}.
 * @constant
 * @type {number}
 */
export
const switchingCcittTypeOutOfRange = OperationErrors.switchingCcittTypeOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_systemStatusOutOfRange
 * @description
 * The system status is not one of the defined values. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_systemStatusOutOfRange = OperationErrors.systemStatusOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary systemStatusOutOfRange
 * @description Alias of {@link OperationErrors_systemStatusOutOfRange}.
 * @constant
 * @type {number}
 */
export
const systemStatusOutOfRange = OperationErrors.systemStatusOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const OperationErrors_toneCharacterOutOfRange = OperationErrors.toneCharacterOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneCharacterOutOfRange
 * @description Alias of {@link OperationErrors_toneCharacterOutOfRange}.
 * @constant
 * @type {number}
 */
export
const toneCharacterOutOfRange = OperationErrors.toneCharacterOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationErrors_toneDurationOutOfRange
 * @description toneDuration is out of range. ECMA-269 §12.2.14.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const OperationErrors_toneDurationOutOfRange = OperationErrors.toneDurationOutOfRange satisfies OperationErrors; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary toneDurationOutOfRange
 * @description Alias of {@link OperationErrors_toneDurationOutOfRange}.
 * @constant
 * @type {number}
 */
export
const toneDurationOutOfRange = OperationErrors.toneDurationOutOfRange satisfies OperationErrors; /* SHORT_NAMED_ENUMERATED_VALUE */

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

/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { type ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary EventCause
 * @description
 *
 * Additional information on why a CSTA event was generated. Not all causes
 * apply to all events — each event lists the allowed causes. Present only while
 * the associated feature or situation remains active. ECMA-269 §12.2.15;
 * ECMA-285 §9.18.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventCause  ::=  ENUMERATED
 * {     aCDBusy                 ( 57),
 *     aCDForward                 ( 58),
 *     aCDSaturated                 ( 59),
 *     activation                ( 88),
 *     activeParticipation             (  1),
 *     alertTimeExpired             ( 60),
 *     alternate                 (  2),
 *     autoWork                 ( 61),
 *     babble                    ( 89),
 *     badAttribute                ( 90),
 *     badGrammar                ( 91),
 *     badVoice                ( 92),
 *     badUri                    ( 93),
 *     blocked                 ( 35),
 *     busy                     (  3),
 *     busyOverflow                ( 94),
 *     calendarOverflow            ( 95),
 *     callBack                 (  4),
 *     callCancelled                 (  5),
 *     callForward                 (  9),
 *     callForwardImmediate             (  6),
 *     callForwardBusy             (  7),
 *     callForwardNoAnswer             (  8),
 *     callInterception             (116),
 *     callInterceptionBusy            (117),
 *     callInterceptionForwarded        (118),
 *     callInterceptionNoAnswer        (119),
 *     callInterceptionResourcesNotAvailable    (120),
 *     callNotAnswered             ( 10),
 *     callPickup                 ( 11),
 *     campOn                     ( 12),
 *     campOnTrunks                 ( 62),
 *     capacityOverflow            ( 96),
 *     characterCountReached             ( 36),
 *     conference                 ( 63),
 *     consultation                 ( 37),
 *     destDetected                 ( 64),
 *     destNotObtainable             ( 13),
 *     destOutOfOrder                 ( 65),
 *     distributed                 ( 38),
 *     distributionDelay             ( 66),
 *     doNotDisturb                 ( 14),
 *     dTMFDigitDetected             ( 39),
 *     duplicateDTMF                ( 97),
 *     durationExceeded             ( 40),
 *     earlyStop                ( 98),
 *     emptyQueue                ( 99),
 *     endOfMessageDetected             ( 41),
 *     enteringDistribution             ( 42),
 *     forcedPause                 ( 43),
 *     forcedTransition             ( 67),
 *     incompatibleDestination         ( 15),
 *     interDigitTimeout            (100),
 *     intrude                 ( 68),
 *     invalidAccountCode             ( 16),
 *     invalidConnection            (101),
 *     invalidConnectionState            (102),
 *     invalidNumberFormat             ( 69),
 *     joinCall                 ( 70),
 *     keyOperation                 ( 17),
 *     keyOperationInUse             ( 71),
 *     lawfulInterception             (121),
 *     lockout                 ( 18),
 *     maintenance                 ( 19),
 *     makeCall                 ( 44),
 *     makeConnection                (103),
 *     makePredictiveCall             ( 72),
 *     maxTimeout                (104),
 *     messageDurationExceeded         ( 73),
 *     messageSizeExceeded             ( 45),
 *     multipleAlerting             ( 74),
 *     multipleQueuing             ( 75),
 *     networkCongestion             ( 20),
 *     networkDialling             ( 76),
 *     networkNotObtainable             ( 21),
 *     networkOutOfOrder             ( 77),
 *     networkSignal                 ( 46),
 *     newCall                 ( 22),
 *     nextMessage                 ( 47),
 *     noAudioSaved                (105),
 *     noAvailableAgents             ( 23),
 *     noQueue                    (106),
 *     normal                     ( 78),
 *     normalClearing                 ( 48),
 *     noRule                    (107),
 *     noSpeechDetected             ( 49),
 *     notAvaliableBearerService         ( 79),
 *     notSupportedBearerService         ( 80),
 *     numberChanged                 ( 50),
 *     numberUnallocated             ( 81),
 *     outOfGrammar                (108),
 *     overflow                 ( 26),
 *     override                 ( 24),
 *     park                     ( 25),
 *     pathReplacement                (109),
 *     queueCleared                 ( 82),
 *     queueTimeOverflow            (110),
 *     recall                     ( 27),
 *     recallBusy                (111),
 *     recallForwarded                (112),
 *     recallNoAnswer                (113),
 *     recallResourcesNotAvailable        (114),
 *     redirected                 ( 28),
 *     remainsInQueue                 ( 83),
 *     reorderTone                 ( 29),
 *     reserved                 ( 84),
 *     resourcesNotAvailable             ( 30),
 *     selectedTrunkBusy             ( 85),
 *     silentParticipation             ( 31),
 *     singleStepConference             ( 51),
 *     singleStepTransfer             ( 52),
 *     speechDetected                 ( 53),
 *     suspend                 ( 86),
 *     switchingFunctionTerminated         ( 54),
 *     terminationCharacterReceived         ( 55),
 *     timeout                 ( 56),
 *     transfer                 ( 32),
 *     trunksBusy                 ( 33),
 *     unauthorisedBearerService         ( 87),
 *     unknownOverflow                (115) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EventCause {
    aCDBusy = 57,
    aCDForward = 58,
    aCDSaturated = 59,
    activation = 88,
    activeParticipation = 1,
    alertTimeExpired = 60,
    alternate = 2,
    autoWork = 61,
    babble = 89,
    badAttribute = 90,
    badGrammar = 91,
    badVoice = 92,
    badUri = 93,
    blocked = 35,
    busy = 3,
    busyOverflow = 94,
    calendarOverflow = 95,
    callBack = 4,
    callCancelled = 5,
    callForward = 9,
    callForwardImmediate = 6,
    callForwardBusy = 7,
    callForwardNoAnswer = 8,
    callInterception = 116,
    callInterceptionBusy = 117,
    callInterceptionForwarded = 118,
    callInterceptionNoAnswer = 119,
    callInterceptionResourcesNotAvailable = 120,
    callNotAnswered = 10,
    callPickup = 11,
    campOn = 12,
    campOnTrunks = 62,
    capacityOverflow = 96,
    characterCountReached = 36,
    conference = 63,
    consultation = 37,
    destDetected = 64,
    destNotObtainable = 13,
    destOutOfOrder = 65,
    distributed = 38,
    distributionDelay = 66,
    doNotDisturb = 14,
    dTMFDigitDetected = 39,
    duplicateDTMF = 97,
    durationExceeded = 40,
    earlyStop = 98,
    emptyQueue = 99,
    endOfMessageDetected = 41,
    enteringDistribution = 42,
    forcedPause = 43,
    forcedTransition = 67,
    incompatibleDestination = 15,
    interDigitTimeout = 100,
    intrude = 68,
    invalidAccountCode = 16,
    invalidConnection = 101,
    invalidConnectionState = 102,
    invalidNumberFormat = 69,
    joinCall = 70,
    keyOperation = 17,
    keyOperationInUse = 71,
    lawfulInterception = 121,
    lockout = 18,
    maintenance = 19,
    makeCall = 44,
    makeConnection = 103,
    makePredictiveCall = 72,
    maxTimeout = 104,
    messageDurationExceeded = 73,
    messageSizeExceeded = 45,
    multipleAlerting = 74,
    multipleQueuing = 75,
    networkCongestion = 20,
    networkDialling = 76,
    networkNotObtainable = 21,
    networkOutOfOrder = 77,
    networkSignal = 46,
    newCall = 22,
    nextMessage = 47,
    noAudioSaved = 105,
    noAvailableAgents = 23,
    noQueue = 106,
    normal = 78,
    normalClearing = 48,
    noRule = 107,
    noSpeechDetected = 49,
    notAvaliableBearerService = 79,
    notSupportedBearerService = 80,
    numberChanged = 50,
    numberUnallocated = 81,
    outOfGrammar = 108,
    overflow = 26,
    override = 24,
    park = 25,
    pathReplacement = 109,
    queueCleared = 82,
    queueTimeOverflow = 110,
    recall = 27,
    recallBusy = 111,
    recallForwarded = 112,
    recallNoAnswer = 113,
    recallResourcesNotAvailable = 114,
    redirected = 28,
    remainsInQueue = 83,
    reorderTone = 29,
    reserved = 84,
    resourcesNotAvailable = 30,
    selectedTrunkBusy = 85,
    silentParticipation = 31,
    singleStepConference = 51,
    singleStepTransfer = 52,
    speechDetected = 53,
    suspend = 86,
    switchingFunctionTerminated = 54,
    terminationCharacterReceived = 55,
    timeout = 56,
    transfer = 32,
    trunksBusy = 33,
    unauthorisedBearerService = 87,
    unknownOverflow = 115,
}

/**
 * @summary EventCause
 * @description
 *
 * Additional information on why a CSTA event was generated. Not all causes
 * apply to all events — each event lists the allowed causes. Present only while
 * the associated feature or situation remains active. ECMA-269 §12.2.15;
 * ECMA-285 §9.18.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventCause  ::=  ENUMERATED
 * {     aCDBusy                 ( 57),
 *     aCDForward                 ( 58),
 *     aCDSaturated                 ( 59),
 *     activation                ( 88),
 *     activeParticipation             (  1),
 *     alertTimeExpired             ( 60),
 *     alternate                 (  2),
 *     autoWork                 ( 61),
 *     babble                    ( 89),
 *     badAttribute                ( 90),
 *     badGrammar                ( 91),
 *     badVoice                ( 92),
 *     badUri                    ( 93),
 *     blocked                 ( 35),
 *     busy                     (  3),
 *     busyOverflow                ( 94),
 *     calendarOverflow            ( 95),
 *     callBack                 (  4),
 *     callCancelled                 (  5),
 *     callForward                 (  9),
 *     callForwardImmediate             (  6),
 *     callForwardBusy             (  7),
 *     callForwardNoAnswer             (  8),
 *     callInterception             (116),
 *     callInterceptionBusy            (117),
 *     callInterceptionForwarded        (118),
 *     callInterceptionNoAnswer        (119),
 *     callInterceptionResourcesNotAvailable    (120),
 *     callNotAnswered             ( 10),
 *     callPickup                 ( 11),
 *     campOn                     ( 12),
 *     campOnTrunks                 ( 62),
 *     capacityOverflow            ( 96),
 *     characterCountReached             ( 36),
 *     conference                 ( 63),
 *     consultation                 ( 37),
 *     destDetected                 ( 64),
 *     destNotObtainable             ( 13),
 *     destOutOfOrder                 ( 65),
 *     distributed                 ( 38),
 *     distributionDelay             ( 66),
 *     doNotDisturb                 ( 14),
 *     dTMFDigitDetected             ( 39),
 *     duplicateDTMF                ( 97),
 *     durationExceeded             ( 40),
 *     earlyStop                ( 98),
 *     emptyQueue                ( 99),
 *     endOfMessageDetected             ( 41),
 *     enteringDistribution             ( 42),
 *     forcedPause                 ( 43),
 *     forcedTransition             ( 67),
 *     incompatibleDestination         ( 15),
 *     interDigitTimeout            (100),
 *     intrude                 ( 68),
 *     invalidAccountCode             ( 16),
 *     invalidConnection            (101),
 *     invalidConnectionState            (102),
 *     invalidNumberFormat             ( 69),
 *     joinCall                 ( 70),
 *     keyOperation                 ( 17),
 *     keyOperationInUse             ( 71),
 *     lawfulInterception             (121),
 *     lockout                 ( 18),
 *     maintenance                 ( 19),
 *     makeCall                 ( 44),
 *     makeConnection                (103),
 *     makePredictiveCall             ( 72),
 *     maxTimeout                (104),
 *     messageDurationExceeded         ( 73),
 *     messageSizeExceeded             ( 45),
 *     multipleAlerting             ( 74),
 *     multipleQueuing             ( 75),
 *     networkCongestion             ( 20),
 *     networkDialling             ( 76),
 *     networkNotObtainable             ( 21),
 *     networkOutOfOrder             ( 77),
 *     networkSignal                 ( 46),
 *     newCall                 ( 22),
 *     nextMessage                 ( 47),
 *     noAudioSaved                (105),
 *     noAvailableAgents             ( 23),
 *     noQueue                    (106),
 *     normal                     ( 78),
 *     normalClearing                 ( 48),
 *     noRule                    (107),
 *     noSpeechDetected             ( 49),
 *     notAvaliableBearerService         ( 79),
 *     notSupportedBearerService         ( 80),
 *     numberChanged                 ( 50),
 *     numberUnallocated             ( 81),
 *     outOfGrammar                (108),
 *     overflow                 ( 26),
 *     override                 ( 24),
 *     park                     ( 25),
 *     pathReplacement                (109),
 *     queueCleared                 ( 82),
 *     queueTimeOverflow            (110),
 *     recall                     ( 27),
 *     recallBusy                (111),
 *     recallForwarded                (112),
 *     recallNoAnswer                (113),
 *     recallResourcesNotAvailable        (114),
 *     redirected                 ( 28),
 *     remainsInQueue                 ( 83),
 *     reorderTone                 ( 29),
 *     reserved                 ( 84),
 *     resourcesNotAvailable             ( 30),
 *     selectedTrunkBusy             ( 85),
 *     silentParticipation             ( 31),
 *     singleStepConference             ( 51),
 *     singleStepTransfer             ( 52),
 *     speechDetected                 ( 53),
 *     suspend                 ( 86),
 *     switchingFunctionTerminated         ( 54),
 *     terminationCharacterReceived         ( 55),
 *     timeout                 ( 56),
 *     transfer                 ( 32),
 *     trunksBusy                 ( 33),
 *     unauthorisedBearerService         ( 87),
 *     unknownOverflow                (115) }
 * ```
 * 
 * @enum {number}
 */
export
type EventCause = _enum_for_EventCause;

/**
 * @summary EventCause
 * @description
 *
 * Additional information on why a CSTA event was generated. Not all causes
 * apply to all events — each event lists the allowed causes. Present only while
 * the associated feature or situation remains active. ECMA-269 §12.2.15;
 * ECMA-285 §9.18.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventCause  ::=  ENUMERATED
 * {     aCDBusy                 ( 57),
 *     aCDForward                 ( 58),
 *     aCDSaturated                 ( 59),
 *     activation                ( 88),
 *     activeParticipation             (  1),
 *     alertTimeExpired             ( 60),
 *     alternate                 (  2),
 *     autoWork                 ( 61),
 *     babble                    ( 89),
 *     badAttribute                ( 90),
 *     badGrammar                ( 91),
 *     badVoice                ( 92),
 *     badUri                    ( 93),
 *     blocked                 ( 35),
 *     busy                     (  3),
 *     busyOverflow                ( 94),
 *     calendarOverflow            ( 95),
 *     callBack                 (  4),
 *     callCancelled                 (  5),
 *     callForward                 (  9),
 *     callForwardImmediate             (  6),
 *     callForwardBusy             (  7),
 *     callForwardNoAnswer             (  8),
 *     callInterception             (116),
 *     callInterceptionBusy            (117),
 *     callInterceptionForwarded        (118),
 *     callInterceptionNoAnswer        (119),
 *     callInterceptionResourcesNotAvailable    (120),
 *     callNotAnswered             ( 10),
 *     callPickup                 ( 11),
 *     campOn                     ( 12),
 *     campOnTrunks                 ( 62),
 *     capacityOverflow            ( 96),
 *     characterCountReached             ( 36),
 *     conference                 ( 63),
 *     consultation                 ( 37),
 *     destDetected                 ( 64),
 *     destNotObtainable             ( 13),
 *     destOutOfOrder                 ( 65),
 *     distributed                 ( 38),
 *     distributionDelay             ( 66),
 *     doNotDisturb                 ( 14),
 *     dTMFDigitDetected             ( 39),
 *     duplicateDTMF                ( 97),
 *     durationExceeded             ( 40),
 *     earlyStop                ( 98),
 *     emptyQueue                ( 99),
 *     endOfMessageDetected             ( 41),
 *     enteringDistribution             ( 42),
 *     forcedPause                 ( 43),
 *     forcedTransition             ( 67),
 *     incompatibleDestination         ( 15),
 *     interDigitTimeout            (100),
 *     intrude                 ( 68),
 *     invalidAccountCode             ( 16),
 *     invalidConnection            (101),
 *     invalidConnectionState            (102),
 *     invalidNumberFormat             ( 69),
 *     joinCall                 ( 70),
 *     keyOperation                 ( 17),
 *     keyOperationInUse             ( 71),
 *     lawfulInterception             (121),
 *     lockout                 ( 18),
 *     maintenance                 ( 19),
 *     makeCall                 ( 44),
 *     makeConnection                (103),
 *     makePredictiveCall             ( 72),
 *     maxTimeout                (104),
 *     messageDurationExceeded         ( 73),
 *     messageSizeExceeded             ( 45),
 *     multipleAlerting             ( 74),
 *     multipleQueuing             ( 75),
 *     networkCongestion             ( 20),
 *     networkDialling             ( 76),
 *     networkNotObtainable             ( 21),
 *     networkOutOfOrder             ( 77),
 *     networkSignal                 ( 46),
 *     newCall                 ( 22),
 *     nextMessage                 ( 47),
 *     noAudioSaved                (105),
 *     noAvailableAgents             ( 23),
 *     noQueue                    (106),
 *     normal                     ( 78),
 *     normalClearing                 ( 48),
 *     noRule                    (107),
 *     noSpeechDetected             ( 49),
 *     notAvaliableBearerService         ( 79),
 *     notSupportedBearerService         ( 80),
 *     numberChanged                 ( 50),
 *     numberUnallocated             ( 81),
 *     outOfGrammar                (108),
 *     overflow                 ( 26),
 *     override                 ( 24),
 *     park                     ( 25),
 *     pathReplacement                (109),
 *     queueCleared                 ( 82),
 *     queueTimeOverflow            (110),
 *     recall                     ( 27),
 *     recallBusy                (111),
 *     recallForwarded                (112),
 *     recallNoAnswer                (113),
 *     recallResourcesNotAvailable        (114),
 *     redirected                 ( 28),
 *     remainsInQueue                 ( 83),
 *     reorderTone                 ( 29),
 *     reserved                 ( 84),
 *     resourcesNotAvailable             ( 30),
 *     selectedTrunkBusy             ( 85),
 *     silentParticipation             ( 31),
 *     singleStepConference             ( 51),
 *     singleStepTransfer             ( 52),
 *     speechDetected                 ( 53),
 *     suspend                 ( 86),
 *     switchingFunctionTerminated         ( 54),
 *     terminationCharacterReceived         ( 55),
 *     timeout                 ( 56),
 *     transfer                 ( 32),
 *     trunksBusy                 ( 33),
 *     unauthorisedBearerService         ( 87),
 *     unknownOverflow                (115) }
 * ```
 * 
 * @enum {number}
 */
export
const EventCause: typeof _enum_for_EventCause = _enum_for_EventCause;

/**
 * @summary EventCause_aCDBusy
 * @description ACD Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDBusy: _enum_for_EventCause.aCDBusy = EventCause.aCDBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDBusy
 * @description Alias of {@link EventCause_aCDBusy}.
 * @constant
 * @type {number}
 */
export
const aCDBusy: _enum_for_EventCause.aCDBusy = EventCause.aCDBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDForward
 * @description ACD Forward. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDForward: _enum_for_EventCause.aCDForward = EventCause.aCDForward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDForward
 * @description Alias of {@link EventCause_aCDForward}.
 * @constant
 * @type {number}
 */
export
const aCDForward: _enum_for_EventCause.aCDForward = EventCause.aCDForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDSaturated
 * @description ACD Saturated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDSaturated: _enum_for_EventCause.aCDSaturated = EventCause.aCDSaturated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDSaturated
 * @description Alias of {@link EventCause_aCDSaturated}.
 * @constant
 * @type {number}
 */
export
const aCDSaturated: _enum_for_EventCause.aCDSaturated = EventCause.aCDSaturated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activation
 * @description Activation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_activation: _enum_for_EventCause.activation = EventCause.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @description Alias of {@link EventCause_activation}.
 * @constant
 * @type {number}
 */
export
const activation: _enum_for_EventCause.activation = EventCause.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activeParticipation
 * @description Active Participation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_activeParticipation: _enum_for_EventCause.activeParticipation = EventCause.activeParticipation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeParticipation
 * @description Alias of {@link EventCause_activeParticipation}.
 * @constant
 * @type {number}
 */
export
const activeParticipation: _enum_for_EventCause.activeParticipation = EventCause.activeParticipation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alertTimeExpired
 * @description Alert Time Expired. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_alertTimeExpired: _enum_for_EventCause.alertTimeExpired = EventCause.alertTimeExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeExpired
 * @description Alias of {@link EventCause_alertTimeExpired}.
 * @constant
 * @type {number}
 */
export
const alertTimeExpired: _enum_for_EventCause.alertTimeExpired = EventCause.alertTimeExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alternate
 * @description Alternate. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_alternate: _enum_for_EventCause.alternate = EventCause.alternate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alternate
 * @description Alias of {@link EventCause_alternate}.
 * @constant
 * @type {number}
 */
export
const alternate: _enum_for_EventCause.alternate = EventCause.alternate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_autoWork
 * @description Auto Work. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_autoWork: _enum_for_EventCause.autoWork = EventCause.autoWork; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoWork
 * @description Alias of {@link EventCause_autoWork}.
 * @constant
 * @type {number}
 */
export
const autoWork: _enum_for_EventCause.autoWork = EventCause.autoWork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_babble
 * @description Babble. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_babble: _enum_for_EventCause.babble = EventCause.babble; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary babble
 * @description Alias of {@link EventCause_babble}.
 * @constant
 * @type {number}
 */
export
const babble: _enum_for_EventCause.babble = EventCause.babble; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badAttribute
 * @description Bad Attribute. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badAttribute: _enum_for_EventCause.badAttribute = EventCause.badAttribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badAttribute
 * @description Alias of {@link EventCause_badAttribute}.
 * @constant
 * @type {number}
 */
export
const badAttribute: _enum_for_EventCause.badAttribute = EventCause.badAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badGrammar
 * @description Bad Grammar. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badGrammar: _enum_for_EventCause.badGrammar = EventCause.badGrammar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badGrammar
 * @description Alias of {@link EventCause_badGrammar}.
 * @constant
 * @type {number}
 */
export
const badGrammar: _enum_for_EventCause.badGrammar = EventCause.badGrammar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badVoice
 * @description Bad Voice. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badVoice: _enum_for_EventCause.badVoice = EventCause.badVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badVoice
 * @description Alias of {@link EventCause_badVoice}.
 * @constant
 * @type {number}
 */
export
const badVoice: _enum_for_EventCause.badVoice = EventCause.badVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badUri
 * @description Bad URI. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badUri: _enum_for_EventCause.badUri = EventCause.badUri; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badUri
 * @description Alias of {@link EventCause_badUri}.
 * @constant
 * @type {number}
 */
export
const badUri: _enum_for_EventCause.badUri = EventCause.badUri; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_blocked
 * @description Blocked. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_blocked: _enum_for_EventCause.blocked = EventCause.blocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blocked
 * @description Alias of {@link EventCause_blocked}.
 * @constant
 * @type {number}
 */
export
const blocked: _enum_for_EventCause.blocked = EventCause.blocked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busy
 * @description Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_busy: _enum_for_EventCause.busy = EventCause.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description Alias of {@link EventCause_busy}.
 * @constant
 * @type {number}
 */
export
const busy: _enum_for_EventCause.busy = EventCause.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busyOverflow
 * @description Busy Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_busyOverflow: _enum_for_EventCause.busyOverflow = EventCause.busyOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busyOverflow
 * @description Alias of {@link EventCause_busyOverflow}.
 * @constant
 * @type {number}
 */
export
const busyOverflow: _enum_for_EventCause.busyOverflow = EventCause.busyOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_calendarOverflow
 * @description Calendar Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_calendarOverflow: _enum_for_EventCause.calendarOverflow = EventCause.calendarOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calendarOverflow
 * @description Alias of {@link EventCause_calendarOverflow}.
 * @constant
 * @type {number}
 */
export
const calendarOverflow: _enum_for_EventCause.calendarOverflow = EventCause.calendarOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callBack
 * @description Call Back. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callBack: _enum_for_EventCause.callBack = EventCause.callBack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBack
 * @description Alias of {@link EventCause_callBack}.
 * @constant
 * @type {number}
 */
export
const callBack: _enum_for_EventCause.callBack = EventCause.callBack; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callCancelled
 * @description Call Cancelled. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callCancelled: _enum_for_EventCause.callCancelled = EventCause.callCancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCancelled
 * @description Alias of {@link EventCause_callCancelled}.
 * @constant
 * @type {number}
 */
export
const callCancelled: _enum_for_EventCause.callCancelled = EventCause.callCancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForward
 * @description Call Forward. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForward: _enum_for_EventCause.callForward = EventCause.callForward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForward
 * @description Alias of {@link EventCause_callForward}.
 * @constant
 * @type {number}
 */
export
const callForward: _enum_for_EventCause.callForward = EventCause.callForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardImmediate
 * @description Call Forward - Immediate. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardImmediate: _enum_for_EventCause.callForwardImmediate = EventCause.callForwardImmediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardImmediate
 * @description Alias of {@link EventCause_callForwardImmediate}.
 * @constant
 * @type {number}
 */
export
const callForwardImmediate: _enum_for_EventCause.callForwardImmediate = EventCause.callForwardImmediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardBusy
 * @description Call Forward - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardBusy: _enum_for_EventCause.callForwardBusy = EventCause.callForwardBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardBusy
 * @description Alias of {@link EventCause_callForwardBusy}.
 * @constant
 * @type {number}
 */
export
const callForwardBusy: _enum_for_EventCause.callForwardBusy = EventCause.callForwardBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardNoAnswer
 * @description Call Forward - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardNoAnswer: _enum_for_EventCause.callForwardNoAnswer = EventCause.callForwardNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardNoAnswer
 * @description Alias of {@link EventCause_callForwardNoAnswer}.
 * @constant
 * @type {number}
 */
export
const callForwardNoAnswer: _enum_for_EventCause.callForwardNoAnswer = EventCause.callForwardNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterception
 * @description Call Interception. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterception: _enum_for_EventCause.callInterception = EventCause.callInterception; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterception
 * @description Alias of {@link EventCause_callInterception}.
 * @constant
 * @type {number}
 */
export
const callInterception: _enum_for_EventCause.callInterception = EventCause.callInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionBusy
 * @description Call Interception - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionBusy: _enum_for_EventCause.callInterceptionBusy = EventCause.callInterceptionBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionBusy
 * @description Alias of {@link EventCause_callInterceptionBusy}.
 * @constant
 * @type {number}
 */
export
const callInterceptionBusy: _enum_for_EventCause.callInterceptionBusy = EventCause.callInterceptionBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionForwarded
 * @description Call Interception - Forwarded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionForwarded: _enum_for_EventCause.callInterceptionForwarded = EventCause.callInterceptionForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionForwarded
 * @description Alias of {@link EventCause_callInterceptionForwarded}.
 * @constant
 * @type {number}
 */
export
const callInterceptionForwarded: _enum_for_EventCause.callInterceptionForwarded = EventCause.callInterceptionForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionNoAnswer
 * @description Call Interception - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionNoAnswer: _enum_for_EventCause.callInterceptionNoAnswer = EventCause.callInterceptionNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionNoAnswer
 * @description Alias of {@link EventCause_callInterceptionNoAnswer}.
 * @constant
 * @type {number}
 */
export
const callInterceptionNoAnswer: _enum_for_EventCause.callInterceptionNoAnswer = EventCause.callInterceptionNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionResourcesNotAvailable
 * @description Call Interception - Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionResourcesNotAvailable: _enum_for_EventCause.callInterceptionResourcesNotAvailable = EventCause.callInterceptionResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionResourcesNotAvailable
 * @description
 * Alias of {@link EventCause_callInterceptionResourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const callInterceptionResourcesNotAvailable: _enum_for_EventCause.callInterceptionResourcesNotAvailable = EventCause.callInterceptionResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callNotAnswered
 * @description Call Not Answered. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callNotAnswered: _enum_for_EventCause.callNotAnswered = EventCause.callNotAnswered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callNotAnswered
 * @description Alias of {@link EventCause_callNotAnswered}.
 * @constant
 * @type {number}
 */
export
const callNotAnswered: _enum_for_EventCause.callNotAnswered = EventCause.callNotAnswered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callPickup
 * @description Call Pickup. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callPickup: _enum_for_EventCause.callPickup = EventCause.callPickup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callPickup
 * @description Alias of {@link EventCause_callPickup}.
 * @constant
 * @type {number}
 */
export
const callPickup: _enum_for_EventCause.callPickup = EventCause.callPickup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOn
 * @description Camp On. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_campOn: _enum_for_EventCause.campOn = EventCause.campOn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOn
 * @description Alias of {@link EventCause_campOn}.
 * @constant
 * @type {number}
 */
export
const campOn: _enum_for_EventCause.campOn = EventCause.campOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOnTrunks
 * @description Camp On Trunks. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_campOnTrunks: _enum_for_EventCause.campOnTrunks = EventCause.campOnTrunks; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOnTrunks
 * @description Alias of {@link EventCause_campOnTrunks}.
 * @constant
 * @type {number}
 */
export
const campOnTrunks: _enum_for_EventCause.campOnTrunks = EventCause.campOnTrunks; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_capacityOverflow
 * @description Capacity Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_capacityOverflow: _enum_for_EventCause.capacityOverflow = EventCause.capacityOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary capacityOverflow
 * @description Alias of {@link EventCause_capacityOverflow}.
 * @constant
 * @type {number}
 */
export
const capacityOverflow: _enum_for_EventCause.capacityOverflow = EventCause.capacityOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_characterCountReached
 * @description Character Count Reached. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_characterCountReached: _enum_for_EventCause.characterCountReached = EventCause.characterCountReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCountReached
 * @description Alias of {@link EventCause_characterCountReached}.
 * @constant
 * @type {number}
 */
export
const characterCountReached: _enum_for_EventCause.characterCountReached = EventCause.characterCountReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_conference
 * @description Conference. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_conference: _enum_for_EventCause.conference = EventCause.conference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conference
 * @description Alias of {@link EventCause_conference}.
 * @constant
 * @type {number}
 */
export
const conference: _enum_for_EventCause.conference = EventCause.conference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_consultation
 * @description Consultation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_consultation: _enum_for_EventCause.consultation = EventCause.consultation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultation
 * @description Alias of {@link EventCause_consultation}.
 * @constant
 * @type {number}
 */
export
const consultation: _enum_for_EventCause.consultation = EventCause.consultation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destDetected
 * @description Destination Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destDetected: _enum_for_EventCause.destDetected = EventCause.destDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destDetected
 * @description Alias of {@link EventCause_destDetected}.
 * @constant
 * @type {number}
 */
export
const destDetected: _enum_for_EventCause.destDetected = EventCause.destDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destNotObtainable
 * @description Destination Not Obtainable. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destNotObtainable: _enum_for_EventCause.destNotObtainable = EventCause.destNotObtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destNotObtainable
 * @description Alias of {@link EventCause_destNotObtainable}.
 * @constant
 * @type {number}
 */
export
const destNotObtainable: _enum_for_EventCause.destNotObtainable = EventCause.destNotObtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destOutOfOrder
 * @description Destination Out of Order. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destOutOfOrder: _enum_for_EventCause.destOutOfOrder = EventCause.destOutOfOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destOutOfOrder
 * @description Alias of {@link EventCause_destOutOfOrder}.
 * @constant
 * @type {number}
 */
export
const destOutOfOrder: _enum_for_EventCause.destOutOfOrder = EventCause.destOutOfOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributed
 * @description Distributed. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_distributed: _enum_for_EventCause.distributed = EventCause.distributed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributed
 * @description Alias of {@link EventCause_distributed}.
 * @constant
 * @type {number}
 */
export
const distributed: _enum_for_EventCause.distributed = EventCause.distributed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributionDelay
 * @description Distribution Delay. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_distributionDelay: _enum_for_EventCause.distributionDelay = EventCause.distributionDelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributionDelay
 * @description Alias of {@link EventCause_distributionDelay}.
 * @constant
 * @type {number}
 */
export
const distributionDelay: _enum_for_EventCause.distributionDelay = EventCause.distributionDelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_doNotDisturb
 * @description Do Not Disturb. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_doNotDisturb: _enum_for_EventCause.doNotDisturb = EventCause.doNotDisturb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotDisturb
 * @description Alias of {@link EventCause_doNotDisturb}.
 * @constant
 * @type {number}
 */
export
const doNotDisturb: _enum_for_EventCause.doNotDisturb = EventCause.doNotDisturb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_dTMFDigitDetected
 * @description DTMF Digit Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_dTMFDigitDetected: _enum_for_EventCause.dTMFDigitDetected = EventCause.dTMFDigitDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dTMFDigitDetected
 * @description Alias of {@link EventCause_dTMFDigitDetected}.
 * @constant
 * @type {number}
 */
export
const dTMFDigitDetected: _enum_for_EventCause.dTMFDigitDetected = EventCause.dTMFDigitDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_duplicateDTMF
 * @description Duplicate DTMF. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_duplicateDTMF: _enum_for_EventCause.duplicateDTMF = EventCause.duplicateDTMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateDTMF
 * @description Alias of {@link EventCause_duplicateDTMF}.
 * @constant
 * @type {number}
 */
export
const duplicateDTMF: _enum_for_EventCause.duplicateDTMF = EventCause.duplicateDTMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_durationExceeded
 * @description Duration Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_durationExceeded: _enum_for_EventCause.durationExceeded = EventCause.durationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary durationExceeded
 * @description Alias of {@link EventCause_durationExceeded}.
 * @constant
 * @type {number}
 */
export
const durationExceeded: _enum_for_EventCause.durationExceeded = EventCause.durationExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_earlyStop
 * @description Early Stop. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_earlyStop: _enum_for_EventCause.earlyStop = EventCause.earlyStop; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyStop
 * @description Alias of {@link EventCause_earlyStop}.
 * @constant
 * @type {number}
 */
export
const earlyStop: _enum_for_EventCause.earlyStop = EventCause.earlyStop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_emptyQueue
 * @description Empty Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_emptyQueue: _enum_for_EventCause.emptyQueue = EventCause.emptyQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emptyQueue
 * @description Alias of {@link EventCause_emptyQueue}.
 * @constant
 * @type {number}
 */
export
const emptyQueue: _enum_for_EventCause.emptyQueue = EventCause.emptyQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_endOfMessageDetected
 * @description End of Message Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_endOfMessageDetected: _enum_for_EventCause.endOfMessageDetected = EventCause.endOfMessageDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfMessageDetected
 * @description Alias of {@link EventCause_endOfMessageDetected}.
 * @constant
 * @type {number}
 */
export
const endOfMessageDetected: _enum_for_EventCause.endOfMessageDetected = EventCause.endOfMessageDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_enteringDistribution
 * @description Entering Distribution. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_enteringDistribution: _enum_for_EventCause.enteringDistribution = EventCause.enteringDistribution; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enteringDistribution
 * @description Alias of {@link EventCause_enteringDistribution}.
 * @constant
 * @type {number}
 */
export
const enteringDistribution: _enum_for_EventCause.enteringDistribution = EventCause.enteringDistribution; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedPause
 * @description Forced Pause. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_forcedPause: _enum_for_EventCause.forcedPause = EventCause.forcedPause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedPause
 * @description Alias of {@link EventCause_forcedPause}.
 * @constant
 * @type {number}
 */
export
const forcedPause: _enum_for_EventCause.forcedPause = EventCause.forcedPause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedTransition
 * @description Forced Transition. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_forcedTransition: _enum_for_EventCause.forcedTransition = EventCause.forcedTransition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedTransition
 * @description Alias of {@link EventCause_forcedTransition}.
 * @constant
 * @type {number}
 */
export
const forcedTransition: _enum_for_EventCause.forcedTransition = EventCause.forcedTransition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_incompatibleDestination
 * @description Incompatible Destination. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_incompatibleDestination: _enum_for_EventCause.incompatibleDestination = EventCause.incompatibleDestination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incompatibleDestination
 * @description Alias of {@link EventCause_incompatibleDestination}.
 * @constant
 * @type {number}
 */
export
const incompatibleDestination: _enum_for_EventCause.incompatibleDestination = EventCause.incompatibleDestination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_interDigitTimeout
 * @description inter-digit Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_interDigitTimeout: _enum_for_EventCause.interDigitTimeout = EventCause.interDigitTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interDigitTimeout
 * @description Alias of {@link EventCause_interDigitTimeout}.
 * @constant
 * @type {number}
 */
export
const interDigitTimeout: _enum_for_EventCause.interDigitTimeout = EventCause.interDigitTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_intrude
 * @description Intrude. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_intrude: _enum_for_EventCause.intrude = EventCause.intrude; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrude
 * @description Alias of {@link EventCause_intrude}.
 * @constant
 * @type {number}
 */
export
const intrude: _enum_for_EventCause.intrude = EventCause.intrude; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidAccountCode
 * @description Invalid Account Code. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidAccountCode: _enum_for_EventCause.invalidAccountCode = EventCause.invalidAccountCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAccountCode
 * @description Alias of {@link EventCause_invalidAccountCode}.
 * @constant
 * @type {number}
 */
export
const invalidAccountCode: _enum_for_EventCause.invalidAccountCode = EventCause.invalidAccountCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnection
 * @description Invalid Connection. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidConnection: _enum_for_EventCause.invalidConnection = EventCause.invalidConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnection
 * @description Alias of {@link EventCause_invalidConnection}.
 * @constant
 * @type {number}
 */
export
const invalidConnection: _enum_for_EventCause.invalidConnection = EventCause.invalidConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnectionState
 * @description Invalid Connection State. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidConnectionState: _enum_for_EventCause.invalidConnectionState = EventCause.invalidConnectionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionState
 * @description Alias of {@link EventCause_invalidConnectionState}.
 * @constant
 * @type {number}
 */
export
const invalidConnectionState: _enum_for_EventCause.invalidConnectionState = EventCause.invalidConnectionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidNumberFormat
 * @description Invalid Number Format. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidNumberFormat: _enum_for_EventCause.invalidNumberFormat = EventCause.invalidNumberFormat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNumberFormat
 * @description Alias of {@link EventCause_invalidNumberFormat}.
 * @constant
 * @type {number}
 */
export
const invalidNumberFormat: _enum_for_EventCause.invalidNumberFormat = EventCause.invalidNumberFormat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_joinCall
 * @description Join Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_joinCall: _enum_for_EventCause.joinCall = EventCause.joinCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary joinCall
 * @description Alias of {@link EventCause_joinCall}.
 * @constant
 * @type {number}
 */
export
const joinCall: _enum_for_EventCause.joinCall = EventCause.joinCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperation
 * @description Key Operation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_keyOperation: _enum_for_EventCause.keyOperation = EventCause.keyOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperation
 * @description Alias of {@link EventCause_keyOperation}.
 * @constant
 * @type {number}
 */
export
const keyOperation: _enum_for_EventCause.keyOperation = EventCause.keyOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperationInUse
 * @description Key Operation In Use. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_keyOperationInUse: _enum_for_EventCause.keyOperationInUse = EventCause.keyOperationInUse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperationInUse
 * @description Alias of {@link EventCause_keyOperationInUse}.
 * @constant
 * @type {number}
 */
export
const keyOperationInUse: _enum_for_EventCause.keyOperationInUse = EventCause.keyOperationInUse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lawfulInterception
 * @description Lawful Interception. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_lawfulInterception: _enum_for_EventCause.lawfulInterception = EventCause.lawfulInterception; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lawfulInterception
 * @description Alias of {@link EventCause_lawfulInterception}.
 * @constant
 * @type {number}
 */
export
const lawfulInterception: _enum_for_EventCause.lawfulInterception = EventCause.lawfulInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lockout
 * @description Lockout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_lockout: _enum_for_EventCause.lockout = EventCause.lockout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lockout
 * @description Alias of {@link EventCause_lockout}.
 * @constant
 * @type {number}
 */
export
const lockout: _enum_for_EventCause.lockout = EventCause.lockout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maintenance
 * @description Maintenance. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_maintenance: _enum_for_EventCause.maintenance = EventCause.maintenance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maintenance
 * @description Alias of {@link EventCause_maintenance}.
 * @constant
 * @type {number}
 */
export
const maintenance: _enum_for_EventCause.maintenance = EventCause.maintenance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeCall
 * @description Make Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makeCall: _enum_for_EventCause.makeCall = EventCause.makeCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeCall
 * @description Alias of {@link EventCause_makeCall}.
 * @constant
 * @type {number}
 */
export
const makeCall: _enum_for_EventCause.makeCall = EventCause.makeCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeConnection
 * @description Make Connection. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makeConnection: _enum_for_EventCause.makeConnection = EventCause.makeConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeConnection
 * @description Alias of {@link EventCause_makeConnection}.
 * @constant
 * @type {number}
 */
export
const makeConnection: _enum_for_EventCause.makeConnection = EventCause.makeConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makePredictiveCall
 * @description Make Predictive Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makePredictiveCall: _enum_for_EventCause.makePredictiveCall = EventCause.makePredictiveCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makePredictiveCall
 * @description Alias of {@link EventCause_makePredictiveCall}.
 * @constant
 * @type {number}
 */
export
const makePredictiveCall: _enum_for_EventCause.makePredictiveCall = EventCause.makePredictiveCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maxTimeout
 * @description Max Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_maxTimeout: _enum_for_EventCause.maxTimeout = EventCause.maxTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxTimeout
 * @description Alias of {@link EventCause_maxTimeout}.
 * @constant
 * @type {number}
 */
export
const maxTimeout: _enum_for_EventCause.maxTimeout = EventCause.maxTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageDurationExceeded
 * @description Message Duration Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_messageDurationExceeded: _enum_for_EventCause.messageDurationExceeded = EventCause.messageDurationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageDurationExceeded
 * @description Alias of {@link EventCause_messageDurationExceeded}.
 * @constant
 * @type {number}
 */
export
const messageDurationExceeded: _enum_for_EventCause.messageDurationExceeded = EventCause.messageDurationExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageSizeExceeded
 * @description Message Size Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_messageSizeExceeded: _enum_for_EventCause.messageSizeExceeded = EventCause.messageSizeExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageSizeExceeded
 * @description Alias of {@link EventCause_messageSizeExceeded}.
 * @constant
 * @type {number}
 */
export
const messageSizeExceeded: _enum_for_EventCause.messageSizeExceeded = EventCause.messageSizeExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleAlerting
 * @description Multiple Alerting. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_multipleAlerting: _enum_for_EventCause.multipleAlerting = EventCause.multipleAlerting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleAlerting
 * @description Alias of {@link EventCause_multipleAlerting}.
 * @constant
 * @type {number}
 */
export
const multipleAlerting: _enum_for_EventCause.multipleAlerting = EventCause.multipleAlerting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleQueuing
 * @description Multiple Queuing. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_multipleQueuing: _enum_for_EventCause.multipleQueuing = EventCause.multipleQueuing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleQueuing
 * @description Alias of {@link EventCause_multipleQueuing}.
 * @constant
 * @type {number}
 */
export
const multipleQueuing: _enum_for_EventCause.multipleQueuing = EventCause.multipleQueuing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkCongestion
 * @description Network Congestion. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkCongestion: _enum_for_EventCause.networkCongestion = EventCause.networkCongestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkCongestion
 * @description Alias of {@link EventCause_networkCongestion}.
 * @constant
 * @type {number}
 */
export
const networkCongestion: _enum_for_EventCause.networkCongestion = EventCause.networkCongestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkDialling
 * @description Network Dialling. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkDialling: _enum_for_EventCause.networkDialling = EventCause.networkDialling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkDialling
 * @description Alias of {@link EventCause_networkDialling}.
 * @constant
 * @type {number}
 */
export
const networkDialling: _enum_for_EventCause.networkDialling = EventCause.networkDialling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkNotObtainable
 * @description Network Not Obtainable. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkNotObtainable: _enum_for_EventCause.networkNotObtainable = EventCause.networkNotObtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkNotObtainable
 * @description Alias of {@link EventCause_networkNotObtainable}.
 * @constant
 * @type {number}
 */
export
const networkNotObtainable: _enum_for_EventCause.networkNotObtainable = EventCause.networkNotObtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkOutOfOrder
 * @description Network Out of Order. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkOutOfOrder: _enum_for_EventCause.networkOutOfOrder = EventCause.networkOutOfOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkOutOfOrder
 * @description Alias of {@link EventCause_networkOutOfOrder}.
 * @constant
 * @type {number}
 */
export
const networkOutOfOrder: _enum_for_EventCause.networkOutOfOrder = EventCause.networkOutOfOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkSignal
 * @description Network Signal. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkSignal: _enum_for_EventCause.networkSignal = EventCause.networkSignal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSignal
 * @description Alias of {@link EventCause_networkSignal}.
 * @constant
 * @type {number}
 */
export
const networkSignal: _enum_for_EventCause.networkSignal = EventCause.networkSignal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_newCall
 * @description New Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_newCall: _enum_for_EventCause.newCall = EventCause.newCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newCall
 * @description Alias of {@link EventCause_newCall}.
 * @constant
 * @type {number}
 */
export
const newCall: _enum_for_EventCause.newCall = EventCause.newCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_nextMessage
 * @description Next Message. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_nextMessage: _enum_for_EventCause.nextMessage = EventCause.nextMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nextMessage
 * @description Alias of {@link EventCause_nextMessage}.
 * @constant
 * @type {number}
 */
export
const nextMessage: _enum_for_EventCause.nextMessage = EventCause.nextMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAudioSaved
 * @description No Audio Saved. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noAudioSaved: _enum_for_EventCause.noAudioSaved = EventCause.noAudioSaved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAudioSaved
 * @description Alias of {@link EventCause_noAudioSaved}.
 * @constant
 * @type {number}
 */
export
const noAudioSaved: _enum_for_EventCause.noAudioSaved = EventCause.noAudioSaved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAvailableAgents
 * @description No Available Agents. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noAvailableAgents: _enum_for_EventCause.noAvailableAgents = EventCause.noAvailableAgents; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAvailableAgents
 * @description Alias of {@link EventCause_noAvailableAgents}.
 * @constant
 * @type {number}
 */
export
const noAvailableAgents: _enum_for_EventCause.noAvailableAgents = EventCause.noAvailableAgents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noQueue
 * @description No Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noQueue: _enum_for_EventCause.noQueue = EventCause.noQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noQueue
 * @description Alias of {@link EventCause_noQueue}.
 * @constant
 * @type {number}
 */
export
const noQueue: _enum_for_EventCause.noQueue = EventCause.noQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normal
 * @description Normal. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_normal: _enum_for_EventCause.normal = EventCause.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @description Alias of {@link EventCause_normal}.
 * @constant
 * @type {number}
 */
export
const normal: _enum_for_EventCause.normal = EventCause.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normalClearing
 * @description Normal Clearing. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_normalClearing: _enum_for_EventCause.normalClearing = EventCause.normalClearing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalClearing
 * @description Alias of {@link EventCause_normalClearing}.
 * @constant
 * @type {number}
 */
export
const normalClearing: _enum_for_EventCause.normalClearing = EventCause.normalClearing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noRule
 * @description No Rule. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noRule: _enum_for_EventCause.noRule = EventCause.noRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noRule
 * @description Alias of {@link EventCause_noRule}.
 * @constant
 * @type {number}
 */
export
const noRule: _enum_for_EventCause.noRule = EventCause.noRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noSpeechDetected
 * @description No Speech Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noSpeechDetected: _enum_for_EventCause.noSpeechDetected = EventCause.noSpeechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSpeechDetected
 * @description Alias of {@link EventCause_noSpeechDetected}.
 * @constant
 * @type {number}
 */
export
const noSpeechDetected: _enum_for_EventCause.noSpeechDetected = EventCause.noSpeechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notAvaliableBearerService
 * @description Not Available Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_notAvaliableBearerService: _enum_for_EventCause.notAvaliableBearerService = EventCause.notAvaliableBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAvaliableBearerService
 * @description Alias of {@link EventCause_notAvaliableBearerService}.
 * @constant
 * @type {number}
 */
export
const notAvaliableBearerService: _enum_for_EventCause.notAvaliableBearerService = EventCause.notAvaliableBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notSupportedBearerService
 * @description Not Supported Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_notSupportedBearerService: _enum_for_EventCause.notSupportedBearerService = EventCause.notSupportedBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSupportedBearerService
 * @description Alias of {@link EventCause_notSupportedBearerService}.
 * @constant
 * @type {number}
 */
export
const notSupportedBearerService: _enum_for_EventCause.notSupportedBearerService = EventCause.notSupportedBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberChanged
 * @description Number Changed. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_numberChanged: _enum_for_EventCause.numberChanged = EventCause.numberChanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberChanged
 * @description Alias of {@link EventCause_numberChanged}.
 * @constant
 * @type {number}
 */
export
const numberChanged: _enum_for_EventCause.numberChanged = EventCause.numberChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberUnallocated
 * @description Number Unallocated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_numberUnallocated: _enum_for_EventCause.numberUnallocated = EventCause.numberUnallocated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberUnallocated
 * @description Alias of {@link EventCause_numberUnallocated}.
 * @constant
 * @type {number}
 */
export
const numberUnallocated: _enum_for_EventCause.numberUnallocated = EventCause.numberUnallocated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_outOfGrammar
 * @description Out Of Grammar. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_outOfGrammar: _enum_for_EventCause.outOfGrammar = EventCause.outOfGrammar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfGrammar
 * @description Alias of {@link EventCause_outOfGrammar}.
 * @constant
 * @type {number}
 */
export
const outOfGrammar: _enum_for_EventCause.outOfGrammar = EventCause.outOfGrammar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_overflow
 * @description Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_overflow: _enum_for_EventCause.overflow = EventCause.overflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overflow
 * @description Alias of {@link EventCause_overflow}.
 * @constant
 * @type {number}
 */
export
const overflow: _enum_for_EventCause.overflow = EventCause.overflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_override
 * @description Override. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_override: _enum_for_EventCause.override = EventCause.override; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary override
 * @description Alias of {@link EventCause_override}.
 * @constant
 * @type {number}
 */
export
const override: _enum_for_EventCause.override = EventCause.override; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_park
 * @description Park. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_park: _enum_for_EventCause.park = EventCause.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @description Alias of {@link EventCause_park}.
 * @constant
 * @type {number}
 */
export
const park: _enum_for_EventCause.park = EventCause.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_pathReplacement
 * @description Path Replacement. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_pathReplacement: _enum_for_EventCause.pathReplacement = EventCause.pathReplacement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathReplacement
 * @description Alias of {@link EventCause_pathReplacement}.
 * @constant
 * @type {number}
 */
export
const pathReplacement: _enum_for_EventCause.pathReplacement = EventCause.pathReplacement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueCleared
 * @description Queue Cleared. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_queueCleared: _enum_for_EventCause.queueCleared = EventCause.queueCleared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueCleared
 * @description Alias of {@link EventCause_queueCleared}.
 * @constant
 * @type {number}
 */
export
const queueCleared: _enum_for_EventCause.queueCleared = EventCause.queueCleared; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueTimeOverflow
 * @description Queue Time Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_queueTimeOverflow: _enum_for_EventCause.queueTimeOverflow = EventCause.queueTimeOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueTimeOverflow
 * @description Alias of {@link EventCause_queueTimeOverflow}.
 * @constant
 * @type {number}
 */
export
const queueTimeOverflow: _enum_for_EventCause.queueTimeOverflow = EventCause.queueTimeOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recall
 * @description Recall. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recall: _enum_for_EventCause.recall = EventCause.recall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recall
 * @description Alias of {@link EventCause_recall}.
 * @constant
 * @type {number}
 */
export
const recall: _enum_for_EventCause.recall = EventCause.recall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallBusy
 * @description Recall - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallBusy: _enum_for_EventCause.recallBusy = EventCause.recallBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallBusy
 * @description Alias of {@link EventCause_recallBusy}.
 * @constant
 * @type {number}
 */
export
const recallBusy: _enum_for_EventCause.recallBusy = EventCause.recallBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallForwarded
 * @description Recall - Forwarded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallForwarded: _enum_for_EventCause.recallForwarded = EventCause.recallForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallForwarded
 * @description Alias of {@link EventCause_recallForwarded}.
 * @constant
 * @type {number}
 */
export
const recallForwarded: _enum_for_EventCause.recallForwarded = EventCause.recallForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallNoAnswer
 * @description Recall - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallNoAnswer: _enum_for_EventCause.recallNoAnswer = EventCause.recallNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallNoAnswer
 * @description Alias of {@link EventCause_recallNoAnswer}.
 * @constant
 * @type {number}
 */
export
const recallNoAnswer: _enum_for_EventCause.recallNoAnswer = EventCause.recallNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallResourcesNotAvailable
 * @description Recall - Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallResourcesNotAvailable: _enum_for_EventCause.recallResourcesNotAvailable = EventCause.recallResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallResourcesNotAvailable
 * @description Alias of {@link EventCause_recallResourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const recallResourcesNotAvailable: _enum_for_EventCause.recallResourcesNotAvailable = EventCause.recallResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_redirected
 * @description Redirected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_redirected: _enum_for_EventCause.redirected = EventCause.redirected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redirected
 * @description Alias of {@link EventCause_redirected}.
 * @constant
 * @type {number}
 */
export
const redirected: _enum_for_EventCause.redirected = EventCause.redirected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_remainsInQueue
 * @description Remains in Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_remainsInQueue: _enum_for_EventCause.remainsInQueue = EventCause.remainsInQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainsInQueue
 * @description Alias of {@link EventCause_remainsInQueue}.
 * @constant
 * @type {number}
 */
export
const remainsInQueue: _enum_for_EventCause.remainsInQueue = EventCause.remainsInQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reorderTone
 * @description Reorder Tone. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_reorderTone: _enum_for_EventCause.reorderTone = EventCause.reorderTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorderTone
 * @description Alias of {@link EventCause_reorderTone}.
 * @constant
 * @type {number}
 */
export
const reorderTone: _enum_for_EventCause.reorderTone = EventCause.reorderTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reserved
 * @description Reserved. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_reserved: _enum_for_EventCause.reserved = EventCause.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @description Alias of {@link EventCause_reserved}.
 * @constant
 * @type {number}
 */
export
const reserved: _enum_for_EventCause.reserved = EventCause.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_resourcesNotAvailable
 * @description Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_resourcesNotAvailable: _enum_for_EventCause.resourcesNotAvailable = EventCause.resourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourcesNotAvailable
 * @description Alias of {@link EventCause_resourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const resourcesNotAvailable: _enum_for_EventCause.resourcesNotAvailable = EventCause.resourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_selectedTrunkBusy
 * @description Selected Trunk Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_selectedTrunkBusy: _enum_for_EventCause.selectedTrunkBusy = EventCause.selectedTrunkBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectedTrunkBusy
 * @description Alias of {@link EventCause_selectedTrunkBusy}.
 * @constant
 * @type {number}
 */
export
const selectedTrunkBusy: _enum_for_EventCause.selectedTrunkBusy = EventCause.selectedTrunkBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_silentParticipation
 * @description Silent Participation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_silentParticipation: _enum_for_EventCause.silentParticipation = EventCause.silentParticipation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silentParticipation
 * @description Alias of {@link EventCause_silentParticipation}.
 * @constant
 * @type {number}
 */
export
const silentParticipation: _enum_for_EventCause.silentParticipation = EventCause.silentParticipation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepConference
 * @description Single Step Conference. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_singleStepConference: _enum_for_EventCause.singleStepConference = EventCause.singleStepConference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConference
 * @description Alias of {@link EventCause_singleStepConference}.
 * @constant
 * @type {number}
 */
export
const singleStepConference: _enum_for_EventCause.singleStepConference = EventCause.singleStepConference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepTransfer
 * @description Single Step Transfer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_singleStepTransfer: _enum_for_EventCause.singleStepTransfer = EventCause.singleStepTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepTransfer
 * @description Alias of {@link EventCause_singleStepTransfer}.
 * @constant
 * @type {number}
 */
export
const singleStepTransfer: _enum_for_EventCause.singleStepTransfer = EventCause.singleStepTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_speechDetected
 * @description Speech Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_speechDetected: _enum_for_EventCause.speechDetected = EventCause.speechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechDetected
 * @description Alias of {@link EventCause_speechDetected}.
 * @constant
 * @type {number}
 */
export
const speechDetected: _enum_for_EventCause.speechDetected = EventCause.speechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_suspend
 * @description Suspend. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_suspend: _enum_for_EventCause.suspend = EventCause.suspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @description Alias of {@link EventCause_suspend}.
 * @constant
 * @type {number}
 */
export
const suspend: _enum_for_EventCause.suspend = EventCause.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_switchingFunctionTerminated
 * @description Switching Function Terminated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_switchingFunctionTerminated: _enum_for_EventCause.switchingFunctionTerminated = EventCause.switchingFunctionTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchingFunctionTerminated
 * @description Alias of {@link EventCause_switchingFunctionTerminated}.
 * @constant
 * @type {number}
 */
export
const switchingFunctionTerminated: _enum_for_EventCause.switchingFunctionTerminated = EventCause.switchingFunctionTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_terminationCharacterReceived
 * @description Termination Character Received. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_terminationCharacterReceived: _enum_for_EventCause.terminationCharacterReceived = EventCause.terminationCharacterReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminationCharacterReceived
 * @description Alias of {@link EventCause_terminationCharacterReceived}.
 * @constant
 * @type {number}
 */
export
const terminationCharacterReceived: _enum_for_EventCause.terminationCharacterReceived = EventCause.terminationCharacterReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_timeout
 * @description Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_timeout: _enum_for_EventCause.timeout = EventCause.timeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeout
 * @description Alias of {@link EventCause_timeout}.
 * @constant
 * @type {number}
 */
export
const timeout: _enum_for_EventCause.timeout = EventCause.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_transfer
 * @description Transfer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_transfer: _enum_for_EventCause.transfer = EventCause.transfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @description Alias of {@link EventCause_transfer}.
 * @constant
 * @type {number}
 */
export
const transfer: _enum_for_EventCause.transfer = EventCause.transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_trunksBusy
 * @description Trunks Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_trunksBusy: _enum_for_EventCause.trunksBusy = EventCause.trunksBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunksBusy
 * @description Alias of {@link EventCause_trunksBusy}.
 * @constant
 * @type {number}
 */
export
const trunksBusy: _enum_for_EventCause.trunksBusy = EventCause.trunksBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unauthorisedBearerService
 * @description Unauthorized Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_unauthorisedBearerService: _enum_for_EventCause.unauthorisedBearerService = EventCause.unauthorisedBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorisedBearerService
 * @description Alias of {@link EventCause_unauthorisedBearerService}.
 * @constant
 * @type {number}
 */
export
const unauthorisedBearerService: _enum_for_EventCause.unauthorisedBearerService = EventCause.unauthorisedBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unknownOverflow
 * @description Unknown Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_unknownOverflow: _enum_for_EventCause.unknownOverflow = EventCause.unknownOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOverflow
 * @description Alias of {@link EventCause_unknownOverflow}.
 * @constant
 * @type {number}
 */
export
const unknownOverflow: _enum_for_EventCause.unknownOverflow = EventCause.unknownOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EventCause: $.ASN1Decoder<EventCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventCause (el: _Element): EventCause {
    if (!_cached_decoder_for_EventCause) { _cached_decoder_for_EventCause = $._decodeEnumerated; }
    return _cached_decoder_for_EventCause(el);
}

let _cached_encoder_for_EventCause: $.ASN1Encoder<EventCause> | null = null;

/**
 * @summary Encodes a(n) EventCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventCause, encoded as an ASN.1 Element.
 */
export
function _encode_EventCause (value: EventCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventCause) { _cached_encoder_for_EventCause = $._encodeEnumerated; }
    return _cached_encoder_for_EventCause(value, elGetter);
}


/* eslint-enable */

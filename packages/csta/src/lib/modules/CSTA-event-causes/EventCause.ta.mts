/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



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
const EventCause = _enum_for_EventCause;

/**
 * @summary EventCause_aCDBusy
 * @description ACD Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDBusy: EventCause = EventCause.aCDBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDBusy
 * @description Alias of {@link EventCause_aCDBusy}.
 * @constant
 * @type {number}
 */
export
const aCDBusy: EventCause = EventCause.aCDBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDForward
 * @description ACD Forward. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDForward: EventCause = EventCause.aCDForward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDForward
 * @description Alias of {@link EventCause_aCDForward}.
 * @constant
 * @type {number}
 */
export
const aCDForward: EventCause = EventCause.aCDForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDSaturated
 * @description ACD Saturated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDSaturated: EventCause = EventCause.aCDSaturated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDSaturated
 * @description Alias of {@link EventCause_aCDSaturated}.
 * @constant
 * @type {number}
 */
export
const aCDSaturated: EventCause = EventCause.aCDSaturated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activation
 * @description Activation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_activation: EventCause = EventCause.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @description Alias of {@link EventCause_activation}.
 * @constant
 * @type {number}
 */
export
const activation: EventCause = EventCause.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activeParticipation
 * @description Active Participation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_activeParticipation: EventCause = EventCause.activeParticipation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeParticipation
 * @description Alias of {@link EventCause_activeParticipation}.
 * @constant
 * @type {number}
 */
export
const activeParticipation: EventCause = EventCause.activeParticipation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alertTimeExpired
 * @description Alert Time Expired. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_alertTimeExpired: EventCause = EventCause.alertTimeExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeExpired
 * @description Alias of {@link EventCause_alertTimeExpired}.
 * @constant
 * @type {number}
 */
export
const alertTimeExpired: EventCause = EventCause.alertTimeExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alternate
 * @description Alternate. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_alternate: EventCause = EventCause.alternate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alternate
 * @description Alias of {@link EventCause_alternate}.
 * @constant
 * @type {number}
 */
export
const alternate: EventCause = EventCause.alternate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_autoWork
 * @description Auto Work. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_autoWork: EventCause = EventCause.autoWork; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoWork
 * @description Alias of {@link EventCause_autoWork}.
 * @constant
 * @type {number}
 */
export
const autoWork: EventCause = EventCause.autoWork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_babble
 * @description Babble. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_babble: EventCause = EventCause.babble; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary babble
 * @description Alias of {@link EventCause_babble}.
 * @constant
 * @type {number}
 */
export
const babble: EventCause = EventCause.babble; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badAttribute
 * @description Bad Attribute. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badAttribute: EventCause = EventCause.badAttribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badAttribute
 * @description Alias of {@link EventCause_badAttribute}.
 * @constant
 * @type {number}
 */
export
const badAttribute: EventCause = EventCause.badAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badGrammar
 * @description Bad Grammar. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badGrammar: EventCause = EventCause.badGrammar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badGrammar
 * @description Alias of {@link EventCause_badGrammar}.
 * @constant
 * @type {number}
 */
export
const badGrammar: EventCause = EventCause.badGrammar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badVoice
 * @description Bad Voice. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badVoice: EventCause = EventCause.badVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badVoice
 * @description Alias of {@link EventCause_badVoice}.
 * @constant
 * @type {number}
 */
export
const badVoice: EventCause = EventCause.badVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badUri
 * @description Bad URI. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badUri: EventCause = EventCause.badUri; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badUri
 * @description Alias of {@link EventCause_badUri}.
 * @constant
 * @type {number}
 */
export
const badUri: EventCause = EventCause.badUri; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_blocked
 * @description Blocked. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_blocked: EventCause = EventCause.blocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blocked
 * @description Alias of {@link EventCause_blocked}.
 * @constant
 * @type {number}
 */
export
const blocked: EventCause = EventCause.blocked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busy
 * @description Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_busy: EventCause = EventCause.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description Alias of {@link EventCause_busy}.
 * @constant
 * @type {number}
 */
export
const busy: EventCause = EventCause.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busyOverflow
 * @description Busy Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_busyOverflow: EventCause = EventCause.busyOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busyOverflow
 * @description Alias of {@link EventCause_busyOverflow}.
 * @constant
 * @type {number}
 */
export
const busyOverflow: EventCause = EventCause.busyOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_calendarOverflow
 * @description Calendar Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_calendarOverflow: EventCause = EventCause.calendarOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calendarOverflow
 * @description Alias of {@link EventCause_calendarOverflow}.
 * @constant
 * @type {number}
 */
export
const calendarOverflow: EventCause = EventCause.calendarOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callBack
 * @description Call Back. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callBack: EventCause = EventCause.callBack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBack
 * @description Alias of {@link EventCause_callBack}.
 * @constant
 * @type {number}
 */
export
const callBack: EventCause = EventCause.callBack; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callCancelled
 * @description Call Cancelled. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callCancelled: EventCause = EventCause.callCancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCancelled
 * @description Alias of {@link EventCause_callCancelled}.
 * @constant
 * @type {number}
 */
export
const callCancelled: EventCause = EventCause.callCancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForward
 * @description Call Forward. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForward: EventCause = EventCause.callForward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForward
 * @description Alias of {@link EventCause_callForward}.
 * @constant
 * @type {number}
 */
export
const callForward: EventCause = EventCause.callForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardImmediate
 * @description Call Forward - Immediate. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardImmediate: EventCause = EventCause.callForwardImmediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardImmediate
 * @description Alias of {@link EventCause_callForwardImmediate}.
 * @constant
 * @type {number}
 */
export
const callForwardImmediate: EventCause = EventCause.callForwardImmediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardBusy
 * @description Call Forward - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardBusy: EventCause = EventCause.callForwardBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardBusy
 * @description Alias of {@link EventCause_callForwardBusy}.
 * @constant
 * @type {number}
 */
export
const callForwardBusy: EventCause = EventCause.callForwardBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardNoAnswer
 * @description Call Forward - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardNoAnswer: EventCause = EventCause.callForwardNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardNoAnswer
 * @description Alias of {@link EventCause_callForwardNoAnswer}.
 * @constant
 * @type {number}
 */
export
const callForwardNoAnswer: EventCause = EventCause.callForwardNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterception
 * @description Call Interception. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterception: EventCause = EventCause.callInterception; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterception
 * @description Alias of {@link EventCause_callInterception}.
 * @constant
 * @type {number}
 */
export
const callInterception: EventCause = EventCause.callInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionBusy
 * @description Call Interception - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionBusy: EventCause = EventCause.callInterceptionBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionBusy
 * @description Alias of {@link EventCause_callInterceptionBusy}.
 * @constant
 * @type {number}
 */
export
const callInterceptionBusy: EventCause = EventCause.callInterceptionBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionForwarded
 * @description Call Interception - Forwarded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionForwarded: EventCause = EventCause.callInterceptionForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionForwarded
 * @description Alias of {@link EventCause_callInterceptionForwarded}.
 * @constant
 * @type {number}
 */
export
const callInterceptionForwarded: EventCause = EventCause.callInterceptionForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionNoAnswer
 * @description Call Interception - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionNoAnswer: EventCause = EventCause.callInterceptionNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionNoAnswer
 * @description Alias of {@link EventCause_callInterceptionNoAnswer}.
 * @constant
 * @type {number}
 */
export
const callInterceptionNoAnswer: EventCause = EventCause.callInterceptionNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionResourcesNotAvailable
 * @description Call Interception - Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionResourcesNotAvailable: EventCause = EventCause.callInterceptionResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionResourcesNotAvailable
 * @description
 * Alias of {@link EventCause_callInterceptionResourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const callInterceptionResourcesNotAvailable: EventCause = EventCause.callInterceptionResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callNotAnswered
 * @description Call Not Answered. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callNotAnswered: EventCause = EventCause.callNotAnswered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callNotAnswered
 * @description Alias of {@link EventCause_callNotAnswered}.
 * @constant
 * @type {number}
 */
export
const callNotAnswered: EventCause = EventCause.callNotAnswered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callPickup
 * @description Call Pickup. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callPickup: EventCause = EventCause.callPickup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callPickup
 * @description Alias of {@link EventCause_callPickup}.
 * @constant
 * @type {number}
 */
export
const callPickup: EventCause = EventCause.callPickup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOn
 * @description Camp On. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_campOn: EventCause = EventCause.campOn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOn
 * @description Alias of {@link EventCause_campOn}.
 * @constant
 * @type {number}
 */
export
const campOn: EventCause = EventCause.campOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOnTrunks
 * @description Camp On Trunks. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_campOnTrunks: EventCause = EventCause.campOnTrunks; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOnTrunks
 * @description Alias of {@link EventCause_campOnTrunks}.
 * @constant
 * @type {number}
 */
export
const campOnTrunks: EventCause = EventCause.campOnTrunks; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_capacityOverflow
 * @description Capacity Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_capacityOverflow: EventCause = EventCause.capacityOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary capacityOverflow
 * @description Alias of {@link EventCause_capacityOverflow}.
 * @constant
 * @type {number}
 */
export
const capacityOverflow: EventCause = EventCause.capacityOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_characterCountReached
 * @description Character Count Reached. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_characterCountReached: EventCause = EventCause.characterCountReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCountReached
 * @description Alias of {@link EventCause_characterCountReached}.
 * @constant
 * @type {number}
 */
export
const characterCountReached: EventCause = EventCause.characterCountReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_conference
 * @description Conference. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_conference: EventCause = EventCause.conference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conference
 * @description Alias of {@link EventCause_conference}.
 * @constant
 * @type {number}
 */
export
const conference: EventCause = EventCause.conference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_consultation
 * @description Consultation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_consultation: EventCause = EventCause.consultation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultation
 * @description Alias of {@link EventCause_consultation}.
 * @constant
 * @type {number}
 */
export
const consultation: EventCause = EventCause.consultation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destDetected
 * @description Destination Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destDetected: EventCause = EventCause.destDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destDetected
 * @description Alias of {@link EventCause_destDetected}.
 * @constant
 * @type {number}
 */
export
const destDetected: EventCause = EventCause.destDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destNotObtainable
 * @description Destination Not Obtainable. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destNotObtainable: EventCause = EventCause.destNotObtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destNotObtainable
 * @description Alias of {@link EventCause_destNotObtainable}.
 * @constant
 * @type {number}
 */
export
const destNotObtainable: EventCause = EventCause.destNotObtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destOutOfOrder
 * @description Destination Out of Order. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destOutOfOrder: EventCause = EventCause.destOutOfOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destOutOfOrder
 * @description Alias of {@link EventCause_destOutOfOrder}.
 * @constant
 * @type {number}
 */
export
const destOutOfOrder: EventCause = EventCause.destOutOfOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributed
 * @description Distributed. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_distributed: EventCause = EventCause.distributed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributed
 * @description Alias of {@link EventCause_distributed}.
 * @constant
 * @type {number}
 */
export
const distributed: EventCause = EventCause.distributed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributionDelay
 * @description Distribution Delay. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_distributionDelay: EventCause = EventCause.distributionDelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributionDelay
 * @description Alias of {@link EventCause_distributionDelay}.
 * @constant
 * @type {number}
 */
export
const distributionDelay: EventCause = EventCause.distributionDelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_doNotDisturb
 * @description Do Not Disturb. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_doNotDisturb: EventCause = EventCause.doNotDisturb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotDisturb
 * @description Alias of {@link EventCause_doNotDisturb}.
 * @constant
 * @type {number}
 */
export
const doNotDisturb: EventCause = EventCause.doNotDisturb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_dTMFDigitDetected
 * @description DTMF Digit Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_dTMFDigitDetected: EventCause = EventCause.dTMFDigitDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dTMFDigitDetected
 * @description Alias of {@link EventCause_dTMFDigitDetected}.
 * @constant
 * @type {number}
 */
export
const dTMFDigitDetected: EventCause = EventCause.dTMFDigitDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_duplicateDTMF
 * @description Duplicate DTMF. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_duplicateDTMF: EventCause = EventCause.duplicateDTMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateDTMF
 * @description Alias of {@link EventCause_duplicateDTMF}.
 * @constant
 * @type {number}
 */
export
const duplicateDTMF: EventCause = EventCause.duplicateDTMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_durationExceeded
 * @description Duration Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_durationExceeded: EventCause = EventCause.durationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary durationExceeded
 * @description Alias of {@link EventCause_durationExceeded}.
 * @constant
 * @type {number}
 */
export
const durationExceeded: EventCause = EventCause.durationExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_earlyStop
 * @description Early Stop. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_earlyStop: EventCause = EventCause.earlyStop; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyStop
 * @description Alias of {@link EventCause_earlyStop}.
 * @constant
 * @type {number}
 */
export
const earlyStop: EventCause = EventCause.earlyStop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_emptyQueue
 * @description Empty Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_emptyQueue: EventCause = EventCause.emptyQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emptyQueue
 * @description Alias of {@link EventCause_emptyQueue}.
 * @constant
 * @type {number}
 */
export
const emptyQueue: EventCause = EventCause.emptyQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_endOfMessageDetected
 * @description End of Message Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_endOfMessageDetected: EventCause = EventCause.endOfMessageDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfMessageDetected
 * @description Alias of {@link EventCause_endOfMessageDetected}.
 * @constant
 * @type {number}
 */
export
const endOfMessageDetected: EventCause = EventCause.endOfMessageDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_enteringDistribution
 * @description Entering Distribution. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_enteringDistribution: EventCause = EventCause.enteringDistribution; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enteringDistribution
 * @description Alias of {@link EventCause_enteringDistribution}.
 * @constant
 * @type {number}
 */
export
const enteringDistribution: EventCause = EventCause.enteringDistribution; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedPause
 * @description Forced Pause. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_forcedPause: EventCause = EventCause.forcedPause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedPause
 * @description Alias of {@link EventCause_forcedPause}.
 * @constant
 * @type {number}
 */
export
const forcedPause: EventCause = EventCause.forcedPause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedTransition
 * @description Forced Transition. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_forcedTransition: EventCause = EventCause.forcedTransition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedTransition
 * @description Alias of {@link EventCause_forcedTransition}.
 * @constant
 * @type {number}
 */
export
const forcedTransition: EventCause = EventCause.forcedTransition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_incompatibleDestination
 * @description Incompatible Destination. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_incompatibleDestination: EventCause = EventCause.incompatibleDestination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incompatibleDestination
 * @description Alias of {@link EventCause_incompatibleDestination}.
 * @constant
 * @type {number}
 */
export
const incompatibleDestination: EventCause = EventCause.incompatibleDestination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_interDigitTimeout
 * @description inter-digit Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_interDigitTimeout: EventCause = EventCause.interDigitTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interDigitTimeout
 * @description Alias of {@link EventCause_interDigitTimeout}.
 * @constant
 * @type {number}
 */
export
const interDigitTimeout: EventCause = EventCause.interDigitTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_intrude
 * @description Intrude. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_intrude: EventCause = EventCause.intrude; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrude
 * @description Alias of {@link EventCause_intrude}.
 * @constant
 * @type {number}
 */
export
const intrude: EventCause = EventCause.intrude; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidAccountCode
 * @description Invalid Account Code. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidAccountCode: EventCause = EventCause.invalidAccountCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAccountCode
 * @description Alias of {@link EventCause_invalidAccountCode}.
 * @constant
 * @type {number}
 */
export
const invalidAccountCode: EventCause = EventCause.invalidAccountCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnection
 * @description Invalid Connection. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidConnection: EventCause = EventCause.invalidConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnection
 * @description Alias of {@link EventCause_invalidConnection}.
 * @constant
 * @type {number}
 */
export
const invalidConnection: EventCause = EventCause.invalidConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnectionState
 * @description Invalid Connection State. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidConnectionState: EventCause = EventCause.invalidConnectionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionState
 * @description Alias of {@link EventCause_invalidConnectionState}.
 * @constant
 * @type {number}
 */
export
const invalidConnectionState: EventCause = EventCause.invalidConnectionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidNumberFormat
 * @description Invalid Number Format. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidNumberFormat: EventCause = EventCause.invalidNumberFormat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNumberFormat
 * @description Alias of {@link EventCause_invalidNumberFormat}.
 * @constant
 * @type {number}
 */
export
const invalidNumberFormat: EventCause = EventCause.invalidNumberFormat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_joinCall
 * @description Join Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_joinCall: EventCause = EventCause.joinCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary joinCall
 * @description Alias of {@link EventCause_joinCall}.
 * @constant
 * @type {number}
 */
export
const joinCall: EventCause = EventCause.joinCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperation
 * @description Key Operation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_keyOperation: EventCause = EventCause.keyOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperation
 * @description Alias of {@link EventCause_keyOperation}.
 * @constant
 * @type {number}
 */
export
const keyOperation: EventCause = EventCause.keyOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperationInUse
 * @description Key Operation In Use. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_keyOperationInUse: EventCause = EventCause.keyOperationInUse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperationInUse
 * @description Alias of {@link EventCause_keyOperationInUse}.
 * @constant
 * @type {number}
 */
export
const keyOperationInUse: EventCause = EventCause.keyOperationInUse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lawfulInterception
 * @description Lawful Interception. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_lawfulInterception: EventCause = EventCause.lawfulInterception; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lawfulInterception
 * @description Alias of {@link EventCause_lawfulInterception}.
 * @constant
 * @type {number}
 */
export
const lawfulInterception: EventCause = EventCause.lawfulInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lockout
 * @description Lockout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_lockout: EventCause = EventCause.lockout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lockout
 * @description Alias of {@link EventCause_lockout}.
 * @constant
 * @type {number}
 */
export
const lockout: EventCause = EventCause.lockout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maintenance
 * @description Maintenance. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_maintenance: EventCause = EventCause.maintenance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maintenance
 * @description Alias of {@link EventCause_maintenance}.
 * @constant
 * @type {number}
 */
export
const maintenance: EventCause = EventCause.maintenance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeCall
 * @description Make Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makeCall: EventCause = EventCause.makeCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeCall
 * @description Alias of {@link EventCause_makeCall}.
 * @constant
 * @type {number}
 */
export
const makeCall: EventCause = EventCause.makeCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeConnection
 * @description Make Connection. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makeConnection: EventCause = EventCause.makeConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeConnection
 * @description Alias of {@link EventCause_makeConnection}.
 * @constant
 * @type {number}
 */
export
const makeConnection: EventCause = EventCause.makeConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makePredictiveCall
 * @description Make Predictive Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makePredictiveCall: EventCause = EventCause.makePredictiveCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makePredictiveCall
 * @description Alias of {@link EventCause_makePredictiveCall}.
 * @constant
 * @type {number}
 */
export
const makePredictiveCall: EventCause = EventCause.makePredictiveCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maxTimeout
 * @description Max Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_maxTimeout: EventCause = EventCause.maxTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxTimeout
 * @description Alias of {@link EventCause_maxTimeout}.
 * @constant
 * @type {number}
 */
export
const maxTimeout: EventCause = EventCause.maxTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageDurationExceeded
 * @description Message Duration Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_messageDurationExceeded: EventCause = EventCause.messageDurationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageDurationExceeded
 * @description Alias of {@link EventCause_messageDurationExceeded}.
 * @constant
 * @type {number}
 */
export
const messageDurationExceeded: EventCause = EventCause.messageDurationExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageSizeExceeded
 * @description Message Size Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_messageSizeExceeded: EventCause = EventCause.messageSizeExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageSizeExceeded
 * @description Alias of {@link EventCause_messageSizeExceeded}.
 * @constant
 * @type {number}
 */
export
const messageSizeExceeded: EventCause = EventCause.messageSizeExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleAlerting
 * @description Multiple Alerting. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_multipleAlerting: EventCause = EventCause.multipleAlerting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleAlerting
 * @description Alias of {@link EventCause_multipleAlerting}.
 * @constant
 * @type {number}
 */
export
const multipleAlerting: EventCause = EventCause.multipleAlerting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleQueuing
 * @description Multiple Queuing. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_multipleQueuing: EventCause = EventCause.multipleQueuing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleQueuing
 * @description Alias of {@link EventCause_multipleQueuing}.
 * @constant
 * @type {number}
 */
export
const multipleQueuing: EventCause = EventCause.multipleQueuing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkCongestion
 * @description Network Congestion. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkCongestion: EventCause = EventCause.networkCongestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkCongestion
 * @description Alias of {@link EventCause_networkCongestion}.
 * @constant
 * @type {number}
 */
export
const networkCongestion: EventCause = EventCause.networkCongestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkDialling
 * @description Network Dialling. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkDialling: EventCause = EventCause.networkDialling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkDialling
 * @description Alias of {@link EventCause_networkDialling}.
 * @constant
 * @type {number}
 */
export
const networkDialling: EventCause = EventCause.networkDialling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkNotObtainable
 * @description Network Not Obtainable. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkNotObtainable: EventCause = EventCause.networkNotObtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkNotObtainable
 * @description Alias of {@link EventCause_networkNotObtainable}.
 * @constant
 * @type {number}
 */
export
const networkNotObtainable: EventCause = EventCause.networkNotObtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkOutOfOrder
 * @description Network Out of Order. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkOutOfOrder: EventCause = EventCause.networkOutOfOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkOutOfOrder
 * @description Alias of {@link EventCause_networkOutOfOrder}.
 * @constant
 * @type {number}
 */
export
const networkOutOfOrder: EventCause = EventCause.networkOutOfOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkSignal
 * @description Network Signal. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkSignal: EventCause = EventCause.networkSignal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSignal
 * @description Alias of {@link EventCause_networkSignal}.
 * @constant
 * @type {number}
 */
export
const networkSignal: EventCause = EventCause.networkSignal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_newCall
 * @description New Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_newCall: EventCause = EventCause.newCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newCall
 * @description Alias of {@link EventCause_newCall}.
 * @constant
 * @type {number}
 */
export
const newCall: EventCause = EventCause.newCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_nextMessage
 * @description Next Message. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_nextMessage: EventCause = EventCause.nextMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nextMessage
 * @description Alias of {@link EventCause_nextMessage}.
 * @constant
 * @type {number}
 */
export
const nextMessage: EventCause = EventCause.nextMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAudioSaved
 * @description No Audio Saved. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noAudioSaved: EventCause = EventCause.noAudioSaved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAudioSaved
 * @description Alias of {@link EventCause_noAudioSaved}.
 * @constant
 * @type {number}
 */
export
const noAudioSaved: EventCause = EventCause.noAudioSaved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAvailableAgents
 * @description No Available Agents. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noAvailableAgents: EventCause = EventCause.noAvailableAgents; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAvailableAgents
 * @description Alias of {@link EventCause_noAvailableAgents}.
 * @constant
 * @type {number}
 */
export
const noAvailableAgents: EventCause = EventCause.noAvailableAgents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noQueue
 * @description No Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noQueue: EventCause = EventCause.noQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noQueue
 * @description Alias of {@link EventCause_noQueue}.
 * @constant
 * @type {number}
 */
export
const noQueue: EventCause = EventCause.noQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normal
 * @description Normal. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_normal: EventCause = EventCause.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @description Alias of {@link EventCause_normal}.
 * @constant
 * @type {number}
 */
export
const normal: EventCause = EventCause.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normalClearing
 * @description Normal Clearing. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_normalClearing: EventCause = EventCause.normalClearing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalClearing
 * @description Alias of {@link EventCause_normalClearing}.
 * @constant
 * @type {number}
 */
export
const normalClearing: EventCause = EventCause.normalClearing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noRule
 * @description No Rule. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noRule: EventCause = EventCause.noRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noRule
 * @description Alias of {@link EventCause_noRule}.
 * @constant
 * @type {number}
 */
export
const noRule: EventCause = EventCause.noRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noSpeechDetected
 * @description No Speech Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noSpeechDetected: EventCause = EventCause.noSpeechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSpeechDetected
 * @description Alias of {@link EventCause_noSpeechDetected}.
 * @constant
 * @type {number}
 */
export
const noSpeechDetected: EventCause = EventCause.noSpeechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notAvaliableBearerService
 * @description Not Available Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_notAvaliableBearerService: EventCause = EventCause.notAvaliableBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAvaliableBearerService
 * @description Alias of {@link EventCause_notAvaliableBearerService}.
 * @constant
 * @type {number}
 */
export
const notAvaliableBearerService: EventCause = EventCause.notAvaliableBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notSupportedBearerService
 * @description Not Supported Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_notSupportedBearerService: EventCause = EventCause.notSupportedBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSupportedBearerService
 * @description Alias of {@link EventCause_notSupportedBearerService}.
 * @constant
 * @type {number}
 */
export
const notSupportedBearerService: EventCause = EventCause.notSupportedBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberChanged
 * @description Number Changed. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_numberChanged: EventCause = EventCause.numberChanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberChanged
 * @description Alias of {@link EventCause_numberChanged}.
 * @constant
 * @type {number}
 */
export
const numberChanged: EventCause = EventCause.numberChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberUnallocated
 * @description Number Unallocated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_numberUnallocated: EventCause = EventCause.numberUnallocated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberUnallocated
 * @description Alias of {@link EventCause_numberUnallocated}.
 * @constant
 * @type {number}
 */
export
const numberUnallocated: EventCause = EventCause.numberUnallocated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_outOfGrammar
 * @description Out Of Grammar. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_outOfGrammar: EventCause = EventCause.outOfGrammar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfGrammar
 * @description Alias of {@link EventCause_outOfGrammar}.
 * @constant
 * @type {number}
 */
export
const outOfGrammar: EventCause = EventCause.outOfGrammar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_overflow
 * @description Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_overflow: EventCause = EventCause.overflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overflow
 * @description Alias of {@link EventCause_overflow}.
 * @constant
 * @type {number}
 */
export
const overflow: EventCause = EventCause.overflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_override
 * @description Override. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_override: EventCause = EventCause.override; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary override
 * @description Alias of {@link EventCause_override}.
 * @constant
 * @type {number}
 */
export
const override: EventCause = EventCause.override; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_park
 * @description Park. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_park: EventCause = EventCause.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @description Alias of {@link EventCause_park}.
 * @constant
 * @type {number}
 */
export
const park: EventCause = EventCause.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_pathReplacement
 * @description Path Replacement. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_pathReplacement: EventCause = EventCause.pathReplacement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathReplacement
 * @description Alias of {@link EventCause_pathReplacement}.
 * @constant
 * @type {number}
 */
export
const pathReplacement: EventCause = EventCause.pathReplacement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueCleared
 * @description Queue Cleared. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_queueCleared: EventCause = EventCause.queueCleared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueCleared
 * @description Alias of {@link EventCause_queueCleared}.
 * @constant
 * @type {number}
 */
export
const queueCleared: EventCause = EventCause.queueCleared; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueTimeOverflow
 * @description Queue Time Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_queueTimeOverflow: EventCause = EventCause.queueTimeOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueTimeOverflow
 * @description Alias of {@link EventCause_queueTimeOverflow}.
 * @constant
 * @type {number}
 */
export
const queueTimeOverflow: EventCause = EventCause.queueTimeOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recall
 * @description Recall. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recall: EventCause = EventCause.recall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recall
 * @description Alias of {@link EventCause_recall}.
 * @constant
 * @type {number}
 */
export
const recall: EventCause = EventCause.recall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallBusy
 * @description Recall - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallBusy: EventCause = EventCause.recallBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallBusy
 * @description Alias of {@link EventCause_recallBusy}.
 * @constant
 * @type {number}
 */
export
const recallBusy: EventCause = EventCause.recallBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallForwarded
 * @description Recall - Forwarded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallForwarded: EventCause = EventCause.recallForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallForwarded
 * @description Alias of {@link EventCause_recallForwarded}.
 * @constant
 * @type {number}
 */
export
const recallForwarded: EventCause = EventCause.recallForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallNoAnswer
 * @description Recall - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallNoAnswer: EventCause = EventCause.recallNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallNoAnswer
 * @description Alias of {@link EventCause_recallNoAnswer}.
 * @constant
 * @type {number}
 */
export
const recallNoAnswer: EventCause = EventCause.recallNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallResourcesNotAvailable
 * @description Recall - Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallResourcesNotAvailable: EventCause = EventCause.recallResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallResourcesNotAvailable
 * @description Alias of {@link EventCause_recallResourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const recallResourcesNotAvailable: EventCause = EventCause.recallResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_redirected
 * @description Redirected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_redirected: EventCause = EventCause.redirected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redirected
 * @description Alias of {@link EventCause_redirected}.
 * @constant
 * @type {number}
 */
export
const redirected: EventCause = EventCause.redirected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_remainsInQueue
 * @description Remains in Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_remainsInQueue: EventCause = EventCause.remainsInQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainsInQueue
 * @description Alias of {@link EventCause_remainsInQueue}.
 * @constant
 * @type {number}
 */
export
const remainsInQueue: EventCause = EventCause.remainsInQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reorderTone
 * @description Reorder Tone. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_reorderTone: EventCause = EventCause.reorderTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorderTone
 * @description Alias of {@link EventCause_reorderTone}.
 * @constant
 * @type {number}
 */
export
const reorderTone: EventCause = EventCause.reorderTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reserved
 * @description Reserved. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_reserved: EventCause = EventCause.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @description Alias of {@link EventCause_reserved}.
 * @constant
 * @type {number}
 */
export
const reserved: EventCause = EventCause.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_resourcesNotAvailable
 * @description Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_resourcesNotAvailable: EventCause = EventCause.resourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourcesNotAvailable
 * @description Alias of {@link EventCause_resourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const resourcesNotAvailable: EventCause = EventCause.resourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_selectedTrunkBusy
 * @description Selected Trunk Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_selectedTrunkBusy: EventCause = EventCause.selectedTrunkBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectedTrunkBusy
 * @description Alias of {@link EventCause_selectedTrunkBusy}.
 * @constant
 * @type {number}
 */
export
const selectedTrunkBusy: EventCause = EventCause.selectedTrunkBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_silentParticipation
 * @description Silent Participation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_silentParticipation: EventCause = EventCause.silentParticipation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silentParticipation
 * @description Alias of {@link EventCause_silentParticipation}.
 * @constant
 * @type {number}
 */
export
const silentParticipation: EventCause = EventCause.silentParticipation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepConference
 * @description Single Step Conference. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_singleStepConference: EventCause = EventCause.singleStepConference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConference
 * @description Alias of {@link EventCause_singleStepConference}.
 * @constant
 * @type {number}
 */
export
const singleStepConference: EventCause = EventCause.singleStepConference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepTransfer
 * @description Single Step Transfer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_singleStepTransfer: EventCause = EventCause.singleStepTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepTransfer
 * @description Alias of {@link EventCause_singleStepTransfer}.
 * @constant
 * @type {number}
 */
export
const singleStepTransfer: EventCause = EventCause.singleStepTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_speechDetected
 * @description Speech Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_speechDetected: EventCause = EventCause.speechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechDetected
 * @description Alias of {@link EventCause_speechDetected}.
 * @constant
 * @type {number}
 */
export
const speechDetected: EventCause = EventCause.speechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_suspend
 * @description Suspend. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_suspend: EventCause = EventCause.suspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @description Alias of {@link EventCause_suspend}.
 * @constant
 * @type {number}
 */
export
const suspend: EventCause = EventCause.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_switchingFunctionTerminated
 * @description Switching Function Terminated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_switchingFunctionTerminated: EventCause = EventCause.switchingFunctionTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchingFunctionTerminated
 * @description Alias of {@link EventCause_switchingFunctionTerminated}.
 * @constant
 * @type {number}
 */
export
const switchingFunctionTerminated: EventCause = EventCause.switchingFunctionTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_terminationCharacterReceived
 * @description Termination Character Received. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_terminationCharacterReceived: EventCause = EventCause.terminationCharacterReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminationCharacterReceived
 * @description Alias of {@link EventCause_terminationCharacterReceived}.
 * @constant
 * @type {number}
 */
export
const terminationCharacterReceived: EventCause = EventCause.terminationCharacterReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_timeout
 * @description Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_timeout: EventCause = EventCause.timeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeout
 * @description Alias of {@link EventCause_timeout}.
 * @constant
 * @type {number}
 */
export
const timeout: EventCause = EventCause.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_transfer
 * @description Transfer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_transfer: EventCause = EventCause.transfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @description Alias of {@link EventCause_transfer}.
 * @constant
 * @type {number}
 */
export
const transfer: EventCause = EventCause.transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_trunksBusy
 * @description Trunks Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_trunksBusy: EventCause = EventCause.trunksBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunksBusy
 * @description Alias of {@link EventCause_trunksBusy}.
 * @constant
 * @type {number}
 */
export
const trunksBusy: EventCause = EventCause.trunksBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unauthorisedBearerService
 * @description Unauthorized Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_unauthorisedBearerService: EventCause = EventCause.unauthorisedBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorisedBearerService
 * @description Alias of {@link EventCause_unauthorisedBearerService}.
 * @constant
 * @type {number}
 */
export
const unauthorisedBearerService: EventCause = EventCause.unauthorisedBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unknownOverflow
 * @description Unknown Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_unknownOverflow: EventCause = EventCause.unknownOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOverflow
 * @description Alias of {@link EventCause_unknownOverflow}.
 * @constant
 * @type {number}
 */
export
const unknownOverflow: EventCause = EventCause.unknownOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

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

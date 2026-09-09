/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary EventCause
 * @description
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
 * @constant
 * @type {number}
 */
export
const EventCause_aCDBusy: EventCause = EventCause.aCDBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDBusy
 * @constant
 * @type {number}
 */
export
const aCDBusy: EventCause = EventCause.aCDBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDForward
 * @constant
 * @type {number}
 */
export
const EventCause_aCDForward: EventCause = EventCause.aCDForward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDForward
 * @constant
 * @type {number}
 */
export
const aCDForward: EventCause = EventCause.aCDForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDSaturated
 * @constant
 * @type {number}
 */
export
const EventCause_aCDSaturated: EventCause = EventCause.aCDSaturated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDSaturated
 * @constant
 * @type {number}
 */
export
const aCDSaturated: EventCause = EventCause.aCDSaturated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activation
 * @constant
 * @type {number}
 */
export
const EventCause_activation: EventCause = EventCause.activation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @constant
 * @type {number}
 */
export
const activation: EventCause = EventCause.activation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activeParticipation
 * @constant
 * @type {number}
 */
export
const EventCause_activeParticipation: EventCause = EventCause.activeParticipation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeParticipation
 * @constant
 * @type {number}
 */
export
const activeParticipation: EventCause = EventCause.activeParticipation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alertTimeExpired
 * @constant
 * @type {number}
 */
export
const EventCause_alertTimeExpired: EventCause = EventCause.alertTimeExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeExpired
 * @constant
 * @type {number}
 */
export
const alertTimeExpired: EventCause = EventCause.alertTimeExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alternate
 * @constant
 * @type {number}
 */
export
const EventCause_alternate: EventCause = EventCause.alternate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alternate
 * @constant
 * @type {number}
 */
export
const alternate: EventCause = EventCause.alternate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_autoWork
 * @constant
 * @type {number}
 */
export
const EventCause_autoWork: EventCause = EventCause.autoWork; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoWork
 * @constant
 * @type {number}
 */
export
const autoWork: EventCause = EventCause.autoWork; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_babble
 * @constant
 * @type {number}
 */
export
const EventCause_babble: EventCause = EventCause.babble; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary babble
 * @constant
 * @type {number}
 */
export
const babble: EventCause = EventCause.babble; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badAttribute
 * @constant
 * @type {number}
 */
export
const EventCause_badAttribute: EventCause = EventCause.badAttribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badAttribute
 * @constant
 * @type {number}
 */
export
const badAttribute: EventCause = EventCause.badAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badGrammar
 * @constant
 * @type {number}
 */
export
const EventCause_badGrammar: EventCause = EventCause.badGrammar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badGrammar
 * @constant
 * @type {number}
 */
export
const badGrammar: EventCause = EventCause.badGrammar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badVoice
 * @constant
 * @type {number}
 */
export
const EventCause_badVoice: EventCause = EventCause.badVoice; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badVoice
 * @constant
 * @type {number}
 */
export
const badVoice: EventCause = EventCause.badVoice; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badUri
 * @constant
 * @type {number}
 */
export
const EventCause_badUri: EventCause = EventCause.badUri; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badUri
 * @constant
 * @type {number}
 */
export
const badUri: EventCause = EventCause.badUri; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_blocked
 * @constant
 * @type {number}
 */
export
const EventCause_blocked: EventCause = EventCause.blocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blocked
 * @constant
 * @type {number}
 */
export
const blocked: EventCause = EventCause.blocked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busy
 * @constant
 * @type {number}
 */
export
const EventCause_busy: EventCause = EventCause.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: EventCause = EventCause.busy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busyOverflow
 * @constant
 * @type {number}
 */
export
const EventCause_busyOverflow: EventCause = EventCause.busyOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busyOverflow
 * @constant
 * @type {number}
 */
export
const busyOverflow: EventCause = EventCause.busyOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_calendarOverflow
 * @constant
 * @type {number}
 */
export
const EventCause_calendarOverflow: EventCause = EventCause.calendarOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calendarOverflow
 * @constant
 * @type {number}
 */
export
const calendarOverflow: EventCause = EventCause.calendarOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callBack
 * @constant
 * @type {number}
 */
export
const EventCause_callBack: EventCause = EventCause.callBack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBack
 * @constant
 * @type {number}
 */
export
const callBack: EventCause = EventCause.callBack; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callCancelled
 * @constant
 * @type {number}
 */
export
const EventCause_callCancelled: EventCause = EventCause.callCancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCancelled
 * @constant
 * @type {number}
 */
export
const callCancelled: EventCause = EventCause.callCancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForward
 * @constant
 * @type {number}
 */
export
const EventCause_callForward: EventCause = EventCause.callForward; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForward
 * @constant
 * @type {number}
 */
export
const callForward: EventCause = EventCause.callForward; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardImmediate
 * @constant
 * @type {number}
 */
export
const EventCause_callForwardImmediate: EventCause = EventCause.callForwardImmediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardImmediate
 * @constant
 * @type {number}
 */
export
const callForwardImmediate: EventCause = EventCause.callForwardImmediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardBusy
 * @constant
 * @type {number}
 */
export
const EventCause_callForwardBusy: EventCause = EventCause.callForwardBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardBusy
 * @constant
 * @type {number}
 */
export
const callForwardBusy: EventCause = EventCause.callForwardBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardNoAnswer
 * @constant
 * @type {number}
 */
export
const EventCause_callForwardNoAnswer: EventCause = EventCause.callForwardNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardNoAnswer
 * @constant
 * @type {number}
 */
export
const callForwardNoAnswer: EventCause = EventCause.callForwardNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterception
 * @constant
 * @type {number}
 */
export
const EventCause_callInterception: EventCause = EventCause.callInterception; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterception
 * @constant
 * @type {number}
 */
export
const callInterception: EventCause = EventCause.callInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionBusy
 * @constant
 * @type {number}
 */
export
const EventCause_callInterceptionBusy: EventCause = EventCause.callInterceptionBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionBusy
 * @constant
 * @type {number}
 */
export
const callInterceptionBusy: EventCause = EventCause.callInterceptionBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionForwarded
 * @constant
 * @type {number}
 */
export
const EventCause_callInterceptionForwarded: EventCause = EventCause.callInterceptionForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionForwarded
 * @constant
 * @type {number}
 */
export
const callInterceptionForwarded: EventCause = EventCause.callInterceptionForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionNoAnswer
 * @constant
 * @type {number}
 */
export
const EventCause_callInterceptionNoAnswer: EventCause = EventCause.callInterceptionNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionNoAnswer
 * @constant
 * @type {number}
 */
export
const callInterceptionNoAnswer: EventCause = EventCause.callInterceptionNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const EventCause_callInterceptionResourcesNotAvailable: EventCause = EventCause.callInterceptionResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const callInterceptionResourcesNotAvailable: EventCause = EventCause.callInterceptionResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callNotAnswered
 * @constant
 * @type {number}
 */
export
const EventCause_callNotAnswered: EventCause = EventCause.callNotAnswered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callNotAnswered
 * @constant
 * @type {number}
 */
export
const callNotAnswered: EventCause = EventCause.callNotAnswered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callPickup
 * @constant
 * @type {number}
 */
export
const EventCause_callPickup: EventCause = EventCause.callPickup; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callPickup
 * @constant
 * @type {number}
 */
export
const callPickup: EventCause = EventCause.callPickup; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOn
 * @constant
 * @type {number}
 */
export
const EventCause_campOn: EventCause = EventCause.campOn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOn
 * @constant
 * @type {number}
 */
export
const campOn: EventCause = EventCause.campOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOnTrunks
 * @constant
 * @type {number}
 */
export
const EventCause_campOnTrunks: EventCause = EventCause.campOnTrunks; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOnTrunks
 * @constant
 * @type {number}
 */
export
const campOnTrunks: EventCause = EventCause.campOnTrunks; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_capacityOverflow
 * @constant
 * @type {number}
 */
export
const EventCause_capacityOverflow: EventCause = EventCause.capacityOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary capacityOverflow
 * @constant
 * @type {number}
 */
export
const capacityOverflow: EventCause = EventCause.capacityOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_characterCountReached
 * @constant
 * @type {number}
 */
export
const EventCause_characterCountReached: EventCause = EventCause.characterCountReached; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCountReached
 * @constant
 * @type {number}
 */
export
const characterCountReached: EventCause = EventCause.characterCountReached; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_conference
 * @constant
 * @type {number}
 */
export
const EventCause_conference: EventCause = EventCause.conference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conference
 * @constant
 * @type {number}
 */
export
const conference: EventCause = EventCause.conference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_consultation
 * @constant
 * @type {number}
 */
export
const EventCause_consultation: EventCause = EventCause.consultation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultation
 * @constant
 * @type {number}
 */
export
const consultation: EventCause = EventCause.consultation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destDetected
 * @constant
 * @type {number}
 */
export
const EventCause_destDetected: EventCause = EventCause.destDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destDetected
 * @constant
 * @type {number}
 */
export
const destDetected: EventCause = EventCause.destDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destNotObtainable
 * @constant
 * @type {number}
 */
export
const EventCause_destNotObtainable: EventCause = EventCause.destNotObtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destNotObtainable
 * @constant
 * @type {number}
 */
export
const destNotObtainable: EventCause = EventCause.destNotObtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destOutOfOrder
 * @constant
 * @type {number}
 */
export
const EventCause_destOutOfOrder: EventCause = EventCause.destOutOfOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destOutOfOrder
 * @constant
 * @type {number}
 */
export
const destOutOfOrder: EventCause = EventCause.destOutOfOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributed
 * @constant
 * @type {number}
 */
export
const EventCause_distributed: EventCause = EventCause.distributed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributed
 * @constant
 * @type {number}
 */
export
const distributed: EventCause = EventCause.distributed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributionDelay
 * @constant
 * @type {number}
 */
export
const EventCause_distributionDelay: EventCause = EventCause.distributionDelay; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributionDelay
 * @constant
 * @type {number}
 */
export
const distributionDelay: EventCause = EventCause.distributionDelay; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_doNotDisturb
 * @constant
 * @type {number}
 */
export
const EventCause_doNotDisturb: EventCause = EventCause.doNotDisturb; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotDisturb
 * @constant
 * @type {number}
 */
export
const doNotDisturb: EventCause = EventCause.doNotDisturb; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_dTMFDigitDetected
 * @constant
 * @type {number}
 */
export
const EventCause_dTMFDigitDetected: EventCause = EventCause.dTMFDigitDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dTMFDigitDetected
 * @constant
 * @type {number}
 */
export
const dTMFDigitDetected: EventCause = EventCause.dTMFDigitDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_duplicateDTMF
 * @constant
 * @type {number}
 */
export
const EventCause_duplicateDTMF: EventCause = EventCause.duplicateDTMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateDTMF
 * @constant
 * @type {number}
 */
export
const duplicateDTMF: EventCause = EventCause.duplicateDTMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_durationExceeded
 * @constant
 * @type {number}
 */
export
const EventCause_durationExceeded: EventCause = EventCause.durationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary durationExceeded
 * @constant
 * @type {number}
 */
export
const durationExceeded: EventCause = EventCause.durationExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_earlyStop
 * @constant
 * @type {number}
 */
export
const EventCause_earlyStop: EventCause = EventCause.earlyStop; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyStop
 * @constant
 * @type {number}
 */
export
const earlyStop: EventCause = EventCause.earlyStop; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_emptyQueue
 * @constant
 * @type {number}
 */
export
const EventCause_emptyQueue: EventCause = EventCause.emptyQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emptyQueue
 * @constant
 * @type {number}
 */
export
const emptyQueue: EventCause = EventCause.emptyQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_endOfMessageDetected
 * @constant
 * @type {number}
 */
export
const EventCause_endOfMessageDetected: EventCause = EventCause.endOfMessageDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfMessageDetected
 * @constant
 * @type {number}
 */
export
const endOfMessageDetected: EventCause = EventCause.endOfMessageDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_enteringDistribution
 * @constant
 * @type {number}
 */
export
const EventCause_enteringDistribution: EventCause = EventCause.enteringDistribution; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enteringDistribution
 * @constant
 * @type {number}
 */
export
const enteringDistribution: EventCause = EventCause.enteringDistribution; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedPause
 * @constant
 * @type {number}
 */
export
const EventCause_forcedPause: EventCause = EventCause.forcedPause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedPause
 * @constant
 * @type {number}
 */
export
const forcedPause: EventCause = EventCause.forcedPause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedTransition
 * @constant
 * @type {number}
 */
export
const EventCause_forcedTransition: EventCause = EventCause.forcedTransition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedTransition
 * @constant
 * @type {number}
 */
export
const forcedTransition: EventCause = EventCause.forcedTransition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_incompatibleDestination
 * @constant
 * @type {number}
 */
export
const EventCause_incompatibleDestination: EventCause = EventCause.incompatibleDestination; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incompatibleDestination
 * @constant
 * @type {number}
 */
export
const incompatibleDestination: EventCause = EventCause.incompatibleDestination; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_interDigitTimeout
 * @constant
 * @type {number}
 */
export
const EventCause_interDigitTimeout: EventCause = EventCause.interDigitTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interDigitTimeout
 * @constant
 * @type {number}
 */
export
const interDigitTimeout: EventCause = EventCause.interDigitTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_intrude
 * @constant
 * @type {number}
 */
export
const EventCause_intrude: EventCause = EventCause.intrude; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrude
 * @constant
 * @type {number}
 */
export
const intrude: EventCause = EventCause.intrude; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidAccountCode
 * @constant
 * @type {number}
 */
export
const EventCause_invalidAccountCode: EventCause = EventCause.invalidAccountCode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAccountCode
 * @constant
 * @type {number}
 */
export
const invalidAccountCode: EventCause = EventCause.invalidAccountCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnection
 * @constant
 * @type {number}
 */
export
const EventCause_invalidConnection: EventCause = EventCause.invalidConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnection
 * @constant
 * @type {number}
 */
export
const invalidConnection: EventCause = EventCause.invalidConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnectionState
 * @constant
 * @type {number}
 */
export
const EventCause_invalidConnectionState: EventCause = EventCause.invalidConnectionState; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionState
 * @constant
 * @type {number}
 */
export
const invalidConnectionState: EventCause = EventCause.invalidConnectionState; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidNumberFormat
 * @constant
 * @type {number}
 */
export
const EventCause_invalidNumberFormat: EventCause = EventCause.invalidNumberFormat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNumberFormat
 * @constant
 * @type {number}
 */
export
const invalidNumberFormat: EventCause = EventCause.invalidNumberFormat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_joinCall
 * @constant
 * @type {number}
 */
export
const EventCause_joinCall: EventCause = EventCause.joinCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary joinCall
 * @constant
 * @type {number}
 */
export
const joinCall: EventCause = EventCause.joinCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperation
 * @constant
 * @type {number}
 */
export
const EventCause_keyOperation: EventCause = EventCause.keyOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperation
 * @constant
 * @type {number}
 */
export
const keyOperation: EventCause = EventCause.keyOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperationInUse
 * @constant
 * @type {number}
 */
export
const EventCause_keyOperationInUse: EventCause = EventCause.keyOperationInUse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperationInUse
 * @constant
 * @type {number}
 */
export
const keyOperationInUse: EventCause = EventCause.keyOperationInUse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lawfulInterception
 * @constant
 * @type {number}
 */
export
const EventCause_lawfulInterception: EventCause = EventCause.lawfulInterception; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lawfulInterception
 * @constant
 * @type {number}
 */
export
const lawfulInterception: EventCause = EventCause.lawfulInterception; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lockout
 * @constant
 * @type {number}
 */
export
const EventCause_lockout: EventCause = EventCause.lockout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lockout
 * @constant
 * @type {number}
 */
export
const lockout: EventCause = EventCause.lockout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maintenance
 * @constant
 * @type {number}
 */
export
const EventCause_maintenance: EventCause = EventCause.maintenance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maintenance
 * @constant
 * @type {number}
 */
export
const maintenance: EventCause = EventCause.maintenance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeCall
 * @constant
 * @type {number}
 */
export
const EventCause_makeCall: EventCause = EventCause.makeCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeCall
 * @constant
 * @type {number}
 */
export
const makeCall: EventCause = EventCause.makeCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeConnection
 * @constant
 * @type {number}
 */
export
const EventCause_makeConnection: EventCause = EventCause.makeConnection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeConnection
 * @constant
 * @type {number}
 */
export
const makeConnection: EventCause = EventCause.makeConnection; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makePredictiveCall
 * @constant
 * @type {number}
 */
export
const EventCause_makePredictiveCall: EventCause = EventCause.makePredictiveCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makePredictiveCall
 * @constant
 * @type {number}
 */
export
const makePredictiveCall: EventCause = EventCause.makePredictiveCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maxTimeout
 * @constant
 * @type {number}
 */
export
const EventCause_maxTimeout: EventCause = EventCause.maxTimeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxTimeout
 * @constant
 * @type {number}
 */
export
const maxTimeout: EventCause = EventCause.maxTimeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageDurationExceeded
 * @constant
 * @type {number}
 */
export
const EventCause_messageDurationExceeded: EventCause = EventCause.messageDurationExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageDurationExceeded
 * @constant
 * @type {number}
 */
export
const messageDurationExceeded: EventCause = EventCause.messageDurationExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageSizeExceeded
 * @constant
 * @type {number}
 */
export
const EventCause_messageSizeExceeded: EventCause = EventCause.messageSizeExceeded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageSizeExceeded
 * @constant
 * @type {number}
 */
export
const messageSizeExceeded: EventCause = EventCause.messageSizeExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleAlerting
 * @constant
 * @type {number}
 */
export
const EventCause_multipleAlerting: EventCause = EventCause.multipleAlerting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleAlerting
 * @constant
 * @type {number}
 */
export
const multipleAlerting: EventCause = EventCause.multipleAlerting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleQueuing
 * @constant
 * @type {number}
 */
export
const EventCause_multipleQueuing: EventCause = EventCause.multipleQueuing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleQueuing
 * @constant
 * @type {number}
 */
export
const multipleQueuing: EventCause = EventCause.multipleQueuing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkCongestion
 * @constant
 * @type {number}
 */
export
const EventCause_networkCongestion: EventCause = EventCause.networkCongestion; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkCongestion
 * @constant
 * @type {number}
 */
export
const networkCongestion: EventCause = EventCause.networkCongestion; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkDialling
 * @constant
 * @type {number}
 */
export
const EventCause_networkDialling: EventCause = EventCause.networkDialling; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkDialling
 * @constant
 * @type {number}
 */
export
const networkDialling: EventCause = EventCause.networkDialling; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkNotObtainable
 * @constant
 * @type {number}
 */
export
const EventCause_networkNotObtainable: EventCause = EventCause.networkNotObtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkNotObtainable
 * @constant
 * @type {number}
 */
export
const networkNotObtainable: EventCause = EventCause.networkNotObtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkOutOfOrder
 * @constant
 * @type {number}
 */
export
const EventCause_networkOutOfOrder: EventCause = EventCause.networkOutOfOrder; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkOutOfOrder
 * @constant
 * @type {number}
 */
export
const networkOutOfOrder: EventCause = EventCause.networkOutOfOrder; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkSignal
 * @constant
 * @type {number}
 */
export
const EventCause_networkSignal: EventCause = EventCause.networkSignal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSignal
 * @constant
 * @type {number}
 */
export
const networkSignal: EventCause = EventCause.networkSignal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_newCall
 * @constant
 * @type {number}
 */
export
const EventCause_newCall: EventCause = EventCause.newCall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newCall
 * @constant
 * @type {number}
 */
export
const newCall: EventCause = EventCause.newCall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_nextMessage
 * @constant
 * @type {number}
 */
export
const EventCause_nextMessage: EventCause = EventCause.nextMessage; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nextMessage
 * @constant
 * @type {number}
 */
export
const nextMessage: EventCause = EventCause.nextMessage; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAudioSaved
 * @constant
 * @type {number}
 */
export
const EventCause_noAudioSaved: EventCause = EventCause.noAudioSaved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAudioSaved
 * @constant
 * @type {number}
 */
export
const noAudioSaved: EventCause = EventCause.noAudioSaved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAvailableAgents
 * @constant
 * @type {number}
 */
export
const EventCause_noAvailableAgents: EventCause = EventCause.noAvailableAgents; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAvailableAgents
 * @constant
 * @type {number}
 */
export
const noAvailableAgents: EventCause = EventCause.noAvailableAgents; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noQueue
 * @constant
 * @type {number}
 */
export
const EventCause_noQueue: EventCause = EventCause.noQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noQueue
 * @constant
 * @type {number}
 */
export
const noQueue: EventCause = EventCause.noQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normal
 * @constant
 * @type {number}
 */
export
const EventCause_normal: EventCause = EventCause.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: EventCause = EventCause.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normalClearing
 * @constant
 * @type {number}
 */
export
const EventCause_normalClearing: EventCause = EventCause.normalClearing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalClearing
 * @constant
 * @type {number}
 */
export
const normalClearing: EventCause = EventCause.normalClearing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noRule
 * @constant
 * @type {number}
 */
export
const EventCause_noRule: EventCause = EventCause.noRule; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noRule
 * @constant
 * @type {number}
 */
export
const noRule: EventCause = EventCause.noRule; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noSpeechDetected
 * @constant
 * @type {number}
 */
export
const EventCause_noSpeechDetected: EventCause = EventCause.noSpeechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSpeechDetected
 * @constant
 * @type {number}
 */
export
const noSpeechDetected: EventCause = EventCause.noSpeechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notAvaliableBearerService
 * @constant
 * @type {number}
 */
export
const EventCause_notAvaliableBearerService: EventCause = EventCause.notAvaliableBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAvaliableBearerService
 * @constant
 * @type {number}
 */
export
const notAvaliableBearerService: EventCause = EventCause.notAvaliableBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notSupportedBearerService
 * @constant
 * @type {number}
 */
export
const EventCause_notSupportedBearerService: EventCause = EventCause.notSupportedBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSupportedBearerService
 * @constant
 * @type {number}
 */
export
const notSupportedBearerService: EventCause = EventCause.notSupportedBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberChanged
 * @constant
 * @type {number}
 */
export
const EventCause_numberChanged: EventCause = EventCause.numberChanged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberChanged
 * @constant
 * @type {number}
 */
export
const numberChanged: EventCause = EventCause.numberChanged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberUnallocated
 * @constant
 * @type {number}
 */
export
const EventCause_numberUnallocated: EventCause = EventCause.numberUnallocated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberUnallocated
 * @constant
 * @type {number}
 */
export
const numberUnallocated: EventCause = EventCause.numberUnallocated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_outOfGrammar
 * @constant
 * @type {number}
 */
export
const EventCause_outOfGrammar: EventCause = EventCause.outOfGrammar; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfGrammar
 * @constant
 * @type {number}
 */
export
const outOfGrammar: EventCause = EventCause.outOfGrammar; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_overflow
 * @constant
 * @type {number}
 */
export
const EventCause_overflow: EventCause = EventCause.overflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overflow
 * @constant
 * @type {number}
 */
export
const overflow: EventCause = EventCause.overflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_override
 * @constant
 * @type {number}
 */
export
const EventCause_override: EventCause = EventCause.override; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary override
 * @constant
 * @type {number}
 */
export
const override: EventCause = EventCause.override; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_park
 * @constant
 * @type {number}
 */
export
const EventCause_park: EventCause = EventCause.park; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @constant
 * @type {number}
 */
export
const park: EventCause = EventCause.park; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_pathReplacement
 * @constant
 * @type {number}
 */
export
const EventCause_pathReplacement: EventCause = EventCause.pathReplacement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathReplacement
 * @constant
 * @type {number}
 */
export
const pathReplacement: EventCause = EventCause.pathReplacement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueCleared
 * @constant
 * @type {number}
 */
export
const EventCause_queueCleared: EventCause = EventCause.queueCleared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueCleared
 * @constant
 * @type {number}
 */
export
const queueCleared: EventCause = EventCause.queueCleared; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueTimeOverflow
 * @constant
 * @type {number}
 */
export
const EventCause_queueTimeOverflow: EventCause = EventCause.queueTimeOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueTimeOverflow
 * @constant
 * @type {number}
 */
export
const queueTimeOverflow: EventCause = EventCause.queueTimeOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recall
 * @constant
 * @type {number}
 */
export
const EventCause_recall: EventCause = EventCause.recall; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recall
 * @constant
 * @type {number}
 */
export
const recall: EventCause = EventCause.recall; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallBusy
 * @constant
 * @type {number}
 */
export
const EventCause_recallBusy: EventCause = EventCause.recallBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallBusy
 * @constant
 * @type {number}
 */
export
const recallBusy: EventCause = EventCause.recallBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallForwarded
 * @constant
 * @type {number}
 */
export
const EventCause_recallForwarded: EventCause = EventCause.recallForwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallForwarded
 * @constant
 * @type {number}
 */
export
const recallForwarded: EventCause = EventCause.recallForwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallNoAnswer
 * @constant
 * @type {number}
 */
export
const EventCause_recallNoAnswer: EventCause = EventCause.recallNoAnswer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallNoAnswer
 * @constant
 * @type {number}
 */
export
const recallNoAnswer: EventCause = EventCause.recallNoAnswer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const EventCause_recallResourcesNotAvailable: EventCause = EventCause.recallResourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallResourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const recallResourcesNotAvailable: EventCause = EventCause.recallResourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_redirected
 * @constant
 * @type {number}
 */
export
const EventCause_redirected: EventCause = EventCause.redirected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redirected
 * @constant
 * @type {number}
 */
export
const redirected: EventCause = EventCause.redirected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_remainsInQueue
 * @constant
 * @type {number}
 */
export
const EventCause_remainsInQueue: EventCause = EventCause.remainsInQueue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainsInQueue
 * @constant
 * @type {number}
 */
export
const remainsInQueue: EventCause = EventCause.remainsInQueue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reorderTone
 * @constant
 * @type {number}
 */
export
const EventCause_reorderTone: EventCause = EventCause.reorderTone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorderTone
 * @constant
 * @type {number}
 */
export
const reorderTone: EventCause = EventCause.reorderTone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reserved
 * @constant
 * @type {number}
 */
export
const EventCause_reserved: EventCause = EventCause.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: EventCause = EventCause.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_resourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const EventCause_resourcesNotAvailable: EventCause = EventCause.resourcesNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourcesNotAvailable
 * @constant
 * @type {number}
 */
export
const resourcesNotAvailable: EventCause = EventCause.resourcesNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_selectedTrunkBusy
 * @constant
 * @type {number}
 */
export
const EventCause_selectedTrunkBusy: EventCause = EventCause.selectedTrunkBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectedTrunkBusy
 * @constant
 * @type {number}
 */
export
const selectedTrunkBusy: EventCause = EventCause.selectedTrunkBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_silentParticipation
 * @constant
 * @type {number}
 */
export
const EventCause_silentParticipation: EventCause = EventCause.silentParticipation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silentParticipation
 * @constant
 * @type {number}
 */
export
const silentParticipation: EventCause = EventCause.silentParticipation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepConference
 * @constant
 * @type {number}
 */
export
const EventCause_singleStepConference: EventCause = EventCause.singleStepConference; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConference
 * @constant
 * @type {number}
 */
export
const singleStepConference: EventCause = EventCause.singleStepConference; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepTransfer
 * @constant
 * @type {number}
 */
export
const EventCause_singleStepTransfer: EventCause = EventCause.singleStepTransfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepTransfer
 * @constant
 * @type {number}
 */
export
const singleStepTransfer: EventCause = EventCause.singleStepTransfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_speechDetected
 * @constant
 * @type {number}
 */
export
const EventCause_speechDetected: EventCause = EventCause.speechDetected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechDetected
 * @constant
 * @type {number}
 */
export
const speechDetected: EventCause = EventCause.speechDetected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_suspend
 * @constant
 * @type {number}
 */
export
const EventCause_suspend: EventCause = EventCause.suspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @constant
 * @type {number}
 */
export
const suspend: EventCause = EventCause.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_switchingFunctionTerminated
 * @constant
 * @type {number}
 */
export
const EventCause_switchingFunctionTerminated: EventCause = EventCause.switchingFunctionTerminated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchingFunctionTerminated
 * @constant
 * @type {number}
 */
export
const switchingFunctionTerminated: EventCause = EventCause.switchingFunctionTerminated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_terminationCharacterReceived
 * @constant
 * @type {number}
 */
export
const EventCause_terminationCharacterReceived: EventCause = EventCause.terminationCharacterReceived; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminationCharacterReceived
 * @constant
 * @type {number}
 */
export
const terminationCharacterReceived: EventCause = EventCause.terminationCharacterReceived; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_timeout
 * @constant
 * @type {number}
 */
export
const EventCause_timeout: EventCause = EventCause.timeout; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export
const timeout: EventCause = EventCause.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_transfer
 * @constant
 * @type {number}
 */
export
const EventCause_transfer: EventCause = EventCause.transfer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @constant
 * @type {number}
 */
export
const transfer: EventCause = EventCause.transfer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_trunksBusy
 * @constant
 * @type {number}
 */
export
const EventCause_trunksBusy: EventCause = EventCause.trunksBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunksBusy
 * @constant
 * @type {number}
 */
export
const trunksBusy: EventCause = EventCause.trunksBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unauthorisedBearerService
 * @constant
 * @type {number}
 */
export
const EventCause_unauthorisedBearerService: EventCause = EventCause.unauthorisedBearerService; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorisedBearerService
 * @constant
 * @type {number}
 */
export
const unauthorisedBearerService: EventCause = EventCause.unauthorisedBearerService; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unknownOverflow
 * @constant
 * @type {number}
 */
export
const EventCause_unknownOverflow: EventCause = EventCause.unknownOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOverflow
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

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
const EventCause = _enum_for_EventCause;

/**
 * @summary EventCause_aCDBusy
 * @description ACD Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDBusy = EventCause.aCDBusy satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDBusy
 * @description Alias of {@link EventCause_aCDBusy}.
 * @constant
 * @type {number}
 */
export
const aCDBusy = EventCause.aCDBusy satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDForward
 * @description ACD Forward. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDForward = EventCause.aCDForward satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDForward
 * @description Alias of {@link EventCause_aCDForward}.
 * @constant
 * @type {number}
 */
export
const aCDForward = EventCause.aCDForward satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_aCDSaturated
 * @description ACD Saturated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_aCDSaturated = EventCause.aCDSaturated satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCDSaturated
 * @description Alias of {@link EventCause_aCDSaturated}.
 * @constant
 * @type {number}
 */
export
const aCDSaturated = EventCause.aCDSaturated satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activation
 * @description Activation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_activation = EventCause.activation satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activation
 * @description Alias of {@link EventCause_activation}.
 * @constant
 * @type {number}
 */
export
const activation = EventCause.activation satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_activeParticipation
 * @description Active Participation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_activeParticipation = EventCause.activeParticipation satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary activeParticipation
 * @description Alias of {@link EventCause_activeParticipation}.
 * @constant
 * @type {number}
 */
export
const activeParticipation = EventCause.activeParticipation satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alertTimeExpired
 * @description Alert Time Expired. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_alertTimeExpired = EventCause.alertTimeExpired satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alertTimeExpired
 * @description Alias of {@link EventCause_alertTimeExpired}.
 * @constant
 * @type {number}
 */
export
const alertTimeExpired = EventCause.alertTimeExpired satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_alternate
 * @description Alternate. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_alternate = EventCause.alternate satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alternate
 * @description Alias of {@link EventCause_alternate}.
 * @constant
 * @type {number}
 */
export
const alternate = EventCause.alternate satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_autoWork
 * @description Auto Work. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_autoWork = EventCause.autoWork satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary autoWork
 * @description Alias of {@link EventCause_autoWork}.
 * @constant
 * @type {number}
 */
export
const autoWork = EventCause.autoWork satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_babble
 * @description Babble. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_babble = EventCause.babble satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary babble
 * @description Alias of {@link EventCause_babble}.
 * @constant
 * @type {number}
 */
export
const babble = EventCause.babble satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badAttribute
 * @description Bad Attribute. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badAttribute = EventCause.badAttribute satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badAttribute
 * @description Alias of {@link EventCause_badAttribute}.
 * @constant
 * @type {number}
 */
export
const badAttribute = EventCause.badAttribute satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badGrammar
 * @description Bad Grammar. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badGrammar = EventCause.badGrammar satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badGrammar
 * @description Alias of {@link EventCause_badGrammar}.
 * @constant
 * @type {number}
 */
export
const badGrammar = EventCause.badGrammar satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badVoice
 * @description Bad Voice. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badVoice = EventCause.badVoice satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badVoice
 * @description Alias of {@link EventCause_badVoice}.
 * @constant
 * @type {number}
 */
export
const badVoice = EventCause.badVoice satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_badUri
 * @description Bad URI. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_badUri = EventCause.badUri satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary badUri
 * @description Alias of {@link EventCause_badUri}.
 * @constant
 * @type {number}
 */
export
const badUri = EventCause.badUri satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_blocked
 * @description Blocked. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_blocked = EventCause.blocked satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary blocked
 * @description Alias of {@link EventCause_blocked}.
 * @constant
 * @type {number}
 */
export
const blocked = EventCause.blocked satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busy
 * @description Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_busy = EventCause.busy satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description Alias of {@link EventCause_busy}.
 * @constant
 * @type {number}
 */
export
const busy = EventCause.busy satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_busyOverflow
 * @description Busy Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_busyOverflow = EventCause.busyOverflow satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busyOverflow
 * @description Alias of {@link EventCause_busyOverflow}.
 * @constant
 * @type {number}
 */
export
const busyOverflow = EventCause.busyOverflow satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_calendarOverflow
 * @description Calendar Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_calendarOverflow = EventCause.calendarOverflow satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calendarOverflow
 * @description Alias of {@link EventCause_calendarOverflow}.
 * @constant
 * @type {number}
 */
export
const calendarOverflow = EventCause.calendarOverflow satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callBack
 * @description Call Back. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callBack = EventCause.callBack satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callBack
 * @description Alias of {@link EventCause_callBack}.
 * @constant
 * @type {number}
 */
export
const callBack = EventCause.callBack satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callCancelled
 * @description Call Cancelled. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callCancelled = EventCause.callCancelled satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callCancelled
 * @description Alias of {@link EventCause_callCancelled}.
 * @constant
 * @type {number}
 */
export
const callCancelled = EventCause.callCancelled satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForward
 * @description Call Forward. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForward = EventCause.callForward satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForward
 * @description Alias of {@link EventCause_callForward}.
 * @constant
 * @type {number}
 */
export
const callForward = EventCause.callForward satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardImmediate
 * @description Call Forward - Immediate. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardImmediate = EventCause.callForwardImmediate satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardImmediate
 * @description Alias of {@link EventCause_callForwardImmediate}.
 * @constant
 * @type {number}
 */
export
const callForwardImmediate = EventCause.callForwardImmediate satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardBusy
 * @description Call Forward - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardBusy = EventCause.callForwardBusy satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardBusy
 * @description Alias of {@link EventCause_callForwardBusy}.
 * @constant
 * @type {number}
 */
export
const callForwardBusy = EventCause.callForwardBusy satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callForwardNoAnswer
 * @description Call Forward - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callForwardNoAnswer = EventCause.callForwardNoAnswer satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardNoAnswer
 * @description Alias of {@link EventCause_callForwardNoAnswer}.
 * @constant
 * @type {number}
 */
export
const callForwardNoAnswer = EventCause.callForwardNoAnswer satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterception
 * @description Call Interception. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterception = EventCause.callInterception satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterception
 * @description Alias of {@link EventCause_callInterception}.
 * @constant
 * @type {number}
 */
export
const callInterception = EventCause.callInterception satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionBusy
 * @description Call Interception - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionBusy = EventCause.callInterceptionBusy satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionBusy
 * @description Alias of {@link EventCause_callInterceptionBusy}.
 * @constant
 * @type {number}
 */
export
const callInterceptionBusy = EventCause.callInterceptionBusy satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionForwarded
 * @description Call Interception - Forwarded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionForwarded = EventCause.callInterceptionForwarded satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionForwarded
 * @description Alias of {@link EventCause_callInterceptionForwarded}.
 * @constant
 * @type {number}
 */
export
const callInterceptionForwarded = EventCause.callInterceptionForwarded satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionNoAnswer
 * @description Call Interception - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionNoAnswer = EventCause.callInterceptionNoAnswer satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionNoAnswer
 * @description Alias of {@link EventCause_callInterceptionNoAnswer}.
 * @constant
 * @type {number}
 */
export
const callInterceptionNoAnswer = EventCause.callInterceptionNoAnswer satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callInterceptionResourcesNotAvailable
 * @description Call Interception - Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callInterceptionResourcesNotAvailable = EventCause.callInterceptionResourcesNotAvailable satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callInterceptionResourcesNotAvailable
 * @description
 * Alias of {@link EventCause_callInterceptionResourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const callInterceptionResourcesNotAvailable = EventCause.callInterceptionResourcesNotAvailable satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callNotAnswered
 * @description Call Not Answered. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callNotAnswered = EventCause.callNotAnswered satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callNotAnswered
 * @description Alias of {@link EventCause_callNotAnswered}.
 * @constant
 * @type {number}
 */
export
const callNotAnswered = EventCause.callNotAnswered satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_callPickup
 * @description Call Pickup. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_callPickup = EventCause.callPickup satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callPickup
 * @description Alias of {@link EventCause_callPickup}.
 * @constant
 * @type {number}
 */
export
const callPickup = EventCause.callPickup satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOn
 * @description Camp On. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_campOn = EventCause.campOn satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOn
 * @description Alias of {@link EventCause_campOn}.
 * @constant
 * @type {number}
 */
export
const campOn = EventCause.campOn satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_campOnTrunks
 * @description Camp On Trunks. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_campOnTrunks = EventCause.campOnTrunks satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary campOnTrunks
 * @description Alias of {@link EventCause_campOnTrunks}.
 * @constant
 * @type {number}
 */
export
const campOnTrunks = EventCause.campOnTrunks satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_capacityOverflow
 * @description Capacity Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_capacityOverflow = EventCause.capacityOverflow satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary capacityOverflow
 * @description Alias of {@link EventCause_capacityOverflow}.
 * @constant
 * @type {number}
 */
export
const capacityOverflow = EventCause.capacityOverflow satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_characterCountReached
 * @description Character Count Reached. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_characterCountReached = EventCause.characterCountReached satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary characterCountReached
 * @description Alias of {@link EventCause_characterCountReached}.
 * @constant
 * @type {number}
 */
export
const characterCountReached = EventCause.characterCountReached satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_conference
 * @description Conference. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_conference = EventCause.conference satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conference
 * @description Alias of {@link EventCause_conference}.
 * @constant
 * @type {number}
 */
export
const conference = EventCause.conference satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_consultation
 * @description Consultation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_consultation = EventCause.consultation satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary consultation
 * @description Alias of {@link EventCause_consultation}.
 * @constant
 * @type {number}
 */
export
const consultation = EventCause.consultation satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destDetected
 * @description Destination Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destDetected = EventCause.destDetected satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destDetected
 * @description Alias of {@link EventCause_destDetected}.
 * @constant
 * @type {number}
 */
export
const destDetected = EventCause.destDetected satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destNotObtainable
 * @description Destination Not Obtainable. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destNotObtainable = EventCause.destNotObtainable satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destNotObtainable
 * @description Alias of {@link EventCause_destNotObtainable}.
 * @constant
 * @type {number}
 */
export
const destNotObtainable = EventCause.destNotObtainable satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_destOutOfOrder
 * @description Destination Out of Order. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_destOutOfOrder = EventCause.destOutOfOrder satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destOutOfOrder
 * @description Alias of {@link EventCause_destOutOfOrder}.
 * @constant
 * @type {number}
 */
export
const destOutOfOrder = EventCause.destOutOfOrder satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributed
 * @description Distributed. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_distributed = EventCause.distributed satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributed
 * @description Alias of {@link EventCause_distributed}.
 * @constant
 * @type {number}
 */
export
const distributed = EventCause.distributed satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_distributionDelay
 * @description Distribution Delay. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_distributionDelay = EventCause.distributionDelay satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributionDelay
 * @description Alias of {@link EventCause_distributionDelay}.
 * @constant
 * @type {number}
 */
export
const distributionDelay = EventCause.distributionDelay satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_doNotDisturb
 * @description Do Not Disturb. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_doNotDisturb = EventCause.doNotDisturb satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary doNotDisturb
 * @description Alias of {@link EventCause_doNotDisturb}.
 * @constant
 * @type {number}
 */
export
const doNotDisturb = EventCause.doNotDisturb satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_dTMFDigitDetected
 * @description DTMF Digit Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_dTMFDigitDetected = EventCause.dTMFDigitDetected satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dTMFDigitDetected
 * @description Alias of {@link EventCause_dTMFDigitDetected}.
 * @constant
 * @type {number}
 */
export
const dTMFDigitDetected = EventCause.dTMFDigitDetected satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_duplicateDTMF
 * @description Duplicate DTMF. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_duplicateDTMF = EventCause.duplicateDTMF satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateDTMF
 * @description Alias of {@link EventCause_duplicateDTMF}.
 * @constant
 * @type {number}
 */
export
const duplicateDTMF = EventCause.duplicateDTMF satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_durationExceeded
 * @description Duration Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_durationExceeded = EventCause.durationExceeded satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary durationExceeded
 * @description Alias of {@link EventCause_durationExceeded}.
 * @constant
 * @type {number}
 */
export
const durationExceeded = EventCause.durationExceeded satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_earlyStop
 * @description Early Stop. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_earlyStop = EventCause.earlyStop satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary earlyStop
 * @description Alias of {@link EventCause_earlyStop}.
 * @constant
 * @type {number}
 */
export
const earlyStop = EventCause.earlyStop satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_emptyQueue
 * @description Empty Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_emptyQueue = EventCause.emptyQueue satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary emptyQueue
 * @description Alias of {@link EventCause_emptyQueue}.
 * @constant
 * @type {number}
 */
export
const emptyQueue = EventCause.emptyQueue satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_endOfMessageDetected
 * @description End of Message Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_endOfMessageDetected = EventCause.endOfMessageDetected satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary endOfMessageDetected
 * @description Alias of {@link EventCause_endOfMessageDetected}.
 * @constant
 * @type {number}
 */
export
const endOfMessageDetected = EventCause.endOfMessageDetected satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_enteringDistribution
 * @description Entering Distribution. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_enteringDistribution = EventCause.enteringDistribution satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enteringDistribution
 * @description Alias of {@link EventCause_enteringDistribution}.
 * @constant
 * @type {number}
 */
export
const enteringDistribution = EventCause.enteringDistribution satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedPause
 * @description Forced Pause. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_forcedPause = EventCause.forcedPause satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedPause
 * @description Alias of {@link EventCause_forcedPause}.
 * @constant
 * @type {number}
 */
export
const forcedPause = EventCause.forcedPause satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_forcedTransition
 * @description Forced Transition. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_forcedTransition = EventCause.forcedTransition satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forcedTransition
 * @description Alias of {@link EventCause_forcedTransition}.
 * @constant
 * @type {number}
 */
export
const forcedTransition = EventCause.forcedTransition satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_incompatibleDestination
 * @description Incompatible Destination. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_incompatibleDestination = EventCause.incompatibleDestination satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary incompatibleDestination
 * @description Alias of {@link EventCause_incompatibleDestination}.
 * @constant
 * @type {number}
 */
export
const incompatibleDestination = EventCause.incompatibleDestination satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_interDigitTimeout
 * @description inter-digit Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_interDigitTimeout = EventCause.interDigitTimeout satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interDigitTimeout
 * @description Alias of {@link EventCause_interDigitTimeout}.
 * @constant
 * @type {number}
 */
export
const interDigitTimeout = EventCause.interDigitTimeout satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_intrude
 * @description Intrude. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_intrude = EventCause.intrude satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intrude
 * @description Alias of {@link EventCause_intrude}.
 * @constant
 * @type {number}
 */
export
const intrude = EventCause.intrude satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidAccountCode
 * @description Invalid Account Code. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidAccountCode = EventCause.invalidAccountCode satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAccountCode
 * @description Alias of {@link EventCause_invalidAccountCode}.
 * @constant
 * @type {number}
 */
export
const invalidAccountCode = EventCause.invalidAccountCode satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnection
 * @description Invalid Connection. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidConnection = EventCause.invalidConnection satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnection
 * @description Alias of {@link EventCause_invalidConnection}.
 * @constant
 * @type {number}
 */
export
const invalidConnection = EventCause.invalidConnection satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidConnectionState
 * @description Invalid Connection State. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidConnectionState = EventCause.invalidConnectionState satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidConnectionState
 * @description Alias of {@link EventCause_invalidConnectionState}.
 * @constant
 * @type {number}
 */
export
const invalidConnectionState = EventCause.invalidConnectionState satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_invalidNumberFormat
 * @description Invalid Number Format. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_invalidNumberFormat = EventCause.invalidNumberFormat satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidNumberFormat
 * @description Alias of {@link EventCause_invalidNumberFormat}.
 * @constant
 * @type {number}
 */
export
const invalidNumberFormat = EventCause.invalidNumberFormat satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_joinCall
 * @description Join Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_joinCall = EventCause.joinCall satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary joinCall
 * @description Alias of {@link EventCause_joinCall}.
 * @constant
 * @type {number}
 */
export
const joinCall = EventCause.joinCall satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperation
 * @description Key Operation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_keyOperation = EventCause.keyOperation satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperation
 * @description Alias of {@link EventCause_keyOperation}.
 * @constant
 * @type {number}
 */
export
const keyOperation = EventCause.keyOperation satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_keyOperationInUse
 * @description Key Operation In Use. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_keyOperationInUse = EventCause.keyOperationInUse satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyOperationInUse
 * @description Alias of {@link EventCause_keyOperationInUse}.
 * @constant
 * @type {number}
 */
export
const keyOperationInUse = EventCause.keyOperationInUse satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lawfulInterception
 * @description Lawful Interception. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_lawfulInterception = EventCause.lawfulInterception satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lawfulInterception
 * @description Alias of {@link EventCause_lawfulInterception}.
 * @constant
 * @type {number}
 */
export
const lawfulInterception = EventCause.lawfulInterception satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_lockout
 * @description Lockout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_lockout = EventCause.lockout satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lockout
 * @description Alias of {@link EventCause_lockout}.
 * @constant
 * @type {number}
 */
export
const lockout = EventCause.lockout satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maintenance
 * @description Maintenance. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_maintenance = EventCause.maintenance satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maintenance
 * @description Alias of {@link EventCause_maintenance}.
 * @constant
 * @type {number}
 */
export
const maintenance = EventCause.maintenance satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeCall
 * @description Make Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makeCall = EventCause.makeCall satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeCall
 * @description Alias of {@link EventCause_makeCall}.
 * @constant
 * @type {number}
 */
export
const makeCall = EventCause.makeCall satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makeConnection
 * @description Make Connection. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makeConnection = EventCause.makeConnection satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makeConnection
 * @description Alias of {@link EventCause_makeConnection}.
 * @constant
 * @type {number}
 */
export
const makeConnection = EventCause.makeConnection satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_makePredictiveCall
 * @description Make Predictive Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_makePredictiveCall = EventCause.makePredictiveCall satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary makePredictiveCall
 * @description Alias of {@link EventCause_makePredictiveCall}.
 * @constant
 * @type {number}
 */
export
const makePredictiveCall = EventCause.makePredictiveCall satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_maxTimeout
 * @description Max Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_maxTimeout = EventCause.maxTimeout satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maxTimeout
 * @description Alias of {@link EventCause_maxTimeout}.
 * @constant
 * @type {number}
 */
export
const maxTimeout = EventCause.maxTimeout satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageDurationExceeded
 * @description Message Duration Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_messageDurationExceeded = EventCause.messageDurationExceeded satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageDurationExceeded
 * @description Alias of {@link EventCause_messageDurationExceeded}.
 * @constant
 * @type {number}
 */
export
const messageDurationExceeded = EventCause.messageDurationExceeded satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_messageSizeExceeded
 * @description Message Size Exceeded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_messageSizeExceeded = EventCause.messageSizeExceeded satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary messageSizeExceeded
 * @description Alias of {@link EventCause_messageSizeExceeded}.
 * @constant
 * @type {number}
 */
export
const messageSizeExceeded = EventCause.messageSizeExceeded satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleAlerting
 * @description Multiple Alerting. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_multipleAlerting = EventCause.multipleAlerting satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleAlerting
 * @description Alias of {@link EventCause_multipleAlerting}.
 * @constant
 * @type {number}
 */
export
const multipleAlerting = EventCause.multipleAlerting satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_multipleQueuing
 * @description Multiple Queuing. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_multipleQueuing = EventCause.multipleQueuing satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleQueuing
 * @description Alias of {@link EventCause_multipleQueuing}.
 * @constant
 * @type {number}
 */
export
const multipleQueuing = EventCause.multipleQueuing satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkCongestion
 * @description Network Congestion. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkCongestion = EventCause.networkCongestion satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkCongestion
 * @description Alias of {@link EventCause_networkCongestion}.
 * @constant
 * @type {number}
 */
export
const networkCongestion = EventCause.networkCongestion satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkDialling
 * @description Network Dialling. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkDialling = EventCause.networkDialling satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkDialling
 * @description Alias of {@link EventCause_networkDialling}.
 * @constant
 * @type {number}
 */
export
const networkDialling = EventCause.networkDialling satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkNotObtainable
 * @description Network Not Obtainable. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkNotObtainable = EventCause.networkNotObtainable satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkNotObtainable
 * @description Alias of {@link EventCause_networkNotObtainable}.
 * @constant
 * @type {number}
 */
export
const networkNotObtainable = EventCause.networkNotObtainable satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkOutOfOrder
 * @description Network Out of Order. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkOutOfOrder = EventCause.networkOutOfOrder satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkOutOfOrder
 * @description Alias of {@link EventCause_networkOutOfOrder}.
 * @constant
 * @type {number}
 */
export
const networkOutOfOrder = EventCause.networkOutOfOrder satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_networkSignal
 * @description Network Signal. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_networkSignal = EventCause.networkSignal satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSignal
 * @description Alias of {@link EventCause_networkSignal}.
 * @constant
 * @type {number}
 */
export
const networkSignal = EventCause.networkSignal satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_newCall
 * @description New Call. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_newCall = EventCause.newCall satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary newCall
 * @description Alias of {@link EventCause_newCall}.
 * @constant
 * @type {number}
 */
export
const newCall = EventCause.newCall satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_nextMessage
 * @description Next Message. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_nextMessage = EventCause.nextMessage satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nextMessage
 * @description Alias of {@link EventCause_nextMessage}.
 * @constant
 * @type {number}
 */
export
const nextMessage = EventCause.nextMessage satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAudioSaved
 * @description No Audio Saved. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noAudioSaved = EventCause.noAudioSaved satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAudioSaved
 * @description Alias of {@link EventCause_noAudioSaved}.
 * @constant
 * @type {number}
 */
export
const noAudioSaved = EventCause.noAudioSaved satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noAvailableAgents
 * @description No Available Agents. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noAvailableAgents = EventCause.noAvailableAgents satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noAvailableAgents
 * @description Alias of {@link EventCause_noAvailableAgents}.
 * @constant
 * @type {number}
 */
export
const noAvailableAgents = EventCause.noAvailableAgents satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noQueue
 * @description No Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noQueue = EventCause.noQueue satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noQueue
 * @description Alias of {@link EventCause_noQueue}.
 * @constant
 * @type {number}
 */
export
const noQueue = EventCause.noQueue satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normal
 * @description Normal. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_normal = EventCause.normal satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @description Alias of {@link EventCause_normal}.
 * @constant
 * @type {number}
 */
export
const normal = EventCause.normal satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_normalClearing
 * @description Normal Clearing. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_normalClearing = EventCause.normalClearing satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalClearing
 * @description Alias of {@link EventCause_normalClearing}.
 * @constant
 * @type {number}
 */
export
const normalClearing = EventCause.normalClearing satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noRule
 * @description No Rule. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noRule = EventCause.noRule satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noRule
 * @description Alias of {@link EventCause_noRule}.
 * @constant
 * @type {number}
 */
export
const noRule = EventCause.noRule satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_noSpeechDetected
 * @description No Speech Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_noSpeechDetected = EventCause.noSpeechDetected satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noSpeechDetected
 * @description Alias of {@link EventCause_noSpeechDetected}.
 * @constant
 * @type {number}
 */
export
const noSpeechDetected = EventCause.noSpeechDetected satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notAvaliableBearerService
 * @description Not Available Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_notAvaliableBearerService = EventCause.notAvaliableBearerService satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notAvaliableBearerService
 * @description Alias of {@link EventCause_notAvaliableBearerService}.
 * @constant
 * @type {number}
 */
export
const notAvaliableBearerService = EventCause.notAvaliableBearerService satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_notSupportedBearerService
 * @description Not Supported Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_notSupportedBearerService = EventCause.notSupportedBearerService satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notSupportedBearerService
 * @description Alias of {@link EventCause_notSupportedBearerService}.
 * @constant
 * @type {number}
 */
export
const notSupportedBearerService = EventCause.notSupportedBearerService satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberChanged
 * @description Number Changed. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_numberChanged = EventCause.numberChanged satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberChanged
 * @description Alias of {@link EventCause_numberChanged}.
 * @constant
 * @type {number}
 */
export
const numberChanged = EventCause.numberChanged satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_numberUnallocated
 * @description Number Unallocated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_numberUnallocated = EventCause.numberUnallocated satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary numberUnallocated
 * @description Alias of {@link EventCause_numberUnallocated}.
 * @constant
 * @type {number}
 */
export
const numberUnallocated = EventCause.numberUnallocated satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_outOfGrammar
 * @description Out Of Grammar. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_outOfGrammar = EventCause.outOfGrammar satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary outOfGrammar
 * @description Alias of {@link EventCause_outOfGrammar}.
 * @constant
 * @type {number}
 */
export
const outOfGrammar = EventCause.outOfGrammar satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_overflow
 * @description Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_overflow = EventCause.overflow satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary overflow
 * @description Alias of {@link EventCause_overflow}.
 * @constant
 * @type {number}
 */
export
const overflow = EventCause.overflow satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_override
 * @description Override. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_override = EventCause.override satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary override
 * @description Alias of {@link EventCause_override}.
 * @constant
 * @type {number}
 */
export
const override = EventCause.override satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_park
 * @description Park. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_park = EventCause.park satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary park
 * @description Alias of {@link EventCause_park}.
 * @constant
 * @type {number}
 */
export
const park = EventCause.park satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_pathReplacement
 * @description Path Replacement. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_pathReplacement = EventCause.pathReplacement satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pathReplacement
 * @description Alias of {@link EventCause_pathReplacement}.
 * @constant
 * @type {number}
 */
export
const pathReplacement = EventCause.pathReplacement satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueCleared
 * @description Queue Cleared. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_queueCleared = EventCause.queueCleared satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueCleared
 * @description Alias of {@link EventCause_queueCleared}.
 * @constant
 * @type {number}
 */
export
const queueCleared = EventCause.queueCleared satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_queueTimeOverflow
 * @description Queue Time Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_queueTimeOverflow = EventCause.queueTimeOverflow satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary queueTimeOverflow
 * @description Alias of {@link EventCause_queueTimeOverflow}.
 * @constant
 * @type {number}
 */
export
const queueTimeOverflow = EventCause.queueTimeOverflow satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recall
 * @description Recall. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recall = EventCause.recall satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recall
 * @description Alias of {@link EventCause_recall}.
 * @constant
 * @type {number}
 */
export
const recall = EventCause.recall satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallBusy
 * @description Recall - Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallBusy = EventCause.recallBusy satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallBusy
 * @description Alias of {@link EventCause_recallBusy}.
 * @constant
 * @type {number}
 */
export
const recallBusy = EventCause.recallBusy satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallForwarded
 * @description Recall - Forwarded. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallForwarded = EventCause.recallForwarded satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallForwarded
 * @description Alias of {@link EventCause_recallForwarded}.
 * @constant
 * @type {number}
 */
export
const recallForwarded = EventCause.recallForwarded satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallNoAnswer
 * @description Recall - No Answer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallNoAnswer = EventCause.recallNoAnswer satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallNoAnswer
 * @description Alias of {@link EventCause_recallNoAnswer}.
 * @constant
 * @type {number}
 */
export
const recallNoAnswer = EventCause.recallNoAnswer satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_recallResourcesNotAvailable
 * @description Recall - Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_recallResourcesNotAvailable = EventCause.recallResourcesNotAvailable satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recallResourcesNotAvailable
 * @description Alias of {@link EventCause_recallResourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const recallResourcesNotAvailable = EventCause.recallResourcesNotAvailable satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_redirected
 * @description Redirected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_redirected = EventCause.redirected satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary redirected
 * @description Alias of {@link EventCause_redirected}.
 * @constant
 * @type {number}
 */
export
const redirected = EventCause.redirected satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_remainsInQueue
 * @description Remains in Queue. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_remainsInQueue = EventCause.remainsInQueue satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remainsInQueue
 * @description Alias of {@link EventCause_remainsInQueue}.
 * @constant
 * @type {number}
 */
export
const remainsInQueue = EventCause.remainsInQueue satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reorderTone
 * @description Reorder Tone. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_reorderTone = EventCause.reorderTone satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reorderTone
 * @description Alias of {@link EventCause_reorderTone}.
 * @constant
 * @type {number}
 */
export
const reorderTone = EventCause.reorderTone satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_reserved
 * @description Reserved. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_reserved = EventCause.reserved satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @description Alias of {@link EventCause_reserved}.
 * @constant
 * @type {number}
 */
export
const reserved = EventCause.reserved satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_resourcesNotAvailable
 * @description Resources Not Available. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_resourcesNotAvailable = EventCause.resourcesNotAvailable satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourcesNotAvailable
 * @description Alias of {@link EventCause_resourcesNotAvailable}.
 * @constant
 * @type {number}
 */
export
const resourcesNotAvailable = EventCause.resourcesNotAvailable satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_selectedTrunkBusy
 * @description Selected Trunk Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_selectedTrunkBusy = EventCause.selectedTrunkBusy satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectedTrunkBusy
 * @description Alias of {@link EventCause_selectedTrunkBusy}.
 * @constant
 * @type {number}
 */
export
const selectedTrunkBusy = EventCause.selectedTrunkBusy satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_silentParticipation
 * @description Silent Participation. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_silentParticipation = EventCause.silentParticipation satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary silentParticipation
 * @description Alias of {@link EventCause_silentParticipation}.
 * @constant
 * @type {number}
 */
export
const silentParticipation = EventCause.silentParticipation satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepConference
 * @description Single Step Conference. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_singleStepConference = EventCause.singleStepConference satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepConference
 * @description Alias of {@link EventCause_singleStepConference}.
 * @constant
 * @type {number}
 */
export
const singleStepConference = EventCause.singleStepConference satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_singleStepTransfer
 * @description Single Step Transfer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_singleStepTransfer = EventCause.singleStepTransfer satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary singleStepTransfer
 * @description Alias of {@link EventCause_singleStepTransfer}.
 * @constant
 * @type {number}
 */
export
const singleStepTransfer = EventCause.singleStepTransfer satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_speechDetected
 * @description Speech Detected. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_speechDetected = EventCause.speechDetected satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speechDetected
 * @description Alias of {@link EventCause_speechDetected}.
 * @constant
 * @type {number}
 */
export
const speechDetected = EventCause.speechDetected satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_suspend
 * @description Suspend. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_suspend = EventCause.suspend satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @description Alias of {@link EventCause_suspend}.
 * @constant
 * @type {number}
 */
export
const suspend = EventCause.suspend satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_switchingFunctionTerminated
 * @description Switching Function Terminated. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_switchingFunctionTerminated = EventCause.switchingFunctionTerminated satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary switchingFunctionTerminated
 * @description Alias of {@link EventCause_switchingFunctionTerminated}.
 * @constant
 * @type {number}
 */
export
const switchingFunctionTerminated = EventCause.switchingFunctionTerminated satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_terminationCharacterReceived
 * @description Termination Character Received. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_terminationCharacterReceived = EventCause.terminationCharacterReceived satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminationCharacterReceived
 * @description Alias of {@link EventCause_terminationCharacterReceived}.
 * @constant
 * @type {number}
 */
export
const terminationCharacterReceived = EventCause.terminationCharacterReceived satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_timeout
 * @description Timeout. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_timeout = EventCause.timeout satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timeout
 * @description Alias of {@link EventCause_timeout}.
 * @constant
 * @type {number}
 */
export
const timeout = EventCause.timeout satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_transfer
 * @description Transfer. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_transfer = EventCause.transfer satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transfer
 * @description Alias of {@link EventCause_transfer}.
 * @constant
 * @type {number}
 */
export
const transfer = EventCause.transfer satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_trunksBusy
 * @description Trunks Busy. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_trunksBusy = EventCause.trunksBusy satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trunksBusy
 * @description Alias of {@link EventCause_trunksBusy}.
 * @constant
 * @type {number}
 */
export
const trunksBusy = EventCause.trunksBusy satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unauthorisedBearerService
 * @description Unauthorized Bearer Service. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_unauthorisedBearerService = EventCause.unauthorisedBearerService satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unauthorisedBearerService
 * @description Alias of {@link EventCause_unauthorisedBearerService}.
 * @constant
 * @type {number}
 */
export
const unauthorisedBearerService = EventCause.unauthorisedBearerService satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EventCause_unknownOverflow
 * @description Unknown Overflow. ECMA-269 §12.2.15.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 */
export
const EventCause_unknownOverflow = EventCause.unknownOverflow satisfies EventCause; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownOverflow
 * @description Alias of {@link EventCause_unknownOverflow}.
 * @constant
 * @type {number}
 */
export
const unknownOverflow = EventCause.unknownOverflow satisfies EventCause; /* SHORT_NAMED_ENUMERATED_VALUE */

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

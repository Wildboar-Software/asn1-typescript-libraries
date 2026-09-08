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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
// export { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";
import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";
// export { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";
import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";
// export { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";
import { RedirectionDeviceID, _decode_RedirectionDeviceID, _encode_RedirectionDeviceID } from "../CSTA-device-identifiers/RedirectionDeviceID.ta.mjs";
// export { RedirectionDeviceID, _decode_RedirectionDeviceID, _encode_RedirectionDeviceID } from "../CSTA-device-identifiers/RedirectionDeviceID.ta.mjs";
import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
// export { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
// export { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
import { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";
// export { UserData, _decode_UserData, _encode_UserData } from "../CSTA-device-feature-types/UserData.ta.mjs";
import { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
// export { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";
// export { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";
import { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";
// export { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";
import { NetworkCalledDeviceID, _decode_NetworkCalledDeviceID, _encode_NetworkCalledDeviceID } from "../CSTA-device-identifiers/NetworkCalledDeviceID.ta.mjs";
// export { NetworkCalledDeviceID, _decode_NetworkCalledDeviceID, _encode_NetworkCalledDeviceID } from "../CSTA-device-identifiers/NetworkCalledDeviceID.ta.mjs";
import { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";
// export { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";
import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";
// export { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
// export { CallLinkageData, _decode_CallLinkageData, _encode_CallLinkageData } from "../CSTA-call-control/CallLinkageData.ta.mjs";
import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
// export { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
import { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";
// export { MessageInfo, _decode_MessageInfo, _encode_MessageInfo } from "../CSTA-device-feature-types/MessageInfo.ta.mjs";
import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
// export { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
import { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";
// export { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";
import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";
// export { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary QueuedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QueuedEvent ::= SEQUENCE
 * {    queuedConnection        ConnectionID,
 *     queue                SubjectDeviceID,
 *     callingDevice            CallingDeviceID,
 *     calledDevice            CalledDeviceID,
 *     lastRedirectionDevice        RedirectionDeviceID,
 *     numberQueued            [ 0] IMPLICIT INTEGER                OPTIONAL,
 *     callsInFront            [ 1] IMPLICIT INTEGER                OPTIONAL,
 *     localConnectionInfo        LocalConnectionState                OPTIONAL,
 *     correlatorData            [ 2] IMPLICIT CorrelatorData            OPTIONAL,
 *     userData            UserData                    OPTIONAL,
 *     cause                EventCause,
 *     servicesPermitted        [ 3] IMPLICIT ServicesPermitted            OPTIONAL,
 *     networkCallingDevice        NetworkCallingDeviceID                OPTIONAL,
 *     networkCalledDevice        NetworkCalledDeviceID                OPTIONAL,
 *     associatedCallingDevice        AssociatedCallingDeviceID            OPTIONAL,
 *     associatedCalledDevice        AssociatedCalledDeviceID            OPTIONAL,
 *     mediaCallCharacteristics    [ 4] IMPLICIT MediaCallCharacteristics         OPTIONAL,
 *     callCharacteristics        [ 5] IMPLICIT CallCharacteristics        OPTIONAL,
 *     queuedConnectionInfo        [ 6] IMPLICIT ConnectionInformation        OPTIONAL,
 *     callLinkageData            [ 7] IMPLICIT CallLinkageData            OPTIONAL,
 *     subjectOfCall            [ 8] IMPLICIT SubjectOfCall            OPTIONAL,
 *     messageInfo            [ 9] IMPLICIT MessageInfo            OPTIONAL,
 *     languagePreferences        [10] IMPLICIT LanguagePreferences        OPTIONAL,
 *     deviceHistory            [11] IMPLICIT DeviceHistory            OPTIONAL,
 *     locationInfo            [12] IMPLICIT LocationInfoList            OPTIONAL,
 *     extensions            CSTACommonArguments                OPTIONAL }
 * ```
 * 
 * @class
 */
export
class QueuedEvent {
    constructor (
        /**
         * @summary `queuedConnection`.
         * @public
         * @readonly
         */
        readonly queuedConnection: ConnectionID,
        /**
         * @summary `queue`.
         * @public
         * @readonly
         */
        readonly queue: SubjectDeviceID,
        /**
         * @summary `callingDevice`.
         * @public
         * @readonly
         */
        readonly callingDevice: CallingDeviceID,
        /**
         * @summary `calledDevice`.
         * @public
         * @readonly
         */
        readonly calledDevice: CalledDeviceID,
        /**
         * @summary `lastRedirectionDevice`.
         * @public
         * @readonly
         */
        readonly lastRedirectionDevice: RedirectionDeviceID,
        /**
         * @summary `numberQueued`.
         * @public
         * @readonly
         */
        readonly numberQueued: OPTIONAL<INTEGER>,
        /**
         * @summary `callsInFront`.
         * @public
         * @readonly
         */
        readonly callsInFront: OPTIONAL<INTEGER>,
        /**
         * @summary `localConnectionInfo`.
         * @public
         * @readonly
         */
        readonly localConnectionInfo: OPTIONAL<LocalConnectionState>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `userData`.
         * @public
         * @readonly
         */
        readonly userData: OPTIONAL<UserData>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EventCause,
        /**
         * @summary `servicesPermitted`.
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `networkCallingDevice`.
         * @public
         * @readonly
         */
        readonly networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>,
        /**
         * @summary `networkCalledDevice`.
         * @public
         * @readonly
         */
        readonly networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>,
        /**
         * @summary `associatedCallingDevice`.
         * @public
         * @readonly
         */
        readonly associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>,
        /**
         * @summary `associatedCalledDevice`.
         * @public
         * @readonly
         */
        readonly associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `queuedConnectionInfo`.
         * @public
         * @readonly
         */
        readonly queuedConnectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `callLinkageData`.
         * @public
         * @readonly
         */
        readonly callLinkageData: OPTIONAL<CallLinkageData>,
        /**
         * @summary `subjectOfCall`.
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `messageInfo`.
         * @public
         * @readonly
         */
        readonly messageInfo: OPTIONAL<MessageInfo>,
        /**
         * @summary `languagePreferences`.
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `deviceHistory`.
         * @public
         * @readonly
         */
        readonly deviceHistory: OPTIONAL<DeviceHistory>,
        /**
         * @summary `locationInfo`.
         * @public
         * @readonly
         */
        readonly locationInfo: OPTIONAL<LocationInfoList>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a QueuedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `QueuedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QueuedEvent`.
     * @returns {QueuedEvent}
     */
    public static _from_object (_o: { [_K in keyof (QueuedEvent)]: (QueuedEvent)[_K] }): QueuedEvent {
        return new QueuedEvent(_o.queuedConnection, _o.queue, _o.callingDevice, _o.calledDevice, _o.lastRedirectionDevice, _o.numberQueued, _o.callsInFront, _o.localConnectionInfo, _o.correlatorData, _o.userData, _o.cause, _o.servicesPermitted, _o.networkCallingDevice, _o.networkCalledDevice, _o.associatedCallingDevice, _o.associatedCalledDevice, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.queuedConnectionInfo, _o.callLinkageData, _o.subjectOfCall, _o.messageInfo, _o.languagePreferences, _o.deviceHistory, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of QueuedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QueuedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("queuedConnection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("queue", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("callingDevice", false, $.hasTag(_TagClass.application, 1), undefined, undefined),
    new $.ComponentSpec("calledDevice", false, $.hasTag(_TagClass.application, 2), undefined, undefined),
    new $.ComponentSpec("lastRedirectionDevice", false, $.hasTag(_TagClass.application, 4), undefined, undefined),
    new $.ComponentSpec("numberQueued", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callsInFront", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14), undefined, undefined),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("userData", true, $.hasTag(_TagClass.application, 29), undefined, undefined),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("networkCallingDevice", true, $.hasTag(_TagClass.application, 7), undefined, undefined),
    new $.ComponentSpec("networkCalledDevice", true, $.hasTag(_TagClass.application, 8), undefined, undefined),
    new $.ComponentSpec("associatedCallingDevice", true, $.hasTag(_TagClass.application, 5), undefined, undefined),
    new $.ComponentSpec("associatedCalledDevice", true, $.hasTag(_TagClass.application, 6), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("queuedConnectionInfo", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("callLinkageData", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("messageInfo", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("deviceHistory", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of QueuedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QueuedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QueuedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QueuedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QueuedEvent: $.ASN1Decoder<QueuedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QueuedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QueuedEvent (el: _Element): QueuedEvent {
    if (!_cached_decoder_for_QueuedEvent) { _cached_decoder_for_QueuedEvent = function (el: _Element): QueuedEvent {
    let queuedConnection!: ConnectionID;
    let queue!: SubjectDeviceID;
    let callingDevice!: CallingDeviceID;
    let calledDevice!: CalledDeviceID;
    let lastRedirectionDevice!: RedirectionDeviceID;
    let numberQueued: OPTIONAL<INTEGER>;
    let callsInFront: OPTIONAL<INTEGER>;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let cause!: EventCause;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>;
    let networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>;
    let associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>;
    let associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let queuedConnectionInfo: OPTIONAL<ConnectionInformation>;
    let callLinkageData: OPTIONAL<CallLinkageData>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let messageInfo: OPTIONAL<MessageInfo>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceHistory: OPTIONAL<DeviceHistory>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "queuedConnection": (_el: _Element): void => { queuedConnection = _decode_ConnectionID(_el); },
        "queue": (_el: _Element): void => { queue = _decode_SubjectDeviceID(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "calledDevice": (_el: _Element): void => { calledDevice = _decode_CalledDeviceID(_el); },
        "lastRedirectionDevice": (_el: _Element): void => { lastRedirectionDevice = _decode_RedirectionDeviceID(_el); },
        "numberQueued": (_el: _Element): void => { numberQueued = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "callsInFront": (_el: _Element): void => { callsInFront = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "networkCallingDevice": (_el: _Element): void => { networkCallingDevice = _decode_NetworkCallingDeviceID(_el); },
        "networkCalledDevice": (_el: _Element): void => { networkCalledDevice = _decode_NetworkCalledDeviceID(_el); },
        "associatedCallingDevice": (_el: _Element): void => { associatedCallingDevice = _decode_AssociatedCallingDeviceID(_el); },
        "associatedCalledDevice": (_el: _Element): void => { associatedCalledDevice = _decode_AssociatedCalledDeviceID(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "queuedConnectionInfo": (_el: _Element): void => { queuedConnectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "callLinkageData": (_el: _Element): void => { callLinkageData = $._decode_implicit<CallLinkageData>(() => _decode_CallLinkageData)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "messageInfo": (_el: _Element): void => { messageInfo = $._decode_implicit<MessageInfo>(() => _decode_MessageInfo)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceHistory": (_el: _Element): void => { deviceHistory = $._decode_implicit<DeviceHistory>(() => _decode_DeviceHistory)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QueuedEvent,
        _extension_additions_list_spec_for_QueuedEvent,
        _root_component_type_list_2_spec_for_QueuedEvent,
        undefined,
    );
    return new QueuedEvent(
        queuedConnection,
        queue,
        callingDevice,
        calledDevice,
        lastRedirectionDevice,
        numberQueued,
        callsInFront,
        localConnectionInfo,
        correlatorData,
        userData,
        cause,
        servicesPermitted,
        networkCallingDevice,
        networkCalledDevice,
        associatedCallingDevice,
        associatedCalledDevice,
        mediaCallCharacteristics,
        callCharacteristics,
        queuedConnectionInfo,
        callLinkageData,
        subjectOfCall,
        messageInfo,
        languagePreferences,
        deviceHistory,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_QueuedEvent(el);
}

let _cached_encoder_for_QueuedEvent: $.ASN1Encoder<QueuedEvent> | null = null;

/**
 * @summary Encodes a(n) QueuedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QueuedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_QueuedEvent (value: QueuedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QueuedEvent) { _cached_encoder_for_QueuedEvent = function (value: QueuedEvent, elGetter: $.ASN1Encoder<QueuedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.queuedConnection, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.queue, $.BER),
            /* REQUIRED   */ _encode_CallingDeviceID(value.callingDevice, $.BER),
            /* REQUIRED   */ _encode_CalledDeviceID(value.calledDevice, $.BER),
            /* REQUIRED   */ _encode_RedirectionDeviceID(value.lastRedirectionDevice, $.BER),
            /* IF_ABSENT  */ ((value.numberQueued === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numberQueued, $.BER)),
            /* IF_ABSENT  */ ((value.callsInFront === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.callsInFront, $.BER)),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.networkCallingDevice === undefined) ? undefined : _encode_NetworkCallingDeviceID(value.networkCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.networkCalledDevice === undefined) ? undefined : _encode_NetworkCalledDeviceID(value.networkCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCallingDevice === undefined) ? undefined : _encode_AssociatedCallingDeviceID(value.associatedCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCalledDevice === undefined) ? undefined : _encode_AssociatedCalledDeviceID(value.associatedCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.queuedConnectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ConnectionInformation, $.BER)(value.queuedConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CallLinkageData, $.BER)(value.callLinkageData, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.messageInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_MessageInfo, $.BER)(value.messageInfo, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceHistory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_DeviceHistory, $.BER)(value.deviceHistory, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_QueuedEvent(value, elGetter);
}


/* eslint-enable */

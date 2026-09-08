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
import { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../CSTA-device-feature-types/ResourceID.ta.mjs";
import { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";
// export { Volume, _decode_Volume, _encode_Volume } from "../CSTA-physical-device-feature/Volume.ta.mjs";
import { VoiceAttributesChangeEvent_mode, _enum_for_VoiceAttributesChangeEvent_mode, VoiceAttributesChangeEvent_mode_automatic /* IMPORTED_LONG_ENUMERATION_ITEM */, automatic /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoiceAttributesChangeEvent_mode_single /* IMPORTED_LONG_ENUMERATION_ITEM */, single /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoiceAttributesChangeEvent_mode_multiple /* IMPORTED_LONG_ENUMERATION_ITEM */, multiple /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VoiceAttributesChangeEvent_mode, _encode_VoiceAttributesChangeEvent_mode } from "../CSTA-voice-attributes-change-event/VoiceAttributesChangeEvent-mode.ta.mjs";
// export { VoiceAttributesChangeEvent_mode, _enum_for_VoiceAttributesChangeEvent_mode, VoiceAttributesChangeEvent_mode_automatic /* IMPORTED_LONG_ENUMERATION_ITEM */, automatic /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoiceAttributesChangeEvent_mode_single /* IMPORTED_LONG_ENUMERATION_ITEM */, single /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoiceAttributesChangeEvent_mode_multiple /* IMPORTED_LONG_ENUMERATION_ITEM */, multiple /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VoiceAttributesChangeEvent_mode, _encode_VoiceAttributesChangeEvent_mode } from "../CSTA-voice-attributes-change-event/VoiceAttributesChangeEvent-mode.ta.mjs";
import { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
// export { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
import { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";
// export { ServicesPermitted, _decode_ServicesPermitted, _encode_ServicesPermitted } from "../CSTA-call-control/ServicesPermitted.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary VoiceAttributesChangeEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VoiceAttributesChangeEvent ::= SEQUENCE
 * {    connection            ConnectionID,
 *     resource            [ 4] IMPLICIT ResourceID        OPTIONAL,
 *     message                MessageID,
 *     playVolume            [ 0] Volume                OPTIONAL,
 *     recordingGain            [ 1] IMPLICIT INTEGER (0 .. 100)    OPTIONAL,
 *     speed                [ 2] IMPLICIT INTEGER             OPTIONAL,
 *     currentPosition            [ 3] IMPLICIT INTEGER            OPTIONAL,
 *     grammars            [ 5] IMPLICIT IA5String            OPTIONAL,
 *     language            [ 6] IMPLICIT IA5String            OPTIONAL,
 *     mode                [ 7] IMPLICIT ENUMERATED
 *                     {    automatic    (0),
 *                         single        (1),
 *                         multiple    (2) }        OPTIONAL,
 *     retainAudio            [ 8] IMPLICIT BOOLEAN            OPTIONAL,
 *     silenceTimeout            [ 9] IMPLICIT INTEGER            OPTIONAL,
 *     maxTimeout            [10] IMPLICIT INTEGER            OPTIONAL,
 *     babbleTimeout            [11] IMPLICIT INTEGER            OPTIONAL,
 *     endSilence            [12] IMPLICIT INTEGER            OPTIONAL,
 *     rejectionThreshold        [13] IMPLICIT INTEGER            OPTIONAL,
 *     autoInterruptible        [14] IMPLICIT BOOLEAN            OPTIONAL,
 *     innerXML            [15] IMPLICIT IA5String            OPTIONAL,
 *     interDigitTimeout        [16] IMPLICIT INTEGER            OPTIONAL,
 *     preflush            [17] IMPLICIT BOOLEAN            OPTIONAL,
 *     cause                EventCause                OPTIONAL,
 *     servicesPermitted        ServicesPermitted            OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class VoiceAttributesChangeEvent {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `resource`.
         * @public
         * @readonly
         */
        readonly resource: OPTIONAL<ResourceID>,
        /**
         * @summary `message`.
         * @public
         * @readonly
         */
        readonly message: MessageID,
        /**
         * @summary `playVolume`.
         * @public
         * @readonly
         */
        readonly playVolume: OPTIONAL<Volume>,
        /**
         * @summary `recordingGain`.
         * @public
         * @readonly
         */
        readonly recordingGain: OPTIONAL<INTEGER>,
        /**
         * @summary `speed`.
         * @public
         * @readonly
         */
        readonly speed: OPTIONAL<INTEGER>,
        /**
         * @summary `currentPosition`.
         * @public
         * @readonly
         */
        readonly currentPosition: OPTIONAL<INTEGER>,
        /**
         * @summary `grammars`.
         * @public
         * @readonly
         */
        readonly grammars: OPTIONAL<IA5String>,
        /**
         * @summary `language`.
         * @public
         * @readonly
         */
        readonly language: OPTIONAL<IA5String>,
        /**
         * @summary `mode`.
         * @public
         * @readonly
         */
        readonly mode: OPTIONAL<VoiceAttributesChangeEvent_mode>,
        /**
         * @summary `retainAudio`.
         * @public
         * @readonly
         */
        readonly retainAudio: OPTIONAL<BOOLEAN>,
        /**
         * @summary `silenceTimeout`.
         * @public
         * @readonly
         */
        readonly silenceTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `maxTimeout`.
         * @public
         * @readonly
         */
        readonly maxTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `babbleTimeout`.
         * @public
         * @readonly
         */
        readonly babbleTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `endSilence`.
         * @public
         * @readonly
         */
        readonly endSilence: OPTIONAL<INTEGER>,
        /**
         * @summary `rejectionThreshold`.
         * @public
         * @readonly
         */
        readonly rejectionThreshold: OPTIONAL<INTEGER>,
        /**
         * @summary `autoInterruptible`.
         * @public
         * @readonly
         */
        readonly autoInterruptible: OPTIONAL<BOOLEAN>,
        /**
         * @summary `innerXML`.
         * @public
         * @readonly
         */
        readonly innerXML: OPTIONAL<IA5String>,
        /**
         * @summary `interDigitTimeout`.
         * @public
         * @readonly
         */
        readonly interDigitTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `preflush`.
         * @public
         * @readonly
         */
        readonly preflush: OPTIONAL<BOOLEAN>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: OPTIONAL<EventCause>,
        /**
         * @summary `servicesPermitted`.
         * @public
         * @readonly
         */
        readonly servicesPermitted: OPTIONAL<ServicesPermitted>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a VoiceAttributesChangeEvent
     * @description
     * 
     * This takes an `object` and converts it to a `VoiceAttributesChangeEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VoiceAttributesChangeEvent`.
     * @returns {VoiceAttributesChangeEvent}
     */
    public static _from_object (_o: { [_K in keyof (VoiceAttributesChangeEvent)]: (VoiceAttributesChangeEvent)[_K] }): VoiceAttributesChangeEvent {
        return new VoiceAttributesChangeEvent(_o.connection, _o.resource, _o.message, _o.playVolume, _o.recordingGain, _o.speed, _o.currentPosition, _o.grammars, _o.language, _o.mode, _o.retainAudio, _o.silenceTimeout, _o.maxTimeout, _o.babbleTimeout, _o.endSilence, _o.rejectionThreshold, _o.autoInterruptible, _o.innerXML, _o.interDigitTimeout, _o.preflush, _o.cause, _o.servicesPermitted, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `mode`
         * @public
         * @static
         */

    public static _enum_for_mode = _enum_for_VoiceAttributesChangeEvent_mode;        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of VoiceAttributesChangeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_VoiceAttributesChangeEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("resource", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    /* FIXME: message COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("playVolume", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("recordingGain", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("speed", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("currentPosition", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("grammars", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("language", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("mode", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("retainAudio", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("silenceTimeout", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("maxTimeout", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("babbleTimeout", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("endSilence", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("rejectionThreshold", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("autoInterruptible", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("innerXML", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("interDigitTimeout", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("preflush", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("cause", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("servicesPermitted", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of VoiceAttributesChangeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_VoiceAttributesChangeEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of VoiceAttributesChangeEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_VoiceAttributesChangeEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_VoiceAttributesChangeEvent: $.ASN1Decoder<VoiceAttributesChangeEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VoiceAttributesChangeEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VoiceAttributesChangeEvent (el: _Element): VoiceAttributesChangeEvent {
    if (!_cached_decoder_for_VoiceAttributesChangeEvent) { _cached_decoder_for_VoiceAttributesChangeEvent = function (el: _Element): VoiceAttributesChangeEvent {
    let connection!: ConnectionID;
    let resource: OPTIONAL<ResourceID>;
    let message!: MessageID;
    let playVolume: OPTIONAL<Volume>;
    let recordingGain: OPTIONAL<INTEGER>;
    let speed: OPTIONAL<INTEGER>;
    let currentPosition: OPTIONAL<INTEGER>;
    let grammars: OPTIONAL<IA5String>;
    let language: OPTIONAL<IA5String>;
    let mode: OPTIONAL<VoiceAttributesChangeEvent_mode>;
    let retainAudio: OPTIONAL<BOOLEAN>;
    let silenceTimeout: OPTIONAL<INTEGER>;
    let maxTimeout: OPTIONAL<INTEGER>;
    let babbleTimeout: OPTIONAL<INTEGER>;
    let endSilence: OPTIONAL<INTEGER>;
    let rejectionThreshold: OPTIONAL<INTEGER>;
    let autoInterruptible: OPTIONAL<BOOLEAN>;
    let innerXML: OPTIONAL<IA5String>;
    let interDigitTimeout: OPTIONAL<INTEGER>;
    let preflush: OPTIONAL<BOOLEAN>;
    let cause: OPTIONAL<EventCause>;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "resource": (_el: _Element): void => { resource = $._decode_implicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "message": (_el: _Element): void => { message = _decode_MessageID(_el); },
        "playVolume": (_el: _Element): void => { playVolume = $._decode_explicit<Volume>(() => _decode_Volume)(_el); },
        "recordingGain": (_el: _Element): void => { recordingGain = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "speed": (_el: _Element): void => { speed = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "currentPosition": (_el: _Element): void => { currentPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "grammars": (_el: _Element): void => { grammars = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "language": (_el: _Element): void => { language = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "mode": (_el: _Element): void => { mode = $._decode_implicit<VoiceAttributesChangeEvent_mode>(() => _decode_VoiceAttributesChangeEvent_mode)(_el); },
        "retainAudio": (_el: _Element): void => { retainAudio = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "silenceTimeout": (_el: _Element): void => { silenceTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxTimeout": (_el: _Element): void => { maxTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "babbleTimeout": (_el: _Element): void => { babbleTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "endSilence": (_el: _Element): void => { endSilence = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rejectionThreshold": (_el: _Element): void => { rejectionThreshold = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "autoInterruptible": (_el: _Element): void => { autoInterruptible = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "innerXML": (_el: _Element): void => { innerXML = $._decode_implicit<IA5String>(() => $._decodeIA5String)(_el); },
        "interDigitTimeout": (_el: _Element): void => { interDigitTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "preflush": (_el: _Element): void => { preflush = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = _decode_ServicesPermitted(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_VoiceAttributesChangeEvent,
        _extension_additions_list_spec_for_VoiceAttributesChangeEvent,
        _root_component_type_list_2_spec_for_VoiceAttributesChangeEvent,
        undefined,
    );
    return new VoiceAttributesChangeEvent(
        connection,
        resource,
        message,
        playVolume,
        recordingGain,
        speed,
        currentPosition,
        grammars,
        language,
        mode,
        retainAudio,
        silenceTimeout,
        maxTimeout,
        babbleTimeout,
        endSilence,
        rejectionThreshold,
        autoInterruptible,
        innerXML,
        interDigitTimeout,
        preflush,
        cause,
        servicesPermitted,
        extensions
    );
}; }
    return _cached_decoder_for_VoiceAttributesChangeEvent(el);
}

let _cached_encoder_for_VoiceAttributesChangeEvent: $.ASN1Encoder<VoiceAttributesChangeEvent> | null = null;

/**
 * @summary Encodes a(n) VoiceAttributesChangeEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VoiceAttributesChangeEvent, encoded as an ASN.1 Element.
 */
export
function _encode_VoiceAttributesChangeEvent (value: VoiceAttributesChangeEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VoiceAttributesChangeEvent) { _cached_encoder_for_VoiceAttributesChangeEvent = function (value: VoiceAttributesChangeEvent, elGetter: $.ASN1Encoder<VoiceAttributesChangeEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* IF_ABSENT  */ ((value.resource === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ResourceID, $.BER)(value.resource, $.BER)),
            /* REQUIRED   */ _encode_MessageID(value.message, $.BER),
            /* IF_ABSENT  */ ((value.playVolume === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Volume, $.BER)(value.playVolume, $.BER)),
            /* IF_ABSENT  */ ((value.recordingGain === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.recordingGain, $.BER)),
            /* IF_ABSENT  */ ((value.speed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.speed, $.BER)),
            /* IF_ABSENT  */ ((value.currentPosition === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.currentPosition, $.BER)),
            /* IF_ABSENT  */ ((value.grammars === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeIA5String, $.BER)(value.grammars, $.BER)),
            /* IF_ABSENT  */ ((value.language === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeIA5String, $.BER)(value.language, $.BER)),
            /* IF_ABSENT  */ ((value.mode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_VoiceAttributesChangeEvent_mode, $.BER)(value.mode, $.BER)),
            /* IF_ABSENT  */ ((value.retainAudio === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.retainAudio, $.BER)),
            /* IF_ABSENT  */ ((value.silenceTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.silenceTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.maxTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.maxTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.babbleTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.babbleTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.endSilence === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.endSilence, $.BER)),
            /* IF_ABSENT  */ ((value.rejectionThreshold === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.rejectionThreshold, $.BER)),
            /* IF_ABSENT  */ ((value.autoInterruptible === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.autoInterruptible, $.BER)),
            /* IF_ABSENT  */ ((value.innerXML === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeIA5String, $.BER)(value.innerXML, $.BER)),
            /* IF_ABSENT  */ ((value.interDigitTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER)(value.interDigitTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.preflush === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.preflush, $.BER)),
            /* IF_ABSENT  */ ((value.cause === undefined) ? undefined : _encode_EventCause(value.cause, $.BER)),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : _encode_ServicesPermitted(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_VoiceAttributesChangeEvent(value, elGetter);
}


/* eslint-enable */

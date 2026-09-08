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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { AutoOriginate, _enum_for_AutoOriginate, AutoOriginate_prompt /* IMPORTED_LONG_ENUMERATION_ITEM */, prompt /* IMPORTED_SHORT_ENUMERATION_ITEM */, AutoOriginate_doNotPrompt /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotPrompt /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AutoOriginate, _encode_AutoOriginate } from "../CSTA-call-control/AutoOriginate.ta.mjs";
// export { AutoOriginate, _enum_for_AutoOriginate, AutoOriginate_prompt /* IMPORTED_LONG_ENUMERATION_ITEM */, prompt /* IMPORTED_SHORT_ENUMERATION_ITEM */, AutoOriginate_doNotPrompt /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotPrompt /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AutoOriginate, _encode_AutoOriginate } from "../CSTA-call-control/AutoOriginate.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
// export { ConnectionInformation, _decode_ConnectionInformation, _encode_ConnectionInformation } from "../CSTA-media-services/ConnectionInformation.ta.mjs";
import { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
// export { SubjectOfCall, _decode_SubjectOfCall, _encode_SubjectOfCall } from "../CSTA-device-feature-types/SubjectOfCall.ta.mjs";
import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
// export { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
import { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
// export { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
// export { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary MakeConnectionArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MakeConnectionArgument ::= SEQUENCE
 * {     initiatingDevice         DeviceID,
 *     accountCode             [ 0] IMPLICIT AccountInfo             OPTIONAL,
 *     authCode             [ 1] IMPLICIT AuthCode                 OPTIONAL,
 *     autoOriginate             [ 2] IMPLICIT AutoOriginate             DEFAULT prompt,
 *     correlatorData             [ 3] IMPLICIT CorrelatorData             OPTIONAL,
 *     callCharacteristics         [ 4] IMPLICIT CallCharacteristics         OPTIONAL,
 *     mediaCallCharacteristics     [ 5] IMPLICIT MediaCallCharacteristics         OPTIONAL,
 *     connectionInfo            [ 6] IMPLICIT ConnectionInformation        OPTIONAL,
 *     subjectOfCall            [ 7] IMPLICIT SubjectOfCall            OPTIONAL,
 *     languagePreferences        [ 8] IMPLICIT LanguagePreferences        OPTIONAL,
 *     reason                [ 9] IMPLICIT EventCause            OPTIONAL,
 *     maxDevices            [10] IMPLICIT INTEGER                OPTIONAL,
 *     startTime            [11] IMPLICIT TimeInfo                OPTIONAL,
 *     duration            [12] IMPLICIT INTEGER                OPTIONAL,
 *     extensions             CSTACommonArguments                 OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MakeConnectionArgument {
    constructor (
        /**
         * @summary `initiatingDevice`.
         * @public
         * @readonly
         */
        readonly initiatingDevice: DeviceID,
        /**
         * @summary `accountCode`.
         * @public
         * @readonly
         */
        readonly accountCode: OPTIONAL<AccountInfo>,
        /**
         * @summary `authCode`.
         * @public
         * @readonly
         */
        readonly authCode: OPTIONAL<AuthCode>,
        /**
         * @summary `autoOriginate`.
         * @public
         * @readonly
         */
        readonly autoOriginate: OPTIONAL<AutoOriginate>,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `connectionInfo`.
         * @public
         * @readonly
         */
        readonly connectionInfo: OPTIONAL<ConnectionInformation>,
        /**
         * @summary `subjectOfCall`.
         * @public
         * @readonly
         */
        readonly subjectOfCall: OPTIONAL<SubjectOfCall>,
        /**
         * @summary `languagePreferences`.
         * @public
         * @readonly
         */
        readonly languagePreferences: OPTIONAL<LanguagePreferences>,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<EventCause>,
        /**
         * @summary `maxDevices`.
         * @public
         * @readonly
         */
        readonly maxDevices: OPTIONAL<INTEGER>,
        /**
         * @summary `startTime`.
         * @public
         * @readonly
         */
        readonly startTime: OPTIONAL<TimeInfo>,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<INTEGER>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a MakeConnectionArgument
     * @description
     * 
     * This takes an `object` and converts it to a `MakeConnectionArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MakeConnectionArgument`.
     * @returns {MakeConnectionArgument}
     */
    public static _from_object (_o: { [_K in keyof (MakeConnectionArgument)]: (MakeConnectionArgument)[_K] }): MakeConnectionArgument {
        return new MakeConnectionArgument(_o.initiatingDevice, _o.accountCode, _o.authCode, _o.autoOriginate, _o.correlatorData, _o.callCharacteristics, _o.mediaCallCharacteristics, _o.connectionInfo, _o.subjectOfCall, _o.languagePreferences, _o.reason, _o.maxDevices, _o.startTime, _o.duration, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `autoOriginate`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_autoOriginate () { return AutoOriginate_prompt; }        /**
         * @summary The enum used as the type of the component `autoOriginate`
         * @public
         * @static
         */

    public static _enum_for_autoOriginate = _enum_for_AutoOriginate;        /**
         * @summary The enum used as the type of the component `reason`
         * @public
         * @static
         */

    public static _enum_for_reason = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of MakeConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MakeConnectionArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatingDevice", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    /* FIXME: accountCode COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: authCode COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("autoOriginate", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    /* FIXME: correlatorData COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("connectionInfo", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("subjectOfCall", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("maxDevices", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MakeConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MakeConnectionArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MakeConnectionArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MakeConnectionArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MakeConnectionArgument: $.ASN1Decoder<MakeConnectionArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MakeConnectionArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MakeConnectionArgument (el: _Element): MakeConnectionArgument {
    if (!_cached_decoder_for_MakeConnectionArgument) { _cached_decoder_for_MakeConnectionArgument = function (el: _Element): MakeConnectionArgument {
    let initiatingDevice!: DeviceID;
    let accountCode: OPTIONAL<AccountInfo>;
    let authCode: OPTIONAL<AuthCode>;
    let autoOriginate: OPTIONAL<AutoOriginate> = MakeConnectionArgument._default_value_for_autoOriginate;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let connectionInfo: OPTIONAL<ConnectionInformation>;
    let subjectOfCall: OPTIONAL<SubjectOfCall>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let reason: OPTIONAL<EventCause>;
    let maxDevices: OPTIONAL<INTEGER>;
    let startTime: OPTIONAL<TimeInfo>;
    let duration: OPTIONAL<INTEGER>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "initiatingDevice": (_el: _Element): void => { initiatingDevice = _decode_DeviceID(_el); },
        "accountCode": (_el: _Element): void => { accountCode = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "autoOriginate": (_el: _Element): void => { autoOriginate = $._decode_implicit<AutoOriginate>(() => _decode_AutoOriginate)(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "connectionInfo": (_el: _Element): void => { connectionInfo = $._decode_implicit<ConnectionInformation>(() => _decode_ConnectionInformation)(_el); },
        "subjectOfCall": (_el: _Element): void => { subjectOfCall = $._decode_implicit<SubjectOfCall>(() => _decode_SubjectOfCall)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<EventCause>(() => _decode_EventCause)(_el); },
        "maxDevices": (_el: _Element): void => { maxDevices = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MakeConnectionArgument,
        _extension_additions_list_spec_for_MakeConnectionArgument,
        _root_component_type_list_2_spec_for_MakeConnectionArgument,
        undefined,
    );
    return new MakeConnectionArgument(
        initiatingDevice,
        accountCode,
        authCode,
        autoOriginate,
        correlatorData,
        callCharacteristics,
        mediaCallCharacteristics,
        connectionInfo,
        subjectOfCall,
        languagePreferences,
        reason,
        maxDevices,
        startTime,
        duration,
        extensions
    );
}; }
    return _cached_decoder_for_MakeConnectionArgument(el);
}

let _cached_encoder_for_MakeConnectionArgument: $.ASN1Encoder<MakeConnectionArgument> | null = null;

/**
 * @summary Encodes a(n) MakeConnectionArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MakeConnectionArgument, encoded as an ASN.1 Element.
 */
export
function _encode_MakeConnectionArgument (value: MakeConnectionArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MakeConnectionArgument) { _cached_encoder_for_MakeConnectionArgument = function (value: MakeConnectionArgument, elGetter: $.ASN1Encoder<MakeConnectionArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.initiatingDevice, $.BER),
            /* IF_ABSENT  */ ((value.accountCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccountInfo, $.BER)(value.accountCode, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_DEFAULT */ (value.autoOriginate === undefined || $.deepEq(value.autoOriginate, MakeConnectionArgument._default_value_for_autoOriginate) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AutoOriginate, $.BER)(value.autoOriginate, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.connectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ConnectionInformation, $.BER)(value.connectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.subjectOfCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SubjectOfCall, $.BER)(value.subjectOfCall, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_EventCause, $.BER)(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.maxDevices === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.maxDevices, $.BER)),
            /* IF_ABSENT  */ ((value.startTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_TimeInfo, $.BER)(value.startTime, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MakeConnectionArgument(value, elGetter);
}


/* eslint-enable */

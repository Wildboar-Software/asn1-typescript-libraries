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
import { PrimaryOrSecondaryCall, _decode_PrimaryOrSecondaryCall, _encode_PrimaryOrSecondaryCall } from "../CSTA-service-completion-failure-event/PrimaryOrSecondaryCall.ta.mjs";
// export { PrimaryOrSecondaryCall, _decode_PrimaryOrSecondaryCall, _encode_PrimaryOrSecondaryCall } from "../CSTA-service-completion-failure-event/PrimaryOrSecondaryCall.ta.mjs";
import { OtherCall, _decode_OtherCall, _encode_OtherCall } from "../CSTA-service-completion-failure-event/OtherCall.ta.mjs";
// export { OtherCall, _decode_OtherCall, _encode_OtherCall } from "../CSTA-service-completion-failure-event/OtherCall.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
// export { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ServiceCompletionFailureEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceCompletionFailureEvent ::= SEQUENCE
 * {    primaryCall            PrimaryOrSecondaryCall,
 *     secondaryCall            [0] IMPLICIT PrimaryOrSecondaryCall    OPTIONAL,
 *     otherDevsPrimaryCallList    [1] IMPLICIT SEQUENCE OF OtherCall    OPTIONAL,
 *     otherDevsSecondaryCallList    [2] IMPLICIT SEQUENCE OF OtherCall    OPTIONAL,
 *     mediaCallCharacteristics    [3] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     cause                EventCause,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ServiceCompletionFailureEvent {
    constructor (
        /**
         * @summary `primaryCall`.
         * @public
         * @readonly
         */
        readonly primaryCall: PrimaryOrSecondaryCall,
        /**
         * @summary `secondaryCall`.
         * @public
         * @readonly
         */
        readonly secondaryCall: OPTIONAL<PrimaryOrSecondaryCall>,
        /**
         * @summary `otherDevsPrimaryCallList`.
         * @public
         * @readonly
         */
        readonly otherDevsPrimaryCallList: OPTIONAL<OtherCall[]>,
        /**
         * @summary `otherDevsSecondaryCallList`.
         * @public
         * @readonly
         */
        readonly otherDevsSecondaryCallList: OPTIONAL<OtherCall[]>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `cause`.
         * @public
         * @readonly
         */
        readonly cause: EventCause,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ServiceCompletionFailureEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceCompletionFailureEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceCompletionFailureEvent`.
     * @returns {ServiceCompletionFailureEvent}
     */
    public static _from_object (_o: { [_K in keyof (ServiceCompletionFailureEvent)]: (ServiceCompletionFailureEvent)[_K] }): ServiceCompletionFailureEvent {
        return new ServiceCompletionFailureEvent(_o.primaryCall, _o.secondaryCall, _o.otherDevsPrimaryCallList, _o.otherDevsSecondaryCallList, _o.mediaCallCharacteristics, _o.cause, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ServiceCompletionFailureEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceCompletionFailureEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("primaryCall", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("secondaryCall", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("otherDevsPrimaryCallList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("otherDevsSecondaryCallList", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ServiceCompletionFailureEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceCompletionFailureEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceCompletionFailureEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceCompletionFailureEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceCompletionFailureEvent: $.ASN1Decoder<ServiceCompletionFailureEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceCompletionFailureEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceCompletionFailureEvent (el: _Element): ServiceCompletionFailureEvent {
    if (!_cached_decoder_for_ServiceCompletionFailureEvent) { _cached_decoder_for_ServiceCompletionFailureEvent = function (el: _Element): ServiceCompletionFailureEvent {
    let primaryCall!: PrimaryOrSecondaryCall;
    let secondaryCall: OPTIONAL<PrimaryOrSecondaryCall>;
    let otherDevsPrimaryCallList: OPTIONAL<OtherCall[]>;
    let otherDevsSecondaryCallList: OPTIONAL<OtherCall[]>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let cause!: EventCause;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "primaryCall": (_el: _Element): void => { primaryCall = _decode_PrimaryOrSecondaryCall(_el); },
        "secondaryCall": (_el: _Element): void => { secondaryCall = $._decode_implicit<PrimaryOrSecondaryCall>(() => _decode_PrimaryOrSecondaryCall)(_el); },
        "otherDevsPrimaryCallList": (_el: _Element): void => { otherDevsPrimaryCallList = $._decode_implicit<OtherCall[]>(() => $._decodeSequenceOf<OtherCall>(() => _decode_OtherCall))(_el); },
        "otherDevsSecondaryCallList": (_el: _Element): void => { otherDevsSecondaryCallList = $._decode_implicit<OtherCall[]>(() => $._decodeSequenceOf<OtherCall>(() => _decode_OtherCall))(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceCompletionFailureEvent,
        _extension_additions_list_spec_for_ServiceCompletionFailureEvent,
        _root_component_type_list_2_spec_for_ServiceCompletionFailureEvent,
        undefined,
    );
    return new ServiceCompletionFailureEvent(
        primaryCall,
        secondaryCall,
        otherDevsPrimaryCallList,
        otherDevsSecondaryCallList,
        mediaCallCharacteristics,
        cause,
        extensions
    );
}; }
    return _cached_decoder_for_ServiceCompletionFailureEvent(el);
}

let _cached_encoder_for_ServiceCompletionFailureEvent: $.ASN1Encoder<ServiceCompletionFailureEvent> | null = null;

/**
 * @summary Encodes a(n) ServiceCompletionFailureEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceCompletionFailureEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceCompletionFailureEvent (value: ServiceCompletionFailureEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceCompletionFailureEvent) { _cached_encoder_for_ServiceCompletionFailureEvent = function (value: ServiceCompletionFailureEvent, elGetter: $.ASN1Encoder<ServiceCompletionFailureEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PrimaryOrSecondaryCall(value.primaryCall, $.BER),
            /* IF_ABSENT  */ ((value.secondaryCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PrimaryOrSecondaryCall, $.BER)(value.secondaryCall, $.BER)),
            /* IF_ABSENT  */ ((value.otherDevsPrimaryCallList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OtherCall>(() => _encode_OtherCall, $.BER), $.BER)(value.otherDevsPrimaryCallList, $.BER)),
            /* IF_ABSENT  */ ((value.otherDevsSecondaryCallList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<OtherCall>(() => _encode_OtherCall, $.BER), $.BER)(value.otherDevsSecondaryCallList, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceCompletionFailureEvent(value, elGetter);
}


/* eslint-enable */

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
import { ConnectionList, _decode_ConnectionList, _encode_ConnectionList } from "../CSTA-connection-states/ConnectionList.ta.mjs";
// export { ConnectionList, _decode_ConnectionList, _encode_ConnectionList } from "../CSTA-connection-states/ConnectionList.ta.mjs";
import { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
// export { LocalConnectionState, _decode_LocalConnectionState, _encode_LocalConnectionState } from "../CSTA-connection-states/LocalConnectionState.ta.mjs";
import { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
// export { EventCause, _enum_for_EventCause, EventCause_aCDBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDForward /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_aCDSaturated /* IMPORTED_LONG_ENUMERATION_ITEM */, aCDSaturated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activation /* IMPORTED_LONG_ENUMERATION_ITEM */, activation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_activeParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, activeParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alertTimeExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, alertTimeExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_alternate /* IMPORTED_LONG_ENUMERATION_ITEM */, alternate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_autoWork /* IMPORTED_LONG_ENUMERATION_ITEM */, autoWork /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_babble /* IMPORTED_LONG_ENUMERATION_ITEM */, babble /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badAttribute /* IMPORTED_LONG_ENUMERATION_ITEM */, badAttribute /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, badGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, badVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_badUri /* IMPORTED_LONG_ENUMERATION_ITEM */, badUri /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_blocked /* IMPORTED_LONG_ENUMERATION_ITEM */, blocked /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_busyOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, busyOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_calendarOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, calendarOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callBack /* IMPORTED_LONG_ENUMERATION_ITEM */, callBack /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callCancelled /* IMPORTED_LONG_ENUMERATION_ITEM */, callCancelled /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForward /* IMPORTED_LONG_ENUMERATION_ITEM */, callForward /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardImmediate /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardImmediate /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callForwardNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callForwardNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callInterceptionResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, callInterceptionResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callNotAnswered /* IMPORTED_LONG_ENUMERATION_ITEM */, callNotAnswered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_callPickup /* IMPORTED_LONG_ENUMERATION_ITEM */, callPickup /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOn /* IMPORTED_LONG_ENUMERATION_ITEM */, campOn /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_campOnTrunks /* IMPORTED_LONG_ENUMERATION_ITEM */, campOnTrunks /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_capacityOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, capacityOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_characterCountReached /* IMPORTED_LONG_ENUMERATION_ITEM */, characterCountReached /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_consultation /* IMPORTED_LONG_ENUMERATION_ITEM */, consultation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, destDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, destNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_destOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, destOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributed /* IMPORTED_LONG_ENUMERATION_ITEM */, distributed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_distributionDelay /* IMPORTED_LONG_ENUMERATION_ITEM */, distributionDelay /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_doNotDisturb /* IMPORTED_LONG_ENUMERATION_ITEM */, doNotDisturb /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_dTMFDigitDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dTMFDigitDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_duplicateDTMF /* IMPORTED_LONG_ENUMERATION_ITEM */, duplicateDTMF /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_durationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, durationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_earlyStop /* IMPORTED_LONG_ENUMERATION_ITEM */, earlyStop /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_emptyQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, emptyQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_endOfMessageDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, endOfMessageDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_enteringDistribution /* IMPORTED_LONG_ENUMERATION_ITEM */, enteringDistribution /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedPause /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedPause /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_forcedTransition /* IMPORTED_LONG_ENUMERATION_ITEM */, forcedTransition /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_incompatibleDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, incompatibleDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_interDigitTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, interDigitTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_intrude /* IMPORTED_LONG_ENUMERATION_ITEM */, intrude /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidAccountCode /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidAccountCode /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidConnectionState /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidConnectionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_invalidNumberFormat /* IMPORTED_LONG_ENUMERATION_ITEM */, invalidNumberFormat /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_joinCall /* IMPORTED_LONG_ENUMERATION_ITEM */, joinCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_keyOperationInUse /* IMPORTED_LONG_ENUMERATION_ITEM */, keyOperationInUse /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lawfulInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, lawfulInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_lockout /* IMPORTED_LONG_ENUMERATION_ITEM */, lockout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maintenance /* IMPORTED_LONG_ENUMERATION_ITEM */, maintenance /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makeCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makeConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, makeConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_makePredictiveCall /* IMPORTED_LONG_ENUMERATION_ITEM */, makePredictiveCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_maxTimeout /* IMPORTED_LONG_ENUMERATION_ITEM */, maxTimeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageDurationExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageDurationExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_messageSizeExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, messageSizeExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_multipleQueuing /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleQueuing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkCongestion /* IMPORTED_LONG_ENUMERATION_ITEM */, networkCongestion /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkDialling /* IMPORTED_LONG_ENUMERATION_ITEM */, networkDialling /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkNotObtainable /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNotObtainable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkOutOfOrder /* IMPORTED_LONG_ENUMERATION_ITEM */, networkOutOfOrder /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_networkSignal /* IMPORTED_LONG_ENUMERATION_ITEM */, networkSignal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_newCall /* IMPORTED_LONG_ENUMERATION_ITEM */, newCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_nextMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, nextMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAudioSaved /* IMPORTED_LONG_ENUMERATION_ITEM */, noAudioSaved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noAvailableAgents /* IMPORTED_LONG_ENUMERATION_ITEM */, noAvailableAgents /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, noQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noRule /* IMPORTED_LONG_ENUMERATION_ITEM */, noRule /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_noSpeechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, noSpeechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notAvaliableBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notAvaliableBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_notSupportedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, notSupportedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberChanged /* IMPORTED_LONG_ENUMERATION_ITEM */, numberChanged /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_numberUnallocated /* IMPORTED_LONG_ENUMERATION_ITEM */, numberUnallocated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_outOfGrammar /* IMPORTED_LONG_ENUMERATION_ITEM */, outOfGrammar /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_overflow /* IMPORTED_LONG_ENUMERATION_ITEM */, overflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_override /* IMPORTED_LONG_ENUMERATION_ITEM */, override /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_pathReplacement /* IMPORTED_LONG_ENUMERATION_ITEM */, pathReplacement /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueCleared /* IMPORTED_LONG_ENUMERATION_ITEM */, queueCleared /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_queueTimeOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, queueTimeOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recall /* IMPORTED_LONG_ENUMERATION_ITEM */, recall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, recallBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallForwarded /* IMPORTED_LONG_ENUMERATION_ITEM */, recallForwarded /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, recallNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_recallResourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, recallResourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_redirected /* IMPORTED_LONG_ENUMERATION_ITEM */, redirected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_remainsInQueue /* IMPORTED_LONG_ENUMERATION_ITEM */, remainsInQueue /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reorderTone /* IMPORTED_LONG_ENUMERATION_ITEM */, reorderTone /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_resourcesNotAvailable /* IMPORTED_LONG_ENUMERATION_ITEM */, resourcesNotAvailable /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_selectedTrunkBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, selectedTrunkBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_silentParticipation /* IMPORTED_LONG_ENUMERATION_ITEM */, silentParticipation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepConference /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepConference /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_singleStepTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, singleStepTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_suspend /* IMPORTED_LONG_ENUMERATION_ITEM */, suspend /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_switchingFunctionTerminated /* IMPORTED_LONG_ENUMERATION_ITEM */, switchingFunctionTerminated /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_terminationCharacterReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, terminationCharacterReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_timeout /* IMPORTED_LONG_ENUMERATION_ITEM */, timeout /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_trunksBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, trunksBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unauthorisedBearerService /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorisedBearerService /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventCause_unknownOverflow /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownOverflow /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventCause, _encode_EventCause } from "../CSTA-event-causes/EventCause.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
// export { LanguagePreferences, _decode_LanguagePreferences, _encode_LanguagePreferences } from "../CSTA-device-feature-types/LanguagePreferences.ta.mjs";
import { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";
// export { DeviceHistory, _decode_DeviceHistory, _encode_DeviceHistory } from "../CSTA-device-feature-types/DeviceHistory.ta.mjs";
import { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";
// export { LocationInfoList, _decode_LocationInfoList, _encode_LocationInfoList } from "../CSTA-call-control/LocationInfoList.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ConferencedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConferencedEvent ::= SEQUENCE
 * {     primaryOldCall             ConnectionID,
 *     secondaryOldCall         ConnectionID                 OPTIONAL,
 *     conferencingDevice         SubjectDeviceID,
 *     addedParty             SubjectDeviceID,
 *     conferenceConnections         ConnectionList,
 *     localConnectionInfo         LocalConnectionState             OPTIONAL,
 *     correlatorData             [1] IMPLICIT CorrelatorData         OPTIONAL,
 *     userData             UserData                 OPTIONAL,
 *     cause                 EventCause,
 *     servicesPermitted         [2] IMPLICIT ServicesPermitted         OPTIONAL,
 *     mediaCallCharacteristics     [3] IMPLICIT MediaCallCharacteristics     OPTIONAL,
 *     callCharacteristics         [4] IMPLICIT CallCharacteristics     OPTIONAL,
 *     callLinkageDataList         [6] IMPLICIT CallLinkageDataList     OPTIONAL,
 *     languagePreferences        [7] IMPLICIT LanguagePreferences    OPTIONAL,
 *     deviceHistory            [8] IMPLICIT DeviceHistory        OPTIONAL,
 *     locationInfo            [9] IMPLICIT LocationInfoList        OPTIONAL,
 *     extensions             [5] IMPLICIT CSTACommonArguments     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConferencedEvent {
    constructor (
        /**
         * @summary `primaryOldCall`.
         * @public
         * @readonly
         */
        readonly primaryOldCall: ConnectionID,
        /**
         * @summary `secondaryOldCall`.
         * @public
         * @readonly
         */
        readonly secondaryOldCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `conferencingDevice`.
         * @public
         * @readonly
         */
        readonly conferencingDevice: SubjectDeviceID,
        /**
         * @summary `addedParty`.
         * @public
         * @readonly
         */
        readonly addedParty: SubjectDeviceID,
        /**
         * @summary `conferenceConnections`.
         * @public
         * @readonly
         */
        readonly conferenceConnections: ConnectionList,
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
         * @summary `callLinkageDataList`.
         * @public
         * @readonly
         */
        readonly callLinkageDataList: OPTIONAL<CallLinkageDataList>,
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
     * @summary Restructures an object into a ConferencedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `ConferencedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConferencedEvent`.
     * @returns {ConferencedEvent}
     */
    public static _from_object (_o: { [_K in keyof (ConferencedEvent)]: (ConferencedEvent)[_K] }): ConferencedEvent {
        return new ConferencedEvent(_o.primaryOldCall, _o.secondaryOldCall, _o.conferencingDevice, _o.addedParty, _o.conferenceConnections, _o.localConnectionInfo, _o.correlatorData, _o.userData, _o.cause, _o.servicesPermitted, _o.mediaCallCharacteristics, _o.callCharacteristics, _o.callLinkageDataList, _o.languagePreferences, _o.deviceHistory, _o.locationInfo, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `cause`
         * @public
         * @static
         */

    public static _enum_for_cause = _enum_for_EventCause;
}

/**
 * @summary The Leading Root Component Types of ConferencedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConferencedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("primaryOldCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("secondaryOldCall", true, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("conferencingDevice", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("addedParty", false, $.hasTag(_TagClass.application, 3), undefined, undefined),
    new $.ComponentSpec("conferenceConnections", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("localConnectionInfo", true, $.hasTag(_TagClass.application, 14), undefined, undefined),
    /* FIXME: correlatorData COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: userData COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("cause", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    /* FIXME: servicesPermitted COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    /* FIXME: callCharacteristics COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: callLinkageDataList COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("languagePreferences", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("deviceHistory", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("locationInfo", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConferencedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConferencedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConferencedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConferencedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConferencedEvent: $.ASN1Decoder<ConferencedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConferencedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConferencedEvent (el: _Element): ConferencedEvent {
    if (!_cached_decoder_for_ConferencedEvent) { _cached_decoder_for_ConferencedEvent = function (el: _Element): ConferencedEvent {
    let primaryOldCall!: ConnectionID;
    let secondaryOldCall: OPTIONAL<ConnectionID>;
    let conferencingDevice!: SubjectDeviceID;
    let addedParty!: SubjectDeviceID;
    let conferenceConnections!: ConnectionList;
    let localConnectionInfo: OPTIONAL<LocalConnectionState>;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let userData: OPTIONAL<UserData>;
    let cause!: EventCause;
    let servicesPermitted: OPTIONAL<ServicesPermitted>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let callLinkageDataList: OPTIONAL<CallLinkageDataList>;
    let languagePreferences: OPTIONAL<LanguagePreferences>;
    let deviceHistory: OPTIONAL<DeviceHistory>;
    let locationInfo: OPTIONAL<LocationInfoList>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "primaryOldCall": (_el: _Element): void => { primaryOldCall = _decode_ConnectionID(_el); },
        "secondaryOldCall": (_el: _Element): void => { secondaryOldCall = _decode_ConnectionID(_el); },
        "conferencingDevice": (_el: _Element): void => { conferencingDevice = _decode_SubjectDeviceID(_el); },
        "addedParty": (_el: _Element): void => { addedParty = _decode_SubjectDeviceID(_el); },
        "conferenceConnections": (_el: _Element): void => { conferenceConnections = _decode_ConnectionList(_el); },
        "localConnectionInfo": (_el: _Element): void => { localConnectionInfo = _decode_LocalConnectionState(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = $._decode_implicit<CorrelatorData>(() => _decode_CorrelatorData)(_el); },
        "userData": (_el: _Element): void => { userData = _decode_UserData(_el); },
        "cause": (_el: _Element): void => { cause = _decode_EventCause(_el); },
        "servicesPermitted": (_el: _Element): void => { servicesPermitted = $._decode_implicit<ServicesPermitted>(() => _decode_ServicesPermitted)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "callLinkageDataList": (_el: _Element): void => { callLinkageDataList = $._decode_implicit<CallLinkageDataList>(() => _decode_CallLinkageDataList)(_el); },
        "languagePreferences": (_el: _Element): void => { languagePreferences = $._decode_implicit<LanguagePreferences>(() => _decode_LanguagePreferences)(_el); },
        "deviceHistory": (_el: _Element): void => { deviceHistory = $._decode_implicit<DeviceHistory>(() => _decode_DeviceHistory)(_el); },
        "locationInfo": (_el: _Element): void => { locationInfo = $._decode_implicit<LocationInfoList>(() => _decode_LocationInfoList)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<CSTACommonArguments>(() => _decode_CSTACommonArguments)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConferencedEvent,
        _extension_additions_list_spec_for_ConferencedEvent,
        _root_component_type_list_2_spec_for_ConferencedEvent,
        undefined,
    );
    return new ConferencedEvent(
        primaryOldCall,
        secondaryOldCall,
        conferencingDevice,
        addedParty,
        conferenceConnections,
        localConnectionInfo,
        correlatorData,
        userData,
        cause,
        servicesPermitted,
        mediaCallCharacteristics,
        callCharacteristics,
        callLinkageDataList,
        languagePreferences,
        deviceHistory,
        locationInfo,
        extensions
    );
}; }
    return _cached_decoder_for_ConferencedEvent(el);
}

let _cached_encoder_for_ConferencedEvent: $.ASN1Encoder<ConferencedEvent> | null = null;

/**
 * @summary Encodes a(n) ConferencedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConferencedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_ConferencedEvent (value: ConferencedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConferencedEvent) { _cached_encoder_for_ConferencedEvent = function (value: ConferencedEvent, elGetter: $.ASN1Encoder<ConferencedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.primaryOldCall, $.BER),
            /* IF_ABSENT  */ ((value.secondaryOldCall === undefined) ? undefined : _encode_ConnectionID(value.secondaryOldCall, $.BER)),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.conferencingDevice, $.BER),
            /* REQUIRED   */ _encode_SubjectDeviceID(value.addedParty, $.BER),
            /* REQUIRED   */ _encode_ConnectionList(value.conferenceConnections, $.BER),
            /* IF_ABSENT  */ ((value.localConnectionInfo === undefined) ? undefined : _encode_LocalConnectionState(value.localConnectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelatorData, $.BER)(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.userData === undefined) ? undefined : _encode_UserData(value.userData, $.BER)),
            /* REQUIRED   */ _encode_EventCause(value.cause, $.BER),
            /* IF_ABSENT  */ ((value.servicesPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ServicesPermitted, $.BER)(value.servicesPermitted, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.callLinkageDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CallLinkageDataList, $.BER)(value.callLinkageDataList, $.BER)),
            /* IF_ABSENT  */ ((value.languagePreferences === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LanguagePreferences, $.BER)(value.languagePreferences, $.BER)),
            /* IF_ABSENT  */ ((value.deviceHistory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_DeviceHistory, $.BER)(value.deviceHistory, $.BER)),
            /* IF_ABSENT  */ ((value.locationInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_LocationInfoList, $.BER)(value.locationInfo, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CSTACommonArguments, $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConferencedEvent(value, elGetter);
}


/* eslint-enable */

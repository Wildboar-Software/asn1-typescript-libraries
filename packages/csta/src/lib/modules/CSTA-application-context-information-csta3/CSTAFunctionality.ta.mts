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
import { SwitchingFunctionServicesC2, SwitchingFunctionServicesC2_alternateCall /* IMPORTED_LONG_NAMED_BIT */, alternateCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_answerCall /* IMPORTED_LONG_NAMED_BIT */, answerCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_associateData /* IMPORTED_LONG_NAMED_BIT */, associateData /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_callCompletion /* IMPORTED_LONG_NAMED_BIT */, callCompletion /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_clearCall /* IMPORTED_LONG_NAMED_BIT */, clearCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_clearConnection /* IMPORTED_LONG_NAMED_BIT */, clearConnection /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_conferenceCall /* IMPORTED_LONG_NAMED_BIT */, conferenceCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_divertCall /* IMPORTED_LONG_NAMED_BIT */, divertCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_holdCall /* IMPORTED_LONG_NAMED_BIT */, holdCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_makeCall /* IMPORTED_LONG_NAMED_BIT */, makeCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_makePredictiveCall /* IMPORTED_LONG_NAMED_BIT */, makePredictiveCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_parkCall /* IMPORTED_LONG_NAMED_BIT */, parkCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_queryDevice /* IMPORTED_LONG_NAMED_BIT */, queryDevice /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_reconnectCall /* IMPORTED_LONG_NAMED_BIT */, reconnectCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_retrieveCall /* IMPORTED_LONG_NAMED_BIT */, retrieveCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_sendDTMFTones /* IMPORTED_LONG_NAMED_BIT */, sendDTMFTones /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_setFeature /* IMPORTED_LONG_NAMED_BIT */, setFeature /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_singleStepConference /* IMPORTED_LONG_NAMED_BIT */, singleStepConference /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_singleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, singleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_transferCall /* IMPORTED_LONG_NAMED_BIT */, transferCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwitchingFunctionServicesC2, _encode_SwitchingFunctionServicesC2 } from "../CSTA-application-context-information-csta3/SwitchingFunctionServicesC2.ta.mjs";
// export { SwitchingFunctionServicesC2, SwitchingFunctionServicesC2_alternateCall /* IMPORTED_LONG_NAMED_BIT */, alternateCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_answerCall /* IMPORTED_LONG_NAMED_BIT */, answerCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_associateData /* IMPORTED_LONG_NAMED_BIT */, associateData /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_callCompletion /* IMPORTED_LONG_NAMED_BIT */, callCompletion /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_clearCall /* IMPORTED_LONG_NAMED_BIT */, clearCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_clearConnection /* IMPORTED_LONG_NAMED_BIT */, clearConnection /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_conferenceCall /* IMPORTED_LONG_NAMED_BIT */, conferenceCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_divertCall /* IMPORTED_LONG_NAMED_BIT */, divertCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_holdCall /* IMPORTED_LONG_NAMED_BIT */, holdCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_makeCall /* IMPORTED_LONG_NAMED_BIT */, makeCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_makePredictiveCall /* IMPORTED_LONG_NAMED_BIT */, makePredictiveCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_parkCall /* IMPORTED_LONG_NAMED_BIT */, parkCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_queryDevice /* IMPORTED_LONG_NAMED_BIT */, queryDevice /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_reconnectCall /* IMPORTED_LONG_NAMED_BIT */, reconnectCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_retrieveCall /* IMPORTED_LONG_NAMED_BIT */, retrieveCall /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_sendDTMFTones /* IMPORTED_LONG_NAMED_BIT */, sendDTMFTones /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_setFeature /* IMPORTED_LONG_NAMED_BIT */, setFeature /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_singleStepConference /* IMPORTED_LONG_NAMED_BIT */, singleStepConference /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_singleStepTransfer /* IMPORTED_LONG_NAMED_BIT */, singleStepTransfer /* IMPORTED_SHORT_NAMED_BIT */, SwitchingFunctionServicesC2_transferCall /* IMPORTED_LONG_NAMED_BIT */, transferCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_SwitchingFunctionServicesC2, _encode_SwitchingFunctionServicesC2 } from "../CSTA-application-context-information-csta3/SwitchingFunctionServicesC2.ta.mjs";
import { EventReportServicesC2, EventReportServicesC2_callCleared /* IMPORTED_LONG_NAMED_BIT */, callCleared /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_conferenced /* IMPORTED_LONG_NAMED_BIT */, conferenced /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_connectionCleared /* IMPORTED_LONG_NAMED_BIT */, connectionCleared /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_delivered /* IMPORTED_LONG_NAMED_BIT */, delivered /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_diverted /* IMPORTED_LONG_NAMED_BIT */, diverted /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_established /* IMPORTED_LONG_NAMED_BIT */, established /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_failed /* IMPORTED_LONG_NAMED_BIT */, failed /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_held /* IMPORTED_LONG_NAMED_BIT */, held /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_networkReached /* IMPORTED_LONG_NAMED_BIT */, networkReached /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_originated /* IMPORTED_LONG_NAMED_BIT */, originated /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_queued /* IMPORTED_LONG_NAMED_BIT */, queued /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_retrieved /* IMPORTED_LONG_NAMED_BIT */, retrieved /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_serviceInitiated /* IMPORTED_LONG_NAMED_BIT */, serviceInitiated /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_transferred /* IMPORTED_LONG_NAMED_BIT */, transferred /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_autoAnswer /* IMPORTED_LONG_NAMED_BIT */, autoAnswer /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_callInformation /* IMPORTED_LONG_NAMED_BIT */, callInformation /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_doNotDisturb /* IMPORTED_LONG_NAMED_BIT */, doNotDisturb /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_forwarding /* IMPORTED_LONG_NAMED_BIT */, forwarding /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_messageWaiting /* IMPORTED_LONG_NAMED_BIT */, messageWaiting /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_microphoneMute /* IMPORTED_LONG_NAMED_BIT */, microphoneMute /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_speakerMute /* IMPORTED_LONG_NAMED_BIT */, speakerMute /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_speakerVolume /* IMPORTED_LONG_NAMED_BIT */, speakerVolume /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_agentBusy /* IMPORTED_LONG_NAMED_BIT */, agentBusy /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_loggedOn /* IMPORTED_LONG_NAMED_BIT */, loggedOn /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_loggedOff /* IMPORTED_LONG_NAMED_BIT */, loggedOff /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_notReady /* IMPORTED_LONG_NAMED_BIT */, notReady /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_ready /* IMPORTED_LONG_NAMED_BIT */, ready /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_workingAfterCall /* IMPORTED_LONG_NAMED_BIT */, workingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_backInService /* IMPORTED_LONG_NAMED_BIT */, backInService /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_outOfServiceEvent /* IMPORTED_LONG_NAMED_BIT */, outOfServiceEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_privateEvent /* IMPORTED_LONG_NAMED_BIT */, privateEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_playEvent /* IMPORTED_LONG_NAMED_BIT */, playEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_recordEvent /* IMPORTED_LONG_NAMED_BIT */, recordEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_reviewEvent /* IMPORTED_LONG_NAMED_BIT */, reviewEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_stopEvent /* IMPORTED_LONG_NAMED_BIT */, stopEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_suspendPlayEvent /* IMPORTED_LONG_NAMED_BIT */, suspendPlayEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_suspendRecordEvent /* IMPORTED_LONG_NAMED_BIT */, suspendRecordEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_voiceAttributesChangeEvent /* IMPORTED_LONG_NAMED_BIT */, voiceAttributesChangeEvent /* IMPORTED_SHORT_NAMED_BIT */, _decode_EventReportServicesC2, _encode_EventReportServicesC2 } from "../CSTA-application-context-information-csta3/EventReportServicesC2.ta.mjs";
// export { EventReportServicesC2, EventReportServicesC2_callCleared /* IMPORTED_LONG_NAMED_BIT */, callCleared /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_conferenced /* IMPORTED_LONG_NAMED_BIT */, conferenced /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_connectionCleared /* IMPORTED_LONG_NAMED_BIT */, connectionCleared /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_delivered /* IMPORTED_LONG_NAMED_BIT */, delivered /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_diverted /* IMPORTED_LONG_NAMED_BIT */, diverted /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_established /* IMPORTED_LONG_NAMED_BIT */, established /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_failed /* IMPORTED_LONG_NAMED_BIT */, failed /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_held /* IMPORTED_LONG_NAMED_BIT */, held /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_networkReached /* IMPORTED_LONG_NAMED_BIT */, networkReached /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_originated /* IMPORTED_LONG_NAMED_BIT */, originated /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_queued /* IMPORTED_LONG_NAMED_BIT */, queued /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_retrieved /* IMPORTED_LONG_NAMED_BIT */, retrieved /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_serviceInitiated /* IMPORTED_LONG_NAMED_BIT */, serviceInitiated /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_transferred /* IMPORTED_LONG_NAMED_BIT */, transferred /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_autoAnswer /* IMPORTED_LONG_NAMED_BIT */, autoAnswer /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_callInformation /* IMPORTED_LONG_NAMED_BIT */, callInformation /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_doNotDisturb /* IMPORTED_LONG_NAMED_BIT */, doNotDisturb /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_forwarding /* IMPORTED_LONG_NAMED_BIT */, forwarding /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_messageWaiting /* IMPORTED_LONG_NAMED_BIT */, messageWaiting /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_microphoneMute /* IMPORTED_LONG_NAMED_BIT */, microphoneMute /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_speakerMute /* IMPORTED_LONG_NAMED_BIT */, speakerMute /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_speakerVolume /* IMPORTED_LONG_NAMED_BIT */, speakerVolume /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_agentBusy /* IMPORTED_LONG_NAMED_BIT */, agentBusy /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_loggedOn /* IMPORTED_LONG_NAMED_BIT */, loggedOn /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_loggedOff /* IMPORTED_LONG_NAMED_BIT */, loggedOff /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_notReady /* IMPORTED_LONG_NAMED_BIT */, notReady /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_ready /* IMPORTED_LONG_NAMED_BIT */, ready /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_workingAfterCall /* IMPORTED_LONG_NAMED_BIT */, workingAfterCall /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_backInService /* IMPORTED_LONG_NAMED_BIT */, backInService /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_outOfServiceEvent /* IMPORTED_LONG_NAMED_BIT */, outOfServiceEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_privateEvent /* IMPORTED_LONG_NAMED_BIT */, privateEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_playEvent /* IMPORTED_LONG_NAMED_BIT */, playEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_recordEvent /* IMPORTED_LONG_NAMED_BIT */, recordEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_reviewEvent /* IMPORTED_LONG_NAMED_BIT */, reviewEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_stopEvent /* IMPORTED_LONG_NAMED_BIT */, stopEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_suspendPlayEvent /* IMPORTED_LONG_NAMED_BIT */, suspendPlayEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_suspendRecordEvent /* IMPORTED_LONG_NAMED_BIT */, suspendRecordEvent /* IMPORTED_SHORT_NAMED_BIT */, EventReportServicesC2_voiceAttributesChangeEvent /* IMPORTED_LONG_NAMED_BIT */, voiceAttributesChangeEvent /* IMPORTED_SHORT_NAMED_BIT */, _decode_EventReportServicesC2, _encode_EventReportServicesC2 } from "../CSTA-application-context-information-csta3/EventReportServicesC2.ta.mjs";
import { ComputingFunctionServicesC2, ComputingFunctionServicesC2_routeRequest /* IMPORTED_LONG_NAMED_BIT */, routeRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_reRouteRequest /* IMPORTED_LONG_NAMED_BIT */, reRouteRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_routeSelectRequest /* IMPORTED_LONG_NAMED_BIT */, routeSelectRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_routeUsedRequest /* IMPORTED_LONG_NAMED_BIT */, routeUsedRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_routeEndRequest /* IMPORTED_LONG_NAMED_BIT */, routeEndRequest /* IMPORTED_SHORT_NAMED_BIT */, _decode_ComputingFunctionServicesC2, _encode_ComputingFunctionServicesC2 } from "../CSTA-application-context-information-csta3/ComputingFunctionServicesC2.ta.mjs";
// export { ComputingFunctionServicesC2, ComputingFunctionServicesC2_routeRequest /* IMPORTED_LONG_NAMED_BIT */, routeRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_reRouteRequest /* IMPORTED_LONG_NAMED_BIT */, reRouteRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_routeSelectRequest /* IMPORTED_LONG_NAMED_BIT */, routeSelectRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_routeUsedRequest /* IMPORTED_LONG_NAMED_BIT */, routeUsedRequest /* IMPORTED_SHORT_NAMED_BIT */, ComputingFunctionServicesC2_routeEndRequest /* IMPORTED_LONG_NAMED_BIT */, routeEndRequest /* IMPORTED_SHORT_NAMED_BIT */, _decode_ComputingFunctionServicesC2, _encode_ComputingFunctionServicesC2 } from "../CSTA-application-context-information-csta3/ComputingFunctionServicesC2.ta.mjs";
import { BidirectionalServicesC2, BidirectionalServicesC2_escapeService /* IMPORTED_LONG_NAMED_BIT */, escapeService /* IMPORTED_SHORT_NAMED_BIT */, BidirectionalServicesC2_systemStatus /* IMPORTED_LONG_NAMED_BIT */, systemStatus /* IMPORTED_SHORT_NAMED_BIT */, _decode_BidirectionalServicesC2, _encode_BidirectionalServicesC2 } from "../CSTA-application-context-information-csta3/BidirectionalServicesC2.ta.mjs";
// export { BidirectionalServicesC2, BidirectionalServicesC2_escapeService /* IMPORTED_LONG_NAMED_BIT */, escapeService /* IMPORTED_SHORT_NAMED_BIT */, BidirectionalServicesC2_systemStatus /* IMPORTED_LONG_NAMED_BIT */, systemStatus /* IMPORTED_SHORT_NAMED_BIT */, _decode_BidirectionalServicesC2, _encode_BidirectionalServicesC2 } from "../CSTA-application-context-information-csta3/BidirectionalServicesC2.ta.mjs";
import { StatusReportingServicesC2, StatusReportingServicesC2_monitorStart /* IMPORTED_LONG_NAMED_BIT */, monitorStart /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_changeMonitorFilter /* IMPORTED_LONG_NAMED_BIT */, changeMonitorFilter /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_monitorStop /* IMPORTED_LONG_NAMED_BIT */, monitorStop /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_snapshotDevice /* IMPORTED_LONG_NAMED_BIT */, snapshotDevice /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_snapshotCall /* IMPORTED_LONG_NAMED_BIT */, snapshotCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_StatusReportingServicesC2, _encode_StatusReportingServicesC2 } from "../CSTA-application-context-information-csta3/StatusReportingServicesC2.ta.mjs";
// export { StatusReportingServicesC2, StatusReportingServicesC2_monitorStart /* IMPORTED_LONG_NAMED_BIT */, monitorStart /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_changeMonitorFilter /* IMPORTED_LONG_NAMED_BIT */, changeMonitorFilter /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_monitorStop /* IMPORTED_LONG_NAMED_BIT */, monitorStop /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_snapshotDevice /* IMPORTED_LONG_NAMED_BIT */, snapshotDevice /* IMPORTED_SHORT_NAMED_BIT */, StatusReportingServicesC2_snapshotCall /* IMPORTED_LONG_NAMED_BIT */, snapshotCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_StatusReportingServicesC2, _encode_StatusReportingServicesC2 } from "../CSTA-application-context-information-csta3/StatusReportingServicesC2.ta.mjs";
import { InputOutputServicesC2, InputOutputServicesC2_startDataPathService /* IMPORTED_LONG_NAMED_BIT */, startDataPathService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_stopDataPathService /* IMPORTED_LONG_NAMED_BIT */, stopDataPathService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_sendDataService /* IMPORTED_LONG_NAMED_BIT */, sendDataService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_sendMulticastDataService /* IMPORTED_LONG_NAMED_BIT */, sendMulticastDataService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_sendBroadcastDataService /* IMPORTED_LONG_NAMED_BIT */, sendBroadcastDataService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_suspendDataPathService /* IMPORTED_LONG_NAMED_BIT */, suspendDataPathService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_dataPathSuspendedService /* IMPORTED_LONG_NAMED_BIT */, dataPathSuspendedService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_resumeDataPath /* IMPORTED_LONG_NAMED_BIT */, resumeDataPath /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_dataPathResumedService /* IMPORTED_LONG_NAMED_BIT */, dataPathResumedService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_fastData /* IMPORTED_LONG_NAMED_BIT */, fastData /* IMPORTED_SHORT_NAMED_BIT */, _decode_InputOutputServicesC2, _encode_InputOutputServicesC2 } from "../CSTA-application-context-information-csta3/InputOutputServicesC2.ta.mjs";
// export { InputOutputServicesC2, InputOutputServicesC2_startDataPathService /* IMPORTED_LONG_NAMED_BIT */, startDataPathService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_stopDataPathService /* IMPORTED_LONG_NAMED_BIT */, stopDataPathService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_sendDataService /* IMPORTED_LONG_NAMED_BIT */, sendDataService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_sendMulticastDataService /* IMPORTED_LONG_NAMED_BIT */, sendMulticastDataService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_sendBroadcastDataService /* IMPORTED_LONG_NAMED_BIT */, sendBroadcastDataService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_suspendDataPathService /* IMPORTED_LONG_NAMED_BIT */, suspendDataPathService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_dataPathSuspendedService /* IMPORTED_LONG_NAMED_BIT */, dataPathSuspendedService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_resumeDataPath /* IMPORTED_LONG_NAMED_BIT */, resumeDataPath /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_dataPathResumedService /* IMPORTED_LONG_NAMED_BIT */, dataPathResumedService /* IMPORTED_SHORT_NAMED_BIT */, InputOutputServicesC2_fastData /* IMPORTED_LONG_NAMED_BIT */, fastData /* IMPORTED_SHORT_NAMED_BIT */, _decode_InputOutputServicesC2, _encode_InputOutputServicesC2 } from "../CSTA-application-context-information-csta3/InputOutputServicesC2.ta.mjs";
import { VoiceUnitServicesC2, VoiceUnitServicesC2_concatenateMessage /* IMPORTED_LONG_NAMED_BIT */, concatenateMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_deleteMessage /* IMPORTED_LONG_NAMED_BIT */, deleteMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_playMessage /* IMPORTED_LONG_NAMED_BIT */, playMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_queryVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, queryVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_recordMessage /* IMPORTED_LONG_NAMED_BIT */, recordMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_reposition /* IMPORTED_LONG_NAMED_BIT */, reposition /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_resume /* IMPORTED_LONG_NAMED_BIT */, resume /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_review /* IMPORTED_LONG_NAMED_BIT */, review /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_setVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, setVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_suspend /* IMPORTED_LONG_NAMED_BIT */, suspend /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_synthesizeMessage /* IMPORTED_LONG_NAMED_BIT */, synthesizeMessage /* IMPORTED_SHORT_NAMED_BIT */, _decode_VoiceUnitServicesC2, _encode_VoiceUnitServicesC2 } from "../CSTA-application-context-information-csta3/VoiceUnitServicesC2.ta.mjs";
// export { VoiceUnitServicesC2, VoiceUnitServicesC2_concatenateMessage /* IMPORTED_LONG_NAMED_BIT */, concatenateMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_deleteMessage /* IMPORTED_LONG_NAMED_BIT */, deleteMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_playMessage /* IMPORTED_LONG_NAMED_BIT */, playMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_queryVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, queryVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_recordMessage /* IMPORTED_LONG_NAMED_BIT */, recordMessage /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_reposition /* IMPORTED_LONG_NAMED_BIT */, reposition /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_resume /* IMPORTED_LONG_NAMED_BIT */, resume /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_review /* IMPORTED_LONG_NAMED_BIT */, review /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_setVoiceAttribute /* IMPORTED_LONG_NAMED_BIT */, setVoiceAttribute /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_suspend /* IMPORTED_LONG_NAMED_BIT */, suspend /* IMPORTED_SHORT_NAMED_BIT */, VoiceUnitServicesC2_synthesizeMessage /* IMPORTED_LONG_NAMED_BIT */, synthesizeMessage /* IMPORTED_SHORT_NAMED_BIT */, _decode_VoiceUnitServicesC2, _encode_VoiceUnitServicesC2 } from "../CSTA-application-context-information-csta3/VoiceUnitServicesC2.ta.mjs";


/**
 * @summary CSTAFunctionality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAFunctionality ::= SEQUENCE
 *      {switchingFunctionServices    [0] IMPLICIT SwitchingFunctionServicesC2    DEFAULT {},
 *      eventReportServices        [1] IMPLICIT EventReportServicesC2        DEFAULT {},
 *      computingFunctionServices    [2] IMPLICIT ComputingFunctionServicesC2    DEFAULT {},
 *      bidirectionalServices        [3] IMPLICIT BidirectionalServicesC2        DEFAULT {},
 *      statusReportingServices    [4] IMPLICIT StatusReportingServicesC2        DEFAULT {},
 *      inputOutputServices        [5] IMPLICIT InputOutputServicesC2        DEFAULT {},
 *      voiceUnitServices        [6] IMPLICIT VoiceUnitServicesC2        DEFAULT {} }
 * ```
 * 
 * @class
 */
export
class CSTAFunctionality {
    constructor (
        /**
         * @summary `switchingFunctionServices`.
         * @public
         * @readonly
         */
        readonly switchingFunctionServices: OPTIONAL<SwitchingFunctionServicesC2>,
        /**
         * @summary `eventReportServices`.
         * @public
         * @readonly
         */
        readonly eventReportServices: OPTIONAL<EventReportServicesC2>,
        /**
         * @summary `computingFunctionServices`.
         * @public
         * @readonly
         */
        readonly computingFunctionServices: OPTIONAL<ComputingFunctionServicesC2>,
        /**
         * @summary `bidirectionalServices`.
         * @public
         * @readonly
         */
        readonly bidirectionalServices: OPTIONAL<BidirectionalServicesC2>,
        /**
         * @summary `statusReportingServices`.
         * @public
         * @readonly
         */
        readonly statusReportingServices: OPTIONAL<StatusReportingServicesC2>,
        /**
         * @summary `inputOutputServices`.
         * @public
         * @readonly
         */
        readonly inputOutputServices: OPTIONAL<InputOutputServicesC2>,
        /**
         * @summary `voiceUnitServices`.
         * @public
         * @readonly
         */
        readonly voiceUnitServices: OPTIONAL<VoiceUnitServicesC2>
    ) {}

    /**
     * @summary Restructures an object into a CSTAFunctionality
     * @description
     * 
     * This takes an `object` and converts it to a `CSTAFunctionality`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CSTAFunctionality`.
     * @returns {CSTAFunctionality}
     */
    public static _from_object (_o: { [_K in keyof (CSTAFunctionality)]: (CSTAFunctionality)[_K] }): CSTAFunctionality {
        return new CSTAFunctionality(_o.switchingFunctionServices, _o.eventReportServices, _o.computingFunctionServices, _o.bidirectionalServices, _o.statusReportingServices, _o.inputOutputServices, _o.voiceUnitServices);
    }

    /**
     * @summary Getter that returns the default value for `switchingFunctionServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_switchingFunctionServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `eventReportServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_eventReportServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `computingFunctionServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_computingFunctionServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `bidirectionalServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_bidirectionalServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `statusReportingServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_statusReportingServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `inputOutputServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_inputOutputServices () { return new Uint8ClampedArray([]); }
    /**
     * @summary Getter that returns the default value for `voiceUnitServices`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_voiceUnitServices () { return new Uint8ClampedArray([]); }
}

/**
 * @summary The Leading Root Component Types of CSTAFunctionality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CSTAFunctionality: $.ComponentSpec[] = [
    new $.ComponentSpec("switchingFunctionServices", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("eventReportServices", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("computingFunctionServices", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("bidirectionalServices", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("statusReportingServices", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("inputOutputServices", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("voiceUnitServices", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CSTAFunctionality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CSTAFunctionality: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CSTAFunctionality
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CSTAFunctionality: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CSTAFunctionality: $.ASN1Decoder<CSTAFunctionality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAFunctionality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAFunctionality (el: _Element): CSTAFunctionality {
    if (!_cached_decoder_for_CSTAFunctionality) { _cached_decoder_for_CSTAFunctionality = function (el: _Element): CSTAFunctionality {
    let switchingFunctionServices: OPTIONAL<SwitchingFunctionServicesC2> = CSTAFunctionality._default_value_for_switchingFunctionServices;
    let eventReportServices: OPTIONAL<EventReportServicesC2> = CSTAFunctionality._default_value_for_eventReportServices;
    let computingFunctionServices: OPTIONAL<ComputingFunctionServicesC2> = CSTAFunctionality._default_value_for_computingFunctionServices;
    let bidirectionalServices: OPTIONAL<BidirectionalServicesC2> = CSTAFunctionality._default_value_for_bidirectionalServices;
    let statusReportingServices: OPTIONAL<StatusReportingServicesC2> = CSTAFunctionality._default_value_for_statusReportingServices;
    let inputOutputServices: OPTIONAL<InputOutputServicesC2> = CSTAFunctionality._default_value_for_inputOutputServices;
    let voiceUnitServices: OPTIONAL<VoiceUnitServicesC2> = CSTAFunctionality._default_value_for_voiceUnitServices;
    const callbacks: $.DecodingMap = {
        "switchingFunctionServices": (_el: _Element): void => { switchingFunctionServices = $._decode_implicit<SwitchingFunctionServicesC2>(() => _decode_SwitchingFunctionServicesC2)(_el); },
        "eventReportServices": (_el: _Element): void => { eventReportServices = $._decode_implicit<EventReportServicesC2>(() => _decode_EventReportServicesC2)(_el); },
        "computingFunctionServices": (_el: _Element): void => { computingFunctionServices = $._decode_implicit<ComputingFunctionServicesC2>(() => _decode_ComputingFunctionServicesC2)(_el); },
        "bidirectionalServices": (_el: _Element): void => { bidirectionalServices = $._decode_implicit<BidirectionalServicesC2>(() => _decode_BidirectionalServicesC2)(_el); },
        "statusReportingServices": (_el: _Element): void => { statusReportingServices = $._decode_implicit<StatusReportingServicesC2>(() => _decode_StatusReportingServicesC2)(_el); },
        "inputOutputServices": (_el: _Element): void => { inputOutputServices = $._decode_implicit<InputOutputServicesC2>(() => _decode_InputOutputServicesC2)(_el); },
        "voiceUnitServices": (_el: _Element): void => { voiceUnitServices = $._decode_implicit<VoiceUnitServicesC2>(() => _decode_VoiceUnitServicesC2)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CSTAFunctionality,
        _extension_additions_list_spec_for_CSTAFunctionality,
        _root_component_type_list_2_spec_for_CSTAFunctionality,
        undefined,
    );
    return new CSTAFunctionality(
        switchingFunctionServices,
        eventReportServices,
        computingFunctionServices,
        bidirectionalServices,
        statusReportingServices,
        inputOutputServices,
        voiceUnitServices
    );
}; }
    return _cached_decoder_for_CSTAFunctionality(el);
}

let _cached_encoder_for_CSTAFunctionality: $.ASN1Encoder<CSTAFunctionality> | null = null;

/**
 * @summary Encodes a(n) CSTAFunctionality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAFunctionality, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAFunctionality (value: CSTAFunctionality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAFunctionality) { _cached_encoder_for_CSTAFunctionality = function (value: CSTAFunctionality, elGetter: $.ASN1Encoder<CSTAFunctionality>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.switchingFunctionServices === undefined || $.deepEq(value.switchingFunctionServices, CSTAFunctionality._default_value_for_switchingFunctionServices) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SwitchingFunctionServicesC2, $.BER)(value.switchingFunctionServices, $.BER)),
            /* IF_DEFAULT */ (value.eventReportServices === undefined || $.deepEq(value.eventReportServices, CSTAFunctionality._default_value_for_eventReportServices) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EventReportServicesC2, $.BER)(value.eventReportServices, $.BER)),
            /* IF_DEFAULT */ (value.computingFunctionServices === undefined || $.deepEq(value.computingFunctionServices, CSTAFunctionality._default_value_for_computingFunctionServices) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ComputingFunctionServicesC2, $.BER)(value.computingFunctionServices, $.BER)),
            /* IF_DEFAULT */ (value.bidirectionalServices === undefined || $.deepEq(value.bidirectionalServices, CSTAFunctionality._default_value_for_bidirectionalServices) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_BidirectionalServicesC2, $.BER)(value.bidirectionalServices, $.BER)),
            /* IF_DEFAULT */ (value.statusReportingServices === undefined || $.deepEq(value.statusReportingServices, CSTAFunctionality._default_value_for_statusReportingServices) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_StatusReportingServicesC2, $.BER)(value.statusReportingServices, $.BER)),
            /* IF_DEFAULT */ (value.inputOutputServices === undefined || $.deepEq(value.inputOutputServices, CSTAFunctionality._default_value_for_inputOutputServices) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_InputOutputServicesC2, $.BER)(value.inputOutputServices, $.BER)),
            /* IF_DEFAULT */ (value.voiceUnitServices === undefined || $.deepEq(value.voiceUnitServices, CSTAFunctionality._default_value_for_voiceUnitServices) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VoiceUnitServicesC2, $.BER)(value.voiceUnitServices, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CSTAFunctionality(value, elGetter);
}


/* eslint-enable */

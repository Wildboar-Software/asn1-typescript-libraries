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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFRegistration, _decode_AMFRegistration, _encode_AMFRegistration } from "../TS33128Payloads/AMFRegistration.ta.mjs";
// export { AMFRegistration, _decode_AMFRegistration, _encode_AMFRegistration } from "../TS33128Payloads/AMFRegistration.ta.mjs";
import { AMFDeregistration, _decode_AMFDeregistration, _encode_AMFDeregistration } from "../TS33128Payloads/AMFDeregistration.ta.mjs";
// export { AMFDeregistration, _decode_AMFDeregistration, _encode_AMFDeregistration } from "../TS33128Payloads/AMFDeregistration.ta.mjs";
import { AMFLocationUpdate, _decode_AMFLocationUpdate, _encode_AMFLocationUpdate } from "../TS33128Payloads/AMFLocationUpdate.ta.mjs";
// export { AMFLocationUpdate, _decode_AMFLocationUpdate, _encode_AMFLocationUpdate } from "../TS33128Payloads/AMFLocationUpdate.ta.mjs";
import { AMFStartOfInterceptionWithRegisteredUE, _decode_AMFStartOfInterceptionWithRegisteredUE, _encode_AMFStartOfInterceptionWithRegisteredUE } from "../TS33128Payloads/AMFStartOfInterceptionWithRegisteredUE.ta.mjs";
// export { AMFStartOfInterceptionWithRegisteredUE, _decode_AMFStartOfInterceptionWithRegisteredUE, _encode_AMFStartOfInterceptionWithRegisteredUE } from "../TS33128Payloads/AMFStartOfInterceptionWithRegisteredUE.ta.mjs";
import { AMFUnsuccessfulProcedure, _decode_AMFUnsuccessfulProcedure, _encode_AMFUnsuccessfulProcedure } from "../TS33128Payloads/AMFUnsuccessfulProcedure.ta.mjs";
// export { AMFUnsuccessfulProcedure, _decode_AMFUnsuccessfulProcedure, _encode_AMFUnsuccessfulProcedure } from "../TS33128Payloads/AMFUnsuccessfulProcedure.ta.mjs";
import { SMFPDUSessionEstablishment, _decode_SMFPDUSessionEstablishment, _encode_SMFPDUSessionEstablishment } from "../TS33128Payloads/SMFPDUSessionEstablishment.ta.mjs";
// export { SMFPDUSessionEstablishment, _decode_SMFPDUSessionEstablishment, _encode_SMFPDUSessionEstablishment } from "../TS33128Payloads/SMFPDUSessionEstablishment.ta.mjs";
import { SMFPDUSessionModification, _decode_SMFPDUSessionModification, _encode_SMFPDUSessionModification } from "../TS33128Payloads/SMFPDUSessionModification.ta.mjs";
// export { SMFPDUSessionModification, _decode_SMFPDUSessionModification, _encode_SMFPDUSessionModification } from "../TS33128Payloads/SMFPDUSessionModification.ta.mjs";
import { SMFPDUSessionRelease, _decode_SMFPDUSessionRelease, _encode_SMFPDUSessionRelease } from "../TS33128Payloads/SMFPDUSessionRelease.ta.mjs";
// export { SMFPDUSessionRelease, _decode_SMFPDUSessionRelease, _encode_SMFPDUSessionRelease } from "../TS33128Payloads/SMFPDUSessionRelease.ta.mjs";
import { SMFStartOfInterceptionWithEstablishedPDUSession, _decode_SMFStartOfInterceptionWithEstablishedPDUSession, _encode_SMFStartOfInterceptionWithEstablishedPDUSession } from "../TS33128Payloads/SMFStartOfInterceptionWithEstablishedPDUSession.ta.mjs";
// export { SMFStartOfInterceptionWithEstablishedPDUSession, _decode_SMFStartOfInterceptionWithEstablishedPDUSession, _encode_SMFStartOfInterceptionWithEstablishedPDUSession } from "../TS33128Payloads/SMFStartOfInterceptionWithEstablishedPDUSession.ta.mjs";
import { SMFUnsuccessfulProcedure, _decode_SMFUnsuccessfulProcedure, _encode_SMFUnsuccessfulProcedure } from "../TS33128Payloads/SMFUnsuccessfulProcedure.ta.mjs";
// export { SMFUnsuccessfulProcedure, _decode_SMFUnsuccessfulProcedure, _encode_SMFUnsuccessfulProcedure } from "../TS33128Payloads/SMFUnsuccessfulProcedure.ta.mjs";
import { UDMServingSystemMessage, _decode_UDMServingSystemMessage, _encode_UDMServingSystemMessage } from "../TS33128Payloads/UDMServingSystemMessage.ta.mjs";
// export { UDMServingSystemMessage, _decode_UDMServingSystemMessage, _encode_UDMServingSystemMessage } from "../TS33128Payloads/UDMServingSystemMessage.ta.mjs";
import { SMSMessage, _decode_SMSMessage, _encode_SMSMessage } from "../TS33128Payloads/SMSMessage.ta.mjs";
// export { SMSMessage, _decode_SMSMessage, _encode_SMSMessage } from "../TS33128Payloads/SMSMessage.ta.mjs";
import { LALSReport, _decode_LALSReport, _encode_LALSReport } from "../TS33128Payloads/LALSReport.ta.mjs";
// export { LALSReport, _decode_LALSReport, _encode_LALSReport } from "../TS33128Payloads/LALSReport.ta.mjs";
import { PDHeaderReport, _decode_PDHeaderReport, _encode_PDHeaderReport } from "../TS33128Payloads/PDHeaderReport.ta.mjs";
// export { PDHeaderReport, _decode_PDHeaderReport, _encode_PDHeaderReport } from "../TS33128Payloads/PDHeaderReport.ta.mjs";
import { PDSummaryReport, _decode_PDSummaryReport, _encode_PDSummaryReport } from "../TS33128Payloads/PDSummaryReport.ta.mjs";
// export { PDSummaryReport, _decode_PDSummaryReport, _encode_PDSummaryReport } from "../TS33128Payloads/PDSummaryReport.ta.mjs";
import { MDFCellSiteReport, _decode_MDFCellSiteReport, _encode_MDFCellSiteReport } from "../TS33128Payloads/MDFCellSiteReport.ta.mjs";
// export { MDFCellSiteReport, _decode_MDFCellSiteReport, _encode_MDFCellSiteReport } from "../TS33128Payloads/MDFCellSiteReport.ta.mjs";
import { MMSSend, _decode_MMSSend, _encode_MMSSend } from "../TS33128Payloads/MMSSend.ta.mjs";
// export { MMSSend, _decode_MMSSend, _encode_MMSSend } from "../TS33128Payloads/MMSSend.ta.mjs";
import { MMSSendByNonLocalTarget, _decode_MMSSendByNonLocalTarget, _encode_MMSSendByNonLocalTarget } from "../TS33128Payloads/MMSSendByNonLocalTarget.ta.mjs";
// export { MMSSendByNonLocalTarget, _decode_MMSSendByNonLocalTarget, _encode_MMSSendByNonLocalTarget } from "../TS33128Payloads/MMSSendByNonLocalTarget.ta.mjs";
import { MMSNotification, _decode_MMSNotification, _encode_MMSNotification } from "../TS33128Payloads/MMSNotification.ta.mjs";
// export { MMSNotification, _decode_MMSNotification, _encode_MMSNotification } from "../TS33128Payloads/MMSNotification.ta.mjs";
import { MMSSendToNonLocalTarget, _decode_MMSSendToNonLocalTarget, _encode_MMSSendToNonLocalTarget } from "../TS33128Payloads/MMSSendToNonLocalTarget.ta.mjs";
// export { MMSSendToNonLocalTarget, _decode_MMSSendToNonLocalTarget, _encode_MMSSendToNonLocalTarget } from "../TS33128Payloads/MMSSendToNonLocalTarget.ta.mjs";
import { MMSNotificationResponse, _decode_MMSNotificationResponse, _encode_MMSNotificationResponse } from "../TS33128Payloads/MMSNotificationResponse.ta.mjs";
// export { MMSNotificationResponse, _decode_MMSNotificationResponse, _encode_MMSNotificationResponse } from "../TS33128Payloads/MMSNotificationResponse.ta.mjs";
import { MMSRetrieval, _decode_MMSRetrieval, _encode_MMSRetrieval } from "../TS33128Payloads/MMSRetrieval.ta.mjs";
// export { MMSRetrieval, _decode_MMSRetrieval, _encode_MMSRetrieval } from "../TS33128Payloads/MMSRetrieval.ta.mjs";
import { MMSDeliveryAck, _decode_MMSDeliveryAck, _encode_MMSDeliveryAck } from "../TS33128Payloads/MMSDeliveryAck.ta.mjs";
// export { MMSDeliveryAck, _decode_MMSDeliveryAck, _encode_MMSDeliveryAck } from "../TS33128Payloads/MMSDeliveryAck.ta.mjs";
import { MMSForward, _decode_MMSForward, _encode_MMSForward } from "../TS33128Payloads/MMSForward.ta.mjs";
// export { MMSForward, _decode_MMSForward, _encode_MMSForward } from "../TS33128Payloads/MMSForward.ta.mjs";
import { MMSDeleteFromRelay, _decode_MMSDeleteFromRelay, _encode_MMSDeleteFromRelay } from "../TS33128Payloads/MMSDeleteFromRelay.ta.mjs";
// export { MMSDeleteFromRelay, _decode_MMSDeleteFromRelay, _encode_MMSDeleteFromRelay } from "../TS33128Payloads/MMSDeleteFromRelay.ta.mjs";
import { MMSDeliveryReport, _decode_MMSDeliveryReport, _encode_MMSDeliveryReport } from "../TS33128Payloads/MMSDeliveryReport.ta.mjs";
// export { MMSDeliveryReport, _decode_MMSDeliveryReport, _encode_MMSDeliveryReport } from "../TS33128Payloads/MMSDeliveryReport.ta.mjs";
import { MMSDeliveryReportNonLocalTarget, _decode_MMSDeliveryReportNonLocalTarget, _encode_MMSDeliveryReportNonLocalTarget } from "../TS33128Payloads/MMSDeliveryReportNonLocalTarget.ta.mjs";
// export { MMSDeliveryReportNonLocalTarget, _decode_MMSDeliveryReportNonLocalTarget, _encode_MMSDeliveryReportNonLocalTarget } from "../TS33128Payloads/MMSDeliveryReportNonLocalTarget.ta.mjs";
import { MMSReadReport, _decode_MMSReadReport, _encode_MMSReadReport } from "../TS33128Payloads/MMSReadReport.ta.mjs";
// export { MMSReadReport, _decode_MMSReadReport, _encode_MMSReadReport } from "../TS33128Payloads/MMSReadReport.ta.mjs";
import { MMSReadReportNonLocalTarget, _decode_MMSReadReportNonLocalTarget, _encode_MMSReadReportNonLocalTarget } from "../TS33128Payloads/MMSReadReportNonLocalTarget.ta.mjs";
// export { MMSReadReportNonLocalTarget, _decode_MMSReadReportNonLocalTarget, _encode_MMSReadReportNonLocalTarget } from "../TS33128Payloads/MMSReadReportNonLocalTarget.ta.mjs";
import { MMSCancel, _decode_MMSCancel, _encode_MMSCancel } from "../TS33128Payloads/MMSCancel.ta.mjs";
// export { MMSCancel, _decode_MMSCancel, _encode_MMSCancel } from "../TS33128Payloads/MMSCancel.ta.mjs";
import { MMSMBoxStore, _decode_MMSMBoxStore, _encode_MMSMBoxStore } from "../TS33128Payloads/MMSMBoxStore.ta.mjs";
// export { MMSMBoxStore, _decode_MMSMBoxStore, _encode_MMSMBoxStore } from "../TS33128Payloads/MMSMBoxStore.ta.mjs";
import { MMSMBoxUpload, _decode_MMSMBoxUpload, _encode_MMSMBoxUpload } from "../TS33128Payloads/MMSMBoxUpload.ta.mjs";
// export { MMSMBoxUpload, _decode_MMSMBoxUpload, _encode_MMSMBoxUpload } from "../TS33128Payloads/MMSMBoxUpload.ta.mjs";
import { MMSMBoxDelete, _decode_MMSMBoxDelete, _encode_MMSMBoxDelete } from "../TS33128Payloads/MMSMBoxDelete.ta.mjs";
// export { MMSMBoxDelete, _decode_MMSMBoxDelete, _encode_MMSMBoxDelete } from "../TS33128Payloads/MMSMBoxDelete.ta.mjs";
import { MMSMBoxViewRequest, _decode_MMSMBoxViewRequest, _encode_MMSMBoxViewRequest } from "../TS33128Payloads/MMSMBoxViewRequest.ta.mjs";
// export { MMSMBoxViewRequest, _decode_MMSMBoxViewRequest, _encode_MMSMBoxViewRequest } from "../TS33128Payloads/MMSMBoxViewRequest.ta.mjs";
import { MMSMBoxViewResponse, _decode_MMSMBoxViewResponse, _encode_MMSMBoxViewResponse } from "../TS33128Payloads/MMSMBoxViewResponse.ta.mjs";
// export { MMSMBoxViewResponse, _decode_MMSMBoxViewResponse, _encode_MMSMBoxViewResponse } from "../TS33128Payloads/MMSMBoxViewResponse.ta.mjs";
import { PTCRegistration, _decode_PTCRegistration, _encode_PTCRegistration } from "../TS33128Payloads/PTCRegistration.ta.mjs";
// export { PTCRegistration, _decode_PTCRegistration, _encode_PTCRegistration } from "../TS33128Payloads/PTCRegistration.ta.mjs";
import { PTCSessionInitiation, _decode_PTCSessionInitiation, _encode_PTCSessionInitiation } from "../TS33128Payloads/PTCSessionInitiation.ta.mjs";
// export { PTCSessionInitiation, _decode_PTCSessionInitiation, _encode_PTCSessionInitiation } from "../TS33128Payloads/PTCSessionInitiation.ta.mjs";
import { PTCSessionAbandon, _decode_PTCSessionAbandon, _encode_PTCSessionAbandon } from "../TS33128Payloads/PTCSessionAbandon.ta.mjs";
// export { PTCSessionAbandon, _decode_PTCSessionAbandon, _encode_PTCSessionAbandon } from "../TS33128Payloads/PTCSessionAbandon.ta.mjs";
import { PTCSessionStart, _decode_PTCSessionStart, _encode_PTCSessionStart } from "../TS33128Payloads/PTCSessionStart.ta.mjs";
// export { PTCSessionStart, _decode_PTCSessionStart, _encode_PTCSessionStart } from "../TS33128Payloads/PTCSessionStart.ta.mjs";
import { PTCSessionEnd, _decode_PTCSessionEnd, _encode_PTCSessionEnd } from "../TS33128Payloads/PTCSessionEnd.ta.mjs";
// export { PTCSessionEnd, _decode_PTCSessionEnd, _encode_PTCSessionEnd } from "../TS33128Payloads/PTCSessionEnd.ta.mjs";
import { PTCStartOfInterception, _decode_PTCStartOfInterception, _encode_PTCStartOfInterception } from "../TS33128Payloads/PTCStartOfInterception.ta.mjs";
// export { PTCStartOfInterception, _decode_PTCStartOfInterception, _encode_PTCStartOfInterception } from "../TS33128Payloads/PTCStartOfInterception.ta.mjs";
import { PTCPreEstablishedSession, _decode_PTCPreEstablishedSession, _encode_PTCPreEstablishedSession } from "../TS33128Payloads/PTCPreEstablishedSession.ta.mjs";
// export { PTCPreEstablishedSession, _decode_PTCPreEstablishedSession, _encode_PTCPreEstablishedSession } from "../TS33128Payloads/PTCPreEstablishedSession.ta.mjs";
import { PTCInstantPersonalAlert, _decode_PTCInstantPersonalAlert, _encode_PTCInstantPersonalAlert } from "../TS33128Payloads/PTCInstantPersonalAlert.ta.mjs";
// export { PTCInstantPersonalAlert, _decode_PTCInstantPersonalAlert, _encode_PTCInstantPersonalAlert } from "../TS33128Payloads/PTCInstantPersonalAlert.ta.mjs";
import { PTCPartyJoin, _decode_PTCPartyJoin, _encode_PTCPartyJoin } from "../TS33128Payloads/PTCPartyJoin.ta.mjs";
// export { PTCPartyJoin, _decode_PTCPartyJoin, _encode_PTCPartyJoin } from "../TS33128Payloads/PTCPartyJoin.ta.mjs";
import { PTCPartyDrop, _decode_PTCPartyDrop, _encode_PTCPartyDrop } from "../TS33128Payloads/PTCPartyDrop.ta.mjs";
// export { PTCPartyDrop, _decode_PTCPartyDrop, _encode_PTCPartyDrop } from "../TS33128Payloads/PTCPartyDrop.ta.mjs";
import { PTCPartyHold, _decode_PTCPartyHold, _encode_PTCPartyHold } from "../TS33128Payloads/PTCPartyHold.ta.mjs";
// export { PTCPartyHold, _decode_PTCPartyHold, _encode_PTCPartyHold } from "../TS33128Payloads/PTCPartyHold.ta.mjs";
import { PTCMediaModification, _decode_PTCMediaModification, _encode_PTCMediaModification } from "../TS33128Payloads/PTCMediaModification.ta.mjs";
// export { PTCMediaModification, _decode_PTCMediaModification, _encode_PTCMediaModification } from "../TS33128Payloads/PTCMediaModification.ta.mjs";
import { PTCGroupAdvertisement, _decode_PTCGroupAdvertisement, _encode_PTCGroupAdvertisement } from "../TS33128Payloads/PTCGroupAdvertisement.ta.mjs";
// export { PTCGroupAdvertisement, _decode_PTCGroupAdvertisement, _encode_PTCGroupAdvertisement } from "../TS33128Payloads/PTCGroupAdvertisement.ta.mjs";
import { PTCFloorControl, _decode_PTCFloorControl, _encode_PTCFloorControl } from "../TS33128Payloads/PTCFloorControl.ta.mjs";
// export { PTCFloorControl, _decode_PTCFloorControl, _encode_PTCFloorControl } from "../TS33128Payloads/PTCFloorControl.ta.mjs";
import { PTCTargetPresence, _decode_PTCTargetPresence, _encode_PTCTargetPresence } from "../TS33128Payloads/PTCTargetPresence.ta.mjs";
// export { PTCTargetPresence, _decode_PTCTargetPresence, _encode_PTCTargetPresence } from "../TS33128Payloads/PTCTargetPresence.ta.mjs";
import { PTCParticipantPresence, _decode_PTCParticipantPresence, _encode_PTCParticipantPresence } from "../TS33128Payloads/PTCParticipantPresence.ta.mjs";
// export { PTCParticipantPresence, _decode_PTCParticipantPresence, _encode_PTCParticipantPresence } from "../TS33128Payloads/PTCParticipantPresence.ta.mjs";
import { PTCListManagement, _decode_PTCListManagement, _encode_PTCListManagement } from "../TS33128Payloads/PTCListManagement.ta.mjs";
// export { PTCListManagement, _decode_PTCListManagement, _encode_PTCListManagement } from "../TS33128Payloads/PTCListManagement.ta.mjs";
import { PTCAccessPolicy, _decode_PTCAccessPolicy, _encode_PTCAccessPolicy } from "../TS33128Payloads/PTCAccessPolicy.ta.mjs";
// export { PTCAccessPolicy, _decode_PTCAccessPolicy, _encode_PTCAccessPolicy } from "../TS33128Payloads/PTCAccessPolicy.ta.mjs";
import { UDMSubscriberRecordChangeMessage, _decode_UDMSubscriberRecordChangeMessage, _encode_UDMSubscriberRecordChangeMessage } from "../TS33128Payloads/UDMSubscriberRecordChangeMessage.ta.mjs";
// export { UDMSubscriberRecordChangeMessage, _decode_UDMSubscriberRecordChangeMessage, _encode_UDMSubscriberRecordChangeMessage } from "../TS33128Payloads/UDMSubscriberRecordChangeMessage.ta.mjs";
import { UDMCancelLocationMessage, _decode_UDMCancelLocationMessage, _encode_UDMCancelLocationMessage } from "../TS33128Payloads/UDMCancelLocationMessage.ta.mjs";
// export { UDMCancelLocationMessage, _decode_UDMCancelLocationMessage, _encode_UDMCancelLocationMessage } from "../TS33128Payloads/UDMCancelLocationMessage.ta.mjs";
import { SMSReport, _decode_SMSReport, _encode_SMSReport } from "../TS33128Payloads/SMSReport.ta.mjs";
// export { SMSReport, _decode_SMSReport, _encode_SMSReport } from "../TS33128Payloads/SMSReport.ta.mjs";
import { SMFMAPDUSessionEstablishment, _decode_SMFMAPDUSessionEstablishment, _encode_SMFMAPDUSessionEstablishment } from "../TS33128Payloads/SMFMAPDUSessionEstablishment.ta.mjs";
// export { SMFMAPDUSessionEstablishment, _decode_SMFMAPDUSessionEstablishment, _encode_SMFMAPDUSessionEstablishment } from "../TS33128Payloads/SMFMAPDUSessionEstablishment.ta.mjs";
import { SMFMAPDUSessionModification, _decode_SMFMAPDUSessionModification, _encode_SMFMAPDUSessionModification } from "../TS33128Payloads/SMFMAPDUSessionModification.ta.mjs";
// export { SMFMAPDUSessionModification, _decode_SMFMAPDUSessionModification, _encode_SMFMAPDUSessionModification } from "../TS33128Payloads/SMFMAPDUSessionModification.ta.mjs";
import { SMFMAPDUSessionRelease, _decode_SMFMAPDUSessionRelease, _encode_SMFMAPDUSessionRelease } from "../TS33128Payloads/SMFMAPDUSessionRelease.ta.mjs";
// export { SMFMAPDUSessionRelease, _decode_SMFMAPDUSessionRelease, _encode_SMFMAPDUSessionRelease } from "../TS33128Payloads/SMFMAPDUSessionRelease.ta.mjs";
import { SMFStartOfInterceptionWithEstablishedMAPDUSession, _decode_SMFStartOfInterceptionWithEstablishedMAPDUSession, _encode_SMFStartOfInterceptionWithEstablishedMAPDUSession } from "../TS33128Payloads/SMFStartOfInterceptionWithEstablishedMAPDUSession.ta.mjs";
// export { SMFStartOfInterceptionWithEstablishedMAPDUSession, _decode_SMFStartOfInterceptionWithEstablishedMAPDUSession, _encode_SMFStartOfInterceptionWithEstablishedMAPDUSession } from "../TS33128Payloads/SMFStartOfInterceptionWithEstablishedMAPDUSession.ta.mjs";
import { SMFMAUnsuccessfulProcedure, _decode_SMFMAUnsuccessfulProcedure, _encode_SMFMAUnsuccessfulProcedure } from "../TS33128Payloads/SMFMAUnsuccessfulProcedure.ta.mjs";
// export { SMFMAUnsuccessfulProcedure, _decode_SMFMAUnsuccessfulProcedure, _encode_SMFMAUnsuccessfulProcedure } from "../TS33128Payloads/SMFMAUnsuccessfulProcedure.ta.mjs";
import { AMFIdentifierAssociation, _decode_AMFIdentifierAssociation, _encode_AMFIdentifierAssociation } from "../TS33128Payloads/AMFIdentifierAssociation.ta.mjs";
// export { AMFIdentifierAssociation, _decode_AMFIdentifierAssociation, _encode_AMFIdentifierAssociation } from "../TS33128Payloads/AMFIdentifierAssociation.ta.mjs";
import { MMEIdentifierAssociation, _decode_MMEIdentifierAssociation, _encode_MMEIdentifierAssociation } from "../TS33128Payloads/MMEIdentifierAssociation.ta.mjs";
// export { MMEIdentifierAssociation, _decode_MMEIdentifierAssociation, _encode_MMEIdentifierAssociation } from "../TS33128Payloads/MMEIdentifierAssociation.ta.mjs";
import { SMFPDUtoMAPDUSessionModification, _decode_SMFPDUtoMAPDUSessionModification, _encode_SMFPDUtoMAPDUSessionModification } from "../TS33128Payloads/SMFPDUtoMAPDUSessionModification.ta.mjs";
// export { SMFPDUtoMAPDUSessionModification, _decode_SMFPDUtoMAPDUSessionModification, _encode_SMFPDUtoMAPDUSessionModification } from "../TS33128Payloads/SMFPDUtoMAPDUSessionModification.ta.mjs";
import { NEFPDUSessionEstablishment, _decode_NEFPDUSessionEstablishment, _encode_NEFPDUSessionEstablishment } from "../TS33128Payloads/NEFPDUSessionEstablishment.ta.mjs";
// export { NEFPDUSessionEstablishment, _decode_NEFPDUSessionEstablishment, _encode_NEFPDUSessionEstablishment } from "../TS33128Payloads/NEFPDUSessionEstablishment.ta.mjs";
import { NEFPDUSessionModification, _decode_NEFPDUSessionModification, _encode_NEFPDUSessionModification } from "../TS33128Payloads/NEFPDUSessionModification.ta.mjs";
// export { NEFPDUSessionModification, _decode_NEFPDUSessionModification, _encode_NEFPDUSessionModification } from "../TS33128Payloads/NEFPDUSessionModification.ta.mjs";
import { NEFPDUSessionRelease, _decode_NEFPDUSessionRelease, _encode_NEFPDUSessionRelease } from "../TS33128Payloads/NEFPDUSessionRelease.ta.mjs";
// export { NEFPDUSessionRelease, _decode_NEFPDUSessionRelease, _encode_NEFPDUSessionRelease } from "../TS33128Payloads/NEFPDUSessionRelease.ta.mjs";
import { NEFUnsuccessfulProcedure, _decode_NEFUnsuccessfulProcedure, _encode_NEFUnsuccessfulProcedure } from "../TS33128Payloads/NEFUnsuccessfulProcedure.ta.mjs";
// export { NEFUnsuccessfulProcedure, _decode_NEFUnsuccessfulProcedure, _encode_NEFUnsuccessfulProcedure } from "../TS33128Payloads/NEFUnsuccessfulProcedure.ta.mjs";
import { NEFStartOfInterceptionWithEstablishedPDUSession, _decode_NEFStartOfInterceptionWithEstablishedPDUSession, _encode_NEFStartOfInterceptionWithEstablishedPDUSession } from "../TS33128Payloads/NEFStartOfInterceptionWithEstablishedPDUSession.ta.mjs";
// export { NEFStartOfInterceptionWithEstablishedPDUSession, _decode_NEFStartOfInterceptionWithEstablishedPDUSession, _encode_NEFStartOfInterceptionWithEstablishedPDUSession } from "../TS33128Payloads/NEFStartOfInterceptionWithEstablishedPDUSession.ta.mjs";
import { NEFDeviceTrigger, _decode_NEFDeviceTrigger, _encode_NEFDeviceTrigger } from "../TS33128Payloads/NEFDeviceTrigger.ta.mjs";
// export { NEFDeviceTrigger, _decode_NEFDeviceTrigger, _encode_NEFDeviceTrigger } from "../TS33128Payloads/NEFDeviceTrigger.ta.mjs";
import { NEFDeviceTriggerReplace, _decode_NEFDeviceTriggerReplace, _encode_NEFDeviceTriggerReplace } from "../TS33128Payloads/NEFDeviceTriggerReplace.ta.mjs";
// export { NEFDeviceTriggerReplace, _decode_NEFDeviceTriggerReplace, _encode_NEFDeviceTriggerReplace } from "../TS33128Payloads/NEFDeviceTriggerReplace.ta.mjs";
import { NEFDeviceTriggerCancellation, _decode_NEFDeviceTriggerCancellation, _encode_NEFDeviceTriggerCancellation } from "../TS33128Payloads/NEFDeviceTriggerCancellation.ta.mjs";
// export { NEFDeviceTriggerCancellation, _decode_NEFDeviceTriggerCancellation, _encode_NEFDeviceTriggerCancellation } from "../TS33128Payloads/NEFDeviceTriggerCancellation.ta.mjs";
import { NEFDeviceTriggerReportNotify, _decode_NEFDeviceTriggerReportNotify, _encode_NEFDeviceTriggerReportNotify } from "../TS33128Payloads/NEFDeviceTriggerReportNotify.ta.mjs";
// export { NEFDeviceTriggerReportNotify, _decode_NEFDeviceTriggerReportNotify, _encode_NEFDeviceTriggerReportNotify } from "../TS33128Payloads/NEFDeviceTriggerReportNotify.ta.mjs";
import { NEFMSISDNLessMOSMS, _decode_NEFMSISDNLessMOSMS, _encode_NEFMSISDNLessMOSMS } from "../TS33128Payloads/NEFMSISDNLessMOSMS.ta.mjs";
// export { NEFMSISDNLessMOSMS, _decode_NEFMSISDNLessMOSMS, _encode_NEFMSISDNLessMOSMS } from "../TS33128Payloads/NEFMSISDNLessMOSMS.ta.mjs";
import { NEFExpectedUEBehaviourUpdate, _decode_NEFExpectedUEBehaviourUpdate, _encode_NEFExpectedUEBehaviourUpdate } from "../TS33128Payloads/NEFExpectedUEBehaviourUpdate.ta.mjs";
// export { NEFExpectedUEBehaviourUpdate, _decode_NEFExpectedUEBehaviourUpdate, _encode_NEFExpectedUEBehaviourUpdate } from "../TS33128Payloads/NEFExpectedUEBehaviourUpdate.ta.mjs";
import { SCEFPDNConnectionEstablishment, _decode_SCEFPDNConnectionEstablishment, _encode_SCEFPDNConnectionEstablishment } from "../TS33128Payloads/SCEFPDNConnectionEstablishment.ta.mjs";
// export { SCEFPDNConnectionEstablishment, _decode_SCEFPDNConnectionEstablishment, _encode_SCEFPDNConnectionEstablishment } from "../TS33128Payloads/SCEFPDNConnectionEstablishment.ta.mjs";
import { SCEFPDNConnectionUpdate, _decode_SCEFPDNConnectionUpdate, _encode_SCEFPDNConnectionUpdate } from "../TS33128Payloads/SCEFPDNConnectionUpdate.ta.mjs";
// export { SCEFPDNConnectionUpdate, _decode_SCEFPDNConnectionUpdate, _encode_SCEFPDNConnectionUpdate } from "../TS33128Payloads/SCEFPDNConnectionUpdate.ta.mjs";
import { SCEFPDNConnectionRelease, _decode_SCEFPDNConnectionRelease, _encode_SCEFPDNConnectionRelease } from "../TS33128Payloads/SCEFPDNConnectionRelease.ta.mjs";
// export { SCEFPDNConnectionRelease, _decode_SCEFPDNConnectionRelease, _encode_SCEFPDNConnectionRelease } from "../TS33128Payloads/SCEFPDNConnectionRelease.ta.mjs";
import { SCEFUnsuccessfulProcedure, _decode_SCEFUnsuccessfulProcedure, _encode_SCEFUnsuccessfulProcedure } from "../TS33128Payloads/SCEFUnsuccessfulProcedure.ta.mjs";
// export { SCEFUnsuccessfulProcedure, _decode_SCEFUnsuccessfulProcedure, _encode_SCEFUnsuccessfulProcedure } from "../TS33128Payloads/SCEFUnsuccessfulProcedure.ta.mjs";
import { SCEFStartOfInterceptionWithEstablishedPDNConnection, _decode_SCEFStartOfInterceptionWithEstablishedPDNConnection, _encode_SCEFStartOfInterceptionWithEstablishedPDNConnection } from "../TS33128Payloads/SCEFStartOfInterceptionWithEstablishedPDNConnection.ta.mjs";
// export { SCEFStartOfInterceptionWithEstablishedPDNConnection, _decode_SCEFStartOfInterceptionWithEstablishedPDNConnection, _encode_SCEFStartOfInterceptionWithEstablishedPDNConnection } from "../TS33128Payloads/SCEFStartOfInterceptionWithEstablishedPDNConnection.ta.mjs";
import { SCEFDeviceTrigger, _decode_SCEFDeviceTrigger, _encode_SCEFDeviceTrigger } from "../TS33128Payloads/SCEFDeviceTrigger.ta.mjs";
// export { SCEFDeviceTrigger, _decode_SCEFDeviceTrigger, _encode_SCEFDeviceTrigger } from "../TS33128Payloads/SCEFDeviceTrigger.ta.mjs";
import { SCEFDeviceTriggerReplace, _decode_SCEFDeviceTriggerReplace, _encode_SCEFDeviceTriggerReplace } from "../TS33128Payloads/SCEFDeviceTriggerReplace.ta.mjs";
// export { SCEFDeviceTriggerReplace, _decode_SCEFDeviceTriggerReplace, _encode_SCEFDeviceTriggerReplace } from "../TS33128Payloads/SCEFDeviceTriggerReplace.ta.mjs";
import { SCEFDeviceTriggerCancellation, _decode_SCEFDeviceTriggerCancellation, _encode_SCEFDeviceTriggerCancellation } from "../TS33128Payloads/SCEFDeviceTriggerCancellation.ta.mjs";
// export { SCEFDeviceTriggerCancellation, _decode_SCEFDeviceTriggerCancellation, _encode_SCEFDeviceTriggerCancellation } from "../TS33128Payloads/SCEFDeviceTriggerCancellation.ta.mjs";
import { SCEFDeviceTriggerReportNotify, _decode_SCEFDeviceTriggerReportNotify, _encode_SCEFDeviceTriggerReportNotify } from "../TS33128Payloads/SCEFDeviceTriggerReportNotify.ta.mjs";
// export { SCEFDeviceTriggerReportNotify, _decode_SCEFDeviceTriggerReportNotify, _encode_SCEFDeviceTriggerReportNotify } from "../TS33128Payloads/SCEFDeviceTriggerReportNotify.ta.mjs";
import { SCEFMSISDNLessMOSMS, _decode_SCEFMSISDNLessMOSMS, _encode_SCEFMSISDNLessMOSMS } from "../TS33128Payloads/SCEFMSISDNLessMOSMS.ta.mjs";
// export { SCEFMSISDNLessMOSMS, _decode_SCEFMSISDNLessMOSMS, _encode_SCEFMSISDNLessMOSMS } from "../TS33128Payloads/SCEFMSISDNLessMOSMS.ta.mjs";
import { SCEFCommunicationPatternUpdate, _decode_SCEFCommunicationPatternUpdate, _encode_SCEFCommunicationPatternUpdate } from "../TS33128Payloads/SCEFCommunicationPatternUpdate.ta.mjs";
// export { SCEFCommunicationPatternUpdate, _decode_SCEFCommunicationPatternUpdate, _encode_SCEFCommunicationPatternUpdate } from "../TS33128Payloads/SCEFCommunicationPatternUpdate.ta.mjs";
import { MMEAttach, _decode_MMEAttach, _encode_MMEAttach } from "../TS33128Payloads/MMEAttach.ta.mjs";
// export { MMEAttach, _decode_MMEAttach, _encode_MMEAttach } from "../TS33128Payloads/MMEAttach.ta.mjs";
import { MMEDetach, _decode_MMEDetach, _encode_MMEDetach } from "../TS33128Payloads/MMEDetach.ta.mjs";
// export { MMEDetach, _decode_MMEDetach, _encode_MMEDetach } from "../TS33128Payloads/MMEDetach.ta.mjs";
import { MMELocationUpdate, _decode_MMELocationUpdate, _encode_MMELocationUpdate } from "../TS33128Payloads/MMELocationUpdate.ta.mjs";
// export { MMELocationUpdate, _decode_MMELocationUpdate, _encode_MMELocationUpdate } from "../TS33128Payloads/MMELocationUpdate.ta.mjs";
import { MMEStartOfInterceptionWithEPSAttachedUE, _decode_MMEStartOfInterceptionWithEPSAttachedUE, _encode_MMEStartOfInterceptionWithEPSAttachedUE } from "../TS33128Payloads/MMEStartOfInterceptionWithEPSAttachedUE.ta.mjs";
// export { MMEStartOfInterceptionWithEPSAttachedUE, _decode_MMEStartOfInterceptionWithEPSAttachedUE, _encode_MMEStartOfInterceptionWithEPSAttachedUE } from "../TS33128Payloads/MMEStartOfInterceptionWithEPSAttachedUE.ta.mjs";
import { MMEUnsuccessfulProcedure, _decode_MMEUnsuccessfulProcedure, _encode_MMEUnsuccessfulProcedure } from "../TS33128Payloads/MMEUnsuccessfulProcedure.ta.mjs";
// export { MMEUnsuccessfulProcedure, _decode_MMEUnsuccessfulProcedure, _encode_MMEUnsuccessfulProcedure } from "../TS33128Payloads/MMEUnsuccessfulProcedure.ta.mjs";
import { AAnFAnchorKeyRegister, _decode_AAnFAnchorKeyRegister, _encode_AAnFAnchorKeyRegister } from "../TS33128Payloads/AAnFAnchorKeyRegister.ta.mjs";
// export { AAnFAnchorKeyRegister, _decode_AAnFAnchorKeyRegister, _encode_AAnFAnchorKeyRegister } from "../TS33128Payloads/AAnFAnchorKeyRegister.ta.mjs";
import { AAnFKAKMAApplicationKeyGet, _decode_AAnFKAKMAApplicationKeyGet, _encode_AAnFKAKMAApplicationKeyGet } from "../TS33128Payloads/AAnFKAKMAApplicationKeyGet.ta.mjs";
// export { AAnFKAKMAApplicationKeyGet, _decode_AAnFKAKMAApplicationKeyGet, _encode_AAnFKAKMAApplicationKeyGet } from "../TS33128Payloads/AAnFKAKMAApplicationKeyGet.ta.mjs";
import { AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, _decode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, _encode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial } from "../TS33128Payloads/AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial.ta.mjs";
// export { AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, _decode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, _encode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial } from "../TS33128Payloads/AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial.ta.mjs";
import { AAnFAKMAContextRemovalRecord, _decode_AAnFAKMAContextRemovalRecord, _encode_AAnFAKMAContextRemovalRecord } from "../TS33128Payloads/AAnFAKMAContextRemovalRecord.ta.mjs";
// export { AAnFAKMAContextRemovalRecord, _decode_AAnFAKMAContextRemovalRecord, _encode_AAnFAKMAContextRemovalRecord } from "../TS33128Payloads/AAnFAKMAContextRemovalRecord.ta.mjs";
import { AFAKMAApplicationKeyRefresh, _decode_AFAKMAApplicationKeyRefresh, _encode_AFAKMAApplicationKeyRefresh } from "../TS33128Payloads/AFAKMAApplicationKeyRefresh.ta.mjs";
// export { AFAKMAApplicationKeyRefresh, _decode_AFAKMAApplicationKeyRefresh, _encode_AFAKMAApplicationKeyRefresh } from "../TS33128Payloads/AFAKMAApplicationKeyRefresh.ta.mjs";
import { AFStartOfInterceptWithEstablishedAKMAApplicationKey, _decode_AFStartOfInterceptWithEstablishedAKMAApplicationKey, _encode_AFStartOfInterceptWithEstablishedAKMAApplicationKey } from "../TS33128Payloads/AFStartOfInterceptWithEstablishedAKMAApplicationKey.ta.mjs";
// export { AFStartOfInterceptWithEstablishedAKMAApplicationKey, _decode_AFStartOfInterceptWithEstablishedAKMAApplicationKey, _encode_AFStartOfInterceptWithEstablishedAKMAApplicationKey } from "../TS33128Payloads/AFStartOfInterceptWithEstablishedAKMAApplicationKey.ta.mjs";
import { AFAuxiliarySecurityParameterEstablishment, _decode_AFAuxiliarySecurityParameterEstablishment, _encode_AFAuxiliarySecurityParameterEstablishment } from "../TS33128Payloads/AFAuxiliarySecurityParameterEstablishment.ta.mjs";
// export { AFAuxiliarySecurityParameterEstablishment, _decode_AFAuxiliarySecurityParameterEstablishment, _encode_AFAuxiliarySecurityParameterEstablishment } from "../TS33128Payloads/AFAuxiliarySecurityParameterEstablishment.ta.mjs";
import { AFApplicationKeyRemoval, _decode_AFApplicationKeyRemoval, _encode_AFApplicationKeyRemoval } from "../TS33128Payloads/AFApplicationKeyRemoval.ta.mjs";
// export { AFApplicationKeyRemoval, _decode_AFApplicationKeyRemoval, _encode_AFApplicationKeyRemoval } from "../TS33128Payloads/AFApplicationKeyRemoval.ta.mjs";
import { SeparatedLocationReporting, _decode_SeparatedLocationReporting, _encode_SeparatedLocationReporting } from "../TS33128Payloads/SeparatedLocationReporting.ta.mjs";
// export { SeparatedLocationReporting, _decode_SeparatedLocationReporting, _encode_SeparatedLocationReporting } from "../TS33128Payloads/SeparatedLocationReporting.ta.mjs";
import { STIRSHAKENSignatureGeneration, _decode_STIRSHAKENSignatureGeneration, _encode_STIRSHAKENSignatureGeneration } from "../TS33128Payloads/STIRSHAKENSignatureGeneration.ta.mjs";
// export { STIRSHAKENSignatureGeneration, _decode_STIRSHAKENSignatureGeneration, _encode_STIRSHAKENSignatureGeneration } from "../TS33128Payloads/STIRSHAKENSignatureGeneration.ta.mjs";
import { STIRSHAKENSignatureValidation, _decode_STIRSHAKENSignatureValidation, _encode_STIRSHAKENSignatureValidation } from "../TS33128Payloads/STIRSHAKENSignatureValidation.ta.mjs";
// export { STIRSHAKENSignatureValidation, _decode_STIRSHAKENSignatureValidation, _encode_STIRSHAKENSignatureValidation } from "../TS33128Payloads/STIRSHAKENSignatureValidation.ta.mjs";
import { IMSMessage, _decode_IMSMessage, _encode_IMSMessage } from "../TS33128Payloads/IMSMessage.ta.mjs";
// export { IMSMessage, _decode_IMSMessage, _encode_IMSMessage } from "../TS33128Payloads/IMSMessage.ta.mjs";
import { StartOfInterceptionForActiveIMSSession, _decode_StartOfInterceptionForActiveIMSSession, _encode_StartOfInterceptionForActiveIMSSession } from "../TS33128Payloads/StartOfInterceptionForActiveIMSSession.ta.mjs";
// export { StartOfInterceptionForActiveIMSSession, _decode_StartOfInterceptionForActiveIMSSession, _encode_StartOfInterceptionForActiveIMSSession } from "../TS33128Payloads/StartOfInterceptionForActiveIMSSession.ta.mjs";
import { IMSCCUnavailable, _decode_IMSCCUnavailable, _encode_IMSCCUnavailable } from "../TS33128Payloads/IMSCCUnavailable.ta.mjs";
// export { IMSCCUnavailable, _decode_IMSCCUnavailable, _encode_IMSCCUnavailable } from "../TS33128Payloads/IMSCCUnavailable.ta.mjs";
import { UDMLocationInformationResult, _decode_UDMLocationInformationResult, _encode_UDMLocationInformationResult } from "../TS33128Payloads/UDMLocationInformationResult.ta.mjs";
// export { UDMLocationInformationResult, _decode_UDMLocationInformationResult, _encode_UDMLocationInformationResult } from "../TS33128Payloads/UDMLocationInformationResult.ta.mjs";
import { UDMUEInformationResponse, _decode_UDMUEInformationResponse, _encode_UDMUEInformationResponse } from "../TS33128Payloads/UDMUEInformationResponse.ta.mjs";
// export { UDMUEInformationResponse, _decode_UDMUEInformationResponse, _encode_UDMUEInformationResponse } from "../TS33128Payloads/UDMUEInformationResponse.ta.mjs";
import { UDMUEAuthenticationResponse, _decode_UDMUEAuthenticationResponse, _encode_UDMUEAuthenticationResponse } from "../TS33128Payloads/UDMUEAuthenticationResponse.ta.mjs";
// export { UDMUEAuthenticationResponse, _decode_UDMUEAuthenticationResponse, _encode_UDMUEAuthenticationResponse } from "../TS33128Payloads/UDMUEAuthenticationResponse.ta.mjs";
import { AMFPositioningInfoTransfer, _decode_AMFPositioningInfoTransfer, _encode_AMFPositioningInfoTransfer } from "../TS33128Payloads/AMFPositioningInfoTransfer.ta.mjs";
// export { AMFPositioningInfoTransfer, _decode_AMFPositioningInfoTransfer, _encode_AMFPositioningInfoTransfer } from "../TS33128Payloads/AMFPositioningInfoTransfer.ta.mjs";
import { MMEPositioningInfoTransfer, _decode_MMEPositioningInfoTransfer, _encode_MMEPositioningInfoTransfer } from "../TS33128Payloads/MMEPositioningInfoTransfer.ta.mjs";
// export { MMEPositioningInfoTransfer, _decode_MMEPositioningInfoTransfer, _encode_MMEPositioningInfoTransfer } from "../TS33128Payloads/MMEPositioningInfoTransfer.ta.mjs";
import { AMFRANHandoverCommand, _decode_AMFRANHandoverCommand, _encode_AMFRANHandoverCommand } from "../TS33128Payloads/AMFRANHandoverCommand.ta.mjs";
// export { AMFRANHandoverCommand, _decode_AMFRANHandoverCommand, _encode_AMFRANHandoverCommand } from "../TS33128Payloads/AMFRANHandoverCommand.ta.mjs";
import { AMFRANHandoverRequest, _decode_AMFRANHandoverRequest, _encode_AMFRANHandoverRequest } from "../TS33128Payloads/AMFRANHandoverRequest.ta.mjs";
// export { AMFRANHandoverRequest, _decode_AMFRANHandoverRequest, _encode_AMFRANHandoverRequest } from "../TS33128Payloads/AMFRANHandoverRequest.ta.mjs";
import { EESEECRegistration, _decode_EESEECRegistration, _encode_EESEECRegistration } from "../TS33128Payloads/EESEECRegistration.ta.mjs";
// export { EESEECRegistration, _decode_EESEECRegistration, _encode_EESEECRegistration } from "../TS33128Payloads/EESEECRegistration.ta.mjs";
import { EESEASDiscovery, _decode_EESEASDiscovery, _encode_EESEASDiscovery } from "../TS33128Payloads/EESEASDiscovery.ta.mjs";
// export { EESEASDiscovery, _decode_EESEASDiscovery, _encode_EESEASDiscovery } from "../TS33128Payloads/EESEASDiscovery.ta.mjs";
import { EESEASDiscoverySubscription, _decode_EESEASDiscoverySubscription, _encode_EESEASDiscoverySubscription } from "../TS33128Payloads/EESEASDiscoverySubscription.ta.mjs";
// export { EESEASDiscoverySubscription, _decode_EESEASDiscoverySubscription, _encode_EESEASDiscoverySubscription } from "../TS33128Payloads/EESEASDiscoverySubscription.ta.mjs";
import { EESEASDiscoveryNotification, _decode_EESEASDiscoveryNotification, _encode_EESEASDiscoveryNotification } from "../TS33128Payloads/EESEASDiscoveryNotification.ta.mjs";
// export { EESEASDiscoveryNotification, _decode_EESEASDiscoveryNotification, _encode_EESEASDiscoveryNotification } from "../TS33128Payloads/EESEASDiscoveryNotification.ta.mjs";
import { EESAppContextRelocation, _decode_EESAppContextRelocation, _encode_EESAppContextRelocation } from "../TS33128Payloads/EESAppContextRelocation.ta.mjs";
// export { EESAppContextRelocation, _decode_EESAppContextRelocation, _encode_EESAppContextRelocation } from "../TS33128Payloads/EESAppContextRelocation.ta.mjs";
import { EESACRSubscription, _decode_EESACRSubscription, _encode_EESACRSubscription } from "../TS33128Payloads/EESACRSubscription.ta.mjs";
// export { EESACRSubscription, _decode_EESACRSubscription, _encode_EESACRSubscription } from "../TS33128Payloads/EESACRSubscription.ta.mjs";
import { EESACRNotification, _decode_EESACRNotification, _encode_EESACRNotification } from "../TS33128Payloads/EESACRNotification.ta.mjs";
// export { EESACRNotification, _decode_EESACRNotification, _encode_EESACRNotification } from "../TS33128Payloads/EESACRNotification.ta.mjs";
import { EESEECContextRelocation, _decode_EESEECContextRelocation, _encode_EESEECContextRelocation } from "../TS33128Payloads/EESEECContextRelocation.ta.mjs";
// export { EESEECContextRelocation, _decode_EESEECContextRelocation, _encode_EESEECContextRelocation } from "../TS33128Payloads/EESEECContextRelocation.ta.mjs";
import { EESStartOfInterceptionWithRegisteredEEC, _decode_EESStartOfInterceptionWithRegisteredEEC, _encode_EESStartOfInterceptionWithRegisteredEEC } from "../TS33128Payloads/EESStartOfInterceptionWithRegisteredEEC.ta.mjs";
// export { EESStartOfInterceptionWithRegisteredEEC, _decode_EESStartOfInterceptionWithRegisteredEEC, _encode_EESStartOfInterceptionWithRegisteredEEC } from "../TS33128Payloads/EESStartOfInterceptionWithRegisteredEEC.ta.mjs";
import { UDMStartOfInterceptionWithRegisteredTarget, _decode_UDMStartOfInterceptionWithRegisteredTarget, _encode_UDMStartOfInterceptionWithRegisteredTarget } from "../TS33128Payloads/UDMStartOfInterceptionWithRegisteredTarget.ta.mjs";
// export { UDMStartOfInterceptionWithRegisteredTarget, _decode_UDMStartOfInterceptionWithRegisteredTarget, _encode_UDMStartOfInterceptionWithRegisteredTarget } from "../TS33128Payloads/UDMStartOfInterceptionWithRegisteredTarget.ta.mjs";
import { FiveGMSAFServiceAccessInformation, _decode_FiveGMSAFServiceAccessInformation, _encode_FiveGMSAFServiceAccessInformation } from "../TS33128Payloads/FiveGMSAFServiceAccessInformation.ta.mjs";
// export { FiveGMSAFServiceAccessInformation, _decode_FiveGMSAFServiceAccessInformation, _encode_FiveGMSAFServiceAccessInformation } from "../TS33128Payloads/FiveGMSAFServiceAccessInformation.ta.mjs";
import { FiveGMSAFConsumptionReporting, _decode_FiveGMSAFConsumptionReporting, _encode_FiveGMSAFConsumptionReporting } from "../TS33128Payloads/FiveGMSAFConsumptionReporting.ta.mjs";
// export { FiveGMSAFConsumptionReporting, _decode_FiveGMSAFConsumptionReporting, _encode_FiveGMSAFConsumptionReporting } from "../TS33128Payloads/FiveGMSAFConsumptionReporting.ta.mjs";
import { FiveGMSAFDynamicPolicyInvocation, _decode_FiveGMSAFDynamicPolicyInvocation, _encode_FiveGMSAFDynamicPolicyInvocation } from "../TS33128Payloads/FiveGMSAFDynamicPolicyInvocation.ta.mjs";
// export { FiveGMSAFDynamicPolicyInvocation, _decode_FiveGMSAFDynamicPolicyInvocation, _encode_FiveGMSAFDynamicPolicyInvocation } from "../TS33128Payloads/FiveGMSAFDynamicPolicyInvocation.ta.mjs";
import { FiveGMSAFMetricsReporting, _decode_FiveGMSAFMetricsReporting, _encode_FiveGMSAFMetricsReporting } from "../TS33128Payloads/FiveGMSAFMetricsReporting.ta.mjs";
// export { FiveGMSAFMetricsReporting, _decode_FiveGMSAFMetricsReporting, _encode_FiveGMSAFMetricsReporting } from "../TS33128Payloads/FiveGMSAFMetricsReporting.ta.mjs";
import { FiveGMSAFNetworkAssistance, _decode_FiveGMSAFNetworkAssistance, _encode_FiveGMSAFNetworkAssistance } from "../TS33128Payloads/FiveGMSAFNetworkAssistance.ta.mjs";
// export { FiveGMSAFNetworkAssistance, _decode_FiveGMSAFNetworkAssistance, _encode_FiveGMSAFNetworkAssistance } from "../TS33128Payloads/FiveGMSAFNetworkAssistance.ta.mjs";
import { FiveGMSAFUnsuccessfulProcedure, _decode_FiveGMSAFUnsuccessfulProcedure, _encode_FiveGMSAFUnsuccessfulProcedure } from "../TS33128Payloads/FiveGMSAFUnsuccessfulProcedure.ta.mjs";
// export { FiveGMSAFUnsuccessfulProcedure, _decode_FiveGMSAFUnsuccessfulProcedure, _encode_FiveGMSAFUnsuccessfulProcedure } from "../TS33128Payloads/FiveGMSAFUnsuccessfulProcedure.ta.mjs";
import { FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, _decode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, _encode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE } from "../TS33128Payloads/FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE.ta.mjs";
// export { FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, _decode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, _encode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE } from "../TS33128Payloads/FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE.ta.mjs";
import { AMFUEConfigurationUpdate, _decode_AMFUEConfigurationUpdate, _encode_AMFUEConfigurationUpdate } from "../TS33128Payloads/AMFUEConfigurationUpdate.ta.mjs";
// export { AMFUEConfigurationUpdate, _decode_AMFUEConfigurationUpdate, _encode_AMFUEConfigurationUpdate } from "../TS33128Payloads/AMFUEConfigurationUpdate.ta.mjs";
import { HSSServingSystemMessage, _decode_HSSServingSystemMessage, _encode_HSSServingSystemMessage } from "../TS33128Payloads/HSSServingSystemMessage.ta.mjs";
// export { HSSServingSystemMessage, _decode_HSSServingSystemMessage, _encode_HSSServingSystemMessage } from "../TS33128Payloads/HSSServingSystemMessage.ta.mjs";
import { HSSStartOfInterceptionWithRegisteredTarget, _decode_HSSStartOfInterceptionWithRegisteredTarget, _encode_HSSStartOfInterceptionWithRegisteredTarget } from "../TS33128Payloads/HSSStartOfInterceptionWithRegisteredTarget.ta.mjs";
// export { HSSStartOfInterceptionWithRegisteredTarget, _decode_HSSStartOfInterceptionWithRegisteredTarget, _encode_HSSStartOfInterceptionWithRegisteredTarget } from "../TS33128Payloads/HSSStartOfInterceptionWithRegisteredTarget.ta.mjs";
import { NEFAFSessionWithQoSProvision, _decode_NEFAFSessionWithQoSProvision, _encode_NEFAFSessionWithQoSProvision } from "../TS33128Payloads/NEFAFSessionWithQoSProvision.ta.mjs";
// export { NEFAFSessionWithQoSProvision, _decode_NEFAFSessionWithQoSProvision, _encode_NEFAFSessionWithQoSProvision } from "../TS33128Payloads/NEFAFSessionWithQoSProvision.ta.mjs";
import { NEFAFSessionWithQoSNotification, _decode_NEFAFSessionWithQoSNotification, _encode_NEFAFSessionWithQoSNotification } from "../TS33128Payloads/NEFAFSessionWithQoSNotification.ta.mjs";
// export { NEFAFSessionWithQoSNotification, _decode_NEFAFSessionWithQoSNotification, _encode_NEFAFSessionWithQoSNotification } from "../TS33128Payloads/NEFAFSessionWithQoSNotification.ta.mjs";
import { SCEFASSessionWithQoSProvision, _decode_SCEFASSessionWithQoSProvision, _encode_SCEFASSessionWithQoSProvision } from "../TS33128Payloads/SCEFASSessionWithQoSProvision.ta.mjs";
// export { SCEFASSessionWithQoSProvision, _decode_SCEFASSessionWithQoSProvision, _encode_SCEFASSessionWithQoSProvision } from "../TS33128Payloads/SCEFASSessionWithQoSProvision.ta.mjs";
import { SCEFASSessionWithQoSNotification, _decode_SCEFASSessionWithQoSNotification, _encode_SCEFASSessionWithQoSNotification } from "../TS33128Payloads/SCEFASSessionWithQoSNotification.ta.mjs";
// export { SCEFASSessionWithQoSNotification, _decode_SCEFASSessionWithQoSNotification, _encode_SCEFASSessionWithQoSNotification } from "../TS33128Payloads/SCEFASSessionWithQoSNotification.ta.mjs";
import { AMFRANTraceReport, _decode_AMFRANTraceReport, _encode_AMFRANTraceReport } from "../TS33128Payloads/AMFRANTraceReport.ta.mjs";
// export { AMFRANTraceReport, _decode_AMFRANTraceReport, _encode_AMFRANTraceReport } from "../TS33128Payloads/AMFRANTraceReport.ta.mjs";
import { RCSRegistration, _decode_RCSRegistration, _encode_RCSRegistration } from "../TS33128Payloads/RCSRegistration.ta.mjs";
// export { RCSRegistration, _decode_RCSRegistration, _encode_RCSRegistration } from "../TS33128Payloads/RCSRegistration.ta.mjs";
import { RCSMessage, _decode_RCSMessage, _encode_RCSMessage } from "../TS33128Payloads/RCSMessage.ta.mjs";
// export { RCSMessage, _decode_RCSMessage, _encode_RCSMessage } from "../TS33128Payloads/RCSMessage.ta.mjs";
import { RCSCapabilityDiscovery, _decode_RCSCapabilityDiscovery, _encode_RCSCapabilityDiscovery } from "../TS33128Payloads/RCSCapabilityDiscovery.ta.mjs";
// export { RCSCapabilityDiscovery, _decode_RCSCapabilityDiscovery, _encode_RCSCapabilityDiscovery } from "../TS33128Payloads/RCSCapabilityDiscovery.ta.mjs";
import { RCSSessionEstablishment, _decode_RCSSessionEstablishment, _encode_RCSSessionEstablishment } from "../TS33128Payloads/RCSSessionEstablishment.ta.mjs";
// export { RCSSessionEstablishment, _decode_RCSSessionEstablishment, _encode_RCSSessionEstablishment } from "../TS33128Payloads/RCSSessionEstablishment.ta.mjs";
import { RCSSessionModification, _decode_RCSSessionModification, _encode_RCSSessionModification } from "../TS33128Payloads/RCSSessionModification.ta.mjs";
// export { RCSSessionModification, _decode_RCSSessionModification, _encode_RCSSessionModification } from "../TS33128Payloads/RCSSessionModification.ta.mjs";
import { RCSSessionRelease, _decode_RCSSessionRelease, _encode_RCSSessionRelease } from "../TS33128Payloads/RCSSessionRelease.ta.mjs";
// export { RCSSessionRelease, _decode_RCSSessionRelease, _encode_RCSSessionRelease } from "../TS33128Payloads/RCSSessionRelease.ta.mjs";
import { AMFUEPolicyTransfer, _decode_AMFUEPolicyTransfer, _encode_AMFUEPolicyTransfer } from "../TS33128Payloads/AMFUEPolicyTransfer.ta.mjs";
// export { AMFUEPolicyTransfer, _decode_AMFUEPolicyTransfer, _encode_AMFUEPolicyTransfer } from "../TS33128Payloads/AMFUEPolicyTransfer.ta.mjs";
import { AMFUEServiceAccept, _decode_AMFUEServiceAccept, _encode_AMFUEServiceAccept } from "../TS33128Payloads/AMFUEServiceAccept.ta.mjs";
// export { AMFUEServiceAccept, _decode_AMFUEServiceAccept, _encode_AMFUEServiceAccept } from "../TS33128Payloads/AMFUEServiceAccept.ta.mjs";
import { EPSRANHandoverCommand, _decode_EPSRANHandoverCommand, _encode_EPSRANHandoverCommand } from "../TS33128Payloads/EPSRANHandoverCommand.ta.mjs";
// export { EPSRANHandoverCommand, _decode_EPSRANHandoverCommand, _encode_EPSRANHandoverCommand } from "../TS33128Payloads/EPSRANHandoverCommand.ta.mjs";
import { EPSRANHandoverRequest, _decode_EPSRANHandoverRequest, _encode_EPSRANHandoverRequest } from "../TS33128Payloads/EPSRANHandoverRequest.ta.mjs";
// export { EPSRANHandoverRequest, _decode_EPSRANHandoverRequest, _encode_EPSRANHandoverRequest } from "../TS33128Payloads/EPSRANHandoverRequest.ta.mjs";
import { MMERANTraceReport, _decode_MMERANTraceReport, _encode_MMERANTraceReport } from "../TS33128Payloads/MMERANTraceReport.ta.mjs";
// export { MMERANTraceReport, _decode_MMERANTraceReport, _encode_MMERANTraceReport } from "../TS33128Payloads/MMERANTraceReport.ta.mjs";
import { MMEUEServiceAccept, _decode_MMEUEServiceAccept, _encode_MMEUEServiceAccept } from "../TS33128Payloads/MMEUEServiceAccept.ta.mjs";
// export { MMEUEServiceAccept, _decode_MMEUEServiceAccept, _encode_MMEUEServiceAccept } from "../TS33128Payloads/MMEUEServiceAccept.ta.mjs";
import { NWDAFEventsSubscription, _decode_NWDAFEventsSubscription, _encode_NWDAFEventsSubscription } from "../TS33128Payloads/NWDAFEventsSubscription.ta.mjs";
// export { NWDAFEventsSubscription, _decode_NWDAFEventsSubscription, _encode_NWDAFEventsSubscription } from "../TS33128Payloads/NWDAFEventsSubscription.ta.mjs";
import { NWDAFEventsNotification, _decode_NWDAFEventsNotification, _encode_NWDAFEventsNotification } from "../TS33128Payloads/NWDAFEventsNotification.ta.mjs";
// export { NWDAFEventsNotification, _decode_NWDAFEventsNotification, _encode_NWDAFEventsNotification } from "../TS33128Payloads/NWDAFEventsNotification.ta.mjs";
import { NWDAFAnalyticsInfoQuery, _decode_NWDAFAnalyticsInfoQuery, _encode_NWDAFAnalyticsInfoQuery } from "../TS33128Payloads/NWDAFAnalyticsInfoQuery.ta.mjs";
// export { NWDAFAnalyticsInfoQuery, _decode_NWDAFAnalyticsInfoQuery, _encode_NWDAFAnalyticsInfoQuery } from "../TS33128Payloads/NWDAFAnalyticsInfoQuery.ta.mjs";
import { NWDAFRoamingAnalyticsSubscription, _decode_NWDAFRoamingAnalyticsSubscription, _encode_NWDAFRoamingAnalyticsSubscription } from "../TS33128Payloads/NWDAFRoamingAnalyticsSubscription.ta.mjs";
// export { NWDAFRoamingAnalyticsSubscription, _decode_NWDAFRoamingAnalyticsSubscription, _encode_NWDAFRoamingAnalyticsSubscription } from "../TS33128Payloads/NWDAFRoamingAnalyticsSubscription.ta.mjs";
import { NWDAFRoamingAnalyticsNotification, _decode_NWDAFRoamingAnalyticsNotification, _encode_NWDAFRoamingAnalyticsNotification } from "../TS33128Payloads/NWDAFRoamingAnalyticsNotification.ta.mjs";
// export { NWDAFRoamingAnalyticsNotification, _decode_NWDAFRoamingAnalyticsNotification, _encode_NWDAFRoamingAnalyticsNotification } from "../TS33128Payloads/NWDAFRoamingAnalyticsNotification.ta.mjs";
import { StartOfInterceptForRegisteredRCSUser, _decode_StartOfInterceptForRegisteredRCSUser, _encode_StartOfInterceptForRegisteredRCSUser } from "../TS33128Payloads/StartOfInterceptForRegisteredRCSUser.ta.mjs";
// export { StartOfInterceptForRegisteredRCSUser, _decode_StartOfInterceptForRegisteredRCSUser, _encode_StartOfInterceptForRegisteredRCSUser } from "../TS33128Payloads/StartOfInterceptForRegisteredRCSUser.ta.mjs";
import { StartOfInterceptWithEstablisedRCSSession, _decode_StartOfInterceptWithEstablisedRCSSession, _encode_StartOfInterceptWithEstablisedRCSSession } from "../TS33128Payloads/StartOfInterceptWithEstablisedRCSSession.ta.mjs";
// export { StartOfInterceptWithEstablisedRCSSession, _decode_StartOfInterceptWithEstablisedRCSSession, _encode_StartOfInterceptWithEstablisedRCSSession } from "../TS33128Payloads/StartOfInterceptWithEstablisedRCSSession.ta.mjs";
import { UDMProSeTargetIdentifierDeconcealment, _decode_UDMProSeTargetIdentifierDeconcealment, _encode_UDMProSeTargetIdentifierDeconcealment } from "../TS33128Payloads/UDMProSeTargetIdentifierDeconcealment.ta.mjs";
// export { UDMProSeTargetIdentifierDeconcealment, _decode_UDMProSeTargetIdentifierDeconcealment, _encode_UDMProSeTargetIdentifierDeconcealment } from "../TS33128Payloads/UDMProSeTargetIdentifierDeconcealment.ta.mjs";
import { UDMProSeTargetAuthentication, _decode_UDMProSeTargetAuthentication, _encode_UDMProSeTargetAuthentication } from "../TS33128Payloads/UDMProSeTargetAuthentication.ta.mjs";
// export { UDMProSeTargetAuthentication, _decode_UDMProSeTargetAuthentication, _encode_UDMProSeTargetAuthentication } from "../TS33128Payloads/UDMProSeTargetAuthentication.ta.mjs";
import { IMSDataChannelSetup, _decode_IMSDataChannelSetup, _encode_IMSDataChannelSetup } from "../TS33128Payloads/IMSDataChannelSetup.ta.mjs";
// export { IMSDataChannelSetup, _decode_IMSDataChannelSetup, _encode_IMSDataChannelSetup } from "../TS33128Payloads/IMSDataChannelSetup.ta.mjs";
import { IMSDataChannelModification, _decode_IMSDataChannelModification, _encode_IMSDataChannelModification } from "../TS33128Payloads/IMSDataChannelModification.ta.mjs";
// export { IMSDataChannelModification, _decode_IMSDataChannelModification, _encode_IMSDataChannelModification } from "../TS33128Payloads/IMSDataChannelModification.ta.mjs";
import { IMSDataChannelTermination, _decode_IMSDataChannelTermination, _encode_IMSDataChannelTermination } from "../TS33128Payloads/IMSDataChannelTermination.ta.mjs";
// export { IMSDataChannelTermination, _decode_IMSDataChannelTermination, _encode_IMSDataChannelTermination } from "../TS33128Payloads/IMSDataChannelTermination.ta.mjs";
import { MMSConvertedFromEmail, _decode_MMSConvertedFromEmail, _encode_MMSConvertedFromEmail } from "../TS33128Payloads/MMSConvertedFromEmail.ta.mjs";
// export { MMSConvertedFromEmail, _decode_MMSConvertedFromEmail, _encode_MMSConvertedFromEmail } from "../TS33128Payloads/MMSConvertedFromEmail.ta.mjs";
import { MMSConvertedToEmail, _decode_MMSConvertedToEmail, _encode_MMSConvertedToEmail } from "../TS33128Payloads/MMSConvertedToEmail.ta.mjs";
// export { MMSConvertedToEmail, _decode_MMSConvertedToEmail, _encode_MMSConvertedToEmail } from "../TS33128Payloads/MMSConvertedToEmail.ta.mjs";
import { NEF5GVNGroupCreation, _decode_NEF5GVNGroupCreation, _encode_NEF5GVNGroupCreation } from "../TS33128Payloads/NEF5GVNGroupCreation.ta.mjs";
// export { NEF5GVNGroupCreation, _decode_NEF5GVNGroupCreation, _encode_NEF5GVNGroupCreation } from "../TS33128Payloads/NEF5GVNGroupCreation.ta.mjs";
import { NEF5GVNGroupUpdate, _decode_NEF5GVNGroupUpdate, _encode_NEF5GVNGroupUpdate } from "../TS33128Payloads/NEF5GVNGroupUpdate.ta.mjs";
// export { NEF5GVNGroupUpdate, _decode_NEF5GVNGroupUpdate, _encode_NEF5GVNGroupUpdate } from "../TS33128Payloads/NEF5GVNGroupUpdate.ta.mjs";
import { NEF5GVNGroupDeletion, _decode_NEF5GVNGroupDeletion, _encode_NEF5GVNGroupDeletion } from "../TS33128Payloads/NEF5GVNGroupDeletion.ta.mjs";
// export { NEF5GVNGroupDeletion, _decode_NEF5GVNGroupDeletion, _encode_NEF5GVNGroupDeletion } from "../TS33128Payloads/NEF5GVNGroupDeletion.ta.mjs";
import { NEF5GVNGroupQuery, _decode_NEF5GVNGroupQuery, _encode_NEF5GVNGroupQuery } from "../TS33128Payloads/NEF5GVNGroupQuery.ta.mjs";
// export { NEF5GVNGroupQuery, _decode_NEF5GVNGroupQuery, _encode_NEF5GVNGroupQuery } from "../TS33128Payloads/NEF5GVNGroupQuery.ta.mjs";
import { HSSSubscriberRecordChange, _decode_HSSSubscriberRecordChange, _encode_HSSSubscriberRecordChange } from "../TS33128Payloads/HSSSubscriberRecordChange.ta.mjs";
// export { HSSSubscriberRecordChange, _decode_HSSSubscriberRecordChange, _encode_HSSSubscriberRecordChange } from "../TS33128Payloads/HSSSubscriberRecordChange.ta.mjs";
import { IMSHSSServingSystemMessage, _decode_IMSHSSServingSystemMessage, _encode_IMSHSSServingSystemMessage } from "../TS33128Payloads/IMSHSSServingSystemMessage.ta.mjs";
// export { IMSHSSServingSystemMessage, _decode_IMSHSSServingSystemMessage, _encode_IMSHSSServingSystemMessage } from "../TS33128Payloads/IMSHSSServingSystemMessage.ta.mjs";
import { IMSHSSStartOfInterceptionWithRegisteredTarget, _decode_IMSHSSStartOfInterceptionWithRegisteredTarget, _encode_IMSHSSStartOfInterceptionWithRegisteredTarget } from "../TS33128Payloads/IMSHSSStartOfInterceptionWithRegisteredTarget.ta.mjs";
// export { IMSHSSStartOfInterceptionWithRegisteredTarget, _decode_IMSHSSStartOfInterceptionWithRegisteredTarget, _encode_IMSHSSStartOfInterceptionWithRegisteredTarget } from "../TS33128Payloads/IMSHSSStartOfInterceptionWithRegisteredTarget.ta.mjs";
import { IMSHSSSubscriberRecordChange, _decode_IMSHSSSubscriberRecordChange, _encode_IMSHSSSubscriberRecordChange } from "../TS33128Payloads/IMSHSSSubscriberRecordChange.ta.mjs";
// export { IMSHSSSubscriberRecordChange, _decode_IMSHSSSubscriberRecordChange, _encode_IMSHSSSubscriberRecordChange } from "../TS33128Payloads/IMSHSSSubscriberRecordChange.ta.mjs";
import { AMFUEContextUpdate, _decode_AMFUEContextUpdate, _encode_AMFUEContextUpdate } from "../TS33128Payloads/AMFUEContextUpdate.ta.mjs";
// export { AMFUEContextUpdate, _decode_AMFUEContextUpdate, _encode_AMFUEContextUpdate } from "../TS33128Payloads/AMFUEContextUpdate.ta.mjs";
import { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
// export { EPSPDNConnectionEstablishment, _decode_EPSPDNConnectionEstablishment, _encode_EPSPDNConnectionEstablishment } from "../TS33128Payloads/EPSPDNConnectionEstablishment.ta.mjs";
import { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
// export { EPSPDNConnectionModification, _decode_EPSPDNConnectionModification, _encode_EPSPDNConnectionModification } from "../TS33128Payloads/EPSPDNConnectionModification.ta.mjs";
import { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";
// export { EPSPDNConnectionRelease, _decode_EPSPDNConnectionRelease, _encode_EPSPDNConnectionRelease } from "../TS33128Payloads/EPSPDNConnectionRelease.ta.mjs";
import { EPSStartOfInterceptionWithEstablishedPDNConnection, _decode_EPSStartOfInterceptionWithEstablishedPDNConnection, _encode_EPSStartOfInterceptionWithEstablishedPDNConnection } from "../TS33128Payloads/EPSStartOfInterceptionWithEstablishedPDNConnection.ta.mjs";
// export { EPSStartOfInterceptionWithEstablishedPDNConnection, _decode_EPSStartOfInterceptionWithEstablishedPDNConnection, _encode_EPSStartOfInterceptionWithEstablishedPDNConnection } from "../TS33128Payloads/EPSStartOfInterceptionWithEstablishedPDNConnection.ta.mjs";
import { EPSPDNUnsuccessfulProcedure, _decode_EPSPDNUnsuccessfulProcedure, _encode_EPSPDNUnsuccessfulProcedure } from "../TS33128Payloads/EPSPDNUnsuccessfulProcedure.ta.mjs";
// export { EPSPDNUnsuccessfulProcedure, _decode_EPSPDNUnsuccessfulProcedure, _encode_EPSPDNUnsuccessfulProcedure } from "../TS33128Payloads/EPSPDNUnsuccessfulProcedure.ta.mjs";
import { StartOfInterceptionWithEstablishedIMSDataChannel, _decode_StartOfInterceptionWithEstablishedIMSDataChannel, _encode_StartOfInterceptionWithEstablishedIMSDataChannel } from "../TS33128Payloads/StartOfInterceptionWithEstablishedIMSDataChannel.ta.mjs";
// export { StartOfInterceptionWithEstablishedIMSDataChannel, _decode_StartOfInterceptionWithEstablishedIMSDataChannel, _encode_StartOfInterceptionWithEstablishedIMSDataChannel } from "../TS33128Payloads/StartOfInterceptionWithEstablishedIMSDataChannel.ta.mjs";
import { SMFProSeRemoteUEReport, _decode_SMFProSeRemoteUEReport, _encode_SMFProSeRemoteUEReport } from "../TS33128Payloads/SMFProSeRemoteUEReport.ta.mjs";
// export { SMFProSeRemoteUEReport, _decode_SMFProSeRemoteUEReport, _encode_SMFProSeRemoteUEReport } from "../TS33128Payloads/SMFProSeRemoteUEReport.ta.mjs";
import { SMFStartOfInterceptionWithConnectedProSeRemoteUE, _decode_SMFStartOfInterceptionWithConnectedProSeRemoteUE, _encode_SMFStartOfInterceptionWithConnectedProSeRemoteUE } from "../TS33128Payloads/SMFStartOfInterceptionWithConnectedProSeRemoteUE.ta.mjs";
// export { SMFStartOfInterceptionWithConnectedProSeRemoteUE, _decode_SMFStartOfInterceptionWithConnectedProSeRemoteUE, _encode_SMFStartOfInterceptionWithConnectedProSeRemoteUE } from "../TS33128Payloads/SMFStartOfInterceptionWithConnectedProSeRemoteUE.ta.mjs";
import { FiveGDDNMFProSeUNIDirectDiscovery, _decode_FiveGDDNMFProSeUNIDirectDiscovery, _encode_FiveGDDNMFProSeUNIDirectDiscovery } from "../TS33128Payloads/FiveGDDNMFProSeUNIDirectDiscovery.ta.mjs";
// export { FiveGDDNMFProSeUNIDirectDiscovery, _decode_FiveGDDNMFProSeUNIDirectDiscovery, _encode_FiveGDDNMFProSeUNIDirectDiscovery } from "../TS33128Payloads/FiveGDDNMFProSeUNIDirectDiscovery.ta.mjs";
import { FiveGDDNMFProSeNNIDirectDiscovery, _decode_FiveGDDNMFProSeNNIDirectDiscovery, _encode_FiveGDDNMFProSeNNIDirectDiscovery } from "../TS33128Payloads/FiveGDDNMFProSeNNIDirectDiscovery.ta.mjs";
// export { FiveGDDNMFProSeNNIDirectDiscovery, _decode_FiveGDDNMFProSeNNIDirectDiscovery, _encode_FiveGDDNMFProSeNNIDirectDiscovery } from "../TS33128Payloads/FiveGDDNMFProSeNNIDirectDiscovery.ta.mjs";
import { AMFIdentifierDeassociation, _decode_AMFIdentifierDeassociation, _encode_AMFIdentifierDeassociation } from "../TS33128Payloads/AMFIdentifierDeassociation.ta.mjs";
// export { AMFIdentifierDeassociation, _decode_AMFIdentifierDeassociation, _encode_AMFIdentifierDeassociation } from "../TS33128Payloads/AMFIdentifierDeassociation.ta.mjs";
import { MMEIdentifierDeassociation, _decode_MMEIdentifierDeassociation, _encode_MMEIdentifierDeassociation } from "../TS33128Payloads/MMEIdentifierDeassociation.ta.mjs";
// export { MMEIdentifierDeassociation, _decode_MMEIdentifierDeassociation, _encode_MMEIdentifierDeassociation } from "../TS33128Payloads/MMEIdentifierDeassociation.ta.mjs";
import { FiveGPINAPPMessage, _decode_FiveGPINAPPMessage, _encode_FiveGPINAPPMessage } from "../TS33128Payloads/FiveGPINAPPMessage.ta.mjs";
// export { FiveGPINAPPMessage, _decode_FiveGPINAPPMessage, _encode_FiveGPINAPPMessage } from "../TS33128Payloads/FiveGPINAPPMessage.ta.mjs";
import { FiveGStartOfInterceptionWithPINClientInPIN, _decode_FiveGStartOfInterceptionWithPINClientInPIN, _encode_FiveGStartOfInterceptionWithPINClientInPIN } from "../TS33128Payloads/FiveGStartOfInterceptionWithPINClientInPIN.ta.mjs";
// export { FiveGStartOfInterceptionWithPINClientInPIN, _decode_FiveGStartOfInterceptionWithPINClientInPIN, _encode_FiveGStartOfInterceptionWithPINClientInPIN } from "../TS33128Payloads/FiveGStartOfInterceptionWithPINClientInPIN.ta.mjs";
import { ChargingDataEvent, _decode_ChargingDataEvent, _encode_ChargingDataEvent } from "../TS33128Payloads/ChargingDataEvent.ta.mjs";
// export { ChargingDataEvent, _decode_ChargingDataEvent, _encode_ChargingDataEvent } from "../TS33128Payloads/ChargingDataEvent.ta.mjs";


/**
 * @summary IRIEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIEvent  ::=  CHOICE
 * {
 *     -- AMF events, see clause 6.2.2.3
 *     registration                                        [1] AMFRegistration,
 *     deregistration                                      [2] AMFDeregistration,
 *     locationUpdate                                      [3] AMFLocationUpdate,
 *     startOfInterceptionWithRegisteredUE                 [4] AMFStartOfInterceptionWithRegisteredUE,
 *     unsuccessfulAMProcedure                             [5] AMFUnsuccessfulProcedure,
 * 
 *     -- SMF events, see clause 6.2.3.7
 *     pDUSessionEstablishment                             [6] SMFPDUSessionEstablishment,
 *     pDUSessionModification                              [7] SMFPDUSessionModification,
 *     pDUSessionRelease                                   [8] SMFPDUSessionRelease,
 *     startOfInterceptionWithEstablishedPDUSession        [9] SMFStartOfInterceptionWithEstablishedPDUSession,
 *     unsuccessfulSMProcedure                             [10] SMFUnsuccessfulProcedure,
 * 
 *     -- UDM events, see clause 7.2.2.4
 *     servingSystemMessage                                [11] UDMServingSystemMessage,
 * 
 *     -- SMS events, see clause 6.2.5.4
 *     sMSMessage                                          [12] SMSMessage,
 * 
 *     -- LALS events, see clause 7.3.1.5
 *     lALSReport                                          [13] LALSReport,
 * 
 *     -- PDHR/PDSR events, see clause 6.2.3.9
 *     pDHeaderReport                                      [14] PDHeaderReport,
 *     pDSummaryReport                                     [15] PDSummaryReport,
 * 
 *     -- MDF events, see clause 7.3.2.2
 *     mDFCellSiteReport                                   [16] MDFCellSiteReport,
 * 
 *     -- MMS events, see clause 7.4.4.1 see also MMSConverted events ([162-163] below)
 *     mMSSend                                             [17] MMSSend,
 *     mMSSendByNonLocalTarget                             [18] MMSSendByNonLocalTarget,
 *     mMSNotification                                     [19] MMSNotification,
 *     mMSSendToNonLocalTarget                             [20] MMSSendToNonLocalTarget,
 *     mMSNotificationResponse                             [21] MMSNotificationResponse,
 *     mMSRetrieval                                        [22] MMSRetrieval,
 *     mMSDeliveryAck                                      [23] MMSDeliveryAck,
 *     mMSForward                                          [24] MMSForward,
 *     mMSDeleteFromRelay                                  [25] MMSDeleteFromRelay,
 *     mMSDeliveryReport                                   [26] MMSDeliveryReport,
 *     mMSDeliveryReportNonLocalTarget                     [27] MMSDeliveryReportNonLocalTarget,
 *     mMSReadReport                                       [28] MMSReadReport,
 *     mMSReadReportNonLocalTarget                         [29] MMSReadReportNonLocalTarget,
 *     mMSCancel                                           [30] MMSCancel,
 *     mMSMBoxStore                                        [31] MMSMBoxStore,
 *     mMSMBoxUpload                                       [32] MMSMBoxUpload,
 *     mMSMBoxDelete                                       [33] MMSMBoxDelete,
 *     mMSMBoxViewRequest                                  [34] MMSMBoxViewRequest,
 *     mMSMBoxViewResponse                                 [35] MMSMBoxViewResponse,
 * 
 *     -- PTC events, see clauses 7.5.2 and 7.5.3.1
 *     pTCRegistration                                     [36] PTCRegistration,
 *     pTCSessionInitiation                                [37] PTCSessionInitiation,
 *     pTCSessionAbandon                                   [38] PTCSessionAbandon,
 *     pTCSessionStart                                     [39] PTCSessionStart,
 *     pTCSessionEnd                                       [40] PTCSessionEnd,
 *     pTCStartOfInterception                              [41] PTCStartOfInterception,
 *     pTCPreEstablishedSession                            [42] PTCPreEstablishedSession,
 *     pTCInstantPersonalAlert                             [43] PTCInstantPersonalAlert,
 *     pTCPartyJoin                                        [44] PTCPartyJoin,
 *     pTCPartyDrop                                        [45] PTCPartyDrop,
 *     pTCPartyHold                                        [46] PTCPartyHold,
 *     pTCMediaModification                                [47] PTCMediaModification,
 *     pTCGroupAdvertisement                               [48] PTCGroupAdvertisement,
 *     pTCFloorControl                                     [49] PTCFloorControl,
 *     pTCTargetPresence                                   [50] PTCTargetPresence,
 *     pTCParticipantPresence                              [51] PTCParticipantPresence,
 *     pTCListManagement                                   [52] PTCListManagement,
 *     pTCAccessPolicy                                     [53] PTCAccessPolicy,
 * 
 *     -- UDM events, see clause 7.2.2.4, continued from tag 11
 *     subscriberRecordChangeMessage                       [54] UDMSubscriberRecordChangeMessage,
 *     cancelLocationMessage                               [55] UDMCancelLocationMessage,
 * 
 *     -- SMS events, see clause 6.2.5.4, continued from tag 12
 *     sMSReport                                           [56] SMSReport,
 * 
 *     -- SMF MA PDU session events, see clause 6.2.3.7
 *     sMFMAPDUSessionEstablishment                        [57] SMFMAPDUSessionEstablishment,
 *     sMFMAPDUSessionModification                         [58] SMFMAPDUSessionModification,
 *     sMFMAPDUSessionRelease                              [59] SMFMAPDUSessionRelease,
 *     startOfInterceptionWithEstablishedMAPDUSession      [60] SMFStartOfInterceptionWithEstablishedMAPDUSession,
 *     unsuccessfulMASMProcedure                           [61] SMFMAUnsuccessfulProcedure,
 * 
 *     -- Identifier Association events, see clauses 6.2.2.3 and 6.3.2.3
 *     aMFIdentifierAssociation                            [62] AMFIdentifierAssociation,
 *     mMEIdentifierAssociation                            [63] MMEIdentifierAssociation,
 * 
 *     -- SMF PDU to MA PDU session events, see clause 6.2.3.7
 *     sMFPDUtoMAPDUSessionModification                    [64] SMFPDUtoMAPDUSessionModification,
 * 
 *     -- NEF events, see clause 7.7.2.3
 *     nEFPDUSessionEstablishment                          [65] NEFPDUSessionEstablishment,
 *     nEFPDUSessionModification                           [66] NEFPDUSessionModification,
 *     nEFPDUSessionRelease                                [67] NEFPDUSessionRelease,
 *     nEFUnsuccessfulProcedure                            [68] NEFUnsuccessfulProcedure,
 *     nEFStartOfInterceptionWithEstablishedPDUSession     [69] NEFStartOfInterceptionWithEstablishedPDUSession,
 *     nEFdeviceTrigger                                    [70] NEFDeviceTrigger,
 *     nEFdeviceTriggerReplace                             [71] NEFDeviceTriggerReplace,
 *     nEFdeviceTriggerCancellation                        [72] NEFDeviceTriggerCancellation,
 *     nEFdeviceTriggerReportNotify                        [73] NEFDeviceTriggerReportNotify,
 *     nEFMSISDNLessMOSMS                                  [74] NEFMSISDNLessMOSMS,
 *     nEFExpectedUEBehaviourUpdate                        [75] NEFExpectedUEBehaviourUpdate,
 * 
 *     -- SCEF events, see clause 7.8.2.3
 *     sCEFPDNConnectionEstablishment                      [76] SCEFPDNConnectionEstablishment,
 *     sCEFPDNConnectionUpdate                             [77] SCEFPDNConnectionUpdate,
 *     sCEFPDNConnectionRelease                            [78] SCEFPDNConnectionRelease,
 *     sCEFUnsuccessfulProcedure                           [79] SCEFUnsuccessfulProcedure,
 *     sCEFStartOfInterceptionWithEstablishedPDNConnection [80] SCEFStartOfInterceptionWithEstablishedPDNConnection,
 *     sCEFdeviceTrigger                                   [81] SCEFDeviceTrigger,
 *     sCEFdeviceTriggerReplace                            [82] SCEFDeviceTriggerReplace,
 *     sCEFdeviceTriggerCancellation                       [83] SCEFDeviceTriggerCancellation,
 *     sCEFdeviceTriggerReportNotify                       [84] SCEFDeviceTriggerReportNotify,
 *     sCEFMSISDNLessMOSMS                                 [85] SCEFMSISDNLessMOSMS,
 *     sCEFCommunicationPatternUpdate                      [86] SCEFCommunicationPatternUpdate,
 * 
 *     -- MME events, see clause 6.3.2.3
 *     mMEAttach                                           [87] MMEAttach,
 *     mMEDetach                                           [88] MMEDetach,
 *     mMELocationUpdate                                   [89] MMELocationUpdate,
 *     mMEStartOfInterceptionWithEPSAttachedUE             [90] MMEStartOfInterceptionWithEPSAttachedUE,
 *     mMEUnsuccessfulProcedure                            [91] MMEUnsuccessfulProcedure,
 * 
 *     -- AKMA key management events, see clause 7.9.1.5
 *     aAnFAnchorKeyRegister                               [92] AAnFAnchorKeyRegister,
 *     aAnFKAKMAApplicationKeyGet                          [93] AAnFKAKMAApplicationKeyGet,
 *     aAnFStartOfInterceptWithEstablishedAKMAKeyMaterial  [94] AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial,
 *     aAnFAKMAContextRemovalRecord                        [95] AAnFAKMAContextRemovalRecord,
 *     aFAKMAApplicationKeyRefresh                         [96] AFAKMAApplicationKeyRefresh,
 *     aFStartOfInterceptWithEstablishedAKMAApplicationKey [97] AFStartOfInterceptWithEstablishedAKMAApplicationKey,
 *     aFAuxiliarySecurityParameterEstablishment           [98] AFAuxiliarySecurityParameterEstablishment,
 *     aFApplicationKeyRemoval                             [99] AFApplicationKeyRemoval,
 * 
 *     -- Tag 100 is reserved because there is no equivalent n9HRPDUSessionInfo in IRIEvent.
 *     -- Tag 101 is reserved because there is no equivalent S8HRBearerInfo in IRIEvent.
 * 
 *     -- Separated Location Reporting, see clause 7.3.4.1
 *     separatedLocationReporting                          [102] SeparatedLocationReporting,
 * 
 *     -- STIR SHAKEN and RCD/eCNAM events, see clause 7.11.3
 *     sTIRSHAKENSignatureGeneration                       [103] STIRSHAKENSignatureGeneration,
 *     sTIRSHAKENSignatureValidation                       [104] STIRSHAKENSignatureValidation,
 * 
 *     -- IMS events, see clause 7.12.7
 *     iMSMessage                                          [105] IMSMessage,
 *     startOfInterceptionForActiveIMSSession              [106] StartOfInterceptionForActiveIMSSession,
 *     iMSCCUnavailable                                    [107] IMSCCUnavailable,
 * 
 *     -- UDM events, see clause 7.2.2.4, continued from tag 55
 *     uDMLocationInformationResult                        [108] UDMLocationInformationResult,
 *     uDMUEInformationResponse                            [109] UDMUEInformationResponse,
 *     uDMUEAuthenticationResponse                         [110] UDMUEAuthenticationResponse,
 * 
 *     -- AMF events, see 6.2.2.3, continued from tag 5
 *     positioningInfoTransfer                             [111] AMFPositioningInfoTransfer,
 * 
 *     -- MME events, see clause 6.3.2.3, continued from tag 91
 *     mMEPositioningInfoTransfer                          [112] MMEPositioningInfoTransfer,
 * 
 *     -- AMF events, see 6.2.2.3, continued from tag 111
 *     aMFRANHandoverCommand                               [113] AMFRANHandoverCommand,
 *     aMFRANHandoverRequest                               [114] AMFRANHandoverRequest,
 * 
 *     -- EES events, see clause 7.14.2.11
 *     eESEECRegistration                                  [115] EESEECRegistration,
 *     eESEASDiscovery                                     [116] EESEASDiscovery,
 *     eESEASDiscoverySubscription                         [117] EESEASDiscoverySubscription,
 *     eESEASDiscoveryNotification                         [118] EESEASDiscoveryNotification,
 *     eESAppContextRelocation                             [119] EESAppContextRelocation,
 *     eESACRSubscription                                  [120] EESACRSubscription,
 *     eESACRNotification                                  [121] EESACRNotification,
 *     eESEECContextRelocation                             [122] EESEECContextRelocation,
 *     eESStartOfInterceptionWithRegisteredEEC             [123] EESStartOfInterceptionWithRegisteredEEC,
 * 
 *     -- UDM events, see clause 7.2.2.4, continued from tag 110
 *     uDMStartOfInterceptionWithRegisteredTarget          [124] UDMStartOfInterceptionWithRegisteredTarget,
 * 
 *     -- 5GMS AF events, see clause 7.15.3
 *     fiveGMSAFServiceAccessInformation                   [125] FiveGMSAFServiceAccessInformation,
 *     fiveGMSAFConsumptionReporting                       [126] FiveGMSAFConsumptionReporting,
 *     fiveGMSAFDynamicPolicyInvocation                    [127] FiveGMSAFDynamicPolicyInvocation,
 *     fiveGMSAFMetricsReporting                           [128] FiveGMSAFMetricsReporting,
 *     fiveGMSAFNetworkAssistance                          [129] FiveGMSAFNetworkAssistance,
 *     fiveGMSAFUnsuccessfulProcedure                      [130] FiveGMSAFUnsuccessfulProcedure,
 *     fiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE [131] FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE,
 * 
 *     -- AMF events, see 6.2.2.3, continued from tag 114
 *     aMFUEConfigurationUpdate                            [132] AMFUEConfigurationUpdate,
 * 
 *     -- HSS events, see clause 7.2.3.4
 *     hSSServingSystemMessage                             [133] HSSServingSystemMessage,
 *     hSSStartOfInterceptionWithRegisteredTarget          [134] HSSStartOfInterceptionWithRegisteredTarget,
 * 
 *     -- NEF events, see clause 7.7.6.2
 *     nEFAFSessionWithQoSProvision                        [135] NEFAFSessionWithQoSProvision,
 *     nEFAFSessionWithQoSNotification                     [136] NEFAFSessionWithQoSNotification,
 * 
 *     -- SCEF events, see clause 7.8.6.2
 *     sCEFASSessionWithQoSProvision                       [137] SCEFASSessionWithQoSProvision,
 *     sCEFASSessionWithQoSNotification                    [138] SCEFASSessionWithQoSNotification,
 * 
 *     -- AMF events, see 6.2.2.3, continued from tag 132
 *     aMFRANTraceReport                                   [139] AMFRANTraceReport,
 * 
 *     -- RCS events, see clause 7.13.3
 *     rCSRegistration                                     [140] RCSRegistration,
 *     rCSMessage                                          [141] RCSMessage,
 *     rCSCapabilityDiscovery                              [142] RCSCapabilityDiscovery,
 *     rCSSessionEstablishment                             [143] RCSSessionEstablishment,
 *     rCSSessionModification                              [144] RCSSessionModification,
 *     rCSSessionRelease                                   [145] RCSSessionRelease,
 * 
 *     -- AMF events, see clause 6.2.2.3, continued from tag 139
 *     aMFUEPolicyTransfer                                 [146] AMFUEPolicyTransfer,
 *     aMFUEServiceAccept                                  [147] AMFUEServiceAccept,
 * 
 *     -- MME events, see clause 6.3.2.3, continued from tag 112
 *     ePSRANHandoverCommand                               [148] EPSRANHandoverCommand,
 *     ePSRANHandoverRequest                               [149] EPSRANHandoverRequest,
 *     mMERANTraceReport                                   [150] MMERANTraceReport,
 *     mMEUEServiceAccept                                  [151] MMEUEServiceAccept,
 * 
 *     --NWDAF events, see clause 7.16.3
 *     nWDAFEventsSubscription                             [152] NWDAFEventsSubscription,
 *     nWDAFEventsNotification                             [153] NWDAFEventsNotification,
 *     nWDAFAnalyticsInfoQuery                             [154] NWDAFAnalyticsInfoQuery,
 *     nWDAFRoamingAnalyticsSubscription                   [155] NWDAFRoamingAnalyticsSubscription,
 *     nWDAFRoamingAnalyticsNotification                   [156] NWDAFRoamingAnalyticsNotification,
 * 
 *     -- RCS events, see clause 7.13.3, continued from tag 145
 *     startOfInterceptForRegisteredRCSUser                [157] StartOfInterceptForRegisteredRCSUser,
 *     startOfInterceptWithEstablisedRCSSession            [158] StartOfInterceptWithEstablisedRCSSession,
 * 
 *     -- UDM events, see clause 7.2.2.3, continued from tag 124
 *     uDMProSeTargetIdentifierDeconcealment               [159] UDMProSeTargetIdentifierDeconcealment,
 *     uDMProSeTargetAuthentication                        [160] UDMProSeTargetAuthentication,
 * 
 *     -- Tag 161 is reserved because there is no equivalent IP Packet Report in IRIEvent.
 * 
 *     -- IMS events, see clause 7.12.7, continued from tag 107
 *     iMSDataChannelSetup                                 [162] IMSDataChannelSetup,
 *     iMSDataChannelModification                          [163] IMSDataChannelModification,
 *     iMSDataChannelTermination                           [164] IMSDataChannelTermination,
 * 
 *     -- MMS-related events continued from choice 35
 *     mMSConvertedFromEmail                               [165] MMSConvertedFromEmail,
 *     mMSConvertedToEmail                                 [166] MMSConvertedToEmail,
 * 
 *     -- NEF events, see clause 7.7.7.2
 *     nEF5GVNGroupCreation                                [167] NEF5GVNGroupCreation,
 *     nEF5GVNGroupUpdate                                  [168] NEF5GVNGroupUpdate,
 *     nEF5GVNGroupDeletion                                [169] NEF5GVNGroupDeletion,
 *     nEF5GVNGroupQuery                                   [170] NEF5GVNGroupQuery,
 * 
 *     -- HSS events, see clause 7.2.3.3
 *     hSSSubscriberRecordChange                           [171] HSSSubscriberRecordChange,
 * 
 *     -- IMS HSS events, see clause 7.2.4.3
 *     iMSHSSServingSystemMessage                          [172] IMSHSSServingSystemMessage,
 *     iMSHSSStartOfInterceptionWithRegisteredTarget       [173] IMSHSSStartOfInterceptionWithRegisteredTarget,
 *     iMSHSSSubscriberRecordChange                        [174] IMSHSSSubscriberRecordChange,
 * 
 *     -- AMF events, see clause 6.2.2.3, continued from tag 147
 *     aMFUEContextUpdate                                  [175] AMFUEContextUpdate,
 * 
 *     -- SGW events, see clause 6.3.3.2
 *     ePSPDNConnectionEstablishment                       [176] EPSPDNConnectionEstablishment,
 *     ePSPDNConnectionModification                        [177] EPSPDNConnectionModification,
 *     ePSPDNConnectionRelease                             [178] EPSPDNConnectionRelease,
 *     ePSStartOfInterceptionWithEstablishedPDNConnection  [179] EPSStartOfInterceptionWithEstablishedPDNConnection,
 *     ePSPDNUnsuccessfulProcedure                         [180] EPSPDNUnsuccessfulProcedure,
 * 
 *     -- IMS events, see clause 7.12.4.2, continued from tag 164
 *     startOfInterceptionWithEstablishedIMSDataChannel    [181] StartOfInterceptionWithEstablishedIMSDataChannel,
 * 
 *     -- SMF events, see clause 6.2.3.7 continued from tag 61
 *     sMFProSeRemoteUEReport                              [182] SMFProSeRemoteUEReport,
 *     sMFStartOfInterceptionWithConnectedProSeRemoteUE    [183] SMFStartOfInterceptionWithConnectedProSeRemoteUE,
 * 
 *     -- 5G ProSe Direct Communication events, see clause 7.17.3
 *     fiveGDDNMFProSeUNIDirectDiscovery                   [184] FiveGDDNMFProSeUNIDirectDiscovery,
 *     fiveGDDNMFProSeNNIDirectDiscovery                   [185] FiveGDDNMFProSeNNIDirectDiscovery,
 * 
 *     -- Additional Identifier Association events, see clauses 6.2.2.2.7 and 6.3.2.2.2
 *     aMFIdentifierDeassociation                          [186] AMFIdentifierDeassociation,
 *     mMEIdentifierDeassociation                          [187] MMEIdentifierDeassociation,
 * 
 *     -- 5G Personal IoT events, see clause 7.18.3
 *     fiveGPINAPPMessage                                  [188] FiveGPINAPPMessage,
 *     fiveGStartOfInterceptionWithPINClientInPIN          [189] FiveGStartOfInterceptionWithPINClientInPIN,
 * 
 *     -- Charging data event records, see clause 7.19
 *     chargingDataEvent                                   [190] ChargingDataEvent
 * }
 * ```
 */
export
type IRIEvent =
    { registration: AMFRegistration } /* CHOICE_ALT_ROOT */
    | { deregistration: AMFDeregistration } /* CHOICE_ALT_ROOT */
    | { locationUpdate: AMFLocationUpdate } /* CHOICE_ALT_ROOT */
    | { startOfInterceptionWithRegisteredUE: AMFStartOfInterceptionWithRegisteredUE } /* CHOICE_ALT_ROOT */
    | { unsuccessfulAMProcedure: AMFUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { pDUSessionEstablishment: SMFPDUSessionEstablishment } /* CHOICE_ALT_ROOT */
    | { pDUSessionModification: SMFPDUSessionModification } /* CHOICE_ALT_ROOT */
    | { pDUSessionRelease: SMFPDUSessionRelease } /* CHOICE_ALT_ROOT */
    | { startOfInterceptionWithEstablishedPDUSession: SMFStartOfInterceptionWithEstablishedPDUSession } /* CHOICE_ALT_ROOT */
    | { unsuccessfulSMProcedure: SMFUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { servingSystemMessage: UDMServingSystemMessage } /* CHOICE_ALT_ROOT */
    | { sMSMessage: SMSMessage } /* CHOICE_ALT_ROOT */
    | { lALSReport: LALSReport } /* CHOICE_ALT_ROOT */
    | { pDHeaderReport: PDHeaderReport } /* CHOICE_ALT_ROOT */
    | { pDSummaryReport: PDSummaryReport } /* CHOICE_ALT_ROOT */
    | { mDFCellSiteReport: MDFCellSiteReport } /* CHOICE_ALT_ROOT */
    | { mMSSend: MMSSend } /* CHOICE_ALT_ROOT */
    | { mMSSendByNonLocalTarget: MMSSendByNonLocalTarget } /* CHOICE_ALT_ROOT */
    | { mMSNotification: MMSNotification } /* CHOICE_ALT_ROOT */
    | { mMSSendToNonLocalTarget: MMSSendToNonLocalTarget } /* CHOICE_ALT_ROOT */
    | { mMSNotificationResponse: MMSNotificationResponse } /* CHOICE_ALT_ROOT */
    | { mMSRetrieval: MMSRetrieval } /* CHOICE_ALT_ROOT */
    | { mMSDeliveryAck: MMSDeliveryAck } /* CHOICE_ALT_ROOT */
    | { mMSForward: MMSForward } /* CHOICE_ALT_ROOT */
    | { mMSDeleteFromRelay: MMSDeleteFromRelay } /* CHOICE_ALT_ROOT */
    | { mMSDeliveryReport: MMSDeliveryReport } /* CHOICE_ALT_ROOT */
    | { mMSDeliveryReportNonLocalTarget: MMSDeliveryReportNonLocalTarget } /* CHOICE_ALT_ROOT */
    | { mMSReadReport: MMSReadReport } /* CHOICE_ALT_ROOT */
    | { mMSReadReportNonLocalTarget: MMSReadReportNonLocalTarget } /* CHOICE_ALT_ROOT */
    | { mMSCancel: MMSCancel } /* CHOICE_ALT_ROOT */
    | { mMSMBoxStore: MMSMBoxStore } /* CHOICE_ALT_ROOT */
    | { mMSMBoxUpload: MMSMBoxUpload } /* CHOICE_ALT_ROOT */
    | { mMSMBoxDelete: MMSMBoxDelete } /* CHOICE_ALT_ROOT */
    | { mMSMBoxViewRequest: MMSMBoxViewRequest } /* CHOICE_ALT_ROOT */
    | { mMSMBoxViewResponse: MMSMBoxViewResponse } /* CHOICE_ALT_ROOT */
    | { pTCRegistration: PTCRegistration } /* CHOICE_ALT_ROOT */
    | { pTCSessionInitiation: PTCSessionInitiation } /* CHOICE_ALT_ROOT */
    | { pTCSessionAbandon: PTCSessionAbandon } /* CHOICE_ALT_ROOT */
    | { pTCSessionStart: PTCSessionStart } /* CHOICE_ALT_ROOT */
    | { pTCSessionEnd: PTCSessionEnd } /* CHOICE_ALT_ROOT */
    | { pTCStartOfInterception: PTCStartOfInterception } /* CHOICE_ALT_ROOT */
    | { pTCPreEstablishedSession: PTCPreEstablishedSession } /* CHOICE_ALT_ROOT */
    | { pTCInstantPersonalAlert: PTCInstantPersonalAlert } /* CHOICE_ALT_ROOT */
    | { pTCPartyJoin: PTCPartyJoin } /* CHOICE_ALT_ROOT */
    | { pTCPartyDrop: PTCPartyDrop } /* CHOICE_ALT_ROOT */
    | { pTCPartyHold: PTCPartyHold } /* CHOICE_ALT_ROOT */
    | { pTCMediaModification: PTCMediaModification } /* CHOICE_ALT_ROOT */
    | { pTCGroupAdvertisement: PTCGroupAdvertisement } /* CHOICE_ALT_ROOT */
    | { pTCFloorControl: PTCFloorControl } /* CHOICE_ALT_ROOT */
    | { pTCTargetPresence: PTCTargetPresence } /* CHOICE_ALT_ROOT */
    | { pTCParticipantPresence: PTCParticipantPresence } /* CHOICE_ALT_ROOT */
    | { pTCListManagement: PTCListManagement } /* CHOICE_ALT_ROOT */
    | { pTCAccessPolicy: PTCAccessPolicy } /* CHOICE_ALT_ROOT */
    | { subscriberRecordChangeMessage: UDMSubscriberRecordChangeMessage } /* CHOICE_ALT_ROOT */
    | { cancelLocationMessage: UDMCancelLocationMessage } /* CHOICE_ALT_ROOT */
    | { sMSReport: SMSReport } /* CHOICE_ALT_ROOT */
    | { sMFMAPDUSessionEstablishment: SMFMAPDUSessionEstablishment } /* CHOICE_ALT_ROOT */
    | { sMFMAPDUSessionModification: SMFMAPDUSessionModification } /* CHOICE_ALT_ROOT */
    | { sMFMAPDUSessionRelease: SMFMAPDUSessionRelease } /* CHOICE_ALT_ROOT */
    | { startOfInterceptionWithEstablishedMAPDUSession: SMFStartOfInterceptionWithEstablishedMAPDUSession } /* CHOICE_ALT_ROOT */
    | { unsuccessfulMASMProcedure: SMFMAUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { aMFIdentifierAssociation: AMFIdentifierAssociation } /* CHOICE_ALT_ROOT */
    | { mMEIdentifierAssociation: MMEIdentifierAssociation } /* CHOICE_ALT_ROOT */
    | { sMFPDUtoMAPDUSessionModification: SMFPDUtoMAPDUSessionModification } /* CHOICE_ALT_ROOT */
    | { nEFPDUSessionEstablishment: NEFPDUSessionEstablishment } /* CHOICE_ALT_ROOT */
    | { nEFPDUSessionModification: NEFPDUSessionModification } /* CHOICE_ALT_ROOT */
    | { nEFPDUSessionRelease: NEFPDUSessionRelease } /* CHOICE_ALT_ROOT */
    | { nEFUnsuccessfulProcedure: NEFUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { nEFStartOfInterceptionWithEstablishedPDUSession: NEFStartOfInterceptionWithEstablishedPDUSession } /* CHOICE_ALT_ROOT */
    | { nEFdeviceTrigger: NEFDeviceTrigger } /* CHOICE_ALT_ROOT */
    | { nEFdeviceTriggerReplace: NEFDeviceTriggerReplace } /* CHOICE_ALT_ROOT */
    | { nEFdeviceTriggerCancellation: NEFDeviceTriggerCancellation } /* CHOICE_ALT_ROOT */
    | { nEFdeviceTriggerReportNotify: NEFDeviceTriggerReportNotify } /* CHOICE_ALT_ROOT */
    | { nEFMSISDNLessMOSMS: NEFMSISDNLessMOSMS } /* CHOICE_ALT_ROOT */
    | { nEFExpectedUEBehaviourUpdate: NEFExpectedUEBehaviourUpdate } /* CHOICE_ALT_ROOT */
    | { sCEFPDNConnectionEstablishment: SCEFPDNConnectionEstablishment } /* CHOICE_ALT_ROOT */
    | { sCEFPDNConnectionUpdate: SCEFPDNConnectionUpdate } /* CHOICE_ALT_ROOT */
    | { sCEFPDNConnectionRelease: SCEFPDNConnectionRelease } /* CHOICE_ALT_ROOT */
    | { sCEFUnsuccessfulProcedure: SCEFUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { sCEFStartOfInterceptionWithEstablishedPDNConnection: SCEFStartOfInterceptionWithEstablishedPDNConnection } /* CHOICE_ALT_ROOT */
    | { sCEFdeviceTrigger: SCEFDeviceTrigger } /* CHOICE_ALT_ROOT */
    | { sCEFdeviceTriggerReplace: SCEFDeviceTriggerReplace } /* CHOICE_ALT_ROOT */
    | { sCEFdeviceTriggerCancellation: SCEFDeviceTriggerCancellation } /* CHOICE_ALT_ROOT */
    | { sCEFdeviceTriggerReportNotify: SCEFDeviceTriggerReportNotify } /* CHOICE_ALT_ROOT */
    | { sCEFMSISDNLessMOSMS: SCEFMSISDNLessMOSMS } /* CHOICE_ALT_ROOT */
    | { sCEFCommunicationPatternUpdate: SCEFCommunicationPatternUpdate } /* CHOICE_ALT_ROOT */
    | { mMEAttach: MMEAttach } /* CHOICE_ALT_ROOT */
    | { mMEDetach: MMEDetach } /* CHOICE_ALT_ROOT */
    | { mMELocationUpdate: MMELocationUpdate } /* CHOICE_ALT_ROOT */
    | { mMEStartOfInterceptionWithEPSAttachedUE: MMEStartOfInterceptionWithEPSAttachedUE } /* CHOICE_ALT_ROOT */
    | { mMEUnsuccessfulProcedure: MMEUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { aAnFAnchorKeyRegister: AAnFAnchorKeyRegister } /* CHOICE_ALT_ROOT */
    | { aAnFKAKMAApplicationKeyGet: AAnFKAKMAApplicationKeyGet } /* CHOICE_ALT_ROOT */
    | { aAnFStartOfInterceptWithEstablishedAKMAKeyMaterial: AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial } /* CHOICE_ALT_ROOT */
    | { aAnFAKMAContextRemovalRecord: AAnFAKMAContextRemovalRecord } /* CHOICE_ALT_ROOT */
    | { aFAKMAApplicationKeyRefresh: AFAKMAApplicationKeyRefresh } /* CHOICE_ALT_ROOT */
    | { aFStartOfInterceptWithEstablishedAKMAApplicationKey: AFStartOfInterceptWithEstablishedAKMAApplicationKey } /* CHOICE_ALT_ROOT */
    | { aFAuxiliarySecurityParameterEstablishment: AFAuxiliarySecurityParameterEstablishment } /* CHOICE_ALT_ROOT */
    | { aFApplicationKeyRemoval: AFApplicationKeyRemoval } /* CHOICE_ALT_ROOT */
    | { separatedLocationReporting: SeparatedLocationReporting } /* CHOICE_ALT_ROOT */
    | { sTIRSHAKENSignatureGeneration: STIRSHAKENSignatureGeneration } /* CHOICE_ALT_ROOT */
    | { sTIRSHAKENSignatureValidation: STIRSHAKENSignatureValidation } /* CHOICE_ALT_ROOT */
    | { iMSMessage: IMSMessage } /* CHOICE_ALT_ROOT */
    | { startOfInterceptionForActiveIMSSession: StartOfInterceptionForActiveIMSSession } /* CHOICE_ALT_ROOT */
    | { iMSCCUnavailable: IMSCCUnavailable } /* CHOICE_ALT_ROOT */
    | { uDMLocationInformationResult: UDMLocationInformationResult } /* CHOICE_ALT_ROOT */
    | { uDMUEInformationResponse: UDMUEInformationResponse } /* CHOICE_ALT_ROOT */
    | { uDMUEAuthenticationResponse: UDMUEAuthenticationResponse } /* CHOICE_ALT_ROOT */
    | { positioningInfoTransfer: AMFPositioningInfoTransfer } /* CHOICE_ALT_ROOT */
    | { mMEPositioningInfoTransfer: MMEPositioningInfoTransfer } /* CHOICE_ALT_ROOT */
    | { aMFRANHandoverCommand: AMFRANHandoverCommand } /* CHOICE_ALT_ROOT */
    | { aMFRANHandoverRequest: AMFRANHandoverRequest } /* CHOICE_ALT_ROOT */
    | { eESEECRegistration: EESEECRegistration } /* CHOICE_ALT_ROOT */
    | { eESEASDiscovery: EESEASDiscovery } /* CHOICE_ALT_ROOT */
    | { eESEASDiscoverySubscription: EESEASDiscoverySubscription } /* CHOICE_ALT_ROOT */
    | { eESEASDiscoveryNotification: EESEASDiscoveryNotification } /* CHOICE_ALT_ROOT */
    | { eESAppContextRelocation: EESAppContextRelocation } /* CHOICE_ALT_ROOT */
    | { eESACRSubscription: EESACRSubscription } /* CHOICE_ALT_ROOT */
    | { eESACRNotification: EESACRNotification } /* CHOICE_ALT_ROOT */
    | { eESEECContextRelocation: EESEECContextRelocation } /* CHOICE_ALT_ROOT */
    | { eESStartOfInterceptionWithRegisteredEEC: EESStartOfInterceptionWithRegisteredEEC } /* CHOICE_ALT_ROOT */
    | { uDMStartOfInterceptionWithRegisteredTarget: UDMStartOfInterceptionWithRegisteredTarget } /* CHOICE_ALT_ROOT */
    | { fiveGMSAFServiceAccessInformation: FiveGMSAFServiceAccessInformation } /* CHOICE_ALT_ROOT */
    | { fiveGMSAFConsumptionReporting: FiveGMSAFConsumptionReporting } /* CHOICE_ALT_ROOT */
    | { fiveGMSAFDynamicPolicyInvocation: FiveGMSAFDynamicPolicyInvocation } /* CHOICE_ALT_ROOT */
    | { fiveGMSAFMetricsReporting: FiveGMSAFMetricsReporting } /* CHOICE_ALT_ROOT */
    | { fiveGMSAFNetworkAssistance: FiveGMSAFNetworkAssistance } /* CHOICE_ALT_ROOT */
    | { fiveGMSAFUnsuccessfulProcedure: FiveGMSAFUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { fiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE: FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE } /* CHOICE_ALT_ROOT */
    | { aMFUEConfigurationUpdate: AMFUEConfigurationUpdate } /* CHOICE_ALT_ROOT */
    | { hSSServingSystemMessage: HSSServingSystemMessage } /* CHOICE_ALT_ROOT */
    | { hSSStartOfInterceptionWithRegisteredTarget: HSSStartOfInterceptionWithRegisteredTarget } /* CHOICE_ALT_ROOT */
    | { nEFAFSessionWithQoSProvision: NEFAFSessionWithQoSProvision } /* CHOICE_ALT_ROOT */
    | { nEFAFSessionWithQoSNotification: NEFAFSessionWithQoSNotification } /* CHOICE_ALT_ROOT */
    | { sCEFASSessionWithQoSProvision: SCEFASSessionWithQoSProvision } /* CHOICE_ALT_ROOT */
    | { sCEFASSessionWithQoSNotification: SCEFASSessionWithQoSNotification } /* CHOICE_ALT_ROOT */
    | { aMFRANTraceReport: AMFRANTraceReport } /* CHOICE_ALT_ROOT */
    | { rCSRegistration: RCSRegistration } /* CHOICE_ALT_ROOT */
    | { rCSMessage: RCSMessage } /* CHOICE_ALT_ROOT */
    | { rCSCapabilityDiscovery: RCSCapabilityDiscovery } /* CHOICE_ALT_ROOT */
    | { rCSSessionEstablishment: RCSSessionEstablishment } /* CHOICE_ALT_ROOT */
    | { rCSSessionModification: RCSSessionModification } /* CHOICE_ALT_ROOT */
    | { rCSSessionRelease: RCSSessionRelease } /* CHOICE_ALT_ROOT */
    | { aMFUEPolicyTransfer: AMFUEPolicyTransfer } /* CHOICE_ALT_ROOT */
    | { aMFUEServiceAccept: AMFUEServiceAccept } /* CHOICE_ALT_ROOT */
    | { ePSRANHandoverCommand: EPSRANHandoverCommand } /* CHOICE_ALT_ROOT */
    | { ePSRANHandoverRequest: EPSRANHandoverRequest } /* CHOICE_ALT_ROOT */
    | { mMERANTraceReport: MMERANTraceReport } /* CHOICE_ALT_ROOT */
    | { mMEUEServiceAccept: MMEUEServiceAccept } /* CHOICE_ALT_ROOT */
    | { nWDAFEventsSubscription: NWDAFEventsSubscription } /* CHOICE_ALT_ROOT */
    | { nWDAFEventsNotification: NWDAFEventsNotification } /* CHOICE_ALT_ROOT */
    | { nWDAFAnalyticsInfoQuery: NWDAFAnalyticsInfoQuery } /* CHOICE_ALT_ROOT */
    | { nWDAFRoamingAnalyticsSubscription: NWDAFRoamingAnalyticsSubscription } /* CHOICE_ALT_ROOT */
    | { nWDAFRoamingAnalyticsNotification: NWDAFRoamingAnalyticsNotification } /* CHOICE_ALT_ROOT */
    | { startOfInterceptForRegisteredRCSUser: StartOfInterceptForRegisteredRCSUser } /* CHOICE_ALT_ROOT */
    | { startOfInterceptWithEstablisedRCSSession: StartOfInterceptWithEstablisedRCSSession } /* CHOICE_ALT_ROOT */
    | { uDMProSeTargetIdentifierDeconcealment: UDMProSeTargetIdentifierDeconcealment } /* CHOICE_ALT_ROOT */
    | { uDMProSeTargetAuthentication: UDMProSeTargetAuthentication } /* CHOICE_ALT_ROOT */
    | { iMSDataChannelSetup: IMSDataChannelSetup } /* CHOICE_ALT_ROOT */
    | { iMSDataChannelModification: IMSDataChannelModification } /* CHOICE_ALT_ROOT */
    | { iMSDataChannelTermination: IMSDataChannelTermination } /* CHOICE_ALT_ROOT */
    | { mMSConvertedFromEmail: MMSConvertedFromEmail } /* CHOICE_ALT_ROOT */
    | { mMSConvertedToEmail: MMSConvertedToEmail } /* CHOICE_ALT_ROOT */
    | { nEF5GVNGroupCreation: NEF5GVNGroupCreation } /* CHOICE_ALT_ROOT */
    | { nEF5GVNGroupUpdate: NEF5GVNGroupUpdate } /* CHOICE_ALT_ROOT */
    | { nEF5GVNGroupDeletion: NEF5GVNGroupDeletion } /* CHOICE_ALT_ROOT */
    | { nEF5GVNGroupQuery: NEF5GVNGroupQuery } /* CHOICE_ALT_ROOT */
    | { hSSSubscriberRecordChange: HSSSubscriberRecordChange } /* CHOICE_ALT_ROOT */
    | { iMSHSSServingSystemMessage: IMSHSSServingSystemMessage } /* CHOICE_ALT_ROOT */
    | { iMSHSSStartOfInterceptionWithRegisteredTarget: IMSHSSStartOfInterceptionWithRegisteredTarget } /* CHOICE_ALT_ROOT */
    | { iMSHSSSubscriberRecordChange: IMSHSSSubscriberRecordChange } /* CHOICE_ALT_ROOT */
    | { aMFUEContextUpdate: AMFUEContextUpdate } /* CHOICE_ALT_ROOT */
    | { ePSPDNConnectionEstablishment: EPSPDNConnectionEstablishment } /* CHOICE_ALT_ROOT */
    | { ePSPDNConnectionModification: EPSPDNConnectionModification } /* CHOICE_ALT_ROOT */
    | { ePSPDNConnectionRelease: EPSPDNConnectionRelease } /* CHOICE_ALT_ROOT */
    | { ePSStartOfInterceptionWithEstablishedPDNConnection: EPSStartOfInterceptionWithEstablishedPDNConnection } /* CHOICE_ALT_ROOT */
    | { ePSPDNUnsuccessfulProcedure: EPSPDNUnsuccessfulProcedure } /* CHOICE_ALT_ROOT */
    | { startOfInterceptionWithEstablishedIMSDataChannel: StartOfInterceptionWithEstablishedIMSDataChannel } /* CHOICE_ALT_ROOT */
    | { sMFProSeRemoteUEReport: SMFProSeRemoteUEReport } /* CHOICE_ALT_ROOT */
    | { sMFStartOfInterceptionWithConnectedProSeRemoteUE: SMFStartOfInterceptionWithConnectedProSeRemoteUE } /* CHOICE_ALT_ROOT */
    | { fiveGDDNMFProSeUNIDirectDiscovery: FiveGDDNMFProSeUNIDirectDiscovery } /* CHOICE_ALT_ROOT */
    | { fiveGDDNMFProSeNNIDirectDiscovery: FiveGDDNMFProSeNNIDirectDiscovery } /* CHOICE_ALT_ROOT */
    | { aMFIdentifierDeassociation: AMFIdentifierDeassociation } /* CHOICE_ALT_ROOT */
    | { mMEIdentifierDeassociation: MMEIdentifierDeassociation } /* CHOICE_ALT_ROOT */
    | { fiveGPINAPPMessage: FiveGPINAPPMessage } /* CHOICE_ALT_ROOT */
    | { fiveGStartOfInterceptionWithPINClientInPIN: FiveGStartOfInterceptionWithPINClientInPIN } /* CHOICE_ALT_ROOT */
    | { chargingDataEvent: ChargingDataEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IRIEvent: $.ASN1Decoder<IRIEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIEvent (el: _Element): IRIEvent {
    if (!_cached_decoder_for_IRIEvent) { _cached_decoder_for_IRIEvent = $._decode_inextensible_choice<IRIEvent>({
    "CONTEXT 1": [ "registration", $._decode_implicit<AMFRegistration>(() => _decode_AMFRegistration) ],
    "CONTEXT 2": [ "deregistration", $._decode_implicit<AMFDeregistration>(() => _decode_AMFDeregistration) ],
    "CONTEXT 3": [ "locationUpdate", $._decode_implicit<AMFLocationUpdate>(() => _decode_AMFLocationUpdate) ],
    "CONTEXT 4": [ "startOfInterceptionWithRegisteredUE", $._decode_implicit<AMFStartOfInterceptionWithRegisteredUE>(() => _decode_AMFStartOfInterceptionWithRegisteredUE) ],
    "CONTEXT 5": [ "unsuccessfulAMProcedure", $._decode_implicit<AMFUnsuccessfulProcedure>(() => _decode_AMFUnsuccessfulProcedure) ],
    "CONTEXT 6": [ "pDUSessionEstablishment", $._decode_implicit<SMFPDUSessionEstablishment>(() => _decode_SMFPDUSessionEstablishment) ],
    "CONTEXT 7": [ "pDUSessionModification", $._decode_implicit<SMFPDUSessionModification>(() => _decode_SMFPDUSessionModification) ],
    "CONTEXT 8": [ "pDUSessionRelease", $._decode_implicit<SMFPDUSessionRelease>(() => _decode_SMFPDUSessionRelease) ],
    "CONTEXT 9": [ "startOfInterceptionWithEstablishedPDUSession", $._decode_implicit<SMFStartOfInterceptionWithEstablishedPDUSession>(() => _decode_SMFStartOfInterceptionWithEstablishedPDUSession) ],
    "CONTEXT 10": [ "unsuccessfulSMProcedure", $._decode_implicit<SMFUnsuccessfulProcedure>(() => _decode_SMFUnsuccessfulProcedure) ],
    "CONTEXT 11": [ "servingSystemMessage", $._decode_implicit<UDMServingSystemMessage>(() => _decode_UDMServingSystemMessage) ],
    "CONTEXT 12": [ "sMSMessage", $._decode_implicit<SMSMessage>(() => _decode_SMSMessage) ],
    "CONTEXT 13": [ "lALSReport", $._decode_implicit<LALSReport>(() => _decode_LALSReport) ],
    "CONTEXT 14": [ "pDHeaderReport", $._decode_implicit<PDHeaderReport>(() => _decode_PDHeaderReport) ],
    "CONTEXT 15": [ "pDSummaryReport", $._decode_implicit<PDSummaryReport>(() => _decode_PDSummaryReport) ],
    "CONTEXT 16": [ "mDFCellSiteReport", $._decode_implicit<MDFCellSiteReport>(() => _decode_MDFCellSiteReport) ],
    "CONTEXT 17": [ "mMSSend", $._decode_implicit<MMSSend>(() => _decode_MMSSend) ],
    "CONTEXT 18": [ "mMSSendByNonLocalTarget", $._decode_implicit<MMSSendByNonLocalTarget>(() => _decode_MMSSendByNonLocalTarget) ],
    "CONTEXT 19": [ "mMSNotification", $._decode_implicit<MMSNotification>(() => _decode_MMSNotification) ],
    "CONTEXT 20": [ "mMSSendToNonLocalTarget", $._decode_implicit<MMSSendToNonLocalTarget>(() => _decode_MMSSendToNonLocalTarget) ],
    "CONTEXT 21": [ "mMSNotificationResponse", $._decode_implicit<MMSNotificationResponse>(() => _decode_MMSNotificationResponse) ],
    "CONTEXT 22": [ "mMSRetrieval", $._decode_implicit<MMSRetrieval>(() => _decode_MMSRetrieval) ],
    "CONTEXT 23": [ "mMSDeliveryAck", $._decode_implicit<MMSDeliveryAck>(() => _decode_MMSDeliveryAck) ],
    "CONTEXT 24": [ "mMSForward", $._decode_implicit<MMSForward>(() => _decode_MMSForward) ],
    "CONTEXT 25": [ "mMSDeleteFromRelay", $._decode_implicit<MMSDeleteFromRelay>(() => _decode_MMSDeleteFromRelay) ],
    "CONTEXT 26": [ "mMSDeliveryReport", $._decode_implicit<MMSDeliveryReport>(() => _decode_MMSDeliveryReport) ],
    "CONTEXT 27": [ "mMSDeliveryReportNonLocalTarget", $._decode_implicit<MMSDeliveryReportNonLocalTarget>(() => _decode_MMSDeliveryReportNonLocalTarget) ],
    "CONTEXT 28": [ "mMSReadReport", $._decode_implicit<MMSReadReport>(() => _decode_MMSReadReport) ],
    "CONTEXT 29": [ "mMSReadReportNonLocalTarget", $._decode_implicit<MMSReadReportNonLocalTarget>(() => _decode_MMSReadReportNonLocalTarget) ],
    "CONTEXT 30": [ "mMSCancel", $._decode_implicit<MMSCancel>(() => _decode_MMSCancel) ],
    "CONTEXT 31": [ "mMSMBoxStore", $._decode_implicit<MMSMBoxStore>(() => _decode_MMSMBoxStore) ],
    "CONTEXT 32": [ "mMSMBoxUpload", $._decode_implicit<MMSMBoxUpload>(() => _decode_MMSMBoxUpload) ],
    "CONTEXT 33": [ "mMSMBoxDelete", $._decode_implicit<MMSMBoxDelete>(() => _decode_MMSMBoxDelete) ],
    "CONTEXT 34": [ "mMSMBoxViewRequest", $._decode_implicit<MMSMBoxViewRequest>(() => _decode_MMSMBoxViewRequest) ],
    "CONTEXT 35": [ "mMSMBoxViewResponse", $._decode_implicit<MMSMBoxViewResponse>(() => _decode_MMSMBoxViewResponse) ],
    "CONTEXT 36": [ "pTCRegistration", $._decode_implicit<PTCRegistration>(() => _decode_PTCRegistration) ],
    "CONTEXT 37": [ "pTCSessionInitiation", $._decode_implicit<PTCSessionInitiation>(() => _decode_PTCSessionInitiation) ],
    "CONTEXT 38": [ "pTCSessionAbandon", $._decode_implicit<PTCSessionAbandon>(() => _decode_PTCSessionAbandon) ],
    "CONTEXT 39": [ "pTCSessionStart", $._decode_implicit<PTCSessionStart>(() => _decode_PTCSessionStart) ],
    "CONTEXT 40": [ "pTCSessionEnd", $._decode_implicit<PTCSessionEnd>(() => _decode_PTCSessionEnd) ],
    "CONTEXT 41": [ "pTCStartOfInterception", $._decode_implicit<PTCStartOfInterception>(() => _decode_PTCStartOfInterception) ],
    "CONTEXT 42": [ "pTCPreEstablishedSession", $._decode_implicit<PTCPreEstablishedSession>(() => _decode_PTCPreEstablishedSession) ],
    "CONTEXT 43": [ "pTCInstantPersonalAlert", $._decode_implicit<PTCInstantPersonalAlert>(() => _decode_PTCInstantPersonalAlert) ],
    "CONTEXT 44": [ "pTCPartyJoin", $._decode_implicit<PTCPartyJoin>(() => _decode_PTCPartyJoin) ],
    "CONTEXT 45": [ "pTCPartyDrop", $._decode_implicit<PTCPartyDrop>(() => _decode_PTCPartyDrop) ],
    "CONTEXT 46": [ "pTCPartyHold", $._decode_implicit<PTCPartyHold>(() => _decode_PTCPartyHold) ],
    "CONTEXT 47": [ "pTCMediaModification", $._decode_implicit<PTCMediaModification>(() => _decode_PTCMediaModification) ],
    "CONTEXT 48": [ "pTCGroupAdvertisement", $._decode_implicit<PTCGroupAdvertisement>(() => _decode_PTCGroupAdvertisement) ],
    "CONTEXT 49": [ "pTCFloorControl", $._decode_implicit<PTCFloorControl>(() => _decode_PTCFloorControl) ],
    "CONTEXT 50": [ "pTCTargetPresence", $._decode_implicit<PTCTargetPresence>(() => _decode_PTCTargetPresence) ],
    "CONTEXT 51": [ "pTCParticipantPresence", $._decode_implicit<PTCParticipantPresence>(() => _decode_PTCParticipantPresence) ],
    "CONTEXT 52": [ "pTCListManagement", $._decode_implicit<PTCListManagement>(() => _decode_PTCListManagement) ],
    "CONTEXT 53": [ "pTCAccessPolicy", $._decode_implicit<PTCAccessPolicy>(() => _decode_PTCAccessPolicy) ],
    "CONTEXT 54": [ "subscriberRecordChangeMessage", $._decode_implicit<UDMSubscriberRecordChangeMessage>(() => _decode_UDMSubscriberRecordChangeMessage) ],
    "CONTEXT 55": [ "cancelLocationMessage", $._decode_implicit<UDMCancelLocationMessage>(() => _decode_UDMCancelLocationMessage) ],
    "CONTEXT 56": [ "sMSReport", $._decode_implicit<SMSReport>(() => _decode_SMSReport) ],
    "CONTEXT 57": [ "sMFMAPDUSessionEstablishment", $._decode_implicit<SMFMAPDUSessionEstablishment>(() => _decode_SMFMAPDUSessionEstablishment) ],
    "CONTEXT 58": [ "sMFMAPDUSessionModification", $._decode_implicit<SMFMAPDUSessionModification>(() => _decode_SMFMAPDUSessionModification) ],
    "CONTEXT 59": [ "sMFMAPDUSessionRelease", $._decode_implicit<SMFMAPDUSessionRelease>(() => _decode_SMFMAPDUSessionRelease) ],
    "CONTEXT 60": [ "startOfInterceptionWithEstablishedMAPDUSession", $._decode_implicit<SMFStartOfInterceptionWithEstablishedMAPDUSession>(() => _decode_SMFStartOfInterceptionWithEstablishedMAPDUSession) ],
    "CONTEXT 61": [ "unsuccessfulMASMProcedure", $._decode_implicit<SMFMAUnsuccessfulProcedure>(() => _decode_SMFMAUnsuccessfulProcedure) ],
    "CONTEXT 62": [ "aMFIdentifierAssociation", $._decode_implicit<AMFIdentifierAssociation>(() => _decode_AMFIdentifierAssociation) ],
    "CONTEXT 63": [ "mMEIdentifierAssociation", $._decode_implicit<MMEIdentifierAssociation>(() => _decode_MMEIdentifierAssociation) ],
    "CONTEXT 64": [ "sMFPDUtoMAPDUSessionModification", $._decode_implicit<SMFPDUtoMAPDUSessionModification>(() => _decode_SMFPDUtoMAPDUSessionModification) ],
    "CONTEXT 65": [ "nEFPDUSessionEstablishment", $._decode_implicit<NEFPDUSessionEstablishment>(() => _decode_NEFPDUSessionEstablishment) ],
    "CONTEXT 66": [ "nEFPDUSessionModification", $._decode_implicit<NEFPDUSessionModification>(() => _decode_NEFPDUSessionModification) ],
    "CONTEXT 67": [ "nEFPDUSessionRelease", $._decode_implicit<NEFPDUSessionRelease>(() => _decode_NEFPDUSessionRelease) ],
    "CONTEXT 68": [ "nEFUnsuccessfulProcedure", $._decode_implicit<NEFUnsuccessfulProcedure>(() => _decode_NEFUnsuccessfulProcedure) ],
    "CONTEXT 69": [ "nEFStartOfInterceptionWithEstablishedPDUSession", $._decode_implicit<NEFStartOfInterceptionWithEstablishedPDUSession>(() => _decode_NEFStartOfInterceptionWithEstablishedPDUSession) ],
    "CONTEXT 70": [ "nEFdeviceTrigger", $._decode_implicit<NEFDeviceTrigger>(() => _decode_NEFDeviceTrigger) ],
    "CONTEXT 71": [ "nEFdeviceTriggerReplace", $._decode_implicit<NEFDeviceTriggerReplace>(() => _decode_NEFDeviceTriggerReplace) ],
    "CONTEXT 72": [ "nEFdeviceTriggerCancellation", $._decode_implicit<NEFDeviceTriggerCancellation>(() => _decode_NEFDeviceTriggerCancellation) ],
    "CONTEXT 73": [ "nEFdeviceTriggerReportNotify", $._decode_implicit<NEFDeviceTriggerReportNotify>(() => _decode_NEFDeviceTriggerReportNotify) ],
    "CONTEXT 74": [ "nEFMSISDNLessMOSMS", $._decode_implicit<NEFMSISDNLessMOSMS>(() => _decode_NEFMSISDNLessMOSMS) ],
    "CONTEXT 75": [ "nEFExpectedUEBehaviourUpdate", $._decode_implicit<NEFExpectedUEBehaviourUpdate>(() => _decode_NEFExpectedUEBehaviourUpdate) ],
    "CONTEXT 76": [ "sCEFPDNConnectionEstablishment", $._decode_implicit<SCEFPDNConnectionEstablishment>(() => _decode_SCEFPDNConnectionEstablishment) ],
    "CONTEXT 77": [ "sCEFPDNConnectionUpdate", $._decode_implicit<SCEFPDNConnectionUpdate>(() => _decode_SCEFPDNConnectionUpdate) ],
    "CONTEXT 78": [ "sCEFPDNConnectionRelease", $._decode_implicit<SCEFPDNConnectionRelease>(() => _decode_SCEFPDNConnectionRelease) ],
    "CONTEXT 79": [ "sCEFUnsuccessfulProcedure", $._decode_implicit<SCEFUnsuccessfulProcedure>(() => _decode_SCEFUnsuccessfulProcedure) ],
    "CONTEXT 80": [ "sCEFStartOfInterceptionWithEstablishedPDNConnection", $._decode_implicit<SCEFStartOfInterceptionWithEstablishedPDNConnection>(() => _decode_SCEFStartOfInterceptionWithEstablishedPDNConnection) ],
    "CONTEXT 81": [ "sCEFdeviceTrigger", $._decode_implicit<SCEFDeviceTrigger>(() => _decode_SCEFDeviceTrigger) ],
    "CONTEXT 82": [ "sCEFdeviceTriggerReplace", $._decode_implicit<SCEFDeviceTriggerReplace>(() => _decode_SCEFDeviceTriggerReplace) ],
    "CONTEXT 83": [ "sCEFdeviceTriggerCancellation", $._decode_implicit<SCEFDeviceTriggerCancellation>(() => _decode_SCEFDeviceTriggerCancellation) ],
    "CONTEXT 84": [ "sCEFdeviceTriggerReportNotify", $._decode_implicit<SCEFDeviceTriggerReportNotify>(() => _decode_SCEFDeviceTriggerReportNotify) ],
    "CONTEXT 85": [ "sCEFMSISDNLessMOSMS", $._decode_implicit<SCEFMSISDNLessMOSMS>(() => _decode_SCEFMSISDNLessMOSMS) ],
    "CONTEXT 86": [ "sCEFCommunicationPatternUpdate", $._decode_implicit<SCEFCommunicationPatternUpdate>(() => _decode_SCEFCommunicationPatternUpdate) ],
    "CONTEXT 87": [ "mMEAttach", $._decode_implicit<MMEAttach>(() => _decode_MMEAttach) ],
    "CONTEXT 88": [ "mMEDetach", $._decode_implicit<MMEDetach>(() => _decode_MMEDetach) ],
    "CONTEXT 89": [ "mMELocationUpdate", $._decode_implicit<MMELocationUpdate>(() => _decode_MMELocationUpdate) ],
    "CONTEXT 90": [ "mMEStartOfInterceptionWithEPSAttachedUE", $._decode_implicit<MMEStartOfInterceptionWithEPSAttachedUE>(() => _decode_MMEStartOfInterceptionWithEPSAttachedUE) ],
    "CONTEXT 91": [ "mMEUnsuccessfulProcedure", $._decode_implicit<MMEUnsuccessfulProcedure>(() => _decode_MMEUnsuccessfulProcedure) ],
    "CONTEXT 92": [ "aAnFAnchorKeyRegister", $._decode_implicit<AAnFAnchorKeyRegister>(() => _decode_AAnFAnchorKeyRegister) ],
    "CONTEXT 93": [ "aAnFKAKMAApplicationKeyGet", $._decode_implicit<AAnFKAKMAApplicationKeyGet>(() => _decode_AAnFKAKMAApplicationKeyGet) ],
    "CONTEXT 94": [ "aAnFStartOfInterceptWithEstablishedAKMAKeyMaterial", $._decode_implicit<AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial>(() => _decode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial) ],
    "CONTEXT 95": [ "aAnFAKMAContextRemovalRecord", $._decode_implicit<AAnFAKMAContextRemovalRecord>(() => _decode_AAnFAKMAContextRemovalRecord) ],
    "CONTEXT 96": [ "aFAKMAApplicationKeyRefresh", $._decode_implicit<AFAKMAApplicationKeyRefresh>(() => _decode_AFAKMAApplicationKeyRefresh) ],
    "CONTEXT 97": [ "aFStartOfInterceptWithEstablishedAKMAApplicationKey", $._decode_implicit<AFStartOfInterceptWithEstablishedAKMAApplicationKey>(() => _decode_AFStartOfInterceptWithEstablishedAKMAApplicationKey) ],
    "CONTEXT 98": [ "aFAuxiliarySecurityParameterEstablishment", $._decode_implicit<AFAuxiliarySecurityParameterEstablishment>(() => _decode_AFAuxiliarySecurityParameterEstablishment) ],
    "CONTEXT 99": [ "aFApplicationKeyRemoval", $._decode_implicit<AFApplicationKeyRemoval>(() => _decode_AFApplicationKeyRemoval) ],
    "CONTEXT 102": [ "separatedLocationReporting", $._decode_implicit<SeparatedLocationReporting>(() => _decode_SeparatedLocationReporting) ],
    "CONTEXT 103": [ "sTIRSHAKENSignatureGeneration", $._decode_implicit<STIRSHAKENSignatureGeneration>(() => _decode_STIRSHAKENSignatureGeneration) ],
    "CONTEXT 104": [ "sTIRSHAKENSignatureValidation", $._decode_implicit<STIRSHAKENSignatureValidation>(() => _decode_STIRSHAKENSignatureValidation) ],
    "CONTEXT 105": [ "iMSMessage", $._decode_implicit<IMSMessage>(() => _decode_IMSMessage) ],
    "CONTEXT 106": [ "startOfInterceptionForActiveIMSSession", $._decode_implicit<StartOfInterceptionForActiveIMSSession>(() => _decode_StartOfInterceptionForActiveIMSSession) ],
    "CONTEXT 107": [ "iMSCCUnavailable", $._decode_implicit<IMSCCUnavailable>(() => _decode_IMSCCUnavailable) ],
    "CONTEXT 108": [ "uDMLocationInformationResult", $._decode_implicit<UDMLocationInformationResult>(() => _decode_UDMLocationInformationResult) ],
    "CONTEXT 109": [ "uDMUEInformationResponse", $._decode_implicit<UDMUEInformationResponse>(() => _decode_UDMUEInformationResponse) ],
    "CONTEXT 110": [ "uDMUEAuthenticationResponse", $._decode_implicit<UDMUEAuthenticationResponse>(() => _decode_UDMUEAuthenticationResponse) ],
    "CONTEXT 111": [ "positioningInfoTransfer", $._decode_implicit<AMFPositioningInfoTransfer>(() => _decode_AMFPositioningInfoTransfer) ],
    "CONTEXT 112": [ "mMEPositioningInfoTransfer", $._decode_implicit<MMEPositioningInfoTransfer>(() => _decode_MMEPositioningInfoTransfer) ],
    "CONTEXT 113": [ "aMFRANHandoverCommand", $._decode_implicit<AMFRANHandoverCommand>(() => _decode_AMFRANHandoverCommand) ],
    "CONTEXT 114": [ "aMFRANHandoverRequest", $._decode_implicit<AMFRANHandoverRequest>(() => _decode_AMFRANHandoverRequest) ],
    "CONTEXT 115": [ "eESEECRegistration", $._decode_implicit<EESEECRegistration>(() => _decode_EESEECRegistration) ],
    "CONTEXT 116": [ "eESEASDiscovery", $._decode_implicit<EESEASDiscovery>(() => _decode_EESEASDiscovery) ],
    "CONTEXT 117": [ "eESEASDiscoverySubscription", $._decode_implicit<EESEASDiscoverySubscription>(() => _decode_EESEASDiscoverySubscription) ],
    "CONTEXT 118": [ "eESEASDiscoveryNotification", $._decode_implicit<EESEASDiscoveryNotification>(() => _decode_EESEASDiscoveryNotification) ],
    "CONTEXT 119": [ "eESAppContextRelocation", $._decode_implicit<EESAppContextRelocation>(() => _decode_EESAppContextRelocation) ],
    "CONTEXT 120": [ "eESACRSubscription", $._decode_implicit<EESACRSubscription>(() => _decode_EESACRSubscription) ],
    "CONTEXT 121": [ "eESACRNotification", $._decode_implicit<EESACRNotification>(() => _decode_EESACRNotification) ],
    "CONTEXT 122": [ "eESEECContextRelocation", $._decode_implicit<EESEECContextRelocation>(() => _decode_EESEECContextRelocation) ],
    "CONTEXT 123": [ "eESStartOfInterceptionWithRegisteredEEC", $._decode_implicit<EESStartOfInterceptionWithRegisteredEEC>(() => _decode_EESStartOfInterceptionWithRegisteredEEC) ],
    "CONTEXT 124": [ "uDMStartOfInterceptionWithRegisteredTarget", $._decode_implicit<UDMStartOfInterceptionWithRegisteredTarget>(() => _decode_UDMStartOfInterceptionWithRegisteredTarget) ],
    "CONTEXT 125": [ "fiveGMSAFServiceAccessInformation", $._decode_implicit<FiveGMSAFServiceAccessInformation>(() => _decode_FiveGMSAFServiceAccessInformation) ],
    "CONTEXT 126": [ "fiveGMSAFConsumptionReporting", $._decode_implicit<FiveGMSAFConsumptionReporting>(() => _decode_FiveGMSAFConsumptionReporting) ],
    "CONTEXT 127": [ "fiveGMSAFDynamicPolicyInvocation", $._decode_implicit<FiveGMSAFDynamicPolicyInvocation>(() => _decode_FiveGMSAFDynamicPolicyInvocation) ],
    "CONTEXT 128": [ "fiveGMSAFMetricsReporting", $._decode_implicit<FiveGMSAFMetricsReporting>(() => _decode_FiveGMSAFMetricsReporting) ],
    "CONTEXT 129": [ "fiveGMSAFNetworkAssistance", $._decode_implicit<FiveGMSAFNetworkAssistance>(() => _decode_FiveGMSAFNetworkAssistance) ],
    "CONTEXT 130": [ "fiveGMSAFUnsuccessfulProcedure", $._decode_implicit<FiveGMSAFUnsuccessfulProcedure>(() => _decode_FiveGMSAFUnsuccessfulProcedure) ],
    "CONTEXT 131": [ "fiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE", $._decode_implicit<FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE>(() => _decode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE) ],
    "CONTEXT 132": [ "aMFUEConfigurationUpdate", $._decode_implicit<AMFUEConfigurationUpdate>(() => _decode_AMFUEConfigurationUpdate) ],
    "CONTEXT 133": [ "hSSServingSystemMessage", $._decode_implicit<HSSServingSystemMessage>(() => _decode_HSSServingSystemMessage) ],
    "CONTEXT 134": [ "hSSStartOfInterceptionWithRegisteredTarget", $._decode_implicit<HSSStartOfInterceptionWithRegisteredTarget>(() => _decode_HSSStartOfInterceptionWithRegisteredTarget) ],
    "CONTEXT 135": [ "nEFAFSessionWithQoSProvision", $._decode_implicit<NEFAFSessionWithQoSProvision>(() => _decode_NEFAFSessionWithQoSProvision) ],
    "CONTEXT 136": [ "nEFAFSessionWithQoSNotification", $._decode_implicit<NEFAFSessionWithQoSNotification>(() => _decode_NEFAFSessionWithQoSNotification) ],
    "CONTEXT 137": [ "sCEFASSessionWithQoSProvision", $._decode_implicit<SCEFASSessionWithQoSProvision>(() => _decode_SCEFASSessionWithQoSProvision) ],
    "CONTEXT 138": [ "sCEFASSessionWithQoSNotification", $._decode_implicit<SCEFASSessionWithQoSNotification>(() => _decode_SCEFASSessionWithQoSNotification) ],
    "CONTEXT 139": [ "aMFRANTraceReport", $._decode_implicit<AMFRANTraceReport>(() => _decode_AMFRANTraceReport) ],
    "CONTEXT 140": [ "rCSRegistration", $._decode_implicit<RCSRegistration>(() => _decode_RCSRegistration) ],
    "CONTEXT 141": [ "rCSMessage", $._decode_implicit<RCSMessage>(() => _decode_RCSMessage) ],
    "CONTEXT 142": [ "rCSCapabilityDiscovery", $._decode_implicit<RCSCapabilityDiscovery>(() => _decode_RCSCapabilityDiscovery) ],
    "CONTEXT 143": [ "rCSSessionEstablishment", $._decode_implicit<RCSSessionEstablishment>(() => _decode_RCSSessionEstablishment) ],
    "CONTEXT 144": [ "rCSSessionModification", $._decode_implicit<RCSSessionModification>(() => _decode_RCSSessionModification) ],
    "CONTEXT 145": [ "rCSSessionRelease", $._decode_implicit<RCSSessionRelease>(() => _decode_RCSSessionRelease) ],
    "CONTEXT 146": [ "aMFUEPolicyTransfer", $._decode_implicit<AMFUEPolicyTransfer>(() => _decode_AMFUEPolicyTransfer) ],
    "CONTEXT 147": [ "aMFUEServiceAccept", $._decode_implicit<AMFUEServiceAccept>(() => _decode_AMFUEServiceAccept) ],
    "CONTEXT 148": [ "ePSRANHandoverCommand", $._decode_implicit<EPSRANHandoverCommand>(() => _decode_EPSRANHandoverCommand) ],
    "CONTEXT 149": [ "ePSRANHandoverRequest", $._decode_implicit<EPSRANHandoverRequest>(() => _decode_EPSRANHandoverRequest) ],
    "CONTEXT 150": [ "mMERANTraceReport", $._decode_implicit<MMERANTraceReport>(() => _decode_MMERANTraceReport) ],
    "CONTEXT 151": [ "mMEUEServiceAccept", $._decode_implicit<MMEUEServiceAccept>(() => _decode_MMEUEServiceAccept) ],
    "CONTEXT 152": [ "nWDAFEventsSubscription", $._decode_implicit<NWDAFEventsSubscription>(() => _decode_NWDAFEventsSubscription) ],
    "CONTEXT 153": [ "nWDAFEventsNotification", $._decode_implicit<NWDAFEventsNotification>(() => _decode_NWDAFEventsNotification) ],
    "CONTEXT 154": [ "nWDAFAnalyticsInfoQuery", $._decode_implicit<NWDAFAnalyticsInfoQuery>(() => _decode_NWDAFAnalyticsInfoQuery) ],
    "CONTEXT 155": [ "nWDAFRoamingAnalyticsSubscription", $._decode_implicit<NWDAFRoamingAnalyticsSubscription>(() => _decode_NWDAFRoamingAnalyticsSubscription) ],
    "CONTEXT 156": [ "nWDAFRoamingAnalyticsNotification", $._decode_implicit<NWDAFRoamingAnalyticsNotification>(() => _decode_NWDAFRoamingAnalyticsNotification) ],
    "CONTEXT 157": [ "startOfInterceptForRegisteredRCSUser", $._decode_implicit<StartOfInterceptForRegisteredRCSUser>(() => _decode_StartOfInterceptForRegisteredRCSUser) ],
    "CONTEXT 158": [ "startOfInterceptWithEstablisedRCSSession", $._decode_implicit<StartOfInterceptWithEstablisedRCSSession>(() => _decode_StartOfInterceptWithEstablisedRCSSession) ],
    "CONTEXT 159": [ "uDMProSeTargetIdentifierDeconcealment", $._decode_implicit<UDMProSeTargetIdentifierDeconcealment>(() => _decode_UDMProSeTargetIdentifierDeconcealment) ],
    "CONTEXT 160": [ "uDMProSeTargetAuthentication", $._decode_implicit<UDMProSeTargetAuthentication>(() => _decode_UDMProSeTargetAuthentication) ],
    "CONTEXT 162": [ "iMSDataChannelSetup", $._decode_implicit<IMSDataChannelSetup>(() => _decode_IMSDataChannelSetup) ],
    "CONTEXT 163": [ "iMSDataChannelModification", $._decode_implicit<IMSDataChannelModification>(() => _decode_IMSDataChannelModification) ],
    "CONTEXT 164": [ "iMSDataChannelTermination", $._decode_implicit<IMSDataChannelTermination>(() => _decode_IMSDataChannelTermination) ],
    "CONTEXT 165": [ "mMSConvertedFromEmail", $._decode_implicit<MMSConvertedFromEmail>(() => _decode_MMSConvertedFromEmail) ],
    "CONTEXT 166": [ "mMSConvertedToEmail", $._decode_implicit<MMSConvertedToEmail>(() => _decode_MMSConvertedToEmail) ],
    "CONTEXT 167": [ "nEF5GVNGroupCreation", $._decode_implicit<NEF5GVNGroupCreation>(() => _decode_NEF5GVNGroupCreation) ],
    "CONTEXT 168": [ "nEF5GVNGroupUpdate", $._decode_implicit<NEF5GVNGroupUpdate>(() => _decode_NEF5GVNGroupUpdate) ],
    "CONTEXT 169": [ "nEF5GVNGroupDeletion", $._decode_implicit<NEF5GVNGroupDeletion>(() => _decode_NEF5GVNGroupDeletion) ],
    "CONTEXT 170": [ "nEF5GVNGroupQuery", $._decode_implicit<NEF5GVNGroupQuery>(() => _decode_NEF5GVNGroupQuery) ],
    "CONTEXT 171": [ "hSSSubscriberRecordChange", $._decode_implicit<HSSSubscriberRecordChange>(() => _decode_HSSSubscriberRecordChange) ],
    "CONTEXT 172": [ "iMSHSSServingSystemMessage", $._decode_implicit<IMSHSSServingSystemMessage>(() => _decode_IMSHSSServingSystemMessage) ],
    "CONTEXT 173": [ "iMSHSSStartOfInterceptionWithRegisteredTarget", $._decode_implicit<IMSHSSStartOfInterceptionWithRegisteredTarget>(() => _decode_IMSHSSStartOfInterceptionWithRegisteredTarget) ],
    "CONTEXT 174": [ "iMSHSSSubscriberRecordChange", $._decode_implicit<IMSHSSSubscriberRecordChange>(() => _decode_IMSHSSSubscriberRecordChange) ],
    "CONTEXT 175": [ "aMFUEContextUpdate", $._decode_implicit<AMFUEContextUpdate>(() => _decode_AMFUEContextUpdate) ],
    "CONTEXT 176": [ "ePSPDNConnectionEstablishment", $._decode_implicit<EPSPDNConnectionEstablishment>(() => _decode_EPSPDNConnectionEstablishment) ],
    "CONTEXT 177": [ "ePSPDNConnectionModification", $._decode_implicit<EPSPDNConnectionModification>(() => _decode_EPSPDNConnectionModification) ],
    "CONTEXT 178": [ "ePSPDNConnectionRelease", $._decode_implicit<EPSPDNConnectionRelease>(() => _decode_EPSPDNConnectionRelease) ],
    "CONTEXT 179": [ "ePSStartOfInterceptionWithEstablishedPDNConnection", $._decode_implicit<EPSStartOfInterceptionWithEstablishedPDNConnection>(() => _decode_EPSStartOfInterceptionWithEstablishedPDNConnection) ],
    "CONTEXT 180": [ "ePSPDNUnsuccessfulProcedure", $._decode_implicit<EPSPDNUnsuccessfulProcedure>(() => _decode_EPSPDNUnsuccessfulProcedure) ],
    "CONTEXT 181": [ "startOfInterceptionWithEstablishedIMSDataChannel", $._decode_implicit<StartOfInterceptionWithEstablishedIMSDataChannel>(() => _decode_StartOfInterceptionWithEstablishedIMSDataChannel) ],
    "CONTEXT 182": [ "sMFProSeRemoteUEReport", $._decode_implicit<SMFProSeRemoteUEReport>(() => _decode_SMFProSeRemoteUEReport) ],
    "CONTEXT 183": [ "sMFStartOfInterceptionWithConnectedProSeRemoteUE", $._decode_implicit<SMFStartOfInterceptionWithConnectedProSeRemoteUE>(() => _decode_SMFStartOfInterceptionWithConnectedProSeRemoteUE) ],
    "CONTEXT 184": [ "fiveGDDNMFProSeUNIDirectDiscovery", $._decode_implicit<FiveGDDNMFProSeUNIDirectDiscovery>(() => _decode_FiveGDDNMFProSeUNIDirectDiscovery) ],
    "CONTEXT 185": [ "fiveGDDNMFProSeNNIDirectDiscovery", $._decode_implicit<FiveGDDNMFProSeNNIDirectDiscovery>(() => _decode_FiveGDDNMFProSeNNIDirectDiscovery) ],
    "CONTEXT 186": [ "aMFIdentifierDeassociation", $._decode_implicit<AMFIdentifierDeassociation>(() => _decode_AMFIdentifierDeassociation) ],
    "CONTEXT 187": [ "mMEIdentifierDeassociation", $._decode_implicit<MMEIdentifierDeassociation>(() => _decode_MMEIdentifierDeassociation) ],
    "CONTEXT 188": [ "fiveGPINAPPMessage", $._decode_implicit<FiveGPINAPPMessage>(() => _decode_FiveGPINAPPMessage) ],
    "CONTEXT 189": [ "fiveGStartOfInterceptionWithPINClientInPIN", $._decode_explicit<FiveGStartOfInterceptionWithPINClientInPIN>(() => _decode_FiveGStartOfInterceptionWithPINClientInPIN) ],
    "CONTEXT 190": [ "chargingDataEvent", $._decode_implicit<ChargingDataEvent>(() => _decode_ChargingDataEvent) ]
}); }
    return _cached_decoder_for_IRIEvent(el);
}

let _cached_encoder_for_IRIEvent: $.ASN1Encoder<IRIEvent> | null = null;

/**
 * @summary Encodes a(n) IRIEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIEvent, encoded as an ASN.1 Element.
 */
export
function _encode_IRIEvent (value: IRIEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIEvent) { _cached_encoder_for_IRIEvent = $._encode_choice<IRIEvent>({
    "registration": $._encode_implicit(_TagClass.context, 1, () => _encode_AMFRegistration, $.BER),
    "deregistration": $._encode_implicit(_TagClass.context, 2, () => _encode_AMFDeregistration, $.BER),
    "locationUpdate": $._encode_implicit(_TagClass.context, 3, () => _encode_AMFLocationUpdate, $.BER),
    "startOfInterceptionWithRegisteredUE": $._encode_implicit(_TagClass.context, 4, () => _encode_AMFStartOfInterceptionWithRegisteredUE, $.BER),
    "unsuccessfulAMProcedure": $._encode_implicit(_TagClass.context, 5, () => _encode_AMFUnsuccessfulProcedure, $.BER),
    "pDUSessionEstablishment": $._encode_implicit(_TagClass.context, 6, () => _encode_SMFPDUSessionEstablishment, $.BER),
    "pDUSessionModification": $._encode_implicit(_TagClass.context, 7, () => _encode_SMFPDUSessionModification, $.BER),
    "pDUSessionRelease": $._encode_implicit(_TagClass.context, 8, () => _encode_SMFPDUSessionRelease, $.BER),
    "startOfInterceptionWithEstablishedPDUSession": $._encode_implicit(_TagClass.context, 9, () => _encode_SMFStartOfInterceptionWithEstablishedPDUSession, $.BER),
    "unsuccessfulSMProcedure": $._encode_implicit(_TagClass.context, 10, () => _encode_SMFUnsuccessfulProcedure, $.BER),
    "servingSystemMessage": $._encode_implicit(_TagClass.context, 11, () => _encode_UDMServingSystemMessage, $.BER),
    "sMSMessage": $._encode_implicit(_TagClass.context, 12, () => _encode_SMSMessage, $.BER),
    "lALSReport": $._encode_implicit(_TagClass.context, 13, () => _encode_LALSReport, $.BER),
    "pDHeaderReport": $._encode_implicit(_TagClass.context, 14, () => _encode_PDHeaderReport, $.BER),
    "pDSummaryReport": $._encode_implicit(_TagClass.context, 15, () => _encode_PDSummaryReport, $.BER),
    "mDFCellSiteReport": $._encode_implicit(_TagClass.context, 16, () => _encode_MDFCellSiteReport, $.BER),
    "mMSSend": $._encode_implicit(_TagClass.context, 17, () => _encode_MMSSend, $.BER),
    "mMSSendByNonLocalTarget": $._encode_implicit(_TagClass.context, 18, () => _encode_MMSSendByNonLocalTarget, $.BER),
    "mMSNotification": $._encode_implicit(_TagClass.context, 19, () => _encode_MMSNotification, $.BER),
    "mMSSendToNonLocalTarget": $._encode_implicit(_TagClass.context, 20, () => _encode_MMSSendToNonLocalTarget, $.BER),
    "mMSNotificationResponse": $._encode_implicit(_TagClass.context, 21, () => _encode_MMSNotificationResponse, $.BER),
    "mMSRetrieval": $._encode_implicit(_TagClass.context, 22, () => _encode_MMSRetrieval, $.BER),
    "mMSDeliveryAck": $._encode_implicit(_TagClass.context, 23, () => _encode_MMSDeliveryAck, $.BER),
    "mMSForward": $._encode_implicit(_TagClass.context, 24, () => _encode_MMSForward, $.BER),
    "mMSDeleteFromRelay": $._encode_implicit(_TagClass.context, 25, () => _encode_MMSDeleteFromRelay, $.BER),
    "mMSDeliveryReport": $._encode_implicit(_TagClass.context, 26, () => _encode_MMSDeliveryReport, $.BER),
    "mMSDeliveryReportNonLocalTarget": $._encode_implicit(_TagClass.context, 27, () => _encode_MMSDeliveryReportNonLocalTarget, $.BER),
    "mMSReadReport": $._encode_implicit(_TagClass.context, 28, () => _encode_MMSReadReport, $.BER),
    "mMSReadReportNonLocalTarget": $._encode_implicit(_TagClass.context, 29, () => _encode_MMSReadReportNonLocalTarget, $.BER),
    "mMSCancel": $._encode_implicit(_TagClass.context, 30, () => _encode_MMSCancel, $.BER),
    "mMSMBoxStore": $._encode_implicit(_TagClass.context, 31, () => _encode_MMSMBoxStore, $.BER),
    "mMSMBoxUpload": $._encode_implicit(_TagClass.context, 32, () => _encode_MMSMBoxUpload, $.BER),
    "mMSMBoxDelete": $._encode_implicit(_TagClass.context, 33, () => _encode_MMSMBoxDelete, $.BER),
    "mMSMBoxViewRequest": $._encode_implicit(_TagClass.context, 34, () => _encode_MMSMBoxViewRequest, $.BER),
    "mMSMBoxViewResponse": $._encode_implicit(_TagClass.context, 35, () => _encode_MMSMBoxViewResponse, $.BER),
    "pTCRegistration": $._encode_implicit(_TagClass.context, 36, () => _encode_PTCRegistration, $.BER),
    "pTCSessionInitiation": $._encode_implicit(_TagClass.context, 37, () => _encode_PTCSessionInitiation, $.BER),
    "pTCSessionAbandon": $._encode_implicit(_TagClass.context, 38, () => _encode_PTCSessionAbandon, $.BER),
    "pTCSessionStart": $._encode_implicit(_TagClass.context, 39, () => _encode_PTCSessionStart, $.BER),
    "pTCSessionEnd": $._encode_implicit(_TagClass.context, 40, () => _encode_PTCSessionEnd, $.BER),
    "pTCStartOfInterception": $._encode_implicit(_TagClass.context, 41, () => _encode_PTCStartOfInterception, $.BER),
    "pTCPreEstablishedSession": $._encode_implicit(_TagClass.context, 42, () => _encode_PTCPreEstablishedSession, $.BER),
    "pTCInstantPersonalAlert": $._encode_implicit(_TagClass.context, 43, () => _encode_PTCInstantPersonalAlert, $.BER),
    "pTCPartyJoin": $._encode_implicit(_TagClass.context, 44, () => _encode_PTCPartyJoin, $.BER),
    "pTCPartyDrop": $._encode_implicit(_TagClass.context, 45, () => _encode_PTCPartyDrop, $.BER),
    "pTCPartyHold": $._encode_implicit(_TagClass.context, 46, () => _encode_PTCPartyHold, $.BER),
    "pTCMediaModification": $._encode_implicit(_TagClass.context, 47, () => _encode_PTCMediaModification, $.BER),
    "pTCGroupAdvertisement": $._encode_implicit(_TagClass.context, 48, () => _encode_PTCGroupAdvertisement, $.BER),
    "pTCFloorControl": $._encode_implicit(_TagClass.context, 49, () => _encode_PTCFloorControl, $.BER),
    "pTCTargetPresence": $._encode_implicit(_TagClass.context, 50, () => _encode_PTCTargetPresence, $.BER),
    "pTCParticipantPresence": $._encode_implicit(_TagClass.context, 51, () => _encode_PTCParticipantPresence, $.BER),
    "pTCListManagement": $._encode_implicit(_TagClass.context, 52, () => _encode_PTCListManagement, $.BER),
    "pTCAccessPolicy": $._encode_implicit(_TagClass.context, 53, () => _encode_PTCAccessPolicy, $.BER),
    "subscriberRecordChangeMessage": $._encode_implicit(_TagClass.context, 54, () => _encode_UDMSubscriberRecordChangeMessage, $.BER),
    "cancelLocationMessage": $._encode_implicit(_TagClass.context, 55, () => _encode_UDMCancelLocationMessage, $.BER),
    "sMSReport": $._encode_implicit(_TagClass.context, 56, () => _encode_SMSReport, $.BER),
    "sMFMAPDUSessionEstablishment": $._encode_implicit(_TagClass.context, 57, () => _encode_SMFMAPDUSessionEstablishment, $.BER),
    "sMFMAPDUSessionModification": $._encode_implicit(_TagClass.context, 58, () => _encode_SMFMAPDUSessionModification, $.BER),
    "sMFMAPDUSessionRelease": $._encode_implicit(_TagClass.context, 59, () => _encode_SMFMAPDUSessionRelease, $.BER),
    "startOfInterceptionWithEstablishedMAPDUSession": $._encode_implicit(_TagClass.context, 60, () => _encode_SMFStartOfInterceptionWithEstablishedMAPDUSession, $.BER),
    "unsuccessfulMASMProcedure": $._encode_implicit(_TagClass.context, 61, () => _encode_SMFMAUnsuccessfulProcedure, $.BER),
    "aMFIdentifierAssociation": $._encode_implicit(_TagClass.context, 62, () => _encode_AMFIdentifierAssociation, $.BER),
    "mMEIdentifierAssociation": $._encode_implicit(_TagClass.context, 63, () => _encode_MMEIdentifierAssociation, $.BER),
    "sMFPDUtoMAPDUSessionModification": $._encode_implicit(_TagClass.context, 64, () => _encode_SMFPDUtoMAPDUSessionModification, $.BER),
    "nEFPDUSessionEstablishment": $._encode_implicit(_TagClass.context, 65, () => _encode_NEFPDUSessionEstablishment, $.BER),
    "nEFPDUSessionModification": $._encode_implicit(_TagClass.context, 66, () => _encode_NEFPDUSessionModification, $.BER),
    "nEFPDUSessionRelease": $._encode_implicit(_TagClass.context, 67, () => _encode_NEFPDUSessionRelease, $.BER),
    "nEFUnsuccessfulProcedure": $._encode_implicit(_TagClass.context, 68, () => _encode_NEFUnsuccessfulProcedure, $.BER),
    "nEFStartOfInterceptionWithEstablishedPDUSession": $._encode_implicit(_TagClass.context, 69, () => _encode_NEFStartOfInterceptionWithEstablishedPDUSession, $.BER),
    "nEFdeviceTrigger": $._encode_implicit(_TagClass.context, 70, () => _encode_NEFDeviceTrigger, $.BER),
    "nEFdeviceTriggerReplace": $._encode_implicit(_TagClass.context, 71, () => _encode_NEFDeviceTriggerReplace, $.BER),
    "nEFdeviceTriggerCancellation": $._encode_implicit(_TagClass.context, 72, () => _encode_NEFDeviceTriggerCancellation, $.BER),
    "nEFdeviceTriggerReportNotify": $._encode_implicit(_TagClass.context, 73, () => _encode_NEFDeviceTriggerReportNotify, $.BER),
    "nEFMSISDNLessMOSMS": $._encode_implicit(_TagClass.context, 74, () => _encode_NEFMSISDNLessMOSMS, $.BER),
    "nEFExpectedUEBehaviourUpdate": $._encode_implicit(_TagClass.context, 75, () => _encode_NEFExpectedUEBehaviourUpdate, $.BER),
    "sCEFPDNConnectionEstablishment": $._encode_implicit(_TagClass.context, 76, () => _encode_SCEFPDNConnectionEstablishment, $.BER),
    "sCEFPDNConnectionUpdate": $._encode_implicit(_TagClass.context, 77, () => _encode_SCEFPDNConnectionUpdate, $.BER),
    "sCEFPDNConnectionRelease": $._encode_implicit(_TagClass.context, 78, () => _encode_SCEFPDNConnectionRelease, $.BER),
    "sCEFUnsuccessfulProcedure": $._encode_implicit(_TagClass.context, 79, () => _encode_SCEFUnsuccessfulProcedure, $.BER),
    "sCEFStartOfInterceptionWithEstablishedPDNConnection": $._encode_implicit(_TagClass.context, 80, () => _encode_SCEFStartOfInterceptionWithEstablishedPDNConnection, $.BER),
    "sCEFdeviceTrigger": $._encode_implicit(_TagClass.context, 81, () => _encode_SCEFDeviceTrigger, $.BER),
    "sCEFdeviceTriggerReplace": $._encode_implicit(_TagClass.context, 82, () => _encode_SCEFDeviceTriggerReplace, $.BER),
    "sCEFdeviceTriggerCancellation": $._encode_implicit(_TagClass.context, 83, () => _encode_SCEFDeviceTriggerCancellation, $.BER),
    "sCEFdeviceTriggerReportNotify": $._encode_implicit(_TagClass.context, 84, () => _encode_SCEFDeviceTriggerReportNotify, $.BER),
    "sCEFMSISDNLessMOSMS": $._encode_implicit(_TagClass.context, 85, () => _encode_SCEFMSISDNLessMOSMS, $.BER),
    "sCEFCommunicationPatternUpdate": $._encode_implicit(_TagClass.context, 86, () => _encode_SCEFCommunicationPatternUpdate, $.BER),
    "mMEAttach": $._encode_implicit(_TagClass.context, 87, () => _encode_MMEAttach, $.BER),
    "mMEDetach": $._encode_implicit(_TagClass.context, 88, () => _encode_MMEDetach, $.BER),
    "mMELocationUpdate": $._encode_implicit(_TagClass.context, 89, () => _encode_MMELocationUpdate, $.BER),
    "mMEStartOfInterceptionWithEPSAttachedUE": $._encode_implicit(_TagClass.context, 90, () => _encode_MMEStartOfInterceptionWithEPSAttachedUE, $.BER),
    "mMEUnsuccessfulProcedure": $._encode_implicit(_TagClass.context, 91, () => _encode_MMEUnsuccessfulProcedure, $.BER),
    "aAnFAnchorKeyRegister": $._encode_implicit(_TagClass.context, 92, () => _encode_AAnFAnchorKeyRegister, $.BER),
    "aAnFKAKMAApplicationKeyGet": $._encode_implicit(_TagClass.context, 93, () => _encode_AAnFKAKMAApplicationKeyGet, $.BER),
    "aAnFStartOfInterceptWithEstablishedAKMAKeyMaterial": $._encode_implicit(_TagClass.context, 94, () => _encode_AAnFStartOfInterceptWithEstablishedAKMAKeyMaterial, $.BER),
    "aAnFAKMAContextRemovalRecord": $._encode_implicit(_TagClass.context, 95, () => _encode_AAnFAKMAContextRemovalRecord, $.BER),
    "aFAKMAApplicationKeyRefresh": $._encode_implicit(_TagClass.context, 96, () => _encode_AFAKMAApplicationKeyRefresh, $.BER),
    "aFStartOfInterceptWithEstablishedAKMAApplicationKey": $._encode_implicit(_TagClass.context, 97, () => _encode_AFStartOfInterceptWithEstablishedAKMAApplicationKey, $.BER),
    "aFAuxiliarySecurityParameterEstablishment": $._encode_implicit(_TagClass.context, 98, () => _encode_AFAuxiliarySecurityParameterEstablishment, $.BER),
    "aFApplicationKeyRemoval": $._encode_implicit(_TagClass.context, 99, () => _encode_AFApplicationKeyRemoval, $.BER),
    "separatedLocationReporting": $._encode_implicit(_TagClass.context, 102, () => _encode_SeparatedLocationReporting, $.BER),
    "sTIRSHAKENSignatureGeneration": $._encode_implicit(_TagClass.context, 103, () => _encode_STIRSHAKENSignatureGeneration, $.BER),
    "sTIRSHAKENSignatureValidation": $._encode_implicit(_TagClass.context, 104, () => _encode_STIRSHAKENSignatureValidation, $.BER),
    "iMSMessage": $._encode_implicit(_TagClass.context, 105, () => _encode_IMSMessage, $.BER),
    "startOfInterceptionForActiveIMSSession": $._encode_implicit(_TagClass.context, 106, () => _encode_StartOfInterceptionForActiveIMSSession, $.BER),
    "iMSCCUnavailable": $._encode_implicit(_TagClass.context, 107, () => _encode_IMSCCUnavailable, $.BER),
    "uDMLocationInformationResult": $._encode_implicit(_TagClass.context, 108, () => _encode_UDMLocationInformationResult, $.BER),
    "uDMUEInformationResponse": $._encode_implicit(_TagClass.context, 109, () => _encode_UDMUEInformationResponse, $.BER),
    "uDMUEAuthenticationResponse": $._encode_implicit(_TagClass.context, 110, () => _encode_UDMUEAuthenticationResponse, $.BER),
    "positioningInfoTransfer": $._encode_implicit(_TagClass.context, 111, () => _encode_AMFPositioningInfoTransfer, $.BER),
    "mMEPositioningInfoTransfer": $._encode_implicit(_TagClass.context, 112, () => _encode_MMEPositioningInfoTransfer, $.BER),
    "aMFRANHandoverCommand": $._encode_implicit(_TagClass.context, 113, () => _encode_AMFRANHandoverCommand, $.BER),
    "aMFRANHandoverRequest": $._encode_implicit(_TagClass.context, 114, () => _encode_AMFRANHandoverRequest, $.BER),
    "eESEECRegistration": $._encode_implicit(_TagClass.context, 115, () => _encode_EESEECRegistration, $.BER),
    "eESEASDiscovery": $._encode_implicit(_TagClass.context, 116, () => _encode_EESEASDiscovery, $.BER),
    "eESEASDiscoverySubscription": $._encode_implicit(_TagClass.context, 117, () => _encode_EESEASDiscoverySubscription, $.BER),
    "eESEASDiscoveryNotification": $._encode_implicit(_TagClass.context, 118, () => _encode_EESEASDiscoveryNotification, $.BER),
    "eESAppContextRelocation": $._encode_implicit(_TagClass.context, 119, () => _encode_EESAppContextRelocation, $.BER),
    "eESACRSubscription": $._encode_implicit(_TagClass.context, 120, () => _encode_EESACRSubscription, $.BER),
    "eESACRNotification": $._encode_implicit(_TagClass.context, 121, () => _encode_EESACRNotification, $.BER),
    "eESEECContextRelocation": $._encode_implicit(_TagClass.context, 122, () => _encode_EESEECContextRelocation, $.BER),
    "eESStartOfInterceptionWithRegisteredEEC": $._encode_implicit(_TagClass.context, 123, () => _encode_EESStartOfInterceptionWithRegisteredEEC, $.BER),
    "uDMStartOfInterceptionWithRegisteredTarget": $._encode_implicit(_TagClass.context, 124, () => _encode_UDMStartOfInterceptionWithRegisteredTarget, $.BER),
    "fiveGMSAFServiceAccessInformation": $._encode_implicit(_TagClass.context, 125, () => _encode_FiveGMSAFServiceAccessInformation, $.BER),
    "fiveGMSAFConsumptionReporting": $._encode_implicit(_TagClass.context, 126, () => _encode_FiveGMSAFConsumptionReporting, $.BER),
    "fiveGMSAFDynamicPolicyInvocation": $._encode_implicit(_TagClass.context, 127, () => _encode_FiveGMSAFDynamicPolicyInvocation, $.BER),
    "fiveGMSAFMetricsReporting": $._encode_implicit(_TagClass.context, 128, () => _encode_FiveGMSAFMetricsReporting, $.BER),
    "fiveGMSAFNetworkAssistance": $._encode_implicit(_TagClass.context, 129, () => _encode_FiveGMSAFNetworkAssistance, $.BER),
    "fiveGMSAFUnsuccessfulProcedure": $._encode_implicit(_TagClass.context, 130, () => _encode_FiveGMSAFUnsuccessfulProcedure, $.BER),
    "fiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE": $._encode_implicit(_TagClass.context, 131, () => _encode_FiveGMSAFStartOfInterceptionWithAlreadyConfiguredUE, $.BER),
    "aMFUEConfigurationUpdate": $._encode_implicit(_TagClass.context, 132, () => _encode_AMFUEConfigurationUpdate, $.BER),
    "hSSServingSystemMessage": $._encode_implicit(_TagClass.context, 133, () => _encode_HSSServingSystemMessage, $.BER),
    "hSSStartOfInterceptionWithRegisteredTarget": $._encode_implicit(_TagClass.context, 134, () => _encode_HSSStartOfInterceptionWithRegisteredTarget, $.BER),
    "nEFAFSessionWithQoSProvision": $._encode_implicit(_TagClass.context, 135, () => _encode_NEFAFSessionWithQoSProvision, $.BER),
    "nEFAFSessionWithQoSNotification": $._encode_implicit(_TagClass.context, 136, () => _encode_NEFAFSessionWithQoSNotification, $.BER),
    "sCEFASSessionWithQoSProvision": $._encode_implicit(_TagClass.context, 137, () => _encode_SCEFASSessionWithQoSProvision, $.BER),
    "sCEFASSessionWithQoSNotification": $._encode_implicit(_TagClass.context, 138, () => _encode_SCEFASSessionWithQoSNotification, $.BER),
    "aMFRANTraceReport": $._encode_implicit(_TagClass.context, 139, () => _encode_AMFRANTraceReport, $.BER),
    "rCSRegistration": $._encode_implicit(_TagClass.context, 140, () => _encode_RCSRegistration, $.BER),
    "rCSMessage": $._encode_implicit(_TagClass.context, 141, () => _encode_RCSMessage, $.BER),
    "rCSCapabilityDiscovery": $._encode_implicit(_TagClass.context, 142, () => _encode_RCSCapabilityDiscovery, $.BER),
    "rCSSessionEstablishment": $._encode_implicit(_TagClass.context, 143, () => _encode_RCSSessionEstablishment, $.BER),
    "rCSSessionModification": $._encode_implicit(_TagClass.context, 144, () => _encode_RCSSessionModification, $.BER),
    "rCSSessionRelease": $._encode_implicit(_TagClass.context, 145, () => _encode_RCSSessionRelease, $.BER),
    "aMFUEPolicyTransfer": $._encode_implicit(_TagClass.context, 146, () => _encode_AMFUEPolicyTransfer, $.BER),
    "aMFUEServiceAccept": $._encode_implicit(_TagClass.context, 147, () => _encode_AMFUEServiceAccept, $.BER),
    "ePSRANHandoverCommand": $._encode_implicit(_TagClass.context, 148, () => _encode_EPSRANHandoverCommand, $.BER),
    "ePSRANHandoverRequest": $._encode_implicit(_TagClass.context, 149, () => _encode_EPSRANHandoverRequest, $.BER),
    "mMERANTraceReport": $._encode_implicit(_TagClass.context, 150, () => _encode_MMERANTraceReport, $.BER),
    "mMEUEServiceAccept": $._encode_implicit(_TagClass.context, 151, () => _encode_MMEUEServiceAccept, $.BER),
    "nWDAFEventsSubscription": $._encode_implicit(_TagClass.context, 152, () => _encode_NWDAFEventsSubscription, $.BER),
    "nWDAFEventsNotification": $._encode_implicit(_TagClass.context, 153, () => _encode_NWDAFEventsNotification, $.BER),
    "nWDAFAnalyticsInfoQuery": $._encode_implicit(_TagClass.context, 154, () => _encode_NWDAFAnalyticsInfoQuery, $.BER),
    "nWDAFRoamingAnalyticsSubscription": $._encode_implicit(_TagClass.context, 155, () => _encode_NWDAFRoamingAnalyticsSubscription, $.BER),
    "nWDAFRoamingAnalyticsNotification": $._encode_implicit(_TagClass.context, 156, () => _encode_NWDAFRoamingAnalyticsNotification, $.BER),
    "startOfInterceptForRegisteredRCSUser": $._encode_implicit(_TagClass.context, 157, () => _encode_StartOfInterceptForRegisteredRCSUser, $.BER),
    "startOfInterceptWithEstablisedRCSSession": $._encode_implicit(_TagClass.context, 158, () => _encode_StartOfInterceptWithEstablisedRCSSession, $.BER),
    "uDMProSeTargetIdentifierDeconcealment": $._encode_implicit(_TagClass.context, 159, () => _encode_UDMProSeTargetIdentifierDeconcealment, $.BER),
    "uDMProSeTargetAuthentication": $._encode_implicit(_TagClass.context, 160, () => _encode_UDMProSeTargetAuthentication, $.BER),
    "iMSDataChannelSetup": $._encode_implicit(_TagClass.context, 162, () => _encode_IMSDataChannelSetup, $.BER),
    "iMSDataChannelModification": $._encode_implicit(_TagClass.context, 163, () => _encode_IMSDataChannelModification, $.BER),
    "iMSDataChannelTermination": $._encode_implicit(_TagClass.context, 164, () => _encode_IMSDataChannelTermination, $.BER),
    "mMSConvertedFromEmail": $._encode_implicit(_TagClass.context, 165, () => _encode_MMSConvertedFromEmail, $.BER),
    "mMSConvertedToEmail": $._encode_implicit(_TagClass.context, 166, () => _encode_MMSConvertedToEmail, $.BER),
    "nEF5GVNGroupCreation": $._encode_implicit(_TagClass.context, 167, () => _encode_NEF5GVNGroupCreation, $.BER),
    "nEF5GVNGroupUpdate": $._encode_implicit(_TagClass.context, 168, () => _encode_NEF5GVNGroupUpdate, $.BER),
    "nEF5GVNGroupDeletion": $._encode_implicit(_TagClass.context, 169, () => _encode_NEF5GVNGroupDeletion, $.BER),
    "nEF5GVNGroupQuery": $._encode_implicit(_TagClass.context, 170, () => _encode_NEF5GVNGroupQuery, $.BER),
    "hSSSubscriberRecordChange": $._encode_implicit(_TagClass.context, 171, () => _encode_HSSSubscriberRecordChange, $.BER),
    "iMSHSSServingSystemMessage": $._encode_implicit(_TagClass.context, 172, () => _encode_IMSHSSServingSystemMessage, $.BER),
    "iMSHSSStartOfInterceptionWithRegisteredTarget": $._encode_implicit(_TagClass.context, 173, () => _encode_IMSHSSStartOfInterceptionWithRegisteredTarget, $.BER),
    "iMSHSSSubscriberRecordChange": $._encode_implicit(_TagClass.context, 174, () => _encode_IMSHSSSubscriberRecordChange, $.BER),
    "aMFUEContextUpdate": $._encode_implicit(_TagClass.context, 175, () => _encode_AMFUEContextUpdate, $.BER),
    "ePSPDNConnectionEstablishment": $._encode_implicit(_TagClass.context, 176, () => _encode_EPSPDNConnectionEstablishment, $.BER),
    "ePSPDNConnectionModification": $._encode_implicit(_TagClass.context, 177, () => _encode_EPSPDNConnectionModification, $.BER),
    "ePSPDNConnectionRelease": $._encode_implicit(_TagClass.context, 178, () => _encode_EPSPDNConnectionRelease, $.BER),
    "ePSStartOfInterceptionWithEstablishedPDNConnection": $._encode_implicit(_TagClass.context, 179, () => _encode_EPSStartOfInterceptionWithEstablishedPDNConnection, $.BER),
    "ePSPDNUnsuccessfulProcedure": $._encode_implicit(_TagClass.context, 180, () => _encode_EPSPDNUnsuccessfulProcedure, $.BER),
    "startOfInterceptionWithEstablishedIMSDataChannel": $._encode_implicit(_TagClass.context, 181, () => _encode_StartOfInterceptionWithEstablishedIMSDataChannel, $.BER),
    "sMFProSeRemoteUEReport": $._encode_implicit(_TagClass.context, 182, () => _encode_SMFProSeRemoteUEReport, $.BER),
    "sMFStartOfInterceptionWithConnectedProSeRemoteUE": $._encode_implicit(_TagClass.context, 183, () => _encode_SMFStartOfInterceptionWithConnectedProSeRemoteUE, $.BER),
    "fiveGDDNMFProSeUNIDirectDiscovery": $._encode_implicit(_TagClass.context, 184, () => _encode_FiveGDDNMFProSeUNIDirectDiscovery, $.BER),
    "fiveGDDNMFProSeNNIDirectDiscovery": $._encode_implicit(_TagClass.context, 185, () => _encode_FiveGDDNMFProSeNNIDirectDiscovery, $.BER),
    "aMFIdentifierDeassociation": $._encode_implicit(_TagClass.context, 186, () => _encode_AMFIdentifierDeassociation, $.BER),
    "mMEIdentifierDeassociation": $._encode_implicit(_TagClass.context, 187, () => _encode_MMEIdentifierDeassociation, $.BER),
    "fiveGPINAPPMessage": $._encode_implicit(_TagClass.context, 188, () => _encode_FiveGPINAPPMessage, $.BER),
    "fiveGStartOfInterceptionWithPINClientInPIN": $._encode_explicit(_TagClass.context, 189, () => _encode_FiveGStartOfInterceptionWithPINClientInPIN, $.BER),
    "chargingDataEvent": $._encode_implicit(_TagClass.context, 190, () => _encode_ChargingDataEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_IRIEvent(value, elGetter);
}


/* eslint-enable */

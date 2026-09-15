/* eslint-disable */
import {
    NULL,
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
import { Status_Response, _decode_Status_Response, _encode_Status_Response } from "../ISO-9506-MMS-1/Status-Response.ta.mjs";
// export { Status_Response, _decode_Status_Response, _encode_Status_Response } from "../ISO-9506-MMS-1/Status-Response.ta.mjs";
import { GetNameList_Response, _decode_GetNameList_Response, _encode_GetNameList_Response } from "../ISO-9506-MMS-1/GetNameList-Response.ta.mjs";
// export { GetNameList_Response, _decode_GetNameList_Response, _encode_GetNameList_Response } from "../ISO-9506-MMS-1/GetNameList-Response.ta.mjs";
import { Identify_Response, _decode_Identify_Response, _encode_Identify_Response } from "../ISO-9506-MMS-1/Identify-Response.ta.mjs";
// export { Identify_Response, _decode_Identify_Response, _encode_Identify_Response } from "../ISO-9506-MMS-1/Identify-Response.ta.mjs";
import { Rename_Response, _decode_Rename_Response, _encode_Rename_Response } from "../ISO-9506-MMS-1/Rename-Response.ta.mjs";
// export { Rename_Response, _decode_Rename_Response, _encode_Rename_Response } from "../ISO-9506-MMS-1/Rename-Response.ta.mjs";
import { Read_Response, _decode_Read_Response, _encode_Read_Response } from "../ISO-9506-MMS-1/Read-Response.ta.mjs";
// export { Read_Response, _decode_Read_Response, _encode_Read_Response } from "../ISO-9506-MMS-1/Read-Response.ta.mjs";
import { Write_Response, _decode_Write_Response, _encode_Write_Response } from "../ISO-9506-MMS-1/Write-Response.ta.mjs";
// export { Write_Response, _decode_Write_Response, _encode_Write_Response } from "../ISO-9506-MMS-1/Write-Response.ta.mjs";
import { GetVariableAccessAttributes_Response, _decode_GetVariableAccessAttributes_Response, _encode_GetVariableAccessAttributes_Response } from "../ISO-9506-MMS-1/GetVariableAccessAttributes-Response.ta.mjs";
// export { GetVariableAccessAttributes_Response, _decode_GetVariableAccessAttributes_Response, _encode_GetVariableAccessAttributes_Response } from "../ISO-9506-MMS-1/GetVariableAccessAttributes-Response.ta.mjs";
import { DefineNamedVariable_Response, _decode_DefineNamedVariable_Response, _encode_DefineNamedVariable_Response } from "../ISO-9506-MMS-1/DefineNamedVariable-Response.ta.mjs";
// export { DefineNamedVariable_Response, _decode_DefineNamedVariable_Response, _encode_DefineNamedVariable_Response } from "../ISO-9506-MMS-1/DefineNamedVariable-Response.ta.mjs";
import { DefineScatteredAccess_Response, _decode_DefineScatteredAccess_Response, _encode_DefineScatteredAccess_Response } from "../ISO-9506-MMS-1A/DefineScatteredAccess-Response.ta.mjs";
// export { DefineScatteredAccess_Response, _decode_DefineScatteredAccess_Response, _encode_DefineScatteredAccess_Response } from "../ISO-9506-MMS-1A/DefineScatteredAccess-Response.ta.mjs";
import { GetScatteredAccessAttributes_Response, _decode_GetScatteredAccessAttributes_Response, _encode_GetScatteredAccessAttributes_Response } from "../ISO-9506-MMS-1A/GetScatteredAccessAttributes-Response.ta.mjs";
// export { GetScatteredAccessAttributes_Response, _decode_GetScatteredAccessAttributes_Response, _encode_GetScatteredAccessAttributes_Response } from "../ISO-9506-MMS-1A/GetScatteredAccessAttributes-Response.ta.mjs";
import { DeleteVariableAccess_Response, _decode_DeleteVariableAccess_Response, _encode_DeleteVariableAccess_Response } from "../ISO-9506-MMS-1/DeleteVariableAccess-Response.ta.mjs";
// export { DeleteVariableAccess_Response, _decode_DeleteVariableAccess_Response, _encode_DeleteVariableAccess_Response } from "../ISO-9506-MMS-1/DeleteVariableAccess-Response.ta.mjs";
import { DefineNamedVariableList_Response, _decode_DefineNamedVariableList_Response, _encode_DefineNamedVariableList_Response } from "../ISO-9506-MMS-1/DefineNamedVariableList-Response.ta.mjs";
// export { DefineNamedVariableList_Response, _decode_DefineNamedVariableList_Response, _encode_DefineNamedVariableList_Response } from "../ISO-9506-MMS-1/DefineNamedVariableList-Response.ta.mjs";
import { GetNamedVariableListAttributes_Response, _decode_GetNamedVariableListAttributes_Response, _encode_GetNamedVariableListAttributes_Response } from "../ISO-9506-MMS-1/GetNamedVariableListAttributes-Response.ta.mjs";
// export { GetNamedVariableListAttributes_Response, _decode_GetNamedVariableListAttributes_Response, _encode_GetNamedVariableListAttributes_Response } from "../ISO-9506-MMS-1/GetNamedVariableListAttributes-Response.ta.mjs";
import { DeleteNamedVariableList_Response, _decode_DeleteNamedVariableList_Response, _encode_DeleteNamedVariableList_Response } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Response.ta.mjs";
// export { DeleteNamedVariableList_Response, _decode_DeleteNamedVariableList_Response, _encode_DeleteNamedVariableList_Response } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Response.ta.mjs";
import { DefineNamedType_Response, _decode_DefineNamedType_Response, _encode_DefineNamedType_Response } from "../ISO-9506-MMS-1/DefineNamedType-Response.ta.mjs";
// export { DefineNamedType_Response, _decode_DefineNamedType_Response, _encode_DefineNamedType_Response } from "../ISO-9506-MMS-1/DefineNamedType-Response.ta.mjs";
import { GetNamedTypeAttributes_Response, _decode_GetNamedTypeAttributes_Response, _encode_GetNamedTypeAttributes_Response } from "../ISO-9506-MMS-1/GetNamedTypeAttributes-Response.ta.mjs";
// export { GetNamedTypeAttributes_Response, _decode_GetNamedTypeAttributes_Response, _encode_GetNamedTypeAttributes_Response } from "../ISO-9506-MMS-1/GetNamedTypeAttributes-Response.ta.mjs";
import { DeleteNamedType_Response, _decode_DeleteNamedType_Response, _encode_DeleteNamedType_Response } from "../ISO-9506-MMS-1/DeleteNamedType-Response.ta.mjs";
// export { DeleteNamedType_Response, _decode_DeleteNamedType_Response, _encode_DeleteNamedType_Response } from "../ISO-9506-MMS-1/DeleteNamedType-Response.ta.mjs";
import { Input_Response, _decode_Input_Response, _encode_Input_Response } from "../ISO-9506-MMS-1/Input-Response.ta.mjs";
// export { Input_Response, _decode_Input_Response, _encode_Input_Response } from "../ISO-9506-MMS-1/Input-Response.ta.mjs";
import { Output_Response, _decode_Output_Response, _encode_Output_Response } from "../ISO-9506-MMS-1/Output-Response.ta.mjs";
// export { Output_Response, _decode_Output_Response, _encode_Output_Response } from "../ISO-9506-MMS-1/Output-Response.ta.mjs";
import { TakeControl_Response, _decode_TakeControl_Response, _encode_TakeControl_Response } from "../ISO-9506-MMS-1/TakeControl-Response.ta.mjs";
// export { TakeControl_Response, _decode_TakeControl_Response, _encode_TakeControl_Response } from "../ISO-9506-MMS-1/TakeControl-Response.ta.mjs";
import { RelinquishControl_Response, _decode_RelinquishControl_Response, _encode_RelinquishControl_Response } from "../ISO-9506-MMS-1/RelinquishControl-Response.ta.mjs";
// export { RelinquishControl_Response, _decode_RelinquishControl_Response, _encode_RelinquishControl_Response } from "../ISO-9506-MMS-1/RelinquishControl-Response.ta.mjs";
import { DefineSemaphore_Response, _decode_DefineSemaphore_Response, _encode_DefineSemaphore_Response } from "../ISO-9506-MMS-1/DefineSemaphore-Response.ta.mjs";
// export { DefineSemaphore_Response, _decode_DefineSemaphore_Response, _encode_DefineSemaphore_Response } from "../ISO-9506-MMS-1/DefineSemaphore-Response.ta.mjs";
import { DeleteSemaphore_Response, _decode_DeleteSemaphore_Response, _encode_DeleteSemaphore_Response } from "../ISO-9506-MMS-1/DeleteSemaphore-Response.ta.mjs";
// export { DeleteSemaphore_Response, _decode_DeleteSemaphore_Response, _encode_DeleteSemaphore_Response } from "../ISO-9506-MMS-1/DeleteSemaphore-Response.ta.mjs";
import { ReportSemaphoreStatus_Response, _decode_ReportSemaphoreStatus_Response, _encode_ReportSemaphoreStatus_Response } from "../ISO-9506-MMS-1/ReportSemaphoreStatus-Response.ta.mjs";
// export { ReportSemaphoreStatus_Response, _decode_ReportSemaphoreStatus_Response, _encode_ReportSemaphoreStatus_Response } from "../ISO-9506-MMS-1/ReportSemaphoreStatus-Response.ta.mjs";
import { ReportPoolSemaphoreStatus_Response, _decode_ReportPoolSemaphoreStatus_Response, _encode_ReportPoolSemaphoreStatus_Response } from "../ISO-9506-MMS-1/ReportPoolSemaphoreStatus-Response.ta.mjs";
// export { ReportPoolSemaphoreStatus_Response, _decode_ReportPoolSemaphoreStatus_Response, _encode_ReportPoolSemaphoreStatus_Response } from "../ISO-9506-MMS-1/ReportPoolSemaphoreStatus-Response.ta.mjs";
import { ReportSemaphoreEntryStatus_Response, _decode_ReportSemaphoreEntryStatus_Response, _encode_ReportSemaphoreEntryStatus_Response } from "../ISO-9506-MMS-1/ReportSemaphoreEntryStatus-Response.ta.mjs";
// export { ReportSemaphoreEntryStatus_Response, _decode_ReportSemaphoreEntryStatus_Response, _encode_ReportSemaphoreEntryStatus_Response } from "../ISO-9506-MMS-1/ReportSemaphoreEntryStatus-Response.ta.mjs";
import { InitiateDownloadSequence_Response, _decode_InitiateDownloadSequence_Response, _encode_InitiateDownloadSequence_Response } from "../ISO-9506-MMS-1/InitiateDownloadSequence-Response.ta.mjs";
// export { InitiateDownloadSequence_Response, _decode_InitiateDownloadSequence_Response, _encode_InitiateDownloadSequence_Response } from "../ISO-9506-MMS-1/InitiateDownloadSequence-Response.ta.mjs";
import { DownloadSegment_Response, _decode_DownloadSegment_Response, _encode_DownloadSegment_Response } from "../ISO-9506-MMS-1/DownloadSegment-Response.ta.mjs";
// export { DownloadSegment_Response, _decode_DownloadSegment_Response, _encode_DownloadSegment_Response } from "../ISO-9506-MMS-1/DownloadSegment-Response.ta.mjs";
import { TerminateDownloadSequence_Response, _decode_TerminateDownloadSequence_Response, _encode_TerminateDownloadSequence_Response } from "../ISO-9506-MMS-1/TerminateDownloadSequence-Response.ta.mjs";
// export { TerminateDownloadSequence_Response, _decode_TerminateDownloadSequence_Response, _encode_TerminateDownloadSequence_Response } from "../ISO-9506-MMS-1/TerminateDownloadSequence-Response.ta.mjs";
import { InitiateUploadSequence_Response, _decode_InitiateUploadSequence_Response, _encode_InitiateUploadSequence_Response } from "../ISO-9506-MMS-1/InitiateUploadSequence-Response.ta.mjs";
// export { InitiateUploadSequence_Response, _decode_InitiateUploadSequence_Response, _encode_InitiateUploadSequence_Response } from "../ISO-9506-MMS-1/InitiateUploadSequence-Response.ta.mjs";
import { UploadSegment_Response, _decode_UploadSegment_Response, _encode_UploadSegment_Response } from "../ISO-9506-MMS-1/UploadSegment-Response.ta.mjs";
// export { UploadSegment_Response, _decode_UploadSegment_Response, _encode_UploadSegment_Response } from "../ISO-9506-MMS-1/UploadSegment-Response.ta.mjs";
import { TerminateUploadSequence_Response, _decode_TerminateUploadSequence_Response, _encode_TerminateUploadSequence_Response } from "../ISO-9506-MMS-1/TerminateUploadSequence-Response.ta.mjs";
// export { TerminateUploadSequence_Response, _decode_TerminateUploadSequence_Response, _encode_TerminateUploadSequence_Response } from "../ISO-9506-MMS-1/TerminateUploadSequence-Response.ta.mjs";
import { RequestDomainDownload_Response, _decode_RequestDomainDownload_Response, _encode_RequestDomainDownload_Response } from "../ISO-9506-MMS-1/RequestDomainDownload-Response.ta.mjs";
// export { RequestDomainDownload_Response, _decode_RequestDomainDownload_Response, _encode_RequestDomainDownload_Response } from "../ISO-9506-MMS-1/RequestDomainDownload-Response.ta.mjs";
import { RequestDomainUpload_Response, _decode_RequestDomainUpload_Response, _encode_RequestDomainUpload_Response } from "../ISO-9506-MMS-1/RequestDomainUpload-Response.ta.mjs";
// export { RequestDomainUpload_Response, _decode_RequestDomainUpload_Response, _encode_RequestDomainUpload_Response } from "../ISO-9506-MMS-1/RequestDomainUpload-Response.ta.mjs";
import { LoadDomainContent_Response, _decode_LoadDomainContent_Response, _encode_LoadDomainContent_Response } from "../ISO-9506-MMS-1/LoadDomainContent-Response.ta.mjs";
// export { LoadDomainContent_Response, _decode_LoadDomainContent_Response, _encode_LoadDomainContent_Response } from "../ISO-9506-MMS-1/LoadDomainContent-Response.ta.mjs";
import { StoreDomainContent_Response, _decode_StoreDomainContent_Response, _encode_StoreDomainContent_Response } from "../ISO-9506-MMS-1/StoreDomainContent-Response.ta.mjs";
// export { StoreDomainContent_Response, _decode_StoreDomainContent_Response, _encode_StoreDomainContent_Response } from "../ISO-9506-MMS-1/StoreDomainContent-Response.ta.mjs";
import { DeleteDomain_Response, _decode_DeleteDomain_Response, _encode_DeleteDomain_Response } from "../ISO-9506-MMS-1/DeleteDomain-Response.ta.mjs";
// export { DeleteDomain_Response, _decode_DeleteDomain_Response, _encode_DeleteDomain_Response } from "../ISO-9506-MMS-1/DeleteDomain-Response.ta.mjs";
import { GetDomainAttributes_Response, _decode_GetDomainAttributes_Response, _encode_GetDomainAttributes_Response } from "../ISO-9506-MMS-1/GetDomainAttributes-Response.ta.mjs";
// export { GetDomainAttributes_Response, _decode_GetDomainAttributes_Response, _encode_GetDomainAttributes_Response } from "../ISO-9506-MMS-1/GetDomainAttributes-Response.ta.mjs";
import { CreateProgramInvocation_Response, _decode_CreateProgramInvocation_Response, _encode_CreateProgramInvocation_Response } from "../ISO-9506-MMS-1/CreateProgramInvocation-Response.ta.mjs";
// export { CreateProgramInvocation_Response, _decode_CreateProgramInvocation_Response, _encode_CreateProgramInvocation_Response } from "../ISO-9506-MMS-1/CreateProgramInvocation-Response.ta.mjs";
import { DeleteProgramInvocation_Response, _decode_DeleteProgramInvocation_Response, _encode_DeleteProgramInvocation_Response } from "../ISO-9506-MMS-1/DeleteProgramInvocation-Response.ta.mjs";
// export { DeleteProgramInvocation_Response, _decode_DeleteProgramInvocation_Response, _encode_DeleteProgramInvocation_Response } from "../ISO-9506-MMS-1/DeleteProgramInvocation-Response.ta.mjs";
import { Start_Response, _decode_Start_Response, _encode_Start_Response } from "../ISO-9506-MMS-1/Start-Response.ta.mjs";
// export { Start_Response, _decode_Start_Response, _encode_Start_Response } from "../ISO-9506-MMS-1/Start-Response.ta.mjs";
import { Stop_Response, _decode_Stop_Response, _encode_Stop_Response } from "../ISO-9506-MMS-1/Stop-Response.ta.mjs";
// export { Stop_Response, _decode_Stop_Response, _encode_Stop_Response } from "../ISO-9506-MMS-1/Stop-Response.ta.mjs";
import { Resume_Response, _decode_Resume_Response, _encode_Resume_Response } from "../ISO-9506-MMS-1/Resume-Response.ta.mjs";
// export { Resume_Response, _decode_Resume_Response, _encode_Resume_Response } from "../ISO-9506-MMS-1/Resume-Response.ta.mjs";
import { Reset_Response, _decode_Reset_Response, _encode_Reset_Response } from "../ISO-9506-MMS-1/Reset-Response.ta.mjs";
// export { Reset_Response, _decode_Reset_Response, _encode_Reset_Response } from "../ISO-9506-MMS-1/Reset-Response.ta.mjs";
import { Kill_Response, _decode_Kill_Response, _encode_Kill_Response } from "../ISO-9506-MMS-1/Kill-Response.ta.mjs";
// export { Kill_Response, _decode_Kill_Response, _encode_Kill_Response } from "../ISO-9506-MMS-1/Kill-Response.ta.mjs";
import { GetProgramInvocationAttributes_Response, _decode_GetProgramInvocationAttributes_Response, _encode_GetProgramInvocationAttributes_Response } from "../ISO-9506-MMS-1/GetProgramInvocationAttributes-Response.ta.mjs";
// export { GetProgramInvocationAttributes_Response, _decode_GetProgramInvocationAttributes_Response, _encode_GetProgramInvocationAttributes_Response } from "../ISO-9506-MMS-1/GetProgramInvocationAttributes-Response.ta.mjs";
import { ObtainFile_Response, _decode_ObtainFile_Response, _encode_ObtainFile_Response } from "../ISO-9506-MMS-1A/ObtainFile-Response.ta.mjs";
// export { ObtainFile_Response, _decode_ObtainFile_Response, _encode_ObtainFile_Response } from "../ISO-9506-MMS-1A/ObtainFile-Response.ta.mjs";
import { DefineEventCondition_Response, _decode_DefineEventCondition_Response, _encode_DefineEventCondition_Response } from "../ISO-9506-MMS-1/DefineEventCondition-Response.ta.mjs";
// export { DefineEventCondition_Response, _decode_DefineEventCondition_Response, _encode_DefineEventCondition_Response } from "../ISO-9506-MMS-1/DefineEventCondition-Response.ta.mjs";
import { DeleteEventCondition_Response, _decode_DeleteEventCondition_Response, _encode_DeleteEventCondition_Response } from "../ISO-9506-MMS-1/DeleteEventCondition-Response.ta.mjs";
// export { DeleteEventCondition_Response, _decode_DeleteEventCondition_Response, _encode_DeleteEventCondition_Response } from "../ISO-9506-MMS-1/DeleteEventCondition-Response.ta.mjs";
import { GetEventConditionAttributes_Response, _decode_GetEventConditionAttributes_Response, _encode_GetEventConditionAttributes_Response } from "../ISO-9506-MMS-1/GetEventConditionAttributes-Response.ta.mjs";
// export { GetEventConditionAttributes_Response, _decode_GetEventConditionAttributes_Response, _encode_GetEventConditionAttributes_Response } from "../ISO-9506-MMS-1/GetEventConditionAttributes-Response.ta.mjs";
import { ReportEventConditionStatus_Response, _decode_ReportEventConditionStatus_Response, _encode_ReportEventConditionStatus_Response } from "../ISO-9506-MMS-1/ReportEventConditionStatus-Response.ta.mjs";
// export { ReportEventConditionStatus_Response, _decode_ReportEventConditionStatus_Response, _encode_ReportEventConditionStatus_Response } from "../ISO-9506-MMS-1/ReportEventConditionStatus-Response.ta.mjs";
import { AlterEventConditionMonitoring_Response, _decode_AlterEventConditionMonitoring_Response, _encode_AlterEventConditionMonitoring_Response } from "../ISO-9506-MMS-1/AlterEventConditionMonitoring-Response.ta.mjs";
// export { AlterEventConditionMonitoring_Response, _decode_AlterEventConditionMonitoring_Response, _encode_AlterEventConditionMonitoring_Response } from "../ISO-9506-MMS-1/AlterEventConditionMonitoring-Response.ta.mjs";
import { TriggerEvent_Response, _decode_TriggerEvent_Response, _encode_TriggerEvent_Response } from "../ISO-9506-MMS-1/TriggerEvent-Response.ta.mjs";
// export { TriggerEvent_Response, _decode_TriggerEvent_Response, _encode_TriggerEvent_Response } from "../ISO-9506-MMS-1/TriggerEvent-Response.ta.mjs";
import { DefineEventAction_Response, _decode_DefineEventAction_Response, _encode_DefineEventAction_Response } from "../ISO-9506-MMS-1/DefineEventAction-Response.ta.mjs";
// export { DefineEventAction_Response, _decode_DefineEventAction_Response, _encode_DefineEventAction_Response } from "../ISO-9506-MMS-1/DefineEventAction-Response.ta.mjs";
import { DeleteEventAction_Response, _decode_DeleteEventAction_Response, _encode_DeleteEventAction_Response } from "../ISO-9506-MMS-1/DeleteEventAction-Response.ta.mjs";
// export { DeleteEventAction_Response, _decode_DeleteEventAction_Response, _encode_DeleteEventAction_Response } from "../ISO-9506-MMS-1/DeleteEventAction-Response.ta.mjs";
import { GetEventActionAttributes_Response, _decode_GetEventActionAttributes_Response, _encode_GetEventActionAttributes_Response } from "../ISO-9506-MMS-1/GetEventActionAttributes-Response.ta.mjs";
// export { GetEventActionAttributes_Response, _decode_GetEventActionAttributes_Response, _encode_GetEventActionAttributes_Response } from "../ISO-9506-MMS-1/GetEventActionAttributes-Response.ta.mjs";
import { ReportEventActionStatus_Response, _decode_ReportEventActionStatus_Response, _encode_ReportEventActionStatus_Response } from "../ISO-9506-MMS-1/ReportEventActionStatus-Response.ta.mjs";
// export { ReportEventActionStatus_Response, _decode_ReportEventActionStatus_Response, _encode_ReportEventActionStatus_Response } from "../ISO-9506-MMS-1/ReportEventActionStatus-Response.ta.mjs";
import { DefineEventEnrollment_Response, _decode_DefineEventEnrollment_Response, _encode_DefineEventEnrollment_Response } from "../ISO-9506-MMS-1/DefineEventEnrollment-Response.ta.mjs";
// export { DefineEventEnrollment_Response, _decode_DefineEventEnrollment_Response, _encode_DefineEventEnrollment_Response } from "../ISO-9506-MMS-1/DefineEventEnrollment-Response.ta.mjs";
import { DeleteEventEnrollment_Response, _decode_DeleteEventEnrollment_Response, _encode_DeleteEventEnrollment_Response } from "../ISO-9506-MMS-1/DeleteEventEnrollment-Response.ta.mjs";
// export { DeleteEventEnrollment_Response, _decode_DeleteEventEnrollment_Response, _encode_DeleteEventEnrollment_Response } from "../ISO-9506-MMS-1/DeleteEventEnrollment-Response.ta.mjs";
import { AlterEventEnrollment_Response, _decode_AlterEventEnrollment_Response, _encode_AlterEventEnrollment_Response } from "../ISO-9506-MMS-1/AlterEventEnrollment-Response.ta.mjs";
// export { AlterEventEnrollment_Response, _decode_AlterEventEnrollment_Response, _encode_AlterEventEnrollment_Response } from "../ISO-9506-MMS-1/AlterEventEnrollment-Response.ta.mjs";
import { ReportEventEnrollmentStatus_Response, _decode_ReportEventEnrollmentStatus_Response, _encode_ReportEventEnrollmentStatus_Response } from "../ISO-9506-MMS-1/ReportEventEnrollmentStatus-Response.ta.mjs";
// export { ReportEventEnrollmentStatus_Response, _decode_ReportEventEnrollmentStatus_Response, _encode_ReportEventEnrollmentStatus_Response } from "../ISO-9506-MMS-1/ReportEventEnrollmentStatus-Response.ta.mjs";
import { GetEventEnrollmentAttributes_Response, _decode_GetEventEnrollmentAttributes_Response, _encode_GetEventEnrollmentAttributes_Response } from "../ISO-9506-MMS-1/GetEventEnrollmentAttributes-Response.ta.mjs";
// export { GetEventEnrollmentAttributes_Response, _decode_GetEventEnrollmentAttributes_Response, _encode_GetEventEnrollmentAttributes_Response } from "../ISO-9506-MMS-1/GetEventEnrollmentAttributes-Response.ta.mjs";
import { AcknowledgeEventNotification_Response, _decode_AcknowledgeEventNotification_Response, _encode_AcknowledgeEventNotification_Response } from "../ISO-9506-MMS-1/AcknowledgeEventNotification-Response.ta.mjs";
// export { AcknowledgeEventNotification_Response, _decode_AcknowledgeEventNotification_Response, _encode_AcknowledgeEventNotification_Response } from "../ISO-9506-MMS-1/AcknowledgeEventNotification-Response.ta.mjs";
import { GetAlarmSummary_Response, _decode_GetAlarmSummary_Response, _encode_GetAlarmSummary_Response } from "../ISO-9506-MMS-1/GetAlarmSummary-Response.ta.mjs";
// export { GetAlarmSummary_Response, _decode_GetAlarmSummary_Response, _encode_GetAlarmSummary_Response } from "../ISO-9506-MMS-1/GetAlarmSummary-Response.ta.mjs";
import { GetAlarmEnrollmentSummary_Response, _decode_GetAlarmEnrollmentSummary_Response, _encode_GetAlarmEnrollmentSummary_Response } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Response.ta.mjs";
// export { GetAlarmEnrollmentSummary_Response, _decode_GetAlarmEnrollmentSummary_Response, _encode_GetAlarmEnrollmentSummary_Response } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Response.ta.mjs";
import { ReadJournal_Response, _decode_ReadJournal_Response, _encode_ReadJournal_Response } from "../ISO-9506-MMS-1/ReadJournal-Response.ta.mjs";
// export { ReadJournal_Response, _decode_ReadJournal_Response, _encode_ReadJournal_Response } from "../ISO-9506-MMS-1/ReadJournal-Response.ta.mjs";
import { WriteJournal_Response, _decode_WriteJournal_Response, _encode_WriteJournal_Response } from "../ISO-9506-MMS-1/WriteJournal-Response.ta.mjs";
// export { WriteJournal_Response, _decode_WriteJournal_Response, _encode_WriteJournal_Response } from "../ISO-9506-MMS-1/WriteJournal-Response.ta.mjs";
import { InitializeJournal_Response, _decode_InitializeJournal_Response, _encode_InitializeJournal_Response } from "../ISO-9506-MMS-1/InitializeJournal-Response.ta.mjs";
// export { InitializeJournal_Response, _decode_InitializeJournal_Response, _encode_InitializeJournal_Response } from "../ISO-9506-MMS-1/InitializeJournal-Response.ta.mjs";
import { ReportJournalStatus_Response, _decode_ReportJournalStatus_Response, _encode_ReportJournalStatus_Response } from "../ISO-9506-MMS-1/ReportJournalStatus-Response.ta.mjs";
// export { ReportJournalStatus_Response, _decode_ReportJournalStatus_Response, _encode_ReportJournalStatus_Response } from "../ISO-9506-MMS-1/ReportJournalStatus-Response.ta.mjs";
import { CreateJournal_Response, _decode_CreateJournal_Response, _encode_CreateJournal_Response } from "../ISO-9506-MMS-1/CreateJournal-Response.ta.mjs";
// export { CreateJournal_Response, _decode_CreateJournal_Response, _encode_CreateJournal_Response } from "../ISO-9506-MMS-1/CreateJournal-Response.ta.mjs";
import { DeleteJournal_Response, _decode_DeleteJournal_Response, _encode_DeleteJournal_Response } from "../ISO-9506-MMS-1/DeleteJournal-Response.ta.mjs";
// export { DeleteJournal_Response, _decode_DeleteJournal_Response, _encode_DeleteJournal_Response } from "../ISO-9506-MMS-1/DeleteJournal-Response.ta.mjs";
import { GetCapabilityList_Response, _decode_GetCapabilityList_Response, _encode_GetCapabilityList_Response } from "../ISO-9506-MMS-1/GetCapabilityList-Response.ta.mjs";
// export { GetCapabilityList_Response, _decode_GetCapabilityList_Response, _encode_GetCapabilityList_Response } from "../ISO-9506-MMS-1/GetCapabilityList-Response.ta.mjs";
import { FileOpen_Response, _decode_FileOpen_Response, _encode_FileOpen_Response } from "../ISO-9506-MMS-1A/FileOpen-Response.ta.mjs";
// export { FileOpen_Response, _decode_FileOpen_Response, _encode_FileOpen_Response } from "../ISO-9506-MMS-1A/FileOpen-Response.ta.mjs";
import { FileRead_Response, _decode_FileRead_Response, _encode_FileRead_Response } from "../ISO-9506-MMS-1A/FileRead-Response.ta.mjs";
// export { FileRead_Response, _decode_FileRead_Response, _encode_FileRead_Response } from "../ISO-9506-MMS-1A/FileRead-Response.ta.mjs";
import { FileClose_Response, _decode_FileClose_Response, _encode_FileClose_Response } from "../ISO-9506-MMS-1A/FileClose-Response.ta.mjs";
// export { FileClose_Response, _decode_FileClose_Response, _encode_FileClose_Response } from "../ISO-9506-MMS-1A/FileClose-Response.ta.mjs";
import { FileRename_Response, _decode_FileRename_Response, _encode_FileRename_Response } from "../ISO-9506-MMS-1A/FileRename-Response.ta.mjs";
// export { FileRename_Response, _decode_FileRename_Response, _encode_FileRename_Response } from "../ISO-9506-MMS-1A/FileRename-Response.ta.mjs";
import { FileDelete_Response, _decode_FileDelete_Response, _encode_FileDelete_Response } from "../ISO-9506-MMS-1A/FileDelete-Response.ta.mjs";
// export { FileDelete_Response, _decode_FileDelete_Response, _encode_FileDelete_Response } from "../ISO-9506-MMS-1A/FileDelete-Response.ta.mjs";
import { FileDirectory_Response, _decode_FileDirectory_Response, _encode_FileDirectory_Response } from "../ISO-9506-MMS-1A/FileDirectory-Response.ta.mjs";
// export { FileDirectory_Response, _decode_FileDirectory_Response, _encode_FileDirectory_Response } from "../ISO-9506-MMS-1A/FileDirectory-Response.ta.mjs";
import { AdditionalService_Response, _decode_AdditionalService_Response, _encode_AdditionalService_Response } from "../ISO-9506-MMS-1/AdditionalService-Response.ta.mjs";
// export { AdditionalService_Response, _decode_AdditionalService_Response, _encode_AdditionalService_Response } from "../ISO-9506-MMS-1/AdditionalService-Response.ta.mjs";
import { GetDataExchangeAttributes_Response, _decode_GetDataExchangeAttributes_Response, _encode_GetDataExchangeAttributes_Response } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Response.ta.mjs";
// export { GetDataExchangeAttributes_Response, _decode_GetDataExchangeAttributes_Response, _encode_GetDataExchangeAttributes_Response } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Response.ta.mjs";
import { ExchangeData_Response, _decode_ExchangeData_Response, _encode_ExchangeData_Response } from "../ISO-9506-MMS-1/ExchangeData-Response.ta.mjs";
// export { ExchangeData_Response, _decode_ExchangeData_Response, _encode_ExchangeData_Response } from "../ISO-9506-MMS-1/ExchangeData-Response.ta.mjs";
import { DefineAccessControlList_Response, _decode_DefineAccessControlList_Response, _encode_DefineAccessControlList_Response } from "../ISO-9506-MMS-1/DefineAccessControlList-Response.ta.mjs";
// export { DefineAccessControlList_Response, _decode_DefineAccessControlList_Response, _encode_DefineAccessControlList_Response } from "../ISO-9506-MMS-1/DefineAccessControlList-Response.ta.mjs";
import { GetAccessControlListAttributes_Response, _decode_GetAccessControlListAttributes_Response, _encode_GetAccessControlListAttributes_Response } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response.ta.mjs";
// export { GetAccessControlListAttributes_Response, _decode_GetAccessControlListAttributes_Response, _encode_GetAccessControlListAttributes_Response } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response.ta.mjs";
import { ReportAccessControlledObjects_Response, _decode_ReportAccessControlledObjects_Response, _encode_ReportAccessControlledObjects_Response } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Response.ta.mjs";
// export { ReportAccessControlledObjects_Response, _decode_ReportAccessControlledObjects_Response, _encode_ReportAccessControlledObjects_Response } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Response.ta.mjs";
import { DeleteAccessControlList_Response, _decode_DeleteAccessControlList_Response, _encode_DeleteAccessControlList_Response } from "../ISO-9506-MMS-1/DeleteAccessControlList-Response.ta.mjs";
// export { DeleteAccessControlList_Response, _decode_DeleteAccessControlList_Response, _encode_DeleteAccessControlList_Response } from "../ISO-9506-MMS-1/DeleteAccessControlList-Response.ta.mjs";
import { ChangeAccessControl_Response, _decode_ChangeAccessControl_Response, _encode_ChangeAccessControl_Response } from "../ISO-9506-MMS-1/ChangeAccessControl-Response.ta.mjs";
// export { ChangeAccessControl_Response, _decode_ChangeAccessControl_Response, _encode_ChangeAccessControl_Response } from "../ISO-9506-MMS-1/ChangeAccessControl-Response.ta.mjs";

import { RejectPDU, _decode_RejectPDU, _encode_RejectPDU } from "../ISO-9506-MMS-1/RejectPDU.ta.mjs";
// export { RejectPDU, _decode_RejectPDU, _encode_RejectPDU } from "../ISO-9506-MMS-1/RejectPDU.ta.mjs";
import { decodeWithRejectPDUFallback, encodeWithRejectPDUFallback } from "../../utils/decodeWithRejectPDUFallback.mjs";

/**
 * @summary ConfirmedServiceResponse
 * @description
 *
 * CHOICE of confirmed MMS service Result(+) values. The context tag must match
 * the request's service. Each alternative is the success response of a
 * confirmed service from ISO 9506-1:2003 clauses 8–23 or AdditionalService (tag
 * [78]). Unsupported alternatives are RejectPDU (ISO 9506-2:2003 §7.3.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfirmedServiceResponse ::= CHOICE {
 *     status   [0] IMPLICIT Status-Response,
 *     status   [0] IMPLICIT RejectPDU,
 *     getNameList   [1] IMPLICIT GetNameList-Response,
 *     getNameList   [1] IMPLICIT RejectPDU,
 *     identify   [2] IMPLICIT Identify-Response,
 *     identify   [2] IMPLICIT RejectPDU,
 *     rename   [3] IMPLICIT Rename-Response,
 *     rename   [3] IMPLICIT RejectPDU,
 *     read   [4] IMPLICIT Read-Response,
 *     read   [4] IMPLICIT RejectPDU,
 *     write   [5] IMPLICIT Write-Response,
 *     write   [5] IMPLICIT RejectPDU,
 *     getVariableAccessAttributes   [6] IMPLICIT GetVariableAccessAttributes-Response,
 *     getVariableAccessAttributes   [6] IMPLICIT RejectPDU,
 *     defineNamedVariable   [7] IMPLICIT DefineNamedVariable-Response,
 *     defineNamedVariable   [7] IMPLICIT RejectPDU,
 *     defineScatteredAccess   [8] IMPLICIT DefineScatteredAccess-Response,
 *     defineScatteredAccess   [8] IMPLICIT RejectPDU,
 *     getScatteredAccessAttributes   [9] IMPLICIT GetScatteredAccessAttributes-Response,
 *     getScatteredAccessAttributes   [9] IMPLICIT RejectPDU,
 *     deleteVariableAccess   [10] IMPLICIT DeleteVariableAccess-Response,
 *     deleteVariableAccess   [10] IMPLICIT RejectPDU,
 *     defineNamedVariableList   [11] IMPLICIT DefineNamedVariableList-Response,
 *     defineNamedVariableList   [11] IMPLICIT RejectPDU,
 *     getNamedVariableListAttributes   [12] IMPLICIT GetNamedVariableListAttributes-Response,
 *     getNamedVariableListAttributes   [12] IMPLICIT RejectPDU,
 *     deleteNamedVariableList   [13] IMPLICIT DeleteNamedVariableList-Response,
 *     deleteNamedVariableList   [13] IMPLICIT RejectPDU,
 *     defineNamedType   [14] IMPLICIT DefineNamedType-Response,
 *     defineNamedType   [14] IMPLICIT RejectPDU,
 *     getNamedTypeAttributes  [15] IMPLICIT GetNamedTypeAttributes-Response,
 *     getNamedTypeAttributes   [15] IMPLICIT RejectPDU,
 *     deleteNamedType   [16] IMPLICIT DeleteNamedType-Response,
 *     deleteNamedType   [16] IMPLICIT RejectPDU,
 *     input   [17] IMPLICIT Input-Response,
 *     output   [18] IMPLICIT Output-Response,
 *     output   [18] IMPLICIT RejectPDU,
 *     takeControl   [19] TakeControl-Response,
 *     relinquishControl   [20] IMPLICIT RelinquishControl-Response,
 *     relinquishControl   [20] IMPLICIT RejectPDU,
 *     defineSemaphore   [21] IMPLICIT DefineSemaphore-Response,
 *     defineSemaphore   [21] IMPLICIT RejectPDU,
 *     deleteSemaphore   [22] IMPLICIT DeleteSemaphore-Response,
 *     deleteSemaphore   [22] IMPLICIT RejectPDU,
 *     reportSemaphoreStatus   [23] IMPLICIT ReportSemaphoreStatus-Response,
 *     reportSemaphoreStatus   [23] IMPLICIT RejectPDU,
 *     reportPoolSemaphoreStatus   [24] IMPLICIT ReportPoolSemaphoreStatus-Response,
 *     reportPoolSemaphoreStatus   [24] IMPLICIT RejectPDU,
 *     reportSemaphoreEntryStatus  [25] IMPLICIT ReportSemaphoreEntryStatus-Response,
 *     reportSemaphoreEntryStatus  [25] IMPLICIT RejectPDU,
 *     initiateDownloadSequence    [26] IMPLICIT InitiateDownloadSequence-Response,
 *     initiateDownloadSequence    [26] IMPLICIT RejectPDU,
 *     downloadSegment  [27] IMPLICIT DownloadSegment-Response,
 *     downloadSegment  [27] IMPLICIT RejectPDU,
 *     terminateDownloadSequence   [28] IMPLICIT TerminateDownloadSequence-Response,
 *     terminateDownloadSequence   [28] IMPLICIT RejectPDU,
 *     initiateUploadSequence  [29] IMPLICIT InitiateUploadSequence-Response,
 *     initiateUploadSequence  [29] IMPLICIT RejectPDU,
 *     uploadSegment       [30] IMPLICIT UploadSegment-Response,
 *     uploadSegment       [30] IMPLICIT RejectPDU,
 *     terminateUploadSequence  [31] IMPLICIT TerminateUploadSequence-Response,
 *     terminateUploadSequence  [31] IMPLICIT RejectPDU,
 *     requestDomainDownload    [32] IMPLICIT RequestDomainDownload-Response,
 *     requestDomainDownload    [32] IMPLICIT RejectPDU,
 *     requestDomainUpload  [33] IMPLICIT RequestDomainUpload-Response,
 *     requestDomainUpload  [33] IMPLICIT RejectPDU,
 *     loadDomainContent    [34] IMPLICIT LoadDomainContent-Response,
 *     loadDomainContent    [34] IMPLICIT RejectPDU,
 *     storeDomainContent   [35] IMPLICIT StoreDomainContent-Response,
 *     storeDomainContent   [35] IMPLICIT RejectPDU,
 *     deleteDomain   [36] IMPLICIT DeleteDomain-Response,
 *     deleteDomain   [36] IMPLICIT RejectPDU,
 *     getDomainAttributes   [37] IMPLICIT GetDomainAttributes-Response,
 *     getDomainAttributes   [37] IMPLICIT RejectPDU,
 *     createProgramInvocation   [38] IMPLICIT CreateProgramInvocation-Response,
 *     createProgramInvocation   [38] IMPLICIT RejectPDU,
 *     deleteProgramInvocation   [39] IMPLICIT DeleteProgramInvocation-Response,
 *     deleteProgramInvocation   [39] IMPLICIT RejectPDU,
 *     start   [40] IMPLICIT Start-Response,
 *     start   [40] IMPLICIT RejectPDU,
 *     stop   [41] IMPLICIT Stop-Response,
 *     stop   [41] IMPLICIT RejectPDU,
 *     resume   [42] IMPLICIT Resume-Response,
 *     resume   [42] IMPLICIT RejectPDU,
 *     reset   [43] IMPLICIT Reset-Response,
 *     reset   [43] IMPLICIT RejectPDU,
 *     kill   [44] IMPLICIT Kill-Response,
 *     kill   [44] IMPLICIT RejectPDU,
 *     getProgramInvocationAttributes   [45] IMPLICIT GetProgramInvocationAttributes-Response,
 *     getProgramInvocationAttributes   [45] IMPLICIT RejectPDU,
 *     obtainFile   [46] IMPLICIT ObtainFile-Response,
 *     obtainFile   [46] IMPLICIT RejectPDU,
 *     defineEventCondition   [47] IMPLICIT DefineEventCondition-Response,
 *     defineEventCondition   [47] IMPLICIT RejectPDU,
 *     deleteEventCondition   [48] IMPLICIT DeleteEventCondition-Response,
 *     getEventConditionAttributes   [49] IMPLICIT GetEventConditionAttributes-Response,
 *     getEventConditionAttributes   [49] IMPLICIT RejectPDU,
 *     reportEventConditionStatus   [50] IMPLICIT ReportEventConditionStatus-Response,
 *     reportEventConditionStatus   [50] IMPLICIT RejectPDU,
 *     alterEventConditionMonitoring   [51] IMPLICIT AlterEventConditionMonitoring-Response,
 *     alterEventConditionMonitoring   [51] IMPLICIT RejectPDU,
 *     triggerEvent   [52] IMPLICIT TriggerEvent-Response,
 *     triggerEvent   [52] IMPLICIT RejectPDU,
 *     defineEventAction   [53] IMPLICIT DefineEventAction-Response,
 *     defineEventAction   [53] IMPLICIT RejectPDU,
 *     deleteEventAction   [54] IMPLICIT DeleteEventAction-Response,
 *     deleteEventAction   [54] IMPLICIT RejectPDU,
 *     getEventActionAttributes   [55] IMPLICIT GetEventActionAttributes-Response,
 *     getEventActionAttributes   [55] IMPLICIT RejectPDU,
 *     reportEventActionStatus   [56] IMPLICIT ReportEventActionStatus-Response,
 *     reportEventActionStatus   [56] IMPLICIT RejectPDU,
 *     defineEventEnrollment [57] IMPLICIT DefineEventEnrollment-Response,
 *     defineEventEnrollment [57] IMPLICIT RejectPDU,
 *     deleteEventEnrollment [58] IMPLICIT DeleteEventEnrollment-Response,
 *     deleteEventEnrollment [58] IMPLICIT RejectPDU,
 *     alterEventEnrollment [59] IMPLICIT AlterEventEnrollment-Response,
 *     alterEventEnrollment [59] IMPLICIT RejectPDU,
 *     reportEventEnrollmentStatus [60] IMPLICIT ReportEventEnrollmentStatus-Response,
 *     reportEventEnrollmentStatus [60] IMPLICIT RejectPDU,
 *     getEventEnrollmentAttributes [61] IMPLICIT GetEventEnrollmentAttributes-Response,
 *     getEventEnrollmentAttributes [61] IMPLICIT RejectPDU,
 *     acknowledgeEventNotification [62] IMPLICIT AcknowledgeEventNotification-Response,
 *     acknowledgeEventNotification [62] IMPLICIT RejectPDU,
 *     getAlarmSummary [63] IMPLICIT GetAlarmSummary-Response,
 *     getAlarmSummary [63] IMPLICIT RejectPDU,
 *     getAlarmEnrollmentSummary [64] IMPLICIT GetAlarmEnrollmentSummary-Response,
 *     getAlarmEnrollmentSummary [64] IMPLICIT RejectPDU,
 *     readJournal [65] IMPLICIT ReadJournal-Response,
 *     readJournal [65] IMPLICIT RejectPDU,
 *     writeJournal [66] IMPLICIT WriteJournal-Response,
 *     writeJournal [66] IMPLICIT RejectPDU,
 *     initializeJournal [67] IMPLICIT InitializeJournal-Response,
 *     initializeJournal [67] IMPLICIT RejectPDU,
 *     reportJournalStatus [68] IMPLICIT ReportJournalStatus-Response,
 *     reportJournalStatus [68] IMPLICIT RejectPDU,
 *     createJournal [69] IMPLICIT CreateJournal-Response,
 *     createJournal [69] IMPLICIT RejectPDU,
 *     deleteJournal [70] IMPLICIT DeleteJournal-Response,
 *     deleteJournal [70] IMPLICIT RejectPDU,
 *     getCapabilityList [71] IMPLICIT GetCapabilityList-Response,
 *     getCapabilityList [71] IMPLICIT RejectPDU,
 *     -- choices [72] through [77] are reserved for use by services
 *     -- defined in annex D
 *     fileOpen [72] IMPLICIT FileOpen-Response,
 *     fileOpen [72] IMPLICIT RejectPDU,
 *     fileRead [73] IMPLICIT FileRead-Response,
 *     fileRead [73] IMPLICIT RejectPDU,
 *     fileClose [74] IMPLICIT FileClose-Response,
 *     fileClose [74] IMPLICIT RejectPDU,
 *     fileRename [75] IMPLICIT FileRename-Response,
 *     fileRename [75] IMPLICIT RejectPDU,
 *     fileDelete [76] IMPLICIT FileDelete-Response,
 *     fileDelete [76] IMPLICIT RejectPDU,
 *     fileDirectory [77] IMPLICIT FileDirectory-Response,
 *     fileDirectory [77] IMPLICIT RejectPDU,
 *    ...,
 *     additionalService [78] AdditionalService-Response,
 *     -- choice [79] is reserved
 *     getDataExchangeAttributes [80] GetDataExchangeAttributes-Response,
 *     -- Shall not appear in minor version 1
 *     exchangeData [81] IMPLICIT ExchangeData-Response,
 *     -- Shall not appear in minor version 1
 *     defineAccessControlList [82] IMPLICIT DefineAccessControlList-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     getAccessControlListAttributes [83] IMPLICIT GetAccessControlListAttributes-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     reportAccessControlledObjects [84] IMPLICIT ReportAccessControlledObjects-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     deleteAccessControlList [85] IMPLICIT DeleteAccessControlList-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     changeAccessControl [86] IMPLICIT ChangeAccessControl-Response,
 *     -- Shall not appear in minor version 1 or 2
 *    ...
 * }
 * ```
 */
export
type ConfirmedServiceResponse =
    { status: _Element } /* CHOICE_ALT_ROOT */
    | { getNameList: _Element } /* CHOICE_ALT_ROOT */
    | { identify: _Element } /* CHOICE_ALT_ROOT */
    | { rename: Rename_Response } /* CHOICE_ALT_ROOT */
    | { rename: RejectPDU } /* CHOICE_ALT_ROOT */
    | { read: _Element } /* CHOICE_ALT_ROOT */
    | { write: _Element } /* CHOICE_ALT_ROOT */
    | { getVariableAccessAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { defineNamedVariable: DefineNamedVariable_Response } /* CHOICE_ALT_ROOT */
    | { defineNamedVariable: RejectPDU } /* CHOICE_ALT_ROOT */
    | { defineScatteredAccess: DefineScatteredAccess_Response } /* CHOICE_ALT_ROOT */
    | { defineScatteredAccess: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getScatteredAccessAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { deleteVariableAccess: _Element } /* CHOICE_ALT_ROOT */
    | { defineNamedVariableList: DefineNamedVariableList_Response } /* CHOICE_ALT_ROOT */
    | { defineNamedVariableList: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getNamedVariableListAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { deleteNamedVariableList: _Element } /* CHOICE_ALT_ROOT */
    | { defineNamedType: DefineNamedType_Response } /* CHOICE_ALT_ROOT */
    | { defineNamedType: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getNamedTypeAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { deleteNamedType: _Element } /* CHOICE_ALT_ROOT */
    | { input: Input_Response } /* CHOICE_ALT_ROOT */
    | { output: Output_Response } /* CHOICE_ALT_ROOT */
    | { output: RejectPDU } /* CHOICE_ALT_ROOT */
    | { takeControl: TakeControl_Response } /* CHOICE_ALT_ROOT */
    | { relinquishControl: RelinquishControl_Response } /* CHOICE_ALT_ROOT */
    | { relinquishControl: RejectPDU } /* CHOICE_ALT_ROOT */
    | { defineSemaphore: DefineSemaphore_Response } /* CHOICE_ALT_ROOT */
    | { defineSemaphore: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteSemaphore: DeleteSemaphore_Response } /* CHOICE_ALT_ROOT */
    | { deleteSemaphore: RejectPDU } /* CHOICE_ALT_ROOT */
    | { reportSemaphoreStatus: _Element } /* CHOICE_ALT_ROOT */
    | { reportPoolSemaphoreStatus: _Element } /* CHOICE_ALT_ROOT */
    | { reportSemaphoreEntryStatus: _Element } /* CHOICE_ALT_ROOT */
    | { initiateDownloadSequence: InitiateDownloadSequence_Response } /* CHOICE_ALT_ROOT */
    | { initiateDownloadSequence: RejectPDU } /* CHOICE_ALT_ROOT */
    | { downloadSegment: _Element } /* CHOICE_ALT_ROOT */
    | { terminateDownloadSequence: TerminateDownloadSequence_Response } /* CHOICE_ALT_ROOT */
    | { terminateDownloadSequence: RejectPDU } /* CHOICE_ALT_ROOT */
    | { initiateUploadSequence: _Element } /* CHOICE_ALT_ROOT */
    | { uploadSegment: _Element } /* CHOICE_ALT_ROOT */
    | { terminateUploadSequence: TerminateUploadSequence_Response } /* CHOICE_ALT_ROOT */
    | { terminateUploadSequence: RejectPDU } /* CHOICE_ALT_ROOT */
    | { requestDomainDownload: RequestDomainDownload_Response } /* CHOICE_ALT_ROOT */
    | { requestDomainDownload: RejectPDU } /* CHOICE_ALT_ROOT */
    | { requestDomainUpload: RequestDomainUpload_Response } /* CHOICE_ALT_ROOT */
    | { requestDomainUpload: RejectPDU } /* CHOICE_ALT_ROOT */
    | { loadDomainContent: LoadDomainContent_Response } /* CHOICE_ALT_ROOT */
    | { loadDomainContent: RejectPDU } /* CHOICE_ALT_ROOT */
    | { storeDomainContent: StoreDomainContent_Response } /* CHOICE_ALT_ROOT */
    | { storeDomainContent: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteDomain: DeleteDomain_Response } /* CHOICE_ALT_ROOT */
    | { deleteDomain: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getDomainAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { createProgramInvocation: CreateProgramInvocation_Response } /* CHOICE_ALT_ROOT */
    | { createProgramInvocation: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteProgramInvocation: DeleteProgramInvocation_Response } /* CHOICE_ALT_ROOT */
    | { deleteProgramInvocation: RejectPDU } /* CHOICE_ALT_ROOT */
    | { start: Start_Response } /* CHOICE_ALT_ROOT */
    | { start: RejectPDU } /* CHOICE_ALT_ROOT */
    | { stop: Stop_Response } /* CHOICE_ALT_ROOT */
    | { stop: RejectPDU } /* CHOICE_ALT_ROOT */
    | { resume: Resume_Response } /* CHOICE_ALT_ROOT */
    | { resume: RejectPDU } /* CHOICE_ALT_ROOT */
    | { reset: Reset_Response } /* CHOICE_ALT_ROOT */
    | { reset: RejectPDU } /* CHOICE_ALT_ROOT */
    | { kill: Kill_Response } /* CHOICE_ALT_ROOT */
    | { kill: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getProgramInvocationAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { obtainFile: ObtainFile_Response } /* CHOICE_ALT_ROOT */
    | { obtainFile: RejectPDU } /* CHOICE_ALT_ROOT */
    | { defineEventCondition: DefineEventCondition_Response } /* CHOICE_ALT_ROOT */
    | { defineEventCondition: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteEventCondition: DeleteEventCondition_Response } /* CHOICE_ALT_ROOT */
    | { getEventConditionAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { reportEventConditionStatus: _Element } /* CHOICE_ALT_ROOT */
    | { alterEventConditionMonitoring: AlterEventConditionMonitoring_Response } /* CHOICE_ALT_ROOT */
    | { alterEventConditionMonitoring: RejectPDU } /* CHOICE_ALT_ROOT */
    | { triggerEvent: TriggerEvent_Response } /* CHOICE_ALT_ROOT */
    | { triggerEvent: RejectPDU } /* CHOICE_ALT_ROOT */
    | { defineEventAction: DefineEventAction_Response } /* CHOICE_ALT_ROOT */
    | { defineEventAction: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteEventAction: DeleteEventAction_Response } /* CHOICE_ALT_ROOT */
    | { deleteEventAction: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getEventActionAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { reportEventActionStatus: ReportEventActionStatus_Response } /* CHOICE_ALT_ROOT */
    | { reportEventActionStatus: RejectPDU } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment: DefineEventEnrollment_Response } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteEventEnrollment: DeleteEventEnrollment_Response } /* CHOICE_ALT_ROOT */
    | { deleteEventEnrollment: RejectPDU } /* CHOICE_ALT_ROOT */
    | { alterEventEnrollment: _Element } /* CHOICE_ALT_ROOT */
    | { reportEventEnrollmentStatus: _Element } /* CHOICE_ALT_ROOT */
    | { getEventEnrollmentAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { acknowledgeEventNotification: AcknowledgeEventNotification_Response } /* CHOICE_ALT_ROOT */
    | { acknowledgeEventNotification: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getAlarmSummary: _Element } /* CHOICE_ALT_ROOT */
    | { getAlarmEnrollmentSummary: _Element } /* CHOICE_ALT_ROOT */
    | { readJournal: _Element } /* CHOICE_ALT_ROOT */
    | { writeJournal: WriteJournal_Response } /* CHOICE_ALT_ROOT */
    | { writeJournal: RejectPDU } /* CHOICE_ALT_ROOT */
    | { initializeJournal: InitializeJournal_Response } /* CHOICE_ALT_ROOT */
    | { initializeJournal: RejectPDU } /* CHOICE_ALT_ROOT */
    | { reportJournalStatus: _Element } /* CHOICE_ALT_ROOT */
    | { createJournal: CreateJournal_Response } /* CHOICE_ALT_ROOT */
    | { createJournal: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteJournal: DeleteJournal_Response } /* CHOICE_ALT_ROOT */
    | { deleteJournal: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getCapabilityList: _Element } /* CHOICE_ALT_ROOT */
    | { fileOpen: _Element } /* CHOICE_ALT_ROOT */
    | { fileRead: _Element } /* CHOICE_ALT_ROOT */
    | { fileClose: FileClose_Response } /* CHOICE_ALT_ROOT */
    | { fileClose: RejectPDU } /* CHOICE_ALT_ROOT */
    | { fileRename: FileRename_Response } /* CHOICE_ALT_ROOT */
    | { fileRename: RejectPDU } /* CHOICE_ALT_ROOT */
    | { fileDelete: FileDelete_Response } /* CHOICE_ALT_ROOT */
    | { fileDelete: RejectPDU } /* CHOICE_ALT_ROOT */
    | { fileDirectory: _Element } /* CHOICE_ALT_ROOT */
    | { additionalService: AdditionalService_Response } /* CHOICE_ALT_ROOT */
    | { getDataExchangeAttributes: GetDataExchangeAttributes_Response } /* CHOICE_ALT_ROOT */
    | { exchangeData: ExchangeData_Response } /* CHOICE_ALT_ROOT */
    | { defineAccessControlList: DefineAccessControlList_Response } /* CHOICE_ALT_ROOT */
    | { getAccessControlListAttributes: GetAccessControlListAttributes_Response } /* CHOICE_ALT_ROOT */
    | { reportAccessControlledObjects: ReportAccessControlledObjects_Response } /* CHOICE_ALT_ROOT */
    | { deleteAccessControlList: DeleteAccessControlList_Response } /* CHOICE_ALT_ROOT */
    | { changeAccessControl: ChangeAccessControl_Response } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfirmedServiceResponse: $.ASN1Decoder<ConfirmedServiceResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfirmedServiceResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfirmedServiceResponse (el: _Element): ConfirmedServiceResponse {
    if (!_cached_decoder_for_ConfirmedServiceResponse) { _cached_decoder_for_ConfirmedServiceResponse = $._decode_extensible_choice<ConfirmedServiceResponse>({
    "CONTEXT 0": [ "status", $._decodeAny ],
    "CONTEXT 1": [ "getNameList", $._decodeAny ],
    "CONTEXT 2": [ "identify", $._decodeAny ],
    "CONTEXT 3": [ "rename", $._decode_implicit<Rename_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Rename_Response)) ],
    "CONTEXT 4": [ "read", $._decodeAny ],
    "CONTEXT 5": [ "write", $._decodeAny ],
    "CONTEXT 6": [ "getVariableAccessAttributes", $._decodeAny ],
    "CONTEXT 7": [ "defineNamedVariable", $._decode_implicit<DefineNamedVariable_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineNamedVariable_Response)) ],
    "CONTEXT 8": [ "defineScatteredAccess", $._decode_implicit<DefineScatteredAccess_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineScatteredAccess_Response)) ],
    "CONTEXT 9": [ "getScatteredAccessAttributes", $._decodeAny ],
    "CONTEXT 10": [ "deleteVariableAccess", $._decodeAny ],
    "CONTEXT 11": [ "defineNamedVariableList", $._decode_implicit<DefineNamedVariableList_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineNamedVariableList_Response)) ],
    "CONTEXT 12": [ "getNamedVariableListAttributes", $._decodeAny ],
    "CONTEXT 13": [ "deleteNamedVariableList", $._decodeAny ],
    "CONTEXT 14": [ "defineNamedType", $._decode_implicit<DefineNamedType_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineNamedType_Response)) ],
    "CONTEXT 15": [ "getNamedTypeAttributes", $._decodeAny ],
    "CONTEXT 16": [ "deleteNamedType", $._decodeAny ],
    "CONTEXT 17": [ "input", $._decode_implicit<Input_Response>(() => _decode_Input_Response) ],
    "CONTEXT 18": [ "output", $._decode_implicit<Output_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Output_Response)) ],
    "CONTEXT 19": [ "takeControl", $._decode_explicit<TakeControl_Response>(() => _decode_TakeControl_Response) ],
    "CONTEXT 20": [ "relinquishControl", $._decode_implicit<RelinquishControl_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_RelinquishControl_Response)) ],
    "CONTEXT 21": [ "defineSemaphore", $._decode_implicit<DefineSemaphore_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineSemaphore_Response)) ],
    "CONTEXT 22": [ "deleteSemaphore", $._decode_implicit<DeleteSemaphore_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteSemaphore_Response)) ],
    "CONTEXT 23": [ "reportSemaphoreStatus", $._decodeAny ],
    "CONTEXT 24": [ "reportPoolSemaphoreStatus", $._decodeAny ],
    "CONTEXT 25": [ "reportSemaphoreEntryStatus", $._decodeAny ],
    "CONTEXT 26": [ "initiateDownloadSequence", $._decode_implicit<InitiateDownloadSequence_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_InitiateDownloadSequence_Response)) ],
    "CONTEXT 27": [ "downloadSegment", $._decodeAny ],
    "CONTEXT 28": [ "terminateDownloadSequence", $._decode_implicit<TerminateDownloadSequence_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_TerminateDownloadSequence_Response)) ],
    "CONTEXT 29": [ "initiateUploadSequence", $._decodeAny ],
    "CONTEXT 30": [ "uploadSegment", $._decodeAny ],
    "CONTEXT 31": [ "terminateUploadSequence", $._decode_implicit<TerminateUploadSequence_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_TerminateUploadSequence_Response)) ],
    "CONTEXT 32": [ "requestDomainDownload", $._decode_implicit<RequestDomainDownload_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_RequestDomainDownload_Response)) ],
    "CONTEXT 33": [ "requestDomainUpload", $._decode_implicit<RequestDomainUpload_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_RequestDomainUpload_Response)) ],
    "CONTEXT 34": [ "loadDomainContent", $._decode_implicit<LoadDomainContent_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_LoadDomainContent_Response)) ],
    "CONTEXT 35": [ "storeDomainContent", $._decode_implicit<StoreDomainContent_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_StoreDomainContent_Response)) ],
    "CONTEXT 36": [ "deleteDomain", $._decode_implicit<DeleteDomain_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteDomain_Response)) ],
    "CONTEXT 37": [ "getDomainAttributes", $._decodeAny ],
    "CONTEXT 38": [ "createProgramInvocation", $._decode_implicit<CreateProgramInvocation_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_CreateProgramInvocation_Response)) ],
    "CONTEXT 39": [ "deleteProgramInvocation", $._decode_implicit<DeleteProgramInvocation_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteProgramInvocation_Response)) ],
    "CONTEXT 40": [ "start", $._decode_implicit<Start_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Start_Response)) ],
    "CONTEXT 41": [ "stop", $._decode_implicit<Stop_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Stop_Response)) ],
    "CONTEXT 42": [ "resume", $._decode_implicit<Resume_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Resume_Response)) ],
    "CONTEXT 43": [ "reset", $._decode_implicit<Reset_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Reset_Response)) ],
    "CONTEXT 44": [ "kill", $._decode_implicit<Kill_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Kill_Response)) ],
    "CONTEXT 45": [ "getProgramInvocationAttributes", $._decodeAny ],
    "CONTEXT 46": [ "obtainFile", $._decode_implicit<ObtainFile_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_ObtainFile_Response)) ],
    "CONTEXT 47": [ "defineEventCondition", $._decode_implicit<DefineEventCondition_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineEventCondition_Response)) ],
    "CONTEXT 48": [ "deleteEventCondition", $._decode_implicit<DeleteEventCondition_Response>(() => _decode_DeleteEventCondition_Response) ],
    "CONTEXT 49": [ "getEventConditionAttributes", $._decodeAny ],
    "CONTEXT 50": [ "reportEventConditionStatus", $._decodeAny ],
    "CONTEXT 51": [ "alterEventConditionMonitoring", $._decode_implicit<AlterEventConditionMonitoring_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_AlterEventConditionMonitoring_Response)) ],
    "CONTEXT 52": [ "triggerEvent", $._decode_implicit<TriggerEvent_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_TriggerEvent_Response)) ],
    "CONTEXT 53": [ "defineEventAction", $._decode_implicit<DefineEventAction_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineEventAction_Response)) ],
    "CONTEXT 54": [ "deleteEventAction", $._decode_implicit<DeleteEventAction_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteEventAction_Response)) ],
    "CONTEXT 55": [ "getEventActionAttributes", $._decodeAny ],
    "CONTEXT 56": [ "reportEventActionStatus", $._decode_implicit<ReportEventActionStatus_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_ReportEventActionStatus_Response)) ],
    "CONTEXT 57": [ "defineEventEnrollment", $._decode_implicit<DefineEventEnrollment_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineEventEnrollment_Response)) ],
    "CONTEXT 58": [ "deleteEventEnrollment", $._decode_implicit<DeleteEventEnrollment_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteEventEnrollment_Response)) ],
    "CONTEXT 59": [ "alterEventEnrollment", $._decodeAny ],
    "CONTEXT 60": [ "reportEventEnrollmentStatus", $._decodeAny ],
    "CONTEXT 61": [ "getEventEnrollmentAttributes", $._decodeAny ],
    "CONTEXT 62": [ "acknowledgeEventNotification", $._decode_implicit<AcknowledgeEventNotification_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_AcknowledgeEventNotification_Response)) ],
    "CONTEXT 63": [ "getAlarmSummary", $._decodeAny ],
    "CONTEXT 64": [ "getAlarmEnrollmentSummary", $._decodeAny ],
    "CONTEXT 65": [ "readJournal", $._decodeAny ],
    "CONTEXT 66": [ "writeJournal", $._decode_implicit<WriteJournal_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_WriteJournal_Response)) ],
    "CONTEXT 67": [ "initializeJournal", $._decode_implicit<InitializeJournal_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_InitializeJournal_Response)) ],
    "CONTEXT 68": [ "reportJournalStatus", $._decodeAny ],
    "CONTEXT 69": [ "createJournal", $._decode_implicit<CreateJournal_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_CreateJournal_Response)) ],
    "CONTEXT 70": [ "deleteJournal", $._decode_implicit<DeleteJournal_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteJournal_Response)) ],
    "CONTEXT 71": [ "getCapabilityList", $._decodeAny ],
    "CONTEXT 72": [ "fileOpen", $._decodeAny ],
    "CONTEXT 73": [ "fileRead", $._decodeAny ],
    "CONTEXT 74": [ "fileClose", $._decode_implicit<FileClose_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_FileClose_Response)) ],
    "CONTEXT 75": [ "fileRename", $._decode_implicit<FileRename_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_FileRename_Response)) ],
    "CONTEXT 76": [ "fileDelete", $._decode_implicit<FileDelete_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_FileDelete_Response)) ],
    "CONTEXT 77": [ "fileDirectory", $._decodeAny ],
    "CONTEXT 78": [ "additionalService", $._decode_explicit<AdditionalService_Response>(() => _decode_AdditionalService_Response) ],
    "CONTEXT 80": [ "getDataExchangeAttributes", $._decode_implicit<GetDataExchangeAttributes_Response>(() => _decode_GetDataExchangeAttributes_Response) ],
    "CONTEXT 81": [ "exchangeData", $._decode_implicit<ExchangeData_Response>(() => _decode_ExchangeData_Response) ],
    "CONTEXT 82": [ "defineAccessControlList", $._decode_implicit<DefineAccessControlList_Response>(() => _decode_DefineAccessControlList_Response) ],
    "CONTEXT 83": [ "getAccessControlListAttributes", $._decode_implicit<GetAccessControlListAttributes_Response>(() => _decode_GetAccessControlListAttributes_Response) ],
    "CONTEXT 84": [ "reportAccessControlledObjects", $._decode_implicit<ReportAccessControlledObjects_Response>(() => _decode_ReportAccessControlledObjects_Response) ],
    "CONTEXT 85": [ "deleteAccessControlList", $._decode_implicit<DeleteAccessControlList_Response>(() => _decode_DeleteAccessControlList_Response) ],
    "CONTEXT 86": [ "changeAccessControl", $._decode_implicit<ChangeAccessControl_Response>(() => _decode_ChangeAccessControl_Response) ],
}); }
    return _cached_decoder_for_ConfirmedServiceResponse(el);
}

let _cached_encoder_for_ConfirmedServiceResponse: $.ASN1Encoder<ConfirmedServiceResponse> | null = null;

/**
 * @summary Encodes a(n) ConfirmedServiceResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfirmedServiceResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ConfirmedServiceResponse (value: ConfirmedServiceResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfirmedServiceResponse) { _cached_encoder_for_ConfirmedServiceResponse = $._encode_choice<ConfirmedServiceResponse>({
    "status": $._encode_implicit(_TagClass.context, 0, () => $._encodeAny, $.BER),
    "getNameList": $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER),
    "identify": $._encode_implicit(_TagClass.context, 2, () => $._encodeAny, $.BER),
    "rename": encodeWithRejectPDUFallback(3, _encode_Rename_Response),
    "read": $._encode_implicit(_TagClass.context, 4, () => $._encodeAny, $.BER),
    "write": $._encode_implicit(_TagClass.context, 5, () => $._encodeAny, $.BER),
    "getVariableAccessAttributes": $._encode_implicit(_TagClass.context, 6, () => $._encodeAny, $.BER),
    "defineNamedVariable": encodeWithRejectPDUFallback(7, _encode_DefineNamedVariable_Response),
    "defineScatteredAccess": encodeWithRejectPDUFallback(8, _encode_DefineScatteredAccess_Response),
    "getScatteredAccessAttributes": $._encode_implicit(_TagClass.context, 9, () => $._encodeAny, $.BER),
    "deleteVariableAccess": $._encode_implicit(_TagClass.context, 10, () => $._encodeAny, $.BER),
    "defineNamedVariableList": encodeWithRejectPDUFallback(11, _encode_DefineNamedVariableList_Response),
    "getNamedVariableListAttributes": $._encode_implicit(_TagClass.context, 12, () => $._encodeAny, $.BER),
    "deleteNamedVariableList": $._encode_implicit(_TagClass.context, 13, () => $._encodeAny, $.BER),
    "defineNamedType": encodeWithRejectPDUFallback(14, _encode_DefineNamedType_Response),
    "getNamedTypeAttributes": $._encode_implicit(_TagClass.context, 15, () => $._encodeAny, $.BER),
    "deleteNamedType": $._encode_implicit(_TagClass.context, 16, () => $._encodeAny, $.BER),
    "input": $._encode_implicit(_TagClass.context, 17, () => _encode_Input_Response, $.BER),
    "output": encodeWithRejectPDUFallback(18, _encode_Output_Response),
    "takeControl": $._encode_explicit(_TagClass.context, 19, () => _encode_TakeControl_Response, $.BER),
    "relinquishControl": encodeWithRejectPDUFallback(20, _encode_RelinquishControl_Response),
    "defineSemaphore": encodeWithRejectPDUFallback(21, _encode_DefineSemaphore_Response),
    "deleteSemaphore": encodeWithRejectPDUFallback(22, _encode_DeleteSemaphore_Response),
    "reportSemaphoreStatus": $._encode_implicit(_TagClass.context, 23, () => $._encodeAny, $.BER),
    "reportPoolSemaphoreStatus": $._encode_implicit(_TagClass.context, 24, () => $._encodeAny, $.BER),
    "reportSemaphoreEntryStatus": $._encode_implicit(_TagClass.context, 25, () => $._encodeAny, $.BER),
    "initiateDownloadSequence": encodeWithRejectPDUFallback(26, _encode_InitiateDownloadSequence_Response),
    "downloadSegment": $._encode_implicit(_TagClass.context, 27, () => $._encodeAny, $.BER),
    "terminateDownloadSequence": encodeWithRejectPDUFallback(28, _encode_TerminateDownloadSequence_Response),
    "initiateUploadSequence": $._encode_implicit(_TagClass.context, 29, () => $._encodeAny, $.BER),
    "uploadSegment": $._encode_implicit(_TagClass.context, 30, () => $._encodeAny, $.BER),
    "terminateUploadSequence": encodeWithRejectPDUFallback(31, _encode_TerminateUploadSequence_Response),
    "requestDomainDownload": encodeWithRejectPDUFallback(32, _encode_RequestDomainDownload_Response),
    "requestDomainUpload": encodeWithRejectPDUFallback(33, _encode_RequestDomainUpload_Response),
    "loadDomainContent": encodeWithRejectPDUFallback(34, _encode_LoadDomainContent_Response),
    "storeDomainContent": encodeWithRejectPDUFallback(35, _encode_StoreDomainContent_Response),
    "deleteDomain": encodeWithRejectPDUFallback(36, _encode_DeleteDomain_Response),
    "getDomainAttributes": $._encode_implicit(_TagClass.context, 37, () => $._encodeAny, $.BER),
    "createProgramInvocation": encodeWithRejectPDUFallback(38, _encode_CreateProgramInvocation_Response),
    "deleteProgramInvocation": encodeWithRejectPDUFallback(39, _encode_DeleteProgramInvocation_Response),
    "start": encodeWithRejectPDUFallback(40, _encode_Start_Response),
    "stop": encodeWithRejectPDUFallback(41, _encode_Stop_Response),
    "resume": encodeWithRejectPDUFallback(42, _encode_Resume_Response),
    "reset": encodeWithRejectPDUFallback(43, _encode_Reset_Response),
    "kill": encodeWithRejectPDUFallback(44, _encode_Kill_Response),
    "getProgramInvocationAttributes": $._encode_implicit(_TagClass.context, 45, () => $._encodeAny, $.BER),
    "obtainFile": encodeWithRejectPDUFallback(46, _encode_ObtainFile_Response),
    "defineEventCondition": encodeWithRejectPDUFallback(47, _encode_DefineEventCondition_Response),
    "deleteEventCondition": $._encode_implicit(_TagClass.context, 48, () => _encode_DeleteEventCondition_Response, $.BER),
    "getEventConditionAttributes": $._encode_implicit(_TagClass.context, 49, () => $._encodeAny, $.BER),
    "reportEventConditionStatus": $._encode_implicit(_TagClass.context, 50, () => $._encodeAny, $.BER),
    "alterEventConditionMonitoring": encodeWithRejectPDUFallback(51, _encode_AlterEventConditionMonitoring_Response),
    "triggerEvent": encodeWithRejectPDUFallback(52, _encode_TriggerEvent_Response),
    "defineEventAction": encodeWithRejectPDUFallback(53, _encode_DefineEventAction_Response),
    "deleteEventAction": encodeWithRejectPDUFallback(54, _encode_DeleteEventAction_Response),
    "getEventActionAttributes": $._encode_implicit(_TagClass.context, 55, () => $._encodeAny, $.BER),
    "reportEventActionStatus": encodeWithRejectPDUFallback(56, _encode_ReportEventActionStatus_Response),
    "defineEventEnrollment": encodeWithRejectPDUFallback(57, _encode_DefineEventEnrollment_Response),
    "deleteEventEnrollment": encodeWithRejectPDUFallback(58, _encode_DeleteEventEnrollment_Response),
    "alterEventEnrollment": $._encode_implicit(_TagClass.context, 59, () => $._encodeAny, $.BER),
    "reportEventEnrollmentStatus": $._encode_implicit(_TagClass.context, 60, () => $._encodeAny, $.BER),
    "getEventEnrollmentAttributes": $._encode_implicit(_TagClass.context, 61, () => $._encodeAny, $.BER),
    "acknowledgeEventNotification": encodeWithRejectPDUFallback(62, _encode_AcknowledgeEventNotification_Response),
    "getAlarmSummary": $._encode_implicit(_TagClass.context, 63, () => $._encodeAny, $.BER),
    "getAlarmEnrollmentSummary": $._encode_implicit(_TagClass.context, 64, () => $._encodeAny, $.BER),
    "readJournal": $._encode_implicit(_TagClass.context, 65, () => $._encodeAny, $.BER),
    "writeJournal": encodeWithRejectPDUFallback(66, _encode_WriteJournal_Response),
    "initializeJournal": encodeWithRejectPDUFallback(67, _encode_InitializeJournal_Response),
    "reportJournalStatus": $._encode_implicit(_TagClass.context, 68, () => $._encodeAny, $.BER),
    "createJournal": encodeWithRejectPDUFallback(69, _encode_CreateJournal_Response),
    "deleteJournal": encodeWithRejectPDUFallback(70, _encode_DeleteJournal_Response),
    "getCapabilityList": $._encode_implicit(_TagClass.context, 71, () => $._encodeAny, $.BER),
    "fileOpen": $._encode_implicit(_TagClass.context, 72, () => $._encodeAny, $.BER),
    "fileRead": $._encode_implicit(_TagClass.context, 73, () => $._encodeAny, $.BER),
    "fileClose": encodeWithRejectPDUFallback(74, _encode_FileClose_Response),
    "fileRename": encodeWithRejectPDUFallback(75, _encode_FileRename_Response),
    "fileDelete": encodeWithRejectPDUFallback(76, _encode_FileDelete_Response),
    "fileDirectory": $._encode_implicit(_TagClass.context, 77, () => $._encodeAny, $.BER),
    "additionalService": $._encode_explicit(_TagClass.context, 78, () => _encode_AdditionalService_Response, $.BER),
    "getDataExchangeAttributes": $._encode_implicit(_TagClass.context, 80, () => _encode_GetDataExchangeAttributes_Response, $.BER),
    "exchangeData": $._encode_implicit(_TagClass.context, 81, () => _encode_ExchangeData_Response, $.BER),
    "defineAccessControlList": $._encode_implicit(_TagClass.context, 82, () => _encode_DefineAccessControlList_Response, $.BER),
    "getAccessControlListAttributes": $._encode_implicit(_TagClass.context, 83, () => _encode_GetAccessControlListAttributes_Response, $.BER),
    "reportAccessControlledObjects": $._encode_implicit(_TagClass.context, 84, () => _encode_ReportAccessControlledObjects_Response, $.BER),
    "deleteAccessControlList": $._encode_implicit(_TagClass.context, 85, () => _encode_DeleteAccessControlList_Response, $.BER),
    "changeAccessControl": $._encode_implicit(_TagClass.context, 86, () => _encode_ChangeAccessControl_Response, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfirmedServiceResponse(value, elGetter);
}


/* eslint-enable */

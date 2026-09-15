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
import { Status_Request, _decode_Status_Request, _encode_Status_Request } from "../ISO-9506-MMS-1/Status-Request.ta.mjs";
// export { Status_Request, _decode_Status_Request, _encode_Status_Request } from "../ISO-9506-MMS-1/Status-Request.ta.mjs";
import { GetNameList_Request, _decode_GetNameList_Request, _encode_GetNameList_Request } from "../ISO-9506-MMS-1/GetNameList-Request.ta.mjs";
// export { GetNameList_Request, _decode_GetNameList_Request, _encode_GetNameList_Request } from "../ISO-9506-MMS-1/GetNameList-Request.ta.mjs";
import { Identify_Request, _decode_Identify_Request, _encode_Identify_Request } from "../ISO-9506-MMS-1/Identify-Request.ta.mjs";
// export { Identify_Request, _decode_Identify_Request, _encode_Identify_Request } from "../ISO-9506-MMS-1/Identify-Request.ta.mjs";
import { Rename_Request, _decode_Rename_Request, _encode_Rename_Request } from "../ISO-9506-MMS-1/Rename-Request.ta.mjs";
// export { Rename_Request, _decode_Rename_Request, _encode_Rename_Request } from "../ISO-9506-MMS-1/Rename-Request.ta.mjs";
import { Read_Request, _decode_Read_Request, _encode_Read_Request } from "../ISO-9506-MMS-1/Read-Request.ta.mjs";
// export { Read_Request, _decode_Read_Request, _encode_Read_Request } from "../ISO-9506-MMS-1/Read-Request.ta.mjs";
import { Write_Request, _decode_Write_Request, _encode_Write_Request } from "../ISO-9506-MMS-1/Write-Request.ta.mjs";
// export { Write_Request, _decode_Write_Request, _encode_Write_Request } from "../ISO-9506-MMS-1/Write-Request.ta.mjs";
import { GetVariableAccessAttributes_Request, _decode_GetVariableAccessAttributes_Request, _encode_GetVariableAccessAttributes_Request } from "../ISO-9506-MMS-1/GetVariableAccessAttributes-Request.ta.mjs";
// export { GetVariableAccessAttributes_Request, _decode_GetVariableAccessAttributes_Request, _encode_GetVariableAccessAttributes_Request } from "../ISO-9506-MMS-1/GetVariableAccessAttributes-Request.ta.mjs";
import { DefineNamedVariable_Request, _decode_DefineNamedVariable_Request, _encode_DefineNamedVariable_Request } from "../ISO-9506-MMS-1/DefineNamedVariable-Request.ta.mjs";
// export { DefineNamedVariable_Request, _decode_DefineNamedVariable_Request, _encode_DefineNamedVariable_Request } from "../ISO-9506-MMS-1/DefineNamedVariable-Request.ta.mjs";
import { DefineScatteredAccess_Request, _decode_DefineScatteredAccess_Request, _encode_DefineScatteredAccess_Request } from "../ISO-9506-MMS-1A/DefineScatteredAccess-Request.ta.mjs";
// export { DefineScatteredAccess_Request, _decode_DefineScatteredAccess_Request, _encode_DefineScatteredAccess_Request } from "../ISO-9506-MMS-1A/DefineScatteredAccess-Request.ta.mjs";
import { GetScatteredAccessAttributes_Request, _decode_GetScatteredAccessAttributes_Request, _encode_GetScatteredAccessAttributes_Request } from "../ISO-9506-MMS-1A/GetScatteredAccessAttributes-Request.ta.mjs";
// export { GetScatteredAccessAttributes_Request, _decode_GetScatteredAccessAttributes_Request, _encode_GetScatteredAccessAttributes_Request } from "../ISO-9506-MMS-1A/GetScatteredAccessAttributes-Request.ta.mjs";
import { DeleteVariableAccess_Request, _decode_DeleteVariableAccess_Request, _encode_DeleteVariableAccess_Request } from "../ISO-9506-MMS-1/DeleteVariableAccess-Request.ta.mjs";
// export { DeleteVariableAccess_Request, _decode_DeleteVariableAccess_Request, _encode_DeleteVariableAccess_Request } from "../ISO-9506-MMS-1/DeleteVariableAccess-Request.ta.mjs";
import { DefineNamedVariableList_Request, _decode_DefineNamedVariableList_Request, _encode_DefineNamedVariableList_Request } from "../ISO-9506-MMS-1/DefineNamedVariableList-Request.ta.mjs";
// export { DefineNamedVariableList_Request, _decode_DefineNamedVariableList_Request, _encode_DefineNamedVariableList_Request } from "../ISO-9506-MMS-1/DefineNamedVariableList-Request.ta.mjs";
import { GetNamedVariableListAttributes_Request, _decode_GetNamedVariableListAttributes_Request, _encode_GetNamedVariableListAttributes_Request } from "../ISO-9506-MMS-1/GetNamedVariableListAttributes-Request.ta.mjs";
// export { GetNamedVariableListAttributes_Request, _decode_GetNamedVariableListAttributes_Request, _encode_GetNamedVariableListAttributes_Request } from "../ISO-9506-MMS-1/GetNamedVariableListAttributes-Request.ta.mjs";
import { DeleteNamedVariableList_Request, _decode_DeleteNamedVariableList_Request, _encode_DeleteNamedVariableList_Request } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Request.ta.mjs";
// export { DeleteNamedVariableList_Request, _decode_DeleteNamedVariableList_Request, _encode_DeleteNamedVariableList_Request } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Request.ta.mjs";
import { DefineNamedType_Request, _decode_DefineNamedType_Request, _encode_DefineNamedType_Request } from "../ISO-9506-MMS-1/DefineNamedType-Request.ta.mjs";
// export { DefineNamedType_Request, _decode_DefineNamedType_Request, _encode_DefineNamedType_Request } from "../ISO-9506-MMS-1/DefineNamedType-Request.ta.mjs";
import { GetNamedTypeAttributes_Request, _decode_GetNamedTypeAttributes_Request, _encode_GetNamedTypeAttributes_Request } from "../ISO-9506-MMS-1/GetNamedTypeAttributes-Request.ta.mjs";
// export { GetNamedTypeAttributes_Request, _decode_GetNamedTypeAttributes_Request, _encode_GetNamedTypeAttributes_Request } from "../ISO-9506-MMS-1/GetNamedTypeAttributes-Request.ta.mjs";
import { DeleteNamedType_Request, _decode_DeleteNamedType_Request, _encode_DeleteNamedType_Request } from "../ISO-9506-MMS-1/DeleteNamedType-Request.ta.mjs";
// export { DeleteNamedType_Request, _decode_DeleteNamedType_Request, _encode_DeleteNamedType_Request } from "../ISO-9506-MMS-1/DeleteNamedType-Request.ta.mjs";
import { Input_Request, _decode_Input_Request, _encode_Input_Request } from "../ISO-9506-MMS-1/Input-Request.ta.mjs";
// export { Input_Request, _decode_Input_Request, _encode_Input_Request } from "../ISO-9506-MMS-1/Input-Request.ta.mjs";
import { Output_Request, _decode_Output_Request, _encode_Output_Request } from "../ISO-9506-MMS-1/Output-Request.ta.mjs";
// export { Output_Request, _decode_Output_Request, _encode_Output_Request } from "../ISO-9506-MMS-1/Output-Request.ta.mjs";
import { TakeControl_Request, _decode_TakeControl_Request, _encode_TakeControl_Request } from "../ISO-9506-MMS-1/TakeControl-Request.ta.mjs";
// export { TakeControl_Request, _decode_TakeControl_Request, _encode_TakeControl_Request } from "../ISO-9506-MMS-1/TakeControl-Request.ta.mjs";
import { RelinquishControl_Request, _decode_RelinquishControl_Request, _encode_RelinquishControl_Request } from "../ISO-9506-MMS-1/RelinquishControl-Request.ta.mjs";
// export { RelinquishControl_Request, _decode_RelinquishControl_Request, _encode_RelinquishControl_Request } from "../ISO-9506-MMS-1/RelinquishControl-Request.ta.mjs";
import { DefineSemaphore_Request, _decode_DefineSemaphore_Request, _encode_DefineSemaphore_Request } from "../ISO-9506-MMS-1/DefineSemaphore-Request.ta.mjs";
// export { DefineSemaphore_Request, _decode_DefineSemaphore_Request, _encode_DefineSemaphore_Request } from "../ISO-9506-MMS-1/DefineSemaphore-Request.ta.mjs";
import { DeleteSemaphore_Request, _decode_DeleteSemaphore_Request, _encode_DeleteSemaphore_Request } from "../ISO-9506-MMS-1/DeleteSemaphore-Request.ta.mjs";
// export { DeleteSemaphore_Request, _decode_DeleteSemaphore_Request, _encode_DeleteSemaphore_Request } from "../ISO-9506-MMS-1/DeleteSemaphore-Request.ta.mjs";
import { ReportSemaphoreStatus_Request, _decode_ReportSemaphoreStatus_Request, _encode_ReportSemaphoreStatus_Request } from "../ISO-9506-MMS-1/ReportSemaphoreStatus-Request.ta.mjs";
// export { ReportSemaphoreStatus_Request, _decode_ReportSemaphoreStatus_Request, _encode_ReportSemaphoreStatus_Request } from "../ISO-9506-MMS-1/ReportSemaphoreStatus-Request.ta.mjs";
import { ReportPoolSemaphoreStatus_Request, _decode_ReportPoolSemaphoreStatus_Request, _encode_ReportPoolSemaphoreStatus_Request } from "../ISO-9506-MMS-1/ReportPoolSemaphoreStatus-Request.ta.mjs";
// export { ReportPoolSemaphoreStatus_Request, _decode_ReportPoolSemaphoreStatus_Request, _encode_ReportPoolSemaphoreStatus_Request } from "../ISO-9506-MMS-1/ReportPoolSemaphoreStatus-Request.ta.mjs";
import { ReportSemaphoreEntryStatus_Request, _decode_ReportSemaphoreEntryStatus_Request, _encode_ReportSemaphoreEntryStatus_Request } from "../ISO-9506-MMS-1/ReportSemaphoreEntryStatus-Request.ta.mjs";
// export { ReportSemaphoreEntryStatus_Request, _decode_ReportSemaphoreEntryStatus_Request, _encode_ReportSemaphoreEntryStatus_Request } from "../ISO-9506-MMS-1/ReportSemaphoreEntryStatus-Request.ta.mjs";
import { InitiateDownloadSequence_Request, _decode_InitiateDownloadSequence_Request, _encode_InitiateDownloadSequence_Request } from "../ISO-9506-MMS-1/InitiateDownloadSequence-Request.ta.mjs";
// export { InitiateDownloadSequence_Request, _decode_InitiateDownloadSequence_Request, _encode_InitiateDownloadSequence_Request } from "../ISO-9506-MMS-1/InitiateDownloadSequence-Request.ta.mjs";
import { DownloadSegment_Request, _decode_DownloadSegment_Request, _encode_DownloadSegment_Request } from "../ISO-9506-MMS-1/DownloadSegment-Request.ta.mjs";
// export { DownloadSegment_Request, _decode_DownloadSegment_Request, _encode_DownloadSegment_Request } from "../ISO-9506-MMS-1/DownloadSegment-Request.ta.mjs";
import { TerminateDownloadSequence_Request, _decode_TerminateDownloadSequence_Request, _encode_TerminateDownloadSequence_Request } from "../ISO-9506-MMS-1/TerminateDownloadSequence-Request.ta.mjs";
// export { TerminateDownloadSequence_Request, _decode_TerminateDownloadSequence_Request, _encode_TerminateDownloadSequence_Request } from "../ISO-9506-MMS-1/TerminateDownloadSequence-Request.ta.mjs";
import { InitiateUploadSequence_Request, _decode_InitiateUploadSequence_Request, _encode_InitiateUploadSequence_Request } from "../ISO-9506-MMS-1/InitiateUploadSequence-Request.ta.mjs";
// export { InitiateUploadSequence_Request, _decode_InitiateUploadSequence_Request, _encode_InitiateUploadSequence_Request } from "../ISO-9506-MMS-1/InitiateUploadSequence-Request.ta.mjs";
import { UploadSegment_Request, _decode_UploadSegment_Request, _encode_UploadSegment_Request } from "../ISO-9506-MMS-1/UploadSegment-Request.ta.mjs";
// export { UploadSegment_Request, _decode_UploadSegment_Request, _encode_UploadSegment_Request } from "../ISO-9506-MMS-1/UploadSegment-Request.ta.mjs";
import { TerminateUploadSequence_Request, _decode_TerminateUploadSequence_Request, _encode_TerminateUploadSequence_Request } from "../ISO-9506-MMS-1/TerminateUploadSequence-Request.ta.mjs";
// export { TerminateUploadSequence_Request, _decode_TerminateUploadSequence_Request, _encode_TerminateUploadSequence_Request } from "../ISO-9506-MMS-1/TerminateUploadSequence-Request.ta.mjs";
import { RequestDomainDownload_Request, _decode_RequestDomainDownload_Request, _encode_RequestDomainDownload_Request } from "../ISO-9506-MMS-1/RequestDomainDownload-Request.ta.mjs";
// export { RequestDomainDownload_Request, _decode_RequestDomainDownload_Request, _encode_RequestDomainDownload_Request } from "../ISO-9506-MMS-1/RequestDomainDownload-Request.ta.mjs";
import { RequestDomainUpload_Request, _decode_RequestDomainUpload_Request, _encode_RequestDomainUpload_Request } from "../ISO-9506-MMS-1/RequestDomainUpload-Request.ta.mjs";
// export { RequestDomainUpload_Request, _decode_RequestDomainUpload_Request, _encode_RequestDomainUpload_Request } from "../ISO-9506-MMS-1/RequestDomainUpload-Request.ta.mjs";
import { LoadDomainContent_Request, _decode_LoadDomainContent_Request, _encode_LoadDomainContent_Request } from "../ISO-9506-MMS-1/LoadDomainContent-Request.ta.mjs";
// export { LoadDomainContent_Request, _decode_LoadDomainContent_Request, _encode_LoadDomainContent_Request } from "../ISO-9506-MMS-1/LoadDomainContent-Request.ta.mjs";
import { StoreDomainContent_Request, _decode_StoreDomainContent_Request, _encode_StoreDomainContent_Request } from "../ISO-9506-MMS-1/StoreDomainContent-Request.ta.mjs";
// export { StoreDomainContent_Request, _decode_StoreDomainContent_Request, _encode_StoreDomainContent_Request } from "../ISO-9506-MMS-1/StoreDomainContent-Request.ta.mjs";
import { DeleteDomain_Request, _decode_DeleteDomain_Request, _encode_DeleteDomain_Request } from "../ISO-9506-MMS-1/DeleteDomain-Request.ta.mjs";
// export { DeleteDomain_Request, _decode_DeleteDomain_Request, _encode_DeleteDomain_Request } from "../ISO-9506-MMS-1/DeleteDomain-Request.ta.mjs";
import { GetDomainAttributes_Request, _decode_GetDomainAttributes_Request, _encode_GetDomainAttributes_Request } from "../ISO-9506-MMS-1/GetDomainAttributes-Request.ta.mjs";
// export { GetDomainAttributes_Request, _decode_GetDomainAttributes_Request, _encode_GetDomainAttributes_Request } from "../ISO-9506-MMS-1/GetDomainAttributes-Request.ta.mjs";
import { CreateProgramInvocation_Request, _decode_CreateProgramInvocation_Request, _encode_CreateProgramInvocation_Request } from "../ISO-9506-MMS-1/CreateProgramInvocation-Request.ta.mjs";
// export { CreateProgramInvocation_Request, _decode_CreateProgramInvocation_Request, _encode_CreateProgramInvocation_Request } from "../ISO-9506-MMS-1/CreateProgramInvocation-Request.ta.mjs";
import { DeleteProgramInvocation_Request, _decode_DeleteProgramInvocation_Request, _encode_DeleteProgramInvocation_Request } from "../ISO-9506-MMS-1/DeleteProgramInvocation-Request.ta.mjs";
// export { DeleteProgramInvocation_Request, _decode_DeleteProgramInvocation_Request, _encode_DeleteProgramInvocation_Request } from "../ISO-9506-MMS-1/DeleteProgramInvocation-Request.ta.mjs";
import { Start_Request, _decode_Start_Request, _encode_Start_Request } from "../ISO-9506-MMS-1/Start-Request.ta.mjs";
// export { Start_Request, _decode_Start_Request, _encode_Start_Request } from "../ISO-9506-MMS-1/Start-Request.ta.mjs";
import { Stop_Request, _decode_Stop_Request, _encode_Stop_Request } from "../ISO-9506-MMS-1/Stop-Request.ta.mjs";
// export { Stop_Request, _decode_Stop_Request, _encode_Stop_Request } from "../ISO-9506-MMS-1/Stop-Request.ta.mjs";
import { Resume_Request, _decode_Resume_Request, _encode_Resume_Request } from "../ISO-9506-MMS-1/Resume-Request.ta.mjs";
// export { Resume_Request, _decode_Resume_Request, _encode_Resume_Request } from "../ISO-9506-MMS-1/Resume-Request.ta.mjs";
import { Reset_Request, _decode_Reset_Request, _encode_Reset_Request } from "../ISO-9506-MMS-1/Reset-Request.ta.mjs";
// export { Reset_Request, _decode_Reset_Request, _encode_Reset_Request } from "../ISO-9506-MMS-1/Reset-Request.ta.mjs";
import { Kill_Request, _decode_Kill_Request, _encode_Kill_Request } from "../ISO-9506-MMS-1/Kill-Request.ta.mjs";
// export { Kill_Request, _decode_Kill_Request, _encode_Kill_Request } from "../ISO-9506-MMS-1/Kill-Request.ta.mjs";
import { GetProgramInvocationAttributes_Request, _decode_GetProgramInvocationAttributes_Request, _encode_GetProgramInvocationAttributes_Request } from "../ISO-9506-MMS-1/GetProgramInvocationAttributes-Request.ta.mjs";
// export { GetProgramInvocationAttributes_Request, _decode_GetProgramInvocationAttributes_Request, _encode_GetProgramInvocationAttributes_Request } from "../ISO-9506-MMS-1/GetProgramInvocationAttributes-Request.ta.mjs";
import { ObtainFile_Request, _decode_ObtainFile_Request, _encode_ObtainFile_Request } from "../ISO-9506-MMS-1A/ObtainFile-Request.ta.mjs";
// export { ObtainFile_Request, _decode_ObtainFile_Request, _encode_ObtainFile_Request } from "../ISO-9506-MMS-1A/ObtainFile-Request.ta.mjs";
import { DefineEventCondition_Request, _decode_DefineEventCondition_Request, _encode_DefineEventCondition_Request } from "../ISO-9506-MMS-1/DefineEventCondition-Request.ta.mjs";
// export { DefineEventCondition_Request, _decode_DefineEventCondition_Request, _encode_DefineEventCondition_Request } from "../ISO-9506-MMS-1/DefineEventCondition-Request.ta.mjs";
import { DeleteEventCondition_Request, _decode_DeleteEventCondition_Request, _encode_DeleteEventCondition_Request } from "../ISO-9506-MMS-1/DeleteEventCondition-Request.ta.mjs";
// export { DeleteEventCondition_Request, _decode_DeleteEventCondition_Request, _encode_DeleteEventCondition_Request } from "../ISO-9506-MMS-1/DeleteEventCondition-Request.ta.mjs";
import { GetEventConditionAttributes_Request, _decode_GetEventConditionAttributes_Request, _encode_GetEventConditionAttributes_Request } from "../ISO-9506-MMS-1/GetEventConditionAttributes-Request.ta.mjs";
// export { GetEventConditionAttributes_Request, _decode_GetEventConditionAttributes_Request, _encode_GetEventConditionAttributes_Request } from "../ISO-9506-MMS-1/GetEventConditionAttributes-Request.ta.mjs";
import { ReportEventConditionStatus_Request, _decode_ReportEventConditionStatus_Request, _encode_ReportEventConditionStatus_Request } from "../ISO-9506-MMS-1/ReportEventConditionStatus-Request.ta.mjs";
// export { ReportEventConditionStatus_Request, _decode_ReportEventConditionStatus_Request, _encode_ReportEventConditionStatus_Request } from "../ISO-9506-MMS-1/ReportEventConditionStatus-Request.ta.mjs";
import { AlterEventConditionMonitoring_Request, _decode_AlterEventConditionMonitoring_Request, _encode_AlterEventConditionMonitoring_Request } from "../ISO-9506-MMS-1/AlterEventConditionMonitoring-Request.ta.mjs";
// export { AlterEventConditionMonitoring_Request, _decode_AlterEventConditionMonitoring_Request, _encode_AlterEventConditionMonitoring_Request } from "../ISO-9506-MMS-1/AlterEventConditionMonitoring-Request.ta.mjs";
import { TriggerEvent_Request, _decode_TriggerEvent_Request, _encode_TriggerEvent_Request } from "../ISO-9506-MMS-1/TriggerEvent-Request.ta.mjs";
// export { TriggerEvent_Request, _decode_TriggerEvent_Request, _encode_TriggerEvent_Request } from "../ISO-9506-MMS-1/TriggerEvent-Request.ta.mjs";
import { DefineEventAction_Request, _decode_DefineEventAction_Request, _encode_DefineEventAction_Request } from "../ISO-9506-MMS-1/DefineEventAction-Request.ta.mjs";
// export { DefineEventAction_Request, _decode_DefineEventAction_Request, _encode_DefineEventAction_Request } from "../ISO-9506-MMS-1/DefineEventAction-Request.ta.mjs";
import { DeleteEventAction_Request, _decode_DeleteEventAction_Request, _encode_DeleteEventAction_Request } from "../ISO-9506-MMS-1/DeleteEventAction-Request.ta.mjs";
// export { DeleteEventAction_Request, _decode_DeleteEventAction_Request, _encode_DeleteEventAction_Request } from "../ISO-9506-MMS-1/DeleteEventAction-Request.ta.mjs";
import { GetEventActionAttributes_Request, _decode_GetEventActionAttributes_Request, _encode_GetEventActionAttributes_Request } from "../ISO-9506-MMS-1/GetEventActionAttributes-Request.ta.mjs";
// export { GetEventActionAttributes_Request, _decode_GetEventActionAttributes_Request, _encode_GetEventActionAttributes_Request } from "../ISO-9506-MMS-1/GetEventActionAttributes-Request.ta.mjs";
import { ReportEventActionStatus_Request, _decode_ReportEventActionStatus_Request, _encode_ReportEventActionStatus_Request } from "../ISO-9506-MMS-1/ReportEventActionStatus-Request.ta.mjs";
// export { ReportEventActionStatus_Request, _decode_ReportEventActionStatus_Request, _encode_ReportEventActionStatus_Request } from "../ISO-9506-MMS-1/ReportEventActionStatus-Request.ta.mjs";
import { DefineEventEnrollment_Request, _decode_DefineEventEnrollment_Request, _encode_DefineEventEnrollment_Request } from "../ISO-9506-MMS-1/DefineEventEnrollment-Request.ta.mjs";
// export { DefineEventEnrollment_Request, _decode_DefineEventEnrollment_Request, _encode_DefineEventEnrollment_Request } from "../ISO-9506-MMS-1/DefineEventEnrollment-Request.ta.mjs";
import { DeleteEventEnrollment_Request, _decode_DeleteEventEnrollment_Request, _encode_DeleteEventEnrollment_Request } from "../ISO-9506-MMS-1/DeleteEventEnrollment-Request.ta.mjs";
// export { DeleteEventEnrollment_Request, _decode_DeleteEventEnrollment_Request, _encode_DeleteEventEnrollment_Request } from "../ISO-9506-MMS-1/DeleteEventEnrollment-Request.ta.mjs";
import { AlterEventEnrollment_Request, _decode_AlterEventEnrollment_Request, _encode_AlterEventEnrollment_Request } from "../ISO-9506-MMS-1/AlterEventEnrollment-Request.ta.mjs";
// export { AlterEventEnrollment_Request, _decode_AlterEventEnrollment_Request, _encode_AlterEventEnrollment_Request } from "../ISO-9506-MMS-1/AlterEventEnrollment-Request.ta.mjs";
import { ReportEventEnrollmentStatus_Request, _decode_ReportEventEnrollmentStatus_Request, _encode_ReportEventEnrollmentStatus_Request } from "../ISO-9506-MMS-1/ReportEventEnrollmentStatus-Request.ta.mjs";
// export { ReportEventEnrollmentStatus_Request, _decode_ReportEventEnrollmentStatus_Request, _encode_ReportEventEnrollmentStatus_Request } from "../ISO-9506-MMS-1/ReportEventEnrollmentStatus-Request.ta.mjs";
import { GetEventEnrollmentAttributes_Request, _decode_GetEventEnrollmentAttributes_Request, _encode_GetEventEnrollmentAttributes_Request } from "../ISO-9506-MMS-1/GetEventEnrollmentAttributes-Request.ta.mjs";
// export { GetEventEnrollmentAttributes_Request, _decode_GetEventEnrollmentAttributes_Request, _encode_GetEventEnrollmentAttributes_Request } from "../ISO-9506-MMS-1/GetEventEnrollmentAttributes-Request.ta.mjs";
import { AcknowledgeEventNotification_Request, _decode_AcknowledgeEventNotification_Request, _encode_AcknowledgeEventNotification_Request } from "../ISO-9506-MMS-1/AcknowledgeEventNotification-Request.ta.mjs";
// export { AcknowledgeEventNotification_Request, _decode_AcknowledgeEventNotification_Request, _encode_AcknowledgeEventNotification_Request } from "../ISO-9506-MMS-1/AcknowledgeEventNotification-Request.ta.mjs";
import { GetAlarmSummary_Request, _decode_GetAlarmSummary_Request, _encode_GetAlarmSummary_Request } from "../ISO-9506-MMS-1/GetAlarmSummary-Request.ta.mjs";
// export { GetAlarmSummary_Request, _decode_GetAlarmSummary_Request, _encode_GetAlarmSummary_Request } from "../ISO-9506-MMS-1/GetAlarmSummary-Request.ta.mjs";
import { GetAlarmEnrollmentSummary_Request, _decode_GetAlarmEnrollmentSummary_Request, _encode_GetAlarmEnrollmentSummary_Request } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Request.ta.mjs";
// export { GetAlarmEnrollmentSummary_Request, _decode_GetAlarmEnrollmentSummary_Request, _encode_GetAlarmEnrollmentSummary_Request } from "../ISO-9506-MMS-1/GetAlarmEnrollmentSummary-Request.ta.mjs";
import { ReadJournal_Request, _decode_ReadJournal_Request, _encode_ReadJournal_Request } from "../ISO-9506-MMS-1/ReadJournal-Request.ta.mjs";
// export { ReadJournal_Request, _decode_ReadJournal_Request, _encode_ReadJournal_Request } from "../ISO-9506-MMS-1/ReadJournal-Request.ta.mjs";
import { WriteJournal_Request, _decode_WriteJournal_Request, _encode_WriteJournal_Request } from "../ISO-9506-MMS-1/WriteJournal-Request.ta.mjs";
// export { WriteJournal_Request, _decode_WriteJournal_Request, _encode_WriteJournal_Request } from "../ISO-9506-MMS-1/WriteJournal-Request.ta.mjs";
import { InitializeJournal_Request, _decode_InitializeJournal_Request, _encode_InitializeJournal_Request } from "../ISO-9506-MMS-1/InitializeJournal-Request.ta.mjs";
// export { InitializeJournal_Request, _decode_InitializeJournal_Request, _encode_InitializeJournal_Request } from "../ISO-9506-MMS-1/InitializeJournal-Request.ta.mjs";
import { ReportJournalStatus_Request, _decode_ReportJournalStatus_Request, _encode_ReportJournalStatus_Request } from "../ISO-9506-MMS-1/ReportJournalStatus-Request.ta.mjs";
// export { ReportJournalStatus_Request, _decode_ReportJournalStatus_Request, _encode_ReportJournalStatus_Request } from "../ISO-9506-MMS-1/ReportJournalStatus-Request.ta.mjs";
import { CreateJournal_Request, _decode_CreateJournal_Request, _encode_CreateJournal_Request } from "../ISO-9506-MMS-1/CreateJournal-Request.ta.mjs";
// export { CreateJournal_Request, _decode_CreateJournal_Request, _encode_CreateJournal_Request } from "../ISO-9506-MMS-1/CreateJournal-Request.ta.mjs";
import { DeleteJournal_Request, _decode_DeleteJournal_Request, _encode_DeleteJournal_Request } from "../ISO-9506-MMS-1/DeleteJournal-Request.ta.mjs";
// export { DeleteJournal_Request, _decode_DeleteJournal_Request, _encode_DeleteJournal_Request } from "../ISO-9506-MMS-1/DeleteJournal-Request.ta.mjs";
import { GetCapabilityList_Request, _decode_GetCapabilityList_Request, _encode_GetCapabilityList_Request } from "../ISO-9506-MMS-1/GetCapabilityList-Request.ta.mjs";
// export { GetCapabilityList_Request, _decode_GetCapabilityList_Request, _encode_GetCapabilityList_Request } from "../ISO-9506-MMS-1/GetCapabilityList-Request.ta.mjs";
import { FileOpen_Request, _decode_FileOpen_Request, _encode_FileOpen_Request } from "../ISO-9506-MMS-1A/FileOpen-Request.ta.mjs";
// export { FileOpen_Request, _decode_FileOpen_Request, _encode_FileOpen_Request } from "../ISO-9506-MMS-1A/FileOpen-Request.ta.mjs";
import { FileRead_Request, _decode_FileRead_Request, _encode_FileRead_Request } from "../ISO-9506-MMS-1A/FileRead-Request.ta.mjs";
// export { FileRead_Request, _decode_FileRead_Request, _encode_FileRead_Request } from "../ISO-9506-MMS-1A/FileRead-Request.ta.mjs";
import { FileClose_Request, _decode_FileClose_Request, _encode_FileClose_Request } from "../ISO-9506-MMS-1A/FileClose-Request.ta.mjs";
// export { FileClose_Request, _decode_FileClose_Request, _encode_FileClose_Request } from "../ISO-9506-MMS-1A/FileClose-Request.ta.mjs";
import { FileRename_Request, _decode_FileRename_Request, _encode_FileRename_Request } from "../ISO-9506-MMS-1A/FileRename-Request.ta.mjs";
// export { FileRename_Request, _decode_FileRename_Request, _encode_FileRename_Request } from "../ISO-9506-MMS-1A/FileRename-Request.ta.mjs";
import { FileDelete_Request, _decode_FileDelete_Request, _encode_FileDelete_Request } from "../ISO-9506-MMS-1A/FileDelete-Request.ta.mjs";
// export { FileDelete_Request, _decode_FileDelete_Request, _encode_FileDelete_Request } from "../ISO-9506-MMS-1A/FileDelete-Request.ta.mjs";
import { FileDirectory_Request, _decode_FileDirectory_Request, _encode_FileDirectory_Request } from "../ISO-9506-MMS-1A/FileDirectory-Request.ta.mjs";
// export { FileDirectory_Request, _decode_FileDirectory_Request, _encode_FileDirectory_Request } from "../ISO-9506-MMS-1A/FileDirectory-Request.ta.mjs";
import { AdditionalService_Request, _decode_AdditionalService_Request, _encode_AdditionalService_Request } from "../ISO-9506-MMS-1/AdditionalService-Request.ta.mjs";
// export { AdditionalService_Request, _decode_AdditionalService_Request, _encode_AdditionalService_Request } from "../ISO-9506-MMS-1/AdditionalService-Request.ta.mjs";
import { GetDataExchangeAttributes_Request, _decode_GetDataExchangeAttributes_Request, _encode_GetDataExchangeAttributes_Request } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Request.ta.mjs";
// export { GetDataExchangeAttributes_Request, _decode_GetDataExchangeAttributes_Request, _encode_GetDataExchangeAttributes_Request } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Request.ta.mjs";
import { ExchangeData_Request, _decode_ExchangeData_Request, _encode_ExchangeData_Request } from "../ISO-9506-MMS-1/ExchangeData-Request.ta.mjs";
// export { ExchangeData_Request, _decode_ExchangeData_Request, _encode_ExchangeData_Request } from "../ISO-9506-MMS-1/ExchangeData-Request.ta.mjs";
import { DefineAccessControlList_Request, _decode_DefineAccessControlList_Request, _encode_DefineAccessControlList_Request } from "../ISO-9506-MMS-1/DefineAccessControlList-Request.ta.mjs";
// export { DefineAccessControlList_Request, _decode_DefineAccessControlList_Request, _encode_DefineAccessControlList_Request } from "../ISO-9506-MMS-1/DefineAccessControlList-Request.ta.mjs";
import { GetAccessControlListAttributes_Request, _decode_GetAccessControlListAttributes_Request, _encode_GetAccessControlListAttributes_Request } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Request.ta.mjs";
// export { GetAccessControlListAttributes_Request, _decode_GetAccessControlListAttributes_Request, _encode_GetAccessControlListAttributes_Request } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Request.ta.mjs";
import { ReportAccessControlledObjects_Request, _decode_ReportAccessControlledObjects_Request, _encode_ReportAccessControlledObjects_Request } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Request.ta.mjs";
// export { ReportAccessControlledObjects_Request, _decode_ReportAccessControlledObjects_Request, _encode_ReportAccessControlledObjects_Request } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Request.ta.mjs";
import { DeleteAccessControlList_Request, _decode_DeleteAccessControlList_Request, _encode_DeleteAccessControlList_Request } from "../ISO-9506-MMS-1/DeleteAccessControlList-Request.ta.mjs";
// export { DeleteAccessControlList_Request, _decode_DeleteAccessControlList_Request, _encode_DeleteAccessControlList_Request } from "../ISO-9506-MMS-1/DeleteAccessControlList-Request.ta.mjs";
import { ChangeAccessControl_Request, _decode_ChangeAccessControl_Request, _encode_ChangeAccessControl_Request } from "../ISO-9506-MMS-1/ChangeAccessControl-Request.ta.mjs";
// export { ChangeAccessControl_Request, _decode_ChangeAccessControl_Request, _encode_ChangeAccessControl_Request } from "../ISO-9506-MMS-1/ChangeAccessControl-Request.ta.mjs";


/**
 * @summary ConfirmedServiceRequest
 * @description
 *
 * CHOICE of confirmed MMS service requests. The context tag selects the
 * service; the alternative carries that service's argument. Each alternative is
 * a confirmed service from ISO 9506-1:2003 clauses 8–23 or a companion-standard
 * AdditionalService (tag [78]). Unsupported services appear as tagged NULL;
 * receipt of an unsupported service shall be Rejected with UNRECOGNIZED-SERVICE
 * (ISO 9506-1:2003 §8.2; ISO 9506-2:2003 §7.1.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfirmedServiceRequest ::= CHOICE {
 *     status   [0] IMPLICIT Status-Request,
 *     status   [0] IMPLICIT NULL,
 *     getNameList [1] IMPLICIT GetNameList-Request,
 *     getNameList [1] IMPLICIT NULL,
 *     identify    [2] IMPLICIT Identify-Request,
 *     identify    [2] IMPLICIT NULL,
 *     rename  [3] IMPLICIT Rename-Request,
 *     rename  [3] IMPLICIT NULL,
 *     read    [4] IMPLICIT Read-Request,
 *     read    [4] IMPLICIT NULL,
 *     write   [5] IMPLICIT Write-Request,
 *     write   [5] IMPLICIT NULL,
 *     getVariableAccessAttributes [6] GetVariableAccessAttributes-Request,
 *     getVariableAccessAttributes [6] IMPLICIT NULL,
 *     defineNamedVariable [7] IMPLICIT DefineNamedVariable-Request,
 *     defineNamedVariable [7] IMPLICIT NULL,
 *     -- [8] is reserved for a service defined in Annex E
 *     defineScatteredAccess   [8] IMPLICIT DefineScatteredAccess-Request,
 *     defineScatteredAccess   [8] IMPLICIT NULL,
 *     -- [9] is reserved for a service defined in Annex E
 *     getScatteredAccessAttributes    [9] GetScatteredAccessAttributes-Request,
 *     getScatteredAccessAttributes    [9] IMPLICIT NULL,
 *     deleteVariableAccess    [10] IMPLICIT DeleteVariableAccess-Request,
 *     deleteVariableAccess    [10] IMPLICIT NULL,
 *     defineNamedVariableList [11] IMPLICIT DefineNamedVariableList-Request,
 *     defineNamedVariableList [11] IMPLICIT NULL,
 *     getNamedVariableListAttributes  [12] GetNamedVariableListAttributes-Request,
 *     getNamedVariableListAttributes  [12] IMPLICIT NULL,
 *     deleteNamedVariableList [13] IMPLICIT DeleteNamedVariableList-Request,
 *     deleteNamedVariableList [13] IMPLICIT NULL,
 *     defineNamedType [14] IMPLICIT DefineNamedType-Request,
 *     defineNamedType [14] IMPLICIT NULL,
 *     getNamedTypeAttributes  [15] GetNamedTypeAttributes-Request,
 *     getNamedTypeAttributes  [15] IMPLICIT NULL,
 *     deleteNamedType [16] IMPLICIT DeleteNamedType-Request,
 *     deleteNamedType [16] IMPLICIT NULL,
 *     input   [17] IMPLICIT Input-Request,
 *     input   [17] IMPLICIT NULL,
 *     output  [18] IMPLICIT Output-Request,
 *     output  [18] IMPLICIT NULL,
 *     takeControl [19] IMPLICIT TakeControl-Request,
 *     takeControl [19] IMPLICIT NULL,
 *     relinquishControl   [20] IMPLICIT RelinquishControl-Request,
 *     relinquishControl   [20] IMPLICIT NULL,
 *     defineSemaphore     [21] IMPLICIT DefineSemaphore-Request,
 *     defineSemaphore     [21] IMPLICIT NULL,
 *     deleteSemaphore     [22] DeleteSemaphore-Request,
 *     deleteSemaphore     [22] IMPLICIT NULL,
 *     reportSemaphoreStatus   [23] ReportSemaphoreStatus-Request,
 *     reportSemaphoreStatus   [23] IMPLICIT NULL,
 *     reportPoolSemaphoreStatus   [24] IMPLICIT ReportPoolSemaphoreStatus-Request,
 *     reportPoolSemaphoreStatus   [24] IMPLICIT NULL,
 *     reportSemaphoreEntryStatus  [25] IMPLICIT ReportSemaphoreEntryStatus-Request,
 *     reportSemaphoreEntryStatus  [25] IMPLICIT NULL,
 *     initiateDownloadSequence    [26] IMPLICIT InitiateDownloadSequence-Request,
 *     initiateDownloadSequence    [26] IMPLICIT NULL,
 *     downloadSegment     [27] IMPLICIT DownloadSegment-Request,
 *     downloadSegment     [27] IMPLICIT NULL,
 *     terminateDownloadSequence   [28] IMPLICIT TerminateDownloadSequence-Request,
 *     terminateDownloadSequence   [28] IMPLICIT NULL,
 *     initiateUploadSequence  [29] IMPLICIT InitiateUploadSequence-Request,
 *     initiateUploadSequence  [29] IMPLICIT NULL,
 *     uploadSegment   [30] IMPLICIT UploadSegment-Request,
 *     uploadSegment   [30] IMPLICIT NULL,
 *     terminateUploadSequence [31] IMPLICIT TerminateUploadSequence-Request,
 *     terminateUploadSequence [31] IMPLICIT NULL,
 *     requestDomainDownload   [32] IMPLICIT RequestDomainDownload-Request,
 *     requestDomainDownload   [32] IMPLICIT NULL,
 *     requestDomainUpload [33] IMPLICIT RequestDomainUpload-Request,
 *     requestDomainUpload [33] IMPLICIT NULL,
 *     loadDomainContent   [34] IMPLICIT LoadDomainContent-Request,
 *     loadDomainContent   [34] IMPLICIT NULL,
 *     storeDomainContent  [35] IMPLICIT StoreDomainContent-Request,
 *     storeDomainContent  [35] IMPLICIT NULL,
 *     deleteDomain    [36] IMPLICIT DeleteDomain-Request,
 *     deleteDomain    [36] IMPLICIT NULL,
 *     getDomainAttributes [37] IMPLICIT GetDomainAttributes-Request,
 *     getDomainAttributes [37] IMPLICIT NULL,
 *     createProgramInvocation [38] IMPLICIT CreateProgramInvocation-Request,
 *     createProgramInvocation [38] IMPLICIT NULL,
 *     deleteProgramInvocation [39] IMPLICIT DeleteProgramInvocation-Request,
 *     deleteProgramInvocation [39] IMPLICIT NULL,
 *     start   [40] IMPLICIT Start-Request,
 *     start   [40] IMPLICIT NULL,
 *     stop    [41] IMPLICIT Stop-Request,
 *     stop    [41] IMPLICIT NULL,
 *     resume  [42] IMPLICIT Resume-Request,
 *     resume  [42] IMPLICIT NULL,
 *     reset   [43] IMPLICIT Reset-Request,
 *     reset   [43] IMPLICIT NULL,
 *     kill    [44] IMPLICIT Kill-Request,
 *     kill    [44] IMPLICIT NULL,
 *     getProgramInvocationAttributes  [45] IMPLICIT GetProgramInvocationAttributes-Request,
 *     getProgramInvocationAttributes  [45] IMPLICIT NULL,
 *     obtainFile  [46] IMPLICIT ObtainFile-Request,
 *     obtainFile  [46] IMPLICIT NULL,
 *     defineEventCondition    [47] IMPLICIT DefineEventCondition-Request,
 *     defineEventCondition    [47] IMPLICIT NULL,
 *     deleteEventCondition    [48] DeleteEventCondition-Request,
 *     deleteEventCondition    [48] IMPLICIT NULL,
 *     getEventConditionAttributes [49] GetEventConditionAttributes-Request,
 *     getEventConditionAttributes [49] IMPLICIT NULL,
 *     reportEventConditionStatus  [50] ReportEventConditionStatus-Request,
 *     reportEventConditionStatus  [50] IMPLICIT NULL,
 *     alterEventConditionMonitoring   [51] IMPLICIT AlterEventConditionMonitoring-Request,
 *     alterEventConditionMonitoring   [51] IMPLICIT NULL,
 *     triggerEvent    [52] IMPLICIT TriggerEvent-Request,
 *     triggerEvent    [52] IMPLICIT NULL,
 *     defineEventAction   [53] IMPLICIT DefineEventAction-Request,
 *     defineEventAction   [53] IMPLICIT NULL,
 *     deleteEventAction   [54] DeleteEventAction-Request,
 *     deleteEventAction   [54] IMPLICIT NULL,
 *     getEventActionAttributes    [55] GetEventActionAttributes-Request,
 *     getEventActionAttributes    [55] IMPLICIT NULL,
 *     reportEventActionStatus     [56] ReportEventActionStatus-Request,
 *     reportEventActionStatus     [56] IMPLICIT NULL,
 *     defineEventEnrollment   [57] IMPLICIT DefineEventEnrollment-Request,
 *     defineEventEnrollment   [57] IMPLICIT NULL,
 *     deleteEventEnrollment   [58] DeleteEventEnrollment-Request,
 *     deleteEventEnrollment   [58] IMPLICIT NULL,
 *     alterEventEnrollment    [59] IMPLICIT AlterEventEnrollment-Request,
 *     alterEventEnrollment    [59] IMPLICIT NULL,
 *     reportEventEnrollmentStatus [60] ReportEventEnrollmentStatus-Request,
 *     reportEventEnrollmentStatus [60] IMPLICIT NULL,
 *     getEventEnrollmentAttributes    [61] IMPLICIT GetEventEnrollmentAttributes-Request,
 *     getEventEnrollmentAttributes    [61] IMPLICIT NULL,
 *     acknowledgeEventNotification    [62] IMPLICIT AcknowledgeEventNotification-Request,
 *     acknowledgeEventNotification    [62] IMPLICIT NULL,
 *     getAlarmSummary [63] IMPLICIT GetAlarmSummary-Request,
 *     getAlarmSummary [63] IMPLICIT NULL,
 *     getAlarmEnrollmentSummary   [64] IMPLICIT GetAlarmEnrollmentSummary-Request,
 *     getAlarmEnrollmentSummary   [64] IMPLICIT NULL,
 *     readJournal [65] IMPLICIT ReadJournal-Request,
 *     readJournal [65] IMPLICIT NULL,
 *     writeJournal    [66] IMPLICIT WriteJournal-Request,
 *     writeJournal    [66] IMPLICIT NULL,
 *     initializeJournal   [67] IMPLICIT InitializeJournal-Request,
 *     initializeJournal   [67] IMPLICIT NULL,
 *     reportJournalStatus [68] ReportJournalStatus-Request,
 *     reportJournalStatus [68] IMPLICIT NULL,
 *     createJournal   [69] IMPLICIT CreateJournal-Request,
 *     createJournal   [69] IMPLICIT NULL,
 *     deleteJournal   [70] IMPLICIT DeleteJournal-Request,
 *     deleteJournal   [70] IMPLICIT NULL,
 *     getCapabilityList   [71] IMPLICIT GetCapabilityList-Request,
 *     getCapabilityList   [71] IMPLICIT NULL,
 *     -- choices [72] through [77] are reserved for use by services
 *     -- defined in annex D
 *     fileOpen    [72] IMPLICIT FileOpen-Request,
 *     fileOpen    [72] IMPLICIT NULL,
 *     fileRead    [73] IMPLICIT FileRead-Request,
 *     fileRead    [73] IMPLICIT NULL,
 *     fileClose   [74] IMPLICIT FileClose-Request,
 *     fileClose   [74] IMPLICIT NULL,
 *     fileRename  [75] IMPLICIT FileRename-Request,
 *     fileRename  [75] IMPLICIT NULL,
 *     fileDelete  [76] IMPLICIT FileDelete-Request,
 *     fileDelete  [76] IMPLICIT NULL,
 *     fileDirectory   [77] IMPLICIT FileDirectory-Request,
 *     fileDirectory   [77] IMPLICIT NULL,
 *    ...,
 *     additionalService   [78] AdditionalService-Request,
 *     -- choice [79] is reserved
 *     getDataExchangeAttributes   [80] GetDataExchangeAttributes-Request,
 *     -- Shall not appear in minor version 1
 *     exchangeData    [81] IMPLICIT ExchangeData-Request,
 *     -- Shall not appear in minor version 1
 *     defineAccessControlList [82] IMPLICIT DefineAccessControlList-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     getAccessControlListAttributes  [83] GetAccessControlListAttributes-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     reportAccessControlledObjects   [84] IMPLICIT ReportAccessControlledObjects-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     deleteAccessControlList [85] IMPLICIT DeleteAccessControlList-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     changeAccessControl [86] IMPLICIT ChangeAccessControl-Request,
 *     -- Shall not appear in minor version 1 or 2
 *    ...
 * }
 * ```
 */
export
type ConfirmedServiceRequest =
    { status: Status_Request } /* CHOICE_ALT_ROOT */
    | { status: NULL } /* CHOICE_ALT_ROOT */
    | { getNameList: GetNameList_Request } /* CHOICE_ALT_ROOT */
    | { getNameList: NULL } /* CHOICE_ALT_ROOT */
    | { identify: Identify_Request } /* CHOICE_ALT_ROOT */
    | { identify: NULL } /* CHOICE_ALT_ROOT */
    | { rename: Rename_Request } /* CHOICE_ALT_ROOT */
    | { rename: NULL } /* CHOICE_ALT_ROOT */
    | { read: Read_Request } /* CHOICE_ALT_ROOT */
    | { read: NULL } /* CHOICE_ALT_ROOT */
    | { write: Write_Request } /* CHOICE_ALT_ROOT */
    | { write: NULL } /* CHOICE_ALT_ROOT */
    | { getVariableAccessAttributes: GetVariableAccessAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getVariableAccessAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { defineNamedVariable: DefineNamedVariable_Request } /* CHOICE_ALT_ROOT */
    | { defineNamedVariable: NULL } /* CHOICE_ALT_ROOT */
    | { defineScatteredAccess: DefineScatteredAccess_Request } /* CHOICE_ALT_ROOT */
    | { defineScatteredAccess: NULL } /* CHOICE_ALT_ROOT */
    | { getScatteredAccessAttributes: GetScatteredAccessAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getScatteredAccessAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { deleteVariableAccess: DeleteVariableAccess_Request } /* CHOICE_ALT_ROOT */
    | { deleteVariableAccess: NULL } /* CHOICE_ALT_ROOT */
    | { defineNamedVariableList: DefineNamedVariableList_Request } /* CHOICE_ALT_ROOT */
    | { defineNamedVariableList: NULL } /* CHOICE_ALT_ROOT */
    | { getNamedVariableListAttributes: GetNamedVariableListAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getNamedVariableListAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { deleteNamedVariableList: DeleteNamedVariableList_Request } /* CHOICE_ALT_ROOT */
    | { deleteNamedVariableList: NULL } /* CHOICE_ALT_ROOT */
    | { defineNamedType: DefineNamedType_Request } /* CHOICE_ALT_ROOT */
    | { defineNamedType: NULL } /* CHOICE_ALT_ROOT */
    | { getNamedTypeAttributes: GetNamedTypeAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getNamedTypeAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { deleteNamedType: DeleteNamedType_Request } /* CHOICE_ALT_ROOT */
    | { deleteNamedType: NULL } /* CHOICE_ALT_ROOT */
    | { input: Input_Request } /* CHOICE_ALT_ROOT */
    | { input: NULL } /* CHOICE_ALT_ROOT */
    | { output: Output_Request } /* CHOICE_ALT_ROOT */
    | { output: NULL } /* CHOICE_ALT_ROOT */
    | { takeControl: TakeControl_Request } /* CHOICE_ALT_ROOT */
    | { takeControl: NULL } /* CHOICE_ALT_ROOT */
    | { relinquishControl: RelinquishControl_Request } /* CHOICE_ALT_ROOT */
    | { relinquishControl: NULL } /* CHOICE_ALT_ROOT */
    | { defineSemaphore: DefineSemaphore_Request } /* CHOICE_ALT_ROOT */
    | { defineSemaphore: NULL } /* CHOICE_ALT_ROOT */
    | { deleteSemaphore: DeleteSemaphore_Request } /* CHOICE_ALT_ROOT */
    | { deleteSemaphore: NULL } /* CHOICE_ALT_ROOT */
    | { reportSemaphoreStatus: ReportSemaphoreStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportSemaphoreStatus: NULL } /* CHOICE_ALT_ROOT */
    | { reportPoolSemaphoreStatus: ReportPoolSemaphoreStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportPoolSemaphoreStatus: NULL } /* CHOICE_ALT_ROOT */
    | { reportSemaphoreEntryStatus: ReportSemaphoreEntryStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportSemaphoreEntryStatus: NULL } /* CHOICE_ALT_ROOT */
    | { initiateDownloadSequence: InitiateDownloadSequence_Request } /* CHOICE_ALT_ROOT */
    | { initiateDownloadSequence: NULL } /* CHOICE_ALT_ROOT */
    | { downloadSegment: DownloadSegment_Request } /* CHOICE_ALT_ROOT */
    | { downloadSegment: NULL } /* CHOICE_ALT_ROOT */
    | { terminateDownloadSequence: TerminateDownloadSequence_Request } /* CHOICE_ALT_ROOT */
    | { terminateDownloadSequence: NULL } /* CHOICE_ALT_ROOT */
    | { initiateUploadSequence: InitiateUploadSequence_Request } /* CHOICE_ALT_ROOT */
    | { initiateUploadSequence: NULL } /* CHOICE_ALT_ROOT */
    | { uploadSegment: UploadSegment_Request } /* CHOICE_ALT_ROOT */
    | { uploadSegment: NULL } /* CHOICE_ALT_ROOT */
    | { terminateUploadSequence: TerminateUploadSequence_Request } /* CHOICE_ALT_ROOT */
    | { terminateUploadSequence: NULL } /* CHOICE_ALT_ROOT */
    | { requestDomainDownload: RequestDomainDownload_Request } /* CHOICE_ALT_ROOT */
    | { requestDomainDownload: NULL } /* CHOICE_ALT_ROOT */
    | { requestDomainUpload: RequestDomainUpload_Request } /* CHOICE_ALT_ROOT */
    | { requestDomainUpload: NULL } /* CHOICE_ALT_ROOT */
    | { loadDomainContent: LoadDomainContent_Request } /* CHOICE_ALT_ROOT */
    | { loadDomainContent: NULL } /* CHOICE_ALT_ROOT */
    | { storeDomainContent: StoreDomainContent_Request } /* CHOICE_ALT_ROOT */
    | { storeDomainContent: NULL } /* CHOICE_ALT_ROOT */
    | { deleteDomain: DeleteDomain_Request } /* CHOICE_ALT_ROOT */
    | { deleteDomain: NULL } /* CHOICE_ALT_ROOT */
    | { getDomainAttributes: GetDomainAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getDomainAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { createProgramInvocation: CreateProgramInvocation_Request } /* CHOICE_ALT_ROOT */
    | { createProgramInvocation: NULL } /* CHOICE_ALT_ROOT */
    | { deleteProgramInvocation: DeleteProgramInvocation_Request } /* CHOICE_ALT_ROOT */
    | { deleteProgramInvocation: NULL } /* CHOICE_ALT_ROOT */
    | { start: Start_Request } /* CHOICE_ALT_ROOT */
    | { start: NULL } /* CHOICE_ALT_ROOT */
    | { stop: Stop_Request } /* CHOICE_ALT_ROOT */
    | { stop: NULL } /* CHOICE_ALT_ROOT */
    | { resume: Resume_Request } /* CHOICE_ALT_ROOT */
    | { resume: NULL } /* CHOICE_ALT_ROOT */
    | { reset: Reset_Request } /* CHOICE_ALT_ROOT */
    | { reset: NULL } /* CHOICE_ALT_ROOT */
    | { kill: Kill_Request } /* CHOICE_ALT_ROOT */
    | { kill: NULL } /* CHOICE_ALT_ROOT */
    | { getProgramInvocationAttributes: GetProgramInvocationAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getProgramInvocationAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { obtainFile: ObtainFile_Request } /* CHOICE_ALT_ROOT */
    | { obtainFile: NULL } /* CHOICE_ALT_ROOT */
    | { defineEventCondition: DefineEventCondition_Request } /* CHOICE_ALT_ROOT */
    | { defineEventCondition: NULL } /* CHOICE_ALT_ROOT */
    | { deleteEventCondition: DeleteEventCondition_Request } /* CHOICE_ALT_ROOT */
    | { deleteEventCondition: NULL } /* CHOICE_ALT_ROOT */
    | { getEventConditionAttributes: GetEventConditionAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getEventConditionAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { reportEventConditionStatus: ReportEventConditionStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportEventConditionStatus: NULL } /* CHOICE_ALT_ROOT */
    | { alterEventConditionMonitoring: AlterEventConditionMonitoring_Request } /* CHOICE_ALT_ROOT */
    | { alterEventConditionMonitoring: NULL } /* CHOICE_ALT_ROOT */
    | { triggerEvent: TriggerEvent_Request } /* CHOICE_ALT_ROOT */
    | { triggerEvent: NULL } /* CHOICE_ALT_ROOT */
    | { defineEventAction: DefineEventAction_Request } /* CHOICE_ALT_ROOT */
    | { defineEventAction: NULL } /* CHOICE_ALT_ROOT */
    | { deleteEventAction: DeleteEventAction_Request } /* CHOICE_ALT_ROOT */
    | { deleteEventAction: NULL } /* CHOICE_ALT_ROOT */
    | { getEventActionAttributes: GetEventActionAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getEventActionAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { reportEventActionStatus: ReportEventActionStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportEventActionStatus: NULL } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment: DefineEventEnrollment_Request } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment: NULL } /* CHOICE_ALT_ROOT */
    | { deleteEventEnrollment: DeleteEventEnrollment_Request } /* CHOICE_ALT_ROOT */
    | { deleteEventEnrollment: NULL } /* CHOICE_ALT_ROOT */
    | { alterEventEnrollment: AlterEventEnrollment_Request } /* CHOICE_ALT_ROOT */
    | { alterEventEnrollment: NULL } /* CHOICE_ALT_ROOT */
    | { reportEventEnrollmentStatus: ReportEventEnrollmentStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportEventEnrollmentStatus: NULL } /* CHOICE_ALT_ROOT */
    | { getEventEnrollmentAttributes: GetEventEnrollmentAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getEventEnrollmentAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { acknowledgeEventNotification: AcknowledgeEventNotification_Request } /* CHOICE_ALT_ROOT */
    | { acknowledgeEventNotification: NULL } /* CHOICE_ALT_ROOT */
    | { getAlarmSummary: GetAlarmSummary_Request } /* CHOICE_ALT_ROOT */
    | { getAlarmSummary: NULL } /* CHOICE_ALT_ROOT */
    | { getAlarmEnrollmentSummary: GetAlarmEnrollmentSummary_Request } /* CHOICE_ALT_ROOT */
    | { getAlarmEnrollmentSummary: NULL } /* CHOICE_ALT_ROOT */
    | { readJournal: ReadJournal_Request } /* CHOICE_ALT_ROOT */
    | { readJournal: NULL } /* CHOICE_ALT_ROOT */
    | { writeJournal: WriteJournal_Request } /* CHOICE_ALT_ROOT */
    | { writeJournal: NULL } /* CHOICE_ALT_ROOT */
    | { initializeJournal: InitializeJournal_Request } /* CHOICE_ALT_ROOT */
    | { initializeJournal: NULL } /* CHOICE_ALT_ROOT */
    | { reportJournalStatus: ReportJournalStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportJournalStatus: NULL } /* CHOICE_ALT_ROOT */
    | { createJournal: CreateJournal_Request } /* CHOICE_ALT_ROOT */
    | { createJournal: NULL } /* CHOICE_ALT_ROOT */
    | { deleteJournal: DeleteJournal_Request } /* CHOICE_ALT_ROOT */
    | { deleteJournal: NULL } /* CHOICE_ALT_ROOT */
    | { getCapabilityList: GetCapabilityList_Request } /* CHOICE_ALT_ROOT */
    | { getCapabilityList: NULL } /* CHOICE_ALT_ROOT */
    | { fileOpen: FileOpen_Request } /* CHOICE_ALT_ROOT */
    | { fileOpen: NULL } /* CHOICE_ALT_ROOT */
    | { fileRead: FileRead_Request } /* CHOICE_ALT_ROOT */
    | { fileRead: NULL } /* CHOICE_ALT_ROOT */
    | { fileClose: FileClose_Request } /* CHOICE_ALT_ROOT */
    | { fileClose: NULL } /* CHOICE_ALT_ROOT */
    | { fileRename: FileRename_Request } /* CHOICE_ALT_ROOT */
    | { fileRename: NULL } /* CHOICE_ALT_ROOT */
    | { fileDelete: FileDelete_Request } /* CHOICE_ALT_ROOT */
    | { fileDelete: NULL } /* CHOICE_ALT_ROOT */
    | { fileDirectory: FileDirectory_Request } /* CHOICE_ALT_ROOT */
    | { fileDirectory: NULL } /* CHOICE_ALT_ROOT */
    | { additionalService: AdditionalService_Request } /* CHOICE_ALT_ROOT */
    | { getDataExchangeAttributes: GetDataExchangeAttributes_Request } /* CHOICE_ALT_ROOT */
    | { exchangeData: ExchangeData_Request } /* CHOICE_ALT_ROOT */
    | { defineAccessControlList: DefineAccessControlList_Request } /* CHOICE_ALT_ROOT */
    | { getAccessControlListAttributes: GetAccessControlListAttributes_Request } /* CHOICE_ALT_ROOT */
    | { reportAccessControlledObjects: ReportAccessControlledObjects_Request } /* CHOICE_ALT_ROOT */
    | { deleteAccessControlList: DeleteAccessControlList_Request } /* CHOICE_ALT_ROOT */
    | { changeAccessControl: ChangeAccessControl_Request } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfirmedServiceRequest: $.ASN1Decoder<ConfirmedServiceRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfirmedServiceRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfirmedServiceRequest (el: _Element): ConfirmedServiceRequest {
    if (!_cached_decoder_for_ConfirmedServiceRequest) { _cached_decoder_for_ConfirmedServiceRequest = $._decode_extensible_choice<ConfirmedServiceRequest>({
    "CONTEXT 0": [ "status", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Status_Request>(() => _decode_Status_Request)(el)) ],
    "CONTEXT 1": [ "getNameList", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetNameList_Request>(() => _decode_GetNameList_Request)(el)) ],
    "CONTEXT 2": [ "identify", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Identify_Request>(() => _decode_Identify_Request)(el)) ],
    "CONTEXT 3": [ "rename", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Rename_Request>(() => _decode_Rename_Request)(el)) ],
    "CONTEXT 4": [ "read", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Read_Request>(() => _decode_Read_Request)(el)) ],
    "CONTEXT 5": [ "write", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Write_Request>(() => _decode_Write_Request)(el)) ],
    "CONTEXT 6": [ "getVariableAccessAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<GetVariableAccessAttributes_Request>(() => _decode_GetVariableAccessAttributes_Request)(el)) ],
    "CONTEXT 7": [ "defineNamedVariable", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineNamedVariable_Request>(() => _decode_DefineNamedVariable_Request)(el)) ],
    "CONTEXT 8": [ "defineScatteredAccess", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineScatteredAccess_Request>(() => _decode_DefineScatteredAccess_Request)(el)) ],
    "CONTEXT 9": [ "getScatteredAccessAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<GetScatteredAccessAttributes_Request>(() => _decode_GetScatteredAccessAttributes_Request)(el)) ],
    "CONTEXT 10": [ "deleteVariableAccess", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteVariableAccess_Request>(() => _decode_DeleteVariableAccess_Request)(el)) ],
    "CONTEXT 11": [ "defineNamedVariableList", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineNamedVariableList_Request>(() => _decode_DefineNamedVariableList_Request)(el)) ],
    "CONTEXT 12": [ "getNamedVariableListAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<GetNamedVariableListAttributes_Request>(() => _decode_GetNamedVariableListAttributes_Request)(el)) ],
    "CONTEXT 13": [ "deleteNamedVariableList", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteNamedVariableList_Request>(() => _decode_DeleteNamedVariableList_Request)(el)) ],
    "CONTEXT 14": [ "defineNamedType", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineNamedType_Request>(() => _decode_DefineNamedType_Request)(el)) ],
    "CONTEXT 15": [ "getNamedTypeAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<GetNamedTypeAttributes_Request>(() => _decode_GetNamedTypeAttributes_Request)(el)) ],
    "CONTEXT 16": [ "deleteNamedType", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteNamedType_Request>(() => _decode_DeleteNamedType_Request)(el)) ],
    "CONTEXT 17": [ "input", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Input_Request>(() => _decode_Input_Request)(el)) ],
    "CONTEXT 18": [ "output", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Output_Request>(() => _decode_Output_Request)(el)) ],
    "CONTEXT 19": [ "takeControl", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<TakeControl_Request>(() => _decode_TakeControl_Request)(el)) ],
    "CONTEXT 20": [ "relinquishControl", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<RelinquishControl_Request>(() => _decode_RelinquishControl_Request)(el)) ],
    "CONTEXT 21": [ "defineSemaphore", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineSemaphore_Request>(() => _decode_DefineSemaphore_Request)(el)) ],
    "CONTEXT 22": [ "deleteSemaphore", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<DeleteSemaphore_Request>(() => _decode_DeleteSemaphore_Request)(el)) ],
    "CONTEXT 23": [ "reportSemaphoreStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<ReportSemaphoreStatus_Request>(() => _decode_ReportSemaphoreStatus_Request)(el)) ],
    "CONTEXT 24": [ "reportPoolSemaphoreStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ReportPoolSemaphoreStatus_Request>(() => _decode_ReportPoolSemaphoreStatus_Request)(el)) ],
    "CONTEXT 25": [ "reportSemaphoreEntryStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ReportSemaphoreEntryStatus_Request>(() => _decode_ReportSemaphoreEntryStatus_Request)(el)) ],
    "CONTEXT 26": [ "initiateDownloadSequence", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<InitiateDownloadSequence_Request>(() => _decode_InitiateDownloadSequence_Request)(el)) ],
    "CONTEXT 27": [ "downloadSegment", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DownloadSegment_Request>(() => _decode_DownloadSegment_Request)(el)) ],
    "CONTEXT 28": [ "terminateDownloadSequence", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<TerminateDownloadSequence_Request>(() => _decode_TerminateDownloadSequence_Request)(el)) ],
    "CONTEXT 29": [ "initiateUploadSequence", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<InitiateUploadSequence_Request>(() => _decode_InitiateUploadSequence_Request)(el)) ],
    "CONTEXT 30": [ "uploadSegment", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<UploadSegment_Request>(() => _decode_UploadSegment_Request)(el)) ],
    "CONTEXT 31": [ "terminateUploadSequence", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<TerminateUploadSequence_Request>(() => _decode_TerminateUploadSequence_Request)(el)) ],
    "CONTEXT 32": [ "requestDomainDownload", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<RequestDomainDownload_Request>(() => _decode_RequestDomainDownload_Request)(el)) ],
    "CONTEXT 33": [ "requestDomainUpload", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<RequestDomainUpload_Request>(() => _decode_RequestDomainUpload_Request)(el)) ],
    "CONTEXT 34": [ "loadDomainContent", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<LoadDomainContent_Request>(() => _decode_LoadDomainContent_Request)(el)) ],
    "CONTEXT 35": [ "storeDomainContent", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<StoreDomainContent_Request>(() => _decode_StoreDomainContent_Request)(el)) ],
    "CONTEXT 36": [ "deleteDomain", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteDomain_Request>(() => _decode_DeleteDomain_Request)(el)) ],
    "CONTEXT 37": [ "getDomainAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetDomainAttributes_Request>(() => _decode_GetDomainAttributes_Request)(el)) ],
    "CONTEXT 38": [ "createProgramInvocation", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CreateProgramInvocation_Request>(() => _decode_CreateProgramInvocation_Request)(el)) ],
    "CONTEXT 39": [ "deleteProgramInvocation", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteProgramInvocation_Request>(() => _decode_DeleteProgramInvocation_Request)(el)) ],
    "CONTEXT 40": [ "start", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Start_Request>(() => _decode_Start_Request)(el)) ],
    "CONTEXT 41": [ "stop", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Stop_Request>(() => _decode_Stop_Request)(el)) ],
    "CONTEXT 42": [ "resume", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Resume_Request>(() => _decode_Resume_Request)(el)) ],
    "CONTEXT 43": [ "reset", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Reset_Request>(() => _decode_Reset_Request)(el)) ],
    "CONTEXT 44": [ "kill", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Kill_Request>(() => _decode_Kill_Request)(el)) ],
    "CONTEXT 45": [ "getProgramInvocationAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetProgramInvocationAttributes_Request>(() => _decode_GetProgramInvocationAttributes_Request)(el)) ],
    "CONTEXT 46": [ "obtainFile", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ObtainFile_Request>(() => _decode_ObtainFile_Request)(el)) ],
    "CONTEXT 47": [ "defineEventCondition", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineEventCondition_Request>(() => _decode_DefineEventCondition_Request)(el)) ],
    "CONTEXT 48": [ "deleteEventCondition", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<DeleteEventCondition_Request>(() => _decode_DeleteEventCondition_Request)(el)) ],
    "CONTEXT 49": [ "getEventConditionAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<GetEventConditionAttributes_Request>(() => _decode_GetEventConditionAttributes_Request)(el)) ],
    "CONTEXT 50": [ "reportEventConditionStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<ReportEventConditionStatus_Request>(() => _decode_ReportEventConditionStatus_Request)(el)) ],
    "CONTEXT 51": [ "alterEventConditionMonitoring", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<AlterEventConditionMonitoring_Request>(() => _decode_AlterEventConditionMonitoring_Request)(el)) ],
    "CONTEXT 52": [ "triggerEvent", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<TriggerEvent_Request>(() => _decode_TriggerEvent_Request)(el)) ],
    "CONTEXT 53": [ "defineEventAction", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineEventAction_Request>(() => _decode_DefineEventAction_Request)(el)) ],
    "CONTEXT 54": [ "deleteEventAction", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<DeleteEventAction_Request>(() => _decode_DeleteEventAction_Request)(el)) ],
    "CONTEXT 55": [ "getEventActionAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<GetEventActionAttributes_Request>(() => _decode_GetEventActionAttributes_Request)(el)) ],
    "CONTEXT 56": [ "reportEventActionStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<ReportEventActionStatus_Request>(() => _decode_ReportEventActionStatus_Request)(el)) ],
    "CONTEXT 57": [ "defineEventEnrollment", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DefineEventEnrollment_Request>(() => _decode_DefineEventEnrollment_Request)(el)) ],
    "CONTEXT 58": [ "deleteEventEnrollment", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<DeleteEventEnrollment_Request>(() => _decode_DeleteEventEnrollment_Request)(el)) ],
    "CONTEXT 59": [ "alterEventEnrollment", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<AlterEventEnrollment_Request>(() => _decode_AlterEventEnrollment_Request)(el)) ],
    "CONTEXT 60": [ "reportEventEnrollmentStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<ReportEventEnrollmentStatus_Request>(() => _decode_ReportEventEnrollmentStatus_Request)(el)) ],
    "CONTEXT 61": [ "getEventEnrollmentAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetEventEnrollmentAttributes_Request>(() => _decode_GetEventEnrollmentAttributes_Request)(el)) ],
    "CONTEXT 62": [ "acknowledgeEventNotification", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<AcknowledgeEventNotification_Request>(() => _decode_AcknowledgeEventNotification_Request)(el)) ],
    "CONTEXT 63": [ "getAlarmSummary", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetAlarmSummary_Request>(() => _decode_GetAlarmSummary_Request)(el)) ],
    "CONTEXT 64": [ "getAlarmEnrollmentSummary", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetAlarmEnrollmentSummary_Request>(() => _decode_GetAlarmEnrollmentSummary_Request)(el)) ],
    "CONTEXT 65": [ "readJournal", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ReadJournal_Request>(() => _decode_ReadJournal_Request)(el)) ],
    "CONTEXT 66": [ "writeJournal", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<WriteJournal_Request>(() => _decode_WriteJournal_Request)(el)) ],
    "CONTEXT 67": [ "initializeJournal", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<InitializeJournal_Request>(() => _decode_InitializeJournal_Request)(el)) ],
    "CONTEXT 68": [ "reportJournalStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<ReportJournalStatus_Request>(() => _decode_ReportJournalStatus_Request)(el)) ],
    "CONTEXT 69": [ "createJournal", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CreateJournal_Request>(() => _decode_CreateJournal_Request)(el)) ],
    "CONTEXT 70": [ "deleteJournal", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteJournal_Request>(() => _decode_DeleteJournal_Request)(el)) ],
    "CONTEXT 71": [ "getCapabilityList", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetCapabilityList_Request>(() => _decode_GetCapabilityList_Request)(el)) ],
    "CONTEXT 72": [ "fileOpen", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<FileOpen_Request>(() => _decode_FileOpen_Request)(el)) ],
    "CONTEXT 73": [ "fileRead", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<FileRead_Request>(() => _decode_FileRead_Request)(el)) ],
    "CONTEXT 74": [ "fileClose", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<FileClose_Request>(() => _decode_FileClose_Request)(el)) ],
    "CONTEXT 75": [ "fileRename", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<FileRename_Request>(() => _decode_FileRename_Request)(el)) ],
    "CONTEXT 76": [ "fileDelete", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<FileDelete_Request>(() => _decode_FileDelete_Request)(el)) ],
    "CONTEXT 77": [ "fileDirectory", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<FileDirectory_Request>(() => _decode_FileDirectory_Request)(el)) ],
    "CONTEXT 78": [ "additionalService", $._decode_explicit<AdditionalService_Request>(() => _decode_AdditionalService_Request) ],
    "CONTEXT 80": [ "getDataExchangeAttributes", $._decode_explicit<GetDataExchangeAttributes_Request>(() => _decode_GetDataExchangeAttributes_Request) ],
    "CONTEXT 81": [ "exchangeData", $._decode_implicit<ExchangeData_Request>(() => _decode_ExchangeData_Request) ],
    "CONTEXT 82": [ "defineAccessControlList", $._decode_implicit<DefineAccessControlList_Request>(() => _decode_DefineAccessControlList_Request) ],
    "CONTEXT 83": [ "getAccessControlListAttributes", $._decode_explicit<GetAccessControlListAttributes_Request>(() => _decode_GetAccessControlListAttributes_Request) ],
    "CONTEXT 84": [ "reportAccessControlledObjects", $._decode_implicit<ReportAccessControlledObjects_Request>(() => _decode_ReportAccessControlledObjects_Request) ],
    "CONTEXT 85": [ "deleteAccessControlList", $._decode_explicit<DeleteAccessControlList_Request>(() => _decode_DeleteAccessControlList_Request) ],
    "CONTEXT 86": [ "changeAccessControl", $._decode_implicit<ChangeAccessControl_Request>(() => _decode_ChangeAccessControl_Request) ]
}); }
    return _cached_decoder_for_ConfirmedServiceRequest(el);
}

let _cached_encoder_for_ConfirmedServiceRequest: $.ASN1Encoder<ConfirmedServiceRequest> | null = null;

/**
 * @summary Encodes a(n) ConfirmedServiceRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfirmedServiceRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ConfirmedServiceRequest (value: ConfirmedServiceRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfirmedServiceRequest) { _cached_encoder_for_ConfirmedServiceRequest = $._encode_choice<ConfirmedServiceRequest>({
    "status": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 0, () => _encode_Status_Request, $.BER)(value, elGetter)),
    "getNameList": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 1, () => _encode_GetNameList_Request, $.BER)(value, elGetter)),
    "identify": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 2, () => _encode_Identify_Request, $.BER)(value, elGetter)),
    "rename": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 3, () => _encode_Rename_Request, $.BER)(value, elGetter)),
    "read": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 4, () => _encode_Read_Request, $.BER)(value, elGetter)),
    "write": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 5, () => _encode_Write_Request, $.BER)(value, elGetter)),
    "getVariableAccessAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 6, () => _encode_GetVariableAccessAttributes_Request, $.BER)(value, elGetter)),
    "defineNamedVariable": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 7, () => _encode_DefineNamedVariable_Request, $.BER)(value, elGetter)),
    "defineScatteredAccess": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 8, () => _encode_DefineScatteredAccess_Request, $.BER)(value, elGetter)),
    "getScatteredAccessAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 9, () => _encode_GetScatteredAccessAttributes_Request, $.BER)(value, elGetter)),
    "deleteVariableAccess": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 10, () => _encode_DeleteVariableAccess_Request, $.BER)(value, elGetter)),
    "defineNamedVariableList": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 11, () => _encode_DefineNamedVariableList_Request, $.BER)(value, elGetter)),
    "getNamedVariableListAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 12, () => _encode_GetNamedVariableListAttributes_Request, $.BER)(value, elGetter)),
    "deleteNamedVariableList": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 13, () => _encode_DeleteNamedVariableList_Request, $.BER)(value, elGetter)),
    "defineNamedType": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 14, () => _encode_DefineNamedType_Request, $.BER)(value, elGetter)),
    "getNamedTypeAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 15, () => _encode_GetNamedTypeAttributes_Request, $.BER)(value, elGetter)),
    "deleteNamedType": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 16, () => _encode_DeleteNamedType_Request, $.BER)(value, elGetter)),
    "input": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 17, () => _encode_Input_Request, $.BER)(value, elGetter)),
    "output": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 18, () => _encode_Output_Request, $.BER)(value, elGetter)),
    "takeControl": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 19, () => _encode_TakeControl_Request, $.BER)(value, elGetter)),
    "relinquishControl": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 20, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 20, () => _encode_RelinquishControl_Request, $.BER)(value, elGetter)),
    "defineSemaphore": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 21, () => _encode_DefineSemaphore_Request, $.BER)(value, elGetter)),
    "deleteSemaphore": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 22, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 22, () => _encode_DeleteSemaphore_Request, $.BER)(value, elGetter)),
    "reportSemaphoreStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 23, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 23, () => _encode_ReportSemaphoreStatus_Request, $.BER)(value, elGetter)),
    "reportPoolSemaphoreStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 24, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 24, () => _encode_ReportPoolSemaphoreStatus_Request, $.BER)(value, elGetter)),
    "reportSemaphoreEntryStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 25, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 25, () => _encode_ReportSemaphoreEntryStatus_Request, $.BER)(value, elGetter)),
    "initiateDownloadSequence": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 26, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 26, () => _encode_InitiateDownloadSequence_Request, $.BER)(value, elGetter)),
    "downloadSegment": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 27, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 27, () => _encode_DownloadSegment_Request, $.BER)(value, elGetter)),
    "terminateDownloadSequence": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 28, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 28, () => _encode_TerminateDownloadSequence_Request, $.BER)(value, elGetter)),
    "initiateUploadSequence": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 29, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 29, () => _encode_InitiateUploadSequence_Request, $.BER)(value, elGetter)),
    "uploadSegment": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 30, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 30, () => _encode_UploadSegment_Request, $.BER)(value, elGetter)),
    "terminateUploadSequence": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 31, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 31, () => _encode_TerminateUploadSequence_Request, $.BER)(value, elGetter)),
    "requestDomainDownload": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 32, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 32, () => _encode_RequestDomainDownload_Request, $.BER)(value, elGetter)),
    "requestDomainUpload": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 33, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 33, () => _encode_RequestDomainUpload_Request, $.BER)(value, elGetter)),
    "loadDomainContent": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 34, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 34, () => _encode_LoadDomainContent_Request, $.BER)(value, elGetter)),
    "storeDomainContent": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 35, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 35, () => _encode_StoreDomainContent_Request, $.BER)(value, elGetter)),
    "deleteDomain": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 36, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 36, () => _encode_DeleteDomain_Request, $.BER)(value, elGetter)),
    "getDomainAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 37, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 37, () => _encode_GetDomainAttributes_Request, $.BER)(value, elGetter)),
    "createProgramInvocation": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 38, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 38, () => _encode_CreateProgramInvocation_Request, $.BER)(value, elGetter)),
    "deleteProgramInvocation": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 39, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 39, () => _encode_DeleteProgramInvocation_Request, $.BER)(value, elGetter)),
    "start": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 40, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 40, () => _encode_Start_Request, $.BER)(value, elGetter)),
    "stop": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 41, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 41, () => _encode_Stop_Request, $.BER)(value, elGetter)),
    "resume": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 42, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 42, () => _encode_Resume_Request, $.BER)(value, elGetter)),
    "reset": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 43, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 43, () => _encode_Reset_Request, $.BER)(value, elGetter)),
    "kill": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 44, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 44, () => _encode_Kill_Request, $.BER)(value, elGetter)),
    "getProgramInvocationAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 45, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 45, () => _encode_GetProgramInvocationAttributes_Request, $.BER)(value, elGetter)),
    "obtainFile": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 46, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 46, () => _encode_ObtainFile_Request, $.BER)(value, elGetter)),
    "defineEventCondition": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 47, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 47, () => _encode_DefineEventCondition_Request, $.BER)(value, elGetter)),
    "deleteEventCondition": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 48, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 48, () => _encode_DeleteEventCondition_Request, $.BER)(value, elGetter)),
    "getEventConditionAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 49, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 49, () => _encode_GetEventConditionAttributes_Request, $.BER)(value, elGetter)),
    "reportEventConditionStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 50, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 50, () => _encode_ReportEventConditionStatus_Request, $.BER)(value, elGetter)),
    "alterEventConditionMonitoring": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 51, () => _encode_AlterEventConditionMonitoring_Request, $.BER)(value, elGetter)),
    "triggerEvent": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 52, () => _encode_TriggerEvent_Request, $.BER)(value, elGetter)),
    "defineEventAction": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 53, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 53, () => _encode_DefineEventAction_Request, $.BER)(value, elGetter)),
    "deleteEventAction": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 54, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 54, () => _encode_DeleteEventAction_Request, $.BER)(value, elGetter)),
    "getEventActionAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 55, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 55, () => _encode_GetEventActionAttributes_Request, $.BER)(value, elGetter)),
    "reportEventActionStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 56, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 56, () => _encode_ReportEventActionStatus_Request, $.BER)(value, elGetter)),
    "defineEventEnrollment": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 57, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 57, () => _encode_DefineEventEnrollment_Request, $.BER)(value, elGetter)),
    "deleteEventEnrollment": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 58, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 58, () => _encode_DeleteEventEnrollment_Request, $.BER)(value, elGetter)),
    "alterEventEnrollment": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 59, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 59, () => _encode_AlterEventEnrollment_Request, $.BER)(value, elGetter)),
    "reportEventEnrollmentStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 60, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 60, () => _encode_ReportEventEnrollmentStatus_Request, $.BER)(value, elGetter)),
    "getEventEnrollmentAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 61, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 61, () => _encode_GetEventEnrollmentAttributes_Request, $.BER)(value, elGetter)),
    "acknowledgeEventNotification": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 62, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 62, () => _encode_AcknowledgeEventNotification_Request, $.BER)(value, elGetter)),
    "getAlarmSummary": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 63, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 63, () => _encode_GetAlarmSummary_Request, $.BER)(value, elGetter)),
    "getAlarmEnrollmentSummary": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 64, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 64, () => _encode_GetAlarmEnrollmentSummary_Request, $.BER)(value, elGetter)),
    "readJournal": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 65, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 65, () => _encode_ReadJournal_Request, $.BER)(value, elGetter)),
    "writeJournal": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 66, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 66, () => _encode_WriteJournal_Request, $.BER)(value, elGetter)),
    "initializeJournal": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 67, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 67, () => _encode_InitializeJournal_Request, $.BER)(value, elGetter)),
    "reportJournalStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 68, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 68, () => _encode_ReportJournalStatus_Request, $.BER)(value, elGetter)),
    "createJournal": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 69, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 69, () => _encode_CreateJournal_Request, $.BER)(value, elGetter)),
    "deleteJournal": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 70, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 70, () => _encode_DeleteJournal_Request, $.BER)(value, elGetter)),
    "getCapabilityList": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 71, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 71, () => _encode_GetCapabilityList_Request, $.BER)(value, elGetter)),
    "fileOpen": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 72, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 72, () => _encode_FileOpen_Request, $.BER)(value, elGetter)),
    "fileRead": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 73, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 73, () => _encode_FileRead_Request, $.BER)(value, elGetter)),
    "fileClose": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 74, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 74, () => _encode_FileClose_Request, $.BER)(value, elGetter)),
    "fileRename": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 75, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 75, () => _encode_FileRename_Request, $.BER)(value, elGetter)),
    "fileDelete": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 76, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 76, () => _encode_FileDelete_Request, $.BER)(value, elGetter)),
    "fileDirectory": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 77, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 77, () => _encode_FileDirectory_Request, $.BER)(value, elGetter)),
    "additionalService": $._encode_explicit(_TagClass.context, 78, () => _encode_AdditionalService_Request, $.BER),
    "getDataExchangeAttributes": $._encode_explicit(_TagClass.context, 80, () => _encode_GetDataExchangeAttributes_Request, $.BER),
    "exchangeData": $._encode_implicit(_TagClass.context, 81, () => _encode_ExchangeData_Request, $.BER),
    "defineAccessControlList": $._encode_implicit(_TagClass.context, 82, () => _encode_DefineAccessControlList_Request, $.BER),
    "getAccessControlListAttributes": $._encode_explicit(_TagClass.context, 83, () => _encode_GetAccessControlListAttributes_Request, $.BER),
    "reportAccessControlledObjects": $._encode_implicit(_TagClass.context, 84, () => _encode_ReportAccessControlledObjects_Request, $.BER),
    "deleteAccessControlList": $._encode_explicit(_TagClass.context, 85, () => _encode_DeleteAccessControlList_Request, $.BER),
    "changeAccessControl": $._encode_implicit(_TagClass.context, 86, () => _encode_ChangeAccessControl_Request, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfirmedServiceRequest(value, elGetter);
}


/* eslint-enable */

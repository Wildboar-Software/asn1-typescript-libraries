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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  AddMaster_ResponseParams,
  _decode_AddMaster_ResponseParams,
  _encode_AddMaster_ResponseParams,
} from '../BIP/AddMaster-ResponseParams.ta.js';
export {
  AddMaster_ResponseParams,
  _decode_AddMaster_ResponseParams,
  _encode_AddMaster_ResponseParams,
} from '../BIP/AddMaster-ResponseParams.ta.js';
import {
  DeleteMaster_ResponseParams,
  _decode_DeleteMaster_ResponseParams,
  _encode_DeleteMaster_ResponseParams,
} from '../BIP/DeleteMaster-ResponseParams.ta.js';
export {
  DeleteMaster_ResponseParams,
  _decode_DeleteMaster_ResponseParams,
  _encode_DeleteMaster_ResponseParams,
} from '../BIP/DeleteMaster-ResponseParams.ta.js';
import {
  BSPLoad_ResponseParams,
  _decode_BSPLoad_ResponseParams,
  _encode_BSPLoad_ResponseParams,
} from '../BIP/BSPLoad-ResponseParams.ta.js';
export {
  BSPLoad_ResponseParams,
  _decode_BSPLoad_ResponseParams,
  _encode_BSPLoad_ResponseParams,
} from '../BIP/BSPLoad-ResponseParams.ta.js';
import {
  BSPUnload_ResponseParams,
  _decode_BSPUnload_ResponseParams,
  _encode_BSPUnload_ResponseParams,
} from '../BIP/BSPUnload-ResponseParams.ta.js';
export {
  BSPUnload_ResponseParams,
  _decode_BSPUnload_ResponseParams,
  _encode_BSPUnload_ResponseParams,
} from '../BIP/BSPUnload-ResponseParams.ta.js';
import {
  QueryUnits_ResponseParams,
  _decode_QueryUnits_ResponseParams,
  _encode_QueryUnits_ResponseParams,
} from '../BIP/QueryUnits-ResponseParams.ta.js';
export {
  QueryUnits_ResponseParams,
  _decode_QueryUnits_ResponseParams,
  _encode_QueryUnits_ResponseParams,
} from '../BIP/QueryUnits-ResponseParams.ta.js';
import {
  QueryBFPs_ResponseParams,
  _decode_QueryBFPs_ResponseParams,
  _encode_QueryBFPs_ResponseParams,
} from '../BIP/QueryBFPs-ResponseParams.ta.js';
export {
  QueryBFPs_ResponseParams,
  _decode_QueryBFPs_ResponseParams,
  _encode_QueryBFPs_ResponseParams,
} from '../BIP/QueryBFPs-ResponseParams.ta.js';
import {
  BSPAttach_ResponseParams,
  _decode_BSPAttach_ResponseParams,
  _encode_BSPAttach_ResponseParams,
} from '../BIP/BSPAttach-ResponseParams.ta.js';
export {
  BSPAttach_ResponseParams,
  _decode_BSPAttach_ResponseParams,
  _encode_BSPAttach_ResponseParams,
} from '../BIP/BSPAttach-ResponseParams.ta.js';
import {
  BSPDetach_ResponseParams,
  _decode_BSPDetach_ResponseParams,
  _encode_BSPDetach_ResponseParams,
} from '../BIP/BSPDetach-ResponseParams.ta.js';
export {
  BSPDetach_ResponseParams,
  _decode_BSPDetach_ResponseParams,
  _encode_BSPDetach_ResponseParams,
} from '../BIP/BSPDetach-ResponseParams.ta.js';
import {
  EnableUnitEvents_ResponseParams,
  _decode_EnableUnitEvents_ResponseParams,
  _encode_EnableUnitEvents_ResponseParams,
} from '../BIP/EnableUnitEvents-ResponseParams.ta.js';
export {
  EnableUnitEvents_ResponseParams,
  _decode_EnableUnitEvents_ResponseParams,
  _encode_EnableUnitEvents_ResponseParams,
} from '../BIP/EnableUnitEvents-ResponseParams.ta.js';
import {
  EnableEventNotifications_ResponseParams,
  _decode_EnableEventNotifications_ResponseParams,
  _encode_EnableEventNotifications_ResponseParams,
} from '../BIP/EnableEventNotifications-ResponseParams.ta.js';
export {
  EnableEventNotifications_ResponseParams,
  _decode_EnableEventNotifications_ResponseParams,
  _encode_EnableEventNotifications_ResponseParams,
} from '../BIP/EnableEventNotifications-ResponseParams.ta.js';
import {
  ControlUnit_ResponseParams,
  _decode_ControlUnit_ResponseParams,
  _encode_ControlUnit_ResponseParams,
} from '../BIP/ControlUnit-ResponseParams.ta.js';
export {
  ControlUnit_ResponseParams,
  _decode_ControlUnit_ResponseParams,
  _encode_ControlUnit_ResponseParams,
} from '../BIP/ControlUnit-ResponseParams.ta.js';
import {
  Control_ResponseParams,
  _decode_Control_ResponseParams,
  _encode_Control_ResponseParams,
} from '../BIP/Control-ResponseParams.ta.js';
export {
  Control_ResponseParams,
  _decode_Control_ResponseParams,
  _encode_Control_ResponseParams,
} from '../BIP/Control-ResponseParams.ta.js';
import {
  FreeBIRHandle_ResponseParams,
  _decode_FreeBIRHandle_ResponseParams,
  _encode_FreeBIRHandle_ResponseParams,
} from '../BIP/FreeBIRHandle-ResponseParams.ta.js';
export {
  FreeBIRHandle_ResponseParams,
  _decode_FreeBIRHandle_ResponseParams,
  _encode_FreeBIRHandle_ResponseParams,
} from '../BIP/FreeBIRHandle-ResponseParams.ta.js';
import {
  GetBIRFromHandle_ResponseParams,
  _decode_GetBIRFromHandle_ResponseParams,
  _encode_GetBIRFromHandle_ResponseParams,
} from '../BIP/GetBIRFromHandle-ResponseParams.ta.js';
export {
  GetBIRFromHandle_ResponseParams,
  _decode_GetBIRFromHandle_ResponseParams,
  _encode_GetBIRFromHandle_ResponseParams,
} from '../BIP/GetBIRFromHandle-ResponseParams.ta.js';
import {
  GetHeaderFromHandle_ResponseParams,
  _decode_GetHeaderFromHandle_ResponseParams,
  _encode_GetHeaderFromHandle_ResponseParams,
} from '../BIP/GetHeaderFromHandle-ResponseParams.ta.js';
export {
  GetHeaderFromHandle_ResponseParams,
  _decode_GetHeaderFromHandle_ResponseParams,
  _encode_GetHeaderFromHandle_ResponseParams,
} from '../BIP/GetHeaderFromHandle-ResponseParams.ta.js';
import {
  SubscribeToGUIEvents_ResponseParams,
  _decode_SubscribeToGUIEvents_ResponseParams,
  _encode_SubscribeToGUIEvents_ResponseParams,
} from '../BIP/SubscribeToGUIEvents-ResponseParams.ta.js';
export {
  SubscribeToGUIEvents_ResponseParams,
  _decode_SubscribeToGUIEvents_ResponseParams,
  _encode_SubscribeToGUIEvents_ResponseParams,
} from '../BIP/SubscribeToGUIEvents-ResponseParams.ta.js';
import {
  UnsubscribeFromGUIEvents_ResponseParams,
  _decode_UnsubscribeFromGUIEvents_ResponseParams,
  _encode_UnsubscribeFromGUIEvents_ResponseParams,
} from '../BIP/UnsubscribeFromGUIEvents-ResponseParams.ta.js';
export {
  UnsubscribeFromGUIEvents_ResponseParams,
  _decode_UnsubscribeFromGUIEvents_ResponseParams,
  _encode_UnsubscribeFromGUIEvents_ResponseParams,
} from '../BIP/UnsubscribeFromGUIEvents-ResponseParams.ta.js';
import {
  RedirectGUIEvents_ResponseParams,
  _decode_RedirectGUIEvents_ResponseParams,
  _encode_RedirectGUIEvents_ResponseParams,
} from '../BIP/RedirectGUIEvents-ResponseParams.ta.js';
export {
  RedirectGUIEvents_ResponseParams,
  _decode_RedirectGUIEvents_ResponseParams,
  _encode_RedirectGUIEvents_ResponseParams,
} from '../BIP/RedirectGUIEvents-ResponseParams.ta.js';
import {
  UnredirectGUIEvents_ResponseParams,
  _decode_UnredirectGUIEvents_ResponseParams,
  _encode_UnredirectGUIEvents_ResponseParams,
} from '../BIP/UnredirectGUIEvents-ResponseParams.ta.js';
export {
  UnredirectGUIEvents_ResponseParams,
  _decode_UnredirectGUIEvents_ResponseParams,
  _encode_UnredirectGUIEvents_ResponseParams,
} from '../BIP/UnredirectGUIEvents-ResponseParams.ta.js';
import {
  QueryGUIEventSubscriptions_ResponseParams,
  _decode_QueryGUIEventSubscriptions_ResponseParams,
  _encode_QueryGUIEventSubscriptions_ResponseParams,
} from '../BIP/QueryGUIEventSubscriptions-ResponseParams.ta.js';
export {
  QueryGUIEventSubscriptions_ResponseParams,
  _decode_QueryGUIEventSubscriptions_ResponseParams,
  _encode_QueryGUIEventSubscriptions_ResponseParams,
} from '../BIP/QueryGUIEventSubscriptions-ResponseParams.ta.js';
import {
  NotifyGUISelectEvent_ResponseParams,
  _decode_NotifyGUISelectEvent_ResponseParams,
  _encode_NotifyGUISelectEvent_ResponseParams,
} from '../BIP/NotifyGUISelectEvent-ResponseParams.ta.js';
export {
  NotifyGUISelectEvent_ResponseParams,
  _decode_NotifyGUISelectEvent_ResponseParams,
  _encode_NotifyGUISelectEvent_ResponseParams,
} from '../BIP/NotifyGUISelectEvent-ResponseParams.ta.js';
import {
  NotifyGUIStateEvent_ResponseParams,
  _decode_NotifyGUIStateEvent_ResponseParams,
  _encode_NotifyGUIStateEvent_ResponseParams,
} from '../BIP/NotifyGUIStateEvent-ResponseParams.ta.js';
export {
  NotifyGUIStateEvent_ResponseParams,
  _decode_NotifyGUIStateEvent_ResponseParams,
  _encode_NotifyGUIStateEvent_ResponseParams,
} from '../BIP/NotifyGUIStateEvent-ResponseParams.ta.js';
import {
  NotifyGUIProgressEvent_ResponseParams,
  _decode_NotifyGUIProgressEvent_ResponseParams,
  _encode_NotifyGUIProgressEvent_ResponseParams,
} from '../BIP/NotifyGUIProgressEvent-ResponseParams.ta.js';
export {
  NotifyGUIProgressEvent_ResponseParams,
  _decode_NotifyGUIProgressEvent_ResponseParams,
  _encode_NotifyGUIProgressEvent_ResponseParams,
} from '../BIP/NotifyGUIProgressEvent-ResponseParams.ta.js';
import {
  Capture_ResponseParams,
  _decode_Capture_ResponseParams,
  _encode_Capture_ResponseParams,
} from '../BIP/Capture-ResponseParams.ta.js';
export {
  Capture_ResponseParams,
  _decode_Capture_ResponseParams,
  _encode_Capture_ResponseParams,
} from '../BIP/Capture-ResponseParams.ta.js';
import {
  CreateTemplate_ResponseParams,
  _decode_CreateTemplate_ResponseParams,
  _encode_CreateTemplate_ResponseParams,
} from '../BIP/CreateTemplate-ResponseParams.ta.js';
export {
  CreateTemplate_ResponseParams,
  _decode_CreateTemplate_ResponseParams,
  _encode_CreateTemplate_ResponseParams,
} from '../BIP/CreateTemplate-ResponseParams.ta.js';
import {
  Process_ResponseParams,
  _decode_Process_ResponseParams,
  _encode_Process_ResponseParams,
} from '../BIP/Process-ResponseParams.ta.js';
export {
  Process_ResponseParams,
  _decode_Process_ResponseParams,
  _encode_Process_ResponseParams,
} from '../BIP/Process-ResponseParams.ta.js';
import {
  ProcessWithAuxBIR_ResponseParams,
  _decode_ProcessWithAuxBIR_ResponseParams,
  _encode_ProcessWithAuxBIR_ResponseParams,
} from '../BIP/ProcessWithAuxBIR-ResponseParams.ta.js';
export {
  ProcessWithAuxBIR_ResponseParams,
  _decode_ProcessWithAuxBIR_ResponseParams,
  _encode_ProcessWithAuxBIR_ResponseParams,
} from '../BIP/ProcessWithAuxBIR-ResponseParams.ta.js';
import {
  VerifyMatch_ResponseParams,
  _decode_VerifyMatch_ResponseParams,
  _encode_VerifyMatch_ResponseParams,
} from '../BIP/VerifyMatch-ResponseParams.ta.js';
export {
  VerifyMatch_ResponseParams,
  _decode_VerifyMatch_ResponseParams,
  _encode_VerifyMatch_ResponseParams,
} from '../BIP/VerifyMatch-ResponseParams.ta.js';
import {
  IdentifyMatch_ResponseParams,
  _decode_IdentifyMatch_ResponseParams,
  _encode_IdentifyMatch_ResponseParams,
} from '../BIP/IdentifyMatch-ResponseParams.ta.js';
export {
  IdentifyMatch_ResponseParams,
  _decode_IdentifyMatch_ResponseParams,
  _encode_IdentifyMatch_ResponseParams,
} from '../BIP/IdentifyMatch-ResponseParams.ta.js';
import {
  Enroll_ResponseParams,
  _decode_Enroll_ResponseParams,
  _encode_Enroll_ResponseParams,
} from '../BIP/Enroll-ResponseParams.ta.js';
export {
  Enroll_ResponseParams,
  _decode_Enroll_ResponseParams,
  _encode_Enroll_ResponseParams,
} from '../BIP/Enroll-ResponseParams.ta.js';
import {
  Verify_ResponseParams,
  _decode_Verify_ResponseParams,
  _encode_Verify_ResponseParams,
} from '../BIP/Verify-ResponseParams.ta.js';
export {
  Verify_ResponseParams,
  _decode_Verify_ResponseParams,
  _encode_Verify_ResponseParams,
} from '../BIP/Verify-ResponseParams.ta.js';
import {
  Identify_ResponseParams,
  _decode_Identify_ResponseParams,
  _encode_Identify_ResponseParams,
} from '../BIP/Identify-ResponseParams.ta.js';
export {
  Identify_ResponseParams,
  _decode_Identify_ResponseParams,
  _encode_Identify_ResponseParams,
} from '../BIP/Identify-ResponseParams.ta.js';
import {
  Import_ResponseParams,
  _decode_Import_ResponseParams,
  _encode_Import_ResponseParams,
} from '../BIP/Import-ResponseParams.ta.js';
export {
  Import_ResponseParams,
  _decode_Import_ResponseParams,
  _encode_Import_ResponseParams,
} from '../BIP/Import-ResponseParams.ta.js';
import {
  PresetIdentifyPopulation_ResponseParams,
  _decode_PresetIdentifyPopulation_ResponseParams,
  _encode_PresetIdentifyPopulation_ResponseParams,
} from '../BIP/PresetIdentifyPopulation-ResponseParams.ta.js';
export {
  PresetIdentifyPopulation_ResponseParams,
  _decode_PresetIdentifyPopulation_ResponseParams,
  _encode_PresetIdentifyPopulation_ResponseParams,
} from '../BIP/PresetIdentifyPopulation-ResponseParams.ta.js';
import {
  Transform_ResponseParams,
  _decode_Transform_ResponseParams,
  _encode_Transform_ResponseParams,
} from '../BIP/Transform-ResponseParams.ta.js';
export {
  Transform_ResponseParams,
  _decode_Transform_ResponseParams,
  _encode_Transform_ResponseParams,
} from '../BIP/Transform-ResponseParams.ta.js';
import {
  DbOpen_ResponseParams,
  _decode_DbOpen_ResponseParams,
  _encode_DbOpen_ResponseParams,
} from '../BIP/DbOpen-ResponseParams.ta.js';
export {
  DbOpen_ResponseParams,
  _decode_DbOpen_ResponseParams,
  _encode_DbOpen_ResponseParams,
} from '../BIP/DbOpen-ResponseParams.ta.js';
import {
  DbClose_ResponseParams,
  _decode_DbClose_ResponseParams,
  _encode_DbClose_ResponseParams,
} from '../BIP/DbClose-ResponseParams.ta.js';
export {
  DbClose_ResponseParams,
  _decode_DbClose_ResponseParams,
  _encode_DbClose_ResponseParams,
} from '../BIP/DbClose-ResponseParams.ta.js';
import {
  DbCreate_ResponseParams,
  _decode_DbCreate_ResponseParams,
  _encode_DbCreate_ResponseParams,
} from '../BIP/DbCreate-ResponseParams.ta.js';
export {
  DbCreate_ResponseParams,
  _decode_DbCreate_ResponseParams,
  _encode_DbCreate_ResponseParams,
} from '../BIP/DbCreate-ResponseParams.ta.js';
import {
  DbDelete_ResponseParams,
  _decode_DbDelete_ResponseParams,
  _encode_DbDelete_ResponseParams,
} from '../BIP/DbDelete-ResponseParams.ta.js';
export {
  DbDelete_ResponseParams,
  _decode_DbDelete_ResponseParams,
  _encode_DbDelete_ResponseParams,
} from '../BIP/DbDelete-ResponseParams.ta.js';
import {
  DbSetMarker_ResponseParams,
  _decode_DbSetMarker_ResponseParams,
  _encode_DbSetMarker_ResponseParams,
} from '../BIP/DbSetMarker-ResponseParams.ta.js';
export {
  DbSetMarker_ResponseParams,
  _decode_DbSetMarker_ResponseParams,
  _encode_DbSetMarker_ResponseParams,
} from '../BIP/DbSetMarker-ResponseParams.ta.js';
import {
  DbFreeMarker_ResponseParams,
  _decode_DbFreeMarker_ResponseParams,
  _encode_DbFreeMarker_ResponseParams,
} from '../BIP/DbFreeMarker-ResponseParams.ta.js';
export {
  DbFreeMarker_ResponseParams,
  _decode_DbFreeMarker_ResponseParams,
  _encode_DbFreeMarker_ResponseParams,
} from '../BIP/DbFreeMarker-ResponseParams.ta.js';
import {
  DbStoreBIR_ResponseParams,
  _decode_DbStoreBIR_ResponseParams,
  _encode_DbStoreBIR_ResponseParams,
} from '../BIP/DbStoreBIR-ResponseParams.ta.js';
export {
  DbStoreBIR_ResponseParams,
  _decode_DbStoreBIR_ResponseParams,
  _encode_DbStoreBIR_ResponseParams,
} from '../BIP/DbStoreBIR-ResponseParams.ta.js';
import {
  DbGetBIR_ResponseParams,
  _decode_DbGetBIR_ResponseParams,
  _encode_DbGetBIR_ResponseParams,
} from '../BIP/DbGetBIR-ResponseParams.ta.js';
export {
  DbGetBIR_ResponseParams,
  _decode_DbGetBIR_ResponseParams,
  _encode_DbGetBIR_ResponseParams,
} from '../BIP/DbGetBIR-ResponseParams.ta.js';
import {
  DbGetNextBIR_ResponseParams,
  _decode_DbGetNextBIR_ResponseParams,
  _encode_DbGetNextBIR_ResponseParams,
} from '../BIP/DbGetNextBIR-ResponseParams.ta.js';
export {
  DbGetNextBIR_ResponseParams,
  _decode_DbGetNextBIR_ResponseParams,
  _encode_DbGetNextBIR_ResponseParams,
} from '../BIP/DbGetNextBIR-ResponseParams.ta.js';
import {
  DbDeleteBIR_ResponseParams,
  _decode_DbDeleteBIR_ResponseParams,
  _encode_DbDeleteBIR_ResponseParams,
} from '../BIP/DbDeleteBIR-ResponseParams.ta.js';
export {
  DbDeleteBIR_ResponseParams,
  _decode_DbDeleteBIR_ResponseParams,
  _encode_DbDeleteBIR_ResponseParams,
} from '../BIP/DbDeleteBIR-ResponseParams.ta.js';
import {
  CalibrateSensor_ResponseParams,
  _decode_CalibrateSensor_ResponseParams,
  _encode_CalibrateSensor_ResponseParams,
} from '../BIP/CalibrateSensor-ResponseParams.ta.js';
export {
  CalibrateSensor_ResponseParams,
  _decode_CalibrateSensor_ResponseParams,
  _encode_CalibrateSensor_ResponseParams,
} from '../BIP/CalibrateSensor-ResponseParams.ta.js';
import {
  SetPowerMode_ResponseParams,
  _decode_SetPowerMode_ResponseParams,
  _encode_SetPowerMode_ResponseParams,
} from '../BIP/SetPowerMode-ResponseParams.ta.js';
export {
  SetPowerMode_ResponseParams,
  _decode_SetPowerMode_ResponseParams,
  _encode_SetPowerMode_ResponseParams,
} from '../BIP/SetPowerMode-ResponseParams.ta.js';
import {
  SetIndicatorStatus_ResponseParams,
  _decode_SetIndicatorStatus_ResponseParams,
  _encode_SetIndicatorStatus_ResponseParams,
} from '../BIP/SetIndicatorStatus-ResponseParams.ta.js';
export {
  SetIndicatorStatus_ResponseParams,
  _decode_SetIndicatorStatus_ResponseParams,
  _encode_SetIndicatorStatus_ResponseParams,
} from '../BIP/SetIndicatorStatus-ResponseParams.ta.js';
import {
  GetIndicatorStatus_ResponseParams,
  _decode_GetIndicatorStatus_ResponseParams,
  _encode_GetIndicatorStatus_ResponseParams,
} from '../BIP/GetIndicatorStatus-ResponseParams.ta.js';
export {
  GetIndicatorStatus_ResponseParams,
  _decode_GetIndicatorStatus_ResponseParams,
  _encode_GetIndicatorStatus_ResponseParams,
} from '../BIP/GetIndicatorStatus-ResponseParams.ta.js';
import {
  Cancel_ResponseParams,
  _decode_Cancel_ResponseParams,
  _encode_Cancel_ResponseParams,
} from '../BIP/Cancel-ResponseParams.ta.js';
export {
  Cancel_ResponseParams,
  _decode_Cancel_ResponseParams,
  _encode_Cancel_ResponseParams,
} from '../BIP/Cancel-ResponseParams.ta.js';
import {
  RegisterBSP_ResponseParams,
  _decode_RegisterBSP_ResponseParams,
  _encode_RegisterBSP_ResponseParams,
} from '../BIP/RegisterBSP-ResponseParams.ta.js';
export {
  RegisterBSP_ResponseParams,
  _decode_RegisterBSP_ResponseParams,
  _encode_RegisterBSP_ResponseParams,
} from '../BIP/RegisterBSP-ResponseParams.ta.js';
import {
  UnregisterBSP_ResponseParams,
  _decode_UnregisterBSP_ResponseParams,
  _encode_UnregisterBSP_ResponseParams,
} from '../BIP/UnregisterBSP-ResponseParams.ta.js';
export {
  UnregisterBSP_ResponseParams,
  _decode_UnregisterBSP_ResponseParams,
  _encode_UnregisterBSP_ResponseParams,
} from '../BIP/UnregisterBSP-ResponseParams.ta.js';
import {
  RegisterBFP_ResponseParams,
  _decode_RegisterBFP_ResponseParams,
  _encode_RegisterBFP_ResponseParams,
} from '../BIP/RegisterBFP-ResponseParams.ta.js';
export {
  RegisterBFP_ResponseParams,
  _decode_RegisterBFP_ResponseParams,
  _encode_RegisterBFP_ResponseParams,
} from '../BIP/RegisterBFP-ResponseParams.ta.js';
import {
  UnregisterBFP_ResponseParams,
  _decode_UnregisterBFP_ResponseParams,
  _encode_UnregisterBFP_ResponseParams,
} from '../BIP/UnregisterBFP-ResponseParams.ta.js';
export {
  UnregisterBFP_ResponseParams,
  _decode_UnregisterBFP_ResponseParams,
  _encode_UnregisterBFP_ResponseParams,
} from '../BIP/UnregisterBFP-ResponseParams.ta.js';

/* START_OF_SYMBOL_DEFINITION BIPResponse_params */
/**
 * @summary BIPResponse_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPResponse-params ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BIPResponse_params =
  | { addMaster: AddMaster_ResponseParams } /* CHOICE_ALT_ROOT */
  | { deleteMaster: DeleteMaster_ResponseParams } /* CHOICE_ALT_ROOT */
  | { bspLoad: BSPLoad_ResponseParams } /* CHOICE_ALT_ROOT */
  | { bspUnload: BSPUnload_ResponseParams } /* CHOICE_ALT_ROOT */
  | { queryUnits: QueryUnits_ResponseParams } /* CHOICE_ALT_ROOT */
  | { queryBFPs: QueryBFPs_ResponseParams } /* CHOICE_ALT_ROOT */
  | { bspAttach: BSPAttach_ResponseParams } /* CHOICE_ALT_ROOT */
  | { bspDetach: BSPDetach_ResponseParams } /* CHOICE_ALT_ROOT */
  | { enableUnitEvents: EnableUnitEvents_ResponseParams } /* CHOICE_ALT_ROOT */
  | {
      enableEventNotifications: EnableEventNotifications_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | { controlUnit: ControlUnit_ResponseParams } /* CHOICE_ALT_ROOT */
  | { control: Control_ResponseParams } /* CHOICE_ALT_ROOT */
  | { freeBIRHandle: FreeBIRHandle_ResponseParams } /* CHOICE_ALT_ROOT */
  | { getBIRFromHandle: GetBIRFromHandle_ResponseParams } /* CHOICE_ALT_ROOT */
  | {
      getHeaderFromHandle: GetHeaderFromHandle_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      subscribeToGUIEvents: SubscribeToGUIEvents_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      unsubscribeFromGUIEvents: UnsubscribeFromGUIEvents_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      redirectGUIEvents: RedirectGUIEvents_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      unredirectGUIEvents: UnredirectGUIEvents_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      queryGUIEventSubscriptions: QueryGUIEventSubscriptions_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      notifyGUISelectEvent: NotifyGUISelectEvent_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      notifyGUIStateEvent: NotifyGUIStateEvent_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      notifyGUIProgressEvent: NotifyGUIProgressEvent_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | { capture: Capture_ResponseParams } /* CHOICE_ALT_ROOT */
  | { createTemplate: CreateTemplate_ResponseParams } /* CHOICE_ALT_ROOT */
  | { process: Process_ResponseParams } /* CHOICE_ALT_ROOT */
  | {
      processWithAuxBIR: ProcessWithAuxBIR_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | { verifyMatch: VerifyMatch_ResponseParams } /* CHOICE_ALT_ROOT */
  | { identifyMatch: IdentifyMatch_ResponseParams } /* CHOICE_ALT_ROOT */
  | { enroll: Enroll_ResponseParams } /* CHOICE_ALT_ROOT */
  | { verify: Verify_ResponseParams } /* CHOICE_ALT_ROOT */
  | { identify: Identify_ResponseParams } /* CHOICE_ALT_ROOT */
  | { import_: Import_ResponseParams } /* CHOICE_ALT_ROOT */
  | {
      presetIdentifyPopulation: PresetIdentifyPopulation_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | { transform: Transform_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbOpen: DbOpen_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbClose: DbClose_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbCreate: DbCreate_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbDelete: DbDelete_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbSetMarker: DbSetMarker_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbFreeMarker: DbFreeMarker_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbStore: DbStoreBIR_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbGetBIR: DbGetBIR_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbGetNextBIR: DbGetNextBIR_ResponseParams } /* CHOICE_ALT_ROOT */
  | { dbDeleteBIR: DbDeleteBIR_ResponseParams } /* CHOICE_ALT_ROOT */
  | { calibrateSensor: CalibrateSensor_ResponseParams } /* CHOICE_ALT_ROOT */
  | { setPowerMode: SetPowerMode_ResponseParams } /* CHOICE_ALT_ROOT */
  | {
      setIndicatorStatus: SetIndicatorStatus_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | {
      getIndicatorStatus: GetIndicatorStatus_ResponseParams;
    } /* CHOICE_ALT_ROOT */
  | { cancel: Cancel_ResponseParams } /* CHOICE_ALT_ROOT */
  | { registedBSP: RegisterBSP_ResponseParams } /* CHOICE_ALT_ROOT */
  | { unregisterBSP: UnregisterBSP_ResponseParams } /* CHOICE_ALT_ROOT */
  | { registerBFP: RegisterBFP_ResponseParams } /* CHOICE_ALT_ROOT */
  | { unregisterBFP: UnregisterBFP_ResponseParams } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION BIPResponse_params */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPResponse_params */
let _cached_decoder_for_BIPResponse_params: $.ASN1Decoder<BIPResponse_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BIPResponse_params */

/* START_OF_SYMBOL_DEFINITION _decode_BIPResponse_params */
/**
 * @summary Decodes an ASN.1 element into a(n) BIPResponse_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPResponse_params} The decoded data structure.
 */
export function _decode_BIPResponse_params(el: _Element) {
  if (!_cached_decoder_for_BIPResponse_params) {
    _cached_decoder_for_BIPResponse_params = $._decode_extensible_choice<BIPResponse_params>(
      {
        'CONTEXT 0': ['addMaster', _decode_AddMaster_ResponseParams],
        'CONTEXT 1': ['deleteMaster', _decode_DeleteMaster_ResponseParams],
        'CONTEXT 2': ['bspLoad', _decode_BSPLoad_ResponseParams],
        'CONTEXT 3': ['bspUnload', _decode_BSPUnload_ResponseParams],
        'CONTEXT 4': ['queryUnits', _decode_QueryUnits_ResponseParams],
        'CONTEXT 5': ['queryBFPs', _decode_QueryBFPs_ResponseParams],
        'CONTEXT 6': ['bspAttach', _decode_BSPAttach_ResponseParams],
        'CONTEXT 7': ['bspDetach', _decode_BSPDetach_ResponseParams],
        'CONTEXT 8': [
          'enableUnitEvents',
          _decode_EnableUnitEvents_ResponseParams,
        ],
        'CONTEXT 9': [
          'enableEventNotifications',
          _decode_EnableEventNotifications_ResponseParams,
        ],
        'CONTEXT 10': ['controlUnit', _decode_ControlUnit_ResponseParams],
        'CONTEXT 11': ['control', _decode_Control_ResponseParams],
        'CONTEXT 12': ['freeBIRHandle', _decode_FreeBIRHandle_ResponseParams],
        'CONTEXT 13': [
          'getBIRFromHandle',
          _decode_GetBIRFromHandle_ResponseParams,
        ],
        'CONTEXT 14': [
          'getHeaderFromHandle',
          _decode_GetHeaderFromHandle_ResponseParams,
        ],
        'CONTEXT 15': [
          'subscribeToGUIEvents',
          _decode_SubscribeToGUIEvents_ResponseParams,
        ],
        'CONTEXT 16': [
          'unsubscribeFromGUIEvents',
          _decode_UnsubscribeFromGUIEvents_ResponseParams,
        ],
        'CONTEXT 17': [
          'redirectGUIEvents',
          _decode_RedirectGUIEvents_ResponseParams,
        ],
        'CONTEXT 18': [
          'unredirectGUIEvents',
          _decode_UnredirectGUIEvents_ResponseParams,
        ],
        'CONTEXT 19': [
          'queryGUIEventSubscriptions',
          _decode_QueryGUIEventSubscriptions_ResponseParams,
        ],
        'CONTEXT 20': [
          'notifyGUISelectEvent',
          _decode_NotifyGUISelectEvent_ResponseParams,
        ],
        'CONTEXT 21': [
          'notifyGUIStateEvent',
          _decode_NotifyGUIStateEvent_ResponseParams,
        ],
        'CONTEXT 22': [
          'notifyGUIProgressEvent',
          _decode_NotifyGUIProgressEvent_ResponseParams,
        ],
        'CONTEXT 23': ['capture', _decode_Capture_ResponseParams],
        'CONTEXT 24': ['createTemplate', _decode_CreateTemplate_ResponseParams],
        'CONTEXT 25': ['process', _decode_Process_ResponseParams],
        'CONTEXT 26': [
          'processWithAuxBIR',
          _decode_ProcessWithAuxBIR_ResponseParams,
        ],
        'CONTEXT 27': ['verifyMatch', _decode_VerifyMatch_ResponseParams],
        'CONTEXT 28': ['identifyMatch', _decode_IdentifyMatch_ResponseParams],
        'CONTEXT 29': ['enroll', _decode_Enroll_ResponseParams],
        'CONTEXT 30': ['verify', _decode_Verify_ResponseParams],
        'CONTEXT 31': ['identify', _decode_Identify_ResponseParams],
        'CONTEXT 32': ['import_', _decode_Import_ResponseParams],
        'CONTEXT 33': [
          'presetIdentifyPopulation',
          _decode_PresetIdentifyPopulation_ResponseParams,
        ],
        'CONTEXT 34': ['transform', _decode_Transform_ResponseParams],
        'CONTEXT 35': ['dbOpen', _decode_DbOpen_ResponseParams],
        'CONTEXT 36': ['dbClose', _decode_DbClose_ResponseParams],
        'CONTEXT 37': ['dbCreate', _decode_DbCreate_ResponseParams],
        'CONTEXT 38': ['dbDelete', _decode_DbDelete_ResponseParams],
        'CONTEXT 39': ['dbSetMarker', _decode_DbSetMarker_ResponseParams],
        'CONTEXT 40': ['dbFreeMarker', _decode_DbFreeMarker_ResponseParams],
        'CONTEXT 41': ['dbStore', _decode_DbStoreBIR_ResponseParams],
        'CONTEXT 42': ['dbGetBIR', _decode_DbGetBIR_ResponseParams],
        'CONTEXT 43': ['dbGetNextBIR', _decode_DbGetNextBIR_ResponseParams],
        'CONTEXT 44': ['dbDeleteBIR', _decode_DbDeleteBIR_ResponseParams],
        'CONTEXT 45': [
          'calibrateSensor',
          _decode_CalibrateSensor_ResponseParams,
        ],
        'CONTEXT 46': ['setPowerMode', _decode_SetPowerMode_ResponseParams],
        'CONTEXT 47': [
          'setIndicatorStatus',
          _decode_SetIndicatorStatus_ResponseParams,
        ],
        'CONTEXT 48': [
          'getIndicatorStatus',
          _decode_GetIndicatorStatus_ResponseParams,
        ],
        'CONTEXT 49': ['cancel', _decode_Cancel_ResponseParams],
        'CONTEXT 50': ['registedBSP', _decode_RegisterBSP_ResponseParams],
        'CONTEXT 51': ['unregisterBSP', _decode_UnregisterBSP_ResponseParams],
        'CONTEXT 52': ['registerBFP', _decode_RegisterBFP_ResponseParams],
        'CONTEXT 53': ['unregisterBFP', _decode_UnregisterBFP_ResponseParams],
      }
    );
  }
  return _cached_decoder_for_BIPResponse_params(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BIPResponse_params */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPResponse_params */
let _cached_encoder_for_BIPResponse_params: $.ASN1Encoder<BIPResponse_params> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BIPResponse_params */

/* START_OF_SYMBOL_DEFINITION _encode_BIPResponse_params */
/**
 * @summary Encodes a(n) BIPResponse_params into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPResponse_params, encoded as an ASN.1 Element.
 */
export function _encode_BIPResponse_params(
  value: BIPResponse_params,
  elGetter: $.ASN1Encoder<BIPResponse_params>
) {
  if (!_cached_encoder_for_BIPResponse_params) {
    _cached_encoder_for_BIPResponse_params = $._encode_choice<BIPResponse_params>(
      {
        addMaster: _encode_AddMaster_ResponseParams,
        deleteMaster: _encode_DeleteMaster_ResponseParams,
        bspLoad: _encode_BSPLoad_ResponseParams,
        bspUnload: _encode_BSPUnload_ResponseParams,
        queryUnits: _encode_QueryUnits_ResponseParams,
        queryBFPs: _encode_QueryBFPs_ResponseParams,
        bspAttach: _encode_BSPAttach_ResponseParams,
        bspDetach: _encode_BSPDetach_ResponseParams,
        enableUnitEvents: _encode_EnableUnitEvents_ResponseParams,
        enableEventNotifications: _encode_EnableEventNotifications_ResponseParams,
        controlUnit: _encode_ControlUnit_ResponseParams,
        control: _encode_Control_ResponseParams,
        freeBIRHandle: _encode_FreeBIRHandle_ResponseParams,
        getBIRFromHandle: _encode_GetBIRFromHandle_ResponseParams,
        getHeaderFromHandle: _encode_GetHeaderFromHandle_ResponseParams,
        subscribeToGUIEvents: _encode_SubscribeToGUIEvents_ResponseParams,
        unsubscribeFromGUIEvents: _encode_UnsubscribeFromGUIEvents_ResponseParams,
        redirectGUIEvents: _encode_RedirectGUIEvents_ResponseParams,
        unredirectGUIEvents: _encode_UnredirectGUIEvents_ResponseParams,
        queryGUIEventSubscriptions: _encode_QueryGUIEventSubscriptions_ResponseParams,
        notifyGUISelectEvent: _encode_NotifyGUISelectEvent_ResponseParams,
        notifyGUIStateEvent: _encode_NotifyGUIStateEvent_ResponseParams,
        notifyGUIProgressEvent: _encode_NotifyGUIProgressEvent_ResponseParams,
        capture: _encode_Capture_ResponseParams,
        createTemplate: _encode_CreateTemplate_ResponseParams,
        process: _encode_Process_ResponseParams,
        processWithAuxBIR: _encode_ProcessWithAuxBIR_ResponseParams,
        verifyMatch: _encode_VerifyMatch_ResponseParams,
        identifyMatch: _encode_IdentifyMatch_ResponseParams,
        enroll: _encode_Enroll_ResponseParams,
        verify: _encode_Verify_ResponseParams,
        identify: _encode_Identify_ResponseParams,
        import_: _encode_Import_ResponseParams,
        presetIdentifyPopulation: _encode_PresetIdentifyPopulation_ResponseParams,
        transform: _encode_Transform_ResponseParams,
        dbOpen: _encode_DbOpen_ResponseParams,
        dbClose: _encode_DbClose_ResponseParams,
        dbCreate: _encode_DbCreate_ResponseParams,
        dbDelete: _encode_DbDelete_ResponseParams,
        dbSetMarker: _encode_DbSetMarker_ResponseParams,
        dbFreeMarker: _encode_DbFreeMarker_ResponseParams,
        dbStore: _encode_DbStoreBIR_ResponseParams,
        dbGetBIR: _encode_DbGetBIR_ResponseParams,
        dbGetNextBIR: _encode_DbGetNextBIR_ResponseParams,
        dbDeleteBIR: _encode_DbDeleteBIR_ResponseParams,
        calibrateSensor: _encode_CalibrateSensor_ResponseParams,
        setPowerMode: _encode_SetPowerMode_ResponseParams,
        setIndicatorStatus: _encode_SetIndicatorStatus_ResponseParams,
        getIndicatorStatus: _encode_GetIndicatorStatus_ResponseParams,
        cancel: _encode_Cancel_ResponseParams,
        registedBSP: _encode_RegisterBSP_ResponseParams,
        unregisterBSP: _encode_UnregisterBSP_ResponseParams,
        registerBFP: _encode_RegisterBFP_ResponseParams,
        unregisterBFP: _encode_UnregisterBFP_ResponseParams,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BIPResponse_params(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BIPResponse_params */

/* eslint-enable */

/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  AddMaster_RequestParams,
  _decode_AddMaster_RequestParams,
  _encode_AddMaster_RequestParams,
} from '../BIP/AddMaster-RequestParams.ta.mjs';
import {
  DeleteMaster_RequestParams,
  _decode_DeleteMaster_RequestParams,
  _encode_DeleteMaster_RequestParams,
} from '../BIP/DeleteMaster-RequestParams.ta.mjs';
import {
  BSPLoad_RequestParams,
  _decode_BSPLoad_RequestParams,
  _encode_BSPLoad_RequestParams,
} from '../BIP/BSPLoad-RequestParams.ta.mjs';
import {
  BSPUnload_RequestParams,
  _decode_BSPUnload_RequestParams,
  _encode_BSPUnload_RequestParams,
} from '../BIP/BSPUnload-RequestParams.ta.mjs';
import {
  QueryUnits_RequestParams,
  _decode_QueryUnits_RequestParams,
  _encode_QueryUnits_RequestParams,
} from '../BIP/QueryUnits-RequestParams.ta.mjs';
import {
  QueryBFPs_RequestParams,
  _decode_QueryBFPs_RequestParams,
  _encode_QueryBFPs_RequestParams,
} from '../BIP/QueryBFPs-RequestParams.ta.mjs';
import {
  BSPAttach_RequestParams,
  _decode_BSPAttach_RequestParams,
  _encode_BSPAttach_RequestParams,
} from '../BIP/BSPAttach-RequestParams.ta.mjs';
import {
  BSPDetach_RequestParams,
  _decode_BSPDetach_RequestParams,
  _encode_BSPDetach_RequestParams,
} from '../BIP/BSPDetach-RequestParams.ta.mjs';
import {
  EnableUnitEvents_RequestParams,
  _decode_EnableUnitEvents_RequestParams,
  _encode_EnableUnitEvents_RequestParams,
} from '../BIP/EnableUnitEvents-RequestParams.ta.mjs';
import {
  EnableEventNotifications_RequestParams,
  _decode_EnableEventNotifications_RequestParams,
  _encode_EnableEventNotifications_RequestParams,
} from '../BIP/EnableEventNotifications-RequestParams.ta.mjs';
import {
  ControlUnit_RequestParams,
  _decode_ControlUnit_RequestParams,
  _encode_ControlUnit_RequestParams,
} from '../BIP/ControlUnit-RequestParams.ta.mjs';
import {
  Control_RequestParams,
  _decode_Control_RequestParams,
  _encode_Control_RequestParams,
} from '../BIP/Control-RequestParams.ta.mjs';
import {
  FreeBIRHandle_RequestParams,
  _decode_FreeBIRHandle_RequestParams,
  _encode_FreeBIRHandle_RequestParams,
} from '../BIP/FreeBIRHandle-RequestParams.ta.mjs';
import {
  GetBIRFromHandle_RequestParams,
  _decode_GetBIRFromHandle_RequestParams,
  _encode_GetBIRFromHandle_RequestParams,
} from '../BIP/GetBIRFromHandle-RequestParams.ta.mjs';
import {
  GetHeaderFromHandle_RequestParams,
  _decode_GetHeaderFromHandle_RequestParams,
  _encode_GetHeaderFromHandle_RequestParams,
} from '../BIP/GetHeaderFromHandle-RequestParams.ta.mjs';
import {
  SubscribeToGUIEvents_RequestParams,
  _decode_SubscribeToGUIEvents_RequestParams,
  _encode_SubscribeToGUIEvents_RequestParams,
} from '../BIP/SubscribeToGUIEvents-RequestParams.ta.mjs';
import {
  UnsubscribeFromGUIEvents_RequestParams,
  _decode_UnsubscribeFromGUIEvents_RequestParams,
  _encode_UnsubscribeFromGUIEvents_RequestParams,
} from '../BIP/UnsubscribeFromGUIEvents-RequestParams.ta.mjs';
import {
  RedirectGUIEvents_RequestParams,
  _decode_RedirectGUIEvents_RequestParams,
  _encode_RedirectGUIEvents_RequestParams,
} from '../BIP/RedirectGUIEvents-RequestParams.ta.mjs';
import {
  UnredirectGUIEvents_RequestParams,
  _decode_UnredirectGUIEvents_RequestParams,
  _encode_UnredirectGUIEvents_RequestParams,
} from '../BIP/UnredirectGUIEvents-RequestParams.ta.mjs';
import {
  QueryGUIEventSubscriptions_RequestParams,
  _decode_QueryGUIEventSubscriptions_RequestParams,
  _encode_QueryGUIEventSubscriptions_RequestParams,
} from '../BIP/QueryGUIEventSubscriptions-RequestParams.ta.mjs';
import {
  NotifyGUISelectEvent_RequestParams,
  _decode_NotifyGUISelectEvent_RequestParams,
  _encode_NotifyGUISelectEvent_RequestParams,
} from '../BIP/NotifyGUISelectEvent-RequestParams.ta.mjs';
import {
  NotifyGUIStateEvent_RequestParams,
  _decode_NotifyGUIStateEvent_RequestParams,
  _encode_NotifyGUIStateEvent_RequestParams,
} from '../BIP/NotifyGUIStateEvent-RequestParams.ta.mjs';
import {
  NotifyGUIProgressEvent_RequestParams,
  _decode_NotifyGUIProgressEvent_RequestParams,
  _encode_NotifyGUIProgressEvent_RequestParams,
} from '../BIP/NotifyGUIProgressEvent-RequestParams.ta.mjs';
import {
  Capture_RequestParams,
  _decode_Capture_RequestParams,
  _encode_Capture_RequestParams,
} from '../BIP/Capture-RequestParams.ta.mjs';
import {
  CreateTemplate_RequestParams,
  _decode_CreateTemplate_RequestParams,
  _encode_CreateTemplate_RequestParams,
} from '../BIP/CreateTemplate-RequestParams.ta.mjs';
import {
  Process_RequestParams,
  _decode_Process_RequestParams,
  _encode_Process_RequestParams,
} from '../BIP/Process-RequestParams.ta.mjs';
import {
  ProcessWithAuxBIR_RequestParams,
  _decode_ProcessWithAuxBIR_RequestParams,
  _encode_ProcessWithAuxBIR_RequestParams,
} from '../BIP/ProcessWithAuxBIR-RequestParams.ta.mjs';
import {
  VerifyMatch_RequestParams,
  _decode_VerifyMatch_RequestParams,
  _encode_VerifyMatch_RequestParams,
} from '../BIP/VerifyMatch-RequestParams.ta.mjs';
import {
  IdentifyMatch_RequestParams,
  _decode_IdentifyMatch_RequestParams,
  _encode_IdentifyMatch_RequestParams,
} from '../BIP/IdentifyMatch-RequestParams.ta.mjs';
import {
  Enroll_RequestParams,
  _decode_Enroll_RequestParams,
  _encode_Enroll_RequestParams,
} from '../BIP/Enroll-RequestParams.ta.mjs';
import {
  Verify_RequestParams,
  _decode_Verify_RequestParams,
  _encode_Verify_RequestParams,
} from '../BIP/Verify-RequestParams.ta.mjs';
import {
  Identify_RequestParams,
  _decode_Identify_RequestParams,
  _encode_Identify_RequestParams,
} from '../BIP/Identify-RequestParams.ta.mjs';
import {
  Import_RequestParams,
  _decode_Import_RequestParams,
  _encode_Import_RequestParams,
} from '../BIP/Import-RequestParams.ta.mjs';
import {
  PresetIdentifyPopulation_RequestParams,
  _decode_PresetIdentifyPopulation_RequestParams,
  _encode_PresetIdentifyPopulation_RequestParams,
} from '../BIP/PresetIdentifyPopulation-RequestParams.ta.mjs';
import {
  Transform_RequestParams,
  _decode_Transform_RequestParams,
  _encode_Transform_RequestParams,
} from '../BIP/Transform-RequestParams.ta.mjs';
import {
  DbOpen_RequestParams,
  _decode_DbOpen_RequestParams,
  _encode_DbOpen_RequestParams,
} from '../BIP/DbOpen-RequestParams.ta.mjs';
import {
  DbClose_RequestParams,
  _decode_DbClose_RequestParams,
  _encode_DbClose_RequestParams,
} from '../BIP/DbClose-RequestParams.ta.mjs';
import {
  DbCreate_RequestParams,
  _decode_DbCreate_RequestParams,
  _encode_DbCreate_RequestParams,
} from '../BIP/DbCreate-RequestParams.ta.mjs';
import {
  DbDelete_RequestParams,
  _decode_DbDelete_RequestParams,
  _encode_DbDelete_RequestParams,
} from '../BIP/DbDelete-RequestParams.ta.mjs';
import {
  DbSetMarker_RequestParams,
  _decode_DbSetMarker_RequestParams,
  _encode_DbSetMarker_RequestParams,
} from '../BIP/DbSetMarker-RequestParams.ta.mjs';
import {
  DbFreeMarker_RequestParams,
  _decode_DbFreeMarker_RequestParams,
  _encode_DbFreeMarker_RequestParams,
} from '../BIP/DbFreeMarker-RequestParams.ta.mjs';
import {
  DbStoreBIR_RequestParams,
  _decode_DbStoreBIR_RequestParams,
  _encode_DbStoreBIR_RequestParams,
} from '../BIP/DbStoreBIR-RequestParams.ta.mjs';
import {
  DbGetBIR_RequestParams,
  _decode_DbGetBIR_RequestParams,
  _encode_DbGetBIR_RequestParams,
} from '../BIP/DbGetBIR-RequestParams.ta.mjs';
import {
  DbGetNextBIR_RequestParams,
  _decode_DbGetNextBIR_RequestParams,
  _encode_DbGetNextBIR_RequestParams,
} from '../BIP/DbGetNextBIR-RequestParams.ta.mjs';
import {
  DbDeleteBIR_RequestParams,
  _decode_DbDeleteBIR_RequestParams,
  _encode_DbDeleteBIR_RequestParams,
} from '../BIP/DbDeleteBIR-RequestParams.ta.mjs';
import {
  CalibrateSensor_RequestParams,
  _decode_CalibrateSensor_RequestParams,
  _encode_CalibrateSensor_RequestParams,
} from '../BIP/CalibrateSensor-RequestParams.ta.mjs';
import {
  SetPowerMode_RequestParams,
  _decode_SetPowerMode_RequestParams,
  _encode_SetPowerMode_RequestParams,
} from '../BIP/SetPowerMode-RequestParams.ta.mjs';
import {
  SetIndicatorStatus_RequestParams,
  _decode_SetIndicatorStatus_RequestParams,
  _encode_SetIndicatorStatus_RequestParams,
} from '../BIP/SetIndicatorStatus-RequestParams.ta.mjs';
import {
  GetIndicatorStatus_RequestParams,
  _decode_GetIndicatorStatus_RequestParams,
  _encode_GetIndicatorStatus_RequestParams,
} from '../BIP/GetIndicatorStatus-RequestParams.ta.mjs';
import {
  Cancel_RequestParams,
  _decode_Cancel_RequestParams,
  _encode_Cancel_RequestParams,
} from '../BIP/Cancel-RequestParams.ta.mjs';
import {
  RegisterBSP_RequestParams,
  _decode_RegisterBSP_RequestParams,
  _encode_RegisterBSP_RequestParams,
} from '../BIP/RegisterBSP-RequestParams.ta.mjs';
import {
  UnregisterBSP_RequestParams,
  _decode_UnregisterBSP_RequestParams,
  _encode_UnregisterBSP_RequestParams,
} from '../BIP/UnregisterBSP-RequestParams.ta.mjs';
import {
  RegisterBFP_RequestParams,
  _decode_RegisterBFP_RequestParams,
  _encode_RegisterBFP_RequestParams,
} from '../BIP/RegisterBFP-RequestParams.ta.mjs';
import {
  UnregisterBFP_RequestParams,
  _decode_UnregisterBFP_RequestParams,
  _encode_UnregisterBFP_RequestParams,
} from '../BIP/UnregisterBFP-RequestParams.ta.mjs';

/**
 * @summary BIPRequest_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BIPRequest-params ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BIPRequest_params =
  | { addMaster: AddMaster_RequestParams } /* CHOICE_ALT_ROOT */
  | { deleteMaster: DeleteMaster_RequestParams } /* CHOICE_ALT_ROOT */
  | { bspLoad: BSPLoad_RequestParams } /* CHOICE_ALT_ROOT */
  | { bspUnload: BSPUnload_RequestParams } /* CHOICE_ALT_ROOT */
  | { queryUnits: QueryUnits_RequestParams } /* CHOICE_ALT_ROOT */
  | { queryBFPs: QueryBFPs_RequestParams } /* CHOICE_ALT_ROOT */
  | { bspAttach: BSPAttach_RequestParams } /* CHOICE_ALT_ROOT */
  | { bspDetach: BSPDetach_RequestParams } /* CHOICE_ALT_ROOT */
  | { enableUnitEvents: EnableUnitEvents_RequestParams } /* CHOICE_ALT_ROOT */
  | {
      enableEventNotifications: EnableEventNotifications_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | { controlUnit: ControlUnit_RequestParams } /* CHOICE_ALT_ROOT */
  | { control: Control_RequestParams } /* CHOICE_ALT_ROOT */
  | { freeBIRHandle: FreeBIRHandle_RequestParams } /* CHOICE_ALT_ROOT */
  | { getBIRFromHandle: GetBIRFromHandle_RequestParams } /* CHOICE_ALT_ROOT */
  | {
      getHeaderFromHandle: GetHeaderFromHandle_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | {
      subscribeToGUIEvents: SubscribeToGUIEvents_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | {
      unsubscribeFromGUIEvents: UnsubscribeFromGUIEvents_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | { redirectGUIEvents: RedirectGUIEvents_RequestParams } /* CHOICE_ALT_ROOT */
  | {
      unredirectGUIEvents: UnredirectGUIEvents_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | {
      queryGUIEventSubscriptions: QueryGUIEventSubscriptions_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | {
      notifyGUISelectEvent: NotifyGUISelectEvent_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | {
      notifyGUIStateEvent: NotifyGUIStateEvent_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | {
      notifyGUIProgressEvent: NotifyGUIProgressEvent_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | { capture: Capture_RequestParams } /* CHOICE_ALT_ROOT */
  | { createTemplate: CreateTemplate_RequestParams } /* CHOICE_ALT_ROOT */
  | { process: Process_RequestParams } /* CHOICE_ALT_ROOT */
  | { processWithAuxBIR: ProcessWithAuxBIR_RequestParams } /* CHOICE_ALT_ROOT */
  | { verifyMatch: VerifyMatch_RequestParams } /* CHOICE_ALT_ROOT */
  | { identifyMatch: IdentifyMatch_RequestParams } /* CHOICE_ALT_ROOT */
  | { enroll: Enroll_RequestParams } /* CHOICE_ALT_ROOT */
  | { verify: Verify_RequestParams } /* CHOICE_ALT_ROOT */
  | { identify: Identify_RequestParams } /* CHOICE_ALT_ROOT */
  | { import_: Import_RequestParams } /* CHOICE_ALT_ROOT */
  | {
      presetIdentifyPopulation: PresetIdentifyPopulation_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | { transform: Transform_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbOpen: DbOpen_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbClose: DbClose_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbCreate: DbCreate_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbDelete: DbDelete_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbSetMarker: DbSetMarker_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbFreeMarker: DbFreeMarker_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbStore: DbStoreBIR_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbGetBIR: DbGetBIR_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbGetNextBIR: DbGetNextBIR_RequestParams } /* CHOICE_ALT_ROOT */
  | { dbDeleteBIR: DbDeleteBIR_RequestParams } /* CHOICE_ALT_ROOT */
  | { calibrateSensor: CalibrateSensor_RequestParams } /* CHOICE_ALT_ROOT */
  | { setPowerMode: SetPowerMode_RequestParams } /* CHOICE_ALT_ROOT */
  | {
      setIndicatorStatus: SetIndicatorStatus_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | {
      getIndicatorStatus: GetIndicatorStatus_RequestParams;
    } /* CHOICE_ALT_ROOT */
  | { cancel: Cancel_RequestParams } /* CHOICE_ALT_ROOT */
  | { registerBSP: RegisterBSP_RequestParams } /* CHOICE_ALT_ROOT */
  | { unregisterBSP: UnregisterBSP_RequestParams } /* CHOICE_ALT_ROOT */
  | { registerBFP: RegisterBFP_RequestParams } /* CHOICE_ALT_ROOT */
  | { unregisterBFP: UnregisterBFP_RequestParams } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_BIPRequest_params: $.ASN1Decoder<BIPRequest_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BIPRequest_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BIPRequest_params} The decoded data structure.
 */
export function _decode_BIPRequest_params(el: _Element) {
  if (!_cached_decoder_for_BIPRequest_params) {
    _cached_decoder_for_BIPRequest_params = $._decode_extensible_choice<BIPRequest_params>(
      {
        'CONTEXT 0': ['addMaster', _decode_AddMaster_RequestParams],
        'CONTEXT 1': ['deleteMaster', _decode_DeleteMaster_RequestParams],
        'CONTEXT 2': ['bspLoad', _decode_BSPLoad_RequestParams],
        'CONTEXT 3': ['bspUnload', _decode_BSPUnload_RequestParams],
        'CONTEXT 4': ['queryUnits', _decode_QueryUnits_RequestParams],
        'CONTEXT 5': ['queryBFPs', _decode_QueryBFPs_RequestParams],
        'CONTEXT 6': ['bspAttach', _decode_BSPAttach_RequestParams],
        'CONTEXT 7': ['bspDetach', _decode_BSPDetach_RequestParams],
        'CONTEXT 8': [
          'enableUnitEvents',
          _decode_EnableUnitEvents_RequestParams,
        ],
        'CONTEXT 9': [
          'enableEventNotifications',
          _decode_EnableEventNotifications_RequestParams,
        ],
        'CONTEXT 10': ['controlUnit', _decode_ControlUnit_RequestParams],
        'CONTEXT 11': ['control', _decode_Control_RequestParams],
        'CONTEXT 12': ['freeBIRHandle', _decode_FreeBIRHandle_RequestParams],
        'CONTEXT 13': [
          'getBIRFromHandle',
          _decode_GetBIRFromHandle_RequestParams,
        ],
        'CONTEXT 14': [
          'getHeaderFromHandle',
          _decode_GetHeaderFromHandle_RequestParams,
        ],
        'CONTEXT 15': [
          'subscribeToGUIEvents',
          _decode_SubscribeToGUIEvents_RequestParams,
        ],
        'CONTEXT 16': [
          'unsubscribeFromGUIEvents',
          _decode_UnsubscribeFromGUIEvents_RequestParams,
        ],
        'CONTEXT 17': [
          'redirectGUIEvents',
          _decode_RedirectGUIEvents_RequestParams,
        ],
        'CONTEXT 18': [
          'unredirectGUIEvents',
          _decode_UnredirectGUIEvents_RequestParams,
        ],
        'CONTEXT 19': [
          'queryGUIEventSubscriptions',
          _decode_QueryGUIEventSubscriptions_RequestParams,
        ],
        'CONTEXT 20': [
          'notifyGUISelectEvent',
          _decode_NotifyGUISelectEvent_RequestParams,
        ],
        'CONTEXT 21': [
          'notifyGUIStateEvent',
          _decode_NotifyGUIStateEvent_RequestParams,
        ],
        'CONTEXT 22': [
          'notifyGUIProgressEvent',
          _decode_NotifyGUIProgressEvent_RequestParams,
        ],
        'CONTEXT 23': ['capture', _decode_Capture_RequestParams],
        'CONTEXT 24': ['createTemplate', _decode_CreateTemplate_RequestParams],
        'CONTEXT 25': ['process', _decode_Process_RequestParams],
        'CONTEXT 26': [
          'processWithAuxBIR',
          _decode_ProcessWithAuxBIR_RequestParams,
        ],
        'CONTEXT 27': ['verifyMatch', _decode_VerifyMatch_RequestParams],
        'CONTEXT 28': ['identifyMatch', _decode_IdentifyMatch_RequestParams],
        'CONTEXT 29': ['enroll', _decode_Enroll_RequestParams],
        'CONTEXT 30': ['verify', _decode_Verify_RequestParams],
        'CONTEXT 31': ['identify', _decode_Identify_RequestParams],
        'CONTEXT 32': ['import_', _decode_Import_RequestParams],
        'CONTEXT 33': [
          'presetIdentifyPopulation',
          _decode_PresetIdentifyPopulation_RequestParams,
        ],
        'CONTEXT 34': ['transform', _decode_Transform_RequestParams],
        'CONTEXT 35': ['dbOpen', _decode_DbOpen_RequestParams],
        'CONTEXT 36': ['dbClose', _decode_DbClose_RequestParams],
        'CONTEXT 37': ['dbCreate', _decode_DbCreate_RequestParams],
        'CONTEXT 38': ['dbDelete', _decode_DbDelete_RequestParams],
        'CONTEXT 39': ['dbSetMarker', _decode_DbSetMarker_RequestParams],
        'CONTEXT 40': ['dbFreeMarker', _decode_DbFreeMarker_RequestParams],
        'CONTEXT 41': ['dbStore', _decode_DbStoreBIR_RequestParams],
        'CONTEXT 42': ['dbGetBIR', _decode_DbGetBIR_RequestParams],
        'CONTEXT 43': ['dbGetNextBIR', _decode_DbGetNextBIR_RequestParams],
        'CONTEXT 44': ['dbDeleteBIR', _decode_DbDeleteBIR_RequestParams],
        'CONTEXT 45': [
          'calibrateSensor',
          _decode_CalibrateSensor_RequestParams,
        ],
        'CONTEXT 46': ['setPowerMode', _decode_SetPowerMode_RequestParams],
        'CONTEXT 47': [
          'setIndicatorStatus',
          _decode_SetIndicatorStatus_RequestParams,
        ],
        'CONTEXT 48': [
          'getIndicatorStatus',
          _decode_GetIndicatorStatus_RequestParams,
        ],
        'CONTEXT 49': ['cancel', _decode_Cancel_RequestParams],
        'CONTEXT 50': ['registerBSP', _decode_RegisterBSP_RequestParams],
        'CONTEXT 51': ['unregisterBSP', _decode_UnregisterBSP_RequestParams],
        'CONTEXT 52': ['registerBFP', _decode_RegisterBFP_RequestParams],
        'CONTEXT 53': ['unregisterBFP', _decode_UnregisterBFP_RequestParams],
      }
    );
  }
  return _cached_decoder_for_BIPRequest_params(el);
}


let _cached_encoder_for_BIPRequest_params: $.ASN1Encoder<BIPRequest_params> | null = null;


/**
 * @summary Encodes a(n) BIPRequest_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BIPRequest_params, encoded as an ASN.1 Element.
 */
export function _encode_BIPRequest_params(
  value: BIPRequest_params,
  elGetter: $.ASN1Encoder<BIPRequest_params>
) {
  if (!_cached_encoder_for_BIPRequest_params) {
    _cached_encoder_for_BIPRequest_params = $._encode_choice<BIPRequest_params>(
      {
        addMaster: _encode_AddMaster_RequestParams,
        deleteMaster: _encode_DeleteMaster_RequestParams,
        bspLoad: _encode_BSPLoad_RequestParams,
        bspUnload: _encode_BSPUnload_RequestParams,
        queryUnits: _encode_QueryUnits_RequestParams,
        queryBFPs: _encode_QueryBFPs_RequestParams,
        bspAttach: _encode_BSPAttach_RequestParams,
        bspDetach: _encode_BSPDetach_RequestParams,
        enableUnitEvents: _encode_EnableUnitEvents_RequestParams,
        enableEventNotifications: _encode_EnableEventNotifications_RequestParams,
        controlUnit: _encode_ControlUnit_RequestParams,
        control: _encode_Control_RequestParams,
        freeBIRHandle: _encode_FreeBIRHandle_RequestParams,
        getBIRFromHandle: _encode_GetBIRFromHandle_RequestParams,
        getHeaderFromHandle: _encode_GetHeaderFromHandle_RequestParams,
        subscribeToGUIEvents: _encode_SubscribeToGUIEvents_RequestParams,
        unsubscribeFromGUIEvents: _encode_UnsubscribeFromGUIEvents_RequestParams,
        redirectGUIEvents: _encode_RedirectGUIEvents_RequestParams,
        unredirectGUIEvents: _encode_UnredirectGUIEvents_RequestParams,
        queryGUIEventSubscriptions: _encode_QueryGUIEventSubscriptions_RequestParams,
        notifyGUISelectEvent: _encode_NotifyGUISelectEvent_RequestParams,
        notifyGUIStateEvent: _encode_NotifyGUIStateEvent_RequestParams,
        notifyGUIProgressEvent: _encode_NotifyGUIProgressEvent_RequestParams,
        capture: _encode_Capture_RequestParams,
        createTemplate: _encode_CreateTemplate_RequestParams,
        process: _encode_Process_RequestParams,
        processWithAuxBIR: _encode_ProcessWithAuxBIR_RequestParams,
        verifyMatch: _encode_VerifyMatch_RequestParams,
        identifyMatch: _encode_IdentifyMatch_RequestParams,
        enroll: _encode_Enroll_RequestParams,
        verify: _encode_Verify_RequestParams,
        identify: _encode_Identify_RequestParams,
        import_: _encode_Import_RequestParams,
        presetIdentifyPopulation: _encode_PresetIdentifyPopulation_RequestParams,
        transform: _encode_Transform_RequestParams,
        dbOpen: _encode_DbOpen_RequestParams,
        dbClose: _encode_DbClose_RequestParams,
        dbCreate: _encode_DbCreate_RequestParams,
        dbDelete: _encode_DbDelete_RequestParams,
        dbSetMarker: _encode_DbSetMarker_RequestParams,
        dbFreeMarker: _encode_DbFreeMarker_RequestParams,
        dbStore: _encode_DbStoreBIR_RequestParams,
        dbGetBIR: _encode_DbGetBIR_RequestParams,
        dbGetNextBIR: _encode_DbGetNextBIR_RequestParams,
        dbDeleteBIR: _encode_DbDeleteBIR_RequestParams,
        calibrateSensor: _encode_CalibrateSensor_RequestParams,
        setPowerMode: _encode_SetPowerMode_RequestParams,
        setIndicatorStatus: _encode_SetIndicatorStatus_RequestParams,
        getIndicatorStatus: _encode_GetIndicatorStatus_RequestParams,
        cancel: _encode_Cancel_RequestParams,
        registerBSP: _encode_RegisterBSP_RequestParams,
        unregisterBSP: _encode_UnregisterBSP_RequestParams,
        registerBFP: _encode_RegisterBFP_RequestParams,
        unregisterBFP: _encode_UnregisterBFP_RequestParams,
      },
      $.BER
    );
  }
  return _cached_encoder_for_BIPRequest_params(value, elGetter);
}


/* eslint-enable */

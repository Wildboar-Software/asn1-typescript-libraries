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
import { VMDStop_Request, _decode_VMDStop_Request, _encode_VMDStop_Request } from "../ISO-9506-MMS-1/VMDStop-Request.ta.mjs";
// export { VMDStop_Request, _decode_VMDStop_Request, _encode_VMDStop_Request } from "../ISO-9506-MMS-1/VMDStop-Request.ta.mjs";
import { VMDReset_Request, _decode_VMDReset_Request, _encode_VMDReset_Request } from "../ISO-9506-MMS-1/VMDReset-Request.ta.mjs";
// export { VMDReset_Request, _decode_VMDReset_Request, _encode_VMDReset_Request } from "../ISO-9506-MMS-1/VMDReset-Request.ta.mjs";
import { Select_Request, _decode_Select_Request, _encode_Select_Request } from "../ISO-9506-MMS-1/Select-Request.ta.mjs";
// export { Select_Request, _decode_Select_Request, _encode_Select_Request } from "../ISO-9506-MMS-1/Select-Request.ta.mjs";
import { AlterProgramInvocationAttributes_Request, _decode_AlterProgramInvocationAttributes_Request, _encode_AlterProgramInvocationAttributes_Request } from "../ISO-9506-MMS-1/AlterProgramInvocationAttributes-Request.ta.mjs";
// export { AlterProgramInvocationAttributes_Request, _decode_AlterProgramInvocationAttributes_Request, _encode_AlterProgramInvocationAttributes_Request } from "../ISO-9506-MMS-1/AlterProgramInvocationAttributes-Request.ta.mjs";
import { InitiateUnitControlLoad_Request, _decode_InitiateUnitControlLoad_Request, _encode_InitiateUnitControlLoad_Request } from "../ISO-9506-MMS-1/InitiateUnitControlLoad-Request.ta.mjs";
// export { InitiateUnitControlLoad_Request, _decode_InitiateUnitControlLoad_Request, _encode_InitiateUnitControlLoad_Request } from "../ISO-9506-MMS-1/InitiateUnitControlLoad-Request.ta.mjs";
import { UnitControlLoadSegment_Request, _decode_UnitControlLoadSegment_Request, _encode_UnitControlLoadSegment_Request } from "../ISO-9506-MMS-1/UnitControlLoadSegment-Request.ta.mjs";
// export { UnitControlLoadSegment_Request, _decode_UnitControlLoadSegment_Request, _encode_UnitControlLoadSegment_Request } from "../ISO-9506-MMS-1/UnitControlLoadSegment-Request.ta.mjs";
import { UnitControlUpload_Request, _decode_UnitControlUpload_Request, _encode_UnitControlUpload_Request } from "../ISO-9506-MMS-1/UnitControlUpload-Request.ta.mjs";
// export { UnitControlUpload_Request, _decode_UnitControlUpload_Request, _encode_UnitControlUpload_Request } from "../ISO-9506-MMS-1/UnitControlUpload-Request.ta.mjs";
import { StartUnitControl_Request, _decode_StartUnitControl_Request, _encode_StartUnitControl_Request } from "../ISO-9506-MMS-1/StartUnitControl-Request.ta.mjs";
// export { StartUnitControl_Request, _decode_StartUnitControl_Request, _encode_StartUnitControl_Request } from "../ISO-9506-MMS-1/StartUnitControl-Request.ta.mjs";
import { StopUnitControl_Request, _decode_StopUnitControl_Request, _encode_StopUnitControl_Request } from "../ISO-9506-MMS-1/StopUnitControl-Request.ta.mjs";
// export { StopUnitControl_Request, _decode_StopUnitControl_Request, _encode_StopUnitControl_Request } from "../ISO-9506-MMS-1/StopUnitControl-Request.ta.mjs";
import { CreateUnitControl_Request, _decode_CreateUnitControl_Request, _encode_CreateUnitControl_Request } from "../ISO-9506-MMS-1/CreateUnitControl-Request.ta.mjs";
// export { CreateUnitControl_Request, _decode_CreateUnitControl_Request, _encode_CreateUnitControl_Request } from "../ISO-9506-MMS-1/CreateUnitControl-Request.ta.mjs";
import { AddToUnitControl_Request, _decode_AddToUnitControl_Request, _encode_AddToUnitControl_Request } from "../ISO-9506-MMS-1/AddToUnitControl-Request.ta.mjs";
// export { AddToUnitControl_Request, _decode_AddToUnitControl_Request, _encode_AddToUnitControl_Request } from "../ISO-9506-MMS-1/AddToUnitControl-Request.ta.mjs";
import { RemoveFromUnitControl_Request, _decode_RemoveFromUnitControl_Request, _encode_RemoveFromUnitControl_Request } from "../ISO-9506-MMS-1/RemoveFromUnitControl-Request.ta.mjs";
// export { RemoveFromUnitControl_Request, _decode_RemoveFromUnitControl_Request, _encode_RemoveFromUnitControl_Request } from "../ISO-9506-MMS-1/RemoveFromUnitControl-Request.ta.mjs";
import { GetUnitControlAttributes_Request, _decode_GetUnitControlAttributes_Request, _encode_GetUnitControlAttributes_Request } from "../ISO-9506-MMS-1/GetUnitControlAttributes-Request.ta.mjs";
// export { GetUnitControlAttributes_Request, _decode_GetUnitControlAttributes_Request, _encode_GetUnitControlAttributes_Request } from "../ISO-9506-MMS-1/GetUnitControlAttributes-Request.ta.mjs";
import { LoadUnitControlFromFile_Request, _decode_LoadUnitControlFromFile_Request, _encode_LoadUnitControlFromFile_Request } from "../ISO-9506-MMS-1/LoadUnitControlFromFile-Request.ta.mjs";
// export { LoadUnitControlFromFile_Request, _decode_LoadUnitControlFromFile_Request, _encode_LoadUnitControlFromFile_Request } from "../ISO-9506-MMS-1/LoadUnitControlFromFile-Request.ta.mjs";
import { StoreUnitControlToFile_Request, _decode_StoreUnitControlToFile_Request, _encode_StoreUnitControlToFile_Request } from "../ISO-9506-MMS-1/StoreUnitControlToFile-Request.ta.mjs";
// export { StoreUnitControlToFile_Request, _decode_StoreUnitControlToFile_Request, _encode_StoreUnitControlToFile_Request } from "../ISO-9506-MMS-1/StoreUnitControlToFile-Request.ta.mjs";
import { DeleteUnitControl_Request, _decode_DeleteUnitControl_Request, _encode_DeleteUnitControl_Request } from "../ISO-9506-MMS-1/DeleteUnitControl-Request.ta.mjs";
// export { DeleteUnitControl_Request, _decode_DeleteUnitControl_Request, _encode_DeleteUnitControl_Request } from "../ISO-9506-MMS-1/DeleteUnitControl-Request.ta.mjs";
import { DefineEventConditionList_Request, _decode_DefineEventConditionList_Request, _encode_DefineEventConditionList_Request } from "../ISO-9506-MMS-1/DefineEventConditionList-Request.ta.mjs";
// export { DefineEventConditionList_Request, _decode_DefineEventConditionList_Request, _encode_DefineEventConditionList_Request } from "../ISO-9506-MMS-1/DefineEventConditionList-Request.ta.mjs";
import { DeleteEventConditionList_Request, _decode_DeleteEventConditionList_Request, _encode_DeleteEventConditionList_Request } from "../ISO-9506-MMS-1/DeleteEventConditionList-Request.ta.mjs";
// export { DeleteEventConditionList_Request, _decode_DeleteEventConditionList_Request, _encode_DeleteEventConditionList_Request } from "../ISO-9506-MMS-1/DeleteEventConditionList-Request.ta.mjs";
import { AddEventConditionListReference_Request, _decode_AddEventConditionListReference_Request, _encode_AddEventConditionListReference_Request } from "../ISO-9506-MMS-1/AddEventConditionListReference-Request.ta.mjs";
// export { AddEventConditionListReference_Request, _decode_AddEventConditionListReference_Request, _encode_AddEventConditionListReference_Request } from "../ISO-9506-MMS-1/AddEventConditionListReference-Request.ta.mjs";
import { RemoveEventConditionListReference_Request, _decode_RemoveEventConditionListReference_Request, _encode_RemoveEventConditionListReference_Request } from "../ISO-9506-MMS-1/RemoveEventConditionListReference-Request.ta.mjs";
// export { RemoveEventConditionListReference_Request, _decode_RemoveEventConditionListReference_Request, _encode_RemoveEventConditionListReference_Request } from "../ISO-9506-MMS-1/RemoveEventConditionListReference-Request.ta.mjs";
import { GetEventConditionListAttributes_Request, _decode_GetEventConditionListAttributes_Request, _encode_GetEventConditionListAttributes_Request } from "../ISO-9506-MMS-1/GetEventConditionListAttributes-Request.ta.mjs";
// export { GetEventConditionListAttributes_Request, _decode_GetEventConditionListAttributes_Request, _encode_GetEventConditionListAttributes_Request } from "../ISO-9506-MMS-1/GetEventConditionListAttributes-Request.ta.mjs";
import { ReportEventConditionListStatus_Request, _decode_ReportEventConditionListStatus_Request, _encode_ReportEventConditionListStatus_Request } from "../ISO-9506-MMS-1/ReportEventConditionListStatus-Request.ta.mjs";
// export { ReportEventConditionListStatus_Request, _decode_ReportEventConditionListStatus_Request, _encode_ReportEventConditionListStatus_Request } from "../ISO-9506-MMS-1/ReportEventConditionListStatus-Request.ta.mjs";
import { AlterEventConditionListMonitoring_Request, _decode_AlterEventConditionListMonitoring_Request, _encode_AlterEventConditionListMonitoring_Request } from "../ISO-9506-MMS-1/AlterEventConditionListMonitoring-Request.ta.mjs";
// export { AlterEventConditionListMonitoring_Request, _decode_AlterEventConditionListMonitoring_Request, _encode_AlterEventConditionListMonitoring_Request } from "../ISO-9506-MMS-1/AlterEventConditionListMonitoring-Request.ta.mjs";


/**
 * @summary AdditionalService_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalService-Request ::= CHOICE {
 *     vMDStop [0] IMPLICIT VMDStop-Request,
 *     vMDStop [0] IMPLICIT NULL,
 *     vMDReset    [1] IMPLICIT VMDReset-Request,
 *     vMDReset    [1] IMPLICIT NULL,
 *     select  [2] IMPLICIT Select-Request,
 *     select  [2] IMPLICIT NULL,
 *     alterPI [3] IMPLICIT AlterProgramInvocationAttributes-Request,
 *     alterPI [3] IMPLICIT NULL,
 *     initiateUCLoad  [4] IMPLICIT InitiateUnitControlLoad-Request,
 *     initiateUCLoad  [4] IMPLICIT NULL,
 *     uCLoad  [5] IMPLICIT UnitControlLoadSegment-Request,
 *     uCLoad  [5] IMPLICIT NULL,
 *     uCUpload    [6] IMPLICIT UnitControlUpload-Request,
 *     uCUpload    [6] IMPLICIT NULL,
 *     startUC [7] IMPLICIT StartUnitControl-Request,
 *     startUC [7] IMPLICIT NULL,
 *     stopUC  [8] IMPLICIT StopUnitControl-Request,
 *     stopUC  [8] IMPLICIT NULL,
 *     createUC    [9] IMPLICIT CreateUnitControl-Request,
 *     createUC    [9] IMPLICIT NULL,
 *     addToUC [10] IMPLICIT AddToUnitControl-Request,
 *     addToUC [10] IMPLICIT NULL,
 *     removeFromUC    [11] IMPLICIT RemoveFromUnitControl-Request,
 *     removeFromUC    [11] IMPLICIT NULL,
 *     getUCAttributes [12] IMPLICIT GetUnitControlAttributes-Request,
 *     getUCAttributes [12] IMPLICIT NULL,
 *     loadUCFromFile  [13] IMPLICIT LoadUnitControlFromFile-Request,
 *     loadUCFromFile  [13] IMPLICIT NULL,
 *     storeUCToFile   [14] IMPLICIT StoreUnitControlToFile-Request,
 *     storeUCToFile   [14] IMPLICIT NULL,
 *     deleteUC    [15] IMPLICIT DeleteUnitControl-Request,
 *     deleteUC    [15] IMPLICIT NULL,
 *     defineECL   [16] DefineEventConditionList-Request,
 *     defineECL   [16] IMPLICIT NULL,
 *     deleteECL   [17] DeleteEventConditionList-Request,
 *     deleteECL   [17] IMPLICIT NULL,
 *     addECLReference [18] IMPLICIT AddEventConditionListReference-Request,
 *     addECLReference [18] IMPLICIT NULL,
 *     removeECLReference  [19] IMPLICIT RemoveEventConditionListReference-Request,
 *     removeECLReference  [19] IMPLICIT NULL,
 *     getECLAttributes    [20] GetEventConditionListAttributes-Request,
 *     getECLAttributes    [20] IMPLICIT NULL,
 *     reportECLStatus [21] IMPLICIT ReportEventConditionListStatus-Request,
 *     reportECLStatus [21] IMPLICIT NULL,
 *     alterECLMonitoring   [22] IMPLICIT AlterEventConditionListMonitoring-Request,
 *     alterECLMonitoring   [22] IMPLICIT NULL
 * }
 * ```
 */
export
type AdditionalService_Request =
    { vMDStop: VMDStop_Request } /* CHOICE_ALT_ROOT */
    | { vMDStop: NULL } /* CHOICE_ALT_ROOT */
    | { vMDReset: VMDReset_Request } /* CHOICE_ALT_ROOT */
    | { vMDReset: NULL } /* CHOICE_ALT_ROOT */
    | { select: Select_Request } /* CHOICE_ALT_ROOT */
    | { select: NULL } /* CHOICE_ALT_ROOT */
    | { alterPI: AlterProgramInvocationAttributes_Request } /* CHOICE_ALT_ROOT */
    | { alterPI: NULL } /* CHOICE_ALT_ROOT */
    | { initiateUCLoad: InitiateUnitControlLoad_Request } /* CHOICE_ALT_ROOT */
    | { initiateUCLoad: NULL } /* CHOICE_ALT_ROOT */
    | { uCLoad: UnitControlLoadSegment_Request } /* CHOICE_ALT_ROOT */
    | { uCLoad: NULL } /* CHOICE_ALT_ROOT */
    | { uCUpload: UnitControlUpload_Request } /* CHOICE_ALT_ROOT */
    | { uCUpload: NULL } /* CHOICE_ALT_ROOT */
    | { startUC: StartUnitControl_Request } /* CHOICE_ALT_ROOT */
    | { startUC: NULL } /* CHOICE_ALT_ROOT */
    | { stopUC: StopUnitControl_Request } /* CHOICE_ALT_ROOT */
    | { stopUC: NULL } /* CHOICE_ALT_ROOT */
    | { createUC: CreateUnitControl_Request } /* CHOICE_ALT_ROOT */
    | { createUC: NULL } /* CHOICE_ALT_ROOT */
    | { addToUC: AddToUnitControl_Request } /* CHOICE_ALT_ROOT */
    | { addToUC: NULL } /* CHOICE_ALT_ROOT */
    | { removeFromUC: RemoveFromUnitControl_Request } /* CHOICE_ALT_ROOT */
    | { removeFromUC: NULL } /* CHOICE_ALT_ROOT */
    | { getUCAttributes: GetUnitControlAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getUCAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { loadUCFromFile: LoadUnitControlFromFile_Request } /* CHOICE_ALT_ROOT */
    | { loadUCFromFile: NULL } /* CHOICE_ALT_ROOT */
    | { storeUCToFile: StoreUnitControlToFile_Request } /* CHOICE_ALT_ROOT */
    | { storeUCToFile: NULL } /* CHOICE_ALT_ROOT */
    | { deleteUC: DeleteUnitControl_Request } /* CHOICE_ALT_ROOT */
    | { deleteUC: NULL } /* CHOICE_ALT_ROOT */
    | { defineECL: DefineEventConditionList_Request } /* CHOICE_ALT_ROOT */
    | { defineECL: NULL } /* CHOICE_ALT_ROOT */
    | { deleteECL: DeleteEventConditionList_Request } /* CHOICE_ALT_ROOT */
    | { deleteECL: NULL } /* CHOICE_ALT_ROOT */
    | { addECLReference: AddEventConditionListReference_Request } /* CHOICE_ALT_ROOT */
    | { addECLReference: NULL } /* CHOICE_ALT_ROOT */
    | { removeECLReference: RemoveEventConditionListReference_Request } /* CHOICE_ALT_ROOT */
    | { removeECLReference: NULL } /* CHOICE_ALT_ROOT */
    | { getECLAttributes: GetEventConditionListAttributes_Request } /* CHOICE_ALT_ROOT */
    | { getECLAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { reportECLStatus: ReportEventConditionListStatus_Request } /* CHOICE_ALT_ROOT */
    | { reportECLStatus: NULL } /* CHOICE_ALT_ROOT */
    | { alterECLMonitoring: AlterEventConditionListMonitoring_Request } /* CHOICE_ALT_ROOT */
    | { alterECLMonitoring: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AdditionalService_Request: $.ASN1Decoder<AdditionalService_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalService_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalService_Request (el: _Element): AdditionalService_Request {
    if (!_cached_decoder_for_AdditionalService_Request) { _cached_decoder_for_AdditionalService_Request = $._decode_inextensible_choice<AdditionalService_Request>({
    "CONTEXT 0": [ "vMDStop", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<VMDStop_Request>(() => _decode_VMDStop_Request)(el)) ],
    "CONTEXT 1": [ "vMDReset", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<VMDReset_Request>(() => _decode_VMDReset_Request)(el)) ],
    "CONTEXT 2": [ "select", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Select_Request>(() => _decode_Select_Request)(el)) ],
    "CONTEXT 3": [ "alterPI", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<AlterProgramInvocationAttributes_Request>(() => _decode_AlterProgramInvocationAttributes_Request)(el)) ],
    "CONTEXT 4": [ "initiateUCLoad", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<InitiateUnitControlLoad_Request>(() => _decode_InitiateUnitControlLoad_Request)(el)) ],
    "CONTEXT 5": [ "uCLoad", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<UnitControlLoadSegment_Request>(() => _decode_UnitControlLoadSegment_Request)(el)) ],
    "CONTEXT 6": [ "uCUpload", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<UnitControlUpload_Request>(() => _decode_UnitControlUpload_Request)(el)) ],
    "CONTEXT 7": [ "startUC", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<StartUnitControl_Request>(() => _decode_StartUnitControl_Request)(el)) ],
    "CONTEXT 8": [ "stopUC", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<StopUnitControl_Request>(() => _decode_StopUnitControl_Request)(el)) ],
    "CONTEXT 9": [ "createUC", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CreateUnitControl_Request>(() => _decode_CreateUnitControl_Request)(el)) ],
    "CONTEXT 10": [ "addToUC", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<AddToUnitControl_Request>(() => _decode_AddToUnitControl_Request)(el)) ],
    "CONTEXT 11": [ "removeFromUC", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<RemoveFromUnitControl_Request>(() => _decode_RemoveFromUnitControl_Request)(el)) ],
    "CONTEXT 12": [ "getUCAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<GetUnitControlAttributes_Request>(() => _decode_GetUnitControlAttributes_Request)(el)) ],
    "CONTEXT 13": [ "loadUCFromFile", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<LoadUnitControlFromFile_Request>(() => _decode_LoadUnitControlFromFile_Request)(el)) ],
    "CONTEXT 14": [ "storeUCToFile", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<StoreUnitControlToFile_Request>(() => _decode_StoreUnitControlToFile_Request)(el)) ],
    "CONTEXT 15": [ "deleteUC", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteUnitControl_Request>(() => _decode_DeleteUnitControl_Request)(el)) ],
    "CONTEXT 16": [ "defineECL", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<DefineEventConditionList_Request>(() => _decode_DefineEventConditionList_Request)(el)) ],
    "CONTEXT 17": [ "deleteECL", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<DeleteEventConditionList_Request>(() => _decode_DeleteEventConditionList_Request)(el)) ],
    "CONTEXT 18": [ "addECLReference", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<AddEventConditionListReference_Request>(() => _decode_AddEventConditionListReference_Request)(el)) ],
    "CONTEXT 19": [ "removeECLReference", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<RemoveEventConditionListReference_Request>(() => _decode_RemoveEventConditionListReference_Request)(el)) ],
    "CONTEXT 20": [ "getECLAttributes", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<GetEventConditionListAttributes_Request>(() => _decode_GetEventConditionListAttributes_Request)(el)) ],
    "CONTEXT 21": [ "reportECLStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ReportEventConditionListStatus_Request>(() => _decode_ReportEventConditionListStatus_Request)(el)) ],
    "CONTEXT 22": [ "alterECLMonitoring", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<AlterEventConditionListMonitoring_Request>(() => _decode_AlterEventConditionListMonitoring_Request)(el)) ]
}); }
    return _cached_decoder_for_AdditionalService_Request(el);
}

let _cached_encoder_for_AdditionalService_Request: $.ASN1Encoder<AdditionalService_Request> | null = null;

/**
 * @summary Encodes a(n) AdditionalService_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalService_Request, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalService_Request (value: AdditionalService_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalService_Request) { _cached_encoder_for_AdditionalService_Request = $._encode_choice<AdditionalService_Request>({
    "vMDStop": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 0, () => _encode_VMDStop_Request, $.BER)(value, elGetter)),
    "vMDReset": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 1, () => _encode_VMDReset_Request, $.BER)(value, elGetter)),
    "select": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 2, () => _encode_Select_Request, $.BER)(value, elGetter)),
    "alterPI": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 3, () => _encode_AlterProgramInvocationAttributes_Request, $.BER)(value, elGetter)),
    "initiateUCLoad": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 4, () => _encode_InitiateUnitControlLoad_Request, $.BER)(value, elGetter)),
    "uCLoad": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 5, () => _encode_UnitControlLoadSegment_Request, $.BER)(value, elGetter)),
    "uCUpload": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 6, () => _encode_UnitControlUpload_Request, $.BER)(value, elGetter)),
    "startUC": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 7, () => _encode_StartUnitControl_Request, $.BER)(value, elGetter)),
    "stopUC": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 8, () => _encode_StopUnitControl_Request, $.BER)(value, elGetter)),
    "createUC": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 9, () => _encode_CreateUnitControl_Request, $.BER)(value, elGetter)),
    "addToUC": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 10, () => _encode_AddToUnitControl_Request, $.BER)(value, elGetter)),
    "removeFromUC": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 11, () => _encode_RemoveFromUnitControl_Request, $.BER)(value, elGetter)),
    "getUCAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 12, () => _encode_GetUnitControlAttributes_Request, $.BER)(value, elGetter)),
    "loadUCFromFile": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 13, () => _encode_LoadUnitControlFromFile_Request, $.BER)(value, elGetter)),
    "storeUCToFile": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 14, () => _encode_StoreUnitControlToFile_Request, $.BER)(value, elGetter)),
    "deleteUC": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 15, () => _encode_DeleteUnitControl_Request, $.BER)(value, elGetter)),
    "defineECL": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 16, () => _encode_DefineEventConditionList_Request, $.BER)(value, elGetter)),
    "deleteECL": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 17, () => _encode_DeleteEventConditionList_Request, $.BER)(value, elGetter)),
    "addECLReference": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 18, () => _encode_AddEventConditionListReference_Request, $.BER)(value, elGetter)),
    "removeECLReference": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 19, () => _encode_RemoveEventConditionListReference_Request, $.BER)(value, elGetter)),
    "getECLAttributes": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 20, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 20, () => _encode_GetEventConditionListAttributes_Request, $.BER)(value, elGetter)),
    "reportECLStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 21, () => _encode_ReportEventConditionListStatus_Request, $.BER)(value, elGetter)),
    "alterECLMonitoring": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 22, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 22, () => _encode_AlterEventConditionListMonitoring_Request, $.BER)(value, elGetter)),
}, $.BER); }
    return _cached_encoder_for_AdditionalService_Request(value, elGetter);
}


/* eslint-enable */

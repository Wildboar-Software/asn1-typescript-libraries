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
import { VMDStop_Response, _decode_VMDStop_Response, _encode_VMDStop_Response } from "../ISO-9506-MMS-1/VMDStop-Response.ta.mjs";
// export { VMDStop_Response, _decode_VMDStop_Response, _encode_VMDStop_Response } from "../ISO-9506-MMS-1/VMDStop-Response.ta.mjs";
import { VMDReset_Response, _decode_VMDReset_Response, _encode_VMDReset_Response } from "../ISO-9506-MMS-1/VMDReset-Response.ta.mjs";
// export { VMDReset_Response, _decode_VMDReset_Response, _encode_VMDReset_Response } from "../ISO-9506-MMS-1/VMDReset-Response.ta.mjs";
import { Select_Response, _decode_Select_Response, _encode_Select_Response } from "../ISO-9506-MMS-1/Select-Response.ta.mjs";
// export { Select_Response, _decode_Select_Response, _encode_Select_Response } from "../ISO-9506-MMS-1/Select-Response.ta.mjs";
import { AlterProgramInvocationAttributes_Response, _decode_AlterProgramInvocationAttributes_Response, _encode_AlterProgramInvocationAttributes_Response } from "../ISO-9506-MMS-1/AlterProgramInvocationAttributes-Response.ta.mjs";
// export { AlterProgramInvocationAttributes_Response, _decode_AlterProgramInvocationAttributes_Response, _encode_AlterProgramInvocationAttributes_Response } from "../ISO-9506-MMS-1/AlterProgramInvocationAttributes-Response.ta.mjs";
import { InitiateUnitControlLoad_Response, _decode_InitiateUnitControlLoad_Response, _encode_InitiateUnitControlLoad_Response } from "../ISO-9506-MMS-1/InitiateUnitControlLoad-Response.ta.mjs";
// export { InitiateUnitControlLoad_Response, _decode_InitiateUnitControlLoad_Response, _encode_InitiateUnitControlLoad_Response } from "../ISO-9506-MMS-1/InitiateUnitControlLoad-Response.ta.mjs";
import { UnitControlLoadSegment_Response, _decode_UnitControlLoadSegment_Response, _encode_UnitControlLoadSegment_Response } from "../ISO-9506-MMS-1/UnitControlLoadSegment-Response.ta.mjs";
// export { UnitControlLoadSegment_Response, _decode_UnitControlLoadSegment_Response, _encode_UnitControlLoadSegment_Response } from "../ISO-9506-MMS-1/UnitControlLoadSegment-Response.ta.mjs";
import { UnitControlUpload_Response, _decode_UnitControlUpload_Response, _encode_UnitControlUpload_Response } from "../ISO-9506-MMS-1/UnitControlUpload-Response.ta.mjs";
// export { UnitControlUpload_Response, _decode_UnitControlUpload_Response, _encode_UnitControlUpload_Response } from "../ISO-9506-MMS-1/UnitControlUpload-Response.ta.mjs";
import { StartUnitControl_Response, _decode_StartUnitControl_Response, _encode_StartUnitControl_Response } from "../ISO-9506-MMS-1/StartUnitControl-Response.ta.mjs";
// export { StartUnitControl_Response, _decode_StartUnitControl_Response, _encode_StartUnitControl_Response } from "../ISO-9506-MMS-1/StartUnitControl-Response.ta.mjs";
import { StopUnitControl_Response, _decode_StopUnitControl_Response, _encode_StopUnitControl_Response } from "../ISO-9506-MMS-1/StopUnitControl-Response.ta.mjs";
// export { StopUnitControl_Response, _decode_StopUnitControl_Response, _encode_StopUnitControl_Response } from "../ISO-9506-MMS-1/StopUnitControl-Response.ta.mjs";
import { CreateUnitControl_Response, _decode_CreateUnitControl_Response, _encode_CreateUnitControl_Response } from "../ISO-9506-MMS-1/CreateUnitControl-Response.ta.mjs";
// export { CreateUnitControl_Response, _decode_CreateUnitControl_Response, _encode_CreateUnitControl_Response } from "../ISO-9506-MMS-1/CreateUnitControl-Response.ta.mjs";
import { AddToUnitControl_Response, _decode_AddToUnitControl_Response, _encode_AddToUnitControl_Response } from "../ISO-9506-MMS-1/AddToUnitControl-Response.ta.mjs";
// export { AddToUnitControl_Response, _decode_AddToUnitControl_Response, _encode_AddToUnitControl_Response } from "../ISO-9506-MMS-1/AddToUnitControl-Response.ta.mjs";
import { RemoveFromUnitControl_Response, _decode_RemoveFromUnitControl_Response, _encode_RemoveFromUnitControl_Response } from "../ISO-9506-MMS-1/RemoveFromUnitControl-Response.ta.mjs";
// export { RemoveFromUnitControl_Response, _decode_RemoveFromUnitControl_Response, _encode_RemoveFromUnitControl_Response } from "../ISO-9506-MMS-1/RemoveFromUnitControl-Response.ta.mjs";
import { GetUnitControlAttributes_Response, _decode_GetUnitControlAttributes_Response, _encode_GetUnitControlAttributes_Response } from "../ISO-9506-MMS-1/GetUnitControlAttributes-Response.ta.mjs";
// export { GetUnitControlAttributes_Response, _decode_GetUnitControlAttributes_Response, _encode_GetUnitControlAttributes_Response } from "../ISO-9506-MMS-1/GetUnitControlAttributes-Response.ta.mjs";
import { LoadUnitControlFromFile_Response, _decode_LoadUnitControlFromFile_Response, _encode_LoadUnitControlFromFile_Response } from "../ISO-9506-MMS-1/LoadUnitControlFromFile-Response.ta.mjs";
// export { LoadUnitControlFromFile_Response, _decode_LoadUnitControlFromFile_Response, _encode_LoadUnitControlFromFile_Response } from "../ISO-9506-MMS-1/LoadUnitControlFromFile-Response.ta.mjs";
import { StoreUnitControlToFile_Response, _decode_StoreUnitControlToFile_Response, _encode_StoreUnitControlToFile_Response } from "../ISO-9506-MMS-1/StoreUnitControlToFile-Response.ta.mjs";
// export { StoreUnitControlToFile_Response, _decode_StoreUnitControlToFile_Response, _encode_StoreUnitControlToFile_Response } from "../ISO-9506-MMS-1/StoreUnitControlToFile-Response.ta.mjs";
import { DeleteUnitControl_Response, _decode_DeleteUnitControl_Response, _encode_DeleteUnitControl_Response } from "../ISO-9506-MMS-1/DeleteUnitControl-Response.ta.mjs";
// export { DeleteUnitControl_Response, _decode_DeleteUnitControl_Response, _encode_DeleteUnitControl_Response } from "../ISO-9506-MMS-1/DeleteUnitControl-Response.ta.mjs";
import { DefineEventConditionList_Response, _decode_DefineEventConditionList_Response, _encode_DefineEventConditionList_Response } from "../ISO-9506-MMS-1/DefineEventConditionList-Response.ta.mjs";
// export { DefineEventConditionList_Response, _decode_DefineEventConditionList_Response, _encode_DefineEventConditionList_Response } from "../ISO-9506-MMS-1/DefineEventConditionList-Response.ta.mjs";
import { DeleteEventConditionList_Response, _decode_DeleteEventConditionList_Response, _encode_DeleteEventConditionList_Response } from "../ISO-9506-MMS-1/DeleteEventConditionList-Response.ta.mjs";
// export { DeleteEventConditionList_Response, _decode_DeleteEventConditionList_Response, _encode_DeleteEventConditionList_Response } from "../ISO-9506-MMS-1/DeleteEventConditionList-Response.ta.mjs";
import { AddEventConditionListReference_Response, _decode_AddEventConditionListReference_Response, _encode_AddEventConditionListReference_Response } from "../ISO-9506-MMS-1/AddEventConditionListReference-Response.ta.mjs";
// export { AddEventConditionListReference_Response, _decode_AddEventConditionListReference_Response, _encode_AddEventConditionListReference_Response } from "../ISO-9506-MMS-1/AddEventConditionListReference-Response.ta.mjs";
import { RemoveEventConditionListReference_Response, _decode_RemoveEventConditionListReference_Response, _encode_RemoveEventConditionListReference_Response } from "../ISO-9506-MMS-1/RemoveEventConditionListReference-Response.ta.mjs";
// export { RemoveEventConditionListReference_Response, _decode_RemoveEventConditionListReference_Response, _encode_RemoveEventConditionListReference_Response } from "../ISO-9506-MMS-1/RemoveEventConditionListReference-Response.ta.mjs";
import { GetEventConditionListAttributes_Response, _decode_GetEventConditionListAttributes_Response, _encode_GetEventConditionListAttributes_Response } from "../ISO-9506-MMS-1/GetEventConditionListAttributes-Response.ta.mjs";
// export { GetEventConditionListAttributes_Response, _decode_GetEventConditionListAttributes_Response, _encode_GetEventConditionListAttributes_Response } from "../ISO-9506-MMS-1/GetEventConditionListAttributes-Response.ta.mjs";
import { ReportEventConditionListStatus_Response, _decode_ReportEventConditionListStatus_Response, _encode_ReportEventConditionListStatus_Response } from "../ISO-9506-MMS-1/ReportEventConditionListStatus-Response.ta.mjs";
// export { ReportEventConditionListStatus_Response, _decode_ReportEventConditionListStatus_Response, _encode_ReportEventConditionListStatus_Response } from "../ISO-9506-MMS-1/ReportEventConditionListStatus-Response.ta.mjs";
import { AlterEventConditionListMonitoring_Response, _decode_AlterEventConditionListMonitoring_Response, _encode_AlterEventConditionListMonitoring_Response } from "../ISO-9506-MMS-1/AlterEventConditionListMonitoring-Response.ta.mjs";
// export { AlterEventConditionListMonitoring_Response, _decode_AlterEventConditionListMonitoring_Response, _encode_AlterEventConditionListMonitoring_Response } from "../ISO-9506-MMS-1/AlterEventConditionListMonitoring-Response.ta.mjs";

import { RejectPDU, _decode_RejectPDU, _encode_RejectPDU } from "../ISO-9506-MMS-1/RejectPDU.ta.mjs";
// export { RejectPDU, _decode_RejectPDU, _encode_RejectPDU } from "../ISO-9506-MMS-1/RejectPDU.ta.mjs";
import { decodeWithRejectPDUFallback, encodeWithRejectPDUFallback } from "../../utils/decodeWithRejectPDUFallback.mjs";

/**
 * @summary AdditionalService_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalService-Response ::= CHOICE {
 *     vMDStop              [0] IMPLICIT VMDStop-Response,
 *     vMDStop              [0] IMPLICIT RejectPDU,
 *     vMDReset             [1] IMPLICIT VMDReset-Response,
 *     vMDReset             [1] IMPLICIT RejectPDU,
 *     select               [2] IMPLICIT Select-Response,
 *     select               [2] IMPLICIT RejectPDU,
 *     alterPI              [3] IMPLICIT AlterProgramInvocationAttributes-Response,
 *     alterPI              [3] IMPLICIT RejectPDU,
 *     initiateUCLoad       [4] IMPLICIT InitiateUnitControlLoad-Response,
 *     initiateUCLoad       [4] IMPLICIT RejectPDU,
 *     uCLoad               [5] IMPLICIT UnitControlLoadSegment-Response,
 *     uCLoad               [5] IMPLICIT RejectPDU,
 *     uCUpload             [6] IMPLICIT UnitControlUpload-Response,
 *     uCUpload             [6] IMPLICIT RejectPDU,
 *     startUC              [7] IMPLICIT StartUnitControl-Response,
 *     startUC              [7] IMPLICIT RejectPDU,
 *     stopUC               [8] IMPLICIT StopUnitControl-Response,
 *     stopUC               [8] IMPLICIT RejectPDU,
 *     createUC             [9] IMPLICIT CreateUnitControl-Response,
 *     createUC             [9] IMPLICIT RejectPDU,
 *     addToUC              [10] IMPLICIT AddToUnitControl-Response,
 *     addToUC              [10] IMPLICIT RejectPDU,
 *     removeFromUC         [11] IMPLICIT RemoveFromUnitControl-Response,
 *     removeFromUC         [11] IMPLICIT RejectPDU,
 *     getUCAttributes      [12] IMPLICIT GetUnitControlAttributes-Response,
 *     getUCAttributes      [12] IMPLICIT RejectPDU,
 *     loadUCFromFile       [13] IMPLICIT LoadUnitControlFromFile-Response,
 *     loadUCFromFile       [13] IMPLICIT RejectPDU,
 *     storeUCToFile        [14] IMPLICIT StoreUnitControlToFile-Response,
 *     storeUCToFile        [14] IMPLICIT RejectPDU,
 *     deleteUC             [15] IMPLICIT DeleteUnitControl-Response,
 *     deleteUC             [15] IMPLICIT RejectPDU,
 *     defineECL            [16] IMPLICIT DefineEventConditionList-Response,
 *     defineECL            [16] IMPLICIT RejectPDU,
 *     deleteECL            [17] IMPLICIT DeleteEventConditionList-Response,
 *     deleteECL            [17] IMPLICIT RejectPDU,
 *     addECLReference      [18] IMPLICIT AddEventConditionListReference-Response,
 *     addECLReference      [18] IMPLICIT RejectPDU,
 *     removeECLReference   [19] IMPLICIT RemoveEventConditionListReference-Response,
 *     removeECLReference   [19] IMPLICIT RejectPDU,
 *     getECLAttributes     [20] IMPLICIT GetEventConditionListAttributes-Response,
 *     getECLAttributes     [20] IMPLICIT RejectPDU,
 *     reportECLStatus      [21] IMPLICIT ReportEventConditionListStatus-Response,
 *     reportECLStatus      [21] IMPLICIT RejectPDU,
 *     alterECLMonitoring   [22] IMPLICIT AlterEventConditionListMonitoring-Response,
 *     alterECLMonitoring   [22] IMPLICIT RejectPDU
 * }
 * ```
 */
export
type AdditionalService_Response =
    { vMDStop: VMDStop_Response } /* CHOICE_ALT_ROOT */
    | { vMDStop: RejectPDU } /* CHOICE_ALT_ROOT */
    | { vMDReset: _Element } /* CHOICE_ALT_ROOT */
    | { select: Select_Response } /* CHOICE_ALT_ROOT */
    | { select: RejectPDU } /* CHOICE_ALT_ROOT */
    | { alterPI: AlterProgramInvocationAttributes_Response } /* CHOICE_ALT_ROOT */
    | { alterPI: RejectPDU } /* CHOICE_ALT_ROOT */
    | { initiateUCLoad: InitiateUnitControlLoad_Response } /* CHOICE_ALT_ROOT */
    | { initiateUCLoad: RejectPDU } /* CHOICE_ALT_ROOT */
    | { uCLoad: _Element } /* CHOICE_ALT_ROOT */
    | { uCUpload: _Element } /* CHOICE_ALT_ROOT */
    | { startUC: StartUnitControl_Response } /* CHOICE_ALT_ROOT */
    | { startUC: RejectPDU } /* CHOICE_ALT_ROOT */
    | { stopUC: StopUnitControl_Response } /* CHOICE_ALT_ROOT */
    | { stopUC: RejectPDU } /* CHOICE_ALT_ROOT */
    | { createUC: CreateUnitControl_Response } /* CHOICE_ALT_ROOT */
    | { createUC: RejectPDU } /* CHOICE_ALT_ROOT */
    | { addToUC: AddToUnitControl_Response } /* CHOICE_ALT_ROOT */
    | { addToUC: RejectPDU } /* CHOICE_ALT_ROOT */
    | { removeFromUC: RemoveFromUnitControl_Response } /* CHOICE_ALT_ROOT */
    | { removeFromUC: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getUCAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { loadUCFromFile: LoadUnitControlFromFile_Response } /* CHOICE_ALT_ROOT */
    | { loadUCFromFile: RejectPDU } /* CHOICE_ALT_ROOT */
    | { storeUCToFile: StoreUnitControlToFile_Response } /* CHOICE_ALT_ROOT */
    | { storeUCToFile: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteUC: DeleteUnitControl_Response } /* CHOICE_ALT_ROOT */
    | { deleteUC: RejectPDU } /* CHOICE_ALT_ROOT */
    | { defineECL: DefineEventConditionList_Response } /* CHOICE_ALT_ROOT */
    | { defineECL: RejectPDU } /* CHOICE_ALT_ROOT */
    | { deleteECL: DeleteEventConditionList_Response } /* CHOICE_ALT_ROOT */
    | { deleteECL: RejectPDU } /* CHOICE_ALT_ROOT */
    | { addECLReference: AddEventConditionListReference_Response } /* CHOICE_ALT_ROOT */
    | { addECLReference: RejectPDU } /* CHOICE_ALT_ROOT */
    | { removeECLReference: RemoveEventConditionListReference_Response } /* CHOICE_ALT_ROOT */
    | { removeECLReference: RejectPDU } /* CHOICE_ALT_ROOT */
    | { getECLAttributes: _Element } /* CHOICE_ALT_ROOT */
    | { reportECLStatus: _Element } /* CHOICE_ALT_ROOT */
    | { alterECLMonitoring: AlterEventConditionListMonitoring_Response } /* CHOICE_ALT_ROOT */
    | { alterECLMonitoring: RejectPDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AdditionalService_Response: $.ASN1Decoder<AdditionalService_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalService_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalService_Response (el: _Element): AdditionalService_Response {
    if (!_cached_decoder_for_AdditionalService_Response) { _cached_decoder_for_AdditionalService_Response = $._decode_inextensible_choice<AdditionalService_Response>({
    "CONTEXT 0": [ "vMDStop", $._decode_implicit<VMDStop_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_VMDStop_Response)) ],
    "CONTEXT 1": [ "vMDReset", $._decodeAny ],
    "CONTEXT 2": [ "select", $._decode_implicit<Select_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_Select_Response)) ],
    "CONTEXT 3": [ "alterPI", $._decode_implicit<AlterProgramInvocationAttributes_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_AlterProgramInvocationAttributes_Response)) ],
    "CONTEXT 4": [ "initiateUCLoad", $._decode_implicit<InitiateUnitControlLoad_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_InitiateUnitControlLoad_Response)) ],
    "CONTEXT 5": [ "uCLoad", $._decodeAny ],
    "CONTEXT 6": [ "uCUpload", $._decodeAny ],
    "CONTEXT 7": [ "startUC", $._decode_implicit<StartUnitControl_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_StartUnitControl_Response)) ],
    "CONTEXT 8": [ "stopUC", $._decode_implicit<StopUnitControl_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_StopUnitControl_Response)) ],
    "CONTEXT 9": [ "createUC", $._decode_implicit<CreateUnitControl_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_CreateUnitControl_Response)) ],
    "CONTEXT 10": [ "addToUC", $._decode_implicit<AddToUnitControl_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_AddToUnitControl_Response)) ],
    "CONTEXT 11": [ "removeFromUC", $._decode_implicit<RemoveFromUnitControl_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_RemoveFromUnitControl_Response)) ],
    "CONTEXT 12": [ "getUCAttributes", $._decodeAny ],
    "CONTEXT 13": [ "loadUCFromFile", $._decode_implicit<LoadUnitControlFromFile_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_LoadUnitControlFromFile_Response)) ],
    "CONTEXT 14": [ "storeUCToFile", $._decode_implicit<StoreUnitControlToFile_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_StoreUnitControlToFile_Response)) ],
    "CONTEXT 15": [ "deleteUC", $._decode_implicit<DeleteUnitControl_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteUnitControl_Response)) ],
    "CONTEXT 16": [ "defineECL", $._decode_implicit<DefineEventConditionList_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DefineEventConditionList_Response)) ],
    "CONTEXT 17": [ "deleteECL", $._decode_implicit<DeleteEventConditionList_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_DeleteEventConditionList_Response)) ],
    "CONTEXT 18": [ "addECLReference", $._decode_implicit<AddEventConditionListReference_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_AddEventConditionListReference_Response)) ],
    "CONTEXT 19": [ "removeECLReference", $._decode_implicit<RemoveEventConditionListReference_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_RemoveEventConditionListReference_Response)) ],
    "CONTEXT 20": [ "getECLAttributes", $._decodeAny ],
    "CONTEXT 21": [ "reportECLStatus", $._decodeAny ],
    "CONTEXT 22": [ "alterECLMonitoring", $._decode_implicit<AlterEventConditionListMonitoring_Response | RejectPDU>(() => (el: _Element) => decodeWithRejectPDUFallback(el, _decode_AlterEventConditionListMonitoring_Response)) ],
}); }
    return _cached_decoder_for_AdditionalService_Response(el);
}

let _cached_encoder_for_AdditionalService_Response: $.ASN1Encoder<AdditionalService_Response> | null = null;

/**
 * @summary Encodes a(n) AdditionalService_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalService_Response, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalService_Response (value: AdditionalService_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalService_Response) { _cached_encoder_for_AdditionalService_Response = $._encode_choice<AdditionalService_Response>({
    "vMDStop": encodeWithRejectPDUFallback(0, _encode_VMDStop_Response),
    "vMDReset": $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER),
    "select": encodeWithRejectPDUFallback(2, _encode_Select_Response),
    "alterPI": encodeWithRejectPDUFallback(3, _encode_AlterProgramInvocationAttributes_Response),
    "initiateUCLoad": encodeWithRejectPDUFallback(4, _encode_InitiateUnitControlLoad_Response),
    "uCLoad": $._encode_implicit(_TagClass.context, 5, () => $._encodeAny, $.BER),
    "uCUpload": $._encode_implicit(_TagClass.context, 6, () => $._encodeAny, $.BER),
    "startUC": encodeWithRejectPDUFallback(7, _encode_StartUnitControl_Response),
    "stopUC": encodeWithRejectPDUFallback(8, _encode_StopUnitControl_Response),
    "createUC": encodeWithRejectPDUFallback(9, _encode_CreateUnitControl_Response),
    "addToUC": encodeWithRejectPDUFallback(10, _encode_AddToUnitControl_Response),
    "removeFromUC": encodeWithRejectPDUFallback(11, _encode_RemoveFromUnitControl_Response),
    "getUCAttributes": $._encode_implicit(_TagClass.context, 12, () => $._encodeAny, $.BER),
    "loadUCFromFile": encodeWithRejectPDUFallback(13, _encode_LoadUnitControlFromFile_Response),
    "storeUCToFile": encodeWithRejectPDUFallback(14, _encode_StoreUnitControlToFile_Response),
    "deleteUC": encodeWithRejectPDUFallback(15, _encode_DeleteUnitControl_Response),
    "defineECL": encodeWithRejectPDUFallback(16, _encode_DefineEventConditionList_Response),
    "deleteECL": encodeWithRejectPDUFallback(17, _encode_DeleteEventConditionList_Response),
    "addECLReference": encodeWithRejectPDUFallback(18, _encode_AddEventConditionListReference_Response),
    "removeECLReference": encodeWithRejectPDUFallback(19, _encode_RemoveEventConditionListReference_Response),
    "getECLAttributes": $._encode_implicit(_TagClass.context, 20, () => $._encodeAny, $.BER),
    "reportECLStatus": $._encode_implicit(_TagClass.context, 21, () => $._encodeAny, $.BER),
    "alterECLMonitoring": encodeWithRejectPDUFallback(22, _encode_AlterEventConditionListMonitoring_Response),
}, $.BER); }
    return _cached_encoder_for_AdditionalService_Response(value, elGetter);
}


/* eslint-enable */

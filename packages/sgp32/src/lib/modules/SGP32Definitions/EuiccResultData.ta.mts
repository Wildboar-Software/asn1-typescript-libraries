/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EnableProfileResult, _decode_EnableProfileResult, _encode_EnableProfileResult } from "../SGP32Definitions/EnableProfileResult.ta.mjs";
// export { EnableProfileResult, EnableProfileResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, EnableProfileResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, EnableProfileResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, EnableProfileResult_disallowedByPolicy /* IMPORTED_LONG_NAMED_INTEGER */, EnableProfileResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, EnableProfileResult_rollbackNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, EnableProfileResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_EnableProfileResult, _encode_EnableProfileResult } from "../SGP32Definitions/EnableProfileResult.ta.mjs";
import { DisableProfileResult, _decode_DisableProfileResult, _encode_DisableProfileResult } from "../SGP32Definitions/DisableProfileResult.ta.mjs";
// export { DisableProfileResult, DisableProfileResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, DisableProfileResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, DisableProfileResult_profileNotInEnabledState /* IMPORTED_LONG_NAMED_INTEGER */, profileNotInEnabledState /* IMPORTED_SHORT_NAMED_INTEGER */, DisableProfileResult_disallowedByPolicy /* IMPORTED_LONG_NAMED_INTEGER */, DisableProfileResult_catBusy /* IMPORTED_LONG_NAMED_INTEGER */, DisableProfileResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_DisableProfileResult, _encode_DisableProfileResult } from "../SGP32Definitions/DisableProfileResult.ta.mjs";
import { DeleteProfileResult, _decode_DeleteProfileResult, _encode_DeleteProfileResult } from "../SGP32Definitions/DeleteProfileResult.ta.mjs";
// export { DeleteProfileResult, DeleteProfileResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, DeleteProfileResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, DeleteProfileResult_profileNotInDisabledState /* IMPORTED_LONG_NAMED_INTEGER */, DeleteProfileResult_disallowedByPolicy /* IMPORTED_LONG_NAMED_INTEGER */, DeleteProfileResult_rollbackNotAvailable /* IMPORTED_LONG_NAMED_INTEGER */, DeleteProfileResult_returnFallbackProfile /* IMPORTED_LONG_NAMED_INTEGER */, returnFallbackProfile /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteProfileResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_DeleteProfileResult, _encode_DeleteProfileResult } from "../SGP32Definitions/DeleteProfileResult.ta.mjs";
import { ProfileInfoListResponse, _decode_ProfileInfoListResponse, _encode_ProfileInfoListResponse } from "../SGP32Definitions/ProfileInfoListResponse.ta.mjs";
// export { ProfileInfoListResponse, _decode_ProfileInfoListResponse, _encode_ProfileInfoListResponse } from "../SGP32Definitions/ProfileInfoListResponse.ta.mjs";
import { RulesAuthorisationTable, _decode_RulesAuthorisationTable, _encode_RulesAuthorisationTable } from "../RSPDefinitions/RulesAuthorisationTable.ta.mjs";
// export { RulesAuthorisationTable, _decode_RulesAuthorisationTable, _encode_RulesAuthorisationTable } from "../RSPDefinitions/RulesAuthorisationTable.ta.mjs";
import { ConfigureImmediateEnableResult, _decode_ConfigureImmediateEnableResult, _encode_ConfigureImmediateEnableResult } from "../SGP32Definitions/ConfigureImmediateEnableResult.ta.mjs";
// export { ConfigureImmediateEnableResult, ConfigureImmediateEnableResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, ConfigureImmediateEnableResult_insufficientMemory /* IMPORTED_LONG_NAMED_INTEGER */, insufficientMemory /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigureImmediateEnableResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, ConfigureImmediateEnableResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_ConfigureImmediateEnableResult, _encode_ConfigureImmediateEnableResult } from "../SGP32Definitions/ConfigureImmediateEnableResult.ta.mjs";
import { AddEimResult, _decode_AddEimResult, _encode_AddEimResult } from "../SGP32Definitions/AddEimResult.ta.mjs";
// export { AddEimResult, _decode_AddEimResult, _encode_AddEimResult } from "../SGP32Definitions/AddEimResult.ta.mjs";
import { DeleteEimResult, _decode_DeleteEimResult, _encode_DeleteEimResult } from "../SGP32Definitions/DeleteEimResult.ta.mjs";
// export { DeleteEimResult, DeleteEimResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, DeleteEimResult_eimNotFound /* IMPORTED_LONG_NAMED_INTEGER */, DeleteEimResult_lastEimDeleted /* IMPORTED_LONG_NAMED_INTEGER */, lastEimDeleted /* IMPORTED_SHORT_NAMED_INTEGER */, DeleteEimResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, DeleteEimResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_DeleteEimResult, _encode_DeleteEimResult } from "../SGP32Definitions/DeleteEimResult.ta.mjs";
import { UpdateEimResult, _decode_UpdateEimResult, _encode_UpdateEimResult } from "../SGP32Definitions/UpdateEimResult.ta.mjs";
// export { UpdateEimResult, UpdateEimResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, UpdateEimResult_eimNotFound /* IMPORTED_LONG_NAMED_INTEGER */, UpdateEimResult_ciPKUnknown /* IMPORTED_LONG_NAMED_INTEGER */, ciPKUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateEimResult_counterValueOutOfRange /* IMPORTED_LONG_NAMED_INTEGER */, counterValueOutOfRange /* IMPORTED_SHORT_NAMED_INTEGER */, UpdateEimResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, UpdateEimResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_UpdateEimResult, _encode_UpdateEimResult } from "../SGP32Definitions/UpdateEimResult.ta.mjs";
import { ListEimResult, _decode_ListEimResult, _encode_ListEimResult } from "../SGP32Definitions/ListEimResult.ta.mjs";
// export { ListEimResult, _decode_ListEimResult, _encode_ListEimResult } from "../SGP32Definitions/ListEimResult.ta.mjs";
import { RollbackProfileResult, _decode_RollbackProfileResult, _encode_RollbackProfileResult } from "../SGP32Definitions/RollbackProfileResult.ta.mjs";
// export { RollbackProfileResult, RollbackProfileResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, RollbackProfileResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_RollbackProfileResult, _encode_RollbackProfileResult } from "../SGP32Definitions/RollbackProfileResult.ta.mjs";
import { SetFallbackAttributeResult, _decode_SetFallbackAttributeResult, _encode_SetFallbackAttributeResult } from "../SGP32Definitions/SetFallbackAttributeResult.ta.mjs";
// export { SetFallbackAttributeResult, SetFallbackAttributeResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, SetFallbackAttributeResult_iccidOrAidNotFound /* IMPORTED_LONG_NAMED_INTEGER */, SetFallbackAttributeResult_fallbackNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, fallbackNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, SetFallbackAttributeResult_fallbackProfileEnabled /* IMPORTED_LONG_NAMED_INTEGER */, SetFallbackAttributeResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_SetFallbackAttributeResult, _encode_SetFallbackAttributeResult } from "../SGP32Definitions/SetFallbackAttributeResult.ta.mjs";
import { UnsetFallbackAttributeResult, _decode_UnsetFallbackAttributeResult, _encode_UnsetFallbackAttributeResult } from "../SGP32Definitions/UnsetFallbackAttributeResult.ta.mjs";
// export { UnsetFallbackAttributeResult, UnsetFallbackAttributeResult_ok /* IMPORTED_LONG_NAMED_INTEGER */, UnsetFallbackAttributeResult_noFallbackAttribute /* IMPORTED_LONG_NAMED_INTEGER */, noFallbackAttribute /* IMPORTED_SHORT_NAMED_INTEGER */, UnsetFallbackAttributeResult_fallbackProfileEnabled /* IMPORTED_LONG_NAMED_INTEGER */, UnsetFallbackAttributeResult_commandError /* IMPORTED_LONG_NAMED_INTEGER */, UnsetFallbackAttributeResult_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_UnsetFallbackAttributeResult, _encode_UnsetFallbackAttributeResult } from "../SGP32Definitions/UnsetFallbackAttributeResult.ta.mjs";
import { EuiccResultData_processingTerminated, _decode_EuiccResultData_processingTerminated, _encode_EuiccResultData_processingTerminated } from "../SGP32Definitions/EuiccResultData-processingTerminated.ta.mjs";
// export { EuiccResultData_processingTerminated, EuiccResultData_processingTerminated_resultSizeOverflow /* IMPORTED_LONG_NAMED_INTEGER */, resultSizeOverflow /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccResultData_processingTerminated_unknownOrDamagedCommand /* IMPORTED_LONG_NAMED_INTEGER */, unknownOrDamagedCommand /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccResultData_processingTerminated_interruption /* IMPORTED_LONG_NAMED_INTEGER */, interruption /* IMPORTED_SHORT_NAMED_INTEGER */, EuiccResultData_processingTerminated_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, _decode_EuiccResultData_processingTerminated, _encode_EuiccResultData_processingTerminated } from "../SGP32Definitions/EuiccResultData-processingTerminated.ta.mjs";
import { SetDefaultDpAddressResponse, _decode_SetDefaultDpAddressResponse, _encode_SetDefaultDpAddressResponse } from "../SGP32Definitions/SetDefaultDpAddressResponse.ta.mjs";
// export { SetDefaultDpAddressResponse, _decode_SetDefaultDpAddressResponse, _encode_SetDefaultDpAddressResponse } from "../SGP32Definitions/SetDefaultDpAddressResponse.ta.mjs";


/**
 * @summary EuiccResultData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccResultData  ::=  CHOICE {
 *     enableResult [3] EnableProfileResult, 
 *     disableResult [4] DisableProfileResult, 
 *     deleteResult [5] DeleteProfileResult, 
 *     listProfileInfoResult [45] ProfileInfoListResponse, 
 *     getRATResult [6] RulesAuthorisationTable, -- see SGP.22
 *     configureImmediateEnableResult [7] ConfigureImmediateEnableResult,
 *     addEimResult [8] AddEimResult,
 *     deleteEimResult [9] DeleteEimResult,
 *     updateEimResult [10] UpdateEimResult,
 *     listEimResult [11] ListEimResult,
 *     rollbackResult [12] RollbackProfileResult,
 *     setFallbackAttributeResult [13] SetFallbackAttributeResult,
 *     unsetFallbackAttributeResult [14] UnsetFallbackAttributeResult,
 *     processingTerminated INTEGER {
 *         resultSizeOverflow(1),
 *         unknownOrDamagedCommand(2),
 *         interruption(3),
 *         undefinedError(127)
 *     },
 *     setDefaultDpAddressResult [101] SetDefaultDpAddressResponse
 * }
 * ```
 */
export
type EuiccResultData =
    { enableResult: EnableProfileResult } /* CHOICE_ALT_ROOT */
    | { disableResult: DisableProfileResult } /* CHOICE_ALT_ROOT */
    | { deleteResult: DeleteProfileResult } /* CHOICE_ALT_ROOT */
    | { listProfileInfoResult: ProfileInfoListResponse } /* CHOICE_ALT_ROOT */
    | { getRATResult: RulesAuthorisationTable } /* CHOICE_ALT_ROOT */
    | { configureImmediateEnableResult: ConfigureImmediateEnableResult } /* CHOICE_ALT_ROOT */
    | { addEimResult: AddEimResult } /* CHOICE_ALT_ROOT */
    | { deleteEimResult: DeleteEimResult } /* CHOICE_ALT_ROOT */
    | { updateEimResult: UpdateEimResult } /* CHOICE_ALT_ROOT */
    | { listEimResult: ListEimResult } /* CHOICE_ALT_ROOT */
    | { rollbackResult: RollbackProfileResult } /* CHOICE_ALT_ROOT */
    | { setFallbackAttributeResult: SetFallbackAttributeResult } /* CHOICE_ALT_ROOT */
    | { unsetFallbackAttributeResult: UnsetFallbackAttributeResult } /* CHOICE_ALT_ROOT */
    | { processingTerminated: EuiccResultData_processingTerminated } /* CHOICE_ALT_ROOT */
    | { setDefaultDpAddressResult: SetDefaultDpAddressResponse } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EuiccResultData: $.ASN1Decoder<EuiccResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccResultData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccResultData (el: _Element): EuiccResultData {
    if (!_cached_decoder_for_EuiccResultData) { _cached_decoder_for_EuiccResultData = $._decode_inextensible_choice<EuiccResultData>({
    "CONTEXT 3": [ "enableResult", $._decode_implicit<EnableProfileResult>(() => _decode_EnableProfileResult) ],
    "CONTEXT 4": [ "disableResult", $._decode_implicit<DisableProfileResult>(() => _decode_DisableProfileResult) ],
    "CONTEXT 5": [ "deleteResult", $._decode_implicit<DeleteProfileResult>(() => _decode_DeleteProfileResult) ],
    "CONTEXT 45": [ "listProfileInfoResult", $._decode_implicit<ProfileInfoListResponse>(() => _decode_ProfileInfoListResponse) ],
    "CONTEXT 6": [ "getRATResult", $._decode_implicit<RulesAuthorisationTable>(() => _decode_RulesAuthorisationTable) ],
    "CONTEXT 7": [ "configureImmediateEnableResult", $._decode_implicit<ConfigureImmediateEnableResult>(() => _decode_ConfigureImmediateEnableResult) ],
    "CONTEXT 8": [ "addEimResult", $._decode_explicit<AddEimResult>(() => _decode_AddEimResult) ],
    "CONTEXT 9": [ "deleteEimResult", $._decode_implicit<DeleteEimResult>(() => _decode_DeleteEimResult) ],
    "CONTEXT 10": [ "updateEimResult", $._decode_implicit<UpdateEimResult>(() => _decode_UpdateEimResult) ],
    "CONTEXT 11": [ "listEimResult", $._decode_explicit<ListEimResult>(() => _decode_ListEimResult) ],
    "CONTEXT 12": [ "rollbackResult", $._decode_implicit<RollbackProfileResult>(() => _decode_RollbackProfileResult) ],
    "CONTEXT 13": [ "setFallbackAttributeResult", $._decode_implicit<SetFallbackAttributeResult>(() => _decode_SetFallbackAttributeResult) ],
    "CONTEXT 14": [ "unsetFallbackAttributeResult", $._decode_implicit<UnsetFallbackAttributeResult>(() => _decode_UnsetFallbackAttributeResult) ],
    "UNIVERSAL 2": [ "processingTerminated", _decode_EuiccResultData_processingTerminated ],
    "CONTEXT 101": [ "setDefaultDpAddressResult", $._decode_implicit<SetDefaultDpAddressResponse>(() => _decode_SetDefaultDpAddressResponse) ]
}); }
    return _cached_decoder_for_EuiccResultData(el);
}

let _cached_encoder_for_EuiccResultData: $.ASN1Encoder<EuiccResultData> | null = null;

/**
 * @summary Encodes a(n) EuiccResultData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccResultData, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccResultData (value: EuiccResultData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccResultData) { _cached_encoder_for_EuiccResultData = $._encode_choice<EuiccResultData>({
    "enableResult": $._encode_implicit(_TagClass.context, 3, () => _encode_EnableProfileResult, $.BER),
    "disableResult": $._encode_implicit(_TagClass.context, 4, () => _encode_DisableProfileResult, $.BER),
    "deleteResult": $._encode_implicit(_TagClass.context, 5, () => _encode_DeleteProfileResult, $.BER),
    "listProfileInfoResult": $._encode_implicit(_TagClass.context, 45, () => _encode_ProfileInfoListResponse, $.BER),
    "getRATResult": $._encode_implicit(_TagClass.context, 6, () => _encode_RulesAuthorisationTable, $.BER),
    "configureImmediateEnableResult": $._encode_implicit(_TagClass.context, 7, () => _encode_ConfigureImmediateEnableResult, $.BER),
    "addEimResult": $._encode_explicit(_TagClass.context, 8, () => _encode_AddEimResult, $.BER),
    "deleteEimResult": $._encode_implicit(_TagClass.context, 9, () => _encode_DeleteEimResult, $.BER),
    "updateEimResult": $._encode_implicit(_TagClass.context, 10, () => _encode_UpdateEimResult, $.BER),
    "listEimResult": $._encode_explicit(_TagClass.context, 11, () => _encode_ListEimResult, $.BER),
    "rollbackResult": $._encode_implicit(_TagClass.context, 12, () => _encode_RollbackProfileResult, $.BER),
    "setFallbackAttributeResult": $._encode_implicit(_TagClass.context, 13, () => _encode_SetFallbackAttributeResult, $.BER),
    "unsetFallbackAttributeResult": $._encode_implicit(_TagClass.context, 14, () => _encode_UnsetFallbackAttributeResult, $.BER),
    "processingTerminated": _encode_EuiccResultData_processingTerminated,
    "setDefaultDpAddressResult": $._encode_implicit(_TagClass.context, 101, () => _encode_SetDefaultDpAddressResponse, $.BER),
}, $.BER); }
    return _cached_encoder_for_EuiccResultData(value, elGetter);
}


/* eslint-enable */

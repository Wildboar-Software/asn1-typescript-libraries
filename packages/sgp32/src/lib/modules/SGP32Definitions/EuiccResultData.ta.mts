/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EnableProfileResult, _decode_EnableProfileResult, _encode_EnableProfileResult } from "../SGP32Definitions/EnableProfileResult.ta.mjs";
import { DisableProfileResult, _decode_DisableProfileResult, _encode_DisableProfileResult } from "../SGP32Definitions/DisableProfileResult.ta.mjs";
import { DeleteProfileResult, _decode_DeleteProfileResult, _encode_DeleteProfileResult } from "../SGP32Definitions/DeleteProfileResult.ta.mjs";
import { ProfileInfoListResponse, _decode_ProfileInfoListResponse, _encode_ProfileInfoListResponse } from "../SGP32Definitions/ProfileInfoListResponse.ta.mjs";
import { type RulesAuthorisationTable, _decode_RulesAuthorisationTable, _encode_RulesAuthorisationTable } from "@wildboar/sgp22/RSPDefinitions";
import { ConfigureImmediateEnableResult, _decode_ConfigureImmediateEnableResult, _encode_ConfigureImmediateEnableResult } from "../SGP32Definitions/ConfigureImmediateEnableResult.ta.mjs";
import { AddEimResult, _decode_AddEimResult, _encode_AddEimResult } from "../SGP32Definitions/AddEimResult.ta.mjs";
import { DeleteEimResult, _decode_DeleteEimResult, _encode_DeleteEimResult } from "../SGP32Definitions/DeleteEimResult.ta.mjs";
import { UpdateEimResult, _decode_UpdateEimResult, _encode_UpdateEimResult } from "../SGP32Definitions/UpdateEimResult.ta.mjs";
import { ListEimResult, _decode_ListEimResult, _encode_ListEimResult } from "../SGP32Definitions/ListEimResult.ta.mjs";
import { RollbackProfileResult, _decode_RollbackProfileResult, _encode_RollbackProfileResult } from "../SGP32Definitions/RollbackProfileResult.ta.mjs";
import { SetFallbackAttributeResult, _decode_SetFallbackAttributeResult, _encode_SetFallbackAttributeResult } from "../SGP32Definitions/SetFallbackAttributeResult.ta.mjs";
import { UnsetFallbackAttributeResult, _decode_UnsetFallbackAttributeResult, _encode_UnsetFallbackAttributeResult } from "../SGP32Definitions/UnsetFallbackAttributeResult.ta.mjs";
import { EuiccResultData_processingTerminated, _decode_EuiccResultData_processingTerminated, _encode_EuiccResultData_processingTerminated } from "../SGP32Definitions/EuiccResultData-processingTerminated.ta.mjs";
import { SetDefaultDpAddressResponse, _decode_SetDefaultDpAddressResponse, _encode_SetDefaultDpAddressResponse } from "../SGP32Definitions/SetDefaultDpAddressResponse.ta.mjs";


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

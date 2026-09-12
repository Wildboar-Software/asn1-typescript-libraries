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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ImplicitNullable, _get_decoder_for_ImplicitNullable, _get_encoder_for_ImplicitNullable } from "../ISO-9506-MMS-1/ImplicitNullable.ta.mjs";
// export { ImplicitNullable, _get_decoder_for_ImplicitNullable, _get_encoder_for_ImplicitNullable } from "../ISO-9506-MMS-1/ImplicitNullable.ta.mjs";
import { DefineEventConditionList_Error, _decode_DefineEventConditionList_Error, _encode_DefineEventConditionList_Error } from "../ISO-9506-MMS-1/DefineEventConditionList-Error.ta.mjs";
// export { DefineEventConditionList_Error, _decode_DefineEventConditionList_Error, _encode_DefineEventConditionList_Error } from "../ISO-9506-MMS-1/DefineEventConditionList-Error.ta.mjs";
import { AddEventConditionListReference_Error, _decode_AddEventConditionListReference_Error, _encode_AddEventConditionListReference_Error } from "../ISO-9506-MMS-1/AddEventConditionListReference-Error.ta.mjs";
// export { AddEventConditionListReference_Error, _decode_AddEventConditionListReference_Error, _encode_AddEventConditionListReference_Error } from "../ISO-9506-MMS-1/AddEventConditionListReference-Error.ta.mjs";
import { RemoveEventConditionListReference_Error, _decode_RemoveEventConditionListReference_Error, _encode_RemoveEventConditionListReference_Error } from "../ISO-9506-MMS-1/RemoveEventConditionListReference-Error.ta.mjs";
// export { RemoveEventConditionListReference_Error, _decode_RemoveEventConditionListReference_Error, _encode_RemoveEventConditionListReference_Error } from "../ISO-9506-MMS-1/RemoveEventConditionListReference-Error.ta.mjs";
import { InitiateUnitControl_Error, _decode_InitiateUnitControl_Error, _encode_InitiateUnitControl_Error } from "../ISO-9506-MMS-1/InitiateUnitControl-Error.ta.mjs";
// export { InitiateUnitControl_Error, _decode_InitiateUnitControl_Error, _encode_InitiateUnitControl_Error } from "../ISO-9506-MMS-1/InitiateUnitControl-Error.ta.mjs";
import { StartUnitControl_Error, _decode_StartUnitControl_Error, _encode_StartUnitControl_Error } from "../ISO-9506-MMS-1/StartUnitControl-Error.ta.mjs";
// export { StartUnitControl_Error, _decode_StartUnitControl_Error, _encode_StartUnitControl_Error } from "../ISO-9506-MMS-1/StartUnitControl-Error.ta.mjs";
import { StopUnitControl_Error, _decode_StopUnitControl_Error, _encode_StopUnitControl_Error } from "../ISO-9506-MMS-1/StopUnitControl-Error.ta.mjs";
// export { StopUnitControl_Error, _decode_StopUnitControl_Error, _encode_StopUnitControl_Error } from "../ISO-9506-MMS-1/StopUnitControl-Error.ta.mjs";
import { DeleteUnitControl_Error, _decode_DeleteUnitControl_Error, _encode_DeleteUnitControl_Error } from "../ISO-9506-MMS-1/DeleteUnitControl-Error.ta.mjs";
// export { DeleteUnitControl_Error, _decode_DeleteUnitControl_Error, _encode_DeleteUnitControl_Error } from "../ISO-9506-MMS-1/DeleteUnitControl-Error.ta.mjs";
import { LoadUnitControlFromFile_Error, _decode_LoadUnitControlFromFile_Error, _encode_LoadUnitControlFromFile_Error } from "../ISO-9506-MMS-1/LoadUnitControlFromFile-Error.ta.mjs";
// export { LoadUnitControlFromFile_Error, _decode_LoadUnitControlFromFile_Error, _encode_LoadUnitControlFromFile_Error } from "../ISO-9506-MMS-1/LoadUnitControlFromFile-Error.ta.mjs";


/**
 * @summary AdditionalService_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalService-Error  ::=  CHOICE {
 *         defineEcl                     [0] IMPLICIT ImplicitNullable{DefineEventConditionList-Error},
 *         addECLReference               [1] IMPLICIT ImplicitNullable{AddEventConditionListReference-Error},
 *         removeECLReference            [2] IMPLICIT ImplicitNullable{RemoveEventConditionListReference-Error},
 *         initiateUC                    [3] IMPLICIT ImplicitNullable{InitiateUnitControl-Error},
 *         startUC                       [4] IMPLICIT StartUnitControl-Error,
 *         -- startUC                       [4] IMPLICIT NULL,
 *         stopUC                        [5] IMPLICIT StopUnitControl-Error,
 *         -- stopUC                        [5] IMPLICIT NULL,
 *         deleteUC                      [6] IMPLICIT ImplicitNullable{DeleteUnitControl-Error},
 *         loadUCFromFile                [7] IMPLICIT ImplicitNullable{LoadUnitControlFromFile-Error}
 * }
 * ```
 */
export
type AdditionalService_Error =
    { defineEcl: ImplicitNullable<DefineEventConditionList_Error> } /* CHOICE_ALT_ROOT */
    | { addECLReference: ImplicitNullable<AddEventConditionListReference_Error> } /* CHOICE_ALT_ROOT */
    | { removeECLReference: ImplicitNullable<RemoveEventConditionListReference_Error> } /* CHOICE_ALT_ROOT */
    | { initiateUC: ImplicitNullable<InitiateUnitControl_Error> } /* CHOICE_ALT_ROOT */
    | { startUC: StartUnitControl_Error } /* CHOICE_ALT_ROOT */
    | { stopUC: StopUnitControl_Error } /* CHOICE_ALT_ROOT */
    | { deleteUC: ImplicitNullable<DeleteUnitControl_Error> } /* CHOICE_ALT_ROOT */
    | { loadUCFromFile: ImplicitNullable<LoadUnitControlFromFile_Error> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AdditionalService_Error: $.ASN1Decoder<AdditionalService_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalService_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalService_Error (el: _Element): AdditionalService_Error {
    if (!_cached_decoder_for_AdditionalService_Error) { _cached_decoder_for_AdditionalService_Error = $._decode_inextensible_choice<AdditionalService_Error>({
    "CONTEXT 0": [ "defineEcl", $._decode_implicit<ImplicitNullable<DefineEventConditionList_Error>>(() => _get_decoder_for_ImplicitNullable<DefineEventConditionList_Error>(_decode_DefineEventConditionList_Error)) ],
    "CONTEXT 1": [ "addECLReference", $._decode_implicit<ImplicitNullable<AddEventConditionListReference_Error>>(() => _get_decoder_for_ImplicitNullable<AddEventConditionListReference_Error>(_decode_AddEventConditionListReference_Error)) ],
    "CONTEXT 2": [ "removeECLReference", $._decode_implicit<ImplicitNullable<RemoveEventConditionListReference_Error>>(() => _get_decoder_for_ImplicitNullable<RemoveEventConditionListReference_Error>(_decode_RemoveEventConditionListReference_Error)) ],
    "CONTEXT 3": [ "initiateUC", $._decode_implicit<ImplicitNullable<InitiateUnitControl_Error>>(() => _get_decoder_for_ImplicitNullable<InitiateUnitControl_Error>(_decode_InitiateUnitControl_Error)) ],
    "CONTEXT 4": [ "startUC", $._decode_implicit<StartUnitControl_Error>(() => _decode_StartUnitControl_Error) ],
    "CONTEXT 5": [ "stopUC", $._decode_implicit<StopUnitControl_Error>(() => _decode_StopUnitControl_Error) ],
    "CONTEXT 6": [ "deleteUC", $._decode_implicit<ImplicitNullable<DeleteUnitControl_Error>>(() => _get_decoder_for_ImplicitNullable<DeleteUnitControl_Error>(_decode_DeleteUnitControl_Error)) ],
    "CONTEXT 7": [ "loadUCFromFile", $._decode_implicit<ImplicitNullable<LoadUnitControlFromFile_Error>>(() => _get_decoder_for_ImplicitNullable<LoadUnitControlFromFile_Error>(_decode_LoadUnitControlFromFile_Error)) ]
}); }
    return _cached_decoder_for_AdditionalService_Error(el);
}

let _cached_encoder_for_AdditionalService_Error: $.ASN1Encoder<AdditionalService_Error> | null = null;

/**
 * @summary Encodes a(n) AdditionalService_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalService_Error, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalService_Error (value: AdditionalService_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalService_Error) { _cached_encoder_for_AdditionalService_Error = $._encode_choice<AdditionalService_Error>({
    "defineEcl": $._encode_implicit(_TagClass.context, 0, () => _get_encoder_for_ImplicitNullable<DefineEventConditionList_Error>(_encode_DefineEventConditionList_Error), $.BER),
    "addECLReference": $._encode_implicit(_TagClass.context, 1, () => _get_encoder_for_ImplicitNullable<AddEventConditionListReference_Error>(_encode_AddEventConditionListReference_Error), $.BER),
    "removeECLReference": $._encode_implicit(_TagClass.context, 2, () => _get_encoder_for_ImplicitNullable<RemoveEventConditionListReference_Error>(_encode_RemoveEventConditionListReference_Error), $.BER),
    "initiateUC": $._encode_implicit(_TagClass.context, 3, () => _get_encoder_for_ImplicitNullable<InitiateUnitControl_Error>(_encode_InitiateUnitControl_Error), $.BER),
    "startUC": $._encode_implicit(_TagClass.context, 4, () => _encode_StartUnitControl_Error, $.BER),
    "stopUC": $._encode_implicit(_TagClass.context, 5, () => _encode_StopUnitControl_Error, $.BER),
    "deleteUC": $._encode_implicit(_TagClass.context, 6, () => _get_encoder_for_ImplicitNullable<DeleteUnitControl_Error>(_encode_DeleteUnitControl_Error), $.BER),
    "loadUCFromFile": $._encode_implicit(_TagClass.context, 7, () => _get_encoder_for_ImplicitNullable<LoadUnitControlFromFile_Error>(_encode_LoadUnitControlFromFile_Error), $.BER),
}, $.BER); }
    return _cached_encoder_for_AdditionalService_Error(value, elGetter);
}


/* eslint-enable */

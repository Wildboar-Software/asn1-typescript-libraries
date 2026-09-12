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
import { ObtainFile_Error, _decode_ObtainFile_Error, _encode_ObtainFile_Error } from "../ISO-9506-MMS-1A/ObtainFile-Error.ta.mjs";
// export { ObtainFile_Error, ObtainFile_Error_source_file /* IMPORTED_LONG_NAMED_INTEGER */, ObtainFile_Error_destination_file /* IMPORTED_LONG_NAMED_INTEGER */, _decode_ObtainFile_Error, _encode_ObtainFile_Error } from "../ISO-9506-MMS-1A/ObtainFile-Error.ta.mjs";
import { Start_Error, _decode_Start_Error, _encode_Start_Error } from "../ISO-9506-MMS-1/Start-Error.ta.mjs";
// export { Start_Error, _decode_Start_Error, _encode_Start_Error } from "../ISO-9506-MMS-1/Start-Error.ta.mjs";
import { Stop_Error, _decode_Stop_Error, _encode_Stop_Error } from "../ISO-9506-MMS-1/Stop-Error.ta.mjs";
// export { Stop_Error, _decode_Stop_Error, _encode_Stop_Error } from "../ISO-9506-MMS-1/Stop-Error.ta.mjs";
import { Resume_Error, _decode_Resume_Error, _encode_Resume_Error } from "../ISO-9506-MMS-1/Resume-Error.ta.mjs";
// export { Resume_Error, _decode_Resume_Error, _encode_Resume_Error } from "../ISO-9506-MMS-1/Resume-Error.ta.mjs";
import { Reset_Error, _decode_Reset_Error, _encode_Reset_Error } from "../ISO-9506-MMS-1/Reset-Error.ta.mjs";
// export { Reset_Error, _decode_Reset_Error, _encode_Reset_Error } from "../ISO-9506-MMS-1/Reset-Error.ta.mjs";
import { DeleteVariableAccess_Error, _decode_DeleteVariableAccess_Error, _encode_DeleteVariableAccess_Error } from "../ISO-9506-MMS-1/DeleteVariableAccess-Error.ta.mjs";
// export { DeleteVariableAccess_Error, _decode_DeleteVariableAccess_Error, _encode_DeleteVariableAccess_Error } from "../ISO-9506-MMS-1/DeleteVariableAccess-Error.ta.mjs";
import { DeleteNamedVariableList_Error, _decode_DeleteNamedVariableList_Error, _encode_DeleteNamedVariableList_Error } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Error.ta.mjs";
// export { DeleteNamedVariableList_Error, _decode_DeleteNamedVariableList_Error, _encode_DeleteNamedVariableList_Error } from "../ISO-9506-MMS-1/DeleteNamedVariableList-Error.ta.mjs";
import { DeleteNamedType_Error, _decode_DeleteNamedType_Error, _encode_DeleteNamedType_Error } from "../ISO-9506-MMS-1/DeleteNamedType-Error.ta.mjs";
// export { DeleteNamedType_Error, _decode_DeleteNamedType_Error, _encode_DeleteNamedType_Error } from "../ISO-9506-MMS-1/DeleteNamedType-Error.ta.mjs";
import { DefineEventEnrollment_Error, _decode_DefineEventEnrollment_Error, _encode_DefineEventEnrollment_Error } from "../ISO-9506-MMS-1/DefineEventEnrollment-Error.ta.mjs";
// export { DefineEventEnrollment_Error, _decode_DefineEventEnrollment_Error, _encode_DefineEventEnrollment_Error } from "../ISO-9506-MMS-1/DefineEventEnrollment-Error.ta.mjs";
import { FileRename_Error, _decode_FileRename_Error, _encode_FileRename_Error } from "../ISO-9506-MMS-1A/FileRename-Error.ta.mjs";
// export { FileRename_Error, FileRename_Error_source_file /* IMPORTED_LONG_NAMED_INTEGER */, FileRename_Error_destination_file /* IMPORTED_LONG_NAMED_INTEGER */, _decode_FileRename_Error, _encode_FileRename_Error } from "../ISO-9506-MMS-1A/FileRename-Error.ta.mjs";
import { AdditionalService_Error, _decode_AdditionalService_Error, _encode_AdditionalService_Error } from "../ISO-9506-MMS-1/AdditionalService-Error.ta.mjs";
// export { AdditionalService_Error, _decode_AdditionalService_Error, _encode_AdditionalService_Error } from "../ISO-9506-MMS-1/AdditionalService-Error.ta.mjs";
import { ChangeAccessControl_Error, _decode_ChangeAccessControl_Error, _encode_ChangeAccessControl_Error } from "../ISO-9506-MMS-1/ChangeAccessControl-Error.ta.mjs";
// export { ChangeAccessControl_Error, _decode_ChangeAccessControl_Error, _encode_ChangeAccessControl_Error } from "../ISO-9506-MMS-1/ChangeAccessControl-Error.ta.mjs";


/**
 * @summary ServiceError_serviceSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-serviceSpecificInfo ::= CHOICE {
 *     obtainFile [0] IMPLICIT ObtainFile-Error,
 *     obtainFile [0] IMPLICIT NULL,
 *     start [1] IMPLICIT Start-Error,
 *     start [1] IMPLICIT NULL,
 *     stop [2] IMPLICIT Stop-Error,
 *     stop [2] IMPLICIT NULL,
 *     resume [3] IMPLICIT Resume-Error,
 *     resume [3] IMPLICIT NULL,
 *     reset [4] IMPLICIT Reset-Error,
 *     reset [4] IMPLICIT NULL,
 *     deleteVariableAccess [5] IMPLICIT DeleteVariableAccess-Error,
 *     deleteVariableAccess [5] IMPLICIT NULL,
 *     deleteNamedVariableList [6] IMPLICIT DeleteNamedVariableList-Error,
 *     deleteNamedVariableList [6] IMPLICIT NULL,
 *     deleteNamedType [7] IMPLICIT DeleteNamedType-Error,
 *     deleteNamedType [7] IMPLICIT NULL,
 *     defineEventEnrollment-Error [8] DefineEventEnrollment-Error,
 *     defineEventEnrollment-Error [8] IMPLICIT NULL -- [9] Reserved for use by annex D
 *     ,
 *     fileRename [9] IMPLICIT FileRename-Error,
 *     fileRename [9] IMPLICIT NULL,
 *     additionalService [10] AdditionalService-Error,
 *     additionalService [10] IMPLICIT NULL,
 *     changeAccessControl [11] IMPLICIT ChangeAccessControl-Error,
 *     changeAccessControl [11] IMPLICIT NULL
 * }
 * ```
 */
export
type ServiceError_serviceSpecificInfo =
    { obtainFile: ObtainFile_Error } /* CHOICE_ALT_ROOT */
    | { obtainFile: NULL } /* CHOICE_ALT_ROOT */
    | { start: Start_Error } /* CHOICE_ALT_ROOT */
    | { start: NULL } /* CHOICE_ALT_ROOT */
    | { stop: Stop_Error } /* CHOICE_ALT_ROOT */
    | { stop: NULL } /* CHOICE_ALT_ROOT */
    | { resume: Resume_Error } /* CHOICE_ALT_ROOT */
    | { resume: NULL } /* CHOICE_ALT_ROOT */
    | { reset: Reset_Error } /* CHOICE_ALT_ROOT */
    | { reset: NULL } /* CHOICE_ALT_ROOT */
    | { deleteVariableAccess: DeleteVariableAccess_Error } /* CHOICE_ALT_ROOT */
    | { deleteVariableAccess: NULL } /* CHOICE_ALT_ROOT */
    | { deleteNamedVariableList: DeleteNamedVariableList_Error } /* CHOICE_ALT_ROOT */
    | { deleteNamedVariableList: NULL } /* CHOICE_ALT_ROOT */
    | { deleteNamedType: DeleteNamedType_Error } /* CHOICE_ALT_ROOT */
    | { deleteNamedType: NULL } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment_Error: DefineEventEnrollment_Error } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment_Error: NULL } /* CHOICE_ALT_ROOT */
    | { fileRename: FileRename_Error } /* CHOICE_ALT_ROOT */
    | { fileRename: NULL } /* CHOICE_ALT_ROOT */
    | { additionalService: AdditionalService_Error } /* CHOICE_ALT_ROOT */
    | { additionalService: NULL } /* CHOICE_ALT_ROOT */
    | { changeAccessControl: ChangeAccessControl_Error } /* CHOICE_ALT_ROOT */
    | { changeAccessControl: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServiceError_serviceSpecificInfo: $.ASN1Decoder<ServiceError_serviceSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError_serviceSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceError_serviceSpecificInfo (el: _Element): ServiceError_serviceSpecificInfo {
    if (!_cached_decoder_for_ServiceError_serviceSpecificInfo) { _cached_decoder_for_ServiceError_serviceSpecificInfo = $._decode_inextensible_choice<ServiceError_serviceSpecificInfo>({
    "CONTEXT 0": [ "obtainFile", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ObtainFile_Error>(() => _decode_ObtainFile_Error)(el)) ],
    "CONTEXT 1": [ "start", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Start_Error>(() => _decode_Start_Error)(el)) ],
    "CONTEXT 2": [ "stop", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Stop_Error>(() => _decode_Stop_Error)(el)) ],
    "CONTEXT 3": [ "resume", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Resume_Error>(() => _decode_Resume_Error)(el)) ],
    "CONTEXT 4": [ "reset", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Reset_Error>(() => _decode_Reset_Error)(el)) ],
    "CONTEXT 5": [ "deleteVariableAccess", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteVariableAccess_Error>(() => _decode_DeleteVariableAccess_Error)(el)) ],
    "CONTEXT 6": [ "deleteNamedVariableList", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteNamedVariableList_Error>(() => _decode_DeleteNamedVariableList_Error)(el)) ],
    "CONTEXT 7": [ "deleteNamedType", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<DeleteNamedType_Error>(() => _decode_DeleteNamedType_Error)(el)) ],
    "CONTEXT 8": [ "defineEventEnrollment_Error", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<DefineEventEnrollment_Error>(() => _decode_DefineEventEnrollment_Error)(el)) ],
    "CONTEXT 9": [ "fileRename", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<FileRename_Error>(() => _decode_FileRename_Error)(el)) ],
    "CONTEXT 10": [ "additionalService", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_explicit<AdditionalService_Error>(() => _decode_AdditionalService_Error)(el)) ],
    "CONTEXT 11": [ "changeAccessControl", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<ChangeAccessControl_Error>(() => _decode_ChangeAccessControl_Error)(el)) ]
}); }
    return _cached_decoder_for_ServiceError_serviceSpecificInfo(el);
}

let _cached_encoder_for_ServiceError_serviceSpecificInfo: $.ASN1Encoder<ServiceError_serviceSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) ServiceError_serviceSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError_serviceSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceError_serviceSpecificInfo (value: ServiceError_serviceSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceError_serviceSpecificInfo) { _cached_encoder_for_ServiceError_serviceSpecificInfo = $._encode_choice<ServiceError_serviceSpecificInfo>({
    "obtainFile": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 0, () => _encode_ObtainFile_Error, $.BER)(value, elGetter)),
    "start": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 1, () => _encode_Start_Error, $.BER)(value, elGetter)),
    "stop": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 2, () => _encode_Stop_Error, $.BER)(value, elGetter)),
    "resume": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 3, () => _encode_Resume_Error, $.BER)(value, elGetter)),
    "reset": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 4, () => _encode_Reset_Error, $.BER)(value, elGetter)),
    "deleteVariableAccess": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 5, () => _encode_DeleteVariableAccess_Error, $.BER)(value, elGetter)),
    "deleteNamedVariableList": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 6, () => _encode_DeleteNamedVariableList_Error, $.BER)(value, elGetter)),
    "deleteNamedType": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 7, () => _encode_DeleteNamedType_Error, $.BER)(value, elGetter)),
    "defineEventEnrollment_Error": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 8, () => _encode_DefineEventEnrollment_Error, $.BER)(value, elGetter)),
    "fileRename": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 9, () => _encode_FileRename_Error, $.BER)(value, elGetter)),
    "additionalService": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_explicit(_TagClass.context, 10, () => _encode_AdditionalService_Error, $.BER)(value, elGetter)),
    "changeAccessControl": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 11, () => _encode_ChangeAccessControl_Error, $.BER)(value, elGetter))
}, $.BER); }
    return _cached_encoder_for_ServiceError_serviceSpecificInfo(value, elGetter);
}


/* eslint-enable */

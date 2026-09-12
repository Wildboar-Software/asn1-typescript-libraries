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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ObtainFile_Error, ObtainFile_Error_source_file /* IMPORTED_LONG_NAMED_INTEGER */, ObtainFile_Error_destination_file /* IMPORTED_LONG_NAMED_INTEGER */, _decode_ObtainFile_Error, _encode_ObtainFile_Error } from "../ISO-9506-MMS-1A/ObtainFile-Error.ta.mjs";
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
import { FileRename_Error, FileRename_Error_source_file /* IMPORTED_LONG_NAMED_INTEGER */, FileRename_Error_destination_file /* IMPORTED_LONG_NAMED_INTEGER */, _decode_FileRename_Error, _encode_FileRename_Error } from "../ISO-9506-MMS-1A/FileRename-Error.ta.mjs";
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
 * ServiceError-serviceSpecificInfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
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
    "CONTEXT 0": [ "obtainFile", $._decode_implicit<ObtainFile_Error>(() => _decode_ObtainFile_Error) ],
    "CONTEXT 0": [ "obtainFile", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "start", $._decode_implicit<Start_Error>(() => _decode_Start_Error) ],
    "CONTEXT 1": [ "start", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "stop", $._decode_implicit<Stop_Error>(() => _decode_Stop_Error) ],
    "CONTEXT 2": [ "stop", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "resume", $._decode_implicit<Resume_Error>(() => _decode_Resume_Error) ],
    "CONTEXT 3": [ "resume", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "reset", $._decode_implicit<Reset_Error>(() => _decode_Reset_Error) ],
    "CONTEXT 4": [ "reset", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 5": [ "deleteVariableAccess", $._decode_implicit<DeleteVariableAccess_Error>(() => _decode_DeleteVariableAccess_Error) ],
    "CONTEXT 5": [ "deleteVariableAccess", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 6": [ "deleteNamedVariableList", $._decode_implicit<DeleteNamedVariableList_Error>(() => _decode_DeleteNamedVariableList_Error) ],
    "CONTEXT 6": [ "deleteNamedVariableList", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "deleteNamedType", $._decode_implicit<DeleteNamedType_Error>(() => _decode_DeleteNamedType_Error) ],
    "CONTEXT 7": [ "deleteNamedType", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 8": [ "defineEventEnrollment_Error", $._decode_explicit<DefineEventEnrollment_Error>(() => _decode_DefineEventEnrollment_Error) ],
    "CONTEXT 8": [ "defineEventEnrollment_Error", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 9": [ "fileRename", $._decode_implicit<FileRename_Error>(() => _decode_FileRename_Error) ],
    "CONTEXT 9": [ "fileRename", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 10": [ "additionalService", $._decode_explicit<AdditionalService_Error>(() => _decode_AdditionalService_Error) ],
    "CONTEXT 10": [ "additionalService", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 11": [ "changeAccessControl", $._decode_implicit<ChangeAccessControl_Error>(() => _decode_ChangeAccessControl_Error) ],
    "CONTEXT 11": [ "changeAccessControl", $._decode_implicit<NULL>(() => $._decodeNull) ]
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
    "obtainFile": $._encode_implicit(_TagClass.context, 0, () => _encode_ObtainFile_Error, $.BER),
    "obtainFile": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "start": $._encode_implicit(_TagClass.context, 1, () => _encode_Start_Error, $.BER),
    "start": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "stop": $._encode_implicit(_TagClass.context, 2, () => _encode_Stop_Error, $.BER),
    "stop": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "resume": $._encode_implicit(_TagClass.context, 3, () => _encode_Resume_Error, $.BER),
    "resume": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "reset": $._encode_implicit(_TagClass.context, 4, () => _encode_Reset_Error, $.BER),
    "reset": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
    "deleteVariableAccess": $._encode_implicit(_TagClass.context, 5, () => _encode_DeleteVariableAccess_Error, $.BER),
    "deleteVariableAccess": $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER),
    "deleteNamedVariableList": $._encode_implicit(_TagClass.context, 6, () => _encode_DeleteNamedVariableList_Error, $.BER),
    "deleteNamedVariableList": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "deleteNamedType": $._encode_implicit(_TagClass.context, 7, () => _encode_DeleteNamedType_Error, $.BER),
    "deleteNamedType": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
    "defineEventEnrollment_Error": $._encode_explicit(_TagClass.context, 8, () => _encode_DefineEventEnrollment_Error, $.BER),
    "defineEventEnrollment_Error": $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER),
    "fileRename": $._encode_implicit(_TagClass.context, 9, () => _encode_FileRename_Error, $.BER),
    "fileRename": $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER),
    "additionalService": $._encode_explicit(_TagClass.context, 10, () => _encode_AdditionalService_Error, $.BER),
    "additionalService": $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER),
    "changeAccessControl": $._encode_implicit(_TagClass.context, 11, () => _encode_ChangeAccessControl_Error, $.BER),
    "changeAccessControl": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_ServiceError_serviceSpecificInfo(value, elGetter);
}


/* eslint-enable */

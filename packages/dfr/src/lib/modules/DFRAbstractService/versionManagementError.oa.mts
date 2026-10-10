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
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { versionManagementError_ParameterType, _decode_versionManagementError_ParameterType, _encode_versionManagementError_ParameterType } from "../DFRAbstractService/versionManagementError-ParameterType.ta.mjs";
import { id_errcode_version_management_error } from "../DFRAbstractService/id-errcode-version-management-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary versionManagementError
 * @description
 *
 * Failed to declare a new version or to copy from the unique previous version.
 * No read right on a previous version ⇒ nameError. ISO/IEC 10166-1:1991
 * §8.3.8. Local error 8 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * versionManagementError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         entry   [0] DfrEntryName,
 *         -- of the entry itself or of its potential previous version
 *         problem [1] VersionManagementProblem
 *     }
 *     CODE        id-errcode-version-management-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<versionManagementError_ParameterType>}
 * @implements {ERROR<versionManagementError_ParameterType>}
 */
export
const versionManagementError: ERROR<versionManagementError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_versionManagementError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_versionManagementError_ParameterType,
    },
    "&errorCode": id_errcode_version_management_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

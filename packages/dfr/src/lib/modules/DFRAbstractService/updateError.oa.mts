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
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { updateError_ParameterType, _decode_updateError_ParameterType, _encode_updateError_ParameterType } from "../DFRAbstractService/updateError-ParameterType.ta.mjs";
// export { updateError_ParameterType, _decode_updateError_ParameterType, _encode_updateError_ParameterType } from "../DFRAbstractService/updateError-ParameterType.ta.mjs";
import { id_errcode_update_error } from "../DFRAbstractService/id-errcode-update-error.va.mjs";
// export { id_errcode_update_error } from "../DFRAbstractService/id-errcode-update-error.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary updateError
 * @description
 *
 * Problem modifying an entry, including implicit parent-group updates, delete,
 * and move. ISO/IEC 10166-1:1991 §8.3.4. Local error 4 (ISO/IEC 10166-2:1991
 * §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateError ERROR ::= {
 *     PARAMETER SEQUENCE {
 *         entry       [0] DfrEntryName,
 *         problem     [1] UpdateProblem
 *     }
 *     CODE        id-errcode-update-error
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<updateError_ParameterType>}
 * @implements {ERROR<updateError_ParameterType>}
 */
export
const updateError: ERROR<updateError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_updateError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_updateError_ParameterType,
    },
    "&errorCode": id_errcode_update_error /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { _decode_executionError_ParameterType_Type, _encode_executionError_ParameterType_Type, executionError_ParameterType_Type } from "../IN-CS2-SCF-SDF-Operations/executionError-ParameterType-Type.ta.mjs";
// export { executionError_ParameterType_Type, _decode_executionError_ParameterType_Type, _encode_executionError_ParameterType_Type } from "../IN-CS2-SCF-SDF-Operations/executionError-ParameterType-Type.ta.mjs";
import { id_errcode_executionError } from "../IN-CS2-SCF-SDF-Operations/id-errcode-executionError.va.mjs";
// export { id_errcode_executionError } from "../IN-CS2-SCF-SDF-Operations/id-errcode-executionError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary executionError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * executionError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED
 *     {SET {problem  [0]  ExecutionProblem,
 *           COMPONENTS OF CommonResults}}
 *   CODE                            id-errcode-executionError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<executionError_ParameterType_Type>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<executionError_ParameterType_Type>>}
 */
export
const executionError: ERROR<OPTIONALLY_PROTECTED<executionError_ParameterType_Type>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<executionError_ParameterType_Type>(_decode_executionError_ParameterType_Type),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<executionError_ParameterType_Type>(_encode_executionError_ParameterType_Type),
    },
    "&errorCode": id_errcode_executionError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

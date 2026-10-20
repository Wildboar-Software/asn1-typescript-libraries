/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_tfcBindError_ParameterType, _encode_tfcBindError_ParameterType, tfcBindError_ParameterType } from "../IN-errortypes/tfcBindError-ParameterType.ta.mjs";
// export { tfcBindError_ParameterType, _decode_tfcBindError_ParameterType, _encode_tfcBindError_ParameterType } from "../IN-errortypes/tfcBindError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary tfcBindError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tfcBindError ERROR ::= {
 *   PARAMETER
 *     SET {versions  [0]  Versions DEFAULT {v1},
 *          error
 *            CHOICE {serviceError   [1]  ServiceProblem,
 *                    securityError  [2]  SecurityProblem}}
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<tfcBindError_ParameterType>}
 * @implements {ERROR<tfcBindError_ParameterType>}
 */
export
const tfcBindError: ERROR<tfcBindError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_tfcBindError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_tfcBindError_ParameterType,
    },
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

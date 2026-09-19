/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_applicationError_ParameterType, _encode_applicationError_ParameterType, applicationError_ParameterType } from "../AIN-Errors/applicationError-ParameterType.ta.mjs";
// export { applicationError_ParameterType, _decode_applicationError_ParameterType, _encode_applicationError_ParameterType } from "../AIN-Errors/applicationError-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary applicationError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * applicationError ERROR ::= {
 *      PARAMETER
 *       SEQUENCE{
 *         applicationErrorString ApplicationErrorString,
 *         extensionParameter ExtensionParameter OPTIONAL
 *     }
 *     CODE private: 1
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<applicationError_ParameterType>}
 * @implements {ERROR<applicationError_ParameterType>}
 */
export
const applicationError: ERROR<applicationError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_applicationError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_applicationError_ParameterType,
    },
    "&errorCode": { private_: 1 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

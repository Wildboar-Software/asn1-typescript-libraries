/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_shadowError_ParameterType, _encode_shadowError_ParameterType, shadowError_ParameterType } from "../DirectoryShadowAbstractService/shadowError-ParameterType.ta.mjs";
// export { shadowError_ParameterType, _decode_shadowError_ParameterType, _encode_shadowError_ParameterType } from "../DirectoryShadowAbstractService/shadowError-ParameterType.ta.mjs";
import { id_errcode_shadowError } from "../DirectoryInformationShadowProtocol/id-errcode-shadowError.va.mjs";
// export { id_errcode_shadowError } from "../DirectoryInformationShadowProtocol/id-errcode-shadowError.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary shadowError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowError ERROR ::= {
 *   PARAMETER
 *     SEQUENCE {problem       ShadowProblem,
 *               lastUpdate    Time OPTIONAL,
 *               updateWindow  UpdateWindow OPTIONAL}
 *   CODE       id-errcode-shadowError
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<shadowError_ParameterType>}
 * @implements {ERROR<shadowError_ParameterType>}
 */
export
const shadowError: ERROR<shadowError_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_shadowError_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_shadowError_ParameterType,
    },
    "&errorCode": id_errcode_shadowError /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

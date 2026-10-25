/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { type ScfTaskRefusedParameter, _decode_ScfTaskRefusedParameter, _encode_ScfTaskRefusedParameter } from "../IN-CS3-errortypes/ScfTaskRefusedParameter.ta.mjs";
// export { ScfTaskRefusedParameter, _decode_ScfTaskRefusedParameter, _encode_ScfTaskRefusedParameter } from "../IN-CS3-errortypes/ScfTaskRefusedParameter.ta.mjs";
import { errcode_scfTaskRefused } from "../IN-CS3-errorcodes/errcode-scfTaskRefused.va.mjs";
// export { errcode_scfTaskRefused } from "../IN-CS3-errorcodes/errcode-scfTaskRefused.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary scfTaskRefused
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfTaskRefused ERROR ::= {
 *   PARAMETER  ScfTaskRefusedParameter
 *   CODE       errcode-scfTaskRefused
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<ScfTaskRefusedParameter>}
 * @implements {ERROR<ScfTaskRefusedParameter>}
 */
export
const scfTaskRefused: ERROR<ScfTaskRefusedParameter> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ScfTaskRefusedParameter,
    },
    encoderFor: {
        "&ParameterType": _encode_ScfTaskRefusedParameter,
    },
    "&errorCode": errcode_scfTaskRefused /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

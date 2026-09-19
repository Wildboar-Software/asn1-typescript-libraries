/* eslint-disable */
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_failureReport_ParameterType, _encode_failureReport_ParameterType, failureReport_ParameterType } from "../AIN-Errors/failureReport-ParameterType.ta.mjs";
// export { failureReport_ParameterType, _decode_failureReport_ParameterType, _encode_failureReport_ParameterType } from "../AIN-Errors/failureReport-ParameterType.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary failureReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * failureReport ERROR ::= {
 *     PARAMETER SEQUENCE{
 *         failureCause FailureCause,
 *         failureCauseData FailureCauseData OPTIONAL,
 *         extensionParameter ExtensionParameter OPTIONAL
 *     }
 *     CODE private: 2
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<failureReport_ParameterType>}
 * @implements {ERROR<failureReport_ParameterType>}
 */
export
const failureReport: ERROR<failureReport_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_failureReport_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_failureReport_ParameterType,
    },
    "&errorCode": { private_: 2 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AnalyzeRouteArg, _decode_AnalyzeRouteArg, _encode_AnalyzeRouteArg } from "../AIN-Operations/AnalyzeRouteArg.ta.mjs";
// export { AnalyzeRouteArg, _decode_AnalyzeRouteArg, _encode_AnalyzeRouteArg } from "../AIN-Operations/AnalyzeRouteArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary analyzeRoute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * analyzeRoute OPERATION ::= {
 *         ARGUMENT
 *         AnalyzeRouteArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 25857
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<AnalyzeRouteArg>}
 * @implements {OPERATION<AnalyzeRouteArg>}
 */
export
const analyzeRoute: OPERATION<AnalyzeRouteArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AnalyzeRouteArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AnalyzeRouteArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25857 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

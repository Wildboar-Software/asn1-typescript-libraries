/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ActivityTestArg, _decode_ActivityTestArg, _encode_ActivityTestArg } from "../AIN-Operations/ActivityTestArg.ta.mjs";
// export { ActivityTestArg, _decode_ActivityTestArg, _encode_ActivityTestArg } from "../AIN-Operations/ActivityTestArg.ta.mjs";
import { _decode_activityTest_ResultType, _encode_activityTest_ResultType, activityTest_ResultType } from "../AIN-Operations/activityTest-ResultType.ta.mjs";
// export { activityTest_ResultType, _decode_activityTest_ResultType, _encode_activityTest_ResultType } from "../AIN-Operations/activityTest-ResultType.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary activityTest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activityTest OPERATION ::= {
 *         ARGUMENT
 *         ActivityTestArg
 *         RESULT SEQUENCE{
 *             actResult ActResult
 *         }
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 26886
 *         --Family Name is “Network Management”
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<ActivityTestArg, activityTest_ResultType>}
 * @implements {OPERATION<ActivityTestArg, activityTest_ResultType>}
 */
export
const activityTest: OPERATION<ActivityTestArg, activityTest_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ActivityTestArg,
        "&ResultType": _decode_activityTest_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_ActivityTestArg,
        "&ResultType": _encode_activityTest_ResultType,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26886 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InfoAnalyzedArg, _decode_InfoAnalyzedArg, _encode_InfoAnalyzedArg } from "../AIN-Operations/InfoAnalyzedArg.ta.mjs";
// export { InfoAnalyzedArg, _decode_InfoAnalyzedArg, _encode_InfoAnalyzedArg } from "../AIN-Operations/InfoAnalyzedArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary infoAnalyzed
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * infoAnalyzed OPERATION ::= {
 *         ARGUMENT
 *         InfoAnalyzedArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --analyzeRoute,
 *             -- continue,
 *             --sendToResource,
 *             --disconnect,
 *             --collectInformation
 *             -- }
 *         CODE private: 25603
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<InfoAnalyzedArg>}
 * @implements {OPERATION<InfoAnalyzedArg>}
 */
export
const infoAnalyzed: OPERATION<InfoAnalyzedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InfoAnalyzedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InfoAnalyzedArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25603 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

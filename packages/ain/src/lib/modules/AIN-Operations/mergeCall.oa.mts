/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MergeCallArg, _decode_MergeCallArg, _encode_MergeCallArg } from "../AIN-Operations/MergeCallArg.ta.mjs";
// export { MergeCallArg, _decode_MergeCallArg, _encode_MergeCallArg } from "../AIN-Operations/MergeCallArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary mergeCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mergeCall OPERATION ::= {
 *         ARGUMENT
 *         MergeCallArg
 *         ERRORS{ applicationError
 *         }
 *         --LINKED{
 *             --cTRClear,
 *             --failureOutcome,
 *             --successOutcome
 *             -- }
 *         CODE private: 25865
 *         --Family Name is "Connection Control (Call Model)"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<MergeCallArg>}
 * @implements {OPERATION<MergeCallArg>}
 */
export
const mergeCall: OPERATION<MergeCallArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MergeCallArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MergeCallArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25865 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { InfoCollectedArg, _decode_InfoCollectedArg, _encode_InfoCollectedArg } from "../AIN-Operations/InfoCollectedArg.ta.mjs";
// export { InfoCollectedArg, _decode_InfoCollectedArg, _encode_InfoCollectedArg } from "../AIN-Operations/InfoCollectedArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary infoCollected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * infoCollected OPERATION ::= {
 *         ARGUMENT
 *         InfoCollectedArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --analyzeRoute,
 *             --sendToResource,
 *             --disconnect
 *             -- continue
 *             -- }
 *         CODE private: 25602
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<InfoCollectedArg>}
 * @implements {OPERATION<InfoCollectedArg>}
 */
export
const infoCollected: OPERATION<InfoCollectedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InfoCollectedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InfoCollectedArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25602 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

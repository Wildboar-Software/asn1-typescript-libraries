/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OSuspendedArg, _decode_OSuspendedArg, _encode_OSuspendedArg } from "../AIN-Operations/OSuspendedArg.ta.mjs";
// export { OSuspendedArg, _decode_OSuspendedArg, _encode_OSuspendedArg } from "../AIN-Operations/OSuspendedArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary oSuspended
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oSuspended OPERATION ::= {
 *         ARGUMENT
 *         OSuspendedArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --collectInformation,
 *             --sendToResource,
 *             --analyzeRoute,
 *             --connectToResource,
 *             --disconnect,
 *             --disconnectLeg,
 *             --mergeCall
 *             -- }
 *         CODE private: 25625
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<OSuspendedArg>}
 * @implements {OPERATION<OSuspendedArg>}
 */
export
const oSuspended: OPERATION<OSuspendedArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OSuspendedArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OSuspendedArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25625 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

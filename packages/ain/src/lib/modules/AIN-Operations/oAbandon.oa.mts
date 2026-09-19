/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OAbandonArg, _decode_OAbandonArg, _encode_OAbandonArg } from "../AIN-Operations/OAbandonArg.ta.mjs";
// export { OAbandonArg, _decode_OAbandonArg, _encode_OAbandonArg } from "../AIN-Operations/OAbandonArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary oAbandon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oAbandon OPERATION ::= {
 *         ARGUMENT
 *         OAbandonArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --connectToResource,
 *             --disconnect,
 *             --disconnectLeg,
 *             --mergeCall,
 *             --reconnect
 *             -- }
 *         CODE private: 25614
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<OAbandonArg>}
 * @implements {OPERATION<OAbandonArg>}
 */
export
const oAbandon: OPERATION<OAbandonArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OAbandonArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OAbandonArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25614 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

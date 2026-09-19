/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TerminationNotificationArg, _decode_TerminationNotificationArg, _encode_TerminationNotificationArg } from "../AIN-Operations/TerminationNotificationArg.ta.mjs";
// export { TerminationNotificationArg, _decode_TerminationNotificationArg, _encode_TerminationNotificationArg } from "../AIN-Operations/TerminationNotificationArg.ta.mjs";


/**
 * @summary terminationNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * terminationNotification OPERATION ::= {
 *         ARGUMENT
 *         TerminationNotificationArg
 *         CODE private: 26372
 *         --Family Name is "Status Notification"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<TerminationNotificationArg>}
 * @implements {OPERATION<TerminationNotificationArg>}
 */
export
const terminationNotification: OPERATION<TerminationNotificationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TerminationNotificationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TerminationNotificationArg,
        "&ResultType": undefined,
    },
    "&operationCode": { private_: 26372 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

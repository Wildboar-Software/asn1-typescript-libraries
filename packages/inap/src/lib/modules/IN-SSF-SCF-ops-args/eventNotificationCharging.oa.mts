/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { EventNotificationChargingArg, _decode_EventNotificationChargingArg, _encode_EventNotificationChargingArg } from "../IN-SSF-SCF-ops-args/EventNotificationChargingArg.ta.mjs";
// export { EventNotificationChargingArg, _decode_EventNotificationChargingArg, _encode_EventNotificationChargingArg } from "../IN-SSF-SCF-ops-args/EventNotificationChargingArg.ta.mjs";
import { opcode_eventNotificationCharging } from "../IN-operationcodes/opcode-eventNotificationCharging.va.mjs";
// export { opcode_eventNotificationCharging } from "../IN-operationcodes/opcode-eventNotificationCharging.va.mjs";


/**
 * @summary eventNotificationCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eventNotificationCharging OPERATION ::= {
 *   ARGUMENT         EventNotificationChargingArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-eventNotificationCharging
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<EventNotificationChargingArg>}
 * @implements {OPERATION<EventNotificationChargingArg>}
 */
export
const eventNotificationCharging: OPERATION<EventNotificationChargingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EventNotificationChargingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EventNotificationChargingArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_eventNotificationCharging /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ServiceAvailableArg, _decode_ServiceAvailableArg, _encode_ServiceAvailableArg } from "../Call-Intrusion-Operations-asn1-97/ServiceAvailableArg.ta.mjs";
// export { ServiceAvailableArg, _decode_ServiceAvailableArg, _encode_ServiceAvailableArg } from "../Call-Intrusion-Operations-asn1-97/ServiceAvailableArg.ta.mjs";


/**
 * @summary serviceAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceAvailable OPERATION ::= {
 *     ARGUMENT ServiceAvailableArg -- this operation may be used by other
 *     -- Supplementary Services using other
 *     -- values of the argument
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 42
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ServiceAvailableArg>}
 * @implements {OPERATION<ServiceAvailableArg>}
 */
export
const serviceAvailable: OPERATION<ServiceAvailableArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ServiceAvailableArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ServiceAvailableArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 42 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

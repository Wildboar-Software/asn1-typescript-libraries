/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ServiceFilteringResponseArg, _decode_ServiceFilteringResponseArg, _encode_ServiceFilteringResponseArg } from "../IN-CS2-SSF-SCF-ops-args/ServiceFilteringResponseArg.ta.mjs";
// export { ServiceFilteringResponseArg, _decode_ServiceFilteringResponseArg, _encode_ServiceFilteringResponseArg } from "../IN-CS2-SSF-SCF-ops-args/ServiceFilteringResponseArg.ta.mjs";
import { opcode_serviceFilteringResponse } from "../IN-CS2-operationcodes/opcode-serviceFilteringResponse.va.mjs";
// export { opcode_serviceFilteringResponse } from "../IN-CS2-operationcodes/opcode-serviceFilteringResponse.va.mjs";


/**
 * @summary serviceFilteringResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceFilteringResponse OPERATION ::= {
 *   ARGUMENT         ServiceFilteringResponseArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-serviceFilteringResponse
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ServiceFilteringResponseArg>}
 * @implements {OPERATION<ServiceFilteringResponseArg>}
 */
export
const serviceFilteringResponse: OPERATION<ServiceFilteringResponseArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ServiceFilteringResponseArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ServiceFilteringResponseArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_serviceFilteringResponse /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

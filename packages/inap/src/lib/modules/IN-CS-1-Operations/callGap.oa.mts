/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CallGapArg, _decode_CallGapArg, _encode_CallGapArg } from "../IN-CS-1-Datatypes/CallGapArg.ta.mjs";
// export { CallGapArg, _decode_CallGapArg, _encode_CallGapArg } from "../IN-CS-1-Datatypes/CallGapArg.ta.mjs";
import { op_callGap } from "../IN-CS-1-Codes/op-callGap.va.mjs";
// export { op_callGap } from "../IN-CS-1-Codes/op-callGap.va.mjs";


/**
 * @summary callGap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callGap OPERATION ::= {
 *   ARGUMENT       CallGapArg
 *   RETURN RESULT  FALSE
 *   CODE           op-callGap
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallGapArg>}
 * @implements {OPERATION<CallGapArg>}
 */
export
const callGap: OPERATION<CallGapArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallGapArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallGapArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": op_callGap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

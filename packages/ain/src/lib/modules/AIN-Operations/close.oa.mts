/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CloseArg, _decode_CloseArg, _encode_CloseArg } from "../AIN-Operations/CloseArg.ta.mjs";
// export { CloseArg, _decode_CloseArg, _encode_CloseArg } from "../AIN-Operations/CloseArg.ta.mjs";


/**
 * @summary close
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * close OPERATION ::= {
 *         ARGUMENT
 *             CloseArg
 *         CODE private: 28161
 *         --Family Name is "Transaction Control"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<CloseArg>}
 * @implements {OPERATION<CloseArg>}
 */
export
const close: OPERATION<CloseArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CloseArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CloseArg,
        "&ResultType": undefined,
    },
    "&operationCode": { private_: 28161 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AcgOverflowArg, _decode_AcgOverflowArg, _encode_AcgOverflowArg } from "../AIN-Operations/AcgOverflowArg.ta.mjs";
// export { AcgOverflowArg, _decode_AcgOverflowArg, _encode_AcgOverflowArg } from "../AIN-Operations/AcgOverflowArg.ta.mjs";


/**
 * @summary acgOverflow
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * acgOverflow OPERATION ::= {
 *         ARGUMENT
 *         AcgOverflowArg
 *         CODE private: 26884
 *         --Family Name is “Network Management”
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<AcgOverflowArg>}
 * @implements {OPERATION<AcgOverflowArg>}
 */
export
const acgOverflow: OPERATION<AcgOverflowArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AcgOverflowArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AcgOverflowArg,
        "&ResultType": undefined,
    },
    "&operationCode": { private_: 26884 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

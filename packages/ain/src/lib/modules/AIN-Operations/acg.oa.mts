/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AcgArg, _decode_AcgArg, _encode_AcgArg } from "../AIN-Operations/AcgArg.ta.mjs";
// export { AcgArg, _decode_AcgArg, _encode_AcgArg } from "../AIN-Operations/AcgArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary acg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * acg OPERATION ::= {
 *         ARGUMENT
 *         AcgArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 26881
 *         --Family Name is "Network Management"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<AcgArg>}
 * @implements {OPERATION<AcgArg>}
 */
export
const acg: OPERATION<AcgArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AcgArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AcgArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26881 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

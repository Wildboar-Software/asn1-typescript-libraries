/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CancelResourceEventArg, _decode_CancelResourceEventArg, _encode_CancelResourceEventArg } from "../AIN-Operations/CancelResourceEventArg.ta.mjs";
// export { CancelResourceEventArg, _decode_CancelResourceEventArg, _encode_CancelResourceEventArg } from "../AIN-Operations/CancelResourceEventArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary cancelResourceEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelResourceEvent OPERATION ::= {
 *         ARGUMENT
 *         CancelResourceEventArg
 *         ERRORS{ applicationError
 *         }
 *         --LINKED{ resourceClear }
 *         CODE private: 26115
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelResourceEventArg>}
 * @implements {OPERATION<CancelResourceEventArg>}
 */
export
const cancelResourceEvent: OPERATION<CancelResourceEventArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelResourceEventArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelResourceEventArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26115 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

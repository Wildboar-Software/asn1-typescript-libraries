/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MoveLegArg, _decode_MoveLegArg, _encode_MoveLegArg } from "../AIN-Operations/MoveLegArg.ta.mjs";
// export { MoveLegArg, _decode_MoveLegArg, _encode_MoveLegArg } from "../AIN-Operations/MoveLegArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary moveLeg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * moveLeg OPERATION ::= {
 *         ARGUMENT
 *         MoveLegArg
 *         ERRORS{ applicationError
 *         }
 *         --LINKED{
 *             --cTRClear,
 *             --failureOutcome,
 *             --successOutcome
 *             -- }
 *         CODE private: 25866
 *         --Family Name is "Connection Control (Call Model)"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<MoveLegArg>}
 * @implements {OPERATION<MoveLegArg>}
 */
export
const moveLeg: OPERATION<MoveLegArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MoveLegArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MoveLegArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25866 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

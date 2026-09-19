/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { FurnishAMAInformationArg, _decode_FurnishAMAInformationArg, _encode_FurnishAMAInformationArg } from "../AIN-Operations/FurnishAMAInformationArg.ta.mjs";
// export { FurnishAMAInformationArg, _decode_FurnishAMAInformationArg, _encode_FurnishAMAInformationArg } from "../AIN-Operations/FurnishAMAInformationArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary furnishAMAInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * furnishAMAInformation OPERATION ::= {
 *         ARGUMENT
 *         FurnishAMAInformationArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 27649
 *         --Family Name is “AMA”
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<FurnishAMAInformationArg>}
 * @implements {OPERATION<FurnishAMAInformationArg>}
 */
export
const furnishAMAInformation: OPERATION<FurnishAMAInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FurnishAMAInformationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_FurnishAMAInformationArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 27649 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

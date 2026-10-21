/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CallIdentificationAssignArg, _decode_CallIdentificationAssignArg, _encode_CallIdentificationAssignArg } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/CallIdentificationAssignArg.ta.mjs";

/**
 * @summary callIdentificationAssign
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIdentificationAssign OPERATION ::= {
 *     ARGUMENT CallIdentificationAssignArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 105
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallIdentificationAssignArg>}
 * @implements {OPERATION<CallIdentificationAssignArg>}
 */
export
const callIdentificationAssign: OPERATION<CallIdentificationAssignArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallIdentificationAssignArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallIdentificationAssignArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 105 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

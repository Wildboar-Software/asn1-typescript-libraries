/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CcOptionalArg, _decode_CcOptionalArg, _encode_CcOptionalArg } from "../SS-CC-Operations-asn1-97/CcOptionalArg.ta.mjs";
// export { CcOptionalArg, _decode_CcOptionalArg, _encode_CcOptionalArg } from "../SS-CC-Operations-asn1-97/CcOptionalArg.ta.mjs";


/**
 * @summary ccExecPossible
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccExecPossible OPERATION ::= {
 *     ARGUMENT CcOptionalArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 29
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcOptionalArg>}
 * @implements {OPERATION<CcOptionalArg>}
 */
export
const ccExecPossible: OPERATION<CcOptionalArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcOptionalArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcOptionalArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 29 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

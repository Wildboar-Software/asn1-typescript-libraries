/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { WtmoArg, _decode_WtmoArg, _encode_WtmoArg } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmoArg.ta.mjs";

/**
 * @summary wtmoCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtmoCall OPERATION ::= {
 *     ARGUMENT WtmoArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 71
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtmoArg>}
 * @implements {OPERATION<WtmoArg>}
 */
export
const wtmoCall: OPERATION<WtmoArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtmoArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtmoArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 71 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

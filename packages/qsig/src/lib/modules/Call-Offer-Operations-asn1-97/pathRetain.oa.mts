/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PathRetainArg, _decode_PathRetainArg, _encode_PathRetainArg } from "../Call-Offer-Operations-asn1-97/PathRetainArg.ta.mjs";

/**
 * @summary pathRetain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pathRetain OPERATION ::= {
 *     ARGUMENT PathRetainArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 41
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PathRetainArg>}
 * @implements {OPERATION<PathRetainArg>}
 */
export
const pathRetain: OPERATION<PathRetainArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PathRetainArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_PathRetainArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 41 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

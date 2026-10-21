/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { PumoArg, _decode_PumoArg, _encode_PumoArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/PumoArg.ta.mjs";

/**
 * @summary pumoCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumoCall OPERATION ::= {
 *     ARGUMENT PumoArg
 *     ALWAYS RESPONDS FALSE
 *     RETURN RESULT FALSE
 *     CODE local: 96
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PumoArg>}
 * @implements {OPERATION<PumoArg>}
 */
export
const pumoCall: OPERATION<PumoArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PumoArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_PumoArg,
        "&ResultType": undefined,
    },
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

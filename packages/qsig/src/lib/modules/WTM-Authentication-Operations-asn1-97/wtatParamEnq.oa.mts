/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { WtatParamArg, _decode_WtatParamArg, _encode_WtatParamArg } from "../WTM-Authentication-Operations-asn1-97/WtatParamArg.ta.mjs";
// export { WtatParamArg, _decode_WtatParamArg, _encode_WtatParamArg } from "../WTM-Authentication-Operations-asn1-97/WtatParamArg.ta.mjs";
import { WtatParamRes, _decode_WtatParamRes, _encode_WtatParamRes } from "../WTM-Authentication-Operations-asn1-97/WtatParamRes.ta.mjs";
// export { WtatParamRes, _decode_WtatParamRes, _encode_WtatParamRes } from "../WTM-Authentication-Operations-asn1-97/WtatParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
// export { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
import { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary wtatParamEnq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtatParamEnq OPERATION ::= {
 *     -- from Home PINX to Authentication Server PINX--
 *     ARGUMENT WtatParamArg
 *     RESULT WtatParamRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | paramNotAvailable
 *         | unspecified
 *     }
 *     CODE local: 74
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtatParamArg, WtatParamRes>}
 * @implements {OPERATION<WtatParamArg, WtatParamRes>}
 */
export
const wtatParamEnq: OPERATION<WtatParamArg, WtatParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtatParamArg,
        "&ResultType": _decode_WtatParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtatParamArg,
        "&ResultType": _encode_WtatParamRes,
    },
    "&Errors": [ invalidServedUserNr, paramNotAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 74 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

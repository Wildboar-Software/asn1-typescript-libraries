/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CtatParamArg, _decode_CtatParamArg, _encode_CtatParamArg } from "../CT-Authentication-Operations/CtatParamArg.ta.mjs";
// export { CtatParamArg, _decode_CtatParamArg, _encode_CtatParamArg } from "../CT-Authentication-Operations/CtatParamArg.ta.mjs";
import { CtatParamRes, _decode_CtatParamRes, _encode_CtatParamRes } from "../CT-Authentication-Operations/CtatParamRes.ta.mjs";
// export { CtatParamRes, _decode_CtatParamRes, _encode_CtatParamRes } from "../CT-Authentication-Operations/CtatParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
// export { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
import { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";
// export { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";


/**
 * @summary ctatParamEnq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ctatParamEnq OPERATION ::= {
 *     -- from Home PINX to Authentication Server PINX --
 *     ARGUMENT CtatParamArg
 *     RESULT CtatParamRes
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
 * @type {OPERATION<CtatParamArg, CtatParamRes>}
 * @implements {OPERATION<CtatParamArg, CtatParamRes>}
 */
export
const ctatParamEnq: OPERATION<CtatParamArg, CtatParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CtatParamArg,
        "&ResultType": _decode_CtatParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CtatParamArg,
        "&ResultType": _encode_CtatParamRes,
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

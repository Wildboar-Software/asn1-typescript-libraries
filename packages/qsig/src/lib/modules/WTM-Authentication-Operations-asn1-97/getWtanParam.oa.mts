/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { WtanParamArg, _decode_WtanParamArg, _encode_WtanParamArg } from "../WTM-Authentication-Operations-asn1-97/WtanParamArg.ta.mjs";
// export { WtanParamArg, _decode_WtanParamArg, _encode_WtanParamArg } from "../WTM-Authentication-Operations-asn1-97/WtanParamArg.ta.mjs";
import { WtanParamRes, _decode_WtanParamRes, _encode_WtanParamRes } from "../WTM-Authentication-Operations-asn1-97/WtanParamRes.ta.mjs";
// export { WtanParamRes, _decode_WtanParamRes, _encode_WtanParamRes } from "../WTM-Authentication-Operations-asn1-97/WtanParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../WTM-Authentication-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../WTM-Authentication-Operations-asn1-97/notAuthorized.oa.mjs";
import { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
// export { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
import { temporarilyUnavailable } from "../WTM-Authentication-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../WTM-Authentication-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary getWtanParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getWtanParam OPERATION ::= {
 *     -- from Visitor PINX to Home PINX --
 *     ARGUMENT WtanParamArg
 *     RESULT WtanParamRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | paramNotAvailable
 *         | temporarilyUnavailable
 *         | unspecified
 *     }
 *     CODE local: 75
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtanParamArg, WtanParamRes>}
 * @implements {OPERATION<WtanParamArg, WtanParamRes>}
 */
export
const getWtanParam: OPERATION<WtanParamArg, WtanParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtanParamArg,
        "&ResultType": _decode_WtanParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtanParamArg,
        "&ResultType": _encode_WtanParamRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, paramNotAvailable, temporarilyUnavailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 75 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

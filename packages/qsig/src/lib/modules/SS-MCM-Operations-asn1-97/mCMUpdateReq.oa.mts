/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { MCMUpdateReqArg, _decode_MCMUpdateReqArg, _encode_MCMUpdateReqArg } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqArg.ta.mjs";
// export { MCMUpdateReqArg, _decode_MCMUpdateReqArg, _encode_MCMUpdateReqArg } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqArg.ta.mjs";
import { MCMUpdateReqRes, _decode_MCMUpdateReqRes, _encode_MCMUpdateReqRes } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqRes.ta.mjs";
// export { MCMUpdateReqRes, _decode_MCMUpdateReqRes, _encode_MCMUpdateReqRes } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
// export { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
// export { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary mCMUpdateReq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMUpdateReq OPERATION ::= {
 *     ARGUMENT MCMUpdateReqArg
 *     RESULT MCMUpdateReqRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 82
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMUpdateReqArg, MCMUpdateReqRes>}
 * @implements {OPERATION<MCMUpdateReqArg, MCMUpdateReqRes>}
 */
export
const mCMUpdateReq: OPERATION<MCMUpdateReqArg, MCMUpdateReqRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMUpdateReqArg,
        "&ResultType": _decode_MCMUpdateReqRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMUpdateReqArg,
        "&ResultType": _encode_MCMUpdateReqRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 82 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
